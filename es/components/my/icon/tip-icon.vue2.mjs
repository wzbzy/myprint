import { defineComponent, openBlock, createBlock, withCtx, createVNode, normalizeClass, renderSlot } from 'vue';
import MyIcon from './my-icon.vue.mjs';
import MyTooltip from '../tooltip/my-tooltip.vue.mjs';

var _sfc_main = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createBlock(MyTooltip, {
        content: __props.tips,
        disabled: __props.tips == "",
        trigger: "hover",
        placement: __props.placement
      }, {
        default: withCtx(() => [
          createVNode(MyIcon, {
            disabled: __props.disabled,
            class: normalizeClass(props.class),
            size: __props.size,
            padding: __props.padding,
            onClick: _cache[0] || (_cache[0] = ($event) => emit("click")),
            "onUpdate:modelValue": _cache[1] || (_cache[1] = (val) => emit("update:modelValue", val)),
            modelValue: __props.modelValue
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
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

export { _sfc_main as default };
//# sourceMappingURL=tip-icon.vue2.mjs.map
