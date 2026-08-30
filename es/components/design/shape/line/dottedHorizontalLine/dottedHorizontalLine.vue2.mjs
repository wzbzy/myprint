import { defineComponent, openBlock, createElementBlock, normalizeStyle, unref } from 'vue';
import { computed } from 'vue-demi';
import { computedStyle } from '../computeStyle.mjs';

var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dottedHorizontalLine",
  props: {
    element: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const labelStyle = computed(() => {
      return computedStyle(props.element, "horizontal", props.element.option.dottedStyle);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: "my-print-horizontal-line",
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
//# sourceMappingURL=dottedHorizontalLine.vue2.mjs.map
