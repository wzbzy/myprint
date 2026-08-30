'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vueDemi = require('vue-demi');
var computeStyle = require('../computeStyle.js');

var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "dottedVerticalLine",
  props: {
    element: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const labelStyle = vueDemi.computed(() => {
      return computeStyle.computedStyle(props.element, "vertical", props.element.option.dottedStyle);
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(
        "div",
        {
          class: "my-print-horizontal-line",
          style: vue.normalizeStyle(vue.unref(labelStyle))
        },
        null,
        4
        /* STYLE */
      );
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=dottedVerticalLine.vue2.js.map
