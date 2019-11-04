require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([6],{

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(199);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_2cef4042_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(202);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(200)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_2cef4042_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\cart\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2cef4042", Component.options)
  } else {
    hotAPI.reload("data-v-2cef4042", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 200:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dist_wx_components_vant_weapp_dist_dialog_dialog__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        console.log('购物车onshow时orders为：', this.$store.state.orders);
        this.checkArray = [];
        this.ALL = this.$store.state.cart;
        for (var i = 0; i < this.ALL.length; i++) {
            this.checkArray.push(true);
        }
        console.log('this.ALL为：', this.ALL);
    },
    data: function data() {
        return {
            URL: 'http://192.168.0.110:5000/',
            ALL: null,
            checkArray: [],
            allCheck: true,
            imageURL: 'https://img.yzcdn.cn/vant/t-thirt.jpg'
        };
    },

    methods: {
        todetail: function todetail(ID) {
            console.log('点击了购物车条目');
            wx.navigateTo({
                url: '/pages/details/main?ID=' + ID
            });
        },
        onChange: function onChange(event) {
            console.log(this.allCheck);
            this.allCheck = !this.allCheck;
        },
        toCommit: function toCommit() {
            console.log('点击了提交订单');
            // console.log(this.$store.state.orders);

            var order = Object;
            order.ID = new Date().getTime();
            order.createTime = __WEBPACK_IMPORTED_MODULE_1_moment___default()(Date.now()).format('YYYY-MM-DD HH:mm:ss');
            order.list = [];
            order.payed = false;
            order.tPrice = this.allPrice;
            order.weID = this.$store.state.weID;
            order.weName = this.$store.state.weName;

            console.log('for 循环之前', this.$store.state.orders);
            // console.log(this.checkArray);
            for (var i = 0; i < this.checkArray.length; i++) {
                if (this.checkArray[i] === true) {
                    order.list.push(this.ALL[i]);
                }
            }
            this.$store.dispatch('addToOrder', order);
            this.$store.dispatch('modiAllCart', []);
            wx.redirectTo({
                url: '/pages/pay/main?ID=' + order.ID
            });
        },
        stepChange: function stepChange(event, index) {
            var _this = this;

            console.log(this.ALL);
            var mount = event.mp.detail;
            this.ALL[index].TPrice = mount * this.ALL[index].TypeSinglePrice;
            this.ALL[index].TOrPrice = mount * this.ALL[index].TypeOrSinglePrice;
            this.ALL[index].Mount = mount;
            console.log('步数改变');
            console.log(event);

            if (mount === 0) {
                __WEBPACK_IMPORTED_MODULE_0__dist_wx_components_vant_weapp_dist_dialog_dialog__["a" /* default */].confirm({
                    title: '确认删除？',
                    message: '当前商品数量已为 0 , 是否删除此项？'
                }).then(function () {
                    console.log('点击了确认');
                    _this.ALL.splice(index, 1);
                    _this.checkArray.splice(index, 1);
                    _this.$store.dispatch('modiAllCart', _this.ALL);
                }).catch(function () {
                    console.log('点击了取消');
                    _this.$store.dispatch('modiAllCart', _this.ALL);
                });
            }
            this.$store.dispatch('modiAllCart', this.ALL);
        },
        checkSingle: function checkSingle(index) {
            this.checkArray.splice(index, 1, !this.checkArray[index]);
            if (this.checkArray.indexOf(false) === -1) {
                this.allCheck = true;
            } else {
                this.allCheck = false;
            }
        },
        checkAll: function checkAll() {
            for (var i = 0; i < this.ALL.length; i++) {
                this.checkArray[i] = !this.allCheck;
            }
            this.allCheck = !this.allCheck;
        }
    },
    computed: {
        allPrice: function allPrice() {
            var _this2 = this;

            var all = 0;
            this.ALL.forEach(function (item, index) {
                if (_this2.checkArray[index] === true) {
                    all += item.TPrice;
                }
            });
            return all * 100;
        }
    }

});

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._l((_vm.ALL), function(item, index) {
    return _c('div', {
      staticClass: "card",
      attrs: {
        "wx:key": "index"
      }
    }, [_c('div', {
      staticClass: "checkBox"
    }, [_c('van-checkbox', {
      staticClass: "checkBoxContent",
      attrs: {
        "value": _vm.checkArray[index],
        "eventid": '0_' + index,
        "mpcomid": '0_' + index
      },
      on: {
        "change": function($event) {
          _vm.checkSingle(index)
        }
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "product"
    }, [_c('van-card', {
      attrs: {
        "tag": index === _vm.ALL.length - 1 ? 'New' : '',
        "price": item.TPrice,
        "origin-price": item.TOrPrice,
        "title": item.Name,
        "desc": item.TypeName,
        "thumb": _vm.URL + '/products/' + item.ID + '/BI/' + item.Img,
        "eventid": '2_' + index,
        "mpcomid": '2_' + index
      },
      on: {
        "click": function($event) {
          _vm.todetail(item.ID)
        }
      }
    }, [_c('view', {
      slot: "bottom"
    }, [_c('div', {
      staticClass: "number"
    }, [_c('van-stepper', {
      attrs: {
        "min": "0",
        "value": item.Mount,
        "eventid": '1_' + index,
        "mpcomid": '1_' + index
      },
      on: {
        "change": function($event) {
          _vm.stepChange($event, index)
        }
      }
    })], 1)])])], 1)])
  }), _vm._v(" "), _c('div', [_c('van-submit-bar', {
    attrs: {
      "price": _vm.allPrice,
      "button-text": "提交订单",
      "bind:submit": "onClickButton",
      "tip": true,
      "eventid": '4',
      "mpcomid": '4'
    },
    on: {
      "submit": _vm.toCommit
    }
  }, [_c('div', {
    staticClass: "allcheckBox"
  }, [_c('van-checkbox', {
    attrs: {
      "value": _vm.allCheck,
      "eventid": '3',
      "mpcomid": '3'
    },
    on: {
      "change": _vm.checkAll
    }
  }, [_vm._v("全选")])], 1)])], 1), _vm._v(" "), _c('div', {
    staticClass: "footSpace"
  }), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '5'
    }
  })], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2cef4042", esExports)
  }
}

/***/ })

},[198]);