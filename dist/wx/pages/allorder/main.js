require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([7],{

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(175);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_522b08cc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(197);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(176)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_522b08cc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\allorder\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-522b08cc", Component.options)
  } else {
    hotAPI.reload("data-v-522b08cc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 176:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dist_wx_components_vant_weapp_dist_dialog_dialog__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
    onShow: function onShow() {
        this.orders = [];
        console.log('onshow执行了');
        var allOrders = this.$store.state.orders;

        for (var i = 0; i < allOrders.length; i++) {
            var indexItem = allOrders[i];
            this.orders[i] = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, indexItem);
        }
        console.log('onshow时orders为:', this.orders);
    },
    data: {
        URL: 'http://192.168.0.110:5000/',
        orders: []
    },
    methods: {
        toOrderDetail: function toOrderDetail(ID) {
            console.log('在总订单页面点击了跳转到订单详情');
            wx.navigateTo({
                url: '/pages/pay/main?ID=' + ID
            });
        }

    },
    computed: {
        waitPayOrders: function waitPayOrders() {
            return this.orders.filter(function (item, index) {
                return item.payed === false;
            });
        },
        hasPayOrders: function hasPayOrders() {
            return this.orders.filter(function (item, index) {
                return item.payed === true;
            });
        },
        endOrders: function endOrders() {
            return this.orders.filter(function (item, index) {
                return item.end === true;
            });
        }
    }

});

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('van-tabs', {
    attrs: {
      "sticky": "",
      "mpcomid": '8'
    }
  }, [_c('van-tab', {
    attrs: {
      "title": "全部",
      "mpcomid": '1'
    }
  }, _vm._l((_vm.orders), function(item, index) {
    return _c('div', {
      staticClass: "card",
      attrs: {
        "wx:key": "index",
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.toOrderDetail(item.ID)
        }
      }
    }, [_c('div', {
      staticClass: "product"
    }, [_c('van-card', {
      attrs: {
        "price": item.tPrice,
        "title": item.list[0].Name + '... ',
        "desc": item.list[0].TypeName + '...',
        "thumb": _vm.URL + '/products/' + item.list[0].ID + '/BI/' + item.list[0].Img,
        "mpcomid": '0_' + index
      }
    }, [_c('view', {
      slot: "bottom"
    }, [_c('div', {
      staticClass: "number"
    }, [_vm._v("\n                x " + _vm._s(item.list.length) + "\n              ")])])])], 1)])
  })), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "待付款",
      "mpcomid": '3'
    }
  }, _vm._l((_vm.waitPayOrders), function(item, index) {
    return _c('div', {
      staticClass: "card",
      attrs: {
        "wx:key": "index",
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.toOrderDetail(item.ID)
        }
      }
    }, [_c('div', {
      staticClass: "product"
    }, [_c('van-card', {
      attrs: {
        "price": item.tPrice,
        "title": item.list[0].Name + '... ',
        "desc": item.list[0].TypeName + '...',
        "thumb": _vm.URL + '/products/' + item.list[0].ID + '/BI/' + item.list[0].Img,
        "mpcomid": '2_' + index
      }
    }, [_c('view', {
      slot: "bottom"
    }, [_c('div', {
      staticClass: "number"
    }, [_vm._v("\n                x " + _vm._s(item.list.length) + "\n              ")])])])], 1)])
  })), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "待收货",
      "mpcomid": '5'
    }
  }, _vm._l((_vm.hasPayOrders), function(item, index) {
    return _c('div', {
      staticClass: "card",
      attrs: {
        "wx:key": "index",
        "eventid": '2_' + index
      },
      on: {
        "click": function($event) {
          _vm.toOrderDetail(item.ID)
        }
      }
    }, [_c('div', {
      staticClass: "product"
    }, [_c('van-card', {
      attrs: {
        "price": item.tPrice,
        "title": item.list[0].Name + '... ',
        "desc": item.list[0].TypeName + '...',
        "thumb": _vm.URL + '/products/' + item.list[0].ID + '/BI/' + item.list[0].Img,
        "mpcomid": '4_' + index
      }
    }, [_c('view', {
      slot: "bottom"
    }, [_c('div', {
      staticClass: "number"
    }, [_vm._v("\n                x " + _vm._s(item.list.length) + "\n              ")])])])], 1)])
  })), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "已完成",
      "mpcomid": '7'
    }
  }, _vm._l((_vm.endOrders), function(item, index) {
    return _c('div', {
      staticClass: "card",
      attrs: {
        "wx:key": "index",
        "eventid": '3_' + index
      },
      on: {
        "click": function($event) {
          _vm.toOrderDetail(item.ID)
        }
      }
    }, [_c('div', {
      staticClass: "product"
    }, [_c('van-card', {
      attrs: {
        "price": item.tPrice,
        "title": item.list[0].Name + '... ',
        "desc": item.list[0].TypeName + '...',
        "thumb": _vm.URL + '/products/' + item.list[0].ID + '/BI/' + item.list[0].Img,
        "mpcomid": '6_' + index
      }
    }, [_c('view', {
      slot: "bottom"
    }, [_c('div', {
      staticClass: "number"
    }, [_vm._v("\n                x " + _vm._s(item.list.length) + "\n              ")])])])], 1)])
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "footSpace"
  }), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '9'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-522b08cc", esExports)
  }
}

/***/ })

},[174]);