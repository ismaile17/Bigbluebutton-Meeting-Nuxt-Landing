<template>
  <div class="container">
    <div class="row gx-0">
      <aside class="col-xl-3 sidebar sticky-sidebar mt-md-0 py-16 d-none d-xl-block">
        <div class="widget">
          <nav id="sidebar-nav">
            <ul class="list-unstyled text-reset scrollspyLinks">
              <li v-for="(item, index) in navLinks" :key="index">
                <a :class="['nav-link', 'scroll', { active: item.active }]" :href="item.href">
                  {{ item.number }}. {{ $t(item.title) }}
                </a>
              </li>
            </ul>
          </nav>
          <!-- /nav -->
        </div>
        <!-- /.widget -->
      </aside>
      <!-- /column -->
      <div class="col-xl-8">
        <section id="terms-conditions" class="wrapper pt-16 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">1. {{ $t('terms_conditions_title') }}</h2>
              <p>{{ $t('terms_conditions_text') }}</p>
              <p>{{ $t('terms_conditions_text_2') }}</p>
              <p>{{ $t('terms_conditions_text_3') }}</p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </section>
        <section id="privacy-policy" class="wrapper pt-10 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">2. {{ $t('privacy_policy_title') }}</h2>
              <p>{{ $t('privacy_policy_text') }}</p>
              <p>{{ $t('privacy_policy_text_2') }}</p>
              <p>{{ $t('privacy_policy_text_3') }}</p>
              <ul class="icon-list bullet-bg bullet-soft-primary">
                <li
                  v-for="(item, index) in checklistItems.slice(0, 4)"
                  :key="index"
                  :class="{ 'mt-3': index > 0 }"
                >
                  <span><i class="uil uil-check"></i></span>
                  <span>{{ item.text }}</span>
                </li>
              </ul>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </section>
        <section id="user-policy" class="wrapper pt-10 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">3. {{ $t('user_policy_title') }}</h2>
              <p>{{ $t('user_policy_text') }}</p>
              <p>{{ $t('user_policy_text_2') }}</p>
              <p>{{ $t('user_policy_text_3') }}</p>
              <p class="mb-0">{{ $t('user_policy_text_4') }}</p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </section>
        <section id="account-billing" class="wrapper py-10 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">4. {{ $t('account_billing_title') }}</h2>
              <p>{{ $t('account_billing_text') }}</p>
              <p>{{ $t('account_billing_text_2') }}</p>
              <p>{{ $t('account_billing_text_3') }}</p>
              <p class="mb-0">{{ $t('account_billing_text_4') }}</p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </section>
        <section id="cookies" class="wrapper pt-10 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">5. {{ $t('cookies_title') }}</h2>
              <p>{{ $t('cookies_text') }}</p>
              <p>{{ $t('cookies_text_2') }}</p>
              <p class="mb-0">{{ $t('cookies_text_3') }}</p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </section>
        <section id="copyrights" class="wrapper pt-10 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">6. {{ $t('copyrights_title') }}</h2>
              <p>{{ $t('copyrights_text') }}</p>
              <p>{{ $t('copyrights_text_2') }}</p>
              <ul class="icon-list bullet-bg bullet-soft-primary">
                <li
                  v-for="(item, index) in checklistItems.slice(0, 4)"
                  :key="index"
                  :class="{ 'mt-3': index > 0 }"
                >
                  <span><i class="uil uil-check"></i></span>
                  <span>{{ item.text }}</span>
                </li>
              </ul>
              <p class="mb-0">{{ $t('copyrights_text_3') }}</p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </section>
      </div>
      <!-- /column -->
    </div>
    <!-- /.row -->
  </div>
</template>

<script setup>
import { checklistItems } from "~/data/features";
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const navLinks = ref([
  {
    number: 1,
    title: "terms_conditions_title",
    href: "#terms-conditions",
    active: true,
  },
  {
    number: 2,
    title: "privacy_policy_title",
    href: "#privacy-policy",
    active: false,
  },
  { number: 3, title: "user_policy_title", href: "#user-policy", active: false },
  {
    number: 4,
    title: "account_billing_title",
    href: "#account-billing",
    active: false,
  },
  { number: 5, title: "cookies_title", href: "#cookies", active: false },
  { number: 6, title: "copyrights_title", href: "#copyrights", active: false },
]);

import addScrollspy from "~/utlis/addScrollSpy";
import addSmoothScroll from "~/utlis/smoothScroll";

function initScrollspy() {
  addScrollspy("");
}

onMounted(() => {
  addSmoothScroll();
  window.addEventListener("scroll", initScrollspy);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", initScrollspy);
});
</script>

<style lang="scss" scoped></style>
