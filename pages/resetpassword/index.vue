<template>
  <div class="content-wrapper">
    <HeadersHeader6 />
    <AuthResetPassword />
  </div>
  <FootersFooter5 />
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

useSeoMeta({
  title: t('seo_reset_password_title'),
  description: t('seo_reset_password_description'),
});
</script>

<style lang="scss" scoped></style>
