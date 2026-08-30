'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var styleDesign = require('./style-design.vue.js');
var index = require('../../../locales/index.js');
var elementUtil = require('../../../utils/elementUtil.js');
var historyUtil = require('../../../utils/historyUtil.js');
var moveable = require('../../../plugins/moveable/moveable.js');
var printer = require('../../../printer.js');
var utils = require('../../../utils/utils.js');
var myButton = require('../../my/button/my-Button.vue.js');
var myIcon = require('../../my/icon/my-icon.vue.js');
var Printer = require('../../my/icon/icons/Printer.vue.js');
var myMessage = require('../../my/message/my-message.js');
var app = require('../../../stores/app.js');

const _hoisted_1 = { class: "toolbar-container" };
const _hoisted_2 = { class: "display-flex space-between width-100-p" };
const _hoisted_3 = { class: "display-flex-column toolbar-tool" };
const _hoisted_4 = { class: "display-flex" };
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "toolbar",
  props: {
    designProps: {}
  },
  setup(__props) {
    const useApp = app.useAppStoreHook();
    function print() {
      const defaultPrinter = printer.MyPrinter.getDefaultPrinter();
      printer.MyPrinter.clientPrinter({ previewDataList: elementUtil.defaultPreviewData(useApp.previewData), printer: defaultPrinter?.name }).then((res) => {
        switch (res.status) {
          case "SUCCESS":
            break;
          case "TIMEOUT":
            myMessage.MyMessage.error("\u6253\u5370\u8D85\u65F6");
            break;
          case "ERROR":
            myMessage.MyMessage.error("\u6253\u5370\u5931\u8D25\uFF0C" + res.msg);
            break;
        }
      }).catch((e) => {
        myMessage.MyMessage.error("\u6253\u5370\u5931\u8D25\uFF0C" + e.msg);
      });
    }
    function serverDownloadPdf() {
      printer.MyPrinter.pdfServer({ previewDataList: elementUtil.defaultPreviewData(useApp.previewData) }).then((res) => {
        switch (res.status) {
          case "SUCCESS":
            utils.download(res.blob, "myprint.pdf");
            break;
          case "TIMEOUT":
            myMessage.MyMessage.error("\u4E0B\u8F7D\u8D85\u65F6");
            break;
          case "ERROR":
            myMessage.MyMessage.error("\u4E0B\u8F7D\u5931\u8D25\uFF0C" + res.msg);
            break;
        }
      }).catch((e) => {
        myMessage.MyMessage.error("\u4E0B\u8F7D\u5931\u8D25\uFF0C" + e.msg);
      });
    }
    function preview() {
      printer.MyPrinter.chromePreview({ previewDataList: elementUtil.defaultPreviewData(useApp.previewData) });
    }
    function save() {
      utils.mitt.emit("saveTemplate", {});
    }
    function clearPanelClick() {
      elementUtil.clearPanel(elementUtil.getCurrentPanel());
      moveable.updatePanel();
      historyUtil.record({
        action: historyUtil.ActionEnum.CLEAR
      });
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.createElementVNode("div", _hoisted_2, [
          vue.createVNode(styleDesign.default),
          vue.createElementVNode("div", _hoisted_3, [
            vue.createElementVNode("div", _hoisted_4, [
              __props.designProps.showPrintButton ? (vue.openBlock(), vue.createBlock(myButton.default, {
                key: 0,
                size: "small",
                class: "toolbar-tool_button_margin_right",
                onClick: print
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(myIcon.default, null, {
                    default: vue.withCtx(() => [
                      vue.createVNode(Printer.default)
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createTextVNode(
                    " " + vue.toDisplayString(vue.unref(index.i18n)("toolbar.print")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              })) : vue.createCommentVNode("v-if", true),
              __props.designProps.showDownloadPdfButton ? (vue.openBlock(), vue.createBlock(myButton.default, {
                key: 1,
                size: "small",
                class: "toolbar-tool_button_margin_right",
                onClick: serverDownloadPdf
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(myIcon.default, null, {
                    default: vue.withCtx(() => [
                      vue.createVNode(Printer.default)
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createTextVNode(
                    " " + vue.toDisplayString(vue.unref(index.i18n)("toolbar.download")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              })) : vue.createCommentVNode("v-if", true),
              __props.designProps.showPreviewButton ? (vue.openBlock(), vue.createBlock(myButton.default, {
                key: 2,
                size: "small",
                class: "toolbar-tool_button_margin_right",
                onClick: preview
              }, {
                default: vue.withCtx(() => [
                  _cache[0] || (_cache[0] = vue.createElementVNode(
                    "i",
                    { class: "icon-zitiyulan iconfont" },
                    null,
                    -1
                    /* CACHED */
                  )),
                  vue.createTextVNode(
                    " " + vue.toDisplayString(vue.unref(index.i18n)("toolbar.preview")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              })) : vue.createCommentVNode("v-if", true),
              __props.designProps.showClearButton ? (vue.openBlock(), vue.createBlock(myButton.default, {
                key: 3,
                size: "small",
                class: "toolbar-tool_button_margin_right",
                onClick: clearPanelClick
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(
                    vue.toDisplayString(vue.unref(index.i18n)("toolbar.clear")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              })) : vue.createCommentVNode("v-if", true),
              __props.designProps.showSaveButton ? (vue.openBlock(), vue.createBlock(myButton.default, {
                key: 4,
                size: "small",
                class: "toolbar-tool_button_margin_right",
                disabled: vue.unref(elementUtil.getCurrentPanel)().name == null || vue.unref(elementUtil.getCurrentPanel)().name == "",
                onClick: save
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(
                    vue.toDisplayString(vue.unref(index.i18n)("toolbar.save")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["disabled"])) : vue.createCommentVNode("v-if", true)
            ])
          ])
        ])
      ]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=toolbar.vue2.js.map
