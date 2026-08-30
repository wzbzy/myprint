import { defineComponent, openBlock, createElementBlock, toDisplayString, unref } from 'vue';
import { useAppStoreHook } from '../../../stores/app.mjs';

const _hoisted_1 = { class: "my-input-unit__wrapper" };
const __default__ = defineComponent({ name: "MyUnit" });
var _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    ;
    const useAppStore = useAppStoreHook();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        _hoisted_1,
        toDisplayString(unref(useAppStore).currentPanel.pageUnit),
        1
        /* TEXT */
      );
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=unit.vue2.mjs.map
