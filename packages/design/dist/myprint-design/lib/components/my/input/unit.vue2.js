'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var app = require('../../../stores/app.js');

const _hoisted_1 = { class: "my-input-unit__wrapper" };
const __default__ = vue.defineComponent({ name: "MyUnit" });
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  setup(__props) {
    ;
    const useAppStore = app.useAppStoreHook();
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(
        "div",
        _hoisted_1,
        vue.toDisplayString(vue.unref(useAppStore).currentPanel.pageUnit),
        1
        /* TEXT */
      );
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=unit.vue2.js.map
