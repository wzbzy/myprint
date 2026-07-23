'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var myPopover = require('../popover/my-popover.vue.js');

const _hoisted_1 = { class: "my-tooltip_content" };
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "my-tooltip",
  props: {
    disabled: { type: Boolean },
    content: { default: "" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(myPopover.default, null, {
        reference: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default")
        ]),
        default: vue.withCtx(() => [
          vue.createElementVNode(
            "div",
            _hoisted_1,
            vue.toDisplayString(__props.content),
            1
            /* TEXT */
          )
        ]),
        _: 3
        /* FORWARDED */
      });
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=my-tooltip.vue2.js.map
