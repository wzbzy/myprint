'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var historyUtil = require('../../../utils/historyUtil.js');
var vueDemi = require('vue-demi');
var myInputNumber = require('./my-input-number.vue.js');

var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "history-input-number",
  props: {
    modelValue: { default: void 0 },
    historyLabel: { default: void 0 }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const numRef = vueDemi.ref({});
    const props = __props;
    function change(val) {
      historyUtil.changeWrapper(val, props.historyLabel);
      emit("change", val);
    }
    vueDemi.onMounted(() => {
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(myInputNumber.default, {
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

exports.default = _sfc_main;
//# sourceMappingURL=history-input-number.vue2.js.map
