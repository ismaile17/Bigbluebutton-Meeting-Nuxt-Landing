<template>
  <section class="wrapper bg-soft-primary">
    <div class="container pt-10 pb-15 pt-md-14 pb-md-20 text-center">
      <div class="row">
        <div class="col-md-10 col-lg-8 col-xl-8 col-xxl-6 mx-auto mb-13">
          
          <!-- Kullanıcı giriş yapmışsa hoş geldiniz mesajı -->
          <div v-if="isLoggedIn" class="welcome-message mb-4">
            <h2>{{ $t('welcome_message') }} {{ userName }}</h2>
            <p>{{ $t('admin_panel_message') }}</p>
            <nuxt-link :to="`/${currentLocale}/panel`" class="btn btn-orange rounded mx-1">
              {{ $t('go_to_admin_panel') }}
            </nuxt-link>
          </div>

          <!-- Kullanıcı giriş yapmamışsa başlık ve butonlar -->
          <div v-else>
            <h1
              class="display-1 mb-4"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay=""
            >
              {{ $t('section_title') }}
            </h1>
            <p
              class="lead fs-lg px-xl-12 px-xxl-6 mb-7"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="200"
            >
              {{ $t('section_description') }}
            </p>
            <div
              class="d-flex justify-content-center"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay=""
            >
              <span>
                <nuxt-link :to="`/${currentLocale}/signup`" class="btn btn-primary rounded mx-1">
                  {{ $t('signup_button') }}
                </nuxt-link>
              </span>
              <span>
                <nuxt-link :to="`/${currentLocale}/pricing`" class="btn btn-orange rounded mx-1">
                  {{ $t('pricing_button') }}
                </nuxt-link>
              </span>
            </div>
          </div>
          
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import { useAuthStore } from '@/stores/auth'; // Kullanıcı bilgilerini almak için auth store

const { locale } = useI18n();
const route = useRoute();
const authStore = useAuthStore();

const currentLocale = ref(locale.value);
route.fullPath.split('/')[1] && (currentLocale.value = route.fullPath.split('/')[1]);

// Kullanıcı giriş yapmış mı kontrolü
const isLoggedIn = computed(() => !!authStore.user);

// Kullanıcının adını almak
const userName = computed(() => {
  return authStore.user?.value?.fullName || '';
});


// console.log('authStore.user:', authStore.user);
// console.log('userName:', userName.value);
// Başka bir kaynakta kullanıcı bilgileri localStorage'da saklanıyorsa şöyle alabilirsiniz:
// const user = JSON.parse(localStorage.getItem('user') || '{}');
// const userName = user.fullName || '';
</script>

<style lang="scss" scoped>
.btn-orange {
    background-color: #FFA500; /* Turuncu renk kodu */
}

.btn-primary {
    background-color: #0A74DA; /* Koyu mavi renk kodu */
    color: #FFFFFF; /* Yazı rengini beyaz yapabilirsiniz */
}

.welcome-message h2 {
    color: #0A74DA; /* Hoşgeldiniz mesajı için koyu mavi */
}
</style>
