export const state = () => ({
  list: []
})

export const mutationss = {
  addUser (state, user) {
    state.list.push(user)
  }
}

export const actions = {
  addUser ({ commit }, { user }) {
    commit("addUser", user)
  }
}