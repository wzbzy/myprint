'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vueDemi = require('vue-demi');
var utils = require('../../../utils/utils.js');
var app = require('../../../stores/app.js');
var myScrollbar = require('../scrollbar/my-scrollbar.vue.js');
var myIcon = require('../icon/my-icon.vue.js');
var ArrowRight = require('../icon/icons/ArrowRight.vue.js');
var Close = require('../icon/icons/Close.vue.js');

const _hoisted_1 = { class: "collapse-panel-head display-flex" };
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "my-collapse",
  props: {
    element: { default: () => ({}) },
    position: { default: () => ({}) },
    modelValue: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const appStore = app.useAppStoreHook();
    const emit = __emit;
    const headRef = vueDemi.ref();
    const data = vueDemi.reactive({
      x: 0,
      y: 0,
      right: 0,
      bodyResizeHeight: 0,
      translateX: 0,
      translateY: 0,
      show: true,
      resizeIs: false,
      zIndex: 0,
      loaded: false
    });
    vueDemi.onMounted(() => {
      data.zIndex = utils.getCollapsePanelZIndex(data.zIndex);
      const boundingClientRect = headRef.value.getBoundingClientRect();
      const left = boundingClientRect.left;
      const right = boundingClientRect.right;
      data.x = left;
      data.y = right;
      data.bodyResizeHeight = document.body.clientHeight;
      vueDemi.nextTick(() => {
        data.loaded = true;
      });
    });
    function clickHead() {
      data.show = !data.show;
    }
    function clickHeadClose() {
      emit("update:modelValue", false);
    }
    const style = vueDemi.computed(() => {
      return {
        right: props.position.x + "px",
        top: props.position.y + "px",
        width: props.position.width + "px",
        zIndex: data.zIndex,
        transform: `translate(${data.translateX}px, ${data.translateY}px)`,
        height: data.show ? `max(100% - ${data.bodyResizeHeight - props.position.height}px, 24px)` : "21px"
      };
    });
    function headMouseDown(e) {
      appStore.dataRotation = "move";
      e.preventDefault();
      const disX = e.clientX;
      const disY = e.clientY;
      const clientWidth = document.body.clientWidth - 20;
      const clientHeight = document.body.clientHeight;
      let translateXTmp = data.translateX;
      let translateYTmp = data.translateY;
      let height = headRef.value.offsetHeight;
      const boundingClientRect = headRef.value.getBoundingClientRect();
      document.onmousemove = function(e2) {
        const l = e2.clientX - disX;
        const t = e2.clientY - disY;
        if (boundingClientRect.left + l < 0) {
          data.translateX = translateXTmp - boundingClientRect.left;
        } else if (boundingClientRect.right + l > clientWidth) {
          data.translateX = translateXTmp + clientWidth - boundingClientRect.right;
        } else {
          data.translateX = translateXTmp + l;
        }
        if (props.position.y + translateYTmp + t < 0) {
          data.translateY = -props.position.y;
        } else if (props.position.y + height + translateYTmp + t > clientHeight) {
          data.translateY = clientHeight - props.position.y - height;
        } else {
          data.translateY = translateYTmp + t;
        }
        e2.preventDefault();
        e2.stopPropagation();
      };
      document.onmouseup = function(_e) {
        appStore.dataRotation = "none";
        props.position.y = props.position.y + data.translateY;
        data.translateY = 0;
        props.position.x = props.position.x - data.translateX;
        data.translateX = 0;
        document.onmousemove = null;
        document.onmouseup = null;
      };
      return false;
    }
    function bodyMouseDown() {
      data.zIndex = utils.getCollapsePanelZIndex(data.zIndex);
    }
    function resize(e) {
      e.preventDefault();
      data.zIndex = utils.getCollapsePanelZIndex(data.zIndex);
      appStore.dataRotation = "ns-resize";
      data.resizeIs = true;
      const disY = e.clientY;
      let tmpHeight = props.position.height;
      document.onmousemove = function(e2) {
        const t = e2.clientY - disY;
        props.position.height = tmpHeight + t;
        e2.preventDefault();
        e2.stopPropagation();
      };
      document.onmouseup = function(_e) {
        appStore.dataRotation = "none";
        data.resizeIs = false;
        document.onmousemove = null;
        document.onmouseup = null;
      };
      return false;
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.Teleport, { to: "body" }, [
        vue.withDirectives(vue.createElementVNode(
          "div",
          {
            ref_key: "headRef",
            ref: headRef,
            class: vue.normalizeClass(["collapse-panel user-select-none", { "disable-collapse-panel-height-duration": vue.unref(data).resizeIs, "collapse-panel-height-duration": vue.unref(data).loaded }]),
            style: vue.normalizeStyle(vue.unref(style))
          },
          [
            vue.createElementVNode("div", _hoisted_1, [
              vue.createElementVNode(
                "div",
                {
                  class: "collapse-panel-head-title display-flex",
                  onMousedown: headMouseDown
                },
                [
                  vue.createTextVNode(
                    vue.toDisplayString(__props.element.label) + " ",
                    1
                    /* TEXT */
                  ),
                  vue.renderSlot(_ctx.$slots, "head")
                ],
                32
                /* NEED_HYDRATION */
              ),
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
              }),
              vue.createVNode(myIcon.default, {
                class: "collapse-panel-head-right-close cursor-pointer",
                onClick: clickHeadClose
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(Close.default, { class: "collapse-panel-head-right-icon" })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            vue.createVNode(myScrollbar.default, {
              height: "calc(100% - 24px)",
              onMousedown: bodyMouseDown
            }, {
              default: vue.withCtx(() => [
                vue.renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
              /* FORWARDED */
            }),
            vue.unref(data).show ? (vue.openBlock(), vue.createElementBlock(
              "div",
              {
                key: 0,
                onMousedown: resize,
                class: "collapse-panel-resize"
              },
              null,
              32
              /* NEED_HYDRATION */
            )) : vue.createCommentVNode("v-if", true)
          ],
          6
          /* CLASS, STYLE */
        ), [
          [vue.vShow, __props.modelValue]
        ])
      ]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=my-collapse.vue2.js.map
