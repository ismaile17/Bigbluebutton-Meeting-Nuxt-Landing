<template>
  <nuxt-link
    class="nav-link"
    :to="currentLocale ? `/${currentLocale}/` : '/'"
    active-class="active"
    exact-active-class="active"
    data-bs-auto-close="outside"
    aria-expanded="false"
  >{{ $t('homepage') }}</nuxt-link>

  <nuxt-link
    class="nav-link"
    :to="currentLocale ? `/${currentLocale}/about2` : '/about2'"
    active-class="active"
    exact-active-class="active"
    data-bs-auto-close="outside"
    aria-expanded="false"
  >{{ $t('about_faq') }}</nuxt-link>

  <nuxt-link
    class="nav-link"
    :to="currentLocale ? `/${currentLocale}/pricing` : '/pricing'"
    active-class="active"
    exact-active-class="active"
    data-bs-auto-close="outside"
    aria-expanded="false"
  >{{ $t('pricing') }}</nuxt-link>

  <nuxt-link
    class="nav-link"
    :to="currentLocale ? `/${currentLocale}/contact2` : '/contact2'"
    active-class="active"
    exact-active-class="active"
    data-bs-auto-close="outside"
    aria-expanded="false"
  >{{ $t('contact') }}</nuxt-link>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
// Eğer menü verileriniz daha karmaşıksa, onları burada kullanabilirsiniz
// import { homepage, contactx, aboutx, pricingx } from '~/data/menu';

const { locale } = useI18n();
const route = useRoute();

const currentLocale = computed(() => {
  const pathSegments = route.fullPath.split('/');
  return pathSegments[1] || locale.value;
});
</script>

<style lang="scss" scoped>
.nav-link {
  &.active {
    color: #0A74DA; /* Aktif linkin rengini buradan ayarlayabilirsiniz */
  }
}
</style>
