import { defineComponent, openBlock, createBlock, withCtx, createElementVNode, normalizeClass, unref, toDisplayString, createVNode } from 'vue';
import ElementAlign from '../../content/toolbar/toolbar-style/element-align.vue.mjs';
import MyScrollbar from '../scrollbar/my-scrollbar.vue.mjs';
import MyPopover from '../popover/my-popover.vue.mjs';
import MyIcon from '../icon/my-icon.vue.mjs';
import { isEmpty, isNull } from 'lodash';
import { reactive, ref, watch } from 'vue-demi';
import { i18n } from '../../../locales/index.mjs';

var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "my-select",
  props: {
    disabled: { type: Boolean, default: false },
    showSelectedStatus: { type: Boolean, default: false },
    modelValue: {},
    dataList: {},
    height: { default: "270px" },
    size: { default: "small" },
    placeholder: { default: i18n("common.place.select") }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const data = reactive({
      label: ""
    });
    const popoverRef = ref();
    watch(() => props.modelValue, (newVal, _oldVal) => {
      if (isEmpty(newVal)) {
        data.label = "";
        return;
      }
      for (let itemList of props.dataList) {
        if (itemList instanceof Array) {
          for (let item of itemList) {
            if (props.modelValue == item.value) {
              data.label = item.label;
            }
          }
        } else {
          if (props.modelValue == itemList.value) {
            data.label = itemList.label;
          }
        }
      }
    }, { immediate: true });
    function change(val) {
      emit("update:modelValue", val.value);
      emit("change", val.value);
      data.label = val.label;
      popoverRef.value.close();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MyPopover, {
        trigger: "click",
        ref_key: "popoverRef",
        ref: popoverRef,
        disabled: __props.disabled,
        placement: "bottom"
      }, {
        reference: withCtx(() => [
          createElementVNode(
            "div",
            {
              class: normalizeClass(["display-flex my-select", [{
                "my-icon-disabled": __props.disabled,
                "my-select-middle": __props.size == "middle"
              }, "my-color-icon"]])
            },
            [
              createElementVNode(
                "div",
                {
                  class: normalizeClass(["my-select-input", {
                    "my-select-input_placeholder": unref(isNull)(__props.modelValue)
                  }])
                },
                toDisplayString(unref(isNull)(__props.modelValue) ? __props.placeholder : unref(data).label),
                3
                /* TEXT, CLASS */
              ),
              createVNode(MyIcon, {
                class: normalizeClass(["my-select-arrow my-style-font_arrow icon-jt-x iconfont my-icon-downList-arrow", [{
                  "my-select-arrow-middle": __props.size == "middle"
                }]]),
                focusBk: false,
                size: 8,
                disabled: __props.disabled
              }, null, 8, ["class", "disabled"])
            ],
            2
            /* CLASS */
          )
        ]),
        default: withCtx(() => [
          createVNode(MyScrollbar, { height: __props.height }, {
            default: withCtx(() => [
              createVNode(ElementAlign, {
                "model-value": __props.modelValue,
                showSelectedStatus: "",
                elementAlignList: __props.dataList,
                onChange: change
              }, null, 8, ["model-value", "elementAlignList"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["height"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["disabled"]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=my-select.vue2.mjs.map
