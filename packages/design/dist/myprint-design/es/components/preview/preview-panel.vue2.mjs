import { defineComponent, openBlock, createBlock, unref, withCtx, createElementVNode, createVNode, normalizeStyle, createElementBlock, Fragment, renderList, toDisplayString, createCommentVNode, createTextVNode } from 'vue';
import { reactive, ref, computed } from 'vue-demi';
import { toPdf } from '../../utils/pdfUtil.mjs';
import { download } from '../../utils/utils.mjs';
import { unit2px } from '../../utils/devicePixelRatio.mjs';
import Preview from './preview.vue.mjs';
import { i18n } from '../../locales/index.mjs';
import { valueUnit } from '../../utils/elementUtil.mjs';
import { useConfigStore } from '../../stores/config.mjs';
import { autoPage } from './autoPage.mjs';
import MyScrollbar from '../my/scrollbar/my-scrollbar.vue.mjs';
import MyButton from '../my/button/my-Button.vue.mjs';
import MyDialog from '../my/dialog/my-dialog.vue.mjs';
import MySelect from '../my/select/my-select.vue.mjs';
import { getPrintElementHtml, iFramePrint } from '../../utils/myprint.mjs';
import { myPrintClientService, handleClientResult, printResult, handleTimeOut } from '../../plugins/myprintClientService.mjs';
import { MyPrinter } from '../../printer.mjs';

