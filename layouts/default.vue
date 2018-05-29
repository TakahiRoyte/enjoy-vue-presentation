<template>
  <div>
    <vp-navbar/>
    <b-container class="mt-3">
      <nuxt/>
    </b-container>
  </div>
</template>

<script>
import VpNavbar from '@/components/VpNavbar'

export default {
  components: {
    VpNavbar,
  },
}
</script>
