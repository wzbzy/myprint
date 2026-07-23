'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var myIcon = require('./my-icon.vue.js');
var myTooltip = require('../tooltip/my-tooltip.vue.js');

var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "tip-icon",
  props: {
    tips: { default: "" },
    disabled: { type: Boolean, default: false },
    modelValue: { type: Boolean, default: false },
    class: { default: "" },
    size: { default: null },
    padding: { default: null },
    placement: { default: "bottom" }
  },
  emits: ["update:modelValue", "click"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(myTooltip.default, {
        content: __props.tips,
        disabled: __props.tips == "",
        trigger: "hover",
        placement: __props.placement
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(myIcon.default, {
            disabled: __props.disabled,
            class: vue.normalizeClass(props.class),
            size: __props.size,
            padding: __props.padding,
            onClick: _cache[0] || (_cache[0] = ($event) => emit("click")),
            "onUpdate:modelValue": _cache[1] || (_cache[1] = (val) => emit("update:modelValue", val)),
            modelValue: __props.modelValue
          }, {
            default: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
            /* FORWARDED */
          }, 8, ["disabled", "class", "size", "padding", "modelValue"])
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["content", "disabled", "placement"]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=tip-icon.vue2.js.map
