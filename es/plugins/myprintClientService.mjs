import { useSocket } from '../stores/socket.mjs';
import { generateUUID } from '../utils/utils.mjs';
import { unit2unit } from '../utils/devicePixelRatio.mjs';
import { getCurrentPanelUnit, getPrintRealHeight } from '../utils/elementUtil.mjs';

const myPrintClientService = {
  print(clientCmd, panel) {
    const options = clientCmd.options;
    if (options.html != null) {
      options.width = unit2unit(getCurrentPanelUnit(panel), "mm", panel.width);
      options.height = unit2unit(getCurrentPanelUnit(panel), "mm", getPrintRealHeight(panel));
    }
    return new Promise((resolve, _reject) => {
      useSocket().SEND(clientCmd.taskId, JSON.stringify(clientCmd)).then((msg) => {
        resolve(msg);
      });
    });
  },
  connectIs() {
    return useSocket().connect;
  },
  getPrinterList() {
    return useSocket().printerList;
  },
  asyncGetPrinterList() {
    return new Promise((resolve, reject) => {
      if (useSocket().connect) {
        const taskId = generateUUID();
        useSocket().SEND(taskId, JSON.stringify({
          taskId,
          cmd: "printerList"
        })).then((res) => {
          useSocket().SET_PRINTER_LIST(res.data);
          resolve(res.data);
        }).catch((e) => {
          reject(e);
        });
      } else {
        reject({ msg: "\u5BA2\u6237\u7AEF\u672A\u8FDE\u63A5" });
      }
    });
  }
};
const handleClientResult = (clientCmd, printResult2, previewTimeOutMap, resolveMap) => {
  if (clientCmd.cmd == "printResult") {
    printResult2(clientCmd.taskId, {
      status: clientCmd.status ? "SUCCESS" : "ERROR",
      msg: clientCmd.msg,
      type: "CLIENT_PRINT"
    }, previewTimeOutMap, resolveMap);
  }
  if (clientCmd.cmd == "generatePdfResult") {
    let data = clientCmd.data;
    let blob = null;
    if (data != null) {
      const uint8Array = new Uint8Array(data.data);
      blob = new Blob([uint8Array], { type: "application/octet-stream" });
    }
    printResult2(clientCmd.taskId, {
      status: "SUCCESS",
      msg: "",
      blob,
      type: "CLIENT_GENERATE_PDF"
    }, previewTimeOutMap, resolveMap);
    return blob;
  }
};
function printResult(taskId, result, previewTimeOutMap, resolveMap) {
  if (previewTimeOutMap[taskId]) {
    clearTimeout(previewTimeOutMap[taskId]);
    delete previewTimeOutMap[taskId];
  }
  if (resolveMap[taskId]) {
    resolveMap[taskId](result);
    delete resolveMap[taskId];
  }
}
function handleTimeOut(printProps, previewTimeOutMap, resolveMap) {
  if (printProps.timeout > 0) {
    previewTimeOutMap[printProps.taskId] = setTimeout(() => {
      printResult(printProps.taskId, {
        status: "TIMEOUT",
        type: "TIMEOUT"
      }, previewTimeOutMap, resolveMap);
    }, printProps.timeout);
  }
}

export { handleClientResult, handleTimeOut, myPrintClientService, printResult };
//# sourceMappingURL=myprintClientService.mjs.map
