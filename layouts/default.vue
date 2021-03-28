<template>
  <v-app>
    <v-app-bar color="$fff" short app>
      <v-app-bar-title>
        Site Teste para o Rafa ver espero que o nome não esteja muito grande só
        pra ver até onde vai esse titulo to curioso sério
      </v-app-bar-title>

      <template #extension>
        <v-tabs>
          <v-tab>Tabela do Alan</v-tab>
          <v-tab>Xadrez do Jonatas</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <v-container
        class="d-flex align-center justify-space-between"
        fluid
      >
        <v-row align="center" justify="center">
          <nuxt />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss">
html {
    overflow: hidden;
    /* Hide scrollbars */
}
</style>
