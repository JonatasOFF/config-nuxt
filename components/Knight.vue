<template>
  <div class="cursor-in-pierce">
    <img v-if="isBlack" src="/pierces/horse.png">
    <img v-else src="/pierces/horseblack.png">
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
