export default {
  refsListSet (state, payload) {
    const object = {}
    Object.keys(payload).forEach((k) => {
      object[k] = payload[k][0]
    })

    state.listRefs = object
  },
  putHousesActive (state, payload) {
    if (!state.listHouse) {
      state.listHouse = []
    }
    if (payload === undefined) {
      state.listHouse.forEach((element) => {
        element.setIsPossibleCome(false, '')
      })
      state.listHouse = []
    } else {
      state.listHouse.push(payload)
    }
  }
}
