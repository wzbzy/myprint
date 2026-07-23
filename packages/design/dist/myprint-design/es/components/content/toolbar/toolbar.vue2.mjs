import { defineComponent, openBlock, createElementBlock, createElementVNode, createVNode, createBlock, withCtx, createTextVNode, toDisplayString, unref, createCommentVNode } from 'vue';
import StyleDesign from './style-design.vue.mjs';
import { i18n } from '../../../locales/index.mjs';
import { defaultPreviewData, clearPanel, getCurrentPanel } from '../../../utils/elementUtil.mjs';
import { record, ActionEnum } from '../../../utils/historyUtil.mjs';
import { updatePanel } from '../../../plugins/moveable/moveable.mjs';
import { MyPrinter } from '../../../printer.mjs';
import { download, mitt } from '../../../utils/utils.mjs';
import MyButton from '../../my/button/my-Button.vue.mjs';
import MyIcon from '../../my/icon/my-icon.vue.mjs';
import Printer from '../../my/icon/icons/Printer.vue.mjs';
import { MyMessage } from '../../my/message/my-message.mjs';
import { useAppStoreHook } from '../../../stores/app.mjs';

const _hoisted_1 = { class: "toolbar-container" };
const _hoisted_2 = { class: "display-flex space-between width-100-p" };
const _hoisted_3 = { class: "display-flex-column toolbar-tool" };
const _hoisted_4 = { class: "display-flex" };
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "toolbar",
  props: {
    designProps: {}
  },
  setup(__props) {
    const useApp = useAppStoreHook();
    function print() {
      const defaultPrinter = MyPrinter.getDefaultPrinter();
      MyPrinter.clientPrinter({ previewDataList: defaultPreviewData(useApp.previewData), printer: defaultPrinter?.name }).then((res) => {
        switch (res.status) {
          case "SUCCESS":
            break;
          case "TIMEOUT":
            MyMessage.error("\u6253\u5370\u8D85\u65F6");
            break;
          case "ERROR":
            MyMessage.error("\u6253\u5370\u5931\u8D25\uFF0C" + res.msg);
            break;
        }
      }).catch((e) => {
        MyMessage.error("\u6253\u5370\u5931\u8D25\uFF0C" + e.msg);
      });
    }
    function serverDownloadPdf() {
      MyPrinter.pdfServer({ previewDataList: defaultPreviewData(useApp.previewData) }).then((res) => {
        switch (res.status) {
          case "SUCCESS":
            download(res.blob, "myprint.pdf");
            break;
          case "TIMEOUT":
            MyMessage.error("\u4E0B\u8F7D\u8D85\u65F6");
            break;
          case "ERROR":
            MyMessage.error("\u4E0B\u8F7D\u5931\u8D25\uFF0C" + res.msg);
            break;
        }
      }).catch((e) => {
        MyMessage.error("\u4E0B\u8F7D\u5931\u8D25\uFF0C" + e.msg);
      });
    }
    function preview() {
      MyPrinter.chromePreview({ previewDataList: defaultPreviewData(useApp.previewData) });
    }
    function save() {
      mitt.emit("saveTemplate", {});
    }
    function clearPanelClick() {
      clearPanel(getCurrentPanel());
      updatePanel();
      record({
        action: ActionEnum.CLEAR
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          createVNode(StyleDesign),
          createElementVNode("div", _hoisted_3, [
            createElementVNode("div", _hoisted_4, [
              __props.designProps.showPrintButton ? (openBlock(), createBlock(MyButton, {
                key: 0,
                size: "small",
                class: "toolbar-tool_button_margin_right",
                onClick: print
              }, {
                default: withCtx(() => [
                  createVNode(MyIcon, null, {
                    default: withCtx(() => [
                      createVNode(Printer)
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createTextVNode(
                    " " + toDisplayString(unref(i18n)("toolbar.print")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              })) : createCommentVNode("v-if", true),
              __props.designProps.showDownloadPdfButton ? (openBlock(), createBlock(MyButton, {
                key: 1,
                size: "small",
                class: "toolbar-tool_button_margin_right",
                onClick: serverDownloadPdf
              }, {
                default: withCtx(() => [
                  createVNode(MyIcon, null, {
                    default: withCtx(() => [
                      createVNode(Printer)
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createTextVNode(
                    " " + toDisplayString(unref(i18n)("toolbar.download")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              })) : createCommentVNode("v-if", true),
              __props.designProps.showPreviewButton ? (openBlock(), createBlock(MyButton, {
                key: 2,
                size: "small",
                class: "toolbar-tool_button_margin_right",
                onClick: preview
              }, {
                default: withCtx(() => [
                  _cache[0] || (_cache[0] = createElementVNode(
                    "i",
                    { class: "icon-zitiyulan iconfont" },
                    null,
                    -1
                    /* CACHED */
                  )),
                  createTextVNode(
                    " " + toDisplayString(unref(i18n)("toolbar.preview")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              })) : createCommentVNode("v-if", true),
              __props.designProps.showClearButton ? (openBlock(), createBlock(MyButton, {
                key: 3,
                size: "small",
                class: "toolbar-tool_button_margin_right",
                onClick: clearPanelClick
              }, {
                default: withCtx(() => [
                  createTextVNode(
                    toDisplayString(unref(i18n)("toolbar.clear")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              })) : createCommentVNode("v-if", true),
              __props.designProps.showSaveButton ? (openBlock(), createBlock(MyButton, {
                key: 4,
                size: "small",
                class: "toolbar-tool_button_margin_right",
                disabled: unref(getCurrentPanel)().name == null || unref(getCurrentPanel)().name == "",
                onClick: save
              }, {
                default: withCtx(() => [
                  createTextVNode(
                    toDisplayString(unref(i18n)("toolbar.save")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["disabled"])) : createCommentVNode("v-if", true)
            ])
          ])
        ])
      ]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=toolbar.vue2.mjs.map
