<template>
  <div class="content-wrapper">
    <HeadersHeader6 />
    <AboutAbout2Hero />
    <AboutAbout2Skills />
  </div>
  <FootersFooter5 />
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

useSeoMeta({
  title: t('seo_homepage_title'),
  description: t('seo_homepage_description'),
});
</script>

<style lang="scss" scoped></style>
