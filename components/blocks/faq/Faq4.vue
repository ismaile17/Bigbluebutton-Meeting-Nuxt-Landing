<template>
  <section id="snippet-4" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="card bg-soft-primary rounded-4">
        <div class="card-body p-md-10 p-xl-11">
          <div class="row gx-lg-8 gx-xl-12 gy-10">
            <div class="col-lg-6">
              <h3 class="display-4 mb-4">Frequently Asked Questions</h3>
              <p class="lead fs-lg mb-0">
                If you don't see an answer to your question, you can send us an
                email from our contact form.
              </p>
            </div>
            <!--/column -->
            <div class="col-lg-6">
              <div class="accordion accordion-wrapper" id="accordionExample-5">
                <div
                  v-for="(elm, i) in faq2"
                  :key="i"
                  class="card plain accordion-item"
                >
                  <div class="card-header" :id="`heading5-${elm.id}`">
                    <button
                      :class="`${!i ? 'accordion-button' : 'collapsed'}`"
                      data-bs-toggle="collapse"
                      :data-bs-target="`#collapse5-${elm.id}`"
                      aria-expanded="false"
                      :aria-controls="`collapse5-${elm.id}`"
                    >
                      {{ elm.question }}
                    </button>
                  </div>
                  <!--/.card-header -->
                  <div
                    :id="`collapse5-${elm.id}`"
                    :class="`accordion-collapse collapse ${!i ? 'show' : ''} `"
                    :aria-labelledby="`heading5-${elm.id}`"
                    data-bs-parent="#accordionExample-5"
                  >
                    <div class="card-body">
                      <p>{{ elm.answer.split(" ").slice(0, 17).join(" ") }}</p>
                    </div>
                    <!--/.card-body -->
                  </div>
                  <!--/.accordion-collapse -->
                </div>
                <!--/.accordion-item -->
              </div>
              <!--/.accordion -->
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/.card-body -->
      </div>
      <!--/.card -->
    </div>
    <!-- /.container -->
    <div class="container pb-15 pb-md-17">
      <div class="card">
        <div class="card-footer border-0 position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-snippet-28"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-28"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-4&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;card bg-soft-primary rounded-4&quot;&gt;
        &lt;div class&#x3D;&quot;card-body p-md-10 p-xl-11&quot;&gt;
          &lt;div class&#x3D;&quot;row gx-lg-8 gx-xl-12 gy-10&quot;&gt;
            &lt;div class&#x3D;&quot;col-lg-6&quot;&gt;
              &lt;h3 class&#x3D;&quot;display-4 mb-4&quot;&gt;Frequently Asked Questions&lt;&#x2F;h3&gt;
              &lt;p class&#x3D;&quot;lead fs-lg mb-0&quot;&gt;
                If you don&#39;t see an answer to your question, you can send us an
                email from our contact form.
              &lt;&#x2F;p&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
            &lt;div class&#x3D;&quot;col-lg-6&quot;&gt;
              &lt;div class&#x3D;&quot;accordion accordion-wrapper&quot; id&#x3D;&quot;accordionExample-5&quot;&gt;
                &lt;div
                  v-for&#x3D;&quot;(elm, i) in faq2&quot;
                  :key&#x3D;&quot;i&quot;
                  class&#x3D;&quot;card plain accordion-item&quot;
                &gt;
                  &lt;div class&#x3D;&quot;card-header&quot; :id&#x3D;&quot;&#x60;heading5-${elm.id}&#x60;&quot;&gt;
                    &lt;button
                      :class&#x3D;&quot;&#x60;${!i ? &#39;accordion-button&#39; : &#39;collapsed&#39;}&#x60;&quot;
                      data-bs-toggle&#x3D;&quot;collapse&quot;
                      :data-bs-target&#x3D;&quot;&#x60;#collapse5-${elm.id}&#x60;&quot;
                      aria-expanded&#x3D;&quot;false&quot;
                      :aria-controls&#x3D;&quot;&#x60;collapse5-${elm.id}&#x60;&quot;
                    &gt;
                      &lbrace;&lbrace; elm.question &rbrace;&rbrace;
                    &lt;&#x2F;button&gt;
                  &lt;&#x2F;div&gt;
                  &lt;!--&#x2F;.card-header --&gt;
                  &lt;div
                    :id&#x3D;&quot;&#x60;collapse5-${elm.id}&#x60;&quot;
                    :class&#x3D;&quot;&#x60;accordion-collapse collapse ${!i ? &#39;show&#39; : &#39;&#39;} &#x60;&quot;
                    :aria-labelledby&#x3D;&quot;&#x60;heading5-${elm.id}&#x60;&quot;
                    data-bs-parent&#x3D;&quot;#accordionExample-5&quot;
                  &gt;
                    &lt;div class&#x3D;&quot;card-body&quot;&gt;
                      &lt;p&gt;&lbrace;&lbrace; elm.answer.split(&quot; &quot;).slice(0, 17).join(&quot; &quot;) &rbrace;&rbrace;&lt;&#x2F;p&gt;
                    &lt;&#x2F;div&gt;
                    &lt;!--&#x2F;.card-body --&gt;
                  &lt;&#x2F;div&gt;
                  &lt;!--&#x2F;.accordion-collapse --&gt;
                &lt;&#x2F;div&gt;
                &lt;!--&#x2F;.accordion-item --&gt;
              &lt;&#x2F;div&gt;
              &lt;!--&#x2F;.accordion --&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.row --&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;.card-body --&gt;
      &lt;&#x2F;div&gt;
      &lt;!--&#x2F;.card --&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container --&gt;
   
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import { faq2 } from &quot;~&#x2F;data&#x2F;faq&quot;;
&lt;&#x2F;script&gt;

&lt;style lang&#x3D;&quot;scss&quot; scoped&gt;&lt;&#x2F;style&gt;</code></pre>
            </div>
            <!--/.code-wrapper-inner -->
          </div>
          <!--/.code-wrapper -->
        </div>
        <!--/.card-footer -->
      </div>
      <!--/.card -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { faq2 } from "~/data/faq";
</script>

<style lang="scss" scoped></style>
