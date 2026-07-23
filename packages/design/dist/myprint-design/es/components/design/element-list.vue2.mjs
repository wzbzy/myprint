import { defineComponent, openBlock, createElementBlock, Fragment, renderList, createBlock } from 'vue';
import Design from './design.vue.mjs';

var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "element-list",
  props: {
    elementList: { default: () => [] }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList(__props.elementList, (element) => {
          return openBlock(), createBlock(Design, {
            key: element.id,
            element
          }, null, 8, ["element"]);
        }),
        128
        /* KEYED_FRAGMENT */
      );
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=element-list.vue2.mjs.map
