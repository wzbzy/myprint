import { defineComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot } from 'vue';

var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "my-icon",
  props: {
    disabled: { type: Boolean, default: false },
    modelValue: { type: Boolean, default: false },
    focusBk: { type: Boolean, default: true },
    size: { default: 20 },
    padding: { default: null }
  },
  emits: ["update:modelValue", "click"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    function click() {
      if (props.disabled) {
        return;
      }
      emit("update:modelValue", !props.modelValue);
      emit("click");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "i",
        {
          class: normalizeClass([{
            "my-icon-disabled": __props.disabled,
            active: __props.modelValue,
            "icon-focus-bk": __props.focusBk
          }, "style-icon"]),
          onClick: click,
          style: normalizeStyle({
            "font-size": __props.size + "px",
            "padding": __props.padding
          })
        },
        [
          renderSlot(_ctx.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      );
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=my-icon.vue2.mjs.map
