<template>
  <div class="cursor-in-pierce" @click="possibleHouses">
    <img v-if="isBlack" src="/pierces/pawn.png">
    <img v-else src="/pierces/pawnblack.png">
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

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
      console.log('o que')
      this.limitHouse = 1
    }
  },

  methods: {
    ...mapMutations('chess', ['putHousesActive']),
    possibleHouses () {
      const coordenadas = this.coordPierce.split('')
      this.putHousesActive()

      if (this.isBlack) {
        for (
          let i = parseInt(coordenadas[1], 10);
          i <= parseInt(coordenadas[1], 10) + this.limitHouse;
          i++
        ) {
          const possibleHouse = coordenadas[0] + i

          this.$store.state.chess.listRefs[possibleHouse].setIsPossibleCome(
            true
          )
        }
      } else {
        for (
          let i = parseInt(coordenadas[1], 10);
          i >= parseInt(coordenadas[1], 10) - this.limitHouse;
          i--
        ) {
          const possibleHouse = coordenadas[0] + i
          this.$store.state.chess.listRefs[possibleHouse].setIsPossibleCome(
            true
          )
        }
      }
    }
  },
  computed: {}
}
</script>

<style lang="scss" scoped>
</style>
