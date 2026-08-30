'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vueDemi = require('vue-demi');
var app = require('../../../stores/app.js');
var elementUtil = require('../../../utils/elementUtil.js');
var arrays = require('../../../utils/arrays.js');

var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "auxiliary-line",
  props: {
    element: { default: () => ({}) },
    scrollX: { default: 0 },
    scrollY: { default: 0 },
    tmp: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const designAuxiliaryLineRef = vueDemi.ref();
    vueDemi.onMounted(() => {
      if (props.element.runtimeOption == null) {
        props.element.runtimeOption = {};
      }
      props.element.runtimeOption.target = designAuxiliaryLineRef.value;
    });
    const style = vueDemi.computed(() => {
      return {
        transform: `translate(${props.element.x + props.element.runtimeOption.x}px, ${props.element.y + props.element.runtimeOption.y}px)`
      };
    });
    const useApp = app.useAppStoreHook();
    function removeAuxiliaryLine() {
      arrays.arrayRemove(elementUtil.getCurrentPanel().auxiliaryLineList, props.element);
    }
    function auxiliaryLineControlMouseDown(event) {
      const { clientX, clientY } = event;
      const { x, y } = props.element;
      useApp.dataRotation = "move";
      const { offsetWidth, offsetHeight } = event.target.parentElement.parentElement;
      function auxiliaryLineControlMouseMove(moveEvent) {
        const moveClientX = moveEvent.clientX;
        const moveClientY = moveEvent.clientY;
        if (props.element.direction == "vertical") {
          props.element.x = Math.min(Math.max(x + moveClientX - clientX, 0), offsetWidth);
        } else {
          props.element.y = Math.min(Math.max(y + moveClientY - clientY, 0), offsetHeight);
        }
      }
      function auxiliaryLineControlMouseUp() {
        document.removeEventListener("mousemove", auxiliaryLineControlMouseMove);
        document.removeEventListener("mouseup", auxiliaryLineControlMouseUp);
        useApp.dataRotation = "none";
      }
      event.stopPropagation();
      document.addEventListener("mousemove", auxiliaryLineControlMouseMove);
      document.addEventListener("mouseup", auxiliaryLineControlMouseUp);
    }
    if (props.element.direction == "horizontal") {
      vueDemi.watch(() => props.scrollY, (_n, _o) => {
        props.element.runtimeOption.y = -props.scrollY;
      });
    }
    if (props.element.direction == "vertical") {
      vueDemi.watch(() => props.scrollX, (_n, _o) => {
        props.element.runtimeOption.x = -props.scrollX;
      });
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(
        "div",
        {
          class: vue.normalizeClass([
            "design-auxiliary-line",
            props.element.direction == "vertical" ? "design-auxiliary-line-v" : "design-auxiliary-line-h",
            {
              "pointer-events": __props.tmp,
              "design-auxiliary-line-hidden": props.element.runtimeOption?.auxiliaryLineStatus == "HIDDEN"
            }
          ]),
          ref_key: "designAuxiliaryLineRef",
          ref: designAuxiliaryLineRef,
          style: vue.normalizeStyle(vue.unref(style))
        },
        [
          !__props.tmp ? (vue.openBlock(), vue.createElementBlock(
            "div",
            {
              key: 0,
              class: "design-auxiliary-line-control cursor-resize",
              "data-rotation": "move",
              onMousedown: _cache[0] || (_cache[0] = ($event) => auxiliaryLineControlMouseDown($event))
            },
            null,
            32
            /* NEED_HYDRATION */
          )) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("div", {
            class: "icon-design-remove iconfont design-auxiliary-line-remove cursor-pointer",
            onClick: removeAuxiliaryLine
          })
        ],
        6
        /* CLASS, STYLE */
      );
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=auxiliary-line.vue2.js.map
