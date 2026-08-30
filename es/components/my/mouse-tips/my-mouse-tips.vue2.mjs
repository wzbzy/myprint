import { defineComponent, unref, openBlock, createBlock, Teleport, createElementVNode, normalizeStyle, toDisplayString, createCommentVNode } from 'vue';
import { mouseTips } from '../../../utils/mouseTips.mjs';

var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "my-mouse-tips",
  setup(__props) {
    return (_ctx, _cache) => {
      return unref(mouseTips).data.visible ? (openBlock(), createBlock(Teleport, {
        key: 0,
        to: "body"
      }, [
        createElementVNode(
          "div",
          {
            ref: "wrapperRef",
            class: "mouse-tips",
            style: normalizeStyle({
              transform: `translate(${unref(mouseTips).data.x}px, ${unref(mouseTips).data.y}px)`
            })
          },
          toDisplayString(unref(mouseTips).data.data),
          5
          /* TEXT, STYLE */
        )
      ])) : createCommentVNode("v-if", true);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=my-mouse-tips.vue2.mjs.map
