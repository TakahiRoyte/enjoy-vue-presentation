<template>
  <div>
    <h1>条件分岐</h1>
    <b-row>
      <b-col>
        <!-- サンプルコード -->
        <pre><code>{{ sampleCode06 }}</code></pre>
      </b-col>
      <b-col>
        <!-- 動作するサンプル -->
        <input type="checkbox" v-model="isSenseiShown"> 先生を表示
        <div v-if="isSenseiShown"><img src="/school_class_english.png"></div>
      </b-col>
    </b-row>
    <div class="text-right">
      <!-- 次へのリンク -->
      <nuxt-link to='./todo-list'>TODOリスト</nuxt-link>
    </div>
  </div>
</template>

<script>
import SampleCodes from '@/assets/sampleCodes'

export default {
  data() {
    return {
      sampleCode06: SampleCodes.sampleCode06,
      isSenseiShown: false,
    }
  },
}
</script>
