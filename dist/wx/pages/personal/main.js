require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([5],{

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(230);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_624d30ff_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(233);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(231)
}
var normalizeComponent = __webpack_require__(1)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_624d30ff_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\personal\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-624d30ff", Component.options)
  } else {
    hotAPI.reload("data-v-624d30ff", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 231:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  data: function data() {
    return {
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      userInfo: {
        nickName: null,
        avatarUrl: '/static/images/user.png'
      }
    };
  },

  onLoad: function onLoad() {
    var _this = this;

    // 查看是否授权
    wx.getSetting({
      success: function success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          _this.getUserInfo();
        }
      }
    });
  },
  methods: {
    getUserInfo: function getUserInfo() {
      var _this2 = this;

      wx.getUserInfo({
        success: function success(res) {
          _this2.userInfo = res.userInfo;
          var weInfo = [];
          weInfo[0] = 1834250342;
          weInfo[1] = _this2.userInfo.nickName;
          _this2.$store.dispatch('modiWeInfo', weInfo);
          console.log('获取用户信息，授权成功！', _this2.$store);
        },
        fail: function fail() {
          console.log('获取用户信息，授权失败！');
        }
      });
    },
    toAllOrders: function toAllOrders() {
      wx.navigateTo({
        url: '/pages/allorder/main'
      });
    }
  }

});

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "background"
  }), _vm._v(" "), _c('div', {
    staticClass: "top"
  }, [_c('img', {
    attrs: {
      "src": _vm.userInfo.avatarUrl,
      "alt": "欢迎您"
    }
  }), _vm._v(" "), (_vm.canIUse && _vm.userInfo.nickName === null) ? _c('button', {
    staticClass: "login",
    attrs: {
      "open-type": "getUserInfo",
      "eventid": '0'
    },
    on: {
      "getuserinfo": _vm.getUserInfo
    }
  }, [_vm._v("微信登录")]) : _vm._e(), _vm._v(" "), (!_vm.canIUse) ? _c('view', [_vm._v("请升级微信版本")]) : _vm._e(), _vm._v(" "), (_vm.userInfo.nickName) ? _c('view', {
    staticClass: "loginText"
  }, [_vm._v(_vm._s(_vm.userInfo.nickName))]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "cells"
  }, [_c('van-cell', {
    attrs: {
      "title": "我的订单",
      "is-link": "",
      "eventid": '1',
      "mpcomid": '0'
    },
    on: {
      "click": _vm.toAllOrders
    }
  }), _vm._v(" "), _c('van-cell', {
    attrs: {
      "title": "超市简介",
      "is-link": "",
      "mpcomid": '1'
    }
  })], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-624d30ff", esExports)
  }
}

/***/ })

},[229]);