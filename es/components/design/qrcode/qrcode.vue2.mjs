import { defineComponent, openBlock, createElementBlock, normalizeStyle, unref, createElementVNode } from 'vue';
import { ref, computed, nextTick, watch } from 'vue-demi';
import { unit2px } from '../../../utils/devicePixelRatio.mjs';
import QRCode from 'qrcode';
import { elementCommonStyle, getRecursionParentPanel, displayDesign } from '../../../utils/elementUtil.mjs';
import { updateMoveableRect } from '../../../plugins/moveable/moveable.mjs';
import { throttle } from 'lodash';
import { _defaultNum } from '../../../utils/numberUtil.mjs';
import { _defaultVal } from '../../../utils/utils.mjs';

const _hoisted_1 = ["src"];
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "qrcode",
  props: {
    element: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const qrCode = ref();
    const src = ref();
    const style = computed(() => {
      return elementCommonStyle(props.element);
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
        errorCorrectionLevel: _defaultVal(props.element.option.qrErrorCorrectionLevel, "Q"),
        // low, medium, quartile, high or L, M, Q, H
        maskPattern: 7,
        // 0, 1, 2, 3, 4, 5, 6, 7
        margin: 0,
        // Define how much wide the quiet zone should be
        scale: 4,
        width: unit2px(Math.min(props.element.width, props.element.height), getRecursionParentPanel(props.element)) * _defaultNum(props.element.option.qrCodeScale, 5),
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
        if (displayDesign(props.element)) {
          nextTick(() => {
            updateMoveableRect();
          });
        }
      }
    }
    const freshQrCodeThrottle = throttle((resetHeight) => {
      freshQrCode(resetHeight);
    }, 100);
    watch([() => qrCode.value, () => props.element.data, () => props.element.option.color, () => props.element.option.background, () => props.element.option.qrErrorCorrectionLevel, () => props.element.option.qrCodeScale], (_n, _o) => {
      if (displayDesign(props.element)) {
        freshQrCodeThrottle(true);
      } else {
        freshQrCode(true);
      }
    }, { immediate: true });
    watch([() => props.element.width, () => props.element.height], (_n, _o) => {
      if (displayDesign(props.element)) {
        freshQrCodeThrottle(false);
      } else {
        freshQrCode(false);
      }
    }, { immediate: true });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: "display-flex",
          style: normalizeStyle(unref(style))
        },
        [
          createElementVNode("img", {
            ref_key: "qrCode",
            ref: qrCode,
            style: { "object-fit": "cover", "width": "100%", "height": "100%" },
            id: "qrCode",
            alt: "",
            src: unref(src)
          }, null, 8, _hoisted_1)
        ],
        4
        /* STYLE */
      );
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=qrcode.vue2.mjs.map
