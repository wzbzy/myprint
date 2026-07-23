'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var design = require('./design.vue.js');

var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "element-list",
  props: {
    elementList: { default: () => [] }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList(__props.elementList, (element) => {
          return vue.openBlock(), vue.createBlock(design.default, {
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

exports.default = _sfc_main;
//# sourceMappingURL=element-list.vue2.js.map
