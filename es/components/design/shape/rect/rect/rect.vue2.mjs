import { defineComponent, openBlock, createElementBlock, normalizeStyle, unref } from 'vue';
import { computed } from 'vue-demi';
import { computedStyle } from '../../line/computeStyle.mjs';

var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "rect",
  props: {
    element: { type: Object, default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const labelStyle = computed(() => {
      return computedStyle(props.element, "rect", "solid");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: "my-print-rect__wrapper",
          style: normalizeStyle(unref(labelStyle))
        },
        null,
        4
        /* STYLE */
      );
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=rect.vue2.mjs.map
