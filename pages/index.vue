<template lang="pug">
  div
    textCountCompornent
    footerCompornent
</template>

<script>
import TextCountCompornent from '~/components/TextCount.vue'
import FooterCompornent from '~/components/Footer.vue'

export default {
  components: {
    TextCountCompornent,
    FooterCompornent
  }
}
</script>

<style lang="stylus">
  .inner
    margin 0 auto
    transition .2s
    width 90vw
</style>