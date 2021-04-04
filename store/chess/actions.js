export default {
  setRefsHouse (context, payload) {
    if (!context.state.length) {
      context.commit('refsListSet', payload)
    }
  }
}
