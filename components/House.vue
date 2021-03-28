<template>
  <v-row align-content="center" align="center" justify="center">
    <span>
      <Pawn
        v-if="pierce === 'p' || pierce === 'P'"
        :is-black="pierce === 'P'"
        :coord-pierce="coordPierce"
        @houseNow="houseNow"
      />
      <Tower
        v-if="pierce === 'r' || pierce === 'R'"
        :is-black="pierce === 'R'"
        :coord-pierce="coordPierce"
      />
      <Bisp
        v-if="pierce === 'b' || pierce === 'B'"
        :is-black="pierce === 'B'"
        :coord-pierce="coordPierce"
      />
      <King
        v-if="pierce === 'k' || pierce === 'K'"
        :is-black="pierce === 'K'"
        :coord-pierce="coordPierce"
      />
      <Queen
        v-if="pierce === 'q' || pierce === 'Q'"
        :is-black="pierce === 'Q'"
        :coord-pierce="coordPierce"
      />
      <Knight
        v-if="pierce === 'n' || pierce === 'N'"
        :is-black="pierce === 'N'"
        :coord-pierce="coordPierce"
      />
    </span>
    <span
      v-if="pierceCan === 'm' && pierce === ''"
    ><div class="come-on" @click="movement" />
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
  props: { coordPierce: String, pierceInit: String, isWhite: Boolean },
  data () {
    return {
      pierceCan: '',
      pierce: '',
      pierceCanGo: ''
    }
  },
  mounted () {
    console.log(this.pierceInit)
    this.pierce = this.pierceInit
  },

  methods: {
    cantGoToHouse (pierce) {
      this.pierceCan = 'm'
      this.pierceCanGo = pierce
      return this
    },
    cancelGoToHouse () {
      this.pierceCan = ''
    },

    houseNow ({ houses }) {
      this.$emit('showHouseOptions', { houses, caseGo: this.$vnode.data.ref })
    },

    movement () {
      console.log(this.pierceCanGo)
      console.log(this.$vnode.data.ref)
      this.changePierce(this.pierceCanGo)
      this.pierceCan = ''
      this.pierceCanGo = ''
      this.$emit('removePierceFromHouseController')
    },

    removePierce () {
      this.pierce = ''
    },

    changePierce (p) {
      this.pierce = p
      console.log(this.pierce)
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
