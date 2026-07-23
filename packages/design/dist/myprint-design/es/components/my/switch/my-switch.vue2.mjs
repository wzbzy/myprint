import { defineComponent, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, toDisplayString } from 'vue';
import { computed } from 'vue-demi';
import { i18n } from '../../../locales/index.mjs';

const _hoisted_1 = { class: "my-switch__core" };
const _hoisted_2 = { class: "my-switch__inner" };
const _hoisted_3 = {
  class: "is-text",
  "aria-hidden": "false"
};
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "my-switch",
  props: {
    enable: { type: Boolean, default: true },
    modelValue: { default: void 0 },
    nullActive: { type: Boolean, default: false },
    activeText: { default: i18n("common.switch.open") },
    inactiveText: { default: i18n("common.switch.close") }
  },
  emits: ["update:modelValue", "click", "change"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const modelValueComputed = computed(() => {
      return props.modelValue == 1 || props.modelValue == null && props.nullActive;
    });
    const statusText = computed(() => {
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
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(["my-switch", { "is-checked": unref(modelValueComputed) }]),
          onClick: click
        },
        [
          createElementVNode("div", _hoisted_1, [
            createElementVNode("div", _hoisted_2, [
              createElementVNode(
                "span",
                _hoisted_3,
                toDisplayString(unref(statusText)),
                1
                /* TEXT */
              )
            ]),
            _cache[0] || (_cache[0] = createElementVNode(
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

export { _sfc_main as default };
//# sourceMappingURL=my-switch.vue2.mjs.map
