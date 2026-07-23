'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = { class: "my_tab display-flex-column" };
const _hoisted_2 = { class: "my_tab-tab" };
const _hoisted_3 = ["onClick"];
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "my-tabs",
  props: {
    showSelectedStatus: { type: Boolean, default: false },
    modelValue: { default: null },
    itemList: { default: () => [] }
  },
  emits: ["update:modelValue", "click"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    function click(item) {
      if (item.click) {
        item.click();
      } else {
        emit("update:modelValue", item.value);
      }
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.createElementVNode("div", _hoisted_2, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(__props.itemList, (item) => {
              return vue.openBlock(), vue.createElementBlock("div", {
                class: vue.normalizeClass(["my_tab-title cursor-pointer", { active: item.value == __props.modelValue }]),
                onClick: ($event) => click(item)
              }, vue.toDisplayString(item.label), 11, _hoisted_3);
            }),
            256
            /* UNKEYED_FRAGMENT */
          ))
        ]),
        _cache[0] || (_cache[0] = vue.createElementVNode(
          "div",
          { class: "my_tab-line" },
          null,
          -1
          /* CACHED */
        ))
      ]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=my-tabs.vue2.js.map
