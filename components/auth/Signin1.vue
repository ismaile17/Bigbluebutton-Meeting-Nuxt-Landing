<template>
  <section style="background-image: url(/assets/img/photos/bgx1.png)">
    <div class="container pt-17 pb-20 pt-md-5 pb-md-20 text-center">
      <!-- İçerik -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /section -->
  <section class="wrapper bg-light">
    <div class="container pb-14 pb-md-16">
      <div class="row">
        <div class="col-lg-7 col-xl-6 col-xxl-5 mx-auto mt-n20">
          <div class="card">
            <div class="card-body p-11 text-center">
              <h2 class="mb-3 text-start">{{ $t('signin_title') }}</h2>
              <p class="lead mb-6 text-start">
                {{ $t('signin_subtitle') }}
              </p>
              <form @submit.prevent="handleLogin" class="text-start mb-3">
                <div class="form-floating mb-4">
                  <input
                    v-model="email"
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    required
                  />
                  <label>{{ $t('signin_email_label') }}</label>
                </div>
                <div class="form-floating password-field mb-4">
                  <input
                    v-model="password"
                    :type="passwordVisible ? 'text' : 'password'"
                    autocomplete="current-password"
                    class="form-control"
                    placeholder="Password"
                    required
                  />
                  <span class="password-toggle" @click="togglePasswordVisibility">
                    <i :class="passwordVisible ? 'uil uil-eye-slash' : 'uil uil-eye'"></i>
                  </span>
                  <label>{{ $t('signin_password_label') }}</label>
                </div>
                <button type="submit" class="btn btn-primary rounded-pill btn-login w-100 mb-2">
                  {{ $t('signin_button') }}
                </button>
                <p v-if="error" class="error">{{ error }}</p>
              </form>
              <!-- /form -->
              <p class="mb-1">
                <nuxt-link :to="`/${currentLocale}/resetpassword`" class="hover">{{ $t('signin_forgot_password') }}</nuxt-link>
              </p>

              <p class="mb-0">
                {{ $t('signin_no_account') }}
                <nuxt-link :to="`/${currentLocale}/signup`" class="hover">
                  {{ $t('signin_signup') }}
                </nuxt-link>
              </p>
              <!-- <div class="divider-icon my-4">{{ $t('signin_or') }}</div> -->
              <nav class="nav social justify-content-center text-center">
                <!-- <AuthSocials /> -->
              </nav>
              <!--/.social -->
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
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

import { useAuthStore } from '@/stores/auth'
import { useRouter } from '#imports' // Nuxt 3'te `#imports` kullanın
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const currentLocale = locale.value

const email = ref('')
const password = ref('')
const error = ref<string | null>(null)
const passwordVisible = ref(false)

const authStore = useAuthStore()
const router = useRouter()

const handleLogin = async () => {
  try {
    await authStore.login(email.value, password.value)
    router.push('/')
  } catch (err: any) {
    error.value = err.message
  }
}

const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value
}
</script>

<style lang="scss" scoped>
.btn-primary {
    background-color: #0A74DA; /* Koyu mavi renk kodu */
    color: #FFFFFF; /* Yazı rengini beyaz yapabilirsiniz */
}
.error {
    color: red;
    margin-top: 10px;
}
.password-toggle {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
}
</style>
