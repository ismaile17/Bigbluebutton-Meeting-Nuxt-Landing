<template>
  <li v-for="item in menuItems" :key="item.id">
    <nuxt-link :to="getRoute(item.link)">{{ $t(item.text) }}</nuxt-link>
  </li>
  <CommonScrolltop />
</template>

<script setup>
import { useRoute } from 'vue-router';

const menuItems = ref([
  { id: 3, text: "privacy_policy", link: "terms" },
  { id: 4, text: "terms_and_conditions", link: "terms" },
  { id: 5, text: "about_sss", link: "about2" },
]);

const getRoute = (link) => {
  const route = useRoute();
  const currentLocale = route.path.split('/')[1];
  return `/${currentLocale}/${link}`;
};
</script>

<style lang="scss" scoped></style>
