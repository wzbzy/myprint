import { openBlock, createElementBlock, createElementVNode } from 'vue';
import _export_sfc from '../../../../_virtual/_plugin-vue_export-helper.mjs';

const _sfc_main = {};
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [
    createElementVNode(
      "path",
      {
        fill: "currentColor",
        d: "M256 768h672a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V96a32 32 0 0 1 64 0z"
      },
      null,
      -1
      /* CACHED */
    ),
    createElementVNode(
      "path",
      {
        fill: "currentColor",
        d: "M832 224v704a32 32 0 1 1-64 0V256H96a32 32 0 0 1 0-64h704a32 32 0 0 1 32 32"
      },
      null,
      -1
      /* CACHED */
    )
  ])]);
}
var Crop = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Crop.vue"]]);

export { Crop as default };
//# sourceMappingURL=Crop.vue.mjs.map
