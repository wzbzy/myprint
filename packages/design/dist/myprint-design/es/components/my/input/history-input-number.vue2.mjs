import { defineComponent, openBlock, createBlock } from 'vue';
import { changeWrapper } from '../../../utils/historyUtil.mjs';
import { ref, onMounted } from 'vue-demi';
import MyInputNumber from './my-input-number.vue.mjs';

var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "history-input-number",
  props: {
    modelValue: { default: void 0 },
    historyLabel: { default: void 0 }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const numRef = ref({});
    const props = __props;
    function change(val) {
      changeWrapper(val, props.historyLabel);
      emit("change", val);
    }
    onMounted(() => {
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MyInputNumber, {
        "model-value": __props.modelValue,
        ref_key: "numRef",
        ref: numRef,
        class: "custom-input-number",
        controls: false,
        precision: 2,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = (val) => emit("update:modelValue", val)),
        onChange: change
      }, null, 8, ["model-value"]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=history-input-number.vue2.mjs.map
