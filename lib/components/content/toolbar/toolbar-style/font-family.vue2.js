'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var common = require('../../../../constants/common.js');
var elementUtil = require('../../../../utils/elementUtil.js');
var vueDemi = require('vue-demi');
var elementAlign = require('./element-align.vue.js');
var toolIconPopover = require('../../../my/icon/tool-icon-popover.vue.js');
var app = require('../../../../stores/app.js');
var utils = require('../../../../utils/utils.js');

const _hoisted_1 = { class: "my-style-font" };
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "font-family",
  props: {
    disabled: { type: Boolean, default: false }
  },
  setup(__props) {
    const appStore = app.useAppStoreHook();
    const data = vueDemi.reactive({
      fontFamily: "default",
      fontFamilyName: "\u9ED8\u8BA4"
    });
    vueDemi.watch(() => appStore.currentElement, (_n, _o) => {
      const fontFamily = elementUtil.multipleElementGetValue("option.fontFamily");
      if (fontFamily != void 0) {
        data.fontFamily = fontFamily;
        data.fontFamilyName = utils.getFontFamilyName(fontFamily);
      }
    });
    function changeFontFamily(fontFamily) {
      elementUtil.multipleElementSetValue("option.fontFamily", fontFamily);
      data.fontFamily = fontFamily;
      data.fontFamilyName = utils.getFontFamilyName(fontFamily);
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(
        "div",
        {
          class: vue.normalizeClass(["my-style-font-wrapper display-flex cursor-pointer user-select-none", { "my-icon-disabled": __props.disabled }])
        },
        [
          vue.createVNode(toolIconPopover.default, {
            disabled: !vue.unref(common.hasStyle)(vue.unref(elementUtil.multipleElementGetValue)("type"), "background")
          }, {
            reference: vue.withCtx(() => [
              vue.createElementVNode(
                "div",
                _hoisted_1,
                vue.toDisplayString(vue.unref(data).fontFamilyName),
                1
                /* TEXT */
              )
            ]),
            panel: vue.withCtx(() => [
              vue.createVNode(elementAlign.default, {
                "model-value": vue.unref(data).fontFamily,
                showSelectedStatus: "",
                elementAlignList: vue.unref(common.fontList),
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

exports.default = _sfc_main;
//# sourceMappingURL=font-family.vue2.js.map
