<template>
  <div>
    <h1>TODOリスト</h1>
    <b-row>
      <b-col>
        <!-- サンプルコード -->
        <p data-height="400" data-theme-id="0" data-slug-hash="ZvZpmz" data-default-tab="js,result" data-user="takahiroyte" data-embed-version="2" data-pen-title="vue:zero 6-4 implement filter" class="codepen">See the Pen
          <a href="https://codepen.io/takahiroyte/pen/ZvZpmz/">vue:zero 6-4 implement filter</a> by Takahiro Ito (
          <a href="https://codepen.io/takahiroyte">@takahiroyte</a>) on
          <a href="https://codepen.io">CodePen</a>.</p>
        <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
      </b-col>
    </b-row>
    <div class="text-right">
      <nuxt-link to='/presentation?page=7'>プレゼンへ戻る</nuxt-link>
    </div>
  </div>
</template>

<script>
import SampleCodes from '@/assets/sampleCodes'

export default {
  data() {
    return {
      sampleCode03: SampleCodes.sampleCode03,
      message: '表示日時 ' + new Date().toLocaleString(),
    }
  },
}
</script>
