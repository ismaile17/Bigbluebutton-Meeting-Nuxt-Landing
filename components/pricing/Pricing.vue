<template>
  <div
    class="pricing-wrapper position-relative mt-n18 mt-md-n21 mb-12 mb-md-15"
  >
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
      <p class="mb-0 pe-3">{{ $t('monthly_label') }}</p>
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
      <p class="mb-0 ps-3">{{ $t('yearly_label') }}</p>
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
                <span class="price-duration">{{ $t('monthly_label') }}</span>
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
                <span class="price-duration">{{ $t('yearly_label') }}</span>
              </div>
            </div>
            <!--/.prices -->
            <ul
              class="icon-list bullet-bg bullet-soft-primary mt-7 mb-8 text-start"
            >
              <li>
                <i class="uil uil-check"></i
                ><span
                  ><strong>{{ elm.projects }}</strong> {{ $t('projects_label') }}
                </span>
              </li>
              <li>
                <i class="uil uil-check"></i
                ><span
                  ><strong>{{ elm.apiAccess }}</strong> {{ $t('api_access_label') }}
                </span>
              </li>
              <li>
                <i class="uil uil-check"></i
                ><span
                  ><strong>{{ elm.storage }}</strong> {{ $t('storage_label') }}
                </span>
              </li>
              <li>
                <i
                  :class="`uil ${
                    elm.weeklyReport ? 'uil-check' : 'uil-times'
                  } `"
                ></i
                ><span> {{ $t('weekly_reports_label') }}</span>
              </li>
              <li>
                <i
                  :class="`uil ${
                    elm.fulltimeSupport
                      ? 'uil-check'
                      : 'uil-times bullet-soft-red'
                  } `"
                ></i
                ><span> {{ $t('support_label') }}</span>
              </li>
            </ul>
            <a href="#" class="btn btn-primary rounded-pill">{{ $t('choose_plan_button') }}</a>
          </div>
          <!--/.card-body -->
        </div>
        <!--/.pricing -->
      </div>
      <!--/column -->
    </div>
    <!--/.row -->
  </div>
</template>

<script setup>
import { pricing } from "~/data/pricing";
const isYearly = ref(false);
</script>

<style lang="scss" scoped>
.btn-primary {
    background-color: #0A74DA; /* Koyu mavi renk kodu */
    color: #FFFFFF; /* Yazı rengini beyaz yapabilirsiniz */
}
</style>
