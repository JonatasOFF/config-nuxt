<template>
  <v-row align-content="center" align="center" justify="center">
    <span>
      <Pawn
        v-if="pierce === 'p' || pierce === 'P'"
        :is-black="pierce === 'P'"
        :coord-pierce="coordHouse"
        @possibleHouses="possibleHouses"
        @removePossibleHouses="removePossibleHouses"
      />
      <Tower
        v-if="pierce === 'r' || pierce === 'R'"
        :is-black="pierce === 'R'"
        :coord-pierce="coordHouse"
      />
      <Bisp
        v-if="pierce === 'b' || pierce === 'B'"
        :is-black="pierce === 'B'"
        :coord-pierce="coordHouse"
      />
      <King
        v-if="pierce === 'k' || pierce === 'K'"
        :is-black="pierce === 'K'"
        :coord-pierce="coordHouse"
      />
      <Queen
        v-if="pierce === 'q' || pierce === 'Q'"
        :is-black="pierce === 'Q'"
        :coord-pierce="coordHouse"
      />
      <Knight
        v-if="pierce === 'n' || pierce === 'N'"
        :is-black="pierce === 'N'"
        :coord-pierce="coordHouse"
      />
    </span>
    <span
      v-if="isPossibleCome && pierce === ''"
    ><div class="come-on" />
      <span />
    </span>
  </v-row>
</template>

<script>
import Pawn from '~/components/Pawn'
import Bisp from '~/components/Bisp'
import King from '~/components/King'
import Queen from '~/components/Queen'
import Knight from '~/components/Knight'
import Tower from '~/components/Tower'

export default {
  components: {
    Pawn,
    Bisp,
    King,
    Queen,
    Knight,
    Tower
  },
  props: { coordHouse: String, pierceInit: String, isWhite: Boolean },
  data () {
    return {
      isPossibleCome: false,
      pierce: ''
    }
  },
  mounted () {
    this.pierce = this.pierceInit
  },

  methods: {
    setIsPossibleCome (isCan) {
      this.isPossibleCome = isCan
    },

    removePierce () {
      this.pierce = ''
    },

    changePierce (p) {
      this.pierce = p
      console.log(this.pierce)
    },
    /**
     * communication function for the controller chess.vue
     * s
     * parameters: idHouse get the house for the controller
     */
    possibleHouses (idHouse) {
      this.$emit('possiblesHousesGo', idHouse)
    },
    removePossibleHouses () {
      console.log('ELE TA CHEGANDO AQUI CARALHO JÁ VAISEI')
      this.$emit('removePossiblesHousesGo')
    }
  }
}
</script>

<style lang="scss" scoped>
.come-on {
  width: 15px;
  height: 15px;
  border: 2px solid black;
  background-color: violet;
  border-radius: 100%;
  position: relative;
}
</style>
