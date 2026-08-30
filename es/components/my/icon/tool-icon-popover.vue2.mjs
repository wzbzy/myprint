import { defineComponent, openBlock, createBlock, withCtx, createElementVNode, normalizeClass, renderSlot, createCommentVNode } from 'vue';
import MyIcon from './my-icon.vue.mjs';
import MyPopover from '../popover/my-popover.vue.mjs';

const _hoisted_1 = { class: "display-flex" };
const _hoisted_2 = { class: "display-flex-column" };
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tool-icon-popover",
  props: {
    disabled: { type: Boolean, default: false },
    showArrow: { type: Boolean, default: true }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MyPopover, {
        trigger: "click",
        disabled: __props.disabled,
        placement: "bottom"
      }, {
        reference: withCtx(() => [
          createElementVNode(
            "div",
            {
              class: normalizeClass(["display-flex icon-popover", [{ "my-icon-disabled": __props.disabled }, "my-color-icon"]])
            },
            [
              createElementVNode("div", _hoisted_1, [
                createElementVNode("div", _hoisted_2, [
                  renderSlot(_ctx.$slots, "reference")
                ]),
                __props.showArrow ? (openBlock(), createBlock(MyIcon, {
                  key: 0,
                  size: 8,
                  class: "my-style-font_arrow icon-jt-x iconfont my-icon-downList-arrow",
                  disabled: __props.disabled
                }, null, 8, ["disabled"])) : createCommentVNode("v-if", true)
              ])
            ],
            2
            /* CLASS */
          )
        ]),
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "panel")
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["disabled"]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=tool-icon-popover.vue2.mjs.map
