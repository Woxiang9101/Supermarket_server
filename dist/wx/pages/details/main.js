require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(186);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_002d76b9_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(191);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(187)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_002d76b9_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\details\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-002d76b9", Component.options)
  } else {
    hotAPI.reload("data-v-002d76b9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 187:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dist_wx_components_vant_weapp_dist_toast_toast__ = __webpack_require__(189);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

    onLoad: function onLoad(options) {
        var _this = this;

        __WEBPACK_IMPORTED_MODULE_0__dist_wx_components_vant_weapp_dist_toast_toast__["a" /* default */].loading({
            mask: true,
            duration: 0,
            message: '加载中...'
        });
        this.ID = options.ID;
        this.BIratio = 1;
        this.scrWidth = wx.getSystemInfoSync().windowWidth;
        this.show = false;
        this.detailJson = null;
        this.tagSelected = null;
        this.tagSelectedName = '';
        this.tagSelectedMount = 1;
        this.tagSelectedSinglePrice = 0;
        this.tagSelectedOrSinglePrice = 0;
        this.cartMount = this.$store.state.cart.length;

        console.log('当前ID为:', this.ID);
        wx.request({
            url: 'http://192.168.0.110:5000/getproduct?ID=' + this.ID,
            success: function success(res) {
                console.log('【发起网络请求成功！】', res.data);
                _this.detailJson = res.data;
                _this.BIratio = _this.detailJson.BIratio;
                _this.swiWidth = _this.scrWidth / _this.detailJson.BIratio;
                _this.tagSelected = 0;
                _this.tagSelectedName = res.data.TypeandPrice[0][0];
                _this.tagSelectedSinglePrice = _this.detailJson.TypeandPrice[0][1];
                _this.tagSelectedOrSinglePrice = _this.detailJson.TypeandPrice[0][2];
                __WEBPACK_IMPORTED_MODULE_0__dist_wx_components_vant_weapp_dist_toast_toast__["a" /* default */].clear();
            }
        });
    },
    onShow: function onShow() {
        console.log('onShow');
        this.cartMount = this.$store.state.cart.length;
    },

    data: {
        ID: null,
        scrWidth: 20, //屏幕原始尺寸
        BIratio: 1,
        URL: 'http://192.168.0.110:5000/',
        show: false, //产品参数是否显示
        detailJson: null, //产品完整Json数据
        tagSelected: null,
        tagSelectedName: '',
        tagSelectedMount: 1,
        tagSelectedSinglePrice: 0,
        tagSelectedOrSinglePrice: 0,
        cartMount: 0
    },

    methods: {
        showPopup: function showPopup() {
            this.show = true;
        },
        onClose: function onClose() {
            this.show = false;
            console.log(this.detailJson);
            console.log(this.scrWidth / this.detailJson.BIratio);
        },
        toCart: function toCart() {
            console.log('点击了一下下');
            console.log(wx);
            wx.navigateTo({
                url: '/pages/cart/main'
            });
        },
        tagSelect: function tagSelect(i) {
            this.tagSelected = i;
            this.tagSelectedName = this.detailJson.TypeandPrice[this.tagSelected][0];
            this.tagSelectedSinglePrice = this.detailJson.TypeandPrice[this.tagSelected][1];
            this.tagSelectedOrSinglePrice = this.detailJson.TypeandPrice[this.tagSelected][2];
            console.log('当前选择的是', this.detailJson.TypeandPrice[this.tagSelected]);
        },
        mountChange: function mountChange(event) {
            this.tagSelectedMount = event.mp.detail;
        },
        addToCart: function addToCart() {
            var productItem = {
                Img: this.detailJson.BIs[0],
                ID: this.ID,
                Name: this.detailJson.Name,
                Type: this.tagSelected,
                TypeName: this.tagSelectedName,
                TypeSinglePrice: this.tagSelectedSinglePrice,
                TypeOrSinglePrice: this.tagSelectedOrSinglePrice,
                Mount: this.tagSelectedMount,
                TPrice: this.tagSelectedMount * this.tagSelectedSinglePrice,
                TOrPrice: this.tagSelectedMount * this.tagSelectedOrSinglePrice
            };
            this.$store.dispatch('addToCart', productItem);
            this.cartMount++;
            __WEBPACK_IMPORTED_MODULE_0__dist_wx_components_vant_weapp_dist_toast_toast__["a" /* default */].success({
                duration: 1000, // 持续展示 toast
                message: '加入成功!'
            });
            console.log(this.$store.state);
        }
    }

});

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_utils__ = __webpack_require__(190);

