import {
  RECEIVE_LIST,
  MOVIES_ARR,
  ADDTO_CART,
  REMOVEONE_CART,
} from './mutation-type'

export default {
  getList({commit}) {
    // 触发对应的mutation
    console.log('actions');
    commit(RECEIVE_LIST, listData)
  },
  getMoviesArr({commit}, data) {
    commit(MOVIES_ARR, data)
  },
  addToCart({commit}, data) {
    commit(ADDTO_CART, data)
  },
  removeOneCart({commit}, index) {
    commit(REMOVEONE_CART, index)
  },
}
