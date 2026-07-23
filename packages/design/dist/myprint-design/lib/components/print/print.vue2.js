'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vueDemi = require('vue-demi');
var elementUtil = require('../../utils/elementUtil.js');
var preview = require('../preview/preview.vue.js');
var autoPage = require('../preview/autoPage.js');
var pdfUtil = require('../../utils/pdfUtil.js');
var devicePixelRatio = require('../../utils/devicePixelRatio.js');
var pdfServer = require('../../api/pdfServer.js');
var myprint = require('../../utils/myprint.js');
var myprintClientService = require('../../plugins/myprintClientService.js');

const _hoisted_1 = { class: "my-print-preview-panel__wrap my-print-print_hidden" };
const _hoisted_2 = { class: "preview-panel__model" };
const _hoisted_3 = { class: "my-print-preview-panel__content" };
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
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
    const data = vueDemi.reactive({
      dialogVisible: false,
      pageList: [],
      resolveMap: {},
      previewTimeOutMap: {},
      panel: null
    });
    const previewContentRef = vueDemi.ref();
    let itemRefs = {};
    function setItemRef(el, item) {
      itemRefs[item.id] = el;
    }
    function handleChromePrint(printProps) {
      return new Promise(async (resolve, _reject) => {
        data.resolveMap[printProps.taskId] = resolve;
        data.panel = printProps.panel;
        await vueDemi.nextTick();
        await autoPage.autoPage(previewContentRef, data.pageList, data.panel, printProps.previewDataList);
        await vueDemi.nextTick();
        myprintClientService.handleTimeOut(printProps, data.previewTimeOutMap, data.resolveMap);
        printArea();
        data.pageList.length = 0;
        myprintClientService.printResult(printProps.taskId, {
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
          await vueDemi.nextTick();
          await autoPage.autoPage(previewContentRef, data.pageList, data.panel, printProps.previewDataList);
          await vueDemi.nextTick();
        }
        myprintClientService.handleTimeOut(printProps, data.previewTimeOutMap, data.resolveMap);
        if (!myprintClientService.myPrintClientService.connectIs()) {
          myprintClientService.printResult(printProps.taskId, {
            status: "ERROR",
            msg: "\u5BA2\u6237\u7AEF\u672A\u8FDE\u63A5",
            type: "CLIENT_PRINT"
          }, data.previewTimeOutMap, data.resolveMap);
          return;
        }
        myprintClientService.myPrintClientService.print({
          cmd: "print",
          taskId: printProps.taskId,
          options: {
            ...printProps,
            title: printProps.title ? printProps.title : printProps.panel ? printProps.panel.name : void 0,
            html: printProps.panel ? myprint.getPrintElementHtml(previewContentRef.value, data.pageList) : void 0,
            file: printProps.file ? printProps.file : void 0,
            panel: void 0,
            previewDataList: void 0
          }
        }, data.panel).then((clientCmd) => {
          myprintClientService.handleClientResult(clientCmd, myprintClientService.printResult, data.previewTimeOutMap, data.resolveMap);
        });
      });
    }
    function handleChromeDownloadImg(printProps) {
      return new Promise(async (resolve, _reject) => {
        data.resolveMap[printProps.taskId] = resolve;
        myprintClientService.handleTimeOut(printProps, data.previewTimeOutMap, data.resolveMap);
        data.panel = printProps.panel;
        await vueDemi.nextTick();
        await autoPage.autoPage(previewContentRef, data.pageList, data.panel, printProps.previewDataList);
        pdfUtil.chrome2Img(previewContentRef.value, {
          width: devicePixelRatio.unit2px(data.panel.width, data.panel),
          height: devicePixelRatio.unit2px(data.panel.height, data.panel)
        }).then((blobList) => {
          data.pageList = [];
          myprintClientService.printResult(printProps.taskId, {
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
        myprintClientService.handleTimeOut(printProps, data.previewTimeOutMap, data.resolveMap);
        data.panel = printProps.panel;
        await vueDemi.nextTick();
        await autoPage.autoPage(previewContentRef, data.pageList, data.panel, printProps.previewDataList);
        const html = myprint.getPrintElementHtml(previewContentRef.value, data.pageList);
        pdfServer.downloadImg({
          content: html,
          height: devicePixelRatio.unit2unit(elementUtil.getCurrentPanelUnit(data.panel), "mm", data.panel.height),
          width: devicePixelRatio.unit2unit(elementUtil.getCurrentPanelUnit(data.panel), "mm", data.panel.width)
        }).then((blob) => {
          myprintClientService.printResult(printProps.taskId, {
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
        myprintClientService.handleTimeOut(printProps, data.previewTimeOutMap, data.resolveMap);
        data.panel = printProps.panel;
        await vueDemi.nextTick();
        await autoPage.autoPage(previewContentRef, data.pageList, data.panel, printProps.previewDataList);
        pdfUtil.toPdf(previewContentRef.value, {
          width: devicePixelRatio.unit2px(data.panel.width, data.panel),
          height: devicePixelRatio.unit2px(data.panel.height, data.panel)
        }).then((blob) => {
          data.pageList.length = 0;
          myprintClientService.printResult(printProps.taskId, {
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
        myprintClientService.handleTimeOut(printProps, data.previewTimeOutMap, data.resolveMap);
        data.panel = printProps.panel;
        await vueDemi.nextTick();
        await autoPage.autoPage(previewContentRef, data.pageList, data.panel, printProps.previewDataList);
        myprintClientService.myPrintClientService.print({
          options: { html: myprint.getPrintElementHtml(previewContentRef.value, data.pageList) },
          cmd: "generatePdf",
          taskId: printProps.taskId
        }, data.panel).then((res) => {
          myprintClientService.handleClientResult(res, myprintClientService.printResult, data.previewTimeOutMap, data.resolveMap);
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
        myprintClientService.handleTimeOut(printProps, data.previewTimeOutMap, data.resolveMap);
        data.panel = printProps.panel;
        await vueDemi.nextTick();
        await autoPage.autoPage(previewContentRef, data.pageList, data.panel, printProps.previewDataList);
        const html = myprint.getPrintElementHtml(previewContentRef.value, data.pageList);
        pdfServer.downloadPdf({
          content: html,
          height: devicePixelRatio.unit2unit(elementUtil.getCurrentPanelUnit(data.panel), "mm", data.panel.height),
          width: devicePixelRatio.unit2unit(elementUtil.getCurrentPanelUnit(data.panel), "mm", data.panel.width)
        }).then((blob) => {
          myprintClientService.printResult(printProps.taskId, {
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
      const html = myprint.getPrintElementHtml(previewContentRef.value, data.pageList);
      myprint.iFramePrint(data.panel, html);
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.createElementVNode("div", _hoisted_2, [
          vue.createElementVNode("div", _hoisted_3, [
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
                      width: vue.unref(elementUtil.valueUnit)(page.width, vue.unref(data).panel),
                      minHeight: vue.unref(elementUtil.valueUnit)(page.height, vue.unref(data).panel)
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
      ]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=print.vue2.js.map
