<template>
  <div>
    <h2 class="display-4 mb-3 text-center">{{ $t('pricing_faq_title') }}</h2>
    <p class="lead text-center mb-10 px-md-16 px-lg-0">
      {{ $t('pricing_faq_subtitle') }}
    </p>
    <div class="row mb-1 mb-md-1">
      <div class="col-lg-6 mb-0">
        <div id="accordionExample-4" class="accordion-wrapper">
          <div v-for="(elm, i) in faq3" :key="i" class="card accordion-item">
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
          <div v-for="(elm, i) in faq2" :key="i" class="card accordion-item">
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
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const faq2 = [
  { id: 1, question: 'pricing_faq2_1_question', answer: 'pricing_faq2_1_answer' },
  { id: 2, question: 'pricing_faq2_2_question', answer: 'pricing_faq2_2_answer' },
  { id: 3, question: 'pricing_faq2_3_question', answer: 'pricing_faq2_3_answer' },
  { id: 4, question: 'pricing_faq2_4_question', answer: 'pricing_faq2_4_answer' },
  { id: 5, question: 'pricing_faq2_5_question', answer: 'pricing_faq2_5_answer' },
  { id: 6, question: 'pricing_faq2_6_question', answer: 'pricing_faq2_6_answer' },
  { id: 7, question: 'pricing_faq2_7_question', answer: 'pricing_faq2_7_answer' }
];

const faq3 = [
  { id: 1, question: 'pricing_faq3_1_question', answer: 'pricing_faq3_1_answer' },
  { id: 2, question: 'pricing_faq3_2_question', answer: 'pricing_faq3_2_answer' },
  { id: 3, question: 'pricing_faq3_3_question', answer: 'pricing_faq3_3_answer' },
  { id: 4, question: 'pricing_faq3_4_question', answer: 'pricing_faq3_4_answer' },
  { id: 5, question: 'pricing_faq3_5_question', answer: 'pricing_faq3_5_answer' },
  { id: 6, question: 'pricing_faq3_6_question', answer: 'pricing_faq3_6_answer' },
  { id: 7, question: 'pricing_faq3_7_question', answer: 'pricing_faq3_7_answer' }
];
</script>

<style lang="scss" scoped></style>
