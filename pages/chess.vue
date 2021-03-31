<template>
  <v-container
    :class="{
      'change-scale-sm': windowSize.y <= 929,
      'change-scale': windowSize.y >= 929,
    }"
  >
    <v-row v-resize="onResize" white align="start" justify="start">
      <v-container
        fluid
        dark
        class="elevation-10 v-row-adjust pt-9 shadow-container"
      >
        <v-row
          v-for="(letter, n) in letters"
          :key="n - 1"
          class="v-row-adjust"
          dark
          align="start"
          justify="start"
        >
          <v-col class="pt-9" offset="0" md="1">
            {{ 8 - n }}
          </v-col>
          <v-card
            v-for="r in 8"
            :key="r"
            class="d-flex align-center justify-space-between"
            :class="{
              'house-white': isWhite(n, r),
              'house-black': isBlack(n, r),
            }"
            height="100"
            width="100"
            elevation="5"
          >
            <v-row align-content="center" align="center" justify="center">
              <span
                :style="`${isWhite(n, r) ? 'color: black;' : 'color: white '} `"
              >
                <House
                  :ref="letters[r - 1] + (8 - n)"
                  :coord-house="letters[r - 1] + (8 - n)"
                  :pierce-init="spawnPierce(n, r)"
                  @possiblesHousesGo="possiblesHousesGo"
                  @removePossiblesHousesGo="removePossiblesHousesGo"
                />
              </span>
            </v-row>
          </v-card>
        </v-row>

        <v-row align-content="center">
          <v-spacer />
          <v-col
            v-for="letter in letters"
            :key="letter"
            class="pr-16 v-col-adjust"
          >
            <div class="text-center">
              {{ letter }}
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
import House from '~/components/House'

export default {
  components: {
    House
  },
  data () {
    return {
      letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
      windowSize: {},
      configFENJhone: [
        ['r', 'p', '', '', '', '', 'P', 'R'],
        ['n', 'p', '', '', '', '', 'P', 'N'],
        ['b', 'p', '', '', '', '', 'P', 'B'],
        ['q', 'p', '', '', '', '', 'P', 'Q'],
        ['k', 'p', '', '', '', '', 'P', 'K'],
        ['b', 'p', '', '', '', '', 'P', 'B'],
        ['n', 'p', '', '', '', '', 'P', 'N'],
        ['r', 'p', '', '', '', '', 'P', 'R']
      ],
      housesPossibleActive: []
    }
  },
  mounted () {
    this.onResize()
    console.log(this.$refs)
  },

  methods: {
    isBlack (n, r) {
      return (8 - n) % 2 === 0 ? r % 2 === 0 : r % 2 !== 0
    },

    isWhite (n, r) {
      return (8 - n) % 2 === 0 ? r % 2 !== 0 : r % 2 === 0
    },
    onResize () {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
    },
    spawnPierce (n, r) {
      return this.configFENJhone[r - 1][n]
    },
    possiblesHousesGo (idHouse) {
      const house = this.$refs[idHouse][0]
      house.setIsPossibleCome(true)
      this.housesPossibleActive.push(house)
    },

    removePossiblesHousesGo () {
      this.housesPossibleActive.forEach((house) => {
        house.setIsPossibleCome(false)
      })
      this.housesPossibleActive = []
    }
  }
}
</script>

<style lang="scss" scoped>
.v-row-adjust {
  max-width: 900px !important;
  min-width: 900px !important;
}

.v-col-adjust {
  max-width: 100px !important;
  min-width: 100px !important;
}
//Depois adiciona aqui a logica para ele mudar a porra do scale jonatas
.change-scale-sm {
  scale: 0.69;
  margin-top: -110px;
}
.change-scale {
  scale: 0.9;
}

.shadow-container {
  box-shadow: 0px 6px 6px -3px rgb(255, 11, 11),
    0px 10px 14px 1px rgb(255, 0, 0), 0px 4px 18px 3px rgb(238, 4, 4) !important;
}
</style>
