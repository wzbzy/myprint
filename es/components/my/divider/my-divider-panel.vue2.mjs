import { defineComponent, openBlock, createElementBlock, Fragment, unref, createBlock, normalizeClass, withCtx, renderSlot, createCommentVNode, createElementVNode } from 'vue';
import { reactive, ref, onUnmounted, onMounted, nextTick } from 'vue-demi';
import MyDivider from './my-divider.vue.mjs';
import { mitt } from '../../../utils/utils.mjs';

var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "my-divider-panel",
  props: {
    class: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const data = reactive({
      basicDividerShowIs: true
    });
    const basicDividerRef = ref();
    mitt.on("changeElement", update);
    onUnmounted(() => {
      mitt.off("changeElement");
    });
    onMounted(() => {
      if (basicDividerRef.value) {
        if (basicDividerRef.value.children.length == 0) {
          data.basicDividerShowIs = false;
        } else {
          data.basicDividerShowIs = true;
        }
      }
    });
    function update() {
      nextTick(() => {
        if (basicDividerRef.value) {
          if (basicDividerRef.value.children.length == 0) {
            data.basicDividerShowIs = false;
          } else {
            data.basicDividerShowIs = true;
          }
        }
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          unref(data).basicDividerShowIs ? (openBlock(), createBlock(MyDivider, {
            key: 0,
            class: normalizeClass(props.class)
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "divider")
            ]),
            _: 3
            /* FORWARDED */
          }, 8, ["class"])) : createCommentVNode("v-if", true),
          createElementVNode(
            "div",
            {
              ref_key: "basicDividerRef",
              ref: basicDividerRef
            },
            [
              renderSlot(_ctx.$slots, "default")
            ],
            512
            /* NEED_PATCH */
          )
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=my-divider-panel.vue2.mjs.map
