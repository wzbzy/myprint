'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var common = require('../../../../constants/common.js');
require('../../../my/input/index.js');
var elementUtil = require('../../../../utils/elementUtil.js');
var myDividerPanel = require('../../../my/divider/my-divider-panel.vue.js');
var myFormItem = require('../../../my/form/my-form-item.vue.js');
var myForm = require('../../../my/form/my-form.vue.js');
var index = require('../../../../locales/index.js');
var mySwitch = require('../../../my/switch/my-switch.vue.js');
var myButton = require('../../../my/button/my-Button.vue.js');
var mySlider = require('../../../my/slider/my-slider.vue.js');
var myGroup = require('../../../my/group/my-group.vue.js');
var tipIcon = require('../../../my/icon/tip-icon.vue.js');
var myIcon = require('../../../my/icon/my-icon.vue.js');
var QuestionFilled = require('../../../my/icon/icons/QuestionFilled.vue.js');
var myTooltip = require('../../../my/tooltip/my-tooltip.vue.js');
var app = require('../../../../stores/app.js');
var vueDemi = require('vue-demi');
var utils = require('../../../../utils/utils.js');
var moveable = require('../../../../plugins/moveable/moveable.js');
var devicePixelRatio = require('../../../../utils/devicePixelRatio.js');
var myRadio = require('../../../my/radio/my-radio.vue.js');
var historyInput = require('../../../my/input/history-input.vue.js');
var historyInputNumber = require('../../../my/input/history-input-number.vue.js');
var unit = require('../../../my/input/unit.vue.js');
var historySelect = require('../../../my/input/history-select.vue.js');

const _hoisted_1 = { style: { "margin-left": "20px" } };
const _hoisted_2 = { style: { "margin-left": "20px" } };
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "my-element-setting",
  setup(__props) {
    const appStore = app.useAppStoreHook();
    const currentBarCodeEg = vueDemi.computed(() => {
      if (element.value.option && element.value.option.barCodeType) {
        return changeBarCodeType(element.value.option.barCodeType);
      }
    });
    const element = vueDemi.computed(() => {
      if (appStore.currentElement.length > 0) {
        return appStore.currentElement[0];
      } else {
        return {};
      }
    });
    const noWorkInTableIs = vueDemi.computed(() => {
      const workEnvironment = elementUtil.multipleElementGetValue("runtimeOption.workEnvironment");
      return workEnvironment != "DataTable";
    });
    function includeProps(props, attr) {
      return common.getElementSetting(elementUtil.multipleElementGetValue(props)).includes(attr);
    }
    function changeTableBodyHeight(val) {
      elementUtil.multipleElementSetValue("option.tableBodyHeight", val);
      for (let tableBodyListElement of element.value.tableBodyList) {
        for (let tableBodyListElementElement of tableBodyListElement) {
          if (tableBodyListElementElement == null) {
            continue;
          }
          elementUtil.setElementHeightPx(devicePixelRatio.unit2px(val), tableBodyListElementElement);
        }
      }
    }
    function changeOptionFixed() {
      utils.mitt.emit("changeElement");
    }
    function changeLock() {
      if (element.value.lock) {
        moveable.removeCanSelectElement(element.value);
      } else {
        moveable.addCanSelectElement(element.value);
      }
      moveable.freshMoveableOption(element.value);
    }
    function rotatedPoint(_rotate) {
      moveable.moveableRotate(element.value.option.rotate);
    }
    function changeLocationX(_val) {
      moveable.moveableMoveX(devicePixelRatio.unit2px(elementUtil.getPositionX(element.value)));
    }
    function changeLocationY(_val) {
      moveable.moveableMoveY(devicePixelRatio.unit2px(elementUtil.getPositionY(element.value)));
    }
    function changeElementWidth(_val) {
      moveable.moveableResize(devicePixelRatio.unit2px(element.value.width), devicePixelRatio.unit2px(element.value.height), element.value.option.keepRatio);
    }
    function changeElementKeepRatio() {
      moveable.freshMoveableOption(element.value);
    }
    function clearDrawPanel() {
      element.value.data = JSON.stringify([]);
    }
    function changeBarCodeType(val) {
      return common.barcodeTypes.find((v) => v.value == val).eg;
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(myForm.default, {
        "label-width": "80px",
        size: "small",
        "label-position": "right"
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(
            myDividerPanel.default,
            null,
            vue.createSlots({
              default: vue.withCtx(() => [
                vue.unref(common.getElementSetting)(vue.unref(elementUtil.multipleElementGetValue)("type")).includes("data") ? (vue.openBlock(), vue.createBlock(myFormItem.default, {
                  key: 0,
                  label: vue.unref(index.i18n)("common.content")
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(vue.unref(historyInput.default), {
                      style: { "margin-right": "20px" },
                      historyLabel: vue.unref(index.i18n)("common.content"),
                      "model-value": vue.unref(elementUtil.multipleElementGetValue)("data"),
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = (val) => vue.unref(elementUtil.multipleElementSetValue)("data", val)),
                      type: "textarea"
                    }, null, 8, ["historyLabel", "model-value"])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["label"])) : vue.createCommentVNode("v-if", true),
                vue.unref(common.getElementSetting)(vue.unref(elementUtil.multipleElementGetValue)("type")).includes("formatter") ? (vue.openBlock(), vue.createBlock(myFormItem.default, {
                  key: 1,
                  label: vue.unref(index.i18n)("handle.formatter")
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(vue.unref(historyInput.default), {
                      style: { "margin-right": "20px" },
                      "model-value": vue.unref(elementUtil.multipleElementGetValue)("option.formatter"),
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = (val) => vue.unref(elementUtil.multipleElementSetValue)("option.formatter", val)),
                      type: "textarea",
                      historyLabel: vue.unref(index.i18n)("handle.formatter")
                    }, null, 8, ["model-value", "historyLabel"])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["label"])) : vue.createCommentVNode("v-if", true)
              ]),
              _: 2
              /* DYNAMIC */
            }, [
              vue.unref(noWorkInTableIs) ? {
                name: "divider",
                fn: vue.withCtx(() => [
                  vue.createTextVNode(
                    vue.toDisplayString(vue.unref(index.i18n)("common.basics")),
                    1
                    /* TEXT */
                  )
                ]),
                key: "0"
              } : {
                name: "divider",
                fn: vue.withCtx(() => [
                  vue.createTextVNode(
                    vue.toDisplayString(vue.unref(index.i18n)("handle.column")),
                    1
                    /* TEXT */
                  )
                ]),
                key: "1"
              }
            ]),
            1024
            /* DYNAMIC_SLOTS */
          ),
          vue.createVNode(myDividerPanel.default, { class: "divider-setting-layout" }, {
            divider: vue.withCtx(() => [
              vue.createTextVNode(
                vue.toDisplayString(vue.unref(index.i18n)("common.layout")) + " ",
                1
                /* TEXT */
              ),
              vue.createVNode(tipIcon.default, {
                class: vue.normalizeClass(["divider-setting-layout-lock iconfont", [vue.unref(elementUtil.multipleElementGetValue)("lock") ? "icon-lock" : "icon-unlock"]]),
                placement: "top",
                tips: vue.unref(index.i18n)("handle.lock.edit"),
                size: 14,
                padding: "11px",
                "model-value": vue.unref(elementUtil.multipleElementGetValue)("lock"),
                onClick: changeLock,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = (val) => vue.unref(elementUtil.multipleElementSetValue)("lock", val))
              }, null, 8, ["tips", "model-value", "class"])
            ]),
            default: vue.withCtx(() => [
              includeProps("type", "tableHeightAttr") ? (vue.openBlock(), vue.createBlock(myFormItem.default, {
                key: 0,
                label: vue.unref(index.i18n)("handle.height.attr")
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(myRadio.default, {
                    modelValue: vue.unref(element).option.tableHeightType,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => vue.unref(element).option.tableHeightType = $event),
                    dataList: vue.unref(common.tableBodyHeightTypeList)
                  }, null, 8, ["modelValue", "dataList"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : vue.createCommentVNode("v-if", true),
              includeProps("type", "x") && vue.unref(noWorkInTableIs) ? (vue.openBlock(), vue.createBlock(myFormItem.default, {
                key: 1,
                label: vue.unref(index.i18n)("common.xy")
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(myGroup.default, null, {
                    default: vue.withCtx(() => [
                      vue.createVNode(vue.unref(historyInputNumber.default), {
                        class: "width-60",
                        disabled: vue.unref(elementUtil.multipleElementGetValue)("lock"),
                        "model-value": vue.unref(elementUtil.multipleElementGetValue)("x"),
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = (val) => vue.unref(elementUtil.multipleElementSetValue)("x", val)),
                        onChange: changeLocationX,
                        historyLabel: vue.unref(index.i18n)("common.position")
                      }, null, 8, ["disabled", "model-value", "historyLabel"]),
                      vue.createVNode(vue.unref(historyInputNumber.default), {
                        class: "width-60",
                        disabled: vue.unref(elementUtil.multipleElementGetValue)("lock"),
                        "model-value": vue.unref(elementUtil.multipleElementGetValue)("y"),
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = (val) => vue.unref(elementUtil.multipleElementSetValue)("y", val)),
                        onChange: changeLocationY,
                        historyLabel: vue.unref(index.i18n)("common.position")
                      }, null, 8, ["disabled", "model-value", "historyLabel"]),
                      vue.createVNode(vue.unref(unit.default))
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : vue.createCommentVNode("v-if", true),
              includeProps("type", "width") ? (vue.openBlock(), vue.createBlock(myFormItem.default, {
                key: 2,
                label: vue.unref(index.i18n)("handle.width&height")
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(myGroup.default, null, {
                    default: vue.withCtx(() => [
                      vue.createVNode(vue.unref(historyInputNumber.default), {
                        class: "width-60",
                        disabled: vue.unref(elementUtil.multipleElementGetValue)("lock"),
                        "model-value": vue.unref(elementUtil.multipleElementGetValue)("width"),
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = (val) => vue.unref(elementUtil.multipleElementSetValue)("width", val)),
                        onChange: changeElementWidth,
                        historyLabel: vue.unref(index.i18n)("handle.page.width")
                      }, null, 8, ["disabled", "model-value", "historyLabel"]),
                      vue.createVNode(vue.unref(historyInputNumber.default), {
                        class: "width-60",
                        disabled: vue.unref(elementUtil.multipleElementGetValue)("lock"),
                        "model-value": vue.unref(elementUtil.multipleElementGetValue)("height"),
                        "onUpdate:modelValue": _cache[7] || (_cache[7] = (val) => vue.unref(elementUtil.multipleElementSetValue)("height", val)),
                        onChange: changeElementWidth,
                        historyLabel: vue.unref(index.i18n)("handle.page.height")
                      }, null, 8, ["disabled", "model-value", "historyLabel"]),
                      vue.createVNode(vue.unref(unit.default)),
                      vue.createVNode(myIcon.default, {
                        class: vue.normalizeClass(["setting-wh-lock iconfont", [vue.unref(elementUtil.multipleElementGetValue)("option.keepRatio") ? "icon-wh-lock" : "icon-wh-unlock"]]),
                        size: 16,
                        padding: "11px",
                        "model-value": vue.unref(elementUtil.multipleElementGetValue)("option.keepRatio"),
                        "onUpdate:modelValue": _cache[8] || (_cache[8] = (val) => vue.unref(elementUtil.multipleElementSetValue)("option.keepRatio", val)),
                        onClick: changeElementKeepRatio
                      }, null, 8, ["class", "model-value"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : vue.createCommentVNode("v-if", true),
              includeProps("type", "borderRadius") && vue.unref(noWorkInTableIs) ? (vue.openBlock(), vue.createBlock(myFormItem.default, {
                key: 3,
                label: vue.unref(index.i18n)("handle.border.radius")
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(myGroup.default, null, {
                    default: vue.withCtx(() => [
                      vue.createVNode(vue.unref(historyInputNumber.default), {
                        class: "width-60",
                        "model-value": vue.unref(elementUtil.multipleElementGetValue)("option.borderRadius"),
                        "onUpdate:modelValue": _cache[9] || (_cache[9] = (val) => vue.unref(elementUtil.multipleElementSetValue)("option.borderRadius", val)),
                        historyLabel: vue.unref(index.i18n)("handle.border.radius")
                      }, null, 8, ["model-value", "historyLabel"]),
                      vue.createVNode(vue.unref(unit.default))
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : vue.createCommentVNode("v-if", true),
              includeProps("type", "opacity") ? (vue.openBlock(), vue.createBlock(myFormItem.default, {
                key: 4,
                label: vue.unref(index.i18n)("handle.opacity")
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(mySlider.default, {
                    class: "width-120",
                    "model-value": vue.unref(elementUtil.multipleElementGetValue)("option.opacity"),
                    "onUpdate:modelValue": _cache[10] || (_cache[10] = (val) => vue.unref(elementUtil.multipleElementSetValue)("option.opacity", val)),
                    max: 1,
                    min: 0,
                    step: 0.01,
                    "show-tooltip": false,
                    size: "small",
                    historyLabel: vue.unref(index.i18n)("handle.opacity")
                  }, null, 8, ["model-value", "historyLabel"]),
                  vue.createElementVNode(
                    "div",
                    _hoisted_1,
                    vue.toDisplayString(vue.unref(elementUtil.multipleElementGetValue)("option.opacity")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : vue.createCommentVNode("v-if", true),
              includeProps("type", "rotate") && vue.unref(noWorkInTableIs) ? (vue.openBlock(), vue.createBlock(myFormItem.default, {
                key: 5,
                label: vue.unref(index.i18n)("handle.rotate")
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(mySlider.default, {
                    class: "width-120",
                    "model-value": vue.unref(elementUtil.multipleElementGetValue)("option.rotate"),
                    "onUpdate:modelValue": _cache[11] || (_cache[11] = (val) => vue.unref(elementUtil.multipleElementSetValue)("option.rotate", val)),
                    max: 359,
                    min: 0,
                    step: 1,
                    onChange: _cache[12] || (_cache[12] = ($event) => rotatedPoint(vue.unref(appStore).currentElement)),
                    "show-tooltip": false,
                    size: "small"
                  }, null, 8, ["model-value"]),
                  vue.createElementVNode(
                    "div",
                    _hoisted_2,
                    vue.toDisplayString(vue.unref(elementUtil.multipleElementGetValue)("option.rotate")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : vue.createCommentVNode("v-if", true)
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(myDividerPanel.default, null, {
            divider: vue.withCtx(() => [
              vue.createTextVNode(
                vue.toDisplayString(vue.unref(index.i18n)("common.attr")),
                1
                /* TEXT */
              )
            ]),
            default: vue.withCtx(() => [
              includeProps("type", "contentType") ? (vue.openBlock(), vue.createBlock(myFormItem.default, {
                key: 0,
                label: vue.unref(index.i18n)("handle.content.type")
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(historySelect.default), {
                    "model-value": vue.unref(elementUtil.multipleElementGetValue)("contentType"),
                    class: "width-140",
                    "onUpdate:modelValue": _cache[13] || (_cache[13] = (val) => vue.unref(elementUtil.multipleElementSetValue)("contentType", val)),
                    "data-list": vue.unref(common.textContentTypes),
                    historyLabel: vue.unref(index.i18n)("handle.content.type")
                  }, null, 8, ["model-value", "data-list", "historyLabel"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : vue.createCommentVNode("v-if", true),
              vue.unref(elementUtil.multipleElementGetValue)("contentType") == "Barcode" ? (vue.openBlock(), vue.createBlock(myFormItem.default, {
                key: 1,
                label: vue.unref(index.i18n)("handle.barCode.type")
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(historySelect.default), {
                    class: "width-120",
                    "model-value": vue.unref(elementUtil.multipleElementGetValue)("option.barCodeType"),
                    "onUpdate:modelValue": _cache[14] || (_cache[14] = (val) => vue.unref(elementUtil.multipleElementSetValue)("option.barCodeType", val)),
                    "data-list": vue.unref(common.barcodeTypes),
                    historyLabel: vue.unref(index.i18n)("handle.barCode.type")
                  }, null, 8, ["model-value", "data-list", "historyLabel"]),
                  vue.createCommentVNode('popper-class="barcode-type-tooltip"'),
                  vue.createCommentVNode('\r\n                                    :max-width="200"\r\n                '),
                  vue.createVNode(myTooltip.default, {
                    content: vue.unref(currentBarCodeEg),
                    placement: "top"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(myIcon.default, null, {
                        default: vue.withCtx(() => [
                          vue.createVNode(QuestionFilled.default)
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["content"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : vue.createCommentVNode("v-if", true),
              vue.unref(elementUtil.multipleElementGetValue)("contentType") == "Barcode" ? (vue.openBlock(), vue.createBlock(myFormItem.default, {
                key: 2,
                label: vue.unref(index.i18n)("handle.barCode.value")
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(mySwitch.default, {
                    "model-value": vue.unref(elementUtil.multipleElementGetValue)("option.barCodeDisplayValIs"),
                    "onUpdate:modelValue": _cache[15] || (_cache[15] = (val) => vue.unref(elementUtil.multipleElementSetValue)("option.barCodeDisplayValIs", val)),
                    class: "ml-2",
                    "active-text": vue.unref(index.i18n)("common.show"),
                    "inactive-text": vue.unref(index.i18n)("common.hidden")
                  }, null, 8, ["model-value", "active-text", "inactive-text"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : vue.createCommentVNode("v-if", true),
              vue.unref(elementUtil.multipleElementGetValue)("contentType") == "QrCode" ? (vue.openBlock(), vue.createBlock(myFormItem.default, {
                key: 3,
                label: vue.unref(index.i18n)("handle.qrCode.errorCorrectionLevel")
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(historySelect.default), {
                    "model-value": vue.unref(elementUtil.multipleElementGetValue)("option.qrErrorCorrectionLevel"),
                    "onUpdate:modelValue": _cache[16] || (_cache[16] = (val) => vue.unref(elementUtil.multipleElementSetValue)("option.qrErrorCorrectionLevel", val)),
                    class: "width-140",
                    "data-list": vue.unref(common.qrCodeErrorCorrectionLevel),
                    historyLabel: vue.unref(index.i18n)("handle.qrCode.errorCorrectionLevel")
                  }, null, 8, ["model-value", "data-list", "historyLabel"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : vue.createCommentVNode("v-if", true),
              vue.unref(elementUtil.multipleElementGetValue)("contentType") == "QrCode" ? (vue.openBlock(), vue.createBlock(myFormItem.default, {
                key: 4,
                label: vue.unref(index.i18n)("handle.qrCode.qrCodeScale")
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(historyInputNumber.default), {
                    class: "width-140",
                    min: 0.01,
                    "model-value": vue.unref(elementUtil.multipleElementGetValue)("option.qrCodeScale"),
                    "onUpdate:modelValue": _cache[17] || (_cache[17] = (val) => vue.unref(elementUtil.multipleElementSetValue)("option.qrCodeScale", val)),
                    historyLabel: vue.unref(index.i18n)("handle.qrCode.qrCodeScale"),
                    placeholder: vue.unref(index.i18n)("handle.qrCode.qrCodeScale.tips")
                  }, null, 8, ["model-value", "historyLabel", "placeholder"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : vue.createCommentVNode("v-if", true),
              includeProps("type", "lineBreak") && vue.unref(noWorkInTableIs) ? (vue.openBlock(), vue.createBlock(myFormItem.default, {
                key: 5,
                label: vue.unref(index.i18n)("handle.line.break")
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(mySwitch.default, {
                    "model-value": vue.unref(elementUtil.multipleElementGetValue)("option.lineBreak"),
                    "onUpdate:modelValue": _cache[18] || (_cache[18] = (val) => vue.unref(elementUtil.multipleElementSetValue)("option.lineBreak", val)),
                    class: "ml-2"
                  }, null, 8, ["model-value"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : vue.createCommentVNode("v-if", true),
              includeProps("type", "autoTextHeight") && vue.unref(noWorkInTableIs) ? (vue.openBlock(), vue.createBlock(myFormItem.default, {
                key: 6,
                label: vue.unref(index.i18n)("handle.text.auto.height")
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(mySwitch.default, {
                    "model-value": vue.unref(elementUtil.multipleElementGetValue)("option.autoTextHeight"),
                    "onUpdate:modelValue": _cache[19] || (_cache[19] = (val) => vue.unref(elementUtil.multipleElementSetValue)("option.autoTextHeight", val)),
                    class: "ml-2"
                  }, null, 8, ["model-value"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : vue.createCommentVNode("v-if", true),
              includeProps("type", "lineHeight") ? (vue.openBlock(), vue.createBlock(myFormItem.default, {
                key: 7,
                label: vue.unref(index.i18n)("handle.line.height")
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(myGroup.default, null, {
                    default: vue.withCtx(() => [
                      vue.createVNode(vue.unref(historyInputNumber.default), {
                        class: "num-2",
                        min: 0.01,
                        "model-value": vue.unref(elementUtil.multipleElementGetValue)("option.lineHeight"),
                        "onUpdate:modelValue": _cache[20] || (_cache[20] = (val) => vue.unref(elementUtil.multipleElementSetValue)("option.lineHeight", val)),
                        historyLabel: vue.unref(index.i18n)("handle.line.height")
                      }, null, 8, ["model-value", "historyLabel"]),
                      vue.createVNode(vue.unref(unit.default))
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : vue.createCommentVNode("v-if", true),
              includeProps("type", "lineWidth") ? (vue.openBlock(), vue.createBlock(myFormItem.default, {
                key: 8,
                label: vue.unref(index.i18n)("handle.line.width")
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(myGroup.default, null, {
                    default: vue.withCtx(() => [
                      vue.createVNode(vue.unref(historyInputNumber.default), {
                        class: "num-2",
                        min: 0.01,
                        "model-value": vue.unref(elementUtil.multipleElementGetValue)("option.lineWidth"),
                        "onUpdate:modelValue": _cache[21] || (_cache[21] = (val) => vue.unref(elementUtil.multipleElementSetValue)("option.lineWidth", val)),
                        historyLabel: vue.unref(index.i18n)("handle.line.width")
                      }, null, 8, ["model-value", "historyLabel"]),
                      vue.createVNode(vue.unref(unit.default))
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : vue.createCommentVNode("v-if", true),
              includeProps("type", "dottedStyle") ? (vue.openBlock(), vue.createBlock(myFormItem.default, {
                key: 9,
                label: vue.unref(index.i18n)("handle.dotted.style")
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(historySelect.default), {
                    "model-value": vue.unref(elementUtil.multipleElementGetValue)("option.dottedStyle"),
                    "onUpdate:modelValue": _cache[22] || (_cache[22] = (val) => vue.unref(elementUtil.multipleElementSetValue)("option.dottedStyle", val)),
                    class: "width-120",
                    "data-list": vue.unref(common.dottedStyleList),
                    historyLabel: vue.unref(index.i18n)("handle.dotted.style")
                  }, null, 8, ["model-value", "data-list", "historyLabel"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : vue.createCommentVNode("v-if", true),
              includeProps("type", "padding") ? (vue.openBlock(), vue.createBlock(myFormItem.default, {
                key: 10,
                label: vue.unref(index.i18n)("handle.padding")
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(myGroup.default, null, {
                    default: vue.withCtx(() => [
                      vue.createVNode(vue.unref(historyInputNumber.default), {
                        class: "num-4",
                        placeholder: vue.unref(index.i18n)("handle.top"),
                        historyLabel: vue.unref(index.i18n)("handle.padding.top"),
                        "model-value": vue.unref(elementUtil.multipleElementGetValue)("option.padding.top"),
                        "onUpdate:modelValue": _cache[23] || (_cache[23] = (val) => vue.unref(elementUtil.multipleElementSetValue)("option.padding.top", val))
                      }, {
                        append: vue.withCtx(() => [..._cache[36] || (_cache[36] = [
                          vue.createTextVNode(
                            "mm",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      }, 8, ["placeholder", "historyLabel", "model-value"]),
                      vue.createVNode(vue.unref(historyInputNumber.default), {
                        class: "num-4",
                        placeholder: vue.unref(index.i18n)("handle.bottom"),
                        historyLabel: vue.unref(index.i18n)("handle.padding.bottom"),
                        "model-value": vue.unref(elementUtil.multipleElementGetValue)("option.padding.bottom"),
                        "onUpdate:modelValue": _cache[24] || (_cache[24] = (val) => vue.unref(elementUtil.multipleElementSetValue)("option.padding.bottom", val))
                      }, {
                        append: vue.withCtx(() => [..._cache[37] || (_cache[37] = [
                          vue.createTextVNode(
                            "mm",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      }, 8, ["placeholder", "historyLabel", "model-value"]),
                      vue.createVNode(vue.unref(historyInputNumber.default), {
                        class: "num-4",
                        placeholder: vue.unref(index.i18n)("handle.left"),
                        historyLabel: vue.unref(index.i18n)("handle.padding.left"),
                        "model-value": vue.unref(elementUtil.multipleElementGetValue)("option.padding.left"),
                        "onUpdate:modelValue": _cache[25] || (_cache[25] = (val) => vue.unref(elementUtil.multipleElementSetValue)("option.padding.left", val))
                      }, {
                        append: vue.withCtx(() => [..._cache[38] || (_cache[38] = [
                          vue.createTextVNode(
                            "mm",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      }, 8, ["placeholder", "historyLabel", "model-value"]),
                      vue.createVNode(vue.unref(historyInputNumber.default), {
                        class: "num-4",
                        placeholder: vue.unref(index.i18n)("handle.right"),
                        historyLabel: vue.unref(index.i18n)("handle.padding.right"),
                        "model-value": vue.unref(elementUtil.multipleElementGetValue)("option.padding.right"),
                        "onUpdate:modelValue": _cache[26] || (_cache[26] = (val) => vue.unref(elementUtil.multipleElementSetValue)("option.padding.right", val))
                      }, {
                        append: vue.withCtx(() => [..._cache[39] || (_cache[39] = [
                          vue.createTextVNode(
                            "mm",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      }, 8, ["placeholder", "historyLabel", "model-value"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : vue.createCommentVNode("v-if", true),
              includeProps("type", "margin") ? (vue.openBlock(), vue.createBlock(myFormItem.default, {
                key: 11,
                label: vue.unref(index.i18n)("handle.margin")
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(myGroup.default, null, {
                    default: vue.withCtx(() => [
                      vue.createVNode(vue.unref(historyInputNumber.default), {
                        class: "num-4",
                        placeholder: vue.unref(index.i18n)("handle.top"),
                        historyLabel: vue.unref(index.i18n)("handle.margin.top"),
                        "model-value": vue.unref(elementUtil.multipleElementGetValue)("option.margin.top"),
                        "onUpdate:modelValue": _cache[27] || (_cache[27] = (val) => vue.unref(elementUtil.multipleElementSetValue)("option.margin.top", val))
                      }, {
                        append: vue.withCtx(() => [..._cache[40] || (_cache[40] = [
                          vue.createTextVNode(
                            "mm",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      }, 8, ["placeholder", "historyLabel", "model-value"]),
                      vue.createVNode(vue.unref(historyInputNumber.default), {
                        class: "num-4",
                        placeholder: vue.unref(index.i18n)("handle.bottom"),
                        historyLabel: vue.unref(index.i18n)("handle.margin.bottom"),
                        "model-value": vue.unref(elementUtil.multipleElementGetValue)("option.margin.bottom"),
                        "onUpdate:modelValue": _cache[28] || (_cache[28] = (val) => vue.unref(elementUtil.multipleElementSetValue)("option.margin.bottom", val))
                      }, {
                        append: vue.withCtx(() => [..._cache[41] || (_cache[41] = [
                          vue.createTextVNode(
                            "mm",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      }, 8, ["placeholder", "historyLabel", "model-value"]),
                      vue.createVNode(vue.unref(historyInputNumber.default), {
                        class: "num-4",
                        placeholder: vue.unref(index.i18n)("handle.left"),
                        historyLabel: vue.unref(index.i18n)("handle.margin.left"),
                        "model-value": vue.unref(elementUtil.multipleElementGetValue)("option.margin.left"),
                        "onUpdate:modelValue": _cache[29] || (_cache[29] = (val) => vue.unref(elementUtil.multipleElementSetValue)("option.margin.left", val))
                      }, {
                        append: vue.withCtx(() => [..._cache[42] || (_cache[42] = [
                          vue.createTextVNode(
                            "mm",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      }, 8, ["placeholder", "historyLabel", "model-value"]),
                      vue.createVNode(vue.unref(historyInputNumber.default), {
                        class: "num-4",
                        placeholder: vue.unref(index.i18n)("handle.right"),
                        historyLabel: vue.unref(index.i18n)("handle.margin.right"),
                        "model-value": vue.unref(elementUtil.multipleElementGetValue)("option.margin.right"),
                        "onUpdate:modelValue": _cache[30] || (_cache[30] = (val) => vue.unref(elementUtil.multipleElementSetValue)("option.margin.right", val))
                      }, {
                        append: vue.withCtx(() => [..._cache[43] || (_cache[43] = [
                          vue.createTextVNode(
                            "mm",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      }, 8, ["placeholder", "historyLabel", "model-value"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : vue.createCommentVNode("v-if", true),
              vue.unref(elementUtil.multipleElementGetValue)("type") != "DataTable" && vue.unref(noWorkInTableIs) ? (vue.openBlock(), vue.createBlock(myFormItem.default, {
                key: 12,
                label: vue.unref(index.i18n)("handle.fixed.position")
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(mySwitch.default, {
                    "model-value": vue.unref(elementUtil.multipleElementGetValue)("option.fixed"),
                    "onUpdate:modelValue": _cache[31] || (_cache[31] = (val) => vue.unref(elementUtil.multipleElementSetValue)("option.fixed", val)),
                    onChange: changeOptionFixed,
                    class: "ml-2"
                  }, null, 8, ["model-value"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : vue.createCommentVNode("v-if", true),
              includeProps("type", "clearDrawPanel") ? (vue.openBlock(), vue.createBlock(myButton.default, {
                key: 13,
                size: "small",
                onClick: clearDrawPanel
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(
                    vue.toDisplayString(vue.unref(index.i18n)("handle.clear.canvas")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              })) : vue.createCommentVNode("v-if", true),
              includeProps("type", "tableBodyHeightType") ? (vue.openBlock(), vue.createBlock(myFormItem.default, {
                key: 14,
                label: vue.unref(index.i18n)("handle.line.height")
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(myRadio.default, {
                    modelValue: vue.unref(element).option.tableBodyHeightType,
                    "onUpdate:modelValue": _cache[32] || (_cache[32] = ($event) => vue.unref(element).option.tableBodyHeightType = $event),
                    dataList: vue.unref(common.tableBodyHeightTypeList)
                  }, null, 8, ["modelValue", "dataList"]),
                  vue.unref(element).option.tableBodyHeightType == "FIXED" ? (vue.openBlock(), vue.createBlock(myGroup.default, {
                    key: 0,
                    style: { "margin-top": "10px" }
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(vue.unref(historyInputNumber.default), {
                        class: "num-2",
                        min: 0.01,
                        "model-value": vue.unref(elementUtil.multipleElementGetValue)("option.tableBodyHeight"),
                        onChange: changeTableBodyHeight,
                        historyLabel: vue.unref(index.i18n)("handle.line.height")
                      }, null, 8, ["model-value", "historyLabel"]),
                      vue.createVNode(vue.unref(unit.default))
                    ]),
                    _: 1
                    /* STABLE */
                  })) : vue.createCommentVNode("v-if", true)
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : vue.createCommentVNode("v-if", true),
              includeProps("type", "tablePageHead") ? (vue.openBlock(), vue.createBlock(myFormItem.default, {
                key: 15,
                label: vue.unref(index.i18n)("handle.table.page.head")
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(mySwitch.default, {
                    "model-value": vue.unref(elementUtil.multipleElementGetValue)("option.tablePageHeadIs"),
                    "onUpdate:modelValue": _cache[33] || (_cache[33] = (val) => vue.unref(elementUtil.multipleElementSetValue)("option.tablePageHeadIs", val)),
                    class: "ml-2"
                  }, null, 8, ["model-value"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : vue.createCommentVNode("v-if", true),
              includeProps("type", "tablePageHead") ? (vue.openBlock(), vue.createBlock(myFormItem.default, {
                key: 16,
                label: vue.unref(index.i18n)("handle.table.hidden.head")
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(mySwitch.default, {
                    "model-value": vue.unref(elementUtil.multipleElementGetValue)("option.tableHiddenHeadIs"),
                    "onUpdate:modelValue": _cache[34] || (_cache[34] = (val) => vue.unref(elementUtil.multipleElementSetValue)("option.tableHiddenHeadIs", val)),
                    class: "ml-2"
                  }, null, 8, ["model-value"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : vue.createCommentVNode("v-if", true)
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(myDividerPanel.default, null, {
            divider: vue.withCtx(() => [
              vue.createTextVNode(
                vue.toDisplayString(vue.unref(index.i18n)("handle.print.strategy")),
                1
                /* TEXT */
              )
            ]),
            default: vue.withCtx(() => [
              vue.unref(elementUtil.multipleElementGetValue)("option.fixed") ? (vue.openBlock(), vue.createBlock(myFormItem.default, {
                key: 0,
                label: vue.unref(index.i18n)("handle.display.strategy")
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(historySelect.default), {
                    "model-value": vue.unref(elementUtil.multipleElementGetValue)("option.displayStrategy"),
                    "onUpdate:modelValue": _cache[35] || (_cache[35] = (val) => vue.unref(elementUtil.multipleElementSetValue)("option.displayStrategy", val)),
                    class: "width-120",
                    "data-list": vue.unref(common.displayStrategyList),
                    historyLabel: vue.unref(index.i18n)("handle.display.strategy")
                  }, null, 8, ["model-value", "data-list", "historyLabel"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : vue.createCommentVNode("v-if", true)
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
//# sourceMappingURL=my-element-setting.vue2.js.map
