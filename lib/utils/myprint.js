'use strict';

var elementUtil = require('./elementUtil.js');
var utils = require('./utils.js');

const tableColClone = {
  showIs: false,
  clonedTable: document.createElement("table"),
  init() {
    this.clonedTable.classList.add("my-print-table");
    this.clonedTable.classList.add("my-table-clone-drag");
  },
  show(columnLeft, columnTop, width, rows) {
    if (this.showIs) {
      return;
    }
    this.showIs = true;
    this.clonedTable.style.left = columnLeft - 0.5 + "px";
    this.clonedTable.style.top = columnTop - 0.5 + "px";
    this.clonedTable.style.width = width + 1 + "px";
    let tableHeight = 0;
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      if (row.length == 0) {
        continue;
      }
      const tr = document.createElement("tr");
      this.clonedTable.appendChild(tr);
      for (let j = 0; j < row.length; j++) {
        const clonedCell = row[j].runtimeOption.target.cloneNode(true);
        if (row.length == 1) {
          clonedCell.rowSpan = 1;
        }
        tr.appendChild(clonedCell);
      }
      tableHeight = tableHeight + row[row.length - 1].runtimeOption.height;
    }
    this.clonedTable.style.height = tableHeight - 1 + "px";
    document.body.appendChild(this.clonedTable);
  },
  move(columnLeft) {
    this.clonedTable.style.left = columnLeft + "px";
  },
  hidden() {
    if (!this.showIs) {
      return;
    }
    this.showIs = false;
    this.clonedTable.innerHTML = "";
    document.body.removeChild(this.clonedTable);
  }
};
tableColClone.init();
function getPrintElementHtml(htmlElement, pageList) {
  let html = "<div>";
  for (let i = 0; i < htmlElement.length; i++) {
    html += htmlElement[i].outerHTML;
  }
  html += "</div>";
  pageList.length = 0;
  return html;
}
function iFramePrint(panel, html) {
  let iframe = document.createElement("iframe");
  iframe.setAttribute("id", "print-box");
  iframe.setAttribute(
    "style",
    `height: ${elementUtil.valueUnit(elementUtil.getPrintRealHeight(panel))}; width: ${elementUtil.valueUnit(panel.width)}; 
        display: none; 
        position: absolute; 
        left: 99999; 
        top: 0;border: 0;
      z-index: 10000;`
  );
  document.body.appendChild(iframe);
  let iframeDocument = iframe.contentWindow.document;
  const linkElement = iframeDocument.createElement("style");
  linkElement.type = "text/css";
  linkElement.textContent = utils.printCssStyle();
  iframeDocument.body.innerHTML = html;
  iframeDocument.getElementsByTagName("head")[0].innerHTML = `
  <style>
    *{ margin:0;padding:0; }
    @media print {
      @page {
        size: ${elementUtil.valueUnit(panel.width)} ${elementUtil.valueUnit(elementUtil.getPrintRealHeight(panel))};
        margin: 0;
      }
    }
  </style>
  <meta http-equiv="content-type" content="text/html;charset=utf-8">`;
  iframeDocument.head.appendChild(linkElement);
  iframeDocument.close();
  iframe.contentWindow.focus();
  iframe.contentWindow.print();
  setTimeout(function() {
    document.body.removeChild(iframe);
  }, 1e4);
}

exports.getPrintElementHtml = getPrintElementHtml;
exports.iFramePrint = iFramePrint;
exports.tableColClone = tableColClone;
//# sourceMappingURL=myprint.js.map
