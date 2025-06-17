<template>
  <section
    class="wrapper image-wrapper bg-auto no-overlay bg-image text-center bg-map"
    style="background-image: url(/assets/img/map.png)"
  >
    <div class="container pt-0 pb-14 pt-md-9 pb-md-12">
      <div class="row">
        <div class="col-lg-10 col-xl-9 col-xxl-8 mx-auto">
          <h3 class="display-4 mb-8 px-lg-12">
            {{ $t('join_us') }}
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div
        class="d-flex justify-content-center"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay=""
      >
        <span>
          <nuxt-link :to="`/${locale}/signup`" class="btn btn-primary rounded mx-1">{{ $t('sign_up') }}</nuxt-link>
        </span>
        <span>
          <nuxt-link :to="`/${locale}/signup`" class="btn btn-orange rounded mx-1">{{ $t('try_for_free') }}</nuxt-link>
        </span>
      </div>
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
</script>

<style lang="scss" scoped>
.btn-orange {
    background-color: #FFA500; /* Turuncu renk kodu */
}

.btn-primary {
    background-color: #0A74DA; /* Koyu mavi renk kodu */
    color: #FFFFFF; /* Yazı rengini beyaz yapabilirsiniz */
}
</style>
