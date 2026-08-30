import { defineComponent, openBlock, createElementBlock, normalizeClass, createVNode, withCtx, withDirectives, createElementVNode, toDisplayString, unref, vShow } from 'vue';
import { multipleElementSetValue, multipleElementGetValue } from '../../../../utils/elementUtil.mjs';
import { fontSizeList } from '../../../../constants/common.mjs';
import MyIcon from '../../../my/icon/my-icon.vue.mjs';
import { ref, reactive, onMounted, computed } from 'vue-demi';
import { onClickOutside } from '@vueuse/core';
import ElementAlign from './element-align.vue.mjs';
import ToolIconPopover from '../../../my/icon/tool-icon-popover.vue.mjs';
import MyInput from '../../../my/input/my-input.vue.mjs';
import { i18n } from '../../../../locales/index.mjs';

const _hoisted_1 = { class: "my-style-font-size_arrows display-flex-column" };
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "font-size",
  props: {
    disabled: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const fontSizeRef = ref();
    const fontSizeWrapperRef = ref();
    const data = reactive({
      fontSizeInputShow: false,
      fontSize: "13"
    });
    onMounted(() => {
      onClickOutside(
        fontSizeWrapperRef,
        () => {
          changeFontSizeInputShow(false);
        }
      );
    });
    function changeFontSize(val) {
      multipleElementSetValue("option.fontSize", val);
    }
    function fontSizeAdd() {
      changeFontSize(Number.parseInt(fontSizeComputed.value) + 1);
    }
    function fontSizeSub() {
      changeFontSize(Number.parseInt(fontSizeComputed.value) - 1);
    }
    const fontSizeComputed = computed(() => {
      const fontSize = multipleElementGetValue("option.fontSize");
      if (fontSize != void 0) {
        data.fontSize = fontSize;
      }
      return fontSize;
    });
    function changeFontSizeInputShow(flag) {
      if (props.disabled) {
        return;
      }
      data.fontSizeInputShow = flag;
      if (flag) {
        fontSizeRef.value.focus();
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(["my-style-font-size-wrapper display-flex cursor-pointer", { "my-icon-disabled": __props.disabled }]),
          ref_key: "fontSizeWrapperRef",
          ref: fontSizeWrapperRef
        },
        [
          createVNode(ToolIconPopover, {
            showArrow: false,
            disabled: __props.disabled
          }, {
            reference: withCtx(() => [
              withDirectives(createElementVNode(
                "div",
                {
                  class: "my-style-font-size user-select-none",
                  onClick: _cache[0] || (_cache[0] = ($event) => changeFontSizeInputShow(true))
                },
                toDisplayString(unref(data).fontSize),
                513
                /* TEXT, NEED_PATCH */
              ), [
                [vShow, !unref(data).fontSizeInputShow || __props.disabled]
              ]),
              withDirectives(createVNode(MyInput, {
                class: "my-style-font-size",
                ref_key: "fontSizeRef",
                ref: fontSizeRef,
                modelValue: unref(fontSizeComputed),
                "onUpdate:modelValue": changeFontSize,
                placeholder: unref(i18n)("font")
              }, null, 8, ["modelValue", "placeholder"]), [
                [vShow, unref(data).fontSizeInputShow && !__props.disabled]
              ])
            ]),
            panel: withCtx(() => [
              createVNode(ElementAlign, {
                "model-value": unref(fontSizeComputed),
                showSelectedStatus: "",
                elementAlignList: unref(fontSizeList),
                "onUpdate:modelValue": changeFontSize
              }, null, 8, ["model-value", "elementAlignList"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled"]),
          createElementVNode("div", _hoisted_1, [
            createVNode(MyIcon, {
              class: "drop-arrow icon-jt-s iconfont",
              size: 8,
              disabled: __props.disabled,
              onClick: _cache[1] || (_cache[1] = ($event) => fontSizeAdd())
            }, null, 8, ["disabled"]),
            createVNode(MyIcon, {
              class: "drop-arrow icon-jt-x iconfont",
              size: 8,
              disabled: __props.disabled,
              onClick: _cache[2] || (_cache[2] = ($event) => fontSizeSub())
            }, null, 8, ["disabled"])
          ])
        ],
        2
        /* CLASS */
      );
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=font-size.vue2.mjs.map
