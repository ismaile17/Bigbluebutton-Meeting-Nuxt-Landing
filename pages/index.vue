<template>
  <div class="content-wrapper">
    <HeadersHeader6 />
    <HomesHome5Hero />
    <HomesHome5Features />
    <HomesHome5Process />
    <!-- <HomesHome5Testimonials /> -->
    <HomesCommonPricingPricing1 />
    <HomesHome5Cta />
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
