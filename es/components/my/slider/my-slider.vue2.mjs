import { defineComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, unref, createElementVNode, withModifiers, createTextVNode, toDisplayString, createCommentVNode } from 'vue';
import { ref, computed, watch, onMounted, nextTick } from 'vue-demi';
import { cancelRaf, rafTimeout } from '../../../utils/utils.mjs';

var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "my-slider",
  props: {
    width: { default: "100%" },
    min: { default: 0 },
    max: { default: 100 },
    disabled: { type: Boolean, default: false },
    step: { default: 1 },
    formatTooltip: { type: Function, default: (value) => value },
    tooltip: { type: Boolean, default: true },
    modelValue: { default: 0 }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const transition = ref(false);
    const timer = ref();
    const right = ref(0);
    const slider = ref();
    const sliderWidth = ref();
    const rightHandle = ref();
    const rightTooltip = ref();
    const pixelStep = computed(() => {
      return fixedDigit(sliderWidth.value / (props.max - props.min) * props.step, 2);
    });
    const precision = computed(() => {
      const strNumArr = props.step.toString().split(".");
      return strNumArr[1]?.length ?? 0;
    });
    const totalWidth = computed(() => {
      if (typeof props.width === "number") {
        return props.width + "px";
      } else {
        return props.width;
      }
    });
    const sliderValue = computed(() => {
      let high;
      if (right.value === sliderWidth.value) {
        if (sliderWidth.value == 0) {
          high = props.modelValue;
        } else {
          high = props.max;
        }
      } else {
        high = fixedDigit(right.value / pixelStep.value * props.step + props.min, precision.value);
        if (props.step > 1) {
          high = Math.round(high / props.step) * props.step;
        }
        high = high > props.max ? props.max : high;
      }
      return high;
    });
    const rightValue = computed(() => {
      return props.formatTooltip(sliderValue.value);
    });
    const emits = __emit;
    watch(
      () => props.width,
      () => {
        getSliderWidth();
      },
      {
        flush: "post"
      }
    );
    watch(
      () => props.modelValue,
      () => {
        getPosition();
      }
    );
    watch(sliderValue, (to) => {
      emits("update:modelValue", to);
      emits("change", to);
    });
    onMounted(() => {
      nextTick(() => {
        getSliderWidth();
        getPosition();
      });
    });
    function checkValue(value) {
      if (value < props.min) {
        return props.min;
      }
      if (value > props.max) {
        return props.max;
      }
      return value;
    }
    function getSliderWidth() {
      sliderWidth.value = slider.value.offsetWidth;
    }
    function getPosition() {
      right.value = fixedDigit((checkValue(props.modelValue) - props.min) / props.step * pixelStep.value, 2);
    }
    function fixedDigit(num, precision2) {
      return parseFloat(num.toFixed(precision2));
    }
    function handlerBlur(tooltip) {
      tooltip && tooltip.classList.remove("show-handle-tooltip");
    }
    function handlerFocus(handler, tooltip) {
      handler.focus();
      if (props.tooltip) {
        tooltip.classList.add("show-handle-tooltip");
      }
    }
    function onClickPoint(e) {
      if (transition.value) {
        cancelRaf(timer.value);
        timer.value = null;
      } else {
        transition.value = true;
      }
      timer.value = rafTimeout(() => {
        transition.value = false;
      }, 300);
      right.value = fixedDigit(Math.round(e.layerX / pixelStep.value) * pixelStep.value, 2);
      handlerFocus(rightHandle.value, rightTooltip.value);
    }
    function onRightMouseDown() {
      const leftX = slider.value.getBoundingClientRect().left;
      document.onmousemove = (e) => {
        if (props.tooltip) {
          rightTooltip.value.classList.add("show-handle-tooltip");
        }
        const targetX = fixedDigit(Math.round((e.clientX - leftX) / pixelStep.value) * pixelStep.value, 2);
        if (targetX > sliderWidth.value) {
          right.value = sliderWidth.value;
        } else {
          right.value = targetX < props.min ? props.min : targetX;
        }
      };
      document.onmouseup = () => {
        if (props.tooltip) {
          rightTooltip.value && rightTooltip.value.classList.remove("show-handle-tooltip");
        }
        document.onmousemove = null;
      };
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(["m-slider", { "m-slider-disabled": __props.disabled }]),
          ref_key: "slider",
          ref: slider,
          style: normalizeStyle(`width: ${unref(totalWidth)};`)
        },
        [
          createElementVNode("div", {
            class: "u-slider-rail",
            onClick: _cache[0] || (_cache[0] = withModifiers(($event) => __props.disabled ? () => false : onClickPoint($event), ["self"]))
          }),
          createElementVNode(
            "div",
            {
              class: normalizeClass(["u-slider-track", { trackTransition: unref(transition) }]),
              style: normalizeStyle(`left: 0; right: auto; width: ${unref(right)}px;`)
            },
            null,
            6
            /* CLASS, STYLE */
          ),
          createElementVNode(
            "div",
            {
              tabindex: "0",
              ref_key: "rightHandle",
              ref: rightHandle,
              class: normalizeClass(["m-slider-handle", { handleTransition: unref(transition) }]),
              style: normalizeStyle(`left: ${unref(right)}px; right: auto; transform: translate(-50%, -50%);`),
              onMousedown: _cache[1] || (_cache[1] = ($event) => __props.disabled ? () => false : onRightMouseDown()),
              onBlur: _cache[2] || (_cache[2] = ($event) => __props.tooltip && !__props.disabled ? handlerBlur(unref(rightTooltip)) : () => false)
            },
            [
              __props.tooltip ? (openBlock(), createElementBlock(
                "div",
                {
                  key: 0,
                  ref_key: "rightTooltip",
                  ref: rightTooltip,
                  class: "m-handle-tooltip"
                },
                [
                  createTextVNode(
                    toDisplayString(unref(rightValue)) + " ",
                    1
                    /* TEXT */
                  ),
                  _cache[3] || (_cache[3] = createElementVNode(
                    "div",
                    { class: "m-arrow" },
                    null,
                    -1
                    /* CACHED */
                  ))
                ],
                512
                /* NEED_PATCH */
              )) : createCommentVNode("v-if", true)
            ],
            38
            /* CLASS, STYLE, NEED_HYDRATION */
          )
        ],
        6
        /* CLASS, STYLE */
      );
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=my-slider.vue2.mjs.map
