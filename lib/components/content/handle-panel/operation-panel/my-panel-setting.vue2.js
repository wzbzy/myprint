'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../../../locales/index.js');
var common = require('../../../../constants/common.js');
require('../../../my/input/index.js');
var myGroup = require('../../../my/group/my-group.vue.js');
var elementUtil = require('../../../../utils/elementUtil.js');
var mySwitch = require('../../../my/switch/my-switch.vue.js');
var myFormItem = require('../../../my/form/my-form-item.vue.js');
var myForm = require('../../../my/form/my-form.vue.js');
var myDividerPanel = require('../../../my/divider/my-divider-panel.vue.js');
var historyInput = require('../../../my/input/history-input.vue.js');
var historySelect = require('../../../my/input/history-select.vue.js');
var historyInputNumber = require('../../../my/input/history-input-number.vue.js');
var unit = require('../../../my/input/unit.vue.js');

var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "my-panel-setting",
  setup(__props) {
    const panel = elementUtil.getCurrentPanel();
    function selectPageSize(val) {
      for (let valueElement of common.pageSizeList) {
        if (valueElement.value == val) {
          elementUtil.changePageSize(valueElement);
          break;
        }
      }
    }
    function changePanelWidth(_val) {
      elementUtil.changePageSize();
    }
    function changePanelHeight(_val) {
      elementUtil.changePageSize();
    }
    function selectPageUnit() {
      elementUtil.changePageUnit();
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(myForm.default, {
        class: "my-form",
        "label-width": "80px",
        size: "small",
        "label-position": "right"
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(myDividerPanel.default, null, {
            divider: vue.withCtx(() => [
              vue.createTextVNode(
                vue.toDisplayString(vue.unref(index.i18n)("common.panel")),
                1
                /* TEXT */
              )
            ]),
            default: vue.withCtx(() => [
              vue.createVNode(myFormItem.default, {
                label: vue.unref(index.i18n)("handle.template.name")
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(historyInput.default), {
                    modelValue: vue.unref(panel).name,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(panel).name = $event),
                    type: "textarea",
                    placeholder: vue.unref(index.i18n)("handle.please.template.name"),
                    historyLabel: vue.unref(index.i18n)("handle.template.name"),
                    style: { "margin-right": "18px" }
                  }, null, 8, ["modelValue", "placeholder", "historyLabel"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"]),
              vue.createVNode(myFormItem.default, {
                label: vue.unref(index.i18n)("common.unit")
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(historySelect.default), {
                    modelValue: vue.unref(panel).pageUnit,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.unref(panel).pageUnit = $event),
                    onChange: selectPageUnit,
                    class: "width-160",
                    "data-list": vue.unref(common.pageUnitList),
                    historyLabel: vue.unref(index.i18n)("common.unit")
                  }, null, 8, ["modelValue", "data-list", "historyLabel"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"]),
              vue.createVNode(myFormItem.default, {
                label: vue.unref(index.i18n)("common.font.size.unit")
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(historySelect.default), {
                    modelValue: vue.unref(panel).fontSizeUnit,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vue.unref(panel).fontSizeUnit = $event),
                    class: "width-160",
                    "data-list": vue.unref(common.fontSizeUnitList),
                    historyLabel: vue.unref(index.i18n)("common.font.size.unit")
                  }, null, 8, ["modelValue", "data-list", "historyLabel"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"]),
              vue.createVNode(myFormItem.default, {
                label: vue.unref(index.i18n)("common.paper")
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(historySelect.default), {
                    modelValue: vue.unref(panel).pageSize,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => vue.unref(panel).pageSize = $event),
                    class: "width-160",
                    onChange: selectPageSize,
                    "data-list": vue.unref(common.pageSizeList),
                    historyLabel: vue.unref(index.i18n)("common.paper")
                  }, null, 8, ["modelValue", "data-list", "historyLabel"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"]),
              vue.createVNode(myFormItem.default, {
                label: vue.unref(index.i18n)("handle.width&height")
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(myGroup.default, null, {
                    default: vue.withCtx(() => [
                      vue.createVNode(vue.unref(historyInputNumber.default), {
                        class: "width-66",
                        modelValue: vue.unref(panel).width,
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => vue.unref(panel).width = $event),
                        onChange: changePanelWidth,
                        historyLabel: vue.unref(index.i18n)("handle.page.width")
                      }, null, 8, ["modelValue", "historyLabel"]),
                      vue.createVNode(vue.unref(historyInputNumber.default), {
                        class: "width-66",
                        modelValue: vue.unref(panel).height,
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => vue.unref(panel).height = $event),
                        onChange: changePanelHeight,
                        disabled: vue.unref(panel).pageSize == "AutoHeight",
                        historyLabel: vue.unref(index.i18n)("handle.page.height")
                      }, null, 8, ["modelValue", "disabled", "historyLabel"]),
                      vue.createVNode(vue.unref(unit.default))
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"]),
              vue.unref(panel).watermark ? (vue.openBlock(), vue.createBlock(myFormItem.default, {
                key: 0,
                label: vue.unref(index.i18n)("handle.watermark")
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(historyInput.default), {
                    modelValue: vue.unref(panel).watermarkContent,
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => vue.unref(panel).watermarkContent = $event),
                    placeholder: vue.unref(index.i18n)("handle.watermark"),
                    size: "small",
                    historyLabel: vue.unref(index.i18n)("handle.watermark"),
                    style: { "margin-right": "20px" }
                  }, null, 8, ["modelValue", "placeholder", "historyLabel"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : vue.createCommentVNode("v-if", true),
              vue.createVNode(myFormItem.default, {
                label: vue.unref(index.i18n)("handle.drag.snap.panel")
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(mySwitch.default, {
                    modelValue: vue.unref(panel).dragSnapPanelIs,
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => vue.unref(panel).dragSnapPanelIs = $event),
                    class: "ml-2"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"]),
              vue.createVNode(myFormItem.default, {
                label: vue.unref(index.i18n)("handle.drag.snap")
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(mySwitch.default, {
                    modelValue: vue.unref(panel).dragSnapIs,
                    "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => vue.unref(panel).dragSnapIs = $event),
                    class: "ml-2"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=my-panel-setting.vue2.js.map
