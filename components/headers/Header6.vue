<template>
  <header class="wrapper bg-soft-primary">
    <nav
      :class="`navbar navbar-expand-lg center-nav transparent navbar-light ${
        addClass2 ? 'fixed navbar-clone' : ''
      } ${addClass ? 'navbar-clone navbar-stick' : ' navbar-unstick'} `"
    >
      <div class="container flex-lg-row flex-nowrap align-items-center">
        <div class="navbar-brand w-100">
          <nuxt-link :to="`/${currentLocale}/`">
            <nuxt-img
              src="/assets/img/logo.png"
              srcset="/assets/img/logo@2x.png 2x"
              alt="photo"
            />
          </nuxt-link>
        </div>
        <div
          id="ofCanvasBody"
          class="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
        >
          <div class="offcanvas-header d-lg-none">
            <h3 class="text-white fs-30 mb-0">Meeting2.Me</h3>
            <button
              type="button"
              class="btn-close btn-close-white"
              @click="menuClose"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body ms-lg-auto d-flex flex-column h-100">
            <ul class="navbar-nav">
              <HeadersComponentsMenu />
            </ul>
          </div>
          <!-- /.offcanvas-body -->
        </div>
        <!-- /.navbar-collapse -->
        <div class="navbar-other w-100 d-flex ms-auto">
          <ul class="navbar-nav flex-row align-items-center ms-auto">
            <li class="nav-item dropdown language-select text-uppercase">
              <HeadersComponentsLanguage />
            </li>
            <!-- Kullanıcı giriş yapmışsa butonları güncelle -->
            <li v-if="!isLoggedIn" class="nav-item">
              <nuxt-link :to="`/${currentLocale}/signin`" class="nav-link">
                {{ $t('signin') }}
              </nuxt-link>
            </li>
            <li v-if="!isLoggedIn" class="nav-item d-none d-md-block">
              <nuxt-link :to="`/${currentLocale}/signup`" class="btn btn-sm btn-primary rounded">
                {{ $t('signup') }}
              </nuxt-link>
            </li>

            <!-- Kullanıcı giriş yapmışsa çıkış yap butonu (giriş yap sayfasında) -->
            <li v-if="isLoggedIn " class="nav-item">
              <nuxt-link to="/" class="nav-link" @click.prevent="handleLogout">
                {{ $t('signup_logout_button') }}
              </nuxt-link>
            </li>

            <!-- Kullanıcı giriş yapmışsa panel butonu (kayıt ol sayfasında) -->
            <li v-if="isLoggedIn" class="nav-item">
              <nuxt-link :to="`/${currentLocale}/pricing`" class="btn btn-sm btn-primary rounded">
                {{ $t('panel') }}
              </nuxt-link>
            </li>
          </ul>
          <!-- /.navbar-nav -->
        </div>
        <!-- /.navbar-other -->
        <div
          id="offcanvasBackdrop"
          class="offcanvas-backdrop fade"
          style="display: none"
        ></div>
      </div>
      <!-- /.container -->
    </nav>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter, useRoute } from 'vue-router';
import { useAuthStore } from '@/stores/auth'; // Kullanıcı bilgilerini almak için auth store

const addClass = ref(false);
const addClass2 = ref(false);

const handleScroll = () => {
  addClass2.value = window.scrollY >= 200;
  addClass.value = window.scrollY >= 300;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

const { locale } = useI18n();
const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();

const currentLocale = ref(locale.value);
route.fullPath.split('/')[1] && (currentLocale.value = route.fullPath.split('/')[1]);

const isActiveMenu = (menu) => {
  const pathName = route.path.split('/')[2];
  return menu === pathName;
};

// Kullanıcı giriş yapmış mı kontrolü
const isLoggedIn = computed(() => !!authStore.user);

// Çıkış yapma işlemi
const handleLogout = async () => {
  await authStore.logout();
  router.push(`/${currentLocale.value}/signin`);
};
</script>

<style lang="scss" scoped>
.btn-primary {
  background-color: #0a74da;
  color: #ffffff;
}

.logout-btn {
  font-size: 10px; /* Küçük ve zor tıklanan logout butonu */
  padding: 5px 10px;
  background-color: #f5f5f5;
  color: #333;
  border: 1px solid #ccc;
  cursor: pointer;
}
</style>
