import { defineComponent, openBlock, createElementBlock, Fragment, createElementVNode, normalizeClass, withModifiers, renderSlot, createBlock, Teleport, withDirectives, normalizeStyle, unref, vShow } from 'vue';
import { reactive, ref, watch, onMounted, onUnmounted, nextTick } from 'vue-demi';
import { detectOverflow, createPopper } from '@popperjs/core';
import { onClickOutside } from '@vueuse/core';
import { fromPairs } from 'lodash';

var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "my-popover",
  props: {
    disabled: { type: Boolean },
    placement: { default: "top" },
    trigger: { default: "hover" },
    class: {}
  },
  emits: ["show"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose({ close });
    const emit = __emit;
    const props = __props;
    const data = reactive({
      visible: false
    });
    const referenceRef = ref();
    const contentRef = ref();
    let popperInstance = null;
    const styles = ref({});
    function deriveState(state) {
      const elements = Object.keys(state.elements);
      const styles2 = fromPairs(
        elements.map(
          (element) => [element, state.styles[element] || {}]
        )
      );
      const attributes = fromPairs(
        elements.map(
          (element) => [element, state.attributes[element]]
        )
      );
      return {
        styles: styles2,
        attributes
      };
    }
    const stateUpdater = {
      name: "updateState",
      enabled: true,
      phase: "write",
      fn: ({ state }) => {
        if (!data.visible) {
          return;
        }
        const sss = detectOverflow(state, {
          // elementContext: 'reference', // 'popper' by default
        });
        console.log(sss);
        const derivedState = deriveState(state);
        Object.assign(styles.value, derivedState.styles.popper);
      },
      requires: ["computeStyles"]
    };
    const createPopperInstance = () => {
      popperInstance = createPopper(referenceRef.value, contentRef.value, {
        modifiers: [
          {
            name: "preventOverflow",
            options: {
              altAxis: true,
              mainAxis: true,
              tether: false
              // boundary: document, // true by default
              // rootBoundary: document // true by default
            }
          },
          {
            name: "flip",
            enabled: false,
            options: {
              fallbackPlacements: ["top", "right"]
            }
          },
          {
            name: "offset",
            options: {
              // 偏移值 左右，上下
              offset: [0, 10]
            }
          },
          // stateUpdater,
          {
            name: "arrow",
            options: {
              element: ".popper-arrow"
            }
          }
          // { name: 'applyStyles', enabled: false }
        ],
        placement: props.placement
      });
      nextTick(() => {
        if (popperInstance != null) {
          popperInstance.update();
        }
      });
    };
    const destroyPopperInstance = () => {
      popperInstance?.destroy?.();
      popperInstance = null;
    };
    watch(() => data.visible, (visible, _o) => {
      if (visible) {
        createPopperInstance();
      } else {
      }
    });
    onMounted(() => {
      createPopperInstance();
    });
    onUnmounted(() => {
      destroyPopperInstance();
    });
    let stopHandle;
    function mouseenter() {
      if (props.trigger != "hover") {
        return;
      }
      show();
    }
    function mouseleave() {
      if (props.trigger != "hover") {
        return;
      }
      close();
    }
    const togglePopperShow = () => {
      if (props.trigger != "click") {
        return;
      }
      if (props.disabled) {
        return;
      }
      if (data.visible) {
        onClose();
      } else {
        if (stopHandle == null) {
          stopHandle = onClickOutside(contentRef, () => {
            close();
          }, {
            ignore: [referenceRef]
          });
        }
        show();
      }
    };
    function onClose() {
      stopHandle?.();
      stopHandle = null;
      data.visible = false;
    }
    function close() {
      onClose();
    }
    function show() {
      emit("show");
      data.visible = true;
    }
    watch(
      () => data.visible,
      (val) => {
        if (!val) {
          onClose();
        }
      },
      {
        flush: "post"
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          createElementVNode(
            "div",
            {
              class: normalizeClass(["my-popover_reference", [props.class]]),
              ref_key: "referenceRef",
              ref: referenceRef,
              onMouseenter: mouseenter,
              onMouseleave: mouseleave,
              onClick: withModifiers(togglePopperShow, ["stop", "prevent"])
            },
            [
              renderSlot(_ctx.$slots, "reference")
            ],
            34
            /* CLASS, NEED_HYDRATION */
          ),
          (openBlock(), createBlock(Teleport, { to: ".my-popover_container" }, [
            withDirectives(createElementVNode(
              "div",
              {
                class: "my-popover_content",
                ref_key: "contentRef",
                ref: contentRef,
                style: normalizeStyle(unref(styles))
              },
              [
                renderSlot(_ctx.$slots, "default")
              ],
              4
              /* STYLE */
            ), [
              [vShow, unref(data).visible]
            ])
          ]))
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=my-popover.vue2.mjs.map
