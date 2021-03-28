<template>
  <div class="cursor-in-pierce">
    <img v-if="isBlack" src="/pierces/queen.png">
    <img v-else src="/pierces/queenBlack.png">
  </div>
</template>

<script>
export default {
  props: { isBlack: Boolean },

  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
</style>
