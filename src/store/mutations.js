import {
  ADDTO_CART,
  MODIALL_CART,
  ADDTO_ORDER,
  MODIALL_ORDER,
  MODI_WEINFO
} from './mutation-type'

export default {
  [ADDTO_CART](state, item) {
    state.cart.push(item);
    console.log('购物车增加:', state);
  },
  [MODIALL_CART](state, data) {
    state.cart = data;
    console.log('购物车执行了修改，修改后的数据为:',state.cart);
  },
  [ADDTO_ORDER](state, data) {
    state.orders.push(data);
    console.log('订单增加',state.orders);
  },
  [MODIALL_ORDER](state, data) {
    state.orders = data;
    console.log('订单执行了修改',state.orders);
  },
  [MODI_WEINFO](state, data) {
    state.weID = data[0];
    state.weName = data[1];
    console.log('用户信息修改为',state.weID,state.weName);
  },


}
