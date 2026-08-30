'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vueDemi = require('vue-demi');
var devicePixelRatio = require('../../../utils/devicePixelRatio.js');
var QRCode = require('qrcode');
var elementUtil = require('../../../utils/elementUtil.js');
var moveable = require('../../../plugins/moveable/moveable.js');
var lodash = require('lodash');
var numberUtil = require('../../../utils/numberUtil.js');
var utils = require('../../../utils/utils.js');

const _hoisted_1 = ["src"];
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "qrcode",
  props: {
    element: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const qrCode = vueDemi.ref();
    const src = vueDemi.ref();
    const style = vueDemi.computed(() => {
      return elementUtil.elementCommonStyle(props.element);
    });
    function freshQrCode(resetHeight) {
      if (qrCode.value == null) {
        return;
      }
      if (props.element.data == null) {
        return;
      }
      if (props.element.data == "") {
        return;
      }
      QRCode.toDataURL(props.element.data, {
        // version: 1,
        errorCorrectionLevel: utils._defaultVal(props.element.option.qrErrorCorrectionLevel, "Q"),
        // low, medium, quartile, high or L, M, Q, H
        maskPattern: 7,
        // 0, 1, 2, 3, 4, 5, 6, 7
        margin: 0,
        // Define how much wide the quiet zone should be
        scale: 4,
        width: devicePixelRatio.unit2px(Math.min(props.element.width, props.element.height), elementUtil.getRecursionParentPanel(props.element)) * numberUtil._defaultNum(props.element.option.qrCodeScale, 5),
        // 宽度
        color: {
          light: props.element.option.background,
          // 背景色
          dark: props.element.option.color
          // 二维码颜色
        }
      }, (error, url) => {
        if (error) {
          console.error(error);
          return;
        }
        src.value = url;
      });
      if (resetHeight && props.element.runtimeOption.workEnvironment !== "DataTable") {
        props.element.height = props.element.width;
        props.element.runtimeOption.height = props.element.runtimeOption.width;
        props.element.runtimeOption.init.height = props.element.runtimeOption.width;
        if (elementUtil.displayDesign(props.element)) {
          vueDemi.nextTick(() => {
            moveable.updateMoveableRect();
          });
        }
      }
    }
    const freshQrCodeThrottle = lodash.throttle((resetHeight) => {
      freshQrCode(resetHeight);
    }, 100);
    vueDemi.watch([() => qrCode.value, () => props.element.data, () => props.element.option.color, () => props.element.option.background, () => props.element.option.qrErrorCorrectionLevel, () => props.element.option.qrCodeScale], (_n, _o) => {
      if (elementUtil.displayDesign(props.element)) {
        freshQrCodeThrottle(true);
      } else {
        freshQrCode(true);
      }
    }, { immediate: true });
    vueDemi.watch([() => props.element.width, () => props.element.height], (_n, _o) => {
      if (elementUtil.displayDesign(props.element)) {
        freshQrCodeThrottle(false);
      } else {
        freshQrCode(false);
      }
    }, { immediate: true });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(
        "div",
        {
          class: "display-flex",
          style: vue.normalizeStyle(vue.unref(style))
        },
        [
          vue.createElementVNode("img", {
            ref_key: "qrCode",
            ref: qrCode,
            style: { "object-fit": "cover", "width": "100%", "height": "100%" },
            id: "qrCode",
            alt: "",
            src: vue.unref(src)
          }, null, 8, _hoisted_1)
        ],
        4
        /* STYLE */
      );
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=qrcode.vue2.js.map
