import { defineComponent, openBlock, createElementBlock, Fragment, renderList, unref, createBlock, normalizeClass, createCommentVNode, createElementVNode, toDisplayString } from 'vue';
import MyIcon from '../../../my/icon/my-icon.vue.mjs';
import { computed } from 'vue-demi';

const _hoisted_1 = { class: "align-down-list-panel" };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = { class: "align-down-list-panel__item__content user-select-none" };
const _hoisted_4 = {
  key: 0,
  class: "align-down-list-panel__divider"
};
var _sfc_main = /* @__PURE__ */ defineComponent({
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
    const dataList = computed(() => {
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
      return openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(unref(dataList), (elementAlignChildList, index) => {
            return openBlock(), createElementBlock("div", null, [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(elementAlignChildList, (elementAlign) => {
                  return openBlock(), createElementBlock("div", {
                    class: "align-down-list-panel__item",
                    onClick: ($event) => click(elementAlign)
                  }, [
                    __props.showSelectedStatus ? (openBlock(), createBlock(MyIcon, {
                      key: 0,
                      class: normalizeClass(["align-down-list-panel__item__select iconfont icon-duihao", { "my-hidden": __props.modelValue != elementAlign.value }])
                    }, null, 8, ["class"])) : createCommentVNode("v-if", true),
                    elementAlign.icon ? (openBlock(), createElementBlock(
                      "i",
                      {
                        key: 1,
                        class: normalizeClass(["align-down-list-panel__item__icon", elementAlign.icon])
                      },
                      null,
                      2
                      /* CLASS */
                    )) : createCommentVNode("v-if", true),
                    createElementVNode(
                      "div",
                      _hoisted_3,
                      toDisplayString(elementAlign.label),
                      1
                      /* TEXT */
                    )
                  ], 8, _hoisted_2);
                }),
                256
                /* UNKEYED_FRAGMENT */
              )),
              index < unref(dataList).length - 1 ? (openBlock(), createElementBlock("div", _hoisted_4)) : createCommentVNode("v-if", true)
            ]);
          }),
          256
          /* UNKEYED_FRAGMENT */
        ))
      ]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=element-align.vue2.mjs.map