const _hoisted_1 = { class: "preview-panel" };
const _hoisted_2 = { class: "my-print-preview-panel__wrap" };
const _hoisted_3 = { class: "preview-panel__model" };
const _hoisted_4 = { class: "my-print-preview-panel__content" };
const _hoisted_5 = { class: "preview-panel__tool display-flex-column display-flex-wrap" };
const _hoisted_6 = { key: 1 };
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "preview-panel",
  setup(__props, { expose: __expose }) {
    __expose({ handleChromePreview });
    const configStore = useConfigStore();
    const data = reactive({
      dialogVisible: false,
      printer: configStore.defaultPrinter,
      pageList: [],
      resolveMap: {},
      previewTimeOutMap: {},
      taskId: null
    });
    const previewContentRef = ref();
    const panel = ref({});
    let itemRefs = {};
    const printList = computed(() => {
      return MyPrinter.getPrinterList().map((res) => {
        return {
          label: res.name,
          value: res.name
        };
      });
    });
    function print() {
      myPrintClientService.print({
        options: {
          title: panel.value ? panel.value.name : void 0,
          html: getPrintElementHtml(previewContentRef.value, []),
          printer: data.printer
        },
        cmd: "print",
        taskId: data.taskId
      }, panel.value).then((res) => {
        handleClientResult(res, printResult, data.previewTimeOutMap, data.resolveMap);
      }).catch((e) => {
        printResult(data.taskId, {
          status: "ERROR",
          msg: e.msg,
          type: "CLIENT_PRINT"
        }, data.previewTimeOutMap, data.resolveMap);
      });
    }
    function downloadPdf() {
      if (MyPrinter.clientConnectIs()) {
        myPrintClientService.print({
          options: { html: getPrintElementHtml(previewContentRef.value, []) },
          cmd: "generatePdf",
          taskId: data.taskId
        }, panel.value).then((res) => {
          const blob = handleClientResult(res, printResult, data.previewTimeOutMap, data.resolveMap);
          if (blob) {
            download(blob, panel.value.name + ".pdf");
          }
        }).catch((e) => {
          printResult(data.taskId, {
            status: "ERROR",
            msg: e.msg,
            type: "CLIENT_GENERATE_PDF"
          }, data.previewTimeOutMap, data.resolveMap);
        });
      } else {
        toPdf(previewContentRef.value, {
          width: unit2px(panel.value.width, panel.value),
          height: unit2px(panel.value.height, panel.value)
        }).then((blob) => {
          download(blob, panel.value.name + ".pdf");
          printResult(data.taskId, {
            status: "SUCCESS",
            msg: "",
            type: "CHROME_GENERATE_PDF"
          }, data.previewTimeOutMap, data.resolveMap);
        }).catch((e) => {
          printResult(data.taskId, {
            status: "ERROR",
            msg: e.msg,
            type: "CHROME_GENERATE_PDF"
          }, data.previewTimeOutMap, data.resolveMap);
        });
      }
    }
    function printChromePdf() {
      iFramePrint(panel.value, getPrintElementHtml(previewContentRef.value, []));
      printResult(data.taskId, {
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
      handleTimeOut(printProps, data.previewTimeOutMap, data.resolveMap);
      return new Promise((resolve, _reject) => {
        data.resolveMap[printProps.taskId] = resolve;
        autoPage(previewContentRef, data.pageList, panel.value, printProps.previewDataList);
      });
    }
    function closePreviewPanel() {
      data.pageList = [];
      printResult(data.taskId, {
        status: "CLOSE",
        type: "CLOSE"
      }, data.previewTimeOutMap, data.resolveMap);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MyDialog, {
        modelValue: unref(data).dialogVisible,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(data).dialogVisible = $event),
        class: "preview-dialog",
        fullscreen: "",
        showHeader: false,
        onClose: closePreviewPanel
      }, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            createVNode(MyScrollbar, {
              height: "100%",
              class: "preview-panel__scrollbar",
              style: normalizeStyle({ minWidth: unref(valueUnit)(unref(panel).width, unref(panel)) })
            }, {
              default: withCtx(() => [
                createElementVNode("div", _hoisted_2, [
                  createElementVNode("div", _hoisted_3, [
                    createElementVNode("div", _hoisted_4, [
                      (openBlock(true), createElementBlock(
                        Fragment,
                        null,
                        renderList(unref(data).pageList, (page, index) => {
                          return openBlock(), createElementBlock(
                            "div",
                            {
                              ref_for: true,
                              ref_key: "previewContentRef",
                              ref: previewContentRef,
                              key: index,
                              class: "my-print-preview-panel__content_page preview-page-top",
                              style: normalizeStyle({
                                width: unref(valueUnit)(page.width, unref(panel)),
                                minHeight: unref(valueUnit)(page.height, unref(panel))
                              })
                            },
                            [
                              (openBlock(true), createElementBlock(
                                Fragment,
                                null,
                                renderList(page.previewWrapperList, (element, index2) => {
                                  return openBlock(), createBlock(Preview, {
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
            createElementVNode("div", _hoisted_5, [
              createElementVNode(
                "div",
                null,
                "\u540D\u79F0\uFF1A" + toDisplayString(unref(panel).name),
                1
                /* TEXT */
              ),
              createCommentVNode("                <div>\u6253\u5370\u4EFD\u6570\uFF1A\u6D4B\u8BD5</div>"),
              unref(MyPrinter).clientConnectIs() ? (openBlock(), createElementBlock(
                Fragment,
                { key: 0 },
                [
                  createElementVNode("div", null, [
                    createTextVNode(
                      toDisplayString(unref(i18n)("toolbar.printer")) + "\uFF1A ",
                      1
                      /* TEXT */
                    ),
                    createVNode(MySelect, {
                      modelValue: unref(data).printer,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(data).printer = $event),
                      placeholder: "\u8BF7\u9009\u62E9",
                      size: "middle",
                      "data-list": unref(printList)
                    }, null, 8, ["modelValue", "data-list"])
                  ]),
                  createVNode(MyButton, {
                    style: { "margin-top": "40px" },
                    disabled: !unref(data).printer,
                    onClick: print
                  }, {
                    default: withCtx(() => [
                      createTextVNode(
                        toDisplayString(unref(i18n)("toolbar.print")),
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
              )) : (openBlock(), createElementBlock("div", _hoisted_6, "\u5BA2\u6237\u7AEF\u672A\u8FDE\u63A5\uFF0C\u65E0\u6CD5\u4F7F\u7528\u76F4\u63A5\u6253\u5370\u529F\u80FD\uFF0C\u53BB\u4E0B\u8F7D")),
              createVNode(MyButton, {
                class: "preview-panel__tool_button",
                onClick: printChromePdf
              }, {
                default: withCtx(() => [
                  createTextVNode(
                    toDisplayString(unref(i18n)("toolbar.chrome.print")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(MyButton, {
                class: "preview-panel__tool_button",
                onClick: downloadPdf
              }, {
                default: withCtx(() => [
                  createTextVNode(
                    toDisplayString(unref(i18n)("preview.download.pdf")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(MyButton, {
                class: "preview-panel__tool_button",
                onClick: _cache[1] || (_cache[1] = () => unref(data).dialogVisible = false)
              }, {
                default: withCtx(() => [
                  createTextVNode(
                    toDisplayString(unref(i18n)("common.close")),
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

export { _sfc_main as default };
//# sourceMappingURL=preview-panel.vue2.mjs.map
