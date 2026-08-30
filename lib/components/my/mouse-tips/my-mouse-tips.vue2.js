'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var mouseTips = require('../../../utils/mouseTips.js');

var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "my-mouse-tips",
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.unref(mouseTips.mouseTips).data.visible ? (vue.openBlock(), vue.createBlock(vue.Teleport, {
        key: 0,
        to: "body"
      }, [
        vue.createElementVNode(
          "div",
          {
            ref: "wrapperRef",
            class: "mouse-tips",
            style: vue.normalizeStyle({
              transform: `translate(${vue.unref(mouseTips.mouseTips).data.x}px, ${vue.unref(mouseTips.mouseTips).data.y}px)`
            })
          },
          vue.toDisplayString(vue.unref(mouseTips.mouseTips).data.data),
          5
          /* TEXT, STYLE */
        )
      ])) : vue.createCommentVNode("v-if", true);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=my-mouse-tips.vue2.js.map
