import { defineComponent, resolveComponent, openBlock, createBlock, withCtx, createElementVNode, normalizeClass, renderSlot, normalizeStyle, createVNode } from 'vue';
import MyPopover from '../popover/my-popover.vue.mjs';
import { rgbaToHex } from '../../../utils/utils.mjs';
import MyIcon from '../icon/my-icon.vue.mjs';

const _hoisted_1 = { class: "display-flex-column" };
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "my-color-picker",
  props: {
    disabled: { type: Boolean, default: false },
    modelValue: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    function changeFontColor(val) {
      const hexColor = rgbaToHex(val);
      emit("update:modelValue", hexColor);
    }
    return (_ctx, _cache) => {
      const _component_color_picker = resolveComponent("color-picker");
      return openBlock(), createBlock(MyPopover, {
        trigger: "click",
        disabled: __props.disabled,
        placement: "bottom"
      }, {
        reference: withCtx(() => [
          createElementVNode(
            "div",
            {
              class: normalizeClass(["display-flex font-style font-color", [{ "my-icon-disabled": __props.disabled }, "my-color-icon"]])
            },
            [
              createElementVNode("div", _hoisted_1, [
                renderSlot(_ctx.$slots, "default"),
                createElementVNode(
                  "div",
                  {
                    style: normalizeStyle({ backgroundColor: props.modelValue }),
                    class: "font-color-display"
                  },
                  null,
                  4
                  /* STYLE */
                )
              ]),
              createVNode(MyIcon, {
                class: "my-style-font_arrow icon-jt-x iconfont my-color-downList-arrow",
                size: 8,
                disabled: __props.disabled
              }, null, 8, ["disabled"])
            ],
            2
            /* CLASS */
          )
        ]),
        default: withCtx(() => [
          createVNode(_component_color_picker, {
            "is-widget": "",
            format: "rgb",
            shape: "circle",
            disableAlpha: true,
            onPureColorChange: changeFontColor
          })
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["disabled"]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=my-color-picker.vue2.mjs.map
