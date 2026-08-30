import { openBlock, createElementBlock, createElementVNode, renderSlot } from 'vue';
import _export_sfc from '../../../_virtual/_plugin-vue_export-helper.mjs';

const _sfc_main = {};
const _hoisted_1 = {
  class: "my-divider my-divider--horizontal",
  role: "separator"
};
const _hoisted_2 = { class: "my-divider__text display-flex" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", _hoisted_2, [
      renderSlot(_ctx.$slots, "default")
    ])
  ]);
}
var MyDivider = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "my-divider.vue"]]);

export { MyDivider as default };
//# sourceMappingURL=my-divider.vue.mjs.map
