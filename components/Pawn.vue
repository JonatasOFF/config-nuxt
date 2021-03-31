<template>
  <div class="cursor-in-pierce" @click="possibleHouses">
    <img v-if="isBlack" src="/pierces/pawn.png">
    <img v-else src="/pierces/pawnblack.png">
  </div>
</template>

<script>
export default {
  props: { isBlack: Boolean, coordPierce: String },

  data () {
    return {
      limitHouse: 2
    }
  },

  mounted () {
    // Diz as coordenada da peça em questão
    const coordenadas = this.coordPierce.split('')
    if (
      parseInt((coordenadas[1], 10) !== 2 && this.isBlack) ||
      (parseInt(coordenadas[1], 10) !== 7 && !this.isBlack)
    ) {
      this.limitHouse = 1
    }
  },

  methods: {
    possibleHouses () {
      const coordenadas = this.coordPierce.split('')
      this.$emit('removePossibleHouses')
      console.log(this.isBlack)
      if (this.isBlack) {
        for (
          let i = parseInt(coordenadas[1], 10);
          i <= parseInt(coordenadas[1], 10) + this.limitHouse;
          i++
        ) {
          console.log(this.limitHouse)
          const possibleHouse = coordenadas[0] + i
          this.$emit('possibleHouses', possibleHouse)
        }
      } else {
        for (
          let i = parseInt(coordenadas[1], 10);
          i >= parseInt(coordenadas[1], 10) - this.limitHouse;
          i--
        ) {
          console.log(this.limitHouse)
          const possibleHouse = coordenadas[0] + i
          this.$emit('possibleHouses', possibleHouse)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
