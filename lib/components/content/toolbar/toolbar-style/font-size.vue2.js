'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementUtil = require('../../../../utils/elementUtil.js');
var common = require('../../../../constants/common.js');
var myIcon = require('../../../my/icon/my-icon.vue.js');
var vueDemi = require('vue-demi');
var core = require('@vueuse/core');
var elementAlign = require('./element-align.vue.js');
var toolIconPopover = require('../../../my/icon/tool-icon-popover.vue.js');
var myInput = require('../../../my/input/my-input.vue.js');
var index = require('../../../../locales/index.js');

const _hoisted_1 = { class: "my-style-font-size_arrows display-flex-column" };
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "font-size",
  props: {
    disabled: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const fontSizeRef = vueDemi.ref();
    const fontSizeWrapperRef = vueDemi.ref();
    const data = vueDemi.reactive({
      fontSizeInputShow: false,
      fontSize: "13"
    });
    vueDemi.onMounted(() => {
      core.onClickOutside(
        fontSizeWrapperRef,
        () => {
          changeFontSizeInputShow(false);
        }
      );
    });
    function changeFontSize(val) {
      elementUtil.multipleElementSetValue("option.fontSize", val);
    }
    function fontSizeAdd() {
      changeFontSize(Number.parseInt(fontSizeComputed.value) + 1);
    }
    function fontSizeSub() {
      changeFontSize(Number.parseInt(fontSizeComputed.value) - 1);
    }
    const fontSizeComputed = vueDemi.computed(() => {
      const fontSize = elementUtil.multipleElementGetValue("option.fontSize");
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
      return vue.openBlock(), vue.createElementBlock(
        "div",
        {
          class: vue.normalizeClass(["my-style-font-size-wrapper display-flex cursor-pointer", { "my-icon-disabled": __props.disabled }]),
          ref_key: "fontSizeWrapperRef",
          ref: fontSizeWrapperRef
        },
        [
          vue.createVNode(toolIconPopover.default, {
            showArrow: false,
            disabled: __props.disabled
          }, {
            reference: vue.withCtx(() => [
              vue.withDirectives(vue.createElementVNode(
                "div",
                {
                  class: "my-style-font-size user-select-none",
                  onClick: _cache[0] || (_cache[0] = ($event) => changeFontSizeInputShow(true))
                },
                vue.toDisplayString(vue.unref(data).fontSize),
                513
                /* TEXT, NEED_PATCH */
              ), [
                [vue.vShow, !vue.unref(data).fontSizeInputShow || __props.disabled]
              ]),
              vue.withDirectives(vue.createVNode(myInput.default, {
                class: "my-style-font-size",
                ref_key: "fontSizeRef",
                ref: fontSizeRef,
                modelValue: vue.unref(fontSizeComputed),
                "onUpdate:modelValue": changeFontSize,
                placeholder: vue.unref(index.i18n)("font")
              }, null, 8, ["modelValue", "placeholder"]), [
                [vue.vShow, vue.unref(data).fontSizeInputShow && !__props.disabled]
              ])
            ]),
            panel: vue.withCtx(() => [
              vue.createVNode(elementAlign.default, {
                "model-value": vue.unref(fontSizeComputed),
                showSelectedStatus: "",
                elementAlignList: vue.unref(common.fontSizeList),
                "onUpdate:modelValue": changeFontSize
              }, null, 8, ["model-value", "elementAlignList"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled"]),
          vue.createElementVNode("div", _hoisted_1, [
            vue.createVNode(myIcon.default, {
              class: "drop-arrow icon-jt-s iconfont",
              size: 8,
              disabled: __props.disabled,
              onClick: _cache[1] || (_cache[1] = ($event) => fontSizeAdd())
            }, null, 8, ["disabled"]),
            vue.createVNode(myIcon.default, {
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

exports.default = _sfc_main;
//# sourceMappingURL=font-size.vue2.js.map
