<template>
  <div class="cursor-in-pierce">
    <img v-if="isBlack" src="/pierces/bispo.png">
    <img v-else src="/pierces/bispoblack.png">
  </div>
</template>

<script>
export default {
  props: { isBlack: Boolean, coordPierce: String },

  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
