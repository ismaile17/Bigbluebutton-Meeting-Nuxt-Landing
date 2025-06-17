<template>
  <section class="wrapper bg-light angled upper-end">
    <div class="container py-14 py-md-16">
      <div class="row gy-10 gx-lg-8 gx-xl-12 mb-16 align-items-center">
        <div class="col-lg-7 position-relative">
          <div
            class="shape bg-dot primary rellax w-18 h-18"
            data-rellax-speed="1"
            style="top: 0; left: -1.4rem; z-index: 0"
          ></div>
          <div class="row gx-md-5 gy-5">
            <div class="col-md-6">
              <figure class="rounded mt-md-10 position-relative">
                <nuxt-img
                  src="/assets/img/photos/features/contact.png"
                  srcset="/assets/img/photos/features/contact.png 2x"
                  alt="photo"
                />
              </figure>
            </div>
            <!--/column -->
            <div class="col-md-6">
              <div class="row gx-md-5 gy-5">
                <div class="col-md-12 order-md-2">
                  <figure class="rounded">
                    <nuxt-img
                      src="/assets/img/photos/features/contact2.png"
                      srcset="/assets/img/photos/features/contact2.png 2x"
                      alt="photo"
                    />
                  </figure>
                </div>
                <!--/column -->
                <div class="col-md-10">
                  <div class="card bg-pale-primary text-center counter-wrapper">
                    <div class="card-body py-11">
                      <h3 class="counter text-nowrap">
                        <CommonCounter
                          parentClass=""
                          :min="0"
                          :max="5000"
                          :time="1500"
                        />+
                      </h3>
                      <p class="mb-0">{{ $t('contact_users') }}</p>
                    </div>
                    <!--/.card-body -->
                  </div>
                  <!--/.card -->
                </div>
                <!--/column -->
              </div>
              <!--/.row -->
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/column -->
        <div class="col-lg-5">
          <h2 class="display-4 mb-8">
            {{ $t('contact_heading') }}
          </h2>
          
          <!-- İletişim Bilgileri -->
          <div
            v-for="item in contactInfo"
            :key="item.id"
            class="d-flex flex-row mb-4"
          >
            <div class="me-4">
              <div class="icon text-primary fs-28">
                <i :class="item.iconClass"></i>
              </div>
            </div>
            <div>
              <h5 class="mb-1">{{ item.title }}</h5>

              <address v-if="item.address">
                {{ item.address.line1 }}<br class="d-none d-md-block" />{{
                  item.address.line2
                }}
              </address>

              <p v-if="item.content">{{ item.content }}</p>
              <a v-if="item.mail" :href="item.mail" class="link-body">{{
                item.mail
              }}</a>
            </div>
          </div>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="row">
        <div class="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
          <h2 class="display-4 mb-3 text-center">{{ $t('contact_form_title') }}</h2>
          <p class="lead text-center mb-10">
            {{ $t('contact_form_subtitle') }}
          </p>
          
          <!-- Başarı ve Hata Mesajları -->
          <div v-if="landingContactStore.contact.successMessage" class="alert alert-success mt-4" role="alert">
            {{ landingContactStore.contact.successMessage }}
          </div>
          <div v-if="landingContactStore.contact.errorMessage" class="alert alert-danger mt-4" role="alert">
            {{ landingContactStore.contact.errorMessage }}
          </div>
          
          <!-- Yükleniyor Göstergesi -->
          <div v-if="landingContactStore.contact.loading" class="text-center mb-4">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Yükleniyor...</span>
            </div>
          </div>
          
          <form
            class="contact-form needs-validation"
            @submit.prevent="handleSubmit"
          >
            <div class="messages"></div>
            <div class="row gx-4">
              <div class="col-md-6">
                <div class="form-floating mb-4">
                  <input
                    type="text"
                    v-model="form.name"
                    name="name"
                    class="form-control"
                    placeholder="Jane"
                    required
                  />
                  <label>{{ $t('contact_form_name_label') }}</label>
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">
                    Lütfen bu alanı doldurun.
                  </div>
                </div>
              </div>
              <!-- /column -->
              <div class="col-md-6">
                <div class="form-floating mb-4">
                  <input
                    type="text"
                    v-model="form.surname"
                    name="surname"
                    class="form-control"
                    placeholder="Doe"
                    required
                  />
                  <label>{{ $t('contact_form_surname_label') }}</label>
                  <div class="valid-feedback">Harika</div>
                  <div class="invalid-feedback">
                    Lütfen bu alanı doldurun.
                  </div>
                </div>
              </div>
              <!-- /column -->
              <div class="col-md-6">
                <div class="form-floating mb-4">
                  <input
                    type="email"
                    v-model="form.email"
                    name="email"
                    class="form-control"
                    placeholder="jane.doe@example.com"
                    required
                  />
                  <label>{{ $t('contact_form_email_label') }}</label>
                  <div class="valid-feedback">Harika</div>
                  <div class="invalid-feedback">
                    Lütfen bu alanı doldurun.
                  </div>
                </div>
              </div>
              <!-- /column -->
              <div class="col-md-6">
                <div class="form-select-wrapper mb-4">
                  <select
                    v-model="form.aboutYou"
                    class="form-select"
                    id="form-select"
                    name="aboutYou"
                    required
                  >
                    <option selected disabled value="">
                      {{ $t('contact_form_department_label') }}
                    </option>
                    <option value="Eğitmen">{{ $t('contact_form_department_option1') }}</option>
                    <option value="Firma Çalışanı">{{ $t('contact_form_department_option2') }}</option>
                    <option value="Firma Sahibi">{{ $t('contact_form_department_option3') }}</option>
                  </select>
                  <div class="valid-feedback">Harika</div>
                  <div class="invalid-feedback">
                    Lütfen bu alanı doldurun.
                  </div>
                </div>
              </div>
              <!-- /column -->
              <div class="col-12">
                <div class="form-floating mb-4">
                  <textarea
                    v-model="form.message"
                    name="message"
                    class="form-control"
                    placeholder="Your message"
                    style="height: 150px"
                    required
                  ></textarea>
                  <label>{{ $t('contact_form_message_label') }}</label>
                  <div class="valid-feedback">Harika</div>
                  <div class="invalid-feedback">
                    Lütfen bu alanı doldurun.
                  </div>
                </div>
              </div>
              <!-- /column -->
              <div class="col-12 text-center">
                <input
                  type="submit"
                  class="btn btn-primary rounded-pill btn-send mb-3"
                  :value="$t('contact_form_submit')"
                />
                <p class="text-muted">
                  {{ $t('contact_form_required_note') }}
                </p>
              </div>
              <!-- /column -->
            </div>
            <!-- /.row -->
          </form>
          <!-- /form -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLandingContactStore } from '@/stores/landingContact'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const landingContactStore = useLandingContactStore()

