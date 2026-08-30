import { defineComponent, openBlock, createBlock, withCtx, createVNode, createTextVNode, toDisplayString, unref, createCommentVNode } from 'vue';
import { i18n } from '../../../../locales/index.mjs';
import { pageSizeList, pageUnitList, fontSizeUnitList } from '../../../../constants/common.mjs';
import '../../../my/input/index.mjs';
import MyGroup from '../../../my/group/my-group.vue.mjs';
import { getCurrentPanel, changePageSize, changePageUnit } from '../../../../utils/elementUtil.mjs';
import MySwitch from '../../../my/switch/my-switch.vue.mjs';
import MyFormItem from '../../../my/form/my-form-item.vue.mjs';
import MyForm from '../../../my/form/my-form.vue.mjs';
import MyDividerPanel from '../../../my/divider/my-divider-panel.vue.mjs';
import MyHistoryInput from '../../../my/input/history-input.vue.mjs';
import MyHistorySelect from '../../../my/input/history-select.vue.mjs';
import MyHistoryInputNumber from '../../../my/input/history-input-number.vue.mjs';
import MyUnit from '../../../my/input/unit.vue.mjs';

var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "my-panel-setting",
  setup(__props) {
    const panel = getCurrentPanel();
    function selectPageSize(val) {
      for (let valueElement of pageSizeList) {
        if (valueElement.value == val) {
          changePageSize(valueElement);
          break;
        }
      }
    }
    function changePanelWidth(_val) {
      changePageSize();
    }
    function changePanelHeight(_val) {
      changePageSize();
    }
    function selectPageUnit() {
      changePageUnit();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MyForm, {
        class: "my-form",
        "label-width": "80px",
        size: "small",
        "label-position": "right"
      }, {
        default: withCtx(() => [
          createVNode(MyDividerPanel, null, {
            divider: withCtx(() => [
              createTextVNode(
                toDisplayString(unref(i18n)("common.panel")),
                1
                /* TEXT */
              )
            ]),
            default: withCtx(() => [
              createVNode(MyFormItem, {
                label: unref(i18n)("handle.template.name")
              }, {
                default: withCtx(() => [
                  createVNode(unref(MyHistoryInput), {
                    modelValue: unref(panel).name,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(panel).name = $event),
                    type: "textarea",
                    placeholder: unref(i18n)("handle.please.template.name"),
                    historyLabel: unref(i18n)("handle.template.name"),
                    style: { "margin-right": "18px" }
                  }, null, 8, ["modelValue", "placeholder", "historyLabel"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"]),
              createVNode(MyFormItem, {
                label: unref(i18n)("common.unit")
              }, {
                default: withCtx(() => [
                  createVNode(unref(MyHistorySelect), {
                    modelValue: unref(panel).pageUnit,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(panel).pageUnit = $event),
                    onChange: selectPageUnit,
                    class: "width-160",
                    "data-list": unref(pageUnitList),
                    historyLabel: unref(i18n)("common.unit")
                  }, null, 8, ["modelValue", "data-list", "historyLabel"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"]),
              createVNode(MyFormItem, {
                label: unref(i18n)("common.font.size.unit")
              }, {
                default: withCtx(() => [
                  createVNode(unref(MyHistorySelect), {
                    modelValue: unref(panel).fontSizeUnit,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(panel).fontSizeUnit = $event),
                    class: "width-160",
                    "data-list": unref(fontSizeUnitList),
                    historyLabel: unref(i18n)("common.font.size.unit")
                  }, null, 8, ["modelValue", "data-list", "historyLabel"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"]),
              createVNode(MyFormItem, {
                label: unref(i18n)("common.paper")
              }, {
                default: withCtx(() => [
                  createVNode(unref(MyHistorySelect), {
                    modelValue: unref(panel).pageSize,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(panel).pageSize = $event),
                    class: "width-160",
                    onChange: selectPageSize,
                    "data-list": unref(pageSizeList),
                    historyLabel: unref(i18n)("common.paper")
                  }, null, 8, ["modelValue", "data-list", "historyLabel"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"]),
              createVNode(MyFormItem, {
                label: unref(i18n)("handle.width&height")
              }, {
                default: withCtx(() => [
                  createVNode(MyGroup, null, {
                    default: withCtx(() => [
                      createVNode(unref(MyHistoryInputNumber), {
                        class: "width-66",
                        modelValue: unref(panel).width,
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(panel).width = $event),
                        onChange: changePanelWidth,
                        historyLabel: unref(i18n)("handle.page.width")
                      }, null, 8, ["modelValue", "historyLabel"]),
                      createVNode(unref(MyHistoryInputNumber), {
                        class: "width-66",
                        modelValue: unref(panel).height,
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(panel).height = $event),
                        onChange: changePanelHeight,
                        disabled: unref(panel).pageSize == "AutoHeight",
                        historyLabel: unref(i18n)("handle.page.height")
                      }, null, 8, ["modelValue", "disabled", "historyLabel"]),
                      createVNode(unref(MyUnit))
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"]),
              unref(panel).watermark ? (openBlock(), createBlock(MyFormItem, {
                key: 0,
                label: unref(i18n)("handle.watermark")
              }, {
                default: withCtx(() => [
                  createVNode(unref(MyHistoryInput), {
                    modelValue: unref(panel).watermarkContent,
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(panel).watermarkContent = $event),
                    placeholder: unref(i18n)("handle.watermark"),
                    size: "small",
                    historyLabel: unref(i18n)("handle.watermark"),
                    style: { "margin-right": "20px" }
                  }, null, 8, ["modelValue", "placeholder", "historyLabel"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"])) : createCommentVNode("v-if", true),
              createVNode(MyFormItem, {
                label: unref(i18n)("handle.drag.snap.panel")
              }, {
                default: withCtx(() => [
                  createVNode(MySwitch, {
                    modelValue: unref(panel).dragSnapPanelIs,
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(panel).dragSnapPanelIs = $event),
                    class: "ml-2"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label"]),
              createVNode(MyFormItem, {
                label: unref(i18n)("handle.drag.snap")
              }, {
                default: withCtx(() => [
                  createVNode(MySwitch, {
                    modelValue: unref(panel).dragSnapIs,
                    "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(panel).dragSnapIs = $event),
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

export { _sfc_main as default };
//# sourceMappingURL=my-panel-setting.vue2.mjs.map
