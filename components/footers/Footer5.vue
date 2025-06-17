<template>
  <footer class="bg-dark text-inverse">
    <div class="container py-13 py-md-15">
      <div class="row gy-6 gy-lg-0">
        <!-- Logo ve Sosyal Medya -->
        <div class="col-md-4 col-lg-3">
          <div class="widget">
            <nuxt-img
              class="mb-4"
              src="/assets/img/logo-light.png"
              srcset="/assets/img/logo-light@2x.png 2x"
              alt="Logo"
            />
            <p class="mb-4">
              © {{ new Date().getFullYear() }} MEETING2.ME
              <br class="d-none d-lg-block" />{{ t('footer_copyright') }}
            </p>
            <nav class="nav social social-white">
              <FootersComponentsSocials />
            </nav>
            <!-- /.social -->
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->

        <!-- Adres Bilgileri -->
        <div class="col-md-4 col-lg-3">
          <div class="widget">
            <h4 class="widget-title text-white mb-3">{{ t('footer_address_title') }}</h4>
            <address class="pe-xl-15 pe-xxl-17">
              {{ t('footer_address') }}
            </address>
            <!-- <a href="mailto:#">info@email.com</a><br /> -->
            <!-- 00 (123) 456 78 90 -->
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->

        <!-- Hakkımızda Bağlantıları -->
        <div class="col-md-4 col-lg-3">
          <div class="widget">
            <h4 class="widget-title text-white mb-3">{{ t('footer_about_title') }}</h4>
            <ul class="list-unstyled mb-0">
              <FootersComponentsLinks />
            </ul>
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->

        <!-- Newsletter Formu -->
        <div class="col-md-12 col-lg-3">
          <div class="widget">
            <h4 class="widget-title text-white mb-3">{{ t('footer_newsletter_title') }}</h4>
            <p class="mb-5">
              {{ t('footer_newsletter_text') }}
            </p>
            <div class="newsletter-wrapper">
              <!-- Kampanya Email Formu -->
              <form @submit.prevent="handleCampaignSubmit" class="validate dark-fields">
                <div class="mc-field-group input-group form-floating">
                  <input
                    type="email"
                    v-model="campaignForm.email"
                    name="EMAIL"
                    class="required email form-control"
                    :placeholder="t('footer_email_placeholder')"
                    required
                  />
                  <label>{{ t('footer_email_label') }}</label>
                  <input
                    type="submit"
                    :value="t('footer_subscribe_button')"
                    name="subscribe"
                    id="mc-embedded-subscribe2"
                    class="btn btn-primary"
                  />
                </div>
                <div id="mce-responses2" class="clear">
                  <div
                    class="response"
                    id="mce-error-response2"
                    style="display: none"
                  ></div>
                  <div
                    class="response"
                    id="mce-success-response2"
                    style="display: none"
                  ></div>
                </div>
                <div
                  style="position: absolute; left: -5000px"
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc"
                    tabindex="-1"
                    value=""
                  />
                </div>
                <div class="clear"></div>

                <!-- Yükleniyor Göstergesi -->
                <div v-if="landingContactStore.campaign.loading" class="text-center mt-3">
                  <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Yükleniyor...</span>
                  </div>
                </div>
                <!-- Başarı ve Hata Mesajları -->
                <div v-if="landingContactStore.campaign.successMessage" class="alert alert-success mt-3" role="alert">
                  {{ landingContactStore.campaign.successMessage }}
                </div>
                <div v-if="landingContactStore.campaign.errorMessage" class="alert alert-danger mt-3" role="alert">
                  {{ landingContactStore.campaign.errorMessage }}
                </div>
              </form>
              <!-- /.newsletter-wrapper -->
            </div>
            <!-- /.widget -->
          </div>
          <!-- /column -->
        </div>
      </div>
        <!--/.row -->
      </div>
      <!-- /.container -->
    </footer>
    <CommonScrolltop />
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useLandingContactStore } from '@/stores/landingContact'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const landingContactStore = useLandingContactStore()

const campaignForm = reactive({
  email: '',
})

// Kampanya Email Formu Gönderme İşlemi
const handleCampaignSubmit = async () => {
  try {
    console.log('Sending email:', campaignForm.email)

    await landingContactStore.addCampaignEmail(campaignForm)
    // Formu temizlemek
    campaignForm.email = ''
  } catch (error) {
    console.error('Kampanya Email Gönderme Hatası:', error)
  }
}
</script>

<style lang="scss" scoped>
.btn-primary {
    background-color: #0A74DA; /* Koyu mavi renk kodu */
    color: #FFFFFF; /* Yazı rengini beyaz yapabilirsiniz */
}

.alert {
  margin-top: 1rem;
}
</style>
