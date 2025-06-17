<template>
  <section class="wrapper bg-soft-primary">
    <div class="container pt-10 pb-12 pt-md-14 pb-md-2 text-center">
      <div class="row">
        <div class="col-md-10 col-lg-8 col-xl-7 col-xxl-20 mx-auto">
          <h1 class="display-1 mb-3">{{ $t('terms_conditions_heading') }}</h1>
          <nav class="d-inline-block" aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <nuxt-link :to="`/${currentLocale}/`">{{ $t('homepage') }}</nuxt-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                {{ $t('terms_conditions_heading') }}
              </li>
            </ol>
          </nav>
          <!-- /nav -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();
const currentLocale = locale.value;
</script>

<style lang="scss" scoped></style>
