<template>
  <div>
    Escolhe uma das tab em cima please...
    (não consigo mudar sozinho (mo preguiça))
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
