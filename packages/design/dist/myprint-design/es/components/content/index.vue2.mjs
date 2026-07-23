import { defineComponent, openBlock, createElementBlock, Fragment, createElementVNode, mergeProps, unref, createVNode } from 'vue';
import widget from './widget/index.vue.mjs';
import PanelView from './panel/index.vue.mjs';
import { reactive, ref, computed, onMounted, onUnmounted, watch } from 'vue-demi';
import { mitt, to } from '../../utils/utils.mjs';
import { init } from '../../utils/historyUtil.mjs';
import { useAppStoreHook } from '../../stores/app.mjs';
import MyMouseTips from '../my/mouse-tips/my-mouse-tips.vue.mjs';
import { setCurrentPanel, setPreviewData, setProvider, initPanel, parentInitElement, defaultPreviewData } from '../../utils/elementUtil.mjs';
import { newSelecto } from '../../plugins/moveable/selecto.mjs';
import { MyMessage } from '../my/message/my-message.mjs';
import { MyPrinter } from '../../printer.mjs';
import { i18n } from '../../locales/index.mjs';

const _hoisted_1 = ["data-rotation"];
const _hoisted_2 = {
  class: "my-aside display-flex-column",
  style: { "border-right": "1px #e9e9e9 solid", "background": "#f8f8f8" }
};
const _hoisted_3 = { class: "my-main design-container-root_main" };
var _sfc_main = /* @__PURE__ */ defineComponent({
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
    const appStore = useAppStoreHook();
    const $emit = __emit;
    const data = reactive({
      buildImgIs: false
    });
    const provider = ref({});
    const panel = reactive({
      runtimeOption: {
        dragInIs: false
      },
      type: "Panel",
      dragSnapPanelIs: 1,
      dragSnapIs: 1
    });
    const previewData = ref([]);
    setCurrentPanel(panel);
    const props = __props;
    const style = computed(() => {
      return {
        height: props.height
      };
    });
    onMounted(() => {
      mitt.on("saveTemplate", saveTemplate);
      initModule();
      initTemplate();
      newSelecto();
    });
    onUnmounted(() => {
      mitt.off("saveTemplate", saveTemplate);
    });
    watch(
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
      setPreviewData(previewData.value);
      setProvider(provider.value);
      initPanel(panel, provider);
      setCurrentPanel(panel);
    }
    const templateWatchStop = watch(() => props.template, (_n, _o) => {
      if (props.template) {
        initTemplate();
        templateWatchStop();
      }
    });
    function initTemplate() {
      if (!props.template) {
        return;
      }
      to(JSON.parse(props.template.content), panel);
      setCurrentPanel(panel);
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
        parentInitElement(panel, panel, element, i);
      }
      panel.pageHeader && parentInitElement(panel, panel, panel.pageHeader, 0);
      panel.pageFooter && parentInitElement(panel, panel, panel.pageFooter, 0);
      init();
      if (provider.value.pageUnit == void 0) {
        provider.value.pageUnit = "px";
      }
      mitt.emit("updatePanel");
      mitt.emit("changePageSize");
    }
    function back() {
      $emit("back");
    }
    function saveTemplate() {
      if (props.generateImg) {
        if (!data.buildImgIs) {
          data.buildImgIs = true;
          MyPrinter.imgChrome({ previewDataList: [defaultPreviewData(previewData.value)[0]] }).then((res) => {
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
          MyMessage.success(i18n("common.save.success"));
        }).catch((e) => {
          let failMsg = i18n("common.save.fail");
          if (e.msg) {
            failMsg = failMsg + ": " + e.msg;
          }
          MyMessage.success(failMsg);
        });
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          createElementVNode("section", mergeProps({ class: "design-container-root cursor-resize" }, _ctx.$attrs, {
            style: unref(style),
            "data-rotation": unref(appStore).dataRotation
          }), [
            createElementVNode("aside", _hoisted_2, [
              createVNode(widget, {
                "module-name": props.module?.name,
                showBackButton: __props.showBackButton,
                onBack: back
              }, null, 8, ["module-name", "showBackButton"])
            ]),
            createElementVNode("main", _hoisted_3, [
              createVNode(PanelView, { designProps: props })
            ])
          ], 16, _hoisted_1),
          createVNode(MyMouseTips)
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=index.vue2.mjs.map
