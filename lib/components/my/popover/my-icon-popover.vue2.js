'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vueDemi = require('vue-demi');
var core = require('@vueuse/core');
var myTooltip = require('../tooltip/my-tooltip.vue.js');

var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "my-icon-popover",
  props: {
    trigger: { default: "hover" },
    placement: { default: "top" },
    popperStyle: { default: () => ({}) },
    pressHide: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    lock: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const visible = vueDemi.ref({
      popover: false
    });
    const popoverRef = vueDemi.ref({});
    const mousedownFlag = vueDemi.ref(false);
    const popoverVisible = vueDemi.computed(() => {
      return props.lock || visible.value.popover;
    });
    let timer = null;
    let stop;
    function mousedown(_ev) {
      if (props.pressHide) {
        visible.value.popover = false;
      }
      mousedownFlag.value = true;
    }
    function mouseup(_ev) {
      if (props.trigger == "click") {
        updateVisible(!visible.value.popover);
        return;
      }
      if (props.pressHide) {
        updateVisible(true);
      }
      mousedownFlag.value = false;
    }
    function hover(flag) {
      if (props.trigger == "click") {
        return;
      }
      if (mousedownFlag.value && flag) {
        return;
      }
      updateVisible(flag);
    }
    function updateVisible(flag) {
      if (timer != null) {
        clearTimeout(timer);
      }
      timer = setTimeout(function() {
        visible.value.popover = flag;
        if (visible.value.popover) {
          stop = core.onClickOutside(
            popoverRef,
            () => {
              if (props.trigger !== "hover") {
                updateVisible(false);
              }
            }
          );
        } else {
          if (stop) {
            stop();
          }
        }
      }, 0);
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(myTooltip.default, {
        "popper-class": "my-popover",
        "popper-style": __props.popperStyle,
        placement: __props.placement,
        visible: vue.unref(popoverVisible),
        disabled: __props.disabled,
        "show-arrow": false,
        "show-after": 0,
        "hide-after": 0,
        trigger: __props.trigger
      }, {
        reference: vue.withCtx(() => [
          vue.createElementVNode(
            "div",
            {
              onMousedown: _cache[0] || (_cache[0] = ($event) => mousedown($event)),
              onMouseup: _cache[1] || (_cache[1] = ($event) => mouseup($event)),
              onMouseover: _cache[2] || (_cache[2] = ($event) => hover(true)),
              onMouseleave: _cache[3] || (_cache[3] = ($event) => hover(false))
            },
            [
              vue.renderSlot(_ctx.$slots, "reference")
            ],
            32
            /* NEED_HYDRATION */
          )
        ]),
        default: vue.withCtx(() => [
          vue.createElementVNode(
            "div",
            {
              onMouseover: _cache[4] || (_cache[4] = ($event) => hover(true)),
              ref_key: "popoverRef",
              ref: popoverRef,
              onMouseleave: _cache[5] || (_cache[5] = ($event) => hover(false))
            },
            [
              vue.renderSlot(_ctx.$slots, "default")
            ],
            544
            /* NEED_HYDRATION, NEED_PATCH */
          )
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["popper-style", "placement", "visible", "disabled", "trigger"]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=my-icon-popover.vue2.js.map
