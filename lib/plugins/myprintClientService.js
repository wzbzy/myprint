'use strict';

var socket = require('../stores/socket.js');
var utils = require('../utils/utils.js');
var devicePixelRatio = require('../utils/devicePixelRatio.js');
var elementUtil = require('../utils/elementUtil.js');

const myPrintClientService = {
  print(clientCmd, panel) {
    const options = clientCmd.options;
    if (options.html != null) {
      options.width = devicePixelRatio.unit2unit(elementUtil.getCurrentPanelUnit(panel), "mm", panel.width);
      options.height = devicePixelRatio.unit2unit(elementUtil.getCurrentPanelUnit(panel), "mm", elementUtil.getPrintRealHeight(panel));
    }
    return new Promise((resolve, _reject) => {
      socket.useSocket().SEND(clientCmd.taskId, JSON.stringify(clientCmd)).then((msg) => {
        resolve(msg);
      });
    });
  },
  connectIs() {
    return socket.useSocket().connect;
  },
  getPrinterList() {
    return socket.useSocket().printerList;
  },
  asyncGetPrinterList() {
    return new Promise((resolve, reject) => {
      if (socket.useSocket().connect) {
        const taskId = utils.generateUUID();
        socket.useSocket().SEND(taskId, JSON.stringify({
          taskId,
          cmd: "printerList"
        })).then((res) => {
          socket.useSocket().SET_PRINTER_LIST(res.data);
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

exports.handleClientResult = handleClientResult;
exports.handleTimeOut = handleTimeOut;
exports.myPrintClientService = myPrintClientService;
exports.printResult = printResult;
//# sourceMappingURL=myprintClientService.js.map
