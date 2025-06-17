<template>
  <section style="background-image: url(/assets/img/photos/bgx1.png)">
    <div class="container pt-17 pb-20 pt-md-5 pb-md-20 text-center">
    </div>
    <!-- /.container -->
  </section>
  <!-- /section -->
  <section class="wrapper bg-light">
    <div class="container pb-14 pb-md-16">
      <div class="row">
        <div class="col-lg-7 col-xl-6 col-xxl-5 mx-auto mt-n20">
          <div class="card">
            <div class="card-body p-11 text-center">
              <h2 class="mb-3 text-start">{{ $t('reset_password_title') }}</h2>
              <p class="lead mb-6 text-start">
                {{ $t('reset_password_subtitle') }}
              </p>
              <form @submit.prevent="sendResetLink" class="text-start mb-3">
                <div class="form-floating mb-4">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    v-model="email"
                    required
                  />
                  <label>{{ $t('reset_password_email_label') }}</label>
                </div>
                <button type="submit" class="btn btn-primary rounded-pill w-100 mb-2">
                  {{ $t('reset_password_button') }}
                </button>
              </form>
              <!-- /form -->
              <p class="mb-0">
                <nuxt-link :to="`/${currentLocale}/signin`" class="hover">
                  {{ $t('reset_password_back_to_signin') }}
                </nuxt-link>
              </p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const currentLocale = locale.value;

const email = ref('');

const sendResetLink = () => {
  // Şifre sıfırlama bağlantısı gönderme işlemi burada yapılacak.
  // Örneğin, bir API çağrısı ile şifre sıfırlama e-postası gönderilebilir.
  console.log(`Password reset link sent to ${email.value}`);
};
</script>

<style lang="scss" scoped>
.btn-primary {
    background-color: #0A74DA; /* Koyu mavi renk kodu */
    color: #FFFFFF; /* Yazı rengini beyaz yapabilirsiniz */
}
</style>
