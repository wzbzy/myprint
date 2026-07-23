import { defineComponent, openBlock, createBlock, withCtx, createElementVNode, normalizeClass, toDisplayString, unref } from 'vue';
import { elementTypeFormat } from '../../../types/entity.mjs';
import baseWidget from './base-widget.vue.mjs';

const _hoisted_1 = { class: "options" };
const _hoisted_2 = { class: "icon-tip" };
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "basic",
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
              "div",
              {
                class: normalizeClass([__props.data.iconClass, "icon"])
              },
              null,
              2
              /* CLASS */
            ),
            createElementVNode(
              "div",
              _hoisted_2,
              toDisplayString(unref(elementTypeFormat)[__props.data.type]),
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
//# sourceMappingURL=basic.vue2.mjs.map
