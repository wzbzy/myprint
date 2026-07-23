import { defineComponent, openBlock, createBlock, withCtx, renderSlot, createElementVNode, toDisplayString } from 'vue';
import MyPopover from '../popover/my-popover.vue.mjs';

const _hoisted_1 = { class: "my-tooltip_content" };
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "my-tooltip",
  props: {
    disabled: { type: Boolean },
    content: { default: "" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MyPopover, null, {
        reference: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        default: withCtx(() => [
          createElementVNode(
            "div",
            _hoisted_1,
            toDisplayString(__props.content),
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

export { _sfc_main as default };
//# sourceMappingURL=my-tooltip.vue2.mjs.map
