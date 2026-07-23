'use strict';

var printer = require('../printer.js');

async function downloadPdf(data) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  let response = await fetch(printer.myPrintOptions.serverUrl + "/print/generatePdf", options);
  return await Promise.resolve(response.blob());
}
async function downloadImg(data) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  let response = await fetch(printer.myPrintOptions.serverUrl + "/print/generateImg", options);
  return await Promise.resolve(response.blob());
}

exports.downloadImg = downloadImg;
exports.downloadPdf = downloadPdf;
//# sourceMappingURL=pdfServer.js.map
