'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var entity = require('../../../types/entity.js');
var baseWidget = require('./base-widget.vue.js');

const _hoisted_1 = { class: "options" };
const _hoisted_2 = { class: "icon-tip" };
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "basic",
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
              "div",
              {
                class: vue.normalizeClass([__props.data.iconClass, "icon"])
              },
              null,
              2
              /* CLASS */
            ),
            vue.createElementVNode(
              "div",
              _hoisted_2,
              vue.toDisplayString(vue.unref(entity.elementTypeFormat)[__props.data.type]),
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
//# sourceMappingURL=basic.vue2.js.map
