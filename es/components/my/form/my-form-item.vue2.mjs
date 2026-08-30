import { defineComponent, openBlock, createElementBlock, createElementVNode, normalizeStyle, toDisplayString, renderSlot } from 'vue';

const _hoisted_1 = { class: "my-form-item display-flex" };
const _hoisted_2 = { class: "my-form-item__content" };
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "my-form-item",
  props: {
    label: {},
    labelWidth: { default: "80px" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode(
          "div",
          {
            class: "my-form-item-label",
            style: normalizeStyle({
              width: __props.labelWidth
            })
          },
          toDisplayString(__props.label),
          5
          /* TEXT, STYLE */
        ),
        createElementVNode("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "default")
        ])
      ]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=my-form-item.vue2.mjs.map
