export const state = () => ({
  products: [],
  favorite: []
});

export const mutations =  {
  setProduct(state, item) {
    state.products.push(item)
  },
  deleteProduct(state, el) {
    state.products.splice(el, 1)
  },
  deleteAll(state, item) {
    item === 1 ? state.products = [] : null
  },

  setFavorite(state, item) {
    state.favorite.push(item)
  },
  deleteFavorite(state, el) {
    state.favorite.splice(el, 1)
  },
  deleteAllFavorite(state, item) {
    item === 1 ? state.favorite = [] : null
  }
}

export default {
  state,
  mutations,
}
