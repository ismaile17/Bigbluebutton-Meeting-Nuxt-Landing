// stores/auth.ts
import { defineStore } from 'pinia'
import axios from 'axios'
import JwtService from '@/services/JwtService'
import { useRuntimeConfig } from '#imports' 

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: JwtService.getToken() || null as string | null,
    user: (() => {
      const storedUser = localStorage.getItem('user');
      try {
        return storedUser ? JSON.parse(storedUser) : null;
      } catch (error) {
        console.error("Geçersiz JSON verisi:", storedUser);
        return null;
      }
    })(),    
    returnUrl: null as string | null,
  }),
  actions: {
    async login(email: string, password: string) {
      const config = useRuntimeConfig();
      const baseUrl = `${config.public.apiBase}/account`;
      const model = { email, password };
    
      try {
        const response = await axios.post(`${baseUrl}/login`, model);
    
        this.user = response.data; 
        
        localStorage.setItem('user', JSON.stringify(this.user));
    
      } catch (error: any) {
        console.error('Login hatası:', error);
        throw new Error(error.response?.data?.message || 'Giriş başarısız.');
      }
    },

    async register(email: string, fullName: string, phone: string, password: string) {
      const config = useRuntimeConfig();
      const baseUrl = `${config.public.apiBase}/account/register`;
      const model = { email, fullName, phone, password };
      try {
        const response = await axios.post(baseUrl, model);
        this.user = response.data;
        localStorage.setItem('user', JSON.stringify(this.user));
        JwtService.saveToken(this.user.accessToken); 
      } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Kayıt başarısız.');
      }
    },
    
    logout() {
      this.token = null
      this.user = null
      JwtService.destroyToken()
      localStorage.removeItem('user')
    },
  },
})
