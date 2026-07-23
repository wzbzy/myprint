'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vueDemi = require('vue-demi');
var index = require('../../../locales/index.js');

const _hoisted_1 = { class: "my-switch__core" };
const _hoisted_2 = { class: "my-switch__inner" };
const _hoisted_3 = {
  class: "is-text",
  "aria-hidden": "false"
};
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "my-switch",
  props: {
    enable: { type: Boolean, default: true },
    modelValue: { default: void 0 },
    nullActive: { type: Boolean, default: false },
    activeText: { default: index.i18n("common.switch.open") },
    inactiveText: { default: index.i18n("common.switch.close") }
  },
  emits: ["update:modelValue", "click", "change"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const modelValueComputed = vueDemi.computed(() => {
      return props.modelValue == 1 || props.modelValue == null && props.nullActive;
    });
    const statusText = vueDemi.computed(() => {
      if (modelValueComputed.value) {
        return props.activeText;
      }
      return props.inactiveText;
    });
    function click() {
      if (!props.enable) {
        return;
      }
      emit("update:modelValue", modelValueComputed.value ? 0 : 1);
      emit("click");
      emit("change");
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(
        "div",
        {
          class: vue.normalizeClass(["my-switch", { "is-checked": vue.unref(modelValueComputed) }]),
          onClick: click
        },
        [
          vue.createElementVNode("div", _hoisted_1, [
            vue.createElementVNode("div", _hoisted_2, [
              vue.createElementVNode(
                "span",
                _hoisted_3,
                vue.toDisplayString(vue.unref(statusText)),
                1
                /* TEXT */
              )
            ]),
            _cache[0] || (_cache[0] = vue.createElementVNode(
              "div",
              { class: "my-switch__action" },
              null,
              -1
              /* CACHED */
            ))
          ])
        ],
        2
        /* CLASS */
      );
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=my-switch.vue2.js.map
