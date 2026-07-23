import { defineComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, unref, createCommentVNode, createElementVNode } from 'vue';
import { ref, onMounted, computed, watch } from 'vue-demi';
import { useAppStoreHook } from '../../../stores/app.mjs';
import { getCurrentPanel } from '../../../utils/elementUtil.mjs';
import { arrayRemove } from '../../../utils/arrays.mjs';

var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "auxiliary-line",
  props: {
    element: { default: () => ({}) },
    scrollX: { default: 0 },
    scrollY: { default: 0 },
    tmp: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const designAuxiliaryLineRef = ref();
    onMounted(() => {
      if (props.element.runtimeOption == null) {
        props.element.runtimeOption = {};
      }
      props.element.runtimeOption.target = designAuxiliaryLineRef.value;
    });
    const style = computed(() => {
      return {
        transform: `translate(${props.element.x + props.element.runtimeOption.x}px, ${props.element.y + props.element.runtimeOption.y}px)`
      };
    });
    const useApp = useAppStoreHook();
    function removeAuxiliaryLine() {
      arrayRemove(getCurrentPanel().auxiliaryLineList, props.element);
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
      watch(() => props.scrollY, (_n, _o) => {
        props.element.runtimeOption.y = -props.scrollY;
      });
    }
    if (props.element.direction == "vertical") {
      watch(() => props.scrollX, (_n, _o) => {
        props.element.runtimeOption.x = -props.scrollX;
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass([
            "design-auxiliary-line",
            props.element.direction == "vertical" ? "design-auxiliary-line-v" : "design-auxiliary-line-h",
            {
              "pointer-events": __props.tmp,
              "design-auxiliary-line-hidden": props.element.runtimeOption?.auxiliaryLineStatus == "HIDDEN"
            }
          ]),
          ref_key: "designAuxiliaryLineRef",
          ref: designAuxiliaryLineRef,
          style: normalizeStyle(unref(style))
        },
        [
          !__props.tmp ? (openBlock(), createElementBlock(
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
          )) : createCommentVNode("v-if", true),
          createElementVNode("div", {
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

export { _sfc_main as default };
//# sourceMappingURL=auxiliary-line.vue2.mjs.map
