// stores/landingContact.ts
import { defineStore } from 'pinia'
import axios from 'axios'
import { useRuntimeConfig } from '#imports'

interface LandingContactForm {
  name: string
  surname: string
  email: string
  aboutYou: string
  message: string
}

interface CampaignEmailForm {
  email: string
}

export const useLandingContactStore = defineStore('landingContact', {
  state: () => ({
    contact: {
      loading: false,
      successMessage: '',
      errorMessage: '',
    },
    campaign: {
      loading: false,
      successMessage: '',
      errorMessage: '',
    },
  }),
  actions: {
    // İletişim Formu Ekleme
    async addContact(form: LandingContactForm) {
      const config = useRuntimeConfig()
      const baseUrl = `${config.public.apiBase}/landing`

      try {
        this.contact.loading = true
        this.contact.errorMessage = ''
        this.contact.successMessage = ''

        const response = await axios.post(`${baseUrl}/createlandingcontact`, form)

        // Başarılı mesajı sabit bir metin olarak ayarlıyoruz
        this.contact.successMessage = 'Mesajınızı aldık, en kısa sürede sizinle iletişime geçeceğiz.'
      } catch (error: any) {
        console.error('AddContact hatası:', error)
        this.contact.errorMessage = error.response?.data?.message || 'İletişim formu oluşturulurken hata oluştu.'
      } finally {
        this.contact.loading = false
      }
    },

    // Kampanya Emaili Ekleme
    async addCampaignEmail(form: CampaignEmailForm) {
        const config = useRuntimeConfig()
        const baseUrl = `${config.public.apiBase}/landing`
  
        try {
          this.campaign.loading = true
          this.campaign.errorMessage = ''
          this.campaign.successMessage = ''
  
          const response = await axios.post(`${baseUrl}/createcampaignemail`, form)
  
          // Başarılı mesajı sabit bir metin olarak ayarlıyoruz
          this.campaign.successMessage = 'Kaydınız alınmıştır, teşekkürler.'
        } catch (error: any) {
          console.error('AddCampaignEmail hatası:', error)
          this.campaign.errorMessage = error.response?.data?.message || 'Kampanya emaili oluşturulurken hata oluştu.'
        } finally {
          this.campaign.loading = false
        }
      },
  },
})
