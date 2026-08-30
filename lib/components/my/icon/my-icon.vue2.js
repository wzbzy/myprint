'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var _sfc_main = /* @__PURE__ */ vue.defineComponent({
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
      return vue.openBlock(), vue.createElementBlock(
        "i",
        {
          class: vue.normalizeClass([{
            "my-icon-disabled": __props.disabled,
            active: __props.modelValue,
            "icon-focus-bk": __props.focusBk
          }, "style-icon"]),
          onClick: click,
          style: vue.normalizeStyle({
            "font-size": __props.size + "px",
            "padding": __props.padding
          })
        },
        [
          vue.renderSlot(_ctx.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      );
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=my-icon.vue2.js.map
