require("./common/manifest.js")
require("./common/vendor.js")
global.webpackJsonpMpvue([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RECEIVE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MOVIES_ARR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADDTO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return REMOVEONE_CART; });
var RECEIVE_LIST = 'receive_list';
var MOVIES_ARR = 'movies_arr';

//我自己
var ADDTO_CART = 'addto_cart';
var REMOVEONE_CART = 'removeone_cart';

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_stroe__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(31);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_2__App__["a" /* default */].mpType = 'app';

// 将store对象放置Vue的原型上，为的是每个实例都可以使用
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_1__store_stroe__["a" /* default */];

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({ App: __WEBPACK_IMPORTED_MODULE_2__App__["a" /* default */] });
app.$mount();

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mutations__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__getter__ = __webpack_require__(30);
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
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  listTmp: [],
  moviesArr: [],

  //我自己的state
  cart: []
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mutation_type__ = __webpack_require__(5);


/* harmony default export */ __webpack_exports__["a"] = ({
  getList: function getList(_ref) {
    var commit = _ref.commit;

    // 触发对应的mutation
    console.log('actions');
    commit(__WEBPACK_IMPORTED_MODULE_0__mutation_type__["c" /* RECEIVE_LIST */], listData);
  },
  getMoviesArr: function getMoviesArr(_ref2, data) {
    var commit = _ref2.commit;

    commit(__WEBPACK_IMPORTED_MODULE_0__mutation_type__["b" /* MOVIES_ARR */], data);
  },
  addToCart: function addToCart(_ref3, data) {
    var commit = _ref3.commit;

    commit(__WEBPACK_IMPORTED_MODULE_0__mutation_type__["a" /* ADDTO_CART */], data);
  },
  removeOneCart: function removeOneCart(_ref4, index) {
    var commit = _ref4.commit;

    commit(__WEBPACK_IMPORTED_MODULE_0__mutation_type__["d" /* REMOVEONE_CART */], index);
  }
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mutation_type__ = __webpack_require__(5);


var _RECEIVE_LIST$MOVIES_;



/* harmony default export */ __webpack_exports__["a"] = (_RECEIVE_LIST$MOVIES_ = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_RECEIVE_LIST$MOVIES_, __WEBPACK_IMPORTED_MODULE_1__mutation_type__["c" /* RECEIVE_LIST */], function (state, _ref) {
  var list_data = _ref.list_data;

  state.listTmp = list_data;
  console.log(state);
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_RECEIVE_LIST$MOVIES_, __WEBPACK_IMPORTED_MODULE_1__mutation_type__["b" /* MOVIES_ARR */], function (state, data) {
  state.moviesArr = data;
  console.log(state);
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_RECEIVE_LIST$MOVIES_, __WEBPACK_IMPORTED_MODULE_1__mutation_type__["a" /* ADDTO_CART */], function (state, item) {
  state.cart.push(item);
  console.log('购物车增加:', state);
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_RECEIVE_LIST$MOVIES_, __WEBPACK_IMPORTED_MODULE_1__mutation_type__["d" /* REMOVEONE_CART */], function (state, index) {
  state.cart.splice(index, 1);
  console.log('购物车删除下标 ' + index + '后的数据为:', state);
}), _RECEIVE_LIST$MOVIES_);

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, exports) {



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(34);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(32)
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
/* 32 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 33 */,
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ })
],[10]);