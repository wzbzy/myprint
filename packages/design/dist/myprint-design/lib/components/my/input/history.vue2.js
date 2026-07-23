'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var common = require('../../../constants/common.js');
var historyUtil = require('../../../utils/historyUtil.js');

var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "history",
  props: {
    modelValue: {
      type: common.definePropType([
        String,
        Number,
        Object
      ]),
      default: null
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.renderSlot(_ctx.$slots, "default", {
        onChange: _cache[0] || (_cache[0] = (val) => vue.unref(historyUtil.changeWrapper)(val, "\u6807\u9898"))
      });
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=history.vue2.js.map
