<template>
  <div class="box-outer">
    <div class="box-inner-y">
      <div>
        <markdown-parser :content="content[page]" style="font-size: x-large"></markdown-parser>
      </div>
      <div class="text-center">
        <b-button @click="changePage(-1)" :disabled="page === 0" class="mr-3">◀</b-button>
        {{ page + 1 }} / {{ content.length }}
        <b-button @click="changePage(1)" :disabled="page === content.length - 1" class="ml-3">▶</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import MarkdownParser from '@/components/MarkdownParser'
import PresentationData from '@/assets/presentationData'

export default {
  components: { MarkdownParser },
  data() {
    return {
      content: PresentationData.markdown,
    }
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page)
    },
  },
  methods: {
    changePage(num) {
      this.$router.push('/presentation?page=' + (this.page + num))
    },
  },
}
</script>
