import { defineComponent, openBlock, createBlock, Teleport, withDirectives, createElementVNode, normalizeClass, unref, normalizeStyle, createTextVNode, toDisplayString, renderSlot, createVNode, withCtx, createElementBlock, createCommentVNode, vShow } from 'vue';
import { ref, reactive, onMounted, nextTick, computed } from 'vue-demi';
import { getCollapsePanelZIndex } from '../../../utils/utils.mjs';
import { useAppStoreHook } from '../../../stores/app.mjs';
import MyScrollbar from '../scrollbar/my-scrollbar.vue.mjs';
import MyIcon from '../icon/my-icon.vue.mjs';
import ArrowRight from '../icon/icons/ArrowRight.vue.mjs';
import Close from '../icon/icons/Close.vue.mjs';

const _hoisted_1 = { class: "collapse-panel-head display-flex" };
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "my-collapse",
  props: {
    element: { default: () => ({}) },
    position: { default: () => ({}) },
    modelValue: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const appStore = useAppStoreHook();
    const emit = __emit;
    const headRef = ref();
    const data = reactive({
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
    onMounted(() => {
      data.zIndex = getCollapsePanelZIndex(data.zIndex);
      const boundingClientRect = headRef.value.getBoundingClientRect();
      const left = boundingClientRect.left;
      const right = boundingClientRect.right;
      data.x = left;
      data.y = right;
      data.bodyResizeHeight = document.body.clientHeight;
      nextTick(() => {
        data.loaded = true;
      });
    });
    function clickHead() {
      data.show = !data.show;
    }
    function clickHeadClose() {
      emit("update:modelValue", false);
    }
    const style = computed(() => {
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
      data.zIndex = getCollapsePanelZIndex(data.zIndex);
    }
    function resize(e) {
      e.preventDefault();
      data.zIndex = getCollapsePanelZIndex(data.zIndex);
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
      return openBlock(), createBlock(Teleport, { to: "body" }, [
        withDirectives(createElementVNode(
          "div",
          {
            ref_key: "headRef",
            ref: headRef,
            class: normalizeClass(["collapse-panel user-select-none", { "disable-collapse-panel-height-duration": unref(data).resizeIs, "collapse-panel-height-duration": unref(data).loaded }]),
            style: normalizeStyle(unref(style))
          },
          [
            createElementVNode("div", _hoisted_1, [
              createElementVNode(
                "div",
                {
                  class: "collapse-panel-head-title display-flex",
                  onMousedown: headMouseDown
                },
                [
                  createTextVNode(
                    toDisplayString(__props.element.label) + " ",
                    1
                    /* TEXT */
                  ),
                  renderSlot(_ctx.$slots, "head")
                ],
                32
                /* NEED_HYDRATION */
              ),
              createVNode(MyIcon, {
                class: "my-handle-panel-icon",
                onClick: clickHead
              }, {
                default: withCtx(() => [
                  createVNode(ArrowRight, {
                    class: normalizeClass(["collapse-panel-head-right-icon", { "is-active": unref(data).show }])
                  }, null, 8, ["class"])
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(MyIcon, {
                class: "collapse-panel-head-right-close cursor-pointer",
                onClick: clickHeadClose
              }, {
                default: withCtx(() => [
                  createVNode(Close, { class: "collapse-panel-head-right-icon" })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            createVNode(MyScrollbar, {
              height: "calc(100% - 24px)",
              onMousedown: bodyMouseDown
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
              /* FORWARDED */
            }),
            unref(data).show ? (openBlock(), createElementBlock(
              "div",
              {
                key: 0,
                onMousedown: resize,
                class: "collapse-panel-resize"
              },
              null,
              32
              /* NEED_HYDRATION */
            )) : createCommentVNode("v-if", true)
          ],
          6
          /* CLASS, STYLE */
        ), [
          [vShow, __props.modelValue]
        ])
      ]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=my-collapse.vue2.mjs.map
