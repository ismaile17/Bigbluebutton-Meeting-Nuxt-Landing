<template>
  <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
    <div class="col-lg-6 position-relative">
      <div
        class="shape rounded bg-pale-yellow rellax d-block"
        data-rellax-speed="0"
        style="
          top: 50%;
          left: 50%;
          width: 50%;
          height: 60%;
          transform: translate(-50%, -50%);
          z-index: 0;
        "
      ></div>
      <div class="row gx-md-5 gy-5 position-relative align-items-center">
        <div class="col-6">
          <nuxt-img
            class="img-fluid rounded d-flex ms-auto"
            data-aos="fade"
            data-aos-once="true"
            data-aos-delay=""
            src="/assets/img/photos/features/feature13.png"
            srcset="/assets/img/photos/features/feature13.png 2x"
            alt="photo"
          />
        </div>
        <!-- /column -->
        <div class="col-6">
          <nuxt-img
            class="img-fluid rounded mb-5"
            data-aos="fade"
            data-aos-once="true"
            data-aos-delay="400"
            src="/assets/img/photos/features/feature14.png"
            srcset="/assets/img/photos/features/feature14.png 2x"
            alt="photo"
          />
          <nuxt-img
            class="img-fluid rounded d-flex col-10"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="800"
            src="/assets/img/photos/features/feature15.png"
            srcset="/assets/img/photos/features/feature15.png 2x"
            alt="photo"
          />
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!--/column -->
    <div class="col-lg-6">
      <h3 class="display-4 mb-5">
        {{ $t('section_header') }}
      </h3>
      <p class="mb-5">
        {{ $t('section_paragraph') }}
      </p>
      <div class="row gy-3">
        <div class="col-xl-6">
          <ul class="icon-list bullet-bg bullet-soft-yellow mb-0">
            <li
              v-for="(item, index) in checklistItems.slice(0, 2)"
              :key="index"
              :class="{ 'mt-3': index > 0 }"
            >
              <span><i class="uil uil-check"></i></span>
              <span>{{ $t('checklist_item_' + (index + 1)) }}</span>
            </li>
          </ul>
        </div>
        <!--/column -->
        <div class="col-xl-6">
          <ul class="icon-list bullet-bg bullet-soft-yellow mb-0">
            <li
              v-for="(item, index) in checklistItems.slice(2, 4)"
              :key="index"
              :class="{ 'mt-3': index > 0 }"
            >
              <span><i class="uil uil-check"></i></span>
              <span>{{ $t('checklist_item_' + (index + 3)) }}</span>
            </li>
          </ul>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!--/column -->
  </div>
</template>

<script setup>
const checklistItems = [
  { text: "checklist_item_1" },
  { text: "checklist_item_2" },
  { text: "checklist_item_3" },
  { text: "checklist_item_4" }
];
</script>

<style lang="scss" scoped></style>
