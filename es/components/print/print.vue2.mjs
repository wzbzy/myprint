import { defineComponent, openBlock, createElementBlock, createElementVNode, Fragment, renderList, unref, normalizeStyle, createBlock } from 'vue';
import { reactive, ref, nextTick } from 'vue-demi';
import { getCurrentPanelUnit, valueUnit } from '../../utils/elementUtil.mjs';
import Preview from '../preview/preview.vue.mjs';
import { autoPage } from '../preview/autoPage.mjs';
import { chrome2Img, toPdf } from '../../utils/pdfUtil.mjs';
import { unit2px, unit2unit } from '../../utils/devicePixelRatio.mjs';
import { downloadImg, downloadPdf } from '../../api/pdfServer.mjs';
import { getPrintElementHtml, iFramePrint } from '../../utils/myprint.mjs';
import { handleTimeOut, printResult, myPrintClientService, handleClientResult } from '../../plugins/myprintClientService.mjs';

const _hoisted_1 = { class: "my-print-preview-panel__wrap my-print-print_hidden" };
const _hoisted_2 = { class: "preview-panel__model" };
const _hoisted_3 = { class: "my-print-preview-panel__content" };
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "print",
  setup(__props, { expose: __expose }) {
    __expose({
      handleChromePrint,
      handleClientPrint,
      handleChromeDownloadImg,
      handleServerDownloadImg,
      handleChromeDownloadPdf,
      handleClientDownloadPdf,
      handleServerDownloadPdf
    });
    const data = reactive({
      dialogVisible: false,
      pageList: [],
      resolveMap: {},
      previewTimeOutMap: {},
      panel: null
    });
    const previewContentRef = ref();
    let itemRefs = {};
    function setItemRef(el, item) {
      itemRefs[item.id] = el;
    }
    function handleChromePrint(printProps) {
      return new Promise(async (resolve, _reject) => {
        data.resolveMap[printProps.taskId] = resolve;
        data.panel = printProps.panel;
        await nextTick();
        await autoPage(previewContentRef, data.pageList, data.panel, printProps.previewDataList);
        await nextTick();
        handleTimeOut(printProps, data.previewTimeOutMap, data.resolveMap);
        printArea();
        data.pageList.length = 0;
        printResult(printProps.taskId, {
          status: "SUCCESS",
          type: "CHROME_PRINT"
        }, data.previewTimeOutMap, data.resolveMap);
      });
    }
    function handleClientPrint(printProps) {
      return new Promise(async (resolve, _reject) => {
        data.resolveMap[printProps.taskId] = resolve;
        if (printProps.panel) {
          data.panel = printProps.panel;
          await nextTick();
          await autoPage(previewContentRef, data.pageList, data.panel, printProps.previewDataList);
          await nextTick();
        }
        handleTimeOut(printProps, data.previewTimeOutMap, data.resolveMap);
        if (!myPrintClientService.connectIs()) {
          printResult(printProps.taskId, {
            status: "ERROR",
            msg: "\u5BA2\u6237\u7AEF\u672A\u8FDE\u63A5",
            type: "CLIENT_PRINT"
          }, data.previewTimeOutMap, data.resolveMap);
          return;
        }
        myPrintClientService.print({
          cmd: "print",
          taskId: printProps.taskId,
          options: {
            ...printProps,
            title: printProps.title ? printProps.title : printProps.panel ? printProps.panel.name : void 0,
            html: printProps.panel ? getPrintElementHtml(previewContentRef.value, data.pageList) : void 0,
            file: printProps.file ? printProps.file : void 0,
            panel: void 0,
            previewDataList: void 0
          }
        }, data.panel).then((clientCmd) => {
          handleClientResult(clientCmd, printResult, data.previewTimeOutMap, data.resolveMap);
        });
      });
    }
    function handleChromeDownloadImg(printProps) {
      return new Promise(async (resolve, _reject) => {
        data.resolveMap[printProps.taskId] = resolve;
        handleTimeOut(printProps, data.previewTimeOutMap, data.resolveMap);
        data.panel = printProps.panel;
        await nextTick();
        await autoPage(previewContentRef, data.pageList, data.panel, printProps.previewDataList);
        chrome2Img(previewContentRef.value, {
          width: unit2px(data.panel.width, data.panel),
          height: unit2px(data.panel.height, data.panel)
        }).then((blobList) => {
          data.pageList = [];
          printResult(printProps.taskId, {
            status: "SUCCESS",
            blobList,
            type: "CHROME_GENERATE_IMG"
          }, data.previewTimeOutMap, data.resolveMap);
        });
      });
    }
    function handleServerDownloadImg(printProps) {
      return new Promise(async (resolve, reject) => {
        data.resolveMap[printProps.taskId] = resolve;
        handleTimeOut(printProps, data.previewTimeOutMap, data.resolveMap);
        data.panel = printProps.panel;
        await nextTick();
        await autoPage(previewContentRef, data.pageList, data.panel, printProps.previewDataList);
        const html = getPrintElementHtml(previewContentRef.value, data.pageList);
        downloadImg({
          content: html,
          height: unit2unit(getCurrentPanelUnit(data.panel), "mm", data.panel.height),
          width: unit2unit(getCurrentPanelUnit(data.panel), "mm", data.panel.width)
        }).then((blob) => {
          printResult(printProps.taskId, {
            status: "SUCCESS",
            blob,
            type: "SERVER_GENERATE_IMG"
          }, data.previewTimeOutMap, data.resolveMap);
        }).catch((e) => {
          reject({
            status: "SUCCESS",
            msg: e.msg,
            type: "SERVER_GENERATE_IMG"
          });
        });
      });
    }
    function handleChromeDownloadPdf(printProps) {
      return new Promise(async (resolve, reject) => {
        data.resolveMap[printProps.taskId] = resolve;
        handleTimeOut(printProps, data.previewTimeOutMap, data.resolveMap);
        data.panel = printProps.panel;
        await nextTick();
        await autoPage(previewContentRef, data.pageList, data.panel, printProps.previewDataList);
        toPdf(previewContentRef.value, {
          width: unit2px(data.panel.width, data.panel),
          height: unit2px(data.panel.height, data.panel)
        }).then((blob) => {
          data.pageList.length = 0;
          printResult(printProps.taskId, {
            status: "SUCCESS",
            blob,
            type: "CHROME_GENERATE_PDF"
          }, data.previewTimeOutMap, data.resolveMap);
        }).catch((e) => {
          data.pageList.length = 0;
          reject({
            status: "ERROR",
            msg: e.msg,
            type: "CHROME_GENERATE_PDF"
          });
        });
      });
    }
    function handleClientDownloadPdf(printProps) {
      return new Promise(async (resolve, reject) => {
        data.resolveMap[printProps.taskId] = resolve;
        handleTimeOut(printProps, data.previewTimeOutMap, data.resolveMap);
        data.panel = printProps.panel;
        await nextTick();
        await autoPage(previewContentRef, data.pageList, data.panel, printProps.previewDataList);
        myPrintClientService.print({
          options: { html: getPrintElementHtml(previewContentRef.value, data.pageList) },
          cmd: "generatePdf",
          taskId: printProps.taskId
        }, data.panel).then((res) => {
          handleClientResult(res, printResult, data.previewTimeOutMap, data.resolveMap);
        }).catch((e) => {
          reject({
            status: "ERROR",
            msg: e.msg,
            type: "CLIENT_GENERATE_PDF"
          });
        });
      });
    }
    function handleServerDownloadPdf(printProps) {
      return new Promise(async (resolve, reject) => {
        data.resolveMap[printProps.taskId] = resolve;
        handleTimeOut(printProps, data.previewTimeOutMap, data.resolveMap);
        data.panel = printProps.panel;
        await nextTick();
        await autoPage(previewContentRef, data.pageList, data.panel, printProps.previewDataList);
        const html = getPrintElementHtml(previewContentRef.value, data.pageList);
        downloadPdf({
          content: html,
          height: unit2unit(getCurrentPanelUnit(data.panel), "mm", data.panel.height),
          width: unit2unit(getCurrentPanelUnit(data.panel), "mm", data.panel.width)
        }).then((blob) => {
          printResult(printProps.taskId, {
            status: "SUCCESS",
            blob,
            type: "SERVER_GENERATE_PDF"
          }, data.previewTimeOutMap, data.resolveMap);
        }).catch((e) => {
          reject({
            status: "ERROR",
            msg: e.msg,
            type: "SERVER_GENERATE_PDF"
          });
        });
      });
    }
    function printArea() {
      const html = getPrintElementHtml(previewContentRef.value, data.pageList);
      iFramePrint(data.panel, html);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          createElementVNode("div", _hoisted_3, [
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
                      width: unref(valueUnit)(page.width, unref(data).panel),
                      minHeight: unref(valueUnit)(page.height, unref(data).panel)
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
      ]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=print.vue2.mjs.map