const defaultOptions = {
    type: 'text',
    mask: false,
    message: '',
    show: true,
    zIndex: 1000,
    duration: 3000,
    position: 'middle',
    forbidClick: false,
    loadingType: 'circular',
    selector: '#van-toast'
};
let queue = [];
let currentOptions = Object.assign({}, defaultOptions);
function parseOptions(message) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__common_utils__["a" /* isObj */])(message) ? message : { message };
}
function getContext() {
    const pages = getCurrentPages();
    return pages[pages.length - 1];
}
function Toast(toastOptions) {
    const options = Object.assign({}, currentOptions, parseOptions(toastOptions));
    const context = options.context || getContext();
    const toast = context.selectComponent(options.selector);
    if (!toast) {
        console.warn('未找到 van-toast 节点，请确认 selector 及 context 是否正确');
        return;
    }
    delete options.context;
    delete options.selector;
    toast.clear = () => {
        toast.set({ show: false });
        if (options.onClose) {
            options.onClose();
        }
    };
    queue.push(toast);
    toast.set(options);
    clearTimeout(toast.timer);
    if (options.duration > 0) {
        toast.timer = setTimeout(() => {
            toast.clear();
            queue = queue.filter(item => item !== toast);
        }, options.duration);
    }
    return toast;
}
const createMethod = (type) => (options) => Toast(Object.assign({ type }, parseOptions(options)));
Toast.loading = createMethod('loading');
Toast.success = createMethod('success');
Toast.fail = createMethod('fail');
Toast.clear = () => {
    queue.forEach(toast => {
        toast.clear();
    });
    queue = [];
};
Toast.setDefaultOptions = (options) => {
    Object.assign(currentOptions, options);
};
Toast.resetDefaultOptions = () => {
    currentOptions = Object.assign({}, defaultOptions);
};
/* harmony default export */ __webpack_exports__["a"] = (Toast);


