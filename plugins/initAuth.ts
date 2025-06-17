// plugins/initAuth.ts
import { useAuthStore } from '@/stores/auth'
import JwtService from '@/services/JwtService'

export default defineNuxtPlugin(async () => {
  const authStore = useAuthStore()
  const token = JwtService.getToken()
  if (token) {
    authStore.token = token
  }
})
