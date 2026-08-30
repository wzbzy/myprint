'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vueDemi = require('vue-demi');
var CloseBold = require('../icon/icons/CloseBold.vue.js');
var myIcon = require('../icon/my-icon.vue.js');

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
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
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
    const data = vueDemi.reactive({
      rendered: false
    });
    const dialogRef = vueDemi.ref();
    const style = vueDemi.computed(() => {
      return {
        width: props.width
      };
    });
    vueDemi.watch(() => props.modelValue, (_n, _o) => {
      if (props.modelValue) {
        data.rendered = true;
        vueDemi.nextTick(() => {
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
      return vue.openBlock(), vue.createBlock(vue.Teleport, { to: "body" }, [
        vue.unref(data).rendered ? vue.withDirectives((vue.openBlock(), vue.createElementBlock(
          "div",
          {
            key: 0,
            class: vue.normalizeClass(["my-dialog", props.class]),
            role: "dialog",
            "aria-modal": "true"
          },
          [
            vue.createElementVNode(
              "div",
              {
                class: "my-dialog_wrapper display-flex-column",
                ref_key: "dialogRef",
                ref: dialogRef,
                tabindex: "-1",
                onKeyup: vue.withKeys(onClose, ["esc"])
              },
              [
                vue.createElementVNode(
                  "div",
                  vue.mergeProps({ class: "my-dialog_content" }, _ctx.$attrs, {
                    class: {
                      "is-fullscreen": __props.fullscreen
                    },
                    style: vue.unref(style)
                  }),
                  [
                    __props.showHeader ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
                      __props.title != null ? (vue.openBlock(), vue.createElementBlock(
                        "div",
                        _hoisted_2,
                        vue.toDisplayString(__props.title),
                        1
                        /* TEXT */
                      )) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_3, [
                        vue.renderSlot(_ctx.$slots, "head")
                      ])),
                      vue.createElementVNode("div", _hoisted_4, [
                        vue.createVNode(myIcon.default, {
                          color: "#666666",
                          size: "20",
                          class: "cursor-pointer",
                          onClick: onClose
                        }, {
                          default: vue.withCtx(() => [
                            vue.createVNode(CloseBold.default)
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ])
                    ])) : vue.createCommentVNode("v-if", true),
                    vue.renderSlot(_ctx.$slots, "default")
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
          [vue.vShow, __props.modelValue]
        ]) : vue.createCommentVNode("v-if", true)
      ]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=my-dialog.vue2.js.map
