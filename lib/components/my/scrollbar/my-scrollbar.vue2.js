'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vueDemi = require('vue-demi');
var PerfectScrollbar = require('perfect-scrollbar');

var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "my-scrollbar",
  props: {
    tag: { default: "div" },
    height: { default: "100%" },
    options: { default: () => ({}) },
    hoverBlod: { type: Boolean, default: true },
    disabledScrollBar: { type: Boolean, default: false }
  },
  emits: ["scroll", "ps-scroll-y", "ps-scroll-x", "ps-scroll-up", "ps-scroll-down", "ps-scroll-left", "ps-scroll-right", "ps-y-reach-start", "ps-y-reach-end", "ps-x-reach-start", "ps-x-reach-end"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const scrollbar = vueDemi.ref();
    const ps = vueDemi.ref();
    const resizeObserver = new ResizeObserver((_entries) => {
      if (ps.value) {
        ps.value.update();
      }
    });
    vueDemi.watch(
      () => props.options,
      () => {
        destroyInstance();
        createInstance();
      },
      { deep: true }
    );
    vueDemi.onMounted(() => {
      if (scrollbar.value) {
        createInstance();
      }
    });
    vueDemi.onBeforeUnmount(() => {
      destroyInstance();
    });
    function createInstance() {
      vueDemi.nextTick(() => {
        if (scrollbar.value) {
          ps.value = new PerfectScrollbar(scrollbar.value, {
            wheelPropagation: false,
            ...props.options
          });
          resizeObserver.observe(scrollbar.value);
          toggleListeners();
          setTimeout(() => {
            if (ps.value != null) {
              ps.value.update();
            }
          }, 100);
        }
      });
    }
    function destroyInstance() {
      resizeObserver.disconnect();
      if (ps.value) {
        toggleListeners(false);
        ps.value.destroy();
        ps.value = null;
      }
    }
    const eventListeners = {
      scroll: createEventListener("scroll"),
      "ps-scroll-y": createEventListener("ps-scroll-y"),
      "ps-scroll-x": createEventListener("ps-scroll-x"),
      "ps-scroll-up": createEventListener("ps-scroll-up"),
      "ps-scroll-down": createEventListener("ps-scroll-down"),
      "ps-scroll-left": createEventListener("ps-scroll-left"),
      "ps-scroll-right": createEventListener("ps-scroll-right"),
      "ps-y-reach-start": createEventListener("ps-y-reach-start"),
      "ps-y-reach-end": createEventListener("ps-y-reach-end"),
      "ps-x-reach-start": createEventListener("ps-x-reach-start"),
      "ps-x-reach-end": createEventListener("ps-x-reach-end")
    };
    function createEventListener(eventName) {
      return function(event) {
        emit(eventName, event);
      };
    }
    function toggleListeners(addListeners = true) {
      if (!ps.value?.element) {
        return;
      }
      Object.entries(eventListeners).forEach(([eventName, listener]) => {
        if (addListeners) {
          ps.value?.element.addEventListener(eventName, listener);
        } else {
          ps.value?.element.removeEventListener(eventName, listener);
        }
      });
    }
    __expose({
      ps
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(__props.tag), {
        ref_key: "scrollbar",
        ref: scrollbar,
        class: vue.normalizeClass([{
          "hover-non-blod": !__props.hoverBlod,
          "disabled-scroll-bar": __props.disabledScrollBar
        }, "ps"]),
        style: vue.normalizeStyle({ maxHeight: __props.height })
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["class", "style"]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=my-scrollbar.vue2.js.map
