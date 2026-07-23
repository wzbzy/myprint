import { defineComponent, openBlock, createElementBlock, createElementVNode, Fragment, renderList, normalizeClass, toDisplayString } from 'vue';

const _hoisted_1 = { class: "my_tab display-flex-column" };
const _hoisted_2 = { class: "my_tab-tab" };
const _hoisted_3 = ["onClick"];
var _sfc_main = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(__props.itemList, (item) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(["my_tab-title cursor-pointer", { active: item.value == __props.modelValue }]),
                onClick: ($event) => click(item)
              }, toDisplayString(item.label), 11, _hoisted_3);
            }),
            256
            /* UNKEYED_FRAGMENT */
          ))
        ]),
        _cache[0] || (_cache[0] = createElementVNode(
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

export { _sfc_main as default };
//# sourceMappingURL=my-tabs.vue2.mjs.map
