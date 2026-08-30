import { defineComponent, openBlock, createBlock, withCtx, createElementBlock, Fragment, renderList, createTextVNode, toDisplayString } from 'vue';
import MyGroup from '../group/my-group.vue.mjs';
import MyButton from '../button/my-Button.vue.mjs';

var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "my-radio",
  props: {
    disabled: { type: Boolean, default: false },
    modelValue: {},
    dataList: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    function onClick(item) {
      emit("update:modelValue", item.value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MyGroup, null, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(__props.dataList, (item, index) => {
              return openBlock(), createBlock(MyButton, {
                onClick: ($event) => onClick(item),
                size: "small",
                isActive: __props.modelValue == item.value,
                key: index
              }, {
                default: withCtx(() => [
                  createTextVNode(
                    toDisplayString(item.label),
                    1
                    /* TEXT */
                  )
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["onClick", "isActive"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=my-radio.vue2.mjs.map
