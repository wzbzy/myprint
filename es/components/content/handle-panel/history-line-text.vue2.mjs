import { defineComponent, openBlock, createElementBlock, createElementVNode, toDisplayString, unref } from 'vue';
import { reactive } from 'vue-demi';

const _hoisted_1 = { class: "history-line-wrapper" };
const _hoisted_2 = { class: "prefix" };
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "history-line-text",
  props: {
    content: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const data = reactive({
      prefix: "",
      suffix: ""
    });
    if (props.content) {
      const lastIndex = props.content.lastIndexOf(">");
      data.prefix = props.content.substring(0, lastIndex);
      data.suffix = props.content.substring(lastIndex, props.content.length);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode(
          "span",
          _hoisted_2,
          toDisplayString(unref(data).prefix),
          1
          /* TEXT */
        ),
        createElementVNode(
          "span",
          null,
          toDisplayString(unref(data).suffix),
          1
          /* TEXT */
        )
      ]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=history-line-text.vue2.mjs.map
