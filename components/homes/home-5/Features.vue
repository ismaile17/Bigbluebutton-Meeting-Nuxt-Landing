<template>
  <section class="wrapper bg-light">
    <div class="container pb-14 pb-md-16 mb-lg-21 mb-xl-2">
      <div class="row gx-0 mb-16 mb-mb-20">
        <div class="col-9 col-sm-10 col-lg-9 mx-auto mt-n15 mt-md-n20">
          <!-- Statik Görüntü -->
          <nuxt-img
            v-if="!gifLoaded"
            class="img-fluid mx-auto rounded feature-image"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay=""
            src="/assets/img/photos/features/feature1-2-static.png"
            srcset="/assets/img/photos/features/feature1-2-static.png 2x"
            alt="photo"
          />

          <!-- GIF -->
          <nuxt-img
            v-if="gifLoaded"
            class="img-fluid mx-auto rounded feature-image"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay=""
            src="/assets/img/photos/features/feature1-2.gif"
            srcset="/assets/img/photos/features/feature1-2.gif 2x"
            alt="photo"
          />

          <!-- Yeni Eklenen Yazı veya Görüntü -->
          <div
            class="position-absolute text-center"
            :style="styleObject"
          >
            <nuxt-img
              class="img-fluid rounded"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay=""
              :src="currentImage"
              :srcset="currentImage + ' 2x'"
              alt="photo"
            />
          </div>

          <nuxt-img
            class="position-absolute rounded"
            data-aos="fade-left"
            data-aos-once="true"
            data-aos-delay=""
            src="/assets/img/photos/features/feature2.png"
            srcset="/assets/img/photos/features/feature2.png 2x"
            style="top: 20%; right: -10%; max-width: 30%; height: auto"
            alt="photo"
          />
          <nuxt-img
            class="position-absolute rounded"
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay=""
            src="/assets/img/photos/features/feature3.png"
            srcset="/assets/img/photos/features/feature3.png 2x"
            style="top: 10%; left: -10%; max-width: 30%; height: auto"
            alt="photo"
          />
          <nuxt-img
            class="position-absolute rounded"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay=""
            src="/assets/img/photos/features/feature4.png"
            srcset="/assets/img/photos/features/feature4.png 2x"
            style="bottom: 10%; left: -13%; max-width: 30%; height: auto"
            alt="photo"
          />
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <HomesHome5Features3 />
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const styleObject = {
  top: '80%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '50%'
};

// Dil seçimine göre resim değiştirme
const currentImage = computed(() => {
  if (locale.value === 'tr') {
    return '/assets/img/photos/features/tr-aitranslate4.gif';
  } else if (locale.value === 'en') {
    return '/assets/img/photos/features/eu-aitranslate4.gif';
  } else {
    return '/assets/img/photos/features/tr-aitranslate4.gif'; // Varsayılan resim
  }
});

const gifLoaded = ref(false);

const onGifLoad = () => {
  gifLoaded.value = true;
};

onMounted(() => {
  const img = new Image();
  img.src = '/assets/img/photos/features/feature1-2.gif';
  img.onload = onGifLoad;
});

</script>

<style lang="scss" scoped>
.feature-image {
  width: 100%;
  max-width: 100%;
  height: auto;
}
</style>
