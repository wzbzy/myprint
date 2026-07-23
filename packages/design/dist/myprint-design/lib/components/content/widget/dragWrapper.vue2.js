'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vueDemi = require('vue-demi');

var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "dragWrapper",
  props: {
    data: { default: () => ({
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      transitionAnime: false
    }) }
  },
  setup(__props) {
    const props = __props;
    const wrapperRef = vueDemi.ref();
    vueDemi.onMounted(() => {
      wrapperRef.value.addEventListener("transitionend", function() {
        props.data.visible = false;
        props.data.transitionAnime = false;
      }, false);
    });
    const style = vueDemi.computed(() => {
      const iStyle = {
        left: props.data.x + "px",
        top: props.data.y + "px",
        width: props.data.width + "px",
        height: props.data.height + "px",
        opacity: props.data.opacity
        // maxWidth: widthValueUnit(element),
        // maxHeight: heightValueUnit(element),
      };
      if (props.data.transitionAnime) {
        iStyle.transition = "left .42s cubic-bezier(0, 0, 0.02, 0.97) 0s, top .42s cubic-bezier(0, 0, 0.02, 0.97) 0s";
      }
      return iStyle;
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(
        "div",
        {
          ref_key: "wrapperRef",
          ref: wrapperRef,
          class: "drag-wrapper",
          style: vue.normalizeStyle(vue.unref(style))
        },
        null,
        4
        /* STYLE */
      );
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=dragWrapper.vue2.js.map
