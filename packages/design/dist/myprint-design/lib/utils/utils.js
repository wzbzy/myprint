'use strict';

var event = require('./event.js');
var devicePixelRatio = require('./devicePixelRatio.js');
var mittInit = require('mitt');
var common = require('../constants/common.js');
var dataTable = require('./table/dataTable.js');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var mittInit__namespace = /*#__PURE__*/_interopNamespaceDefault(mittInit);

let collapsePanelZIndex = 1e3;
const mitt = mittInit__namespace.default();
function sortColumn(myElement, baseColIndex, row, sourceIndex, targetIndex) {
  const col = baseColIndex;
  const diffCol = targetIndex - sourceIndex;
  const baseCell = myElement.tableHeadList[row][col];
  const { cell: targetCell, col: targetCol } = dataTable.findFromLeftCell(myElement.tableHeadList, row, baseColIndex, diffCol);
  const colspan = baseCell.colspan;
  const targetColspan = targetCell.colspan;
  changeTableList(myElement.tableHeadList, row, col, targetCol, colspan, targetColspan);
  changeTableList(myElement.tableBodyList, 0, col, targetCol, colspan, targetColspan);
}
function changeTableList(list, row, col, targetCol, colspan, targetColspan) {
  const cacheSourceCellList = [];
  for (let i = row; i < list.length; i++) {
    const rowList = list[i];
    const cacheSourceCellListTmp = [];
    for (let j = 0; j < colspan; j++) {
      cacheSourceCellListTmp.push(rowList[col]);
      rowList.splice(col, 1);
    }
    cacheSourceCellList.push(cacheSourceCellListTmp);
  }
  for (let i = row; i < list.length; i++) {
    const rowList = list[i];
    for (let j = 0; j < colspan; j++) {
      const skipColSpan = targetCol > col ? targetColspan - 1 - (colspan - 1) : 0;
      rowList.splice(targetCol + skipColSpan + j, 0, cacheSourceCellList[i - row][j]);
    }
  }
}
function click(ev, realFun) {
  event.clearEventBubble(ev);
  realFun();
}
function parse(str, target) {
  let targetObj = JSON.parse(str);
  return to(targetObj, target);
}
function to(source, target) {
  return Object.assign(target, source);
}
function trend0(num) {
  return num < 0 ? 0 : num;
}
function trend1(num) {
  return num < 1 ? 1 : num;
}
function getRatio() {
  return devicePixelRatio.displayRatio;
}
function mm2pxNoScale(mm) {
  return mm * devicePixelRatio.displayRatio;
}
function stringify(obj, ...ignore) {
  return JSON.stringify(obj, (key, value) => {
    if (ignore.includes(key)) return void 0;
    return value;
  });
}
function getCollapsePanelZIndex(zIndex) {
  if (zIndex == collapsePanelZIndex) {
    return zIndex;
  }
  return ++collapsePanelZIndex;
}
function rgbaToHex(rgba) {
  const rgbaValues = rgba.match(/\d+/g);
  const r = Math.round(parseInt(rgbaValues[0]));
  const g = Math.round(parseInt(rgbaValues[1]));
  const b = Math.round(parseInt(rgbaValues[2]));
  const hexR = r.toString(16).padStart(2, "0");
  const hexG = g.toString(16).padStart(2, "0");
  const hexB = b.toString(16).padStart(2, "0");
  let hexA = "";
  if (rgbaValues[3]) {
    hexA = parseFloat(rgbaValues[3]).toString(16).padStart(2, "0");
  }
  return "#" + hexR + hexG + hexB + hexA;
}
let printCssStyleCache = void 0;
function printCssStyle() {
  if (printCssStyleCache) {
    return printCssStyleCache;
  }
  let cssRuleList = `
    @media print {
        body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
        }
    }

.display-flex {
  display: flex;
}

.display-flex-wrap {
  flex-wrap: wrap;
}

.display-flex-column {
  display: flex;
  flex-direction: column;
}

.my-print-text_container {
  width: 100%;
  height: 100%;
  display: flex;
  outline: 0;
  box-sizing: border-box;
  vertical-align: top;
  word-break: break-all;
  flex-grow: 1;
}

.my-print-barcode_svg_wrapper {
  width: 100%;
  max-width: 100%;
  height: 100%;
}

.my-print-text_content {
  vertical-align: top;
  word-break: break-all;
  box-sizing: border-box;
  outline: 0;
  flex-grow: 1;
}

.my-print-horizontal-line__wrapper {
  width: 100%;
  word-break: break-all;
  cursor: move;
  outline: none;
}

.my-print-horizontal-line {
  cursor: move;
  position: absolute;
}

.my-print-rect__wrapper {
  word-break: break-all;
  border: 1px #000 solid;
  box-sizing: border-box;
  position: absolute;
  cursor: text;
}

.my-print-dotted-rect__wrapper {
  word-break: break-all;
  outline: #000 dotted;
  position: absolute;
  cursor: text;
}

.my-print-table {
  text-indent: initial;
  border-collapse: collapse;
  border-spacing: 0;
  padding: 0;
  word-break: break-all;
  box-sizing: border-box;
  outline: none;
}

.my-print-columnHead {
  position: relative;
  word-break: break-all;
  height: 100%;

  box-sizing: border-box;
  padding: 0;
}

.my-print-columnHead__content {
  height: 100%;
}

.my-print-container {
  width: var(--design-width);
  max-width: var(--design-width);
  height: var(--design-height);
  max-height: var(--design-height);
}

.my-print-table-column_body {
  word-break: break-all;
  text-align: center;
  box-sizing: border-box;
  overflow: hidden;
  padding: 0;
}

.my-print-container_over {
  z-index: 1;
  opacity: 0.6;
  background: var(--page-header-drop-color);
  outline: 4px solid var(--drag-h-color);
}

.my-print-preview-wrap {
  position: absolute;
}

.my-print-preview-wrap_container {
}

.my-print-print_hidden {
  position: absolute;
  top: -99999px;
}

.my-print-preview-panel__wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.my-print-preview-panel__content {
  position: relative;

}

.my-print-preview-panel__content_page {
  position: relative;
  overflow: hidden;
  //box-sizing: border-box;
  background: white;
}

.my-print-draw_panel {
  width: 100%;
  height: 100%;
}

.my-print-draw_panel_img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.my-print-chart {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: visible;
}
`;
  return printCssStyleCache = cssRuleList;
}
function download(blob, fileName) {
  const blobUrl = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = blobUrl;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(blobUrl);
}
function downloadImg2Base64(url) {
  return new Promise((resolve, reject) => {
    fetch(url).then((res) => {
      const contentType = res.headers.get("content-type");
      if (contentType.includes("image/svg+xml")) {
        res.blob().then((blob) => {
          blob2Base64(blob).then(resolve);
        });
      } else {
        res.blob().then((blob) => {
          blob2Base64(blob).then(resolve);
        });
      }
    }).catch((e) => {
      reject(e);
    });
  });
}
function isBlob(obj) {
  return obj instanceof Blob;
}
function isArrayBuffer(obj) {
  return obj instanceof ArrayBuffer;
}
function isUint8Array(obj) {
  return obj instanceof Uint8Array;
}
function arrayBuffer2Base64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
}
function uint8Array2Base64(bytes) {
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
}
function blob2Base64(blob) {
  return new Promise((resolve, _reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
}
function getFontFamilyName(val) {
  for (let fontListElement of common.fontList) {
    for (let downList of fontListElement) {
      if (val == downList.value) {
        return downList.label;
      }
    }
  }
  return "\u9ED8\u8BA4";
}
function douglasPeucker(points, epsilon) {
  if (points.length <= 2) {
    return points;
  }
  let dMax = 0;
  let index = 0;
  const end = points.length - 1;
  for (let i = 1; i < end; i++) {
    const d = perpendicularDistance(points[i], points[0], points[end]);
    if (d > dMax) {
      index = i;
      dMax = d;
    }
  }
  if (dMax > epsilon) {
    const firstPart = douglasPeucker(points.slice(0, index + 1), epsilon);
    const secondPart = douglasPeucker(points.slice(index, end + 1), epsilon);
    return firstPart.slice(0, -1).concat(secondPart);
  } else {
    return [points[0], points[end]];
  }
}
function perpendicularDistance(point, lineStart, lineEnd) {
  const [x, y] = point;
  const [startX, startY] = lineStart;
  const [endX, endY] = lineEnd;
  const A = x - startX;
  const B = y - startY;
  const C = endX - startX;
  const D = endY - startY;
  const dot = A * C + B * D;
  const lenSq = C * C + D * D;
  let param = -1;
  if (lenSq !== 0) {
    param = dot / lenSq;
  }
  let xx, yy;
  if (param < 0) {
    xx = startX;
    yy = startY;
  } else if (param > 1) {
    xx = endX;
    yy = endY;
  } else {
    xx = startX + param * C;
    yy = startY + param * D;
  }
  const dx = x - xx;
  const dy = y - yy;
  return Math.sqrt(dx * dx + dy * dy);
}
function isFunction(func) {
  return typeof func === "function" || Object.prototype.toString.call(func) === "[object Function]";
}
function _defaultVal(val, _default) {
  return val ? val : _default;
}
function n2br(val) {
  return typeof val === "string" ? val.replaceAll("\n", "<br>") : val;
}
function br2n(val) {
  return typeof val === "string" ? val.replaceAll("<br>", "\n") : val;
}
function replaceSpacesOutsideHTMLTags(input) {
  const regex = /<[^>]*>/g;
  const tags = input.match(regex) || [];
  let tempStr = input.replace(regex, "__HTML_TAG__");
  tempStr = tempStr.replace(/ /g, "&nbsp;");
  tags.forEach((tag) => {
    tempStr = tempStr.replace("__HTML_TAG__", tag);
  });
  return tempStr;
}
function rafTimeout(fn, delay = 0, interval = false) {
  let start = null;
  function timeElapse(timestamp) {
    if (!start) {
      start = timestamp;
    }
    const elapsed = timestamp - start;
    if (elapsed >= delay) {
      try {
        fn();
      } catch (error) {
        console.error("Error executing rafTimeout function:", error);
      }
      if (interval) {
        start = timestamp;
        raf.id = requestAnimationFrame(timeElapse);
      }
    } else {
      raf.id = requestAnimationFrame(timeElapse);
    }
  }
  const raf = {
    id: requestAnimationFrame(timeElapse)
  };
  return raf;
}
function cancelRaf(raf) {
  if (raf && raf.id && typeof raf.id === "number") {
    cancelAnimationFrame(raf.id);
  } else {
  }
}
function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c === "x" ? r : r & 3 | 8;
    return v.toString(16);
  });
}

