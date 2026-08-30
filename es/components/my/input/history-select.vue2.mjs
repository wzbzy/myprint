import { defineComponent, openBlock, createBlock, unref } from 'vue';
import { definePropType } from '../../../constants/common.mjs';
import { changeWrapper } from '../../../utils/historyUtil.mjs';
import MySelect from '../select/my-select.vue.mjs';

var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "history-select",
  props: {
    modelValue: {
      type: definePropType([
        String,
        Number,
        Object
      ]),
      default: null
    },
    dataList: {
      type: definePropType([
        Array
      ]),
      default: () => []
    },
    historyLabel: String
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MySelect, {
        "model-value": __props.modelValue,
        "data-list": __props.dataList,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = (val) => emit("update:modelValue", val)),
        onChange: _cache[1] || (_cache[1] = (val) => unref(changeWrapper)(val, __props.historyLabel))
      }, null, 8, ["model-value", "data-list"]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=history-select.vue2.mjs.map
