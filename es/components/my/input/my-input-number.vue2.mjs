import { defineComponent, openBlock, createBlock, unref, withKeys, withModifiers } from 'vue';
import MyInput from './my-input.vue.mjs';
import { ref, watch, computed } from 'vue-demi';
import MathCalc from '../../../utils/numberUtil.mjs';
import { isEmpty } from 'lodash';

var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "my-input-number",
  props: {
    modelValue: { default: void 0 },
    min: { default: -Infinity },
    max: { default: Infinity },
    step: { default: 1 },
    formatter: { type: Function, default: (value) => value },
    precision: { default: 0 },
    disabled: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const innerValue = ref(props.modelValue);
    watch(() => props.modelValue, (_newVal, _oldVal) => {
      innerValue.value = props.modelValue;
    });
    const precision = computed(() => {
      const stepPrecision = String(props.step).split(".")[1]?.length || 0;
      return Math.max(props.precision, stepPrecision);
    });
    function emitValue(value) {
      if (value == props.modelValue) {
        return;
      }
      emit("update:modelValue", value);
      emit("change", value);
    }
    function onInput(value) {
      if (isEmpty(value)) {
        emitValue(value);
        return;
      }
      value = value.replace(/,/g, "");
      if (!Number.isNaN(parseFloat(value))) {
        innerValue.value = value;
      }
    }
    function onChange(value) {
      value = value.replace(/,/g, "");
      if (!Number.isNaN(parseFloat(value))) {
        if (parseFloat(value) > props.max) {
          emitValue(props.max);
          return;
        }
        if (parseFloat(value) < props.min) {
          emitValue(props.min);
          return;
        }
        if (parseFloat(value) !== props.modelValue) {
          emitValue(parseFloat(value));
        } else {
          emitValue(parseFloat(value));
        }
      } else {
        emitValue(parseFloat(value));
      }
    }
    function onUp() {
      const res = parseFloat(Math.min(props.max, MathCalc.sum(props.modelValue || 0, +props.step)).toFixed(precision.value));
      emitValue(res);
    }
    function onDown() {
      const res = parseFloat(Math.max(props.min, MathCalc.sum(props.modelValue || 0, -props.step)).toFixed(precision.value));
      emitValue(res);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MyInput, {
        "model-value": unref(innerValue),
        onKeydown: [
          withKeys(withModifiers(onUp, ["prevent"]), ["up"]),
          withKeys(withModifiers(onDown, ["prevent"]), ["down"])
        ],
        disabled: __props.disabled,
        onInput,
        onChange,
        autocomplete: "off"
      }, null, 8, ["model-value", "onKeydown", "disabled"]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=my-input-number.vue2.mjs.map
