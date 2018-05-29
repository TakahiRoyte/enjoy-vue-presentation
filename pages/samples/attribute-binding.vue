<template>
  <div>
    <h1>属性へのバインディング</h1>
    <b-row>
      <b-col>
        <!-- サンプルコード -->
        <pre><code>{{ sampleCode03 }}</code></pre>
      </b-col>
      <b-col>
        <!-- 動作サンプル -->
        <span v-bind:title="message">
          ここにホバーして属性バインドを確認！
        </span>
      </b-col>
    </b-row>
    <div class="text-right">
      <nuxt-link to='./two-way-binding'>双方向バインディング</nuxt-link>
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
