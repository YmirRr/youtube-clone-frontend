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
import { defineComponent, reactive, ref } from '@vue/runtime-core'
import { useRouter } from 'vue-router'

const useLogin = () => {
  const router = useRouter()
  const user = reactive({
    email: 'ymir1660418573@sina.com',
    password: '123456'
  })
  const errors = ref([])
  const isLoading = ref(false)
  const handleSubmit = async () => {
    isLoading.value = true
    errors.value = []
    try {
      const { data } = await login(user)
      console.log(data)
      router.push({
        name: 'home'
      })
    } catch (err: any) {
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
  name: 'login-index-page',
  setup () {
    return {
      ...useLogin()
    }
  }
})
</script>
