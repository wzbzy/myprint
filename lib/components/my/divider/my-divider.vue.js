'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var _pluginVue_exportHelper = require('../../../_virtual/_plugin-vue_export-helper.js');

const _sfc_main = {};
const _hoisted_1 = {
  class: "my-divider my-divider--horizontal",
  role: "separator"
};
const _hoisted_2 = { class: "my-divider__text display-flex" };
function _sfc_render(_ctx, _cache) {
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createElementVNode("div", _hoisted_2, [
      vue.renderSlot(_ctx.$slots, "default")
    ])
  ]);
}
var MyDivider = /* @__PURE__ */ _pluginVue_exportHelper.default(_sfc_main, [["render", _sfc_render], ["__file", "my-divider.vue"]]);

exports.default = MyDivider;
//# sourceMappingURL=my-divider.vue.js.map
