<template>
  <section class="wrapper bg-light">
    <div class="container pt-12 pt-md-14 pb-14 pb-md-16">
      <div class="row">
        <div class="col-lg-9 col-xl-8 mx-auto">
          <figure class="mb-10">
            <nuxt-img
              class="img-fluid"
              src="/assets/img/illustrations/404.png"
              srcset="/assets/img/illustrations/404@2x.png 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!-- /column -->
        <div class="col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
          <h1 class="mb-3">Oops! Page Not Found.</h1>
          <p class="lead mb-7 px-md-12 px-lg-5 px-xl-7">
            The page you are looking for is not available or has been moved. Try
            a different page or go to homepage with the button below.
          </p>
          <nuxt-link to="/" class="btn btn-primary rounded-pill"
            >Go to Homepage</nuxt-link
          >
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
