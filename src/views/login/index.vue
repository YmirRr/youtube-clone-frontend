<template>
  <div class="gspRov">
    <h2>Login to your account</h2>
    <form @submit.prevent="handleSubmit">
      <ul v-if="errors" class="errors">
        <li v-for="(error, index) in errors" :key="index">{{`${error.field} ${error.message}`}}</li>
      </ul>
      <input v-model="user.email" type="email" placeholder="email" />
      <input v-model="user.password" type="password" placeholder="password" />
      <div class="action input-group">
        <span class="pointer">Signup instead</span>
        <button :disabled="isLoading">Login</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { login } from '@/api/user'
import { defineComponent, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// import { useStore } from '@/store'
import { useUser } from '@/store'

const useLogin = () => {
  const router = useRouter()
  // const store = useStore()
  const { setUser } = useUser()
  const route = useRoute()
  // store.state.count
  const user = reactive({
    email: 'ymir1660418573@sina.com',
    password: '123456'
  })
  const errors: any = ref([])
  const isLoading = ref(false)
  const handleSubmit = async () => {
    isLoading.value = true
    errors.value = []
    try {
      const { data } = await login(user)
      // store.commit('setUser', data.user)
      setUser(data.user)
      const redirect = (route.query.redirect || '/') as string
      console.log(data)
      router.push(redirect)
    } catch (err: any) {
      console.log(err)
      if (err.response.status === 422) {
        errors.value = err.response.data.detail
      }
    }
    isLoading.value = false
  }
  return {
    user,
    handleSubmit,
    errors,
    isLoading
  }
}

export default defineComponent({
  name: 'login-page',
  setup () {
    return {
      ...useLogin()
    }
  }
})
</script>
