require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([8],{

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(170);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_234c870e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(173);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(171)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_234c870e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\activity\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-234c870e", Component.options)
  } else {
    hotAPI.reload("data-v-234c870e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 171:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 172:
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
    created: function created() {
        this.scrWidth = wx.getSystemInfoSync().windowWidth;
    },
    data: {
        scrWidth: 20, //屏幕原始尺寸
        URL: 'http://192.168.0.110:5000/',
        show: false, //产品参数是否显示
        detailJson: 666, //产品完整Json数据
        tagSelected: null
    },
    methods: {
        onChange: function onChange(event) {
            wx.showToast({
                icon: 'none',
                title: '\u5207\u6362\u81F3\u7B2C' + event.detail + '\u9879'
            });
        }
    }
});

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('img', {
    staticClass: "header",
    attrs: {
      "alt": "",
      "src": "http://192.168.0.110:5000/activity/header.jpg"
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "content",
    attrs: {
      "alt": "",
      "src": "http://192.168.0.110:5000/activity/contentHeader.jpg"
    }
  }), _vm._v(" "), _c('scroll-view', {
    staticClass: "scrollX",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "scroll-x": "true",
      "bindscroll": "scroll"
    }
  }, [_c('div', {
    staticClass: "scrollXItem"
  }, [_c('img', {
    staticClass: "ximg",
    attrs: {
      "src": "/static/demo/scrox.jpg"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("￥64.9")]), _vm._v(" "), _c('s', {
    staticClass: "orprice"
  }, [_vm._v("￥77.50")])], 1), _vm._v(" "), _c('div', {
    staticClass: "scrollXItem"
  }, [_c('img', {
    staticClass: "ximg",
    attrs: {
      "src": "/static/demo/scrox.jpg"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("￥64.9")]), _vm._v(" "), _c('s', {
    staticClass: "orprice"
  }, [_vm._v("￥77.50")])], 1), _vm._v(" "), _c('div', {
    staticClass: "scrollXItem"
  }, [_c('img', {
    staticClass: "ximg",
    attrs: {
      "src": "/static/demo/scrox.jpg"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("￥64.9")]), _vm._v(" "), _c('s', {
    staticClass: "orprice"
  }, [_vm._v("￥77.50")])], 1), _vm._v(" "), _c('div', {
    staticClass: "scrollXItem"
  }, [_c('img', {
    staticClass: "ximg",
    attrs: {
      "src": "/static/demo/scrox.jpg"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("￥64.9")]), _vm._v(" "), _c('s', {
    staticClass: "orprice"
  }, [_vm._v("￥77.50")])], 1), _vm._v(" "), _c('div', {
    staticClass: "scrollXItem"
  }, [_c('img', {
    staticClass: "ximg",
    attrs: {
      "src": "/static/demo/scrox.jpg"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("￥64.9")]), _vm._v(" "), _c('s', {
    staticClass: "orprice"
  }, [_vm._v("￥77.50")])], 1), _vm._v(" "), _c('div', {
    staticClass: "scrollXItem"
  }, [_c('img', {
    staticClass: "ximg",
    attrs: {
      "src": "/static/demo/scrox.jpg"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("￥64.9")]), _vm._v(" "), _c('s', {
    staticClass: "orprice"
  }, [_vm._v("￥77.50")])], 1), _vm._v(" "), _c('div', {
    staticClass: "scrollXItem"
  }, [_c('img', {
    staticClass: "ximg",
    attrs: {
      "src": "/static/demo/scrox.jpg"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("￥64.9")]), _vm._v(" "), _c('s', {
    staticClass: "orprice"
  }, [_vm._v("￥77.50")])], 1), _vm._v(" "), _c('div', {
    staticClass: "scrollXItem"
  }, [_c('img', {
    staticClass: "ximg",
    attrs: {
      "src": "/static/demo/scrox.jpg"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("￥64.9")]), _vm._v(" "), _c('s', {
    staticClass: "orprice"
  }, [_vm._v("￥77.50")])], 1), _vm._v(" "), _c('div', {
    staticClass: "scrollXItem"
  }, [_c('img', {
    staticClass: "ximg",
    attrs: {
      "src": "/static/demo/scrox.jpg"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("￥64.9")]), _vm._v(" "), _c('s', {
    staticClass: "orprice"
  }, [_vm._v("￥77.50")])], 1), _vm._v(" "), _c('div', {
    staticClass: "scrollXItem"
  }, [_c('img', {
    staticClass: "ximg",
    attrs: {
      "src": "/static/demo/scrox.jpg"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("￥64.9")]), _vm._v(" "), _c('s', {
    staticClass: "orprice"
  }, [_vm._v("￥77.50")])], 1)]), _vm._v(" "), _c('scroll-view', {
    staticClass: "scrollX",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "scroll-x": "true",
      "bindscroll": "scroll"
    }
  }, [_c('div', {
    staticClass: "scrollXItem"
  }, [_c('img', {
    staticClass: "ximg",
    attrs: {
      "src": "/static/demo/scrox.jpg"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("￥64.9")]), _vm._v(" "), _c('s', {
    staticClass: "orprice"
  }, [_vm._v("￥77.50")])], 1), _vm._v(" "), _c('div', {
    staticClass: "scrollXItem"
  }, [_c('img', {
    staticClass: "ximg",
    attrs: {
      "src": "/static/demo/scrox.jpg"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("￥64.9")]), _vm._v(" "), _c('s', {
    staticClass: "orprice"
  }, [_vm._v("￥77.50")])], 1), _vm._v(" "), _c('div', {
    staticClass: "scrollXItem"
  }, [_c('img', {
    staticClass: "ximg",
    attrs: {
      "src": "/static/demo/scrox.jpg"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("￥64.9")]), _vm._v(" "), _c('s', {
    staticClass: "orprice"
  }, [_vm._v("￥77.50")])], 1), _vm._v(" "), _c('div', {
    staticClass: "scrollXItem"
  }, [_c('img', {
    staticClass: "ximg",
    attrs: {
      "src": "/static/demo/scrox.jpg"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("￥64.9")]), _vm._v(" "), _c('s', {
    staticClass: "orprice"
  }, [_vm._v("￥77.50")])], 1), _vm._v(" "), _c('div', {
    staticClass: "scrollXItem"
  }, [_c('img', {
    staticClass: "ximg",
    attrs: {
      "src": "/static/demo/scrox.jpg"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("￥64.9")]), _vm._v(" "), _c('s', {
    staticClass: "orprice"
  }, [_vm._v("￥77.50")])], 1), _vm._v(" "), _c('div', {
    staticClass: "scrollXItem"
  }, [_c('img', {
    staticClass: "ximg",
    attrs: {
      "src": "/static/demo/scrox.jpg"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("￥64.9")]), _vm._v(" "), _c('s', {
    staticClass: "orprice"
  }, [_vm._v("￥77.50")])], 1), _vm._v(" "), _c('div', {
    staticClass: "scrollXItem"
  }, [_c('img', {
    staticClass: "ximg",
    attrs: {
      "src": "/static/demo/scrox.jpg"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("￥64.9")]), _vm._v(" "), _c('s', {
    staticClass: "orprice"
  }, [_vm._v("￥77.50")])], 1), _vm._v(" "), _c('div', {
    staticClass: "scrollXItem"
  }, [_c('img', {
    staticClass: "ximg",
    attrs: {
      "src": "/static/demo/scrox.jpg"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("￥64.9")]), _vm._v(" "), _c('s', {
    staticClass: "orprice"
  }, [_vm._v("￥77.50")])], 1), _vm._v(" "), _c('div', {
    staticClass: "scrollXItem"
  }, [_c('img', {
    staticClass: "ximg",
    attrs: {
      "src": "/static/demo/scrox.jpg"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("￥64.9")]), _vm._v(" "), _c('s', {
    staticClass: "orprice"
  }, [_vm._v("￥77.50")])], 1), _vm._v(" "), _c('div', {
    staticClass: "scrollXItem"
  }, [_c('img', {
    staticClass: "ximg",
    attrs: {
      "src": "/static/demo/scrox.jpg"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("￥64.9")]), _vm._v(" "), _c('s', {
    staticClass: "orprice"
  }, [_vm._v("￥77.50")])], 1)]), _vm._v(" "), _c('scroll-view', {
    staticClass: "scrollX",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "scroll-x": "true",
      "bindscroll": "scroll"
    }
  }, [_c('div', {
    staticClass: "scrollXItem"
  }, [_c('img', {
    staticClass: "ximg",
    attrs: {
      "src": "/static/demo/scrox.jpg"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("￥64.9")]), _vm._v(" "), _c('s', {
    staticClass: "orprice"
  }, [_vm._v("￥77.50")])], 1), _vm._v(" "), _c('div', {
    staticClass: "scrollXItem"
  }, [_c('img', {
    staticClass: "ximg",
    attrs: {
      "src": "/static/demo/scrox.jpg"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("￥64.9")]), _vm._v(" "), _c('s', {
    staticClass: "orprice"
  }, [_vm._v("￥77.50")])], 1), _vm._v(" "), _c('div', {
    staticClass: "scrollXItem"
  }, [_c('img', {
    staticClass: "ximg",
    attrs: {
      "src": "/static/demo/scrox.jpg"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("￥64.9")]), _vm._v(" "), _c('s', {
    staticClass: "orprice"
  }, [_vm._v("￥77.50")])], 1), _vm._v(" "), _c('div', {
    staticClass: "scrollXItem"
  }, [_c('img', {
    staticClass: "ximg",
    attrs: {
      "src": "/static/demo/scrox.jpg"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("￥64.9")]), _vm._v(" "), _c('s', {
    staticClass: "orprice"
  }, [_vm._v("￥77.50")])], 1), _vm._v(" "), _c('div', {
    staticClass: "scrollXItem"
  }, [_c('img', {
    staticClass: "ximg",
    attrs: {
      "src": "/static/demo/scrox.jpg"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("￥64.9")]), _vm._v(" "), _c('s', {
    staticClass: "orprice"
  }, [_vm._v("￥77.50")])], 1), _vm._v(" "), _c('div', {
    staticClass: "scrollXItem"
  }, [_c('img', {
    staticClass: "ximg",
    attrs: {
      "src": "/static/demo/scrox.jpg"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("￥64.9")]), _vm._v(" "), _c('s', {
    staticClass: "orprice"
  }, [_vm._v("￥77.50")])], 1), _vm._v(" "), _c('div', {
    staticClass: "scrollXItem"
  }, [_c('img', {
    staticClass: "ximg",
    attrs: {
      "src": "/static/demo/scrox.jpg"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("￥64.9")]), _vm._v(" "), _c('s', {
    staticClass: "orprice"
  }, [_vm._v("￥77.50")])], 1), _vm._v(" "), _c('div', {
    staticClass: "scrollXItem"
  }, [_c('img', {
    staticClass: "ximg",
    attrs: {
      "src": "/static/demo/scrox.jpg"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("￥64.9")]), _vm._v(" "), _c('s', {
    staticClass: "orprice"
  }, [_vm._v("￥77.50")])], 1), _vm._v(" "), _c('div', {
    staticClass: "scrollXItem"
  }, [_c('img', {
    staticClass: "ximg",
    attrs: {
      "src": "/static/demo/scrox.jpg"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("￥64.9")]), _vm._v(" "), _c('s', {
    staticClass: "orprice"
  }, [_vm._v("￥77.50")])], 1), _vm._v(" "), _c('div', {
    staticClass: "scrollXItem"
  }, [_c('img', {
    staticClass: "ximg",
    attrs: {
      "src": "/static/demo/scrox.jpg"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("￥64.9")]), _vm._v(" "), _c('s', {
    staticClass: "orprice"
  }, [_vm._v("￥77.50")])], 1)]), _vm._v(" "), _c('img', {
    staticClass: "content",
    attrs: {
      "alt": "",
      "src": "http://192.168.0.110:5000/activity/contentFoot.jpg"
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
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-234c870e", esExports)
  }
}

/***/ })

},[169]);