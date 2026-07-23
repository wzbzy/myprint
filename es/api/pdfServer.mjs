import { myPrintOptions } from '../printer.mjs';

async function downloadPdf(data) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  let response = await fetch(myPrintOptions.serverUrl + "/print/generatePdf", options);
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
  let response = await fetch(myPrintOptions.serverUrl + "/print/generateImg", options);
  return await Promise.resolve(response.blob());
}

export { downloadImg, downloadPdf };
//# sourceMappingURL=pdfServer.mjs.map
