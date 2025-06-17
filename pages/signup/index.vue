<template>
  <div class="content-wrapper">
    <HeadersHeader6 />
    <AuthSignup1 />
  </div>
  <FootersFooter5 />
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

useSeoMeta({
  title: t('seo_signup_title'),
  description: t('seo_signup_description'),
});
</script>

<style lang="scss" scoped></style>
