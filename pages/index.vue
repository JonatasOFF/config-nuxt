<template>
  <div>
    CHUPA MINHA PICA
    <h1>{{ post }}</h1>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios, params }) {
    const post = await $axios.$get('https://www.google.com/')
    return { post }
  }
}
</script>
