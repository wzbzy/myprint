'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var myIcon = require('./my-icon.vue.js');
var myPopover = require('../popover/my-popover.vue.js');

const _hoisted_1 = { class: "display-flex" };
const _hoisted_2 = { class: "display-flex-column" };
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "tool-icon-popover",
  props: {
    disabled: { type: Boolean, default: false },
    showArrow: { type: Boolean, default: true }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(myPopover.default, {
        trigger: "click",
        disabled: __props.disabled,
        placement: "bottom"
      }, {
        reference: vue.withCtx(() => [
          vue.createElementVNode(
            "div",
            {
              class: vue.normalizeClass(["display-flex icon-popover", [{ "my-icon-disabled": __props.disabled }, "my-color-icon"]])
            },
            [
              vue.createElementVNode("div", _hoisted_1, [
                vue.createElementVNode("div", _hoisted_2, [
                  vue.renderSlot(_ctx.$slots, "reference")
                ]),
                __props.showArrow ? (vue.openBlock(), vue.createBlock(myIcon.default, {
                  key: 0,
                  size: 8,
                  class: "my-style-font_arrow icon-jt-x iconfont my-icon-downList-arrow",
                  disabled: __props.disabled
                }, null, 8, ["disabled"])) : vue.createCommentVNode("v-if", true)
              ])
            ],
            2
            /* CLASS */
          )
        ]),
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "panel")
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["disabled"]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=tool-icon-popover.vue2.js.map
