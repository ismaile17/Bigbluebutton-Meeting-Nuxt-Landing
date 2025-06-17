// plugins/axios.ts
import axios from 'axios'
import JwtService from '@/services/JwtService'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  axios.defaults.baseURL = config.public.apiBase

  // İstek interceptor'ı ekleyin
  axios.interceptors.request.use((request) => {
    const token = JwtService.getToken()
    if (token) {
      request.headers.Authorization = `Bearer ${token}`
    }
    return request
  }, (error) => {
    return Promise.reject(error)
  })

  // Axios'u global olarak sağlayın
  return {
    provide: {
      axios,
    }
  }
})
