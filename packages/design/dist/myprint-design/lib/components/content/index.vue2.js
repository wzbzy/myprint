'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index$1 = require('./widget/index.vue.js');
var index$2 = require('./panel/index.vue.js');
var vueDemi = require('vue-demi');
var utils = require('../../utils/utils.js');
var historyUtil = require('../../utils/historyUtil.js');
var app = require('../../stores/app.js');
var myMouseTips = require('../my/mouse-tips/my-mouse-tips.vue.js');
var elementUtil = require('../../utils/elementUtil.js');
var selecto = require('../../plugins/moveable/selecto.js');
var myMessage = require('../my/message/my-message.js');
var printer = require('../../printer.js');
var index = require('../../locales/index.js');

const _hoisted_1 = ["data-rotation"];
const _hoisted_2 = {
  class: "my-aside display-flex-column",
  style: { "border-right": "1px #e9e9e9 solid", "background": "#f8f8f8" }
};
const _hoisted_3 = { class: "my-main design-container-root_main" };
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "index",
  props: {
    module: {},
    template: {},
    height: {},
    saveTemplate: {},
    generateImg: { type: Boolean },
    showBackButton: { type: Boolean, default: true },
    showPrintButton: { type: Boolean, default: true },
    showDownloadPdfButton: { type: Boolean, default: true },
    showPreviewButton: { type: Boolean, default: true },
    showClearButton: { type: Boolean, default: true },
    showSaveButton: { type: Boolean, default: true }
  },
  emits: ["back", "panelImg"],
  setup(__props, { emit: __emit }) {
    const appStore = app.useAppStoreHook();
    const $emit = __emit;
    const data = vueDemi.reactive({
      buildImgIs: false
    });
    const provider = vueDemi.ref({});
    const panel = vueDemi.reactive({
      runtimeOption: {
        dragInIs: false
      },
      type: "Panel",
      dragSnapPanelIs: 1,
      dragSnapIs: 1
    });
    const previewData = vueDemi.ref([]);
    elementUtil.setCurrentPanel(panel);
    const props = __props;
    const style = vueDemi.computed(() => {
      return {
        height: props.height
      };
    });
    vueDemi.onMounted(() => {
      utils.mitt.on("saveTemplate", saveTemplate);
      initModule();
      initTemplate();
      selecto.newSelecto();
    });
    vueDemi.onUnmounted(() => {
      utils.mitt.off("saveTemplate", saveTemplate);
    });
    vueDemi.watch(
      () => props.module,
      (_n, _o) => {
        if (props.module) {
          initModule();
        }
      },
      { deep: true }
      // 🔑 深度监听
    );
    function initModule() {
      if (!props.module) {
        return;
      }
      provider.value = JSON.parse(props.module.provider);
      previewData.value = JSON.parse(props.module.previewData);
      elementUtil.setPreviewData(previewData.value);
      elementUtil.setProvider(provider.value);
      elementUtil.initPanel(panel, provider);
      elementUtil.setCurrentPanel(panel);
    }
    const templateWatchStop = vueDemi.watch(() => props.template, (_n, _o) => {
      if (props.template) {
        initTemplate();
        templateWatchStop();
      }
    });
    function initTemplate() {
      if (!props.template) {
        return;
      }
      utils.to(JSON.parse(props.template.content), panel);
      elementUtil.setCurrentPanel(panel);
      if (!panel.watermarkContent) {
      }
      if (!panel.groupList) {
        panel.groupList = [];
      }
      if (!panel.auxiliaryLineList) {
        panel.auxiliaryLineList = [];
      }
      for (let myAuxiliaryLine of panel.auxiliaryLineList) {
        myAuxiliaryLine.runtimeOption = { x: 0, y: 0, auxiliaryLineStatus: "SHOW" };
      }
      panel.runtimeOption = {};
      for (let i = 0; i < panel.elementList.length; i++) {
        const element = panel.elementList[i];
        elementUtil.parentInitElement(panel, panel, element, i);
      }
      panel.pageHeader && elementUtil.parentInitElement(panel, panel, panel.pageHeader, 0);
      panel.pageFooter && elementUtil.parentInitElement(panel, panel, panel.pageFooter, 0);
      historyUtil.init();
      if (provider.value.pageUnit == void 0) {
        provider.value.pageUnit = "px";
      }
      utils.mitt.emit("updatePanel");
      utils.mitt.emit("changePageSize");
    }
    function back() {
      $emit("back");
    }
    function saveTemplate() {
      if (props.generateImg) {
        if (!data.buildImgIs) {
          data.buildImgIs = true;
          printer.MyPrinter.imgChrome({ previewDataList: [elementUtil.defaultPreviewData(previewData.value)[0]] }).then((res) => {
            $emit("panelImg", res.blobList);
            data.buildImgIs = false;
          }).catch((_e) => {
            data.buildImgIs = false;
          });
        }
      }
      const template = {};
      template.name = panel.name;
      template.content = JSON.stringify(panel, (key, value) => {
        if ("runtimeOption" == key) return void 0;
        return value;
      });
      if (props.saveTemplate != null) {
        props.saveTemplate(template).then((_res) => {
          myMessage.MyMessage.success(index.i18n("common.save.success"));
        }).catch((e) => {
          let failMsg = index.i18n("common.save.fail");
          if (e.msg) {
            failMsg = failMsg + ": " + e.msg;
          }
          myMessage.MyMessage.success(failMsg);
        });
      }
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        null,
        [
          vue.createElementVNode("section", vue.mergeProps({ class: "design-container-root cursor-resize" }, _ctx.$attrs, {
            style: vue.unref(style),
            "data-rotation": vue.unref(appStore).dataRotation
          }), [
            vue.createElementVNode("aside", _hoisted_2, [
              vue.createVNode(index$1.default, {
                "module-name": props.module?.name,
                showBackButton: __props.showBackButton,
                onBack: back
              }, null, 8, ["module-name", "showBackButton"])
            ]),
            vue.createElementVNode("main", _hoisted_3, [
              vue.createVNode(index$2.default, { designProps: props })
            ])
          ], 16, _hoisted_1),
          vue.createVNode(myMouseTips.default)
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=index.vue2.js.map
