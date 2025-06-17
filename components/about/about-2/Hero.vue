<template>
  <section class="wrapper bg-soft-primary">
    <div class="container pt-10 pb-20 pt-md-14 pb-md-22 text-center">
      <div class="row">
        <div class="col-xl-5 mx-auto mb-6">
          <h1 class="display-1 mb-3">{{ $t('faq_section_title') }}</h1>
          <p class="lead mb-0">
            {{ $t('faq_section_subtitle') }}
          </p>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
</script>

<style lang="scss" scoped></style>
