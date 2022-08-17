export const state = () => ({
  user_info: {},
  is_auth: false
})

export const mutations = {
  setUserInfo(state, info) {
    state.user_info = info
    state.is_auth = true
  },
}

export const actions = {
  getUserInfo({ commit }) {
    this.$axios
      .get('/user/info')
      .then((res) => {
        if (res.state === 'success' && res.data) {
          commit('setUserInfo', res.data)
        } else {
          this.getFlash('error', res.text)
        }
      })
      .catch((err) => {
        //do nothing
      })
  },
}

export const getters = {}
