import { getSelectElement, removeSelectElement, updatePanel } from '../plugins/moveable/moveable.mjs';
import { noCopyElementTypeList, elementTypeContainerList } from '../constants/common.mjs';
import { getCurrentPanel, addElement } from './elementUtil.mjs';
import { parse, stringify } from './utils.mjs';
import { record, ActionEnum } from './historyUtil.mjs';
import { nextTick } from 'vue-demi';
import { px2unit } from './devicePixelRatio.mjs';

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
    const elementList = getSelectElement().filter((v) => !noCopyElementTypeList.includes(v.type));
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
    const elementList = getSelectElement().filter((v) => !noCopyElementTypeList.includes(v.type));
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
    const elementList = getSelectElement();
    const newElementList = [];
    const panel = getCurrentPanel();
    let parent = panel;
    if (elementList.length == 1 && elementTypeContainerList.includes(elementList[0].type)) {
      parent = elementList[0];
    }
    let panelPasteNum = getIncr(this.clipboard, panel.id);
    let pasteNum = getIncr(this.clipboard, parent.id);
    let x = px2unit(10) * pasteNum;
    let y = px2unit(10) * pasteNum;
    if (elementTypeContainerList.includes(parent.type)) {
      x = -this.clipboard.data[0].x + x;
      y = -this.clipboard.data[0].y + y;
    }
    let incrParent = false;
    let incrPanel = false;
    if (this.clipboard.type == "CUT") {
      for (let myElement of this.clipboard.data) {
        myElement.runtimeOption.cutIngIs = void 0;
      }
      removeSelectElement(this.clipboard.data);
      this.clipboard.type = "COPY";
      for (let datum of this.clipboard.data) {
        const parentTmp = elementTypeContainerList.includes(datum.type) ? getCurrentPanel() : parent;
        computePosition(datum, parentTmp);
        boundElement(datum, parentTmp);
        addElement(getCurrentPanel(), parentTmp, datum);
        newElementList.push(datum);
      }
      record({
        type: "Element",
        action: ActionEnum.CUT,
        elementList: newElementList
      });
    } else {
      for (let i = 0; i < this.clipboard.data.length; i++) {
        let datum = this.clipboard.data[i];
        const parentTmp = elementTypeContainerList.includes(datum.type) ? getCurrentPanel() : parent;
        const newElement = parse(stringify(datum, "parent", "target"), {});
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
                  point.x = px2unit(point.x, panel);
                  point.y = px2unit(point.y, panel);
                }
                dataJson.points = points;
              }
              if (controlPoints) {
                for (let point of controlPoints) {
                  point.x = px2unit(point.x, panel);
                  point.y = px2unit(point.y, panel);
                }
                dataJson.controlPoints = controlPoints;
              }
              newElement.data = JSON.stringify(dataJson);
            }
        }
        newElement.id = void 0;
        computePosition(newElement, parentTmp);
        boundElement(newElement, parentTmp);
        addElement(getCurrentPanel(), parentTmp, newElement);
        newElementList.push(newElement);
      }
      record({
        type: "Element",
        action: ActionEnum.PASTE,
        elementList: newElementList
      });
    }
    nextTick(() => {
      if (elementTypeContainerList.includes(parent.type)) {
        newElementList.length = 0;
        newElementList.push(parent);
      }
      updatePanel(newElementList);
    });
    if (incrPanel) {
      this.clipboard.pasteNumMap[panel.id]++;
    }
    if (incrParent) {
      this.clipboard.pasteNumMap[parent.id]++;
    }
    function computePosition(newElement, parentTmp) {
      if (parentTmp.type == "Panel") {
        newElement.x = newElement.x + px2unit(10) * panelPasteNum;
        newElement.y = newElement.y + px2unit(10) * panelPasteNum;
        incrPanel = true;
      } else {
        newElement.x = newElement.x + x;
        newElement.y = newElement.y + y;
        incrParent = true;
      }
    }
  }
};

export { memoryClipboardUtil };
//# sourceMappingURL=memoryClipboardUtil.mjs.map
