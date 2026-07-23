'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var myPopover = require('../popover/my-popover.vue.js');
var utils = require('../../../utils/utils.js');
var myIcon = require('../icon/my-icon.vue.js');

const _hoisted_1 = { class: "display-flex-column" };
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "my-color-picker",
  props: {
    disabled: { type: Boolean, default: false },
    modelValue: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    function changeFontColor(val) {
      const hexColor = utils.rgbaToHex(val);
      emit("update:modelValue", hexColor);
    }
    return (_ctx, _cache) => {
      const _component_color_picker = vue.resolveComponent("color-picker");
      return vue.openBlock(), vue.createBlock(myPopover.default, {
        trigger: "click",
        disabled: __props.disabled,
        placement: "bottom"
      }, {
        reference: vue.withCtx(() => [
          vue.createElementVNode(
            "div",
            {
              class: vue.normalizeClass(["display-flex font-style font-color", [{ "my-icon-disabled": __props.disabled }, "my-color-icon"]])
            },
            [
              vue.createElementVNode("div", _hoisted_1, [
                vue.renderSlot(_ctx.$slots, "default"),
                vue.createElementVNode(
                  "div",
                  {
                    style: vue.normalizeStyle({ backgroundColor: props.modelValue }),
                    class: "font-color-display"
                  },
                  null,
                  4
                  /* STYLE */
                )
              ]),
              vue.createVNode(myIcon.default, {
                class: "my-style-font_arrow icon-jt-x iconfont my-color-downList-arrow",
                size: 8,
                disabled: __props.disabled
              }, null, 8, ["disabled"])
            ],
            2
            /* CLASS */
          )
        ]),
        default: vue.withCtx(() => [
          vue.createVNode(_component_color_picker, {
            "is-widget": "",
            format: "rgb",
            shape: "circle",
            disableAlpha: true,
            onPureColorChange: changeFontColor
          })
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["disabled"]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=my-color-picker.vue2.js.map
