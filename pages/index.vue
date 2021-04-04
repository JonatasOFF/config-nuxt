<template>
  <div>
    Escolhe uma das tab em cima please...
    (não consigo mudar sozinho (mo preguiça))
    <v-btn @click="increment">
      CLICKA PORRA CLICKA
    </v-btn>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {

  async asyncData ({ $axios, params }) {
    const post = await $axios.$get('https://www.google.com/')
    return { post }
  },
  methods: {
    ...mapMutations(['increment'])
  }
}
</script>
