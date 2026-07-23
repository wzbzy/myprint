import { defineComponent, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, createTextVNode, toDisplayString, renderSlot, createVNode, withCtx } from 'vue';
import { ref, reactive } from 'vue-demi';
import MyIcon from '../icon/my-icon.vue.mjs';
import ArrowRight from '../icon/icons/ArrowRight.vue.mjs';

const _hoisted_1 = { class: "collapse-panel-head display-flex" };
const _hoisted_2 = { class: "collapse-panel-head-title display-flex" };
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "my-widget-collapse",
  props: {
    title: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const headRef = ref();
    const data = reactive({
      show: true
    });
    function clickHead() {
      data.show = !data.show;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          ref_key: "headRef",
          ref: headRef,
          class: normalizeClass(["widget-collapse-panel user-select-none", { "widget-collapse-panel-fold": !unref(data).show }])
        },
        [
          createElementVNode("div", _hoisted_1, [
            createElementVNode("div", _hoisted_2, [
              createTextVNode(
                toDisplayString(__props.title) + " ",
                1
                /* TEXT */
              ),
              renderSlot(_ctx.$slots, "head")
            ]),
            createVNode(MyIcon, {
              class: "my-handle-panel-icon",
              onClick: clickHead
            }, {
              default: withCtx(() => [
                createVNode(ArrowRight, {
                  class: normalizeClass(["collapse-panel-head-right-icon", { "is-active": unref(data).show }])
                }, null, 8, ["class"])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          renderSlot(_ctx.$slots, "default")
        ],
        2
        /* CLASS */
      );
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=my-widget-collapse.vue2.mjs.map
