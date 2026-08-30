'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vueDemi = require('vue-demi');
var myIcon = require('../icon/my-icon.vue.js');
var ArrowRight = require('../icon/icons/ArrowRight.vue.js');

const _hoisted_1 = { class: "collapse-panel-head display-flex" };
const _hoisted_2 = { class: "collapse-panel-head-title display-flex" };
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "my-widget-collapse",
  props: {
    title: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const headRef = vueDemi.ref();
    const data = vueDemi.reactive({
      show: true
    });
    function clickHead() {
      data.show = !data.show;
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(
        "div",
        {
          ref_key: "headRef",
          ref: headRef,
          class: vue.normalizeClass(["widget-collapse-panel user-select-none", { "widget-collapse-panel-fold": !vue.unref(data).show }])
        },
        [
          vue.createElementVNode("div", _hoisted_1, [
            vue.createElementVNode("div", _hoisted_2, [
              vue.createTextVNode(
                vue.toDisplayString(__props.title) + " ",
                1
                /* TEXT */
              ),
              vue.renderSlot(_ctx.$slots, "head")
            ]),
            vue.createVNode(myIcon.default, {
              class: "my-handle-panel-icon",
              onClick: clickHead
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(ArrowRight.default, {
                  class: vue.normalizeClass(["collapse-panel-head-right-icon", { "is-active": vue.unref(data).show }])
                }, null, 8, ["class"])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          vue.renderSlot(_ctx.$slots, "default")
        ],
        2
        /* CLASS */
      );
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=my-widget-collapse.vue2.js.map
