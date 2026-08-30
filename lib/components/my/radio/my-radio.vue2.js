'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var myGroup = require('../group/my-group.vue.js');
var myButton = require('../button/my-Button.vue.js');

var _sfc_main = /* @__PURE__ */ vue.defineComponent({
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
      return vue.openBlock(), vue.createBlock(myGroup.default, null, {
        default: vue.withCtx(() => [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(__props.dataList, (item, index) => {
              return vue.openBlock(), vue.createBlock(myButton.default, {
                onClick: ($event) => onClick(item),
                size: "small",
                isActive: __props.modelValue == item.value,
                key: index
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(
                    vue.toDisplayString(item.label),
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

exports.default = _sfc_main;
//# sourceMappingURL=my-radio.vue2.js.map
