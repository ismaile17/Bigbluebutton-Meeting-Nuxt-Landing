<template>
  <section class="wrapper bg-soft-primary">
    <div class="container py-14 pt-md-16 pt-lg-0 pb-md-6">
      <div class="row text-center">
        <div class="col-lg-10 mx-auto">
          <!-- <div class="mt-lg-n20 mt-xl-n22 position-relative"> -->
            <!-- <div
              class="shape bg-dot red rellax w-16 h-18"
              data-rellax-speed="1"
              style="
                top: 1rem;
                left: -3.9rem;
                z-index: -1;
                pointer-events: none;
              "
            ></div>
            <div
              class="shape rounded-circle bg-line primary rellax w-18 h-18"
              data-rellax-speed="1"
              style="
                bottom: 2rem;
                right: -3rem;
                z-index: -1;
                pointer-events: none;
              "
            ></div> -->
            <!-- <CommonVideoPlayer /> -->
          <!-- </div> -->
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="row text-center mt-9">
        <div class="col-lg-9 mx-auto">
          <h3 class="display-7 mb-0 text-center px-xl-10 px-xxl-15">
            {{ $t('section_quote') }}
          </h3>
          <div
            class="row gx-lg-8 gx-xl-12 process-wrapper text-center mt-9"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay=""
          >
            <div
              v-for="feature in features8"
              :key="feature.id"
              class="col-md-4"
            >
              <nuxt-img
                :src="feature.iconSrc"
                class="icon-svg icon-svg-md"
                :class="feature.iconColorClass"
                alt="photo"
              />
              <h4 class="mb-1">{{ $t(feature.title) }}</h4>
              <p>{{ $t(feature.description) }}</p>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
const features8 = [
  {
    id: 1,
    iconSrc: "/assets/img/icons/lineal/shield.svg",
    iconColorClass: "text-red mb-3",
    title: "feature_title_1",
    description: "feature_description_1"
  },
  {
    id: 2,
    iconSrc: "/assets/img/icons/lineal/calendar.svg",
    iconColorClass: "text-green mb-3",
    title: "feature_title_2",
    description: "feature_description_2"
  },
  {
    id: 3,
    iconSrc: "/assets/img/icons/lineal/group.svg",
    iconColorClass: "text-yellow mb-3",
    title: "feature_title_3",
    description: "feature_description_3"
  }
];
</script>

<style lang="scss" scoped></style>
