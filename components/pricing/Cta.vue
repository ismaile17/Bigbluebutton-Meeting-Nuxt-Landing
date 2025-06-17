<template>
  <section
    class="wrapper image-wrapper bg-auto no-overlay bg-image text-center mb-5 mb-md-16 bg-map"
    style="background-image: url(/assets/img/map.png)"
  >
    <div class="container py-md-2">
      <div class="row">
        <div class="col-lg-6 col-xl-5 mx-auto">
          <h2 class="display-4 mb-3 text-center">{{ $t('join_community_title') }}</h2>
          <p class="lead mb-5 px-md-16 px-lg-3">
            {{ $t('join_community_subtitle') }}
          </p>
          <nuxt-link :to="locale ? `/${locale}/signup` : '/signup'" class="btn btn-primary rounded-pill">
            {{ $t('join_community_button') }}
          </nuxt-link>
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
</script>

<style lang="scss" scoped></style>
