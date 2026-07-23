'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var baseWidget = require('./base-widget.vue.js');

const _hoisted_1 = { class: "options-business user-select-none" };
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "business",
  props: {
    data: { default: () => ({}) },
    pageUnit: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(baseWidget.default, {
        data: __props.data,
        pageUnit: __props.pageUnit
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("div", _hoisted_1, [
            vue.createElementVNode(
              "span",
              null,
              vue.toDisplayString(__props.data.label),
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

exports.default = _sfc_main;
//# sourceMappingURL=business.vue2.js.map
