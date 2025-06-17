<template>
  <section class="wrapper bg-light">
    <div class="container pb-14 pb-md-16">
      <div class="row text-center mb-12 mb-md-15">
        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mt-n18 mt-md-n22">
          <figure>
            <nuxt-img
              class="w-auto"
              src="/assets/img/photos/features/about.png"
              srcset="/assets/img/photos/features/about.png 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row mb-14 mb-md-18">
        <div class="col-lg-6 mb-0">
          <div id="accordionExample-4" class="accordion-wrapper">
            <div v-for="(elm, i) in faq2" :key="i" class="card accordion-item">
              <div class="card-header" :id="`heading4-${elm.id}`">
                <button
                  class="collapsed"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#collapse4-${elm.id}`"
                  aria-expanded="false"
                  :aria-controls="`collapse4-${elm.id}`"
                >
                  {{ $t(elm.question) }}
                </button>
              </div>
              <!--/.card-header -->
              <div
                :id="`collapse4-${elm.id}`"
                :class="`accordion-collapse collapse `"
                :aria-labelledby="`heading4-${elm.id}`"
                data-bs-parent="#accordionExample-4"
              >
                <div class="card-body">
                  <p>{{ $t(elm.answer) }}</p>
                </div>
                <!--/.card-body -->
              </div>
              <!--/.accordion-collapse -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.accordion-wrapper -->
        </div>
        <!--/column -->
        <div class="col-lg-6">
          <div id="accordionExample-3" class="accordion-wrapper">
            <div v-for="(elm, i) in faq3" :key="i" class="card accordion-item">
              <div class="card-header" :id="`heading3-${elm.id}`">
                <button
                  class="collapsed"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#collapse3-${elm.id}`"
                  aria-expanded="false"
                  :aria-controls="`collapse3-${elm.id}`"
                >
                  {{ $t(elm.question) }}
                </button>
              </div>
              <!--/.card-header -->
              <div
                :id="`collapse3-${elm.id}`"
                :class="`accordion-collapse collapse `"
                :aria-labelledby="`heading3-${elm.id}`"
                data-bs-parent="#accordionExample-3"
              >
                <div class="card-body">
                  <p>{{ $t(elm.answer) }}</p>
                </div>
                <!--/.card-body -->
              </div>
              <!--/.accordion-collapse -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.accordion-wrapper -->
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="row gx-lg-8 gx-xl-12 gy-6 gy-md-0 text-center">
        <div v-for="(elm, i) in features10" :key="i" class="col-md-6 col-lg-3">
          <nuxt-img
            :src="elm.iconSrc"
            class="icon-svg icon-svg-md text-blue mb-3"
            alt="photo"
          />
          <h4>{{ $t(elm.title) }}</h4>
          <p class="mb-2">
            {{ $t(elm.description) }}
          </p>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { useI18n  } from 'vue-i18n';

const { t } = useI18n();

const faq2 = [
  { id: 1, question: 'faq2_1_question', answer: 'faq2_1_answer' },
  { id: 2, question: 'faq2_2_question', answer: 'faq2_2_answer' },
  { id: 3, question: 'faq2_3_question', answer: 'faq2_3_answer' },
  { id: 4, question: 'faq2_4_question', answer: 'faq2_4_answer' },
  { id: 5, question: 'faq2_5_question', answer: 'faq2_5_answer' },
  { id: 6, question: 'faq2_6_question', answer: 'faq2_6_answer' },
  { id: 7, question: 'faq2_7_question', answer: 'faq2_7_answer' }
];

const faq3 = [
  { id: 1, question: 'faq3_1_question', answer: 'faq3_1_answer' },
  { id: 2, question: 'faq3_2_question', answer: 'faq3_2_answer' },
  { id: 3, question: 'faq3_3_question', answer: 'faq3_3_answer' },
  { id: 4, question: 'faq3_4_question', answer: 'faq3_4_answer' },
  { id: 5, question: 'faq3_5_question', answer: 'faq3_5_answer' },
  { id: 6, question: 'faq3_6_question', answer: 'faq3_6_answer' },
  { id: 7, question: 'faq3_7_question', answer: 'faq3_7_answer' }
];

const features10 = [
  { id: 1, iconSrc: '/assets/img/icons/lineal/megaphone.svg', title: 'features10_1_title', description: 'features10_1_description' },
  { id: 2, iconSrc: '/assets/img/icons/lineal/target.svg', title: 'features10_2_title', description: 'features10_2_description' },
  { id: 3, iconSrc: '/assets/img/icons/lineal/settings-3.svg', title: 'features10_3_title', description: 'features10_3_description' },
  { id: 4, iconSrc: '/assets/img/icons/lineal/bar-chart.svg', title: 'features10_4_title', description: 'features10_4_description' }
];
</script>

<style lang="scss" scoped></style>
