import { defineStore } from 'pinia'
import { User } from '@/api/user'

export const useUser = defineStore('user', {
  state: () => {
    return {
      user: JSON.parse(window.localStorage.getItem('user') || 'null')
    }
  },
  actions: {
    setUser (data: User) {
      this.user = data
      window.localStorage.setItem('user', JSON.stringify(data))
    }
  }
})
