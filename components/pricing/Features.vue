<template>
  <div class="row gx-lg-8 gx-xl-12 gy-6 mb-14 mb-md-19">
    <div class="col-lg-4" v-for="id in [1, 2, 3]" :key="id">
      <div class="d-flex flex-row">
        <div>
          <div class="icon btn btn-circle pe-none btn-primary me-4">
            <i :class="`uil uil-check-circle`"></i>
          </div>
        </div>
        <div>
          <h4>{{ $t(`feature_item_${id}_title`) }}</h4>
          <p class="mb-2">{{ $t(`feature_item_${id}_description`) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped></style>
