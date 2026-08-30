'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vueDemi = require('vue-demi');
var myDivider = require('./my-divider.vue.js');
var utils = require('../../../utils/utils.js');

var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "my-divider-panel",
  props: {
    class: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const data = vueDemi.reactive({
      basicDividerShowIs: true
    });
    const basicDividerRef = vueDemi.ref();
    utils.mitt.on("changeElement", update);
    vueDemi.onUnmounted(() => {
      utils.mitt.off("changeElement");
    });
    vueDemi.onMounted(() => {
      if (basicDividerRef.value) {
        if (basicDividerRef.value.children.length == 0) {
          data.basicDividerShowIs = false;
        } else {
          data.basicDividerShowIs = true;
        }
      }
    });
    function update() {
      vueDemi.nextTick(() => {
        if (basicDividerRef.value) {
          if (basicDividerRef.value.children.length == 0) {
            data.basicDividerShowIs = false;
          } else {
            data.basicDividerShowIs = true;
          }
        }
      });
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        null,
        [
          vue.unref(data).basicDividerShowIs ? (vue.openBlock(), vue.createBlock(myDivider.default, {
            key: 0,
            class: vue.normalizeClass(props.class)
          }, {
            default: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "divider")
            ]),
            _: 3
            /* FORWARDED */
          }, 8, ["class"])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode(
            "div",
            {
              ref_key: "basicDividerRef",
              ref: basicDividerRef
            },
            [
              vue.renderSlot(_ctx.$slots, "default")
            ],
            512
            /* NEED_PATCH */
          )
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=my-divider-panel.vue2.js.map
