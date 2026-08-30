'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementAlign = require('../../content/toolbar/toolbar-style/element-align.vue.js');
var myScrollbar = require('../scrollbar/my-scrollbar.vue.js');
var myPopover = require('../popover/my-popover.vue.js');
var myIcon = require('../icon/my-icon.vue.js');
var lodash = require('lodash');
var vueDemi = require('vue-demi');
var index = require('../../../locales/index.js');

const _hoisted_1 = ["aria-label", "title"];
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "my-select",
  props: {
    disabled: { type: Boolean, default: false },
    showSelectedStatus: { type: Boolean, default: false },
    modelValue: {},
    dataList: {},
    height: { default: "270px" },
    size: { default: "small" },
    placeholder: { default: index.i18n("common.place.select") }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const data = vueDemi.reactive({
      label: ""
    });
    const popoverRef = vueDemi.ref();
    vueDemi.watch(() => props.modelValue, (newVal, _oldVal) => {
      if (lodash.isEmpty(newVal)) {
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
    function clear() {
      data.label = "";
      popoverRef.value.close();
      emit("update:modelValue", null);
      emit("change", null);
    }
    function wrapperClick(e) {
      if (!props.disabled && e.target?.classList?.contains("my-select-clear")) {
        e.stopPropagation();
        clear();
      }
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(myPopover.default, {
        trigger: "click",
        ref_key: "popoverRef",
        ref: popoverRef,
        disabled: __props.disabled,
        placement: "bottom"
      }, {
        reference: vue.withCtx(() => [
          vue.createElementVNode(
            "div",
            {
              class: vue.normalizeClass(["display-flex my-select", [{
                "my-icon-disabled": __props.disabled,
                "my-select-middle": __props.size == "middle"
              }, "my-color-icon"]]),
              onClick: wrapperClick
            },
            [
              vue.createElementVNode(
                "div",
                {
                  class: vue.normalizeClass(["my-select-input", {
                    "my-select-input_placeholder": vue.unref(lodash.isEmpty)(__props.modelValue)
                  }])
                },
                vue.toDisplayString(vue.unref(lodash.isEmpty)(__props.modelValue) ? __props.placeholder : vue.unref(data).label),
                3
                /* TEXT, CLASS */
              ),
              !vue.unref(lodash.isEmpty)(__props.modelValue) && !__props.disabled ? (vue.openBlock(), vue.createElementBlock("i", {
                key: 0,
                class: "my-select-clear",
                role: "button",
                "aria-label": vue.unref(index.i18n)("common.clear"),
                title: vue.unref(index.i18n)("common.clear")
              }, null, 8, _hoisted_1)) : vue.createCommentVNode("v-if", true),
              vue.createVNode(myIcon.default, {
                class: vue.normalizeClass(["my-select-arrow my-style-font_arrow icon-jt-x iconfont my-icon-downList-arrow", [{
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
        default: vue.withCtx(() => [
          vue.createVNode(myScrollbar.default, { height: __props.height }, {
            default: vue.withCtx(() => [
              vue.createVNode(elementAlign.default, {
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

exports.default = _sfc_main;
//# sourceMappingURL=my-select.vue2.js.map
