import { defineComponent, openBlock, createElementBlock, normalizeClass, createVNode, unref, withCtx, createElementVNode, toDisplayString } from 'vue';
import { hasStyle, fontList } from '../../../../constants/common.mjs';
import { multipleElementGetValue, multipleElementSetValue } from '../../../../utils/elementUtil.mjs';
import { reactive, watch } from 'vue-demi';
import ElementAlign from './element-align.vue.mjs';
import ToolIconPopover from '../../../my/icon/tool-icon-popover.vue.mjs';
import { useAppStoreHook } from '../../../../stores/app.mjs';
import { getFontFamilyName } from '../../../../utils/utils.mjs';

const _hoisted_1 = { class: "my-style-font" };
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "font-family",
  props: {
    disabled: { type: Boolean, default: false }
  },
  setup(__props) {
    const appStore = useAppStoreHook();
    const data = reactive({
      fontFamily: "default",
      fontFamilyName: "\u9ED8\u8BA4"
    });
    watch(() => appStore.currentElement, (_n, _o) => {
      const fontFamily = multipleElementGetValue("option.fontFamily");
      if (fontFamily != void 0) {
        data.fontFamily = fontFamily;
        data.fontFamilyName = getFontFamilyName(fontFamily);
      }
    });
    function changeFontFamily(fontFamily) {
      multipleElementSetValue("option.fontFamily", fontFamily);
      data.fontFamily = fontFamily;
      data.fontFamilyName = getFontFamilyName(fontFamily);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(["my-style-font-wrapper display-flex cursor-pointer user-select-none", { "my-icon-disabled": __props.disabled }])
        },
        [
          createVNode(ToolIconPopover, {
            disabled: !unref(hasStyle)(unref(multipleElementGetValue)("type"), "background")
          }, {
            reference: withCtx(() => [
              createElementVNode(
                "div",
                _hoisted_1,
                toDisplayString(unref(data).fontFamilyName),
                1
                /* TEXT */
              )
            ]),
            panel: withCtx(() => [
              createVNode(ElementAlign, {
                "model-value": unref(data).fontFamily,
                showSelectedStatus: "",
                elementAlignList: unref(fontList),
                "onUpdate:modelValue": changeFontFamily
              }, null, 8, ["model-value", "elementAlignList"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled"])
        ],
        2
        /* CLASS */
      );
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=font-family.vue2.mjs.map
