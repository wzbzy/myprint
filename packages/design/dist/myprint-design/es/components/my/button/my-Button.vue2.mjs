import { defineComponent, openBlock, createElementBlock, normalizeClass, renderSlot } from 'vue';

var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "my-Button",
  props: {
    size: { default: "" },
    disabled: { type: Boolean, default: false },
    isActive: { type: Boolean, default: false }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    function click() {
      if (props.disabled) {
        return;
      }
      emit("click");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "button",
        {
          "aria-disabled": "false",
          onClick: click,
          class: normalizeClass([{
            "disabled": __props.disabled,
            "my-button--small": __props.size == "small",
            "is-active": __props.isActive
          }, "my-button"])
        },
        [
          renderSlot(_ctx.$slots, "default")
        ],
        2
        /* CLASS */
      );
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=my-Button.vue2.mjs.map
