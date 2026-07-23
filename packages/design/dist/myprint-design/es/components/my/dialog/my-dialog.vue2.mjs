import { defineComponent, openBlock, createBlock, Teleport, unref, withDirectives, createElementBlock, normalizeClass, createElementVNode, withKeys, mergeProps, toDisplayString, renderSlot, createVNode, withCtx, createCommentVNode, vShow } from 'vue';
import { reactive, ref, computed, watch, nextTick } from 'vue-demi';
import CloseBold from '../icon/icons/CloseBold.vue.mjs';
import MyIcon from '../icon/my-icon.vue.mjs';

const _hoisted_1 = {
  key: 0,
  class: "my-dialog_header display-flex"
};
const _hoisted_2 = {
  key: 0,
  class: "my-dialog_head_title"
};
const _hoisted_3 = {
  key: 1,
  class: "my-dialog_head_slot"
};
const _hoisted_4 = { class: "my-dialog_head_close display-flex" };
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "my-dialog",
  props: {
    modelValue: { type: Boolean, default: false },
    fullscreen: { type: Boolean, default: false },
    showHeader: { type: Boolean, default: true },
    class: { default: "" },
    title: {},
    width: { default: "500px" }
  },
  emits: ["update:modelValue", "close"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const data = reactive({
      rendered: false
    });
    const dialogRef = ref();
    const style = computed(() => {
      return {
        width: props.width
      };
    });
    watch(() => props.modelValue, (_n, _o) => {
      if (props.modelValue) {
        data.rendered = true;
        nextTick(() => {
          dialogRef.value.focus();
        });
        document.body.classList.add("my-popup-parent--hidden");
      } else {
        onClose();
        document.body.classList.remove("my-popup-parent--hidden");
      }
    });
    function onClose() {
      emit("update:modelValue", false);
      emit("close");
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, { to: "body" }, [
        unref(data).rendered ? withDirectives((openBlock(), createElementBlock(
          "div",
          {
            key: 0,
            class: normalizeClass(["my-dialog", props.class]),
            role: "dialog",
            "aria-modal": "true"
          },
          [
            createElementVNode(
              "div",
              {
                class: "my-dialog_wrapper display-flex-column",
                ref_key: "dialogRef",
                ref: dialogRef,
                tabindex: "-1",
                onKeyup: withKeys(onClose, ["esc"])
              },
              [
                createElementVNode(
                  "div",
                  mergeProps({ class: "my-dialog_content" }, _ctx.$attrs, {
                    class: {
                      "is-fullscreen": __props.fullscreen
                    },
                    style: unref(style)
                  }),
                  [
                    __props.showHeader ? (openBlock(), createElementBlock("div", _hoisted_1, [
                      __props.title != null ? (openBlock(), createElementBlock(
                        "div",
                        _hoisted_2,
                        toDisplayString(__props.title),
                        1
                        /* TEXT */
                      )) : (openBlock(), createElementBlock("div", _hoisted_3, [
                        renderSlot(_ctx.$slots, "head")
                      ])),
                      createElementVNode("div", _hoisted_4, [
                        createVNode(MyIcon, {
                          color: "#666666",
                          size: "20",
                          class: "cursor-pointer",
                          onClick: onClose
                        }, {
                          default: withCtx(() => [
                            createVNode(CloseBold)
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ])
                    ])) : createCommentVNode("v-if", true),
                    renderSlot(_ctx.$slots, "default")
                  ],
                  16
                  /* FULL_PROPS */
                )
              ],
              544
              /* NEED_HYDRATION, NEED_PATCH */
            )
          ],
          2
          /* CLASS */
        )), [
          [vShow, __props.modelValue]
        ]) : createCommentVNode("v-if", true)
      ]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=my-dialog.vue2.mjs.map
