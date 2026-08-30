'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = { class: "my-form-item display-flex" };
const _hoisted_2 = { class: "my-form-item__content" };
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "my-form-item",
  props: {
    label: {},
    labelWidth: { default: "80px" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.createElementVNode(
          "div",
          {
            class: "my-form-item-label",
            style: vue.normalizeStyle({
              width: __props.labelWidth
            })
          },
          vue.toDisplayString(__props.label),
          5
          /* TEXT, STYLE */
        ),
        vue.createElementVNode("div", _hoisted_2, [
          vue.renderSlot(_ctx.$slots, "default")
        ])
      ]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=my-form-item.vue2.js.map
