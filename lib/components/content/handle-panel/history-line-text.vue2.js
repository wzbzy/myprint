'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vueDemi = require('vue-demi');

const _hoisted_1 = { class: "history-line-wrapper" };
const _hoisted_2 = { class: "prefix" };
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "history-line-text",
  props: {
    content: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const data = vueDemi.reactive({
      prefix: "",
      suffix: ""
    });
    if (props.content) {
      const lastIndex = props.content.lastIndexOf(">");
      data.prefix = props.content.substring(0, lastIndex);
      data.suffix = props.content.substring(lastIndex, props.content.length);
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.createElementVNode(
          "span",
          _hoisted_2,
          vue.toDisplayString(vue.unref(data).prefix),
          1
          /* TEXT */
        ),
        vue.createElementVNode(
          "span",
          null,
          vue.toDisplayString(vue.unref(data).suffix),
          1
          /* TEXT */
        )
      ]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=history-line-text.vue2.js.map
