<template>
  <section style="background-image: url(/assets/img/photos/bgx1.png)">
    <div class="container pt-17 pb-20 pt-md-5 pb-md-20 text-center">
      <!-- /.row -->
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
              <template v-if="!isLoggedIn">
                <!-- Kayıt Formu -->
                <h2 class="mb-3 text-start">{{ $t('signup_title') }}</h2>
                <p class="lead mb-6 text-start">{{ $t('signup_subtitle') }}</p>
                <form @submit.prevent="handleRegister" class="text-start mb-3">
                  <div class="form-floating mb-4">
                    <input v-model="fullName" type="text" class="form-control" placeholder="Name" required />
                    <label>{{ $t('signup_name_label') }}</label>
                  </div>
                  <div class="form-floating mb-4">
                    <input v-model="email" type="email" class="form-control" placeholder="Email" required />
                    <label>{{ $t('signup_email_label') }}</label>
                  </div>
                  <div class="form-floating mb-4">
                    <input v-model="phone" type="tel" class="form-control" placeholder="Phone" />
                    <label>{{ $t('signup_phone_label') }}</label>
                  </div>
                  <div class="form-floating password-field mb-4">
                    <input v-model="password" type="password" autocomplete="password" class="form-control" placeholder="Password" required />
                    <span class="password-toggle"><i class="uil uil-eye"></i></span>
                    <label>{{ $t('signup_password_label') }}</label>
                  </div>
                  <div class="form-floating password-field mb-4">
                    <input v-model="confirmPassword" type="password" autocomplete="password" class="form-control" placeholder="Confirm Password" required />
                    <span class="password-toggle"><i class="uil uil-eye"></i></span>
                    <label>{{ $t('signup_confirm_password_label') }}</label>
                  </div>
                  <p v-if="passwordError" class="error-text">{{ $t('signup_password_mismatch') }}</p>
                  <button type="submit" class="btn btn-primary rounded-pill btn-login w-100 mb-2" :disabled="passwordError">
                    {{ $t('signup_button') }}
                  </button>
                </form>

                <p v-if="successMessage" class="success-text">{{ successMessage }}</p>
              </template>

              <template v-else>
                <!-- Giriş yapılmışsa gösterilecek mesaj ve çıkış butonu -->
                <p class="error-text">{{ $t('signup_logged_in_message') }}</p>
                <button @click="handleLogout" class="btn btn-primary">{{ $t('signup_logout_button') }}</button>
              </template>
              <div v-if="!isLoggedIn">
                <p class="mb-0">
                  {{ $t('signup_already_have_account') }}
                  <nuxt-link :to="`/${currentLocale}/signin`" class="hover">{{ $t('signup_signin') }}</nuxt-link>
                </p>
                <!-- <div class="divider-icon my-4">{{ $t('signup_or') }}</div> -->
                <nav class="nav social justify-content-center text-center">
                  <!-- <AuthSocials /> -->
                </nav>
              </div>
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

<script setup>
import { ref, computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from '#imports'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n();
const currentLocale = locale.value;
const router = useRouter();
const authStore = useAuthStore();

const email = ref('');
const fullName = ref('');
const phone = ref('');
const password = ref('');
const confirmPassword = ref('');
const successMessage = ref(''); // Başarı mesajını tutacak reaktif değişken

// Kullanıcının giriş yapmış olup olmadığını kontrol et
const isLoggedIn = computed(() => {
  return authStore.user;
});

// Şifrelerin eşleşip eşleşmediğini kontrol eden bir computed property
const passwordError = computed(() => {
  return password.value !== confirmPassword.value && confirmPassword.value.length > 0;
});

const handleRegister = async () => {
  if (passwordError.value) {
    return;
  }
  
  try {
    await authStore.register(email.value, fullName.value, phone.value, password.value);
    successMessage.value = 'Kayıt başarılı! Giriş yapabilirsiniz, yönlendiriliyorsunuz...';
    setTimeout(() => {
      router.push(`/${currentLocale}/signin`);
    }, 2000);
    
  } catch (err) {
    console.error('Kayıt hatası:', err);
  }
}

const handleLogout = async () => {
  await authStore.logout();
  router.push(`/${currentLocale}/signin`);
}
</script>

<style lang="scss" scoped>
.btn-primary {
    background-color: #0A74DA;
    color: #FFFFFF;
}
.error-text {
    color: red;
    margin-top: 10px;
}
.success-text {
    color: green;
    margin-top: 10px;
}
</style>
