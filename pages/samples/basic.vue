<template>
  <div>
    <h1>Hello World!</h1>
    <b-row>
      <b-col>
        <pre><code>{{ sampleCode02 }}</code></pre>
      </b-col>
      <b-col>
        {{ message }}
      </b-col>
    </b-row>
    <div class="text-right">
      <nuxt-link to='./attribute-binding'>属性のバインディング</nuxt-link>
    </div>
  </div>
</template>

<script>
import SampleCodes from '@/assets/sampleCodes'

export default {
  data() {
    return {
      sampleCode02: SampleCodes.sampleCode02,
      message: 'Hello World!',
    }
  },
}
</script>
