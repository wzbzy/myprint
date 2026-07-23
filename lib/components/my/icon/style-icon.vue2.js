'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vueDemi = require('vue-demi');
var app = require('../../../stores/app.js');
var tipIcon = require('./tip-icon.vue.js');
var common = require('../../../constants/common.js');
var historyUtil = require('../../../utils/historyUtil.js');
var elementUtil = require('../../../utils/elementUtil.js');
var utils = require('../../../utils/utils.js');

var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "style-icon",
  props: {
    props: { default: "" },
    propsValue: { default: void 0 },
    enableProps: { default: "" },
    disabled: { type: Boolean, default: void 0 },
    marginTop: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const appStore = app.useAppStoreHook();
    const emit = __emit;
    const props = __props;
    const value = vueDemi.computed(() => {
      if (!props.props) {
        return false;
      }
      const result = elementUtil.multipleElementGetValue(props.props);
      if (props.propsValue == void 0) {
        return result;
      } else {
        return result === props.propsValue;
      }
    });
    const disabled = vueDemi.computed(() => {
      if (props.disabled !== void 0) {
        return props.disabled;
      }
      if (appStore.currentElement.length == 0) {
        return true;
      }
      for (let currentElementElement of appStore.currentElement) {
        if (!common.hasStyle(currentElementElement.type, props.enableProps)) {
          return true;
        }
      }
      return false;
    });
    function change(val) {
      let tmpVal = val;
      if (props.propsValue != void 0) {
        if (val) {
          tmpVal = props.propsValue;
        }
      }
      elementUtil.multipleElementSetValue(props.props, tmpVal);
      utils.mitt.emit("panelSnapshot", { action: historyUtil.ActionEnum.UPDATE_STYLE, elementList: appStore.currentElement });
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(tipIcon.default, {
        modelValue: vue.unref(value),
        "onUpdate:modelValue": change,
        disabled: vue.unref(disabled)
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["modelValue", "disabled"]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=style-icon.vue2.js.map
