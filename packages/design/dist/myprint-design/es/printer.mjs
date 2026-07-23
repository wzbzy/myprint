import { h, render } from 'vue-demi';
import PrintView from './components/print/print.vue.mjs';
import previewPanelView from './components/preview/preview-panel.vue.mjs';
import { parentInitElement, getCurrentPanel } from './utils/elementUtil.mjs';
import { isBlob, blob2Base64, isArrayBuffer, arrayBuffer2Base64, isUint8Array, uint8Array2Base64, generateUUID } from './utils/utils.mjs';
import { myPrintClientService } from './plugins/myprintClientService.mjs';
import { useAppStoreHook } from './stores/app.mjs';
import { useConfigStore } from './stores/config.mjs';
import { useSocket } from './stores/socket.mjs';

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
    printNode = h(PrintView, {});
    const container = document.createElement("div");
    printNode.appContext = app._context;
    render(printNode, container);
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
    previewNode = h(previewPanelView, {});
    const container = document.createElement("div");
    previewNode.appContext = app._context;
    render(previewNode, container);
    handleChromePreview = previewNode.component.exposed.handleChromePreview;
    document.body.appendChild(container);
  }
}
function initPanel(panel) {
  panel.runtimeOption = {};
  for (let i = 0; i < panel.elementList.length; i++) {
    const element = panel.elementList[i];
    parentInitElement(panel, panel, element, i);
  }
  panel.pageHeader && parentInitElement(panel, panel, panel.pageHeader, 0);
  panel.pageFooter && parentInitElement(panel, panel, panel.pageFooter, 0);
}
function convertPrintProps(printProps) {
  return new Promise(async (resolve, _reject) => {
    let panel = printProps.panel;
    if (printProps.file) {
      if (isBlob(printProps.file)) {
        printProps.file = await blob2Base64(printProps.file);
      }
      if (isArrayBuffer(printProps.file)) {
        printProps.file = arrayBuffer2Base64(printProps.file);
      }
      if (isUint8Array(printProps.file)) {
        printProps.file = uint8Array2Base64(printProps.file);
      }
    } else {
      if (panel == null) {
        panel = getCurrentPanel();
      } else {
        if (typeof printProps.panel == "string") {
          panel = JSON.parse(printProps.panel);
          initPanel(panel);
        }
      }
    }
    if (!printProps.taskId) {
      printProps.taskId = generateUUID();
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
        useConfigStore().clientUrl = options.clientUrl.slice(0, -1);
      } else {
        useConfigStore().clientUrl = options.clientUrl;
      }
    }
    myPrintOptions.disabledClient = options.disabledClient == null ? false : options.disabledClient;
  },
  setLocale(locale) {
    useAppStoreHook().SET_LOCALE(locale);
  },
  setClientUrl(clientUrl) {
    if (!clientUrl) {
      return;
    }
    if (clientUrl.endsWith("/")) {
      useConfigStore().clientUrl = clientUrl.slice(0, -1);
    } else {
      useConfigStore().clientUrl = clientUrl;
    }
    useSocket().INIT_SOCKET();
  },
  setServerUrl(serverUrl) {
    if (serverUrl.endsWith("/")) {
      myPrintOptions.serverUrl = serverUrl.slice(0, -1);
    } else {
      myPrintOptions.serverUrl = serverUrl;
    }
  },
  clientConnectIs() {
    return myPrintClientService.connectIs();
  },
  getPrinterList() {
    return myPrintClientService.getPrinterList();
  },
  getDefaultPrinter() {
    const printList = myPrintClientService.getPrinterList();
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
    return myPrintClientService.asyncGetPrinterList();
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

export { MyPrinter, installPrinter, myPrintOptions };
//# sourceMappingURL=printer.mjs.map
