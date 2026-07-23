'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var _sfc_main = /* @__PURE__ */ vue.defineComponent({
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
      return vue.openBlock(), vue.createElementBlock(
        "button",
        {
          "aria-disabled": "false",
          onClick: click,
          class: vue.normalizeClass([{
            "disabled": __props.disabled,
            "my-button--small": __props.size == "small",
            "is-active": __props.isActive
          }, "my-button"])
        },
        [
          vue.renderSlot(_ctx.$slots, "default")
        ],
        2
        /* CLASS */
      );
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=my-Button.vue2.js.map
