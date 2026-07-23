'use strict';

var vueDemi = require('vue-demi');
var print = require('./components/print/print.vue.js');
var previewPanel = require('./components/preview/preview-panel.vue.js');
var elementUtil = require('./utils/elementUtil.js');
var utils = require('./utils/utils.js');
var myprintClientService = require('./plugins/myprintClientService.js');
var app = require('./stores/app.js');
var config = require('./stores/config.js');
var socket = require('./stores/socket.js');

const myPrintOptions = {
  disabledClient: false
};
let printNode = null;
let previewNode = null;
let handleChromePrint = null;
let handleClientPrint = null;
let handleChromeDownloadPdf = null;
let handleClientDownloadPdf = null;
let handleServerDownloadPdf = null;
let handleChromeDownloadImg = null;
let handleServerDownloadImg = null;
let handleChromePreview = null;
function installPrinter(app) {
  if (!printNode) {
    printNode = vueDemi.h(print.default, {});
    const container = document.createElement("div");
    printNode.appContext = app._context;
    vueDemi.render(printNode, container);
    handleChromePrint = printNode.component.exposed.handleChromePrint;
    handleClientPrint = printNode.component.exposed.handleClientPrint;
    handleChromeDownloadPdf = printNode.component.exposed.handleChromeDownloadPdf;
    handleClientDownloadPdf = printNode.component.exposed.handleClientDownloadPdf;
    handleServerDownloadPdf = printNode.component.exposed.handleServerDownloadPdf;
    handleChromeDownloadImg = printNode.component.exposed.handleChromeDownloadImg;
    handleServerDownloadImg = printNode.component.exposed.handleServerDownloadImg;
    document.body.appendChild(container.firstElementChild);
  }
  if (!previewNode) {
    previewNode = vueDemi.h(previewPanel.default, {});
    const container = document.createElement("div");
    previewNode.appContext = app._context;
    vueDemi.render(previewNode, container);
    handleChromePreview = previewNode.component.exposed.handleChromePreview;
    document.body.appendChild(container);
  }
}
function initPanel(panel) {
  panel.runtimeOption = {};
  for (let i = 0; i < panel.elementList.length; i++) {
    const element = panel.elementList[i];
    elementUtil.parentInitElement(panel, panel, element, i);
  }
  panel.pageHeader && elementUtil.parentInitElement(panel, panel, panel.pageHeader, 0);
  panel.pageFooter && elementUtil.parentInitElement(panel, panel, panel.pageFooter, 0);
}
function convertPrintProps(printProps) {
  return new Promise(async (resolve, _reject) => {
    let panel = printProps.panel;
    if (printProps.file) {
      if (utils.isBlob(printProps.file)) {
        printProps.file = await utils.blob2Base64(printProps.file);
      }
      if (utils.isArrayBuffer(printProps.file)) {
        printProps.file = utils.arrayBuffer2Base64(printProps.file);
      }
      if (utils.isUint8Array(printProps.file)) {
        printProps.file = utils.uint8Array2Base64(printProps.file);
      }
    } else {
      if (panel == null) {
        panel = elementUtil.getCurrentPanel();
      } else {
        if (typeof printProps.panel == "string") {
          panel = JSON.parse(printProps.panel);
          initPanel(panel);
        }
      }
    }
    if (!printProps.taskId) {
      printProps.taskId = utils.generateUUID();
    }
    resolve({
      ...printProps,
      panel
    });
  });
}
const MyPrinter = {
  initMyPrinter(options) {
    if (options.serverUrl) {
      if (options.serverUrl.endsWith("/")) {
        myPrintOptions.serverUrl = options.serverUrl.slice(0, -1);
      } else {
        myPrintOptions.serverUrl = options.serverUrl;
      }
    }
    if (options.clientUrl) {
      if (options.clientUrl.endsWith("/")) {
        config.useConfigStore().clientUrl = options.clientUrl.slice(0, -1);
      } else {
        config.useConfigStore().clientUrl = options.clientUrl;
      }
    }
    myPrintOptions.disabledClient = options.disabledClient == null ? false : options.disabledClient;
  },
  setLocale(locale) {
    app.useAppStoreHook().SET_LOCALE(locale);
  },
  setClientUrl(clientUrl) {
    if (!clientUrl) {
      return;
    }
    if (clientUrl.endsWith("/")) {
      config.useConfigStore().clientUrl = clientUrl.slice(0, -1);
    } else {
      config.useConfigStore().clientUrl = clientUrl;
    }
    socket.useSocket().INIT_SOCKET();
  },
  setServerUrl(serverUrl) {
    if (serverUrl.endsWith("/")) {
      myPrintOptions.serverUrl = serverUrl.slice(0, -1);
    } else {
      myPrintOptions.serverUrl = serverUrl;
    }
  },
  clientConnectIs() {
    return myprintClientService.myPrintClientService.connectIs();
  },
  getPrinterList() {
    return myprintClientService.myPrintClientService.getPrinterList();
  },
  getDefaultPrinter() {
    const printList = myprintClientService.myPrintClientService.getPrinterList();
    if (printList == null || printList.length == 0) {
      return null;
    }
    for (let printListElement of printList) {
      if (printListElement.isDefault) {
        return printListElement;
      }
    }
    return printList[0];
  },
  asyncGetPrinterList() {
    return myprintClientService.myPrintClientService.asyncGetPrinterList();
  },
  chromePreview(printProps) {
    return convertPrintProps(printProps).then(handleChromePreview);
  },
  chromePrinter(printProps) {
    return convertPrintProps(printProps).then(handleChromePrint);
  },
  clientPrinter(printProps) {
    return convertPrintProps(printProps).then(handleClientPrint);
  },
  pdfChrome(printProps) {
    return convertPrintProps(printProps).then(handleChromeDownloadPdf);
  },
  pdfClient(printProps) {
    return convertPrintProps(printProps).then(handleClientDownloadPdf);
  },
  pdfServer(printProps) {
    return convertPrintProps(printProps).then(handleServerDownloadPdf);
  },
  imgChrome(printProps) {
    return convertPrintProps(printProps).then(handleChromeDownloadImg);
  },
  imgServer(printProps) {
    return convertPrintProps(printProps).then(handleServerDownloadImg);
  }
};

exports.MyPrinter = MyPrinter;
exports.installPrinter = installPrinter;
exports.myPrintOptions = myPrintOptions;
//# sourceMappingURL=printer.js.map
