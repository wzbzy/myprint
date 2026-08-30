'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var common = require('../../../constants/common.js');
var historyUtil = require('../../../utils/historyUtil.js');
var myInput = require('./my-input.vue.js');

var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "history-input",
  props: {
    modelValue: {
      type: common.definePropType([
        String,
        Number,
        Object
      ]),
      default: null
    },
    historyLabel: String
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(myInput.default, {
        "model-value": __props.modelValue,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = (val) => emit("update:modelValue", val)),
        onChange: _cache[1] || (_cache[1] = (val) => vue.unref(historyUtil.changeWrapper)(val, __props.historyLabel))
      }, null, 8, ["model-value"]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=history-input.vue2.js.map
