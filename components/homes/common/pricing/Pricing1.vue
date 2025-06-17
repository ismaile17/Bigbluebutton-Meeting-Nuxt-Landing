<template>
  <section class="wrapper bg-light">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row">
        <div class="col-lg-10 col-xl-9 col-xxl-8 mx-auto text-center">
          <h2 class="fs-15 text-uppercase text-muted mb-3">{{ $t('pricing_title') }}</h2>
          <h3 class="display-4 mb-15 mb-md-6 px-lg-10">
            {{ $t('pricing_subtitle') }}
          </h3>
        </div>
      </div>
      <div class="pricing-wrapper position-relative">
        <div
          class="shape bg-dot primary rellax w-16 h-18"
          data-rellax-speed="1"
          style="top: 2rem; right: -2.4rem"
        ></div>
        <div
          class="shape rounded-circle bg-line red rellax w-18 h-18 d-none d-lg-block"
          data-rellax-speed="1"
          style="bottom: 0.5rem; left: -2.5rem"
        ></div>
        <div class="pricing-switcher-wrapper switcher">
          <p class="mb-0 pe-3">{{ $t('monthly') }}</p>
          <div class="pricing-switchers" @click="() => (isYearly = !isYearly)">
            <div
              :class="`pricing-switcher ${
                isYearly ? '' : 'pricing-switcher-active'
              } `"
            ></div>
            <div
              :class="`pricing-switcher ${
                !isYearly ? '' : 'pricing-switcher-active'
              } `"
            ></div>
            <div class="switcher-button bg-primary"></div>
          </div>
          <p class="mb-0 ps-3">{{ $t('yearly') }}</p>
        </div>
        <div class="row gy-6 mt-3 mt-md-5">
          <div
            v-for="(elm, i) in pricing.slice(0, 3)"
            :key="i"
            :class="`col-md-6 col-lg-4 ${i == 1 ? 'popular' : ''} ${
              i == 2 ? 'offset-md-3 col-lg-4 offset-lg-0' : ''
            } `"
          >
            <div class="pricing card text-center">
              <div class="card-body">
                <nuxt-img
                  :src="elm.iconOne"
                  class="icon-svg icon-svg-md text-primary mb-3"
                  alt="photo"
                />
                <h4 class="card-title">{{ elm.category }} Plan</h4>
                <div class="prices text-dark">
                  <div
                    :class="`price ${
                      isYearly ? 'price-hidden' : 'price-show'
                    }  justify-content-start`"
                  >
                    <span class="price-currency">$</span
                    ><span class="price-value">{{ elm.monthlyPrice }}</span>
                    <span class="price-duration">{{ $t('monthly') }}</span>
                  </div>
                  <div
                    :class="`price ${
                      !isYearly ? 'price-hidden' : 'price-show'
                    }  justify-content-start`"
                  >
                    <span class="price-currency">$</span
                    ><span class="price-value">{{
                      ((elm.monthlyPrice * 12 * 70) / 100).toFixed(0)
                    }}</span>
                    <span class="price-duration">{{ $t('yearly') }}</span>
                  </div>
                </div>
                <!--/.prices -->
                <ul
                  class="icon-list bullet-bg bullet-soft-primary mt-7 mb-8 text-start"
                >
                  <li>
                    <i class="uil uil-check"></i
                    ><span
                      ><strong>{{ elm.projects }}</strong> {{ $t('projects') }}
                    </span>
                  </li>
                  <li>
                    <i class="uil uil-check"></i
                    ><span
                      ><strong>{{ elm.apiAccess }}</strong> {{ $t('api_access') }}
                    </span>
                  </li>
                  <li>
                    <i class="uil uil-check"></i
                    ><span
                      ><strong>{{ elm.storage }}</strong> {{ $t('storage') }}
                    </span>
                  </li>
                  <li>
                    <i
                      :class="`uil ${
                        elm.weeklyReport ? 'uil-check' : 'uil-times'
                      } `"
                    ></i
                    ><span> {{ $t('weekly_reports') }}</span>
                  </li>
                  <li>
                    <i
                      :class="`uil ${
                        elm.fulltimeSupport
                          ? 'uil-check'
                          : 'uil-times bullet-soft-red'
                      } `"
                    ></i
                    ><span> {{ $t('support') }}</span>
                  </li>
                </ul>
                <a href="#" class="btn btn-primary rounded-pill">{{ $t('choose_plan') }}</a>
              </div>
              <!--/.card-body -->
            </div>
            <!--/.pricing -->
          </div>
          <!--/column -->

          <!--/column -->
        </div>
        <!--/.row -->
      </div>
      <!--/.pricing-wrapper -->
    </div>
    <!-- /.container -->

    <!-- /.container -->
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { pricing } from "~/data/pricing";
const isYearly = ref(false);
</script>

<style lang="scss" scoped>
.btn-primary {
    background-color: #0A74DA; /* Koyu mavi renk kodu */
    color: #FFFFFF; /* Yazı rengini beyaz yapabilirsiniz */
}
</style>
