<template>
  <div class="content-wrapper">
    <HeadersHeader6 />
    <AuthSignin1 />
  </div>
  <FootersFooter5 />
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

useSeoMeta({
  title: t('seo_signin_title'),
  description: t('seo_signin_description'),
});
</script>

<style lang="scss" scoped></style>
