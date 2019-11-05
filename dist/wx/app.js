require("./common/manifest.js")
require("./common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADDTO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MODIALL_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADDTO_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MODIALL_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MODI_WEINFO; });
var ADDTO_CART = 'addto_cart';
var MODIALL_CART = 'modiall_cart';
var ADDTO_ORDER = 'addto_order';
var MODIALL_ORDER = 'modiall_order';
var MODI_WEINFO = 'modi_weinfo';

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_stroe__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(182);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_2__App__["a" /* default */].mpType = 'app';

// 将store对象放置Vue的原型上，为的是每个实例都可以使用
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_1__store_stroe__["a" /* default */];

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({ App: __WEBPACK_IMPORTED_MODULE_2__App__["a" /* default */] });
app.$mount();

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mutations__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__getter__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__getter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__getter__);







// 声明使用vuex
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  state: __WEBPACK_IMPORTED_MODULE_2__state__["a" /* default */],
  actions: __WEBPACK_IMPORTED_MODULE_3__actions__["a" /* default */],
  getters: __WEBPACK_IMPORTED_MODULE_5__getter___default.a,
  mutations: __WEBPACK_IMPORTED_MODULE_4__mutations__["a" /* default */]
}));

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({

  weID: 1834250342,
  weName: '我想',

  cart: [],
  orders: []
});

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mutation_type__ = __webpack_require__(11);


/* harmony default export */ __webpack_exports__["a"] = ({
  modiWeInfo: function modiWeInfo(_ref, data) {
    var commit = _ref.commit;

    commit(__WEBPACK_IMPORTED_MODULE_0__mutation_type__["e" /* MODI_WEINFO */], data);
  },
  addToCart: function addToCart(_ref2, data) {
    var commit = _ref2.commit;

    commit(__WEBPACK_IMPORTED_MODULE_0__mutation_type__["a" /* ADDTO_CART */], data);
  },
  modiAllCart: function modiAllCart(_ref3, data) {
    var commit = _ref3.commit;

    commit(__WEBPACK_IMPORTED_MODULE_0__mutation_type__["c" /* MODIALL_CART */], data);
  },
  addToOrder: function addToOrder(_ref4, data) {
    var commit = _ref4.commit;

    commit(__WEBPACK_IMPORTED_MODULE_0__mutation_type__["b" /* ADDTO_ORDER */], data);
  },
  modiAllOrder: function modiAllOrder(_ref5, data) {
    var commit = _ref5.commit;

    commit(__WEBPACK_IMPORTED_MODULE_0__mutation_type__["d" /* MODIALL_ORDER */], data);
  }
});

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mutation_type__ = __webpack_require__(11);



var _ADDTO_CART$MODIALL_C;



/* harmony default export */ __webpack_exports__["a"] = (_ADDTO_CART$MODIALL_C = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ADDTO_CART$MODIALL_C, __WEBPACK_IMPORTED_MODULE_2__mutation_type__["a" /* ADDTO_CART */], function (state, item) {
  state.cart.push(item);
  console.log('购物车增加:', state);
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ADDTO_CART$MODIALL_C, __WEBPACK_IMPORTED_MODULE_2__mutation_type__["c" /* MODIALL_CART */], function (state, data) {
  state.cart = data;
  console.log('购物车执行了修改，修改后的数据为:', state.cart);
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ADDTO_CART$MODIALL_C, __WEBPACK_IMPORTED_MODULE_2__mutation_type__["b" /* ADDTO_ORDER */], function (state, data) {
  state.orders[state.orders.length] = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, data);
  console.log('订单增加', state.orders);
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ADDTO_CART$MODIALL_C, __WEBPACK_IMPORTED_MODULE_2__mutation_type__["d" /* MODIALL_ORDER */], function (state, data) {
  state.orders = data;
  console.log('订单执行了修改', state.orders);
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ADDTO_CART$MODIALL_C, __WEBPACK_IMPORTED_MODULE_2__mutation_type__["e" /* MODI_WEINFO */], function (state, data) {
  state.weID = data[0];
  state.weName = data[1];
  console.log('用户信息修改为', state.weID, state.weName);
}), _ADDTO_CART$MODIALL_C);

/***/ }),

/***/ 181:
/***/ (function(module, exports) {



/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(185);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(183)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-938e1100", Component.options)
  } else {
    hotAPI.reload("data-v-938e1100", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 183:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ })

},[146]);