export const state = () => ({
  currentPage: 0
})

export const mutations = {
  changePageBy(state, num) {
    state.currentPage += num
  }
}

export const actions = {
  changePageBy(vuexContext, num) {
    vuexContext.commit('changePageBy', num)
  }
}
