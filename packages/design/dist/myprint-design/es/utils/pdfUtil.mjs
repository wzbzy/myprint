import html2canvas from 'html2canvas';
import JsPDF from 'jspdf';
import { unit2unit } from './devicePixelRatio.mjs';

let defaultOptions = {
  name: (/* @__PURE__ */ new Date()).getTime(),
  scale: window.devicePixelRatio,
  padding: 0,
  useCORS: true,
  logging: true,
  dpi: 144,
  // 设置dpi，会使图片高清一些
  width: -1,
  height: -1
  // allowTaint: true
};
function chrome2Img(pageDomList, options) {
  return new Promise((resolve, _reject) => {
    defaultOptions.width = options.width;
    defaultOptions.height = options.height;
    const imageMap = {};
    const imageList = [];
    let count = 0;
    for (let i = 0; i < pageDomList.length; i++) {
      let pageDom = pageDomList[i];
      requestAnimationFrame(() => {
        html2canvas(pageDom, defaultOptions).then((canvas) => {
          canvas.toBlob((blob) => {
            count++;
            imageMap[i] = blob;
            if (count == pageDomList.length) {
              for (let j = 0; j < count; j++) {
                imageList.push(imageMap[j]);
              }
              resolve(imageList);
            }
          }, "image/jpeg", 1);
        });
      });
    }
  });
}
async function toPdf(pageDomList, options) {
  let w = unit2unit("px", "cm", options.width);
  let h = unit2unit("px", "cm", options.height);
  let doc = new JsPDF(void 0, "cm", [w, h]);
  defaultOptions.width = options.width;
  defaultOptions.height = options.height;
  for (let i = 0; i < pageDomList.length; i++) {
    let pageDom = pageDomList[i];
    const canvas = await html2canvas(pageDom, defaultOptions);
    let jpeg = canvas.toDataURL("image/jpeg", 1);
    doc.addImage(jpeg, "JPEG", 0, 0, w, h);
    if (i + 1 < pageDomList.length) {
      doc.addPage();
    }
  }
  return doc.output("blob");
}

export { chrome2Img, toPdf };
//# sourceMappingURL=pdfUtil.mjs.map
