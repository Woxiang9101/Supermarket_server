import {
  ADDTO_CART,
  MODIALL_CART,
  ADDTO_ORDER,
  MODIALL_ORDER,
  MODI_WEINFO
} from './mutation-type'

export default {
  modiWeInfo({commit}, data) {
    commit(MODI_WEINFO, data)
  },
  addToCart({commit}, data) {
    commit(ADDTO_CART, data)
  },
  modiAllCart({commit}, data) {
    commit(MODIALL_CART, data)
  },
  addToOrder({commit}, data) {
    commit(ADDTO_ORDER, data)
  },
  modiAllOrder({commit}, data) {
    commit(MODIALL_ORDER, data)
  },
}
