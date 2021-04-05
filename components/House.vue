<template>
  <v-row align-content="center" align="center" justify="center">
    <span>
      <Pawn
        v-if="pierce === 'p' || pierce === 'P'"
        :is-black="pierce === 'P'"
        :coord-pierce="coordHouse"
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
    ><div class="come-on" @click="setPierceNew" />
      <span />
    </span>
  </v-row>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
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
      pierce: '',
      pierceCanGo: '',
      coordDelete: ''
    }
  },
  mounted () {
    this.pierce = this.pierceInit
  },

  methods: {
    ...mapMutations('chess', ['putHousesActive']),
    setIsPossibleCome (isCan, pierceCanGo, coordDelete) {
      if (isCan) {
        this.putHousesActive(this)
      }
      this.pierceCanGo = pierceCanGo
      this.isPossibleCome = isCan

      this.coordDelete = coordDelete
    },

    setPierceNew () {
      this.pierce = this.pierceCanGo
      this.getRefs[this.coordDelete].removePierce()
      this.putHousesActive()

      this.coordDelete = ''
    },

    removePierce () {
      this.pierce = ''
    },

    changePierce (p) {
      this.pierce = p
      console.log(this.pierce)
    }
  },

  computed: {
    ...mapGetters('chess', ['getRefs'])
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
