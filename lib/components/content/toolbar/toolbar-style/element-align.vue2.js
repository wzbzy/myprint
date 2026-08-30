'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var myIcon = require('../../../my/icon/my-icon.vue.js');
var vueDemi = require('vue-demi');

const _hoisted_1 = { class: "align-down-list-panel" };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = { class: "align-down-list-panel__item__content user-select-none" };
const _hoisted_4 = {
  key: 0,
  class: "align-down-list-panel__divider"
};
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "element-align",
  props: {
    showSelectedStatus: { type: Boolean, default: false },
    modelValue: { default: null },
    elementAlignList: { default: () => [] }
  },
  emits: ["update:modelValue", "change", "click"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const dataList = vueDemi.computed(() => {
      if (!props.elementAlignList || props.elementAlignList.length == 0) {
        return [];
      }
      if (props.elementAlignList[0] instanceof Array) {
        return props.elementAlignList;
      } else {
        return [props.elementAlignList];
      }
    });
    function click(elementAlign) {
      if (elementAlign.click) {
        elementAlign.click();
      } else {
        if (props.modelValue != elementAlign.value) {
          emit("update:modelValue", elementAlign.value);
          emit("change", elementAlign);
        }
      }
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList(vue.unref(dataList), (elementAlignChildList, index) => {
            return vue.openBlock(), vue.createElementBlock("div", null, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(elementAlignChildList, (elementAlign) => {
                  return vue.openBlock(), vue.createElementBlock("div", {
                    class: "align-down-list-panel__item",
                    onClick: ($event) => click(elementAlign)
                  }, [
                    __props.showSelectedStatus ? (vue.openBlock(), vue.createBlock(myIcon.default, {
                      key: 0,
                      class: vue.normalizeClass(["align-down-list-panel__item__select iconfont icon-duihao", { "my-hidden": __props.modelValue != elementAlign.value }])
                    }, null, 8, ["class"])) : vue.createCommentVNode("v-if", true),
                    elementAlign.icon ? (vue.openBlock(), vue.createElementBlock(
                      "i",
                      {
                        key: 1,
                        class: vue.normalizeClass(["align-down-list-panel__item__icon", elementAlign.icon])
                      },
                      null,
                      2
                      /* CLASS */
                    )) : vue.createCommentVNode("v-if", true),
                    vue.createElementVNode(
                      "div",
                      _hoisted_3,
                      vue.toDisplayString(elementAlign.label),
                      1
                      /* TEXT */
                    )
                  ], 8, _hoisted_2);
                }),
                256
                /* UNKEYED_FRAGMENT */
              )),
              index < vue.unref(dataList).length - 1 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4)) : vue.createCommentVNode("v-if", true)
            ]);
          }),
          256
          /* UNKEYED_FRAGMENT */
        ))
      ]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=element-align.vue2.js.map