// İletişim bilgilerini tanımlama
const contactInfo = ref([
  {
    id: 1,
    iconClass: 'bi bi-geo-alt',
    title: 'Adresimiz',
    address: {
      line1: '1234 Sokak',
      line2: 'İstanbul, Türkiye'
    },
    mail: 'mailto:info@example.com'
  },
  {
    id: 2,
    iconClass: 'bi bi-telephone',
    title: 'Telefon',
    content: '+90 123 456 7890'
  },
  {
    id: 3,
    iconClass: 'bi bi-envelope',
    title: 'Email',
    mail: 'mailto:support@example.com'
  }
  // Diğer iletişim bilgilerini buraya ekleyebilirsiniz
])

const form = ref({
  name: '',
  surname: '',
  email: '',
  aboutYou: '',
  message: '',
})

const handleSubmit = async () => {
  try {
    await landingContactStore.addContact(form.value)
    // Formu temizlemek isterseniz:
    form.value = {
      name: '',
      surname: '',
      email: '',
      aboutYou: '',
      message: '',
    }
  } catch (error) {
    // Hataları burada yakalayabilirsiniz (opsiyonel)
    console.error('Form gönderme hatası:', error)
  }
}
</script>

<style lang="scss" scoped>
/* İhtiyaçlarınıza göre stil ekleyebilirsiniz */
.alert {
  margin-top: 1rem;
}
</style>
