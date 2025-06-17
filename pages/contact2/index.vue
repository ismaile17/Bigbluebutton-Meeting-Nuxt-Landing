<template>
  <div class="content-wrapper">
    <HeadersHeader6 />
    <ContactContact2Hero />
    <LazyContactContact2ContactInfo />
  </div>
  <FootersFooter5 />
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

useSeoMeta({
  title: t('seo_contact_title'),
  description: t('seo_contact_description'),
});
</script>

<style lang="scss" scoped></style>
