import { defineComponent, resolveComponent, openBlock, createElementBlock, Fragment, renderList, createElementVNode, createVNode, toDisplayString, createCommentVNode } from 'vue';
import MySwitch from '../switch/my-switch.vue.mjs';

const _hoisted_1 = { class: "my-tree-list" };
const _hoisted_2 = { class: "my-tree-list-item" };
const _hoisted_3 = {
  key: 0,
  class: "my-tree-list-child"
};
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "my-tree-list",
  props: {
    list: { default: () => [] },
    nullActive: { type: Boolean, default: false }
  },
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    function parentChange(item) {
      setColumnList(item, item.option.enable);
      if (item.option.enable == 1 && item.runtimeOption.nestColumnList) {
        for (let nestColumnListElement of item.runtimeOption.nestColumnList) {
          nestColumnListElement.option.enable = 1;
        }
      }
      emit("change");
    }
    function setColumnList(item, val) {
      if (item.runtimeOption.nestColumnList == null) {
        return;
      }
      for (let nestColumnListElement of item.runtimeOption.nestColumnList) {
        nestColumnListElement.option.enable = val;
        setColumnList(nestColumnListElement, val);
      }
    }
    function childChange(item) {
      let disableAllIs = true;
      for (let nestColumnListElement of item.runtimeOption.nestColumnList) {
        if (nestColumnListElement.option.enable != 0) {
          disableAllIs = false;
        }
      }
      if (disableAllIs) {
        item.option.enable = 0;
      } else {
        item.option.enable = 1;
      }
      emit("change");
    }
    return (_ctx, _cache) => {
      const _component_my_tree_list = resolveComponent("my-tree-list", true);
      return openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(__props.list, (item, index) => {
            return openBlock(), createElementBlock("div", {
              class: "my-tree-list-item_wrapper",
              key: index
            }, [
              createElementVNode("div", _hoisted_2, [
                createVNode(MySwitch, {
                  nullActive: __props.nullActive,
                  modelValue: item.option.enable,
                  "onUpdate:modelValue": ($event) => item.option.enable = $event,
                  onChange: ($event) => parentChange(item),
                  class: "ml-2"
                }, null, 8, ["nullActive", "modelValue", "onUpdate:modelValue", "onChange"]),
                createElementVNode(
                  "div",
                  null,
                  toDisplayString(item.label),
                  1
                  /* TEXT */
                )
              ]),
              item.runtimeOption.nestColumnList != null && item.runtimeOption.nestColumnList.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_3, [
                createVNode(_component_my_tree_list, {
                  nullActive: __props.nullActive,
                  onChange: ($event) => childChange(item),
                  list: item.runtimeOption.nestColumnList
                }, null, 8, ["nullActive", "onChange", "list"])
              ])) : createCommentVNode("v-if", true)
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=my-tree-list.vue2.mjs.map