/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isDef */
/* harmony export (immutable) */ __webpack_exports__["a"] = isObj;
/* unused harmony export isNumber */
/* unused harmony export range */
/* unused harmony export nextTick */
/* unused harmony export getSystemInfoSync */
function isDef(value) {
    return value !== undefined && value !== null;
}
function isObj(x) {
    const type = typeof x;
    return x !== null && (type === 'object' || type === 'function');
}
function isNumber(value) {
    return /^\d+$/.test(value);
}
function range(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
function nextTick(fn) {
    setTimeout(() => {
        fn();
    }, 1000 / 30);
}
let systemInfo = null;
function getSystemInfoSync() {
    if (systemInfo == null) {
        systemInfo = wx.getSystemInfoSync();
    }
    return systemInfo;
}


/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('swiper', {
    staticClass: "swiper",
    style: ({
      height: _vm.scrWidth / _vm.BIratio + 'px'
    }),
    attrs: {
      "indicator-dots": "true"
    }
  }, _vm._l((_vm.detailJson.BIs), function(item, index) {
    return _c('swiper-item', {
      key: index,
      attrs: {
        "wx:key": "index",
        "mpcomid": '0_' + index
      }
    }, [_c('img', {
      staticClass: "swiperItem",
      attrs: {
        "src": _vm.URL + '/products/' + _vm.detailJson.ID + '/BI/' + item,
        "alt": ""
      }
    })])
  })), _vm._v(" "), _c('div', {
    staticClass: "priceText"
  }, [_c('p', {
    staticClass: "price"
  }, [_vm._v("￥" + _vm._s(_vm.tagSelectedSinglePrice))]), _vm._v(" "), _c('span', {
    staticClass: "orprice"
  }, [_vm._v("原价￥" + _vm._s(_vm.tagSelectedOrSinglePrice))])], 1), _vm._v(" "), _c('h1', {
    staticClass: "title"
  }, [_vm._v("    " + _vm._s(_vm.detailJson.Name))]), _vm._v(" "), _c('div', _vm._l((_vm.detailJson.tags), function(item, index) {
    return (_vm.detailJson.tags) ? _c('div', {
      key: index,
      staticClass: "tag",
      attrs: {
        "wx:key": "index"
      }
    }, [(index % 4 === 0) ? _c('van-tag', {
      attrs: {
        "round": "",
        "type": "primary",
        "mpcomid": '1_' + index
      }
    }, [_vm._v(_vm._s(item))]) : _vm._e(), _vm._v(" "), (index % 4 === 1) ? _c('van-tag', {
      attrs: {
        "round": "",
        "type": "success",
        "mpcomid": '2_' + index
      }
    }, [_vm._v(_vm._s(item))]) : _vm._e(), _vm._v(" "), (index % 4 === 2) ? _c('van-tag', {
      attrs: {
        "round": "",
        "type": "danger",
        "mpcomid": '3_' + index
      }
    }, [_vm._v(_vm._s(item))]) : _vm._e(), _vm._v(" "), (index % 4 === 3) ? _c('van-tag', {
      attrs: {
        "round": "",
        "type": "warning",
        "mpcomid": '4_' + index
      }
    }, [_vm._v(_vm._s(item))]) : _vm._e()], 1) : _vm._e()
  })), _vm._v(" "), _c('div', {
    staticClass: "noticeBar"
  }, [(_vm.detailJson.tip) ? _c('van-notice-bar', {
    attrs: {
      "left-icon": "http://192.168.0.110:5000/icon/喇叭.png",
      "text": _vm.detailJson.tip,
      "mpcomid": '5'
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('van-cell', {
    attrs: {
      "title": "请选择",
      "value": "请选择商品类型和数量",
      "center": true,
      "clickable": false,
      "arrow-direction": "down",
      "mpcomid": '6'
    }
  }), _vm._v(" "), _c('view', {
    staticClass: "select"
  }, [_c('div', {
    staticClass: "selected"
  }, [_c('p', {
    staticClass: "selText"
  }, [_vm._v("已选")]), _vm._v(" "), _c('p', {
    staticClass: "selectedInfo"
  }, [_vm._v("\n          " + _vm._s(_vm.tagSelectedName) + "\n        ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "product"
  }, [_c('p', {
    staticClass: "selText chanpin"
  }, [_vm._v("产品")]), _vm._v(" "), _c('div', {
    staticClass: "proType"
  }, _vm._l((_vm.detailJson.TypeandPrice), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "proTag",
      class: {
        'proTagSelected': _vm.tagSelected == index
      },
      attrs: {
        "wx:key": "index",
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.tagSelect(index)
        }
      }
    }, [_vm._v("\n            " + _vm._s(item[0]) + "\n          ")])
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "mount"
  }, [_c('p', {
    staticClass: "selText"
  }, [_vm._v("数量")]), _vm._v(" "), _c('van-stepper', {
    attrs: {
      "value": 1,
      "eventid": '1',
      "mpcomid": '7'
    },
    on: {
      "change": _vm.mountChange
    }
  })], 1)]), _vm._v(" "), _c('van-cell', {
    attrs: {
      "title": "商品参数",
      "is-link": "",
      "eventid": '2',
      "mpcomid": '8'
    },
    on: {
      "click": _vm.showPopup
    }
  }), _vm._v(" "), _c('van-popup', {
    attrs: {
      "show": _vm.show,
      "position": "bottom",
      "custom-style": "height: 60%",
      "eventid": '3',
      "mpcomid": '9'
    },
    on: {
      "close": _vm.onClose
    }
  }, [_c('div', {
    staticClass: "chart"
  }, _vm._l((_vm.detailJson.Paras), function(item, index) {
    return _c('div', {
      staticClass: "chartLine",
      attrs: {
        "wx:key": "index"
      }
    }, [_c('div', {
      staticClass: "proName"
    }, [_vm._v(_vm._s(item[0]))]), _vm._v(" "), _c('div', {
      staticClass: "proValue"
    }, [_vm._v(_vm._s(item[1]))])])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "detailText"
  }, [_c('van-tag', {
    staticClass: "detailTag",
    attrs: {
      "round": "",
      "type": "primary",
      "mpcomid": '10'
    }
  }, [_vm._v("商品详情")])], 1), _vm._v(" "), _c('div', {
    staticClass: "imgBox"
  }, _vm._l((_vm.detailJson.DIs), function(item, index) {
    return _c('img', {
      staticClass: "detailImg",
      style: ({
        height: _vm.scrWidth / item.ratio + 'px'
      }),
      attrs: {
        "wx:key": "index",
        "src": _vm.URL + '/products/' + _vm.detailJson.ID + '/DI/' + item.name
      }
    })
  })), _vm._v(" "), _c('van-goods-action', {
    attrs: {
      "mpcomid": '15'
    }
  }, [_c('van-goods-action-icon', {
    attrs: {
      "icon": "chat-o",
      "text": "客服",
      "dot": "",
      "mpcomid": '11'
    }
  }), _vm._v(" "), _c('van-goods-action-icon', {
    attrs: {
      "icon": "cart-o",
      "text": "购物车",
      "info": _vm.cartMount == 0 ? null : _vm.cartMount,
      "eventid": '4',
      "mpcomid": '12'
    },
    on: {
      "click": _vm.toCart
    }
  }), _vm._v(" "), _c('van-goods-action-button', {
    attrs: {
      "text": "加入购物车",
      "type": "warning",
      "eventid": '5',
      "mpcomid": '13'
    },
    on: {
      "click": _vm.addToCart
    }
  }), _vm._v(" "), _c('van-goods-action-button', {
    attrs: {
      "text": "立即购买",
      "mpcomid": '14'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "lastTip"
  }, [_vm._v("亲！没了油！^-^")]), _vm._v(" "), _c('van-toast', {
    attrs: {
      "id": "van-toast",
      "mpcomid": '16'
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
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-002d76b9", esExports)
  }
}

/***/ })

},[185]);