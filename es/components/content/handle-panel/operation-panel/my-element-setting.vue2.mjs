import { defineComponent, openBlock, createBlock, withCtx, createVNode, createSlots, unref, createCommentVNode, createTextVNode, toDisplayString, normalizeClass, createElementVNode } from 'vue';
import { getElementSetting, barcodeTypes, tableBodyHeightTypeList, textContentTypes, qrCodeErrorCorrectionLevel, dottedStyleList, displayStrategyList } from '../../../../constants/common.mjs';
import '../../../my/input/index.mjs';
import { multipleElementGetValue, multipleElementSetValue, setElementHeightPx, getPositionX, getPositionY } from '../../../../utils/elementUtil.mjs';
import MyDividerPanel from '../../../my/divider/my-divider-panel.vue.mjs';
import MyFormItem from '../../../my/form/my-form-item.vue.mjs';
import MyForm from '../../../my/form/my-form.vue.mjs';
import { i18n } from '../../../../locales/index.mjs';
import MySwitch from '../../../my/switch/my-switch.vue.mjs';
import MyButton from '../../../my/button/my-Button.vue.mjs';
import MySlider from '../../../my/slider/my-slider.vue.mjs';
import MyGroup from '../../../my/group/my-group.vue.mjs';
import TipIcon from '../../../my/icon/tip-icon.vue.mjs';
import MyIcon from '../../../my/icon/my-icon.vue.mjs';
import QuestionFilled from '../../../my/icon/icons/QuestionFilled.vue.mjs';
import MyTooltip from '../../../my/tooltip/my-tooltip.vue.mjs';
import { useAppStoreHook } from '../../../../stores/app.mjs';
import { computed } from 'vue-demi';
import { mitt } from '../../../../utils/utils.mjs';
import { removeCanSelectElement, addCanSelectElement, freshMoveableOption, moveableRotate, moveableMoveX, moveableMoveY, moveableResize } from '../../../../plugins/moveable/moveable.mjs';
import { unit2px } from '../../../../utils/devicePixelRatio.mjs';
import MyRadio from '../../../my/radio/my-radio.vue.mjs';
import MyHistoryInput from '../../../my/input/history-input.vue.mjs';
import MyHistoryInputNumber from '../../../my/input/history-input-number.vue.mjs';
import MyUnit from '../../../my/input/unit.vue.mjs';
import MyHistorySelect from '../../../my/input/history-select.vue.mjs';

const _hoisted_1 = { style: { "margin-left": "20px" } };
const _hoisted_2 = { style: { "margin-left": "20px" } };
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "my-element-setting",
  setup(__props) {
    const appStore = useAppStoreHook();
    const currentBarCodeEg = computed(() => {
      if (element.value.option && element.value.option.barCodeType) {
        return changeBarCodeType(element.value.option.barCodeType);
      }
    });
    const element = computed(() => {
      if (appStore.currentElement.length > 0) {
        return appStore.currentElement[0];
      } else {
        return {};
      }
    });
    const noWorkInTableIs = computed(() => {
      const workEnvironment = multipleElementGetValue("runtimeOption.workEnvironment");
      return workEnvironment != "DataTable";
    });
    function includeProps(props, attr) {
      return getElementSetting(multipleElementGetValue(props)).includes(attr);
    }
    function changeTableBodyHeight(val) {
      multipleElementSetValue("option.tableBodyHeight", val);
      for (let tableBodyListElement of element.value.tableBodyList) {
        for (let tableBodyListElementElement of tableBodyListElement) {
          if (tableBodyListElementElement == null) {
            continue;
          }
          setElementHeightPx(unit2px(val), tableBodyListElementElement);
        }
      }
    }
    function changeOptionFixed() {
      mitt.emit("changeElement");
    }
    function changeLock() {
      if (element.value.lock) {
        removeCanSelectElement(element.value);
      } else {
        addCanSelectElement(element.value);
      }
      freshMoveableOption(element.value);
    }
    function rotatedPoint(_rotate) {
      moveableRotate(element.value.option.rotate);
    }
    function changeLocationX(_val) {
      moveableMoveX(unit2px(getPositionX(element.value)));
    }
    function changeLocationY(_val) {
      moveableMoveY(unit2px(getPositionY(element.value)));
    }
    function changeElementWidth(_val) {
      moveableResize(unit2px(element.value.width), unit2px(element.value.height), element.value.option.keepRatio);
    }
    function changeElementKeepRatio() {
      freshMoveableOption(element.value);
    }
    function clearDrawPanel() {
      element.value.data = JSON.stringify([]);
    }
    function changeBarCodeType(val) {
      return barcodeTypes.find((v) => v.value == val).eg;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MyForm, {
        "label-width": "80px",
        size: "small",
        "label-position": "right"
      }, {
        default: withCtx(() => [
          createVNode(
            MyDividerPanel,
            null,
            createSlots({
              default: withCtx(() => [
                unref(getElementSetting)(unref(multipleElementGetValue)("type")).includes("data") ? (openBlock(), createBlock(MyFormItem, {
                  key: 0,
                  label: unref(i18n)("common.content")
                }, {
                  default: withCtx(() => [
                    createVNode(unref(MyHistoryInput), {
                      style: { "margin-right": "20px" },
                      historyLabel: unref(i18n)("common.content"),
                      "model-value": unref(multipleElementGetValue)("data"),
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = (val) => unref(multipleElementSetValue)("data", val)),
                      type: "textarea"
                    }, null, 8, ["historyLabel", "model-value"])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["label"])) : createCommentVNode("v-if", true),
                unref(getElementSetting)(unref(multipleElementGetValue)("type")).includes("formatter") ? (openBlock(), createBlock(MyFormItem, {
                  key: 1,
                  label: unref(i18n)("handle.formatter")
                }, {
                  default: withCtx(() => [
                    createVNode(unref(MyHistoryInput), {
                      style: { "margin-right": "20px" },
                      "model-value": unref(multipleElementGetValue)("option.formatter"),
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = (val) => unref(multipleElementSetValue)("option.formatter", val)),
                      type: "textarea",
                      historyLabel: unref(i18n)("handle.formatter")
                    }, null, 8, ["model-value", "historyLabel"])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["label"])) : createCommentVNode("v-if", true)
              ]),
              _: 2
              /* DYNAMIC */
            }, [
              unref(noWorkInTableIs) ? {
                name: "divider",
                fn: withCtx(() => [
                  createTextVNode(
                    toDisplayString(unref(i18n)("common.basics")),
                    1
                    /* TEXT */
                  )
                ]),
                key: "0"
              } : {
                name: "divider",
                fn: withCtx(() => [
                  createTextVNode(
                    toDisplayString(unref(i18n)("handle.column")),
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
          createVNode(MyDividerPanel, { class: "divider-setting-layout" }, {
            divider: withCtx(() => [
              createTextVNode(
                toDisplayString(unref(i18n)("common.layout")) + " ",
                1
                /* TEXT */
              ),
              createVNode(TipIcon, {
                class: normalizeClass(["divider-setting-layout-lock iconfont", [unref(multipleElementGetValue)("lock") ? "icon-lock" : "icon-unlock"]]),
                placement: "top",
                tips: unref(i18n)("handle.lock.edit"),
                size: 14,
                padding: "11px",
                "model-value": unref(multipleElementGetValue)("lock"),
                onClick: changeLock,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = (val) => unref(multipleElementSetValue)("lock", val))
              }, null, 8, ["tips", "model-value", "class"])
            ]),
            default: withCtx(() => [
              includeProps("type", "tableHeightAttr") ? (openBlock(), createBlock(MyFormItem, {
                key: 0,
                label: unref(i18n)("handle.height.attr")
              }, {
                default: withCtx(() => [
                  createVNode(MyRadio, {
                    modelValue: unref(element).option.tableHeightType,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(element).option.tableHeightType = $event),
                    dataList: unref(tableBodyHeightTypeList)
                  }, null, 8, ["modelValue", "dataList"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : createCommentVNode("v-if", true),
              includeProps("type", "x") && unref(noWorkInTableIs) ? (openBlock(), createBlock(MyFormItem, {
                key: 1,
                label: unref(i18n)("common.xy")
              }, {
                default: withCtx(() => [
                  createVNode(MyGroup, null, {
                    default: withCtx(() => [
                      createVNode(unref(MyHistoryInputNumber), {
                        class: "width-60",
                        disabled: unref(multipleElementGetValue)("lock"),
                        "model-value": unref(multipleElementGetValue)("x"),
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = (val) => unref(multipleElementSetValue)("x", val)),
                        onChange: changeLocationX,
                        historyLabel: unref(i18n)("common.position")
                      }, null, 8, ["disabled", "model-value", "historyLabel"]),
                      createVNode(unref(MyHistoryInputNumber), {
                        class: "width-60",
                        disabled: unref(multipleElementGetValue)("lock"),
                        "model-value": unref(multipleElementGetValue)("y"),
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = (val) => unref(multipleElementSetValue)("y", val)),
                        onChange: changeLocationY,
                        historyLabel: unref(i18n)("common.position")
                      }, null, 8, ["disabled", "model-value", "historyLabel"]),
                      createVNode(unref(MyUnit))
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : createCommentVNode("v-if", true),
              includeProps("type", "width") ? (openBlock(), createBlock(MyFormItem, {
                key: 2,
                label: unref(i18n)("handle.width&height")
              }, {
                default: withCtx(() => [
                  createVNode(MyGroup, null, {
                    default: withCtx(() => [
                      createVNode(unref(MyHistoryInputNumber), {
                        class: "width-60",
                        disabled: unref(multipleElementGetValue)("lock"),
                        "model-value": unref(multipleElementGetValue)("width"),
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = (val) => unref(multipleElementSetValue)("width", val)),
                        onChange: changeElementWidth,
                        historyLabel: unref(i18n)("handle.page.width")
                      }, null, 8, ["disabled", "model-value", "historyLabel"]),
                      createVNode(unref(MyHistoryInputNumber), {
                        class: "width-60",
                        disabled: unref(multipleElementGetValue)("lock"),
                        "model-value": unref(multipleElementGetValue)("height"),
                        "onUpdate:modelValue": _cache[7] || (_cache[7] = (val) => unref(multipleElementSetValue)("height", val)),
                        onChange: changeElementWidth,
                        historyLabel: unref(i18n)("handle.page.height")
                      }, null, 8, ["disabled", "model-value", "historyLabel"]),
                      createVNode(unref(MyUnit)),
                      createVNode(MyIcon, {
                        class: normalizeClass(["setting-wh-lock iconfont", [unref(multipleElementGetValue)("option.keepRatio") ? "icon-wh-lock" : "icon-wh-unlock"]]),
                        size: 16,
                        padding: "11px",
                        "model-value": unref(multipleElementGetValue)("option.keepRatio"),
                        "onUpdate:modelValue": _cache[8] || (_cache[8] = (val) => unref(multipleElementSetValue)("option.keepRatio", val)),
                        onClick: changeElementKeepRatio
                      }, null, 8, ["class", "model-value"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : createCommentVNode("v-if", true),
              includeProps("type", "borderRadius") && unref(noWorkInTableIs) ? (openBlock(), createBlock(MyFormItem, {
                key: 3,
                label: unref(i18n)("handle.border.radius")
              }, {
                default: withCtx(() => [
                  createVNode(MyGroup, null, {
                    default: withCtx(() => [
                      createVNode(unref(MyHistoryInputNumber), {
                        class: "width-60",
                        "model-value": unref(multipleElementGetValue)("option.borderRadius"),
                        "onUpdate:modelValue": _cache[9] || (_cache[9] = (val) => unref(multipleElementSetValue)("option.borderRadius", val)),
                        historyLabel: unref(i18n)("handle.border.radius")
                      }, null, 8, ["model-value", "historyLabel"]),
                      createVNode(unref(MyUnit))
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : createCommentVNode("v-if", true),
              includeProps("type", "opacity") ? (openBlock(), createBlock(MyFormItem, {
                key: 4,
                label: unref(i18n)("handle.opacity")
              }, {
                default: withCtx(() => [
                  createVNode(MySlider, {
                    class: "width-120",
                    "model-value": unref(multipleElementGetValue)("option.opacity"),
                    "onUpdate:modelValue": _cache[10] || (_cache[10] = (val) => unref(multipleElementSetValue)("option.opacity", val)),
                    max: 1,
                    min: 0,
                    step: 0.01,
                    "show-tooltip": false,
                    size: "small",
                    historyLabel: unref(i18n)("handle.opacity")
                  }, null, 8, ["model-value", "historyLabel"]),
                  createElementVNode(
                    "div",
                    _hoisted_1,
                    toDisplayString(unref(multipleElementGetValue)("option.opacity")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : createCommentVNode("v-if", true),
              includeProps("type", "rotate") && unref(noWorkInTableIs) ? (openBlock(), createBlock(MyFormItem, {
                key: 5,
                label: unref(i18n)("handle.rotate")
              }, {
                default: withCtx(() => [
                  createVNode(MySlider, {
                    class: "width-120",
                    "model-value": unref(multipleElementGetValue)("option.rotate"),
                    "onUpdate:modelValue": _cache[11] || (_cache[11] = (val) => unref(multipleElementSetValue)("option.rotate", val)),
                    max: 359,
                    min: 0,
                    step: 1,
                    onChange: _cache[12] || (_cache[12] = ($event) => rotatedPoint(unref(appStore).currentElement)),
                    "show-tooltip": false,
                    size: "small"
                  }, null, 8, ["model-value"]),
                  createElementVNode(
                    "div",
                    _hoisted_2,
                    toDisplayString(unref(multipleElementGetValue)("option.rotate")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : createCommentVNode("v-if", true)
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(MyDividerPanel, null, {
            divider: withCtx(() => [
              createTextVNode(
                toDisplayString(unref(i18n)("common.attr")),
                1
                /* TEXT */
              )
            ]),
            default: withCtx(() => [
              includeProps("type", "contentType") ? (openBlock(), createBlock(MyFormItem, {
                key: 0,
                label: unref(i18n)("handle.content.type")
              }, {
                default: withCtx(() => [
                  createVNode(unref(MyHistorySelect), {
                    "model-value": unref(multipleElementGetValue)("contentType"),
                    class: "width-140",
                    "onUpdate:modelValue": _cache[13] || (_cache[13] = (val) => unref(multipleElementSetValue)("contentType", val)),
                    "data-list": unref(textContentTypes),
                    historyLabel: unref(i18n)("handle.content.type")
                  }, null, 8, ["model-value", "data-list", "historyLabel"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : createCommentVNode("v-if", true),
              unref(multipleElementGetValue)("contentType") == "Barcode" ? (openBlock(), createBlock(MyFormItem, {
                key: 1,
                label: unref(i18n)("handle.barCode.type")
              }, {
                default: withCtx(() => [
                  createVNode(unref(MyHistorySelect), {
                    class: "width-120",
                    "model-value": unref(multipleElementGetValue)("option.barCodeType"),
                    "onUpdate:modelValue": _cache[14] || (_cache[14] = (val) => unref(multipleElementSetValue)("option.barCodeType", val)),
                    "data-list": unref(barcodeTypes),
                    historyLabel: unref(i18n)("handle.barCode.type")
                  }, null, 8, ["model-value", "data-list", "historyLabel"]),
                  createCommentVNode('popper-class="barcode-type-tooltip"'),
                  createCommentVNode('\r\n                                    :max-width="200"\r\n                '),
                  createVNode(MyTooltip, {
                    content: unref(currentBarCodeEg),
                    placement: "top"
                  }, {
                    default: withCtx(() => [
                      createVNode(MyIcon, null, {
                        default: withCtx(() => [
                          createVNode(QuestionFilled)
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
              }, 8, ["label"])) : createCommentVNode("v-if", true),
              unref(multipleElementGetValue)("contentType") == "Barcode" ? (openBlock(), createBlock(MyFormItem, {
                key: 2,
                label: unref(i18n)("handle.barCode.value")
              }, {
                default: withCtx(() => [
                  createVNode(MySwitch, {
                    "model-value": unref(multipleElementGetValue)("option.barCodeDisplayValIs"),
                    "onUpdate:modelValue": _cache[15] || (_cache[15] = (val) => unref(multipleElementSetValue)("option.barCodeDisplayValIs", val)),
                    class: "ml-2",
                    "active-text": unref(i18n)("common.show"),
                    "inactive-text": unref(i18n)("common.hidden")
                  }, null, 8, ["model-value", "active-text", "inactive-text"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : createCommentVNode("v-if", true),
              unref(multipleElementGetValue)("contentType") == "QrCode" ? (openBlock(), createBlock(MyFormItem, {
                key: 3,
                label: unref(i18n)("handle.qrCode.errorCorrectionLevel")
              }, {
                default: withCtx(() => [
                  createVNode(unref(MyHistorySelect), {
                    "model-value": unref(multipleElementGetValue)("option.qrErrorCorrectionLevel"),
                    "onUpdate:modelValue": _cache[16] || (_cache[16] = (val) => unref(multipleElementSetValue)("option.qrErrorCorrectionLevel", val)),
                    class: "width-140",
                    "data-list": unref(qrCodeErrorCorrectionLevel),
                    historyLabel: unref(i18n)("handle.qrCode.errorCorrectionLevel")
                  }, null, 8, ["model-value", "data-list", "historyLabel"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : createCommentVNode("v-if", true),
              unref(multipleElementGetValue)("contentType") == "QrCode" ? (openBlock(), createBlock(MyFormItem, {
                key: 4,
                label: unref(i18n)("handle.qrCode.qrCodeScale")
              }, {
                default: withCtx(() => [
                  createVNode(unref(MyHistoryInputNumber), {
                    class: "width-140",
                    min: 0.01,
                    "model-value": unref(multipleElementGetValue)("option.qrCodeScale"),
                    "onUpdate:modelValue": _cache[17] || (_cache[17] = (val) => unref(multipleElementSetValue)("option.qrCodeScale", val)),
                    historyLabel: unref(i18n)("handle.qrCode.qrCodeScale"),
                    placeholder: unref(i18n)("handle.qrCode.qrCodeScale.tips")
                  }, null, 8, ["model-value", "historyLabel", "placeholder"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : createCommentVNode("v-if", true),
              includeProps("type", "lineBreak") && unref(noWorkInTableIs) ? (openBlock(), createBlock(MyFormItem, {
                key: 5,
                label: unref(i18n)("handle.line.break")
              }, {
                default: withCtx(() => [
                  createVNode(MySwitch, {
                    "model-value": unref(multipleElementGetValue)("option.lineBreak"),
                    "onUpdate:modelValue": _cache[18] || (_cache[18] = (val) => unref(multipleElementSetValue)("option.lineBreak", val)),
                    class: "ml-2"
                  }, null, 8, ["model-value"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : createCommentVNode("v-if", true),
              includeProps("type", "autoTextHeight") && unref(noWorkInTableIs) ? (openBlock(), createBlock(MyFormItem, {
                key: 6,
                label: unref(i18n)("handle.text.auto.height")
              }, {
                default: withCtx(() => [
                  createVNode(MySwitch, {
                    "model-value": unref(multipleElementGetValue)("option.autoTextHeight"),
                    "onUpdate:modelValue": _cache[19] || (_cache[19] = (val) => unref(multipleElementSetValue)("option.autoTextHeight", val)),
                    class: "ml-2"
                  }, null, 8, ["model-value"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : createCommentVNode("v-if", true),
              includeProps("type", "lineHeight") ? (openBlock(), createBlock(MyFormItem, {
                key: 7,
                label: unref(i18n)("handle.line.height")
              }, {
                default: withCtx(() => [
                  createVNode(MyGroup, null, {
                    default: withCtx(() => [
                      createVNode(unref(MyHistoryInputNumber), {
                        class: "num-2",
                        min: 0.01,
                        "model-value": unref(multipleElementGetValue)("option.lineHeight"),
                        "onUpdate:modelValue": _cache[20] || (_cache[20] = (val) => unref(multipleElementSetValue)("option.lineHeight", val)),
                        historyLabel: unref(i18n)("handle.line.height")
                      }, null, 8, ["model-value", "historyLabel"]),
                      createVNode(unref(MyUnit))
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : createCommentVNode("v-if", true),
              includeProps("type", "lineWidth") ? (openBlock(), createBlock(MyFormItem, {
                key: 8,
                label: unref(i18n)("handle.line.width")
              }, {
                default: withCtx(() => [
                  createVNode(MyGroup, null, {
                    default: withCtx(() => [
                      createVNode(unref(MyHistoryInputNumber), {
                        class: "num-2",
                        min: 0.01,
                        "model-value": unref(multipleElementGetValue)("option.lineWidth"),
                        "onUpdate:modelValue": _cache[21] || (_cache[21] = (val) => unref(multipleElementSetValue)("option.lineWidth", val)),
                        historyLabel: unref(i18n)("handle.line.width")
                      }, null, 8, ["model-value", "historyLabel"]),
                      createVNode(unref(MyUnit))
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : createCommentVNode("v-if", true),
              includeProps("type", "dottedStyle") ? (openBlock(), createBlock(MyFormItem, {
                key: 9,
                label: unref(i18n)("handle.dotted.style")
              }, {
                default: withCtx(() => [
                  createVNode(unref(MyHistorySelect), {
                    "model-value": unref(multipleElementGetValue)("option.dottedStyle"),
                    "onUpdate:modelValue": _cache[22] || (_cache[22] = (val) => unref(multipleElementSetValue)("option.dottedStyle", val)),
                    class: "width-120",
                    "data-list": unref(dottedStyleList),
                    historyLabel: unref(i18n)("handle.dotted.style")
                  }, null, 8, ["model-value", "data-list", "historyLabel"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : createCommentVNode("v-if", true),
              includeProps("type", "padding") ? (openBlock(), createBlock(MyFormItem, {
                key: 10,
                label: unref(i18n)("handle.padding")
              }, {
                default: withCtx(() => [
                  createVNode(MyGroup, null, {
                    default: withCtx(() => [
                      createVNode(unref(MyHistoryInputNumber), {
                        class: "num-4",
                        placeholder: unref(i18n)("handle.top"),
                        historyLabel: unref(i18n)("handle.padding.top"),
                        "model-value": unref(multipleElementGetValue)("option.padding.top"),
                        "onUpdate:modelValue": _cache[23] || (_cache[23] = (val) => unref(multipleElementSetValue)("option.padding.top", val))
                      }, {
                        append: withCtx(() => [..._cache[36] || (_cache[36] = [
                          createTextVNode(
                            "mm",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      }, 8, ["placeholder", "historyLabel", "model-value"]),
                      createVNode(unref(MyHistoryInputNumber), {
                        class: "num-4",
                        placeholder: unref(i18n)("handle.bottom"),
                        historyLabel: unref(i18n)("handle.padding.bottom"),
                        "model-value": unref(multipleElementGetValue)("option.padding.bottom"),
                        "onUpdate:modelValue": _cache[24] || (_cache[24] = (val) => unref(multipleElementSetValue)("option.padding.bottom", val))
                      }, {
                        append: withCtx(() => [..._cache[37] || (_cache[37] = [
                          createTextVNode(
                            "mm",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      }, 8, ["placeholder", "historyLabel", "model-value"]),
                      createVNode(unref(MyHistoryInputNumber), {
                        class: "num-4",
                        placeholder: unref(i18n)("handle.left"),
                        historyLabel: unref(i18n)("handle.padding.left"),
                        "model-value": unref(multipleElementGetValue)("option.padding.left"),
                        "onUpdate:modelValue": _cache[25] || (_cache[25] = (val) => unref(multipleElementSetValue)("option.padding.left", val))
                      }, {
                        append: withCtx(() => [..._cache[38] || (_cache[38] = [
                          createTextVNode(
                            "mm",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      }, 8, ["placeholder", "historyLabel", "model-value"]),
                      createVNode(unref(MyHistoryInputNumber), {
                        class: "num-4",
                        placeholder: unref(i18n)("handle.right"),
                        historyLabel: unref(i18n)("handle.padding.right"),
                        "model-value": unref(multipleElementGetValue)("option.padding.right"),
                        "onUpdate:modelValue": _cache[26] || (_cache[26] = (val) => unref(multipleElementSetValue)("option.padding.right", val))
                      }, {
                        append: withCtx(() => [..._cache[39] || (_cache[39] = [
                          createTextVNode(
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
              }, 8, ["label"])) : createCommentVNode("v-if", true),
              includeProps("type", "margin") ? (openBlock(), createBlock(MyFormItem, {
                key: 11,
                label: unref(i18n)("handle.margin")
              }, {
                default: withCtx(() => [
                  createVNode(MyGroup, null, {
                    default: withCtx(() => [
                      createVNode(unref(MyHistoryInputNumber), {
                        class: "num-4",
                        placeholder: unref(i18n)("handle.top"),
                        historyLabel: unref(i18n)("handle.margin.top"),
                        "model-value": unref(multipleElementGetValue)("option.margin.top"),
                        "onUpdate:modelValue": _cache[27] || (_cache[27] = (val) => unref(multipleElementSetValue)("option.margin.top", val))
                      }, {
                        append: withCtx(() => [..._cache[40] || (_cache[40] = [
                          createTextVNode(
                            "mm",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      }, 8, ["placeholder", "historyLabel", "model-value"]),
                      createVNode(unref(MyHistoryInputNumber), {
                        class: "num-4",
                        placeholder: unref(i18n)("handle.bottom"),
                        historyLabel: unref(i18n)("handle.margin.bottom"),
                        "model-value": unref(multipleElementGetValue)("option.margin.bottom"),
                        "onUpdate:modelValue": _cache[28] || (_cache[28] = (val) => unref(multipleElementSetValue)("option.margin.bottom", val))
                      }, {
                        append: withCtx(() => [..._cache[41] || (_cache[41] = [
                          createTextVNode(
                            "mm",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      }, 8, ["placeholder", "historyLabel", "model-value"]),
                      createVNode(unref(MyHistoryInputNumber), {
                        class: "num-4",
                        placeholder: unref(i18n)("handle.left"),
                        historyLabel: unref(i18n)("handle.margin.left"),
                        "model-value": unref(multipleElementGetValue)("option.margin.left"),
                        "onUpdate:modelValue": _cache[29] || (_cache[29] = (val) => unref(multipleElementSetValue)("option.margin.left", val))
                      }, {
                        append: withCtx(() => [..._cache[42] || (_cache[42] = [
                          createTextVNode(
                            "mm",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      }, 8, ["placeholder", "historyLabel", "model-value"]),
                      createVNode(unref(MyHistoryInputNumber), {
                        class: "num-4",
                        placeholder: unref(i18n)("handle.right"),
                        historyLabel: unref(i18n)("handle.margin.right"),
                        "model-value": unref(multipleElementGetValue)("option.margin.right"),
                        "onUpdate:modelValue": _cache[30] || (_cache[30] = (val) => unref(multipleElementSetValue)("option.margin.right", val))
                      }, {
                        append: withCtx(() => [..._cache[43] || (_cache[43] = [
                          createTextVNode(
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
              }, 8, ["label"])) : createCommentVNode("v-if", true),
              unref(multipleElementGetValue)("type") != "DataTable" && unref(noWorkInTableIs) ? (openBlock(), createBlock(MyFormItem, {
                key: 12,
                label: unref(i18n)("handle.fixed.position")
              }, {
                default: withCtx(() => [
                  createVNode(MySwitch, {
                    "model-value": unref(multipleElementGetValue)("option.fixed"),
                    "onUpdate:modelValue": _cache[31] || (_cache[31] = (val) => unref(multipleElementSetValue)("option.fixed", val)),
                    onChange: changeOptionFixed,
                    class: "ml-2"
                  }, null, 8, ["model-value"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : createCommentVNode("v-if", true),
              includeProps("type", "clearDrawPanel") ? (openBlock(), createBlock(MyButton, {
                key: 13,
                size: "small",
                onClick: clearDrawPanel
              }, {
                default: withCtx(() => [
                  createTextVNode(
                    toDisplayString(unref(i18n)("handle.clear.canvas")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              })) : createCommentVNode("v-if", true),
              includeProps("type", "tableBodyHeightType") ? (openBlock(), createBlock(MyFormItem, {
                key: 14,
                label: unref(i18n)("handle.line.height")
              }, {
                default: withCtx(() => [
                  createVNode(MyRadio, {
                    modelValue: unref(element).option.tableBodyHeightType,
                    "onUpdate:modelValue": _cache[32] || (_cache[32] = ($event) => unref(element).option.tableBodyHeightType = $event),
                    dataList: unref(tableBodyHeightTypeList)
                  }, null, 8, ["modelValue", "dataList"]),
                  unref(element).option.tableBodyHeightType == "FIXED" ? (openBlock(), createBlock(MyGroup, {
                    key: 0,
                    style: { "margin-top": "10px" }
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(MyHistoryInputNumber), {
                        class: "num-2",
                        min: 0.01,
                        "model-value": unref(multipleElementGetValue)("option.tableBodyHeight"),
                        onChange: changeTableBodyHeight,
                        historyLabel: unref(i18n)("handle.line.height")
                      }, null, 8, ["model-value", "historyLabel"]),
                      createVNode(unref(MyUnit))
                    ]),
                    _: 1
                    /* STABLE */
                  })) : createCommentVNode("v-if", true)
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : createCommentVNode("v-if", true),
              includeProps("type", "tablePageHead") ? (openBlock(), createBlock(MyFormItem, {
                key: 15,
                label: unref(i18n)("handle.table.page.head")
              }, {
                default: withCtx(() => [
                  createVNode(MySwitch, {
                    "model-value": unref(multipleElementGetValue)("option.tablePageHeadIs"),
                    "onUpdate:modelValue": _cache[33] || (_cache[33] = (val) => unref(multipleElementSetValue)("option.tablePageHeadIs", val)),
                    class: "ml-2"
                  }, null, 8, ["model-value"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : createCommentVNode("v-if", true),
              includeProps("type", "tablePageHead") ? (openBlock(), createBlock(MyFormItem, {
                key: 16,
                label: unref(i18n)("handle.table.hidden.head")
              }, {
                default: withCtx(() => [
                  createVNode(MySwitch, {
                    "model-value": unref(multipleElementGetValue)("option.tableHiddenHeadIs"),
                    "onUpdate:modelValue": _cache[34] || (_cache[34] = (val) => unref(multipleElementSetValue)("option.tableHiddenHeadIs", val)),
                    class: "ml-2"
                  }, null, 8, ["model-value"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : createCommentVNode("v-if", true)
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(MyDividerPanel, null, {
            divider: withCtx(() => [
              createTextVNode(
                toDisplayString(unref(i18n)("handle.print.strategy")),
                1
                /* TEXT */
              )
            ]),
            default: withCtx(() => [
              unref(multipleElementGetValue)("option.fixed") ? (openBlock(), createBlock(MyFormItem, {
                key: 0,
                label: unref(i18n)("handle.display.strategy")
              }, {
                default: withCtx(() => [
                  createVNode(unref(MyHistorySelect), {
                    "model-value": unref(multipleElementGetValue)("option.displayStrategy"),
                    "onUpdate:modelValue": _cache[35] || (_cache[35] = (val) => unref(multipleElementSetValue)("option.displayStrategy", val)),
                    class: "width-120",
                    "data-list": unref(displayStrategyList),
                    historyLabel: unref(i18n)("handle.display.strategy")
                  }, null, 8, ["model-value", "data-list", "historyLabel"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : createCommentVNode("v-if", true)
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

export { _sfc_main as default };
//# sourceMappingURL=my-element-setting.vue2.mjs.map
