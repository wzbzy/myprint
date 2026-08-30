'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var common = require('../../../constants/common.js');
var historyUtil = require('../../../utils/historyUtil.js');
var mySelect = require('../select/my-select.vue.js');

var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "history-select",
  props: {
    modelValue: {
      type: common.definePropType([
        String,
        Number,
        Object
      ]),
      default: null
    },
    dataList: {
      type: common.definePropType([
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
      return vue.openBlock(), vue.createBlock(mySelect.default, {
        "model-value": __props.modelValue,
        "data-list": __props.dataList,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = (val) => emit("update:modelValue", val)),
        onChange: _cache[1] || (_cache[1] = (val) => vue.unref(historyUtil.changeWrapper)(val, __props.historyLabel))
      }, null, 8, ["model-value", "data-list"]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=history-select.vue2.js.map
