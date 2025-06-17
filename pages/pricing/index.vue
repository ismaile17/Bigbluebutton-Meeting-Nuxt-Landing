<template>
  <div class="content-wrapper">
    <HeadersHeader6 />
    <PricingHero />
    <section class="wrapper">
      <div class="container pb-14 pb-md-16">
        <Pricing />
        <PricingFeatures />
        <PricingFaq />
        <!-- <PricingTestimonials /> -->
      </div>
    </section>
    <PricingCta />
  </div>
  <FootersFooter5 />
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

useSeoMeta({
  title: t('seo_pricing_title'),
  description: t('seo_pricing_description'),
});
</script>

<style lang="scss" scoped></style>
