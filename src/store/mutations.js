import {
  RECEIVE_LIST,
  MOVIES_ARR,
  ADDTO_CART,
  REMOVEONE_CART,
} from './mutation-type'

export default {
  [RECEIVE_LIST](state, {list_data}) {
    state.listTmp = list_data
    console.log(state);
  },
  [MOVIES_ARR](state, data) {
    state.moviesArr = data
    console.log(state);
  },


  //我自己的
  [ADDTO_CART](state, item) {
    state.cart.push(item);
    console.log('购物车增加:', state);
  },
  [REMOVEONE_CART](state, index) {
    state.cart.splice(index, 1);
    console.log('购物车删除下标 ' + index + '后的数据为:', state);
  },

}