exports._defaultVal = _defaultVal;
exports.arrayBuffer2Base64 = arrayBuffer2Base64;
exports.blob2Base64 = blob2Base64;
exports.br2n = br2n;
exports.cancelRaf = cancelRaf;
exports.click = click;
exports.douglasPeucker = douglasPeucker;
exports.download = download;
exports.downloadImg2Base64 = downloadImg2Base64;
exports.generateUUID = generateUUID;
exports.getCollapsePanelZIndex = getCollapsePanelZIndex;
exports.getFontFamilyName = getFontFamilyName;
exports.getRatio = getRatio;
exports.isArrayBuffer = isArrayBuffer;
exports.isBlob = isBlob;
exports.isFunction = isFunction;
exports.isUint8Array = isUint8Array;
exports.mitt = mitt;
exports.mm2pxNoScale = mm2pxNoScale;
exports.n2br = n2br;
exports.parse = parse;
exports.printCssStyle = printCssStyle;
exports.rafTimeout = rafTimeout;
exports.replaceSpacesOutsideHTMLTags = replaceSpacesOutsideHTMLTags;
exports.rgbaToHex = rgbaToHex;
exports.sortColumn = sortColumn;
exports.stringify = stringify;
exports.to = to;
exports.trend0 = trend0;
exports.trend1 = trend1;
exports.uint8Array2Base64 = uint8Array2Base64;
//# sourceMappingURL=utils.js.map
