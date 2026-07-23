'use strict';

var moveable = require('../plugins/moveable/moveable.js');
var common = require('../constants/common.js');
var elementUtil = require('./elementUtil.js');
var utils = require('./utils.js');
var historyUtil = require('./historyUtil.js');
var vueDemi = require('vue-demi');
var devicePixelRatio = require('./devicePixelRatio.js');

function boundElement(newElement, parentTmp) {
  if (newElement.x + newElement.width > parentTmp.width) {
    newElement.x = parentTmp.width - newElement.width;
  }
  if (newElement.y + newElement.height > parentTmp.height) {
    newElement.y = parentTmp.height - newElement.height;
  }
}
function getIncr(clipboard, id) {
  let pasteNum = clipboard.pasteNumMap[id];
  if (pasteNum == void 0) {
    pasteNum = 1;
    clipboard.pasteNumMap[id] = pasteNum;
  }
  return pasteNum;
}
const memoryClipboardUtil = {
  clipboard: {
    data: [],
    type: "COPY",
    pasteNumMap: {}
  },
  copy() {
    const elementList = moveable.getSelectElement().filter((v) => !common.noCopyElementTypeList.includes(v.type));
    if (elementList.length == 0) {
      return;
    }
    for (let myElement of this.clipboard.data) {
      myElement.runtimeOption.cutIngIs = void 0;
    }
    this.clipboard.data = elementList;
    this.clipboard.type = "COPY";
    this.clipboard.pasteNumMap = {};
  },
  cut() {
    const elementList = moveable.getSelectElement().filter((v) => !common.noCopyElementTypeList.includes(v.type));
    if (elementList.length == 0) {
      return;
    }
    for (let myElement of this.clipboard.data) {
      myElement.runtimeOption.cutIngIs = void 0;
    }
    for (let myElement of elementList) {
      myElement.runtimeOption.cutIngIs = true;
    }
    this.clipboard.data = elementList;
    this.clipboard.type = "CUT";
    this.clipboard.pasteNumMap = {};
  },
  paste() {
    if (this.clipboard.data == void 0) {
      return;
    }
    const elementList = moveable.getSelectElement();
    const newElementList = [];
    const panel = elementUtil.getCurrentPanel();
    let parent = panel;
    if (elementList.length == 1 && common.elementTypeContainerList.includes(elementList[0].type)) {
      parent = elementList[0];
    }
    let panelPasteNum = getIncr(this.clipboard, panel.id);
    let pasteNum = getIncr(this.clipboard, parent.id);
    let x = devicePixelRatio.px2unit(10) * pasteNum;
    let y = devicePixelRatio.px2unit(10) * pasteNum;
    if (common.elementTypeContainerList.includes(parent.type)) {
      x = -this.clipboard.data[0].x + x;
      y = -this.clipboard.data[0].y + y;
    }
    let incrParent = false;
    let incrPanel = false;
    if (this.clipboard.type == "CUT") {
      for (let myElement of this.clipboard.data) {
        myElement.runtimeOption.cutIngIs = void 0;
      }
      moveable.removeSelectElement(this.clipboard.data);
      this.clipboard.type = "COPY";
      for (let datum of this.clipboard.data) {
        const parentTmp = common.elementTypeContainerList.includes(datum.type) ? elementUtil.getCurrentPanel() : parent;
        computePosition(datum, parentTmp);
        boundElement(datum, parentTmp);
        elementUtil.addElement(elementUtil.getCurrentPanel(), parentTmp, datum);
        newElementList.push(datum);
      }
      historyUtil.record({
        type: "Element",
        action: historyUtil.ActionEnum.CUT,
        elementList: newElementList
      });
    } else {
      for (let i = 0; i < this.clipboard.data.length; i++) {
        let datum = this.clipboard.data[i];
        const parentTmp = common.elementTypeContainerList.includes(datum.type) ? elementUtil.getCurrentPanel() : parent;
        const newElement = utils.parse(utils.stringify(datum, "parent", "target"), {});
        switch (newElement.type) {
          case "SvgPolygonLine":
          case "SvgBezierCurve":
          case "SvgBezierCurveThree":
          case "SvgLine":
            if (newElement.data) {
              const data = JSON.parse(newElement.data);
              const points = data.points;
              const controlPoints = data.controlPoints;
              const dataJson = {};
              if (points) {
                for (let point of points) {
                  point.x = devicePixelRatio.px2unit(point.x, panel);
                  point.y = devicePixelRatio.px2unit(point.y, panel);
                }
                dataJson.points = points;
              }
              if (controlPoints) {
                for (let point of controlPoints) {
                  point.x = devicePixelRatio.px2unit(point.x, panel);
                  point.y = devicePixelRatio.px2unit(point.y, panel);
                }
                dataJson.controlPoints = controlPoints;
              }
              newElement.data = JSON.stringify(dataJson);
            }
        }
        newElement.id = void 0;
        computePosition(newElement, parentTmp);
        boundElement(newElement, parentTmp);
        elementUtil.addElement(elementUtil.getCurrentPanel(), parentTmp, newElement);
        newElementList.push(newElement);
      }
      historyUtil.record({
        type: "Element",
        action: historyUtil.ActionEnum.PASTE,
        elementList: newElementList
      });
    }
    vueDemi.nextTick(() => {
      if (common.elementTypeContainerList.includes(parent.type)) {
        newElementList.length = 0;
        newElementList.push(parent);
      }
      moveable.updatePanel(newElementList);
    });
    if (incrPanel) {
      this.clipboard.pasteNumMap[panel.id]++;
    }
    if (incrParent) {
      this.clipboard.pasteNumMap[parent.id]++;
    }
    function computePosition(newElement, parentTmp) {
      if (parentTmp.type == "Panel") {
        newElement.x = newElement.x + devicePixelRatio.px2unit(10) * panelPasteNum;
        newElement.y = newElement.y + devicePixelRatio.px2unit(10) * panelPasteNum;
        incrPanel = true;
      } else {
        newElement.x = newElement.x + x;
        newElement.y = newElement.y + y;
        incrParent = true;
      }
    }
  }
};

exports.memoryClipboardUtil = memoryClipboardUtil;
//# sourceMappingURL=memoryClipboardUtil.js.map
