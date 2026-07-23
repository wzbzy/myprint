'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vueDemi = require('vue-demi');
var pdfUtil = require('../../utils/pdfUtil.js');
var utils = require('../../utils/utils.js');
var devicePixelRatio = require('../../utils/devicePixelRatio.js');
var preview = require('./preview.vue.js');
var index = require('../../locales/index.js');
var elementUtil = require('../../utils/elementUtil.js');
var config = require('../../stores/config.js');
var autoPage = require('./autoPage.js');
var myScrollbar = require('../my/scrollbar/my-scrollbar.vue.js');
var myButton = require('../my/button/my-Button.vue.js');
var myDialog = require('../my/dialog/my-dialog.vue.js');
var mySelect = require('../my/select/my-select.vue.js');
var myprint = require('../../utils/myprint.js');
var myprintClientService = require('../../plugins/myprintClientService.js');
var printer = require('../../printer.js');

const _hoisted_1 = { class: "preview-panel" };
const _hoisted_2 = { class: "my-print-preview-panel__wrap" };
const _hoisted_3 = { class: "preview-panel__model" };
const _hoisted_4 = { class: "my-print-preview-panel__content" };
const _hoisted_5 = { class: "preview-panel__tool display-flex-column display-flex-wrap" };
const _hoisted_6 = { key: 1 };
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "preview-panel",
  setup(__props, { expose: __expose }) {
    __expose({ handleChromePreview });
    const configStore = config.useConfigStore();
    const data = vueDemi.reactive({
      dialogVisible: false,
      printer: configStore.defaultPrinter,
      pageList: [],
      resolveMap: {},
      previewTimeOutMap: {},
      taskId: null
    });
    const previewContentRef = vueDemi.ref();
    const panel = vueDemi.ref({});
    let itemRefs = {};
    const printList = vueDemi.computed(() => {
      return printer.MyPrinter.getPrinterList().map((res) => {
        return {
          label: res.name,
          value: res.name
        };
      });
    });
    function print() {
      myprintClientService.myPrintClientService.print({
        options: {
          title: panel.value ? panel.value.name : void 0,
          html: myprint.getPrintElementHtml(previewContentRef.value, []),
          printer: data.printer
        },
        cmd: "print",
        taskId: data.taskId
      }, panel.value).then((res) => {
        myprintClientService.handleClientResult(res, myprintClientService.printResult, data.previewTimeOutMap, data.resolveMap);
      }).catch((e) => {
        myprintClientService.printResult(data.taskId, {
          status: "ERROR",
          msg: e.msg,
          type: "CLIENT_PRINT"
        }, data.previewTimeOutMap, data.resolveMap);
      });
    }
    function downloadPdf() {
      if (printer.MyPrinter.clientConnectIs()) {
        myprintClientService.myPrintClientService.print({
          options: { html: myprint.getPrintElementHtml(previewContentRef.value, []) },
          cmd: "generatePdf",
          taskId: data.taskId
        }, panel.value).then((res) => {
          const blob = myprintClientService.handleClientResult(res, myprintClientService.printResult, data.previewTimeOutMap, data.resolveMap);
          if (blob) {
            utils.download(blob, panel.value.name + ".pdf");
          }
        }).catch((e) => {
          myprintClientService.printResult(data.taskId, {
            status: "ERROR",
            msg: e.msg,
            type: "CLIENT_GENERATE_PDF"
          }, data.previewTimeOutMap, data.resolveMap);
        });
      } else {
        pdfUtil.toPdf(previewContentRef.value, {
          width: devicePixelRatio.unit2px(panel.value.width, panel.value),
          height: devicePixelRatio.unit2px(panel.value.height, panel.value)
        }).then((blob) => {
          utils.download(blob, panel.value.name + ".pdf");
          myprintClientService.printResult(data.taskId, {
            status: "SUCCESS",
            msg: "",
            type: "CHROME_GENERATE_PDF"
          }, data.previewTimeOutMap, data.resolveMap);
        }).catch((e) => {
          myprintClientService.printResult(data.taskId, {
            status: "ERROR",
            msg: e.msg,
            type: "CHROME_GENERATE_PDF"
          }, data.previewTimeOutMap, data.resolveMap);
        });
      }
    }
    function printChromePdf() {
      myprint.iFramePrint(panel.value, myprint.getPrintElementHtml(previewContentRef.value, []));
      myprintClientService.printResult(data.taskId, {
        status: "SUCCESS",
        type: "CHROME_PRINT"
      }, data.previewTimeOutMap, data.resolveMap);
    }
    function setItemRef(el, item) {
      itemRefs[item.id] = el;
    }
    function handleChromePreview(printProps) {
      data.dialogVisible = true;
      panel.value = printProps.panel;
      data.taskId = printProps.taskId;
      myprintClientService.handleTimeOut(printProps, data.previewTimeOutMap, data.resolveMap);
      return new Promise((resolve, _reject) => {
        data.resolveMap[printProps.taskId] = resolve;
        autoPage.autoPage(previewContentRef, data.pageList, panel.value, printProps.previewDataList);
      });
    }
    function closePreviewPanel() {
      data.pageList = [];
      myprintClientService.printResult(data.taskId, {
        status: "CLOSE",
        type: "CLOSE"
      }, data.previewTimeOutMap, data.resolveMap);
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(myDialog.default, {
        modelValue: vue.unref(data).dialogVisible,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vue.unref(data).dialogVisible = $event),
        class: "preview-dialog",
        fullscreen: "",
        showHeader: false,
        onClose: closePreviewPanel
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("div", _hoisted_1, [
            vue.createVNode(myScrollbar.default, {
              height: "100%",
              class: "preview-panel__scrollbar",
              style: vue.normalizeStyle({ minWidth: vue.unref(elementUtil.valueUnit)(vue.unref(panel).width, vue.unref(panel)) })
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("div", _hoisted_2, [
                  vue.createElementVNode("div", _hoisted_3, [
                    vue.createElementVNode("div", _hoisted_4, [
                      (vue.openBlock(true), vue.createElementBlock(
                        vue.Fragment,
                        null,
                        vue.renderList(vue.unref(data).pageList, (page, index) => {
                          return vue.openBlock(), vue.createElementBlock(
                            "div",
                            {
                              ref_for: true,
                              ref_key: "previewContentRef",
                              ref: previewContentRef,
                              key: index,
                              class: "my-print-preview-panel__content_page preview-page-top",
                              style: vue.normalizeStyle({
                                width: vue.unref(elementUtil.valueUnit)(page.width, vue.unref(panel)),
                                minHeight: vue.unref(elementUtil.valueUnit)(page.height, vue.unref(panel))
                              })
                            },
                            [
                              (vue.openBlock(true), vue.createElementBlock(
                                vue.Fragment,
                                null,
                                vue.renderList(page.previewWrapperList, (element, index2) => {
                                  return vue.openBlock(), vue.createBlock(preview.default, {
                                    ref_for: true,
                                    ref: (el) => setItemRef(el, element),
                                    key: index2,
                                    preview: element
                                  }, null, 8, ["preview"]);
                                }),
                                128
                                /* KEYED_FRAGMENT */
                              ))
                            ],
                            4
                            /* STYLE */
                          );
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ])
                  ])
                ])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["style"]),
            vue.createElementVNode("div", _hoisted_5, [
              vue.createElementVNode(
                "div",
                null,
                "\u540D\u79F0\uFF1A" + vue.toDisplayString(vue.unref(panel).name),
                1
                /* TEXT */
              ),
              vue.createCommentVNode("                <div>\u6253\u5370\u4EFD\u6570\uFF1A\u6D4B\u8BD5</div>"),
              vue.unref(printer.MyPrinter).clientConnectIs() ? (vue.openBlock(), vue.createElementBlock(
                vue.Fragment,
                { key: 0 },
                [
                  vue.createElementVNode("div", null, [
                    vue.createTextVNode(
                      vue.toDisplayString(vue.unref(index.i18n)("toolbar.printer")) + "\uFF1A ",
                      1
                      /* TEXT */
                    ),
                    vue.createVNode(mySelect.default, {
                      modelValue: vue.unref(data).printer,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(data).printer = $event),
                      placeholder: "\u8BF7\u9009\u62E9",
                      size: "middle",
                      "data-list": vue.unref(printList)
                    }, null, 8, ["modelValue", "data-list"])
                  ]),
                  vue.createVNode(myButton.default, {
                    style: { "margin-top": "40px" },
                    disabled: !vue.unref(data).printer,
                    onClick: print
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(
                        vue.toDisplayString(vue.unref(index.i18n)("toolbar.print")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["disabled"])
                ],
                64
                /* STABLE_FRAGMENT */
              )) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_6, "\u5BA2\u6237\u7AEF\u672A\u8FDE\u63A5\uFF0C\u65E0\u6CD5\u4F7F\u7528\u76F4\u63A5\u6253\u5370\u529F\u80FD\uFF0C\u53BB\u4E0B\u8F7D")),
              vue.createVNode(myButton.default, {
                class: "preview-panel__tool_button",
                onClick: printChromePdf
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(
                    vue.toDisplayString(vue.unref(index.i18n)("toolbar.chrome.print")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(myButton.default, {
                class: "preview-panel__tool_button",
                onClick: downloadPdf
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(
                    vue.toDisplayString(vue.unref(index.i18n)("preview.download.pdf")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(myButton.default, {
                class: "preview-panel__tool_button",
                onClick: _cache[1] || (_cache[1] = () => vue.unref(data).dialogVisible = false)
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(
                    vue.toDisplayString(vue.unref(index.i18n)("common.close")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              })
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=preview-panel.vue2.js.map
