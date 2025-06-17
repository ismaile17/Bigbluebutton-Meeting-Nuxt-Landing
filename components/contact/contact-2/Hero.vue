<template>
  <section class="wrapper bg-soft-primary">
    <div class="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
      <div class="row">
        <div class="col-sm-10 col-md-8 col-lg-6 col-xl-6 col-xxl-5 mx-auto">
          <h1 class="display-1 mb-3">{{ $t('contact_us_title') }}</h1>
          <nav class="d-inline-block" aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><nuxt-link to="/">{{ $t('breadcrumb_home') }}</nuxt-link></li>
              <li class="breadcrumb-item active" aria-current="page">
                {{ $t('breadcrumb_contact') }}
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

<script setup></script>

<style lang="scss" scoped></style>
