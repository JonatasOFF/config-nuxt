<template>
  <v-container class="change-scale" fill-height>
    <v-row white align="center" justify="center">
      <v-container fluid dark class="elevation-10 v-row-adjust">
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
                {{ letters[r - 1] }}
                {{ 8 - n }}
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
export default {
  data () {
    return {
      letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    }
  },

  methods: {
    isBlack (n, r) {
      return (8 - n) % 2 === 0 ? r % 2 === 0 : r % 2 !== 0
    },

    isWhite (n, r) {
      return (8 - n) % 2 === 0 ? r % 2 !== 0 : r % 2 === 0
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
.change-scale {
  scale: 0.9;

}
</style>
