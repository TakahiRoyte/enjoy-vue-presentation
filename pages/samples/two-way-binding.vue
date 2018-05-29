<template>
  <div>
    <h1>双方向バインディング</h1>
    <b-row>
      <b-col>
        <!-- サンプルコード -->
        <pre><code>{{ sampleCode04 }}</code></pre>
      </b-col>
      <b-col>
        <!-- 動作サンプル -->
        <input type="text" v-model="message">
        <p>
          {{ message }}
        </p>
      </b-col>
    </b-row>
    <div class="text-right">
      <nuxt-link to='./events-methods'>イベントとメソッド</nuxt-link>
    </div>
  </div>
</template>

<script>
import SampleCodes from '@/assets/sampleCodes'

export default {
  data() {
    return {
      sampleCode04: SampleCodes.sampleCode04,
      message: '変えてみ？',
    }
  },
}
</script>
