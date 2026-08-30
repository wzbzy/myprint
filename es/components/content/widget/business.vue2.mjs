import { defineComponent, openBlock, createBlock, withCtx, createElementVNode, toDisplayString } from 'vue';
import baseWidget from './base-widget.vue.mjs';

const _hoisted_1 = { class: "options-business user-select-none" };
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "business",
  props: {
    data: { default: () => ({}) },
    pageUnit: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(baseWidget, {
        data: __props.data,
        pageUnit: __props.pageUnit
      }, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            createElementVNode(
              "span",
              null,
              toDisplayString(__props.data.label),
              1
              /* TEXT */
            )
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["data", "pageUnit"]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=business.vue2.mjs.map
