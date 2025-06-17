<template>
  <div class="content-wrapper">
    <HeadersHeader6 bg="bg-gray" />
    <AboutAbout1Hero />
    <AboutAbout1Intro />
    <AboutAbout1Process />
    <AboutAbout1Testimonials />
    <AboutAbout1Team />
    <AboutAbout1Facts />
    <AboutAbout1Contact />
  </div>

  <FootersFooter12 />
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

useSeoMeta({
  title: t('seo_about_title'),
  description: t('seo_about_description'),
});
</script>

<style lang="scss" scoped></style>
