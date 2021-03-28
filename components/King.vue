<template>
  <div class="cursor-in-pierce">
    <img v-if="isBlack" src="/pierces/king.png">
    <img v-else src="/pierces/kingblack.png">
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
