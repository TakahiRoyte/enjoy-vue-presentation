<template>
  <div>
    <h1>イベントとメソッド</h1>
    <b-row>
      <b-col>
        <!-- サンプルコード -->
        <pre><code>{{ sampleCode05 }}</code></pre>
      </b-col>
      <b-col>
        <!-- 動作サンプル -->
        <div> {{ message }} </div>
        <button @click="changeMessage">いいや！限界だ 押すね！</button>
      </b-col>
    </b-row>
    <div class="text-right">
      <nuxt-link to='./conditional-branch'>条件分岐</nuxt-link>
    </div>
  </div>
</template>

<script>
import SampleCodes from '@/assets/sampleCodes'

export default {
  data() {
    return {
      sampleCode05: SampleCodes.sampleCode05,
      message: '「ボタン」を押させるなーッ！！',
    }
  },
  methods: {
    changeMessage() {
      this.message = '「エコーズ ACT3」！！！！！'
    },
  },
}
</script>
