import { elementTypeContainerList, fontMap } from '../constants/common.mjs';
import { to, _defaultVal, mitt, generateUUID, parse, stringify } from './utils.mjs';
import { reactive } from 'vue-demi';
import { formatDate } from './timeUtil.mjs';
import { unit2px, px2unit, unit2unit } from './devicePixelRatio.mjs';
import { arrayRemove } from './arrays.mjs';
import { useAppStoreHook } from '../stores/app.mjs';
import { updatePanel } from '../plugins/moveable/moveable.mjs';
import { findTableHeadDeep, recursionHandleTableHead, handleTableCellInitHeight, findUpperCell } from './table/dataTable.mjs';
import MathCalc, { _defaultNum } from './numberUtil.mjs';
import { isNil, isEmpty } from 'lodash';

function displayDesign(element) {
  return !displayPreview(element);
}
function displayPreview(element) {
  return element.runtimeOption.previewIs;
}
function setCurrentPanel(panel) {
  useAppStoreHook().currentPanel = panel;
  useAppStoreHook().lastPageUnit = panel.pageUnit;
}
function getCurrentPanel(panel) {
  return panel != null ? panel : useAppStoreHook().currentPanel;
}
function setPreviewData(previewData) {
  useAppStoreHook().previewData = previewData == null ? [] : previewData;
}
function getPreviewData() {
  return useAppStoreHook().previewData == null ? [] : useAppStoreHook().previewData;
}
function setProvider(provider) {
  if (provider == null) {
    to({}, useAppStoreHook().provider);
  } else {
    to(provider, useAppStoreHook().provider);
  }
}
function getProvider() {
  return useAppStoreHook().provider == null ? {} : useAppStoreHook().provider;
}
function getRecursionParentPanel(element) {
  const panel = element.runtimeOption.parent;
  if (panel == null) {
    return null;
  }
  if (panel.pageUnit != null) {
    return panel;
  }
  return getRecursionParentPanel(panel);
}
function getCurrentPanelUnit(panel) {
  return _defaultVal(getCurrentPanel(panel).pageUnit, "px");
}
function setCurrentElement(element) {
  useAppStoreHook().currentElement = element;
  mitt.emit("changeElement");
}
function valueUnit(value, panel) {
  return value + getCurrentPanel(panel).pageUnit;
}
function widthValueUnit(element) {
  return element.runtimeOption.workEnvironment == "DataTable" ? "100%" : element.width + getCurrentPanel(element.runtimeOption.parent).pageUnit;
}
function heightValueUnit(element) {
  return element.runtimeOption.workEnvironment == "DataTable" ? "100%" : element.height + getCurrentPanel().pageUnit;
}
function getPositionX(element) {
  if (element.runtimeOption.parent.x) {
    return MathCalc.sum(element.x, element.runtimeOption.parent.x);
  }
  return element.x;
}
function getPositionY(element) {
  if (element.runtimeOption.parent.y) {
    return element.y + element.runtimeOption.parent.y;
  }
  return element.y;
}
function width(element) {
  if (["DottedVerticalLine", "VerticalLine"].includes(element.type)) {
    return element.option.borderWidth + 0.6;
  }
  return element.width;
}
function height(element) {
  if (["DottedHorizontalLine", "HorizontalLine"].includes(element.type)) {
    return element.option.borderWidth + 2;
  }
  return element.height;
}
function clearPanel(panel) {
  panel.pageHeader = void 0;
  panel.pageFooter = void 0;
  panel.elementList = [];
  panel.auxiliaryLineList = [];
}
function initPanel(panel, provider) {
  panel.name == null && (panel.name = "\u65B0\u6A21\u7248");
  panel.width == null && (panel.width = _defaultNum(provider.value.width, 210));
  panel.height == null && (panel.height = _defaultNum(provider.value.height, 297));
  panel.pageSize == null && (panel.pageSize = _defaultVal(provider.value.pageSize, "A4"));
  panel.fontSizeUnit == null && (panel.fontSizeUnit = _defaultVal(provider.value.fontSizeUnit, "px"));
  panel.pageUnit == null && (panel.pageUnit = _defaultVal(provider.value.pageUnit, "mm"));
  panel.dragSnapPanelIs == null && (panel.dragSnapPanelIs = provider.value.dragSnapPanelIs);
  panel.dragSnapIs == null && (panel.dragSnapIs = provider.value.dragSnapIs);
  panel.elementList == void 0 && (panel.elementList = []);
  panel.groupList == null && (panel.groupList = []);
  panel.auxiliaryLineList == null && (panel.auxiliaryLineList = []);
}
function none(element) {
  if (element == null) {
    return;
  }
  element.runtimeOption.status = "NONE";
  if (element.elementList != null) {
    for (let childrenElement of element.elementList) {
      none(childrenElement);
    }
  }
}
function handle(element) {
  element.runtimeOption.status = "HANDLE";
}
function recursionForElement(container, callback) {
  recursionElement(container, callback);
  recursionElement(container.pageFooter, callback);
  recursionElement(container.pageHeader, callback);
}
function recursionElement(container, callback) {
  if (container?.elementList?.length > 0) {
    for (let elementTmp of container.elementList) {
      callback(elementTmp);
      recursionElement(elementTmp, callback);
    }
  }
}
function innerElementIs(point, element, parentElement) {
  return !(elementTypeContainerList.includes(element.type) && elementTypeContainerList.includes(parentElement.type)) && point.x >= parentElement.runtimeOption.x && point.x <= parentElement.runtimeOption.x + parentElement.runtimeOption.width && point.y >= parentElement.runtimeOption.y && point.y <= parentElement.runtimeOption.y + parentElement.runtimeOption.height;
}
function parentInitElement(panel, parent, element, index) {
  initElement(panel, element, index);
  installParentElement(parent, element);
  if (element.elementList?.length > 0) {
    for (let i = 0; i < element.elementList.length; i++) {
      let elementTmp = element.elementList[i];
      parentInitElement(panel, element, elementTmp, i);
    }
  }
}
function initElement(panel, element, index) {
  if (element == null) {
    return;
  }
  if (element.option == null) {
    element.option = {};
  }
  if (element.runtimeOption == null) {
    element.runtimeOption = {};
  }
  element.runtimeOption.index = index;
  element.runtimeOption.status = "NONE";
  let initWidth = 0, initHeight = 0, initBorderWidth = 0;
  if (!element.id) {
    element.id = generateUUID();
    switch (element.type) {
      case "Text":
        initWidth = 30;
        initHeight = 8;
        break;
      case "DataTable":
        initWidth = 200;
        initHeight = 30;
        if (element.option.tableHeightType == null) {
          element.option.tableHeightType = "AUTO";
        }
        if (element.tableBodyList == void 0) {
          let indexView = {
            type: "Text",
            field: "autoIncrement",
            width: unit2unit("mm", getCurrentPanelUnit(), 10),
            label: "\u5E8F\u53F7",
            height: element.columnList[0].height,
            option: {
              disableSort: 1,
              disableEnable: 0,
              enable: 1,
              formatter: "{{autoIncrement}}"
            }
          };
          indexView.columnBody = {
            type: "Text",
            height: indexView.height,
            data: "1",
            option: { ...indexView.option }
          };
          element.columnList.unshift(indexView);
          const deep = findTableHeadDeep(element.columnList, 0) + 1;
          const tableHeadListList = [...Array.from({ length: deep }, (_) => [])];
          recursionHandleTableHead(tableHeadListList, element.columnList, 0);
          handleTableCellInitHeight(tableHeadListList);
          element.tableHeadList = tableHeadListList;
          element.tableBodyList = [[]];
          const floorHeaderList = tableHeadListList[deep - 1];
          let maxHeadHeight = -1, maxBodyHeight = -1;
          for (let i = 0; i < floorHeaderList.length; i++) {
            let tableHeadCellElement = floorHeaderList[i];
            if (tableHeadCellElement == null) {
              tableHeadCellElement = findUpperCell(tableHeadListList, i, deep - 1);
            }
            if (tableHeadCellElement == null) {
              continue;
            }
            if (tableHeadCellElement.columnBody == void 0) {
              tableHeadCellElement.columnBody = {
                height: MathCalc.div(tableHeadCellElement.height, tableHeadCellElement.rowspan),
                data: tableHeadCellElement.data,
                type: "Text",
                option: tableHeadCellElement.option
              };
            }
            if (tableHeadCellElement.columnBody.type == null) {
              tableHeadCellElement.columnBody.type = "Text";
            }
            if (tableHeadCellElement.columnBody.data == null) {
              tableHeadCellElement.columnBody.data = tableHeadCellElement.data;
            }
            if (!tableHeadCellElement.columnBody.height) {
              tableHeadCellElement.columnBody.height = MathCalc.div(tableHeadCellElement.height, tableHeadCellElement.rowspan);
            }
            tableHeadCellElement.columnBody.width = tableHeadCellElement.width;
            tableHeadCellElement.type = "Text";
            tableHeadCellElement.data = tableHeadCellElement.label;
            tableHeadCellElement.columnBody.rowspan = 1;
            tableHeadCellElement.columnBody.colspan = 1;
            element.tableBodyList[0].push(tableHeadCellElement.columnBody);
            if (maxHeadHeight < tableHeadCellElement.height) {
              maxHeadHeight = tableHeadCellElement.height;
            }
            if (maxBodyHeight < tableHeadCellElement.columnBody.height) {
              maxBodyHeight = tableHeadCellElement.columnBody.height;
            }
            tableHeadCellElement.columnBody = void 0;
          }
          if (element.option.tableHeightType == "AUTO") {
            element.height = maxHeadHeight + maxBodyHeight;
          }
        }
        break;
      case "Image":
        initWidth = 30;
        initHeight = 30;
        break;
      case "Rect":
        initWidth = 30;
        initHeight = 30;
        initBorderWidth = px2unit(1);
        break;
      case "HorizontalLine":
      case "DottedHorizontalLine":
        initWidth = 30;
        initBorderWidth = px2unit(1);
        initHeight = px2unit(initBorderWidth + 3);
        break;
      case "VerticalLine":
      case "DottedVerticalLine":
        initHeight = 30;
        initBorderWidth = px2unit(1);
        initWidth = px2unit(initBorderWidth + 3);
        break;
      case "SvgPolygonLine":
      case "SvgBezierCurve":
      case "SvgBezierCurveThree":
      case "SvgLine":
        if (element.data) {
          const data = JSON.parse(element.data);
          const points = data.points;
          const controlPoints = data.controlPoints;
          const dataJson = {};
          if (points) {
            for (let point of points) {
              point.x = unit2px(point.x, panel);
              point.y = unit2px(point.y, panel);
            }
            dataJson.points = points;
          }
          if (controlPoints) {
            for (let point of controlPoints) {
              point.x = unit2px(point.x, panel);
              point.y = unit2px(point.y, panel);
            }
            dataJson.controlPoints = controlPoints;
          }
          element.data = JSON.stringify(dataJson);
        }
        break;
    }
  }
  if (element.type == "Text" || element.type == "TextTime") {
    if (!element.contentType) {
      element.contentType = "Text";
    }
  }
  if (element.type == "DataTable") {
    for (let i = 0; i < element.tableHeadList.length; i++) {
      const headList = element.tableHeadList[i];
      for (let j = 0; j < headList.length; j++) {
        const column = headList[j];
        if (column) {
          parentInitElement(panel, element, column, i);
          column.runtimeOption.workEnvironment = "DataTable";
          column.runtimeOption.cellType = "Head";
        }
      }
    }
    for (let i = 0; i < element.tableBodyList.length; i++) {
      const bodyList = element.tableBodyList[i];
      for (let j = 0; j < bodyList.length; j++) {
        parentInitElement(panel, element, bodyList[j], element.tableHeadList.length);
        bodyList[j].runtimeOption.workEnvironment = "DataTable";
        bodyList[j].runtimeOption.cellType = "Body";
      }
    }
    if (!element.statisticsList) {
      element.statisticsList = [];
    }
    for (let i = 0; i < element.statisticsList.length; i++) {
      const statisticsList = element.statisticsList[i];
      for (let j = 0; j < statisticsList.length; j++) {
        parentInitElement(panel, element, statisticsList[j], element.tableHeadList.length);
        statisticsList[j].runtimeOption.workEnvironment = "DataTable";
        statisticsList[j].runtimeOption.cellType = "Statistics";
      }
    }
  }
  if (["Text", "TextTime", "PageNum", "DataTable"].includes(element.type)) {
    if (!element.option.fontFamily) {
      element.option.fontFamily = "heiti";
    }
    if (element.option.fontSize == null) {
      element.option.fontSize = 13;
    }
  }
  if (element.width == null) {
    element.width = initWidth;
  }
  if (element.height == null) {
    element.height = initHeight;
  }
  if (element.option.opacity == null) {
    element.option.opacity = 1;
  }
  if (!element.option.rotate) {
    element.option.rotate = 0;
  }
  if (element.option.padding == null) {
    element.option.padding = {};
  }
  element.runtimeOption.init = {};
  element.runtimeOption.init.runtimeOption = {};
  element.runtimeOption.width = unit2px(element.width, panel);
  element.runtimeOption.height = unit2px(element.height, panel);
  element.runtimeOption.x = unit2px(element.x, panel);
  element.runtimeOption.y = unit2px(element.y, panel);
  element.runtimeOption.rotate = element.option.rotate;
  element.runtimeOption.init.x = element.runtimeOption.x;
  element.runtimeOption.init.y = element.runtimeOption.y;
  element.runtimeOption.init.width = element.runtimeOption.width;
  element.runtimeOption.init.height = element.runtimeOption.height;
  element.runtimeOption.init.runtimeOption.rotate = element.runtimeOption.rotate;
  if (element.option.margin == null) {
    element.option.margin = {};
  }
}
function elementGroup(htmlElementList) {
  const panel = getCurrentPanel();
  const idList = flatIdList(htmlElementList);
  const index = findGroup(idList);
  for (let htmlElementListElement of htmlElementList) {
    htmlElementListElement.element.groupIs = true;
  }
  if (index >= 0) {
    panel.groupList[index] = idList;
  } else {
    panel.groupList.push(idList);
  }
}
function groupListToMap(groupList) {
  const map = {};
  for (let i = 0; i < groupList.length; i++) {
    for (let groupListElement of groupList[i]) {
      map[groupListElement] = i;
    }
  }
  return map;
}
function elementUngroup(htmlElementList) {
  const panel = getCurrentPanel();
  const idList = flatIdList(htmlElementList);
  const index = findGroup(idList);
  for (let htmlElementListElement of htmlElementList) {
    htmlElementListElement.element.groupIs = false;
  }
  if (index >= 0) {
    panel.groupList.splice(index, 1);
  }
}
function elementDown(elementList, layer) {
  elementList.sort(function(a, b) {
    return a.runtimeOption.index - b.runtimeOption.index;
  });
  for (let myElement of elementList) {
    let newLayer = myElement.runtimeOption.index - layer;
    const parentElementList = myElement.runtimeOption.parent.elementList;
    if (newLayer < 0) {
      newLayer = 0;
    }
    const tmp = parentElementList[myElement.runtimeOption.index];
    for (let i = myElement.runtimeOption.index; i > newLayer; i--) {
      parentElementList[i] = parentElementList[i - 1];
      parentElementList[i].runtimeOption.index = i;
    }
    parentElementList[newLayer] = tmp;
    tmp.runtimeOption.index = newLayer;
  }
  updatePanel(elementList);
}
function elementUp(elementList, layer) {
  elementList.sort(function(a, b) {
    return a.runtimeOption.index - b.runtimeOption.index;
  });
  for (let myElement of elementList) {
    let newLayer = myElement.runtimeOption.index + layer;
    const parentElementList = myElement.runtimeOption.parent.elementList;
    if (newLayer > parentElementList.length - 1) {
      newLayer = parentElementList.length - 1;
    }
    const tmp = parentElementList[myElement.runtimeOption.index];
    for (let i = myElement.runtimeOption.index; i < newLayer; i++) {
      parentElementList[i] = parentElementList[i + 1];
      parentElementList[i].runtimeOption.index = i;
    }
    parentElementList[newLayer] = tmp;
    tmp.runtimeOption.index = newLayer;
  }
  updatePanel(elementList);
}
function flatIdList(htmlElementList) {
  const idList = [];
  for (let htmlElementListElement of htmlElementList) {
    if (Array.isArray(htmlElementListElement)) {
      for (let htmlElementListElementElement of htmlElementListElement) {
        idList.push(htmlElementListElementElement.element.id);
      }
    } else {
      idList.push(htmlElementListElement.element.id);
    }
  }
  return idList;
}
function findGroup(idList) {
  const panel = getCurrentPanel();
  for (let i = 0; i < panel.groupList.length; i++) {
    const groupListKey = panel.groupList[i];
    if (groupListKey.some((item) => {
      return idList.includes(item);
    })) {
      return i;
    }
  }
  return -1;
}
function element2PreviewWrapper(element) {
  const previewWrapper = parse(stringify(element, "parent", "target", "elementList", "previewWrapperList", "nestColumnList"), reactive({}));
  previewWrapper.id = generateUUID();
  previewWrapper.heightIs = true;
  previewWrapper.runtimeOption.parent = element.runtimeOption.parent;
  previewWrapper.runtimeOption.previewIs = true;
  if (element.elementList != null) {
    previewWrapper.previewWrapperList = [];
    for (let myElement of element.elementList) {
      previewWrapper.previewWrapperList.push(element2PreviewWrapper(myElement));
    }
  }
  if (element.tableHeadList != null && element.tableHeadList.length > 0) {
    for (let i = 0; i < element.tableHeadList.length; i++) {
      const rowList = element.tableHeadList[i];
      for (let j = 0; j < rowList.length; j++) {
        if (rowList[j] == null) {
          continue;
        }
        previewWrapper.tableHeadList[i][j].runtimeOption.parent = rowList[j].runtimeOption.parent;
      }
    }
  }
  if (element.tableBodyList != null) {
    for (let i = 0; i < element.tableBodyList.length; i++) {
      const rowList = element.tableBodyList[i];
      for (let j = 0; j < rowList.length; j++) {
        if (rowList[j] == null) {
          continue;
        }
        previewWrapper.tableBodyList[i][j].runtimeOption.parent = rowList[j].runtimeOption.parent;
      }
    }
  }
  if (element.statisticsList != null) {
    for (let i = 0; i < element.statisticsList.length; i++) {
      const rowList = element.statisticsList[i];
      for (let j = 0; j < rowList.length; j++) {
        if (rowList[j] == null) {
          continue;
        }
        previewWrapper.statisticsList[i][j].runtimeOption.parent = rowList[j].runtimeOption.parent;
      }
    }
  }
  return previewWrapper;
}
function installPanelParentElement(panel) {
  installParentElement(panel, panel.pageHeader);
  installParentElement(panel, panel.pageFooter);
  installListParentElement(panel, panel.elementList);
}
function installListParentElement(parent, elementList) {
  for (let element of elementList) {
    installParentElement(parent, element);
    if (element.type == "DataTable") {
      for (let tableHeadListElement of element.tableHeadList) {
        for (let tableCellElement of tableHeadListElement) {
          installParentElement(element, tableCellElement);
        }
      }
      for (let tableHeadListElement of element.tableBodyList) {
        for (let tableCellElement of tableHeadListElement) {
          installParentElement(element, tableCellElement);
        }
      }
      for (let tableHeadListElement of element.statisticsList) {
        for (let tableCellElement of tableHeadListElement) {
          installParentElement(element, tableCellElement);
        }
      }
    }
    if (element.elementList != null) {
      installListParentElement(element, element.elementList);
    }
  }
}
function installParentElement(parent, element) {
  if (!element) {
    return;
  }
  element.runtimeOption.parent = parent;
}
function clearParent(element) {
  if (element.runtimeOption == null || element.runtimeOption.parent == void 0) {
    return;
  }
  element.runtimeOption.parent = void 0;
}
function addElement(panel, parent, element) {
  if (parent.elementList == null) {
    parent.elementList = [];
  }
  parent.elementList.push(element);
  initElement(panel, element, parent.elementList.length - 1);
  installParentElement(parent, element);
}
function removeElement(element) {
  if (element.runtimeOption.parent == null) {
    return;
  }
  if (element.runtimeOption.parent.elementList == null) {
    return;
  }
  handleElementType(element).handle(
    "PageHeader",
    () => element.runtimeOption.parent.pageHeader = void 0
  ).handle(
    "PageFooter",
    () => element.runtimeOption.parent.pageFooter = void 0
  ).end(() => {
    arrayRemove(element.runtimeOption.parent.elementList, element);
  });
}
function handleElementType(element) {
  const handleList = [];
  const handlers = {
    handle(type, callback) {
      handleList.push(type);
      if (element.type === type) {
        callback();
      }
      return handlers;
    },
    pageHeader(callback) {
      handleList.push("PageHeader");
      if (isPageHeader(element)) {
        callback();
      }
      return handlers;
    },
    pageFooter(callback) {
      handleList.push("PageFooter");
      if (isPageFooter(element)) {
        callback();
      }
      return handlers;
    },
    end(callback) {
      if (!handleList.includes(element.type)) {
        callback();
      }
    }
  };
  return handlers;
}
function getFontSizeUnit(panel) {
  const currentPanel = getCurrentPanel(panel);
  return currentPanel.fontSizeUnit == null ? "px" : currentPanel.fontSizeUnit;
}
function defaultPreviewData(previewData) {
  return previewData == null || previewData.length == 0 ? [{}] : previewData;
}
function elementCommonPositionStyle(element) {
  const fontFamily = element.option.fontFamily || "heiti";
  return {
    // width: element.runtimeOption.width + 'px',
    // left: element.runtimeOption.x + 'px',
    // top: element.runtimeOption.y + 'px',
    // maxWidth: widthValueUnit(element),
    // height: element.runtimeOption.height + 'px',
    // maxHeight: heightValueUnit(element),
    fontFamily: fontMap[fontFamily],
    fontSize: element.option.fontSize + getFontSizeUnit(getRecursionParentPanel(element))
  };
}
function elementBarCodeValueStyle(element, cssStyle) {
  if (cssStyle == null) {
    cssStyle = {};
  }
  const option = element.option;
  const panel = element.runtimeOption.parent;
  let textDecoration = "";
  if (option.underline) {
    textDecoration = textDecoration + "underline ";
  }
  if (option.lineThrough) {
    textDecoration = textDecoration + "line-through ";
  }
  option.opacity != null && (cssStyle.opacity = option.opacity);
  option.color && (cssStyle.color = option.color);
  option.background && (cssStyle.background = option.background);
  option.bold && (cssStyle.fontWeight = option.bold ? "bold" : "normal");
  textDecoration && (cssStyle.textDecoration = textDecoration);
  option.italic && (cssStyle.fontStyle = option.italic ? "italic" : "normal");
  if (option.textAlign) {
    cssStyle.justifyContent = option.textAlign;
  }
  if (option.lineBreak == 0) {
    cssStyle.whiteSpace = "nowrap";
  }
  if (option.lineHeight != null) {
    cssStyle.lineHeight = valueUnit(option.lineHeight, panel);
  }
  if (option.verticalAlign) {
    cssStyle.alignItems = option.verticalAlign;
  }
  return cssStyle;
}
function elementCommonStyle(element, cssStyle) {
  if (cssStyle == null) {
    cssStyle = elementCommonPositionStyle(element);
  }
  const option = element.option;
  const panel = getRecursionParentPanel(element);
  let textDecoration = "";
  if (option.underline) {
    textDecoration = textDecoration + "underline ";
  }
  if (option.lineThrough) {
    textDecoration = textDecoration + "line-through ";
  }
  option.opacity != null && (cssStyle.opacity = option.opacity);
  option.color && (cssStyle.color = option.color);
  option.background && (cssStyle.background = option.background);
  option.bold && (cssStyle.fontWeight = option.bold ? "bold" : "normal");
  textDecoration && (cssStyle.textDecoration = textDecoration);
  option.italic && (cssStyle.fontStyle = option.italic ? "italic" : "normal");
  if (option.textAlign) {
    cssStyle.justifyContent = option.textAlign;
  }
  if (option.lineBreak == 0) {
    cssStyle.whiteSpace = "nowrap";
  }
  if (option.lineHeight != null) {
    cssStyle.lineHeight = valueUnit(option.lineHeight, panel);
  }
  if (option.verticalAlign) {
    cssStyle.alignItems = option.verticalAlign;
  }
  if (element.runtimeOption.workEnvironment == "DataTable") {
    let extHeight = 0;
    const parent = element.runtimeOption.parent;
    if (parent != null) {
      if (parent.option.borderAll) {
        if (element.rowspan > 1) {
          extHeight = element.rowspan - 1;
        }
      }
      if (parent.option.tableBodyHeightType == "FIXED") {
        cssStyle.height = element.runtimeOption.init.height + extHeight + "px";
        cssStyle.maxHeight = element.runtimeOption.init.height + extHeight + "px";
        cssStyle.overflow = "hidden";
      }
    } else {
    }
    if (element.type == "Text" && element.contentType == "Barcode") {
      cssStyle.width = element.runtimeOption.width + "px";
      cssStyle.maxWidth = element.runtimeOption.width + "px";
    }
  } else {
    if (option.borderAll) {
      cssStyle.border = "1px solid black";
      cssStyle.boxSizing = "border-box";
    }
  }
  if (!isNil(option.borderRadius)) {
    cssStyle.borderRadius = valueUnit(option.borderRadius, panel);
  }
  if (!isNil(option.padding)) {
    if (option.padding.top) cssStyle.paddingTop = valueUnit(option.padding.top, panel);
    if (option.padding.bottom) cssStyle.paddingBottom = valueUnit(option.padding.bottom, panel);
    if (option.padding.left) cssStyle.paddingLeft = valueUnit(option.padding.left, panel);
    if (option.padding.right) cssStyle.paddingRight = valueUnit(option.padding.right, panel);
  }
  if (option.margin) {
    let subWidth = 0, subHeight = 0;
    if (option.margin.top) {
      cssStyle.marginTop = valueUnit(option.margin.top, panel);
      subHeight += unit2px(option.margin.top, panel);
    }
    if (option.margin.bottom) {
      cssStyle.marginBottom = valueUnit(option.margin.bottom, panel);
      subHeight += unit2px(option.margin.bottom, panel);
    }
    if (option.margin.left) {
      cssStyle.marginLeft = valueUnit(option.margin.left, panel);
      subWidth += unit2px(option.margin.left, panel);
    }
    if (option.margin.right) {
      cssStyle.marginRight = valueUnit(option.margin.right, panel);
      subWidth += unit2px(option.margin.right, panel);
    }
    if (subWidth > 0) {
      cssStyle.width = `calc(100% - ${subWidth}px)`;
    }
    if (subHeight > 0) {
      cssStyle.height = `calc(100% - ${subHeight}px)`;
    }
  }
  return cssStyle;
}
function isPageHeader(element) {
  return element != null && element.type == "PageHeader";
}
function isPageFooter(element) {
  return element != null && element.type == "PageFooter";
}
function formatter(element, variable = {}) {
  if (element.option.formatter) {
    let contentData;
    if (element.type == "TextTime") {
      const variableNames = extractVariableNames(element.option.formatter);
      if (variableNames == null || variableNames.length == 0) {
        contentData = "\u4E0D\u652F\u6301\u7684\u53D8\u91CF";
      } else {
        try {
          variable[variableNames[0]] = formatDate(variable.nowDate ? variable.nowDate : /* @__PURE__ */ new Date(), variableNames[0]);
          contentData = replaceVariables(element.option.formatter, variable);
        } catch (e) {
          contentData = "\u4E0D\u652F\u6301\u7684\u53D8\u91CF";
        }
      }
    } else {
      contentData = replaceVariables(element.option.formatter, variable);
    }
    return contentData;
  }
  return element.data;
}
function extractVariableNames(template) {
  const regex = /\{\{(.+?)}}/g;
  const matches = template.match(regex);
  if (!matches) {
    return [];
  }
  return matches.map((match) => match.slice(2, -2));
}
function parseVariables(str) {
  const regex = /\{\{(.*?)}}/g;
  const matches = str.match(regex);
  if (!matches) {
    return [];
  }
  const variables = [];
  for (const match of matches) {
    const parts = match.slice(2, -2).split("::");
    const name = parts[0].trim();
    const defaultValue = parts[1] ? parts[1].trim() : "";
    variables.push({ name, defaultValue });
  }
  return variables;
}
function replaceVariables(str, params) {
  let result = str;
  const variables = parseVariables(str);
  for (const variable of variables) {
    const { name, defaultValue } = variable;
    const value = params[name] !== void 0 ? params[name] : defaultValue;
    result = result.replace(new RegExp(isEmpty(defaultValue) ? `{{${name}}}` : `{{${name}::${defaultValue}}}`, "g"), value);
  }
  return result;
}
function changePageSize(val) {
  const panel = getCurrentPanel();
  if (val) {
    panel.width = unit2unit("mm", panel.pageUnit, val.width);
    panel.height = unit2unit("mm", panel.pageUnit, val.height);
  }
  if (panel.pageHeader != null) {
    panel.pageHeader.width = unit2unit("mm", panel.pageUnit, panel.width);
    panel.pageHeader.runtimeOption.width = unit2px(panel.width);
  }
  if (panel.pageFooter != null) {
    panel.pageFooter.width = unit2unit("mm", panel.pageUnit, panel.width);
    panel.pageFooter.y = unit2unit("mm", panel.pageUnit, panel.height - panel.pageFooter.height);
    panel.pageFooter.runtimeOption.width = unit2px(panel.width);
  }
  mitt.emit("changePageSize");
}
function changePageUnit() {
  const panel = getCurrentPanel();
  panel.width = unit2unit(useAppStoreHook().lastPageUnit, panel.pageUnit, panel.width);
  panel.height = unit2unit(useAppStoreHook().lastPageUnit, panel.pageUnit, panel.height);
  const { pageHeader, pageFooter, pageUnit } = panel;
  for (let element of panel.elementList) {
    computedChangePageUnit(pageUnit, element);
  }
  if (pageHeader) {
    computedChangePageUnit(pageUnit, pageHeader);
  }
  if (pageFooter) {
    computedChangePageUnit(pageUnit, pageFooter);
  }
  useAppStoreHook().lastPageUnit = panel.pageUnit;
}
function computedChangePageUnit(pageUnit, element) {
  element.x = unit2unit(useAppStoreHook().lastPageUnit, pageUnit, element.x);
  element.y = unit2unit(useAppStoreHook().lastPageUnit, pageUnit, element.y);
  element.width = unit2unit(useAppStoreHook().lastPageUnit, pageUnit, element.width);
  element.height = unit2unit(useAppStoreHook().lastPageUnit, pageUnit, element.height);
  if (element.option.lineHeight != null) {
    element.option.lineHeight = unit2unit(useAppStoreHook().lastPageUnit, pageUnit, element.option.lineHeight);
  }
  if (element.elementList) {
    for (let myElement of element.elementList) {
      computedChangePageUnit(pageUnit, myElement);
    }
  }
}
function computedShapeBound(points) {
  let minX = points[0].x;
  let minY = points[0].y;
  let maxX = points[0].x;
  let maxY = points[0].y;
  for (let i = 1; i < points.length; i++) {
    let point = points[i];
    minX = Math.min(minX, point.x);
    minY = Math.min(minY, point.y);
    maxX = Math.max(maxX, point.x);
    maxY = Math.max(maxY, point.y);
  }
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  };
}
function setElementWidthHeightPx(width2, height2, element) {
  setElementWidthPx(width2, element);
  setElementHeightPx(height2, element);
}
function setElementWidthPx(width2, element) {
  element.runtimeOption.width = width2;
  element.runtimeOption.init.width = width2;
  element.width = px2unit(width2, getRecursionParentPanel(element));
}
function setElementHeightPx(height2, element) {
  element.runtimeOption.height = height2;
  element.runtimeOption.init.height = height2;
  element.height = px2unit(height2, getRecursionParentPanel(element));
}
function setElementOffsetWidthPx(offsetWidth, element) {
  element.runtimeOption.width = element.runtimeOption.init.width + offsetWidth;
  element.width = px2unit(element.runtimeOption.width, getRecursionParentPanel(element));
}
function recursionUpdateCellParentWidth(columnElement, offsetX, panel) {
  columnElement.runtimeOption.width = columnElement.runtimeOption.init.width + offsetX;
  columnElement.width = px2unit(columnElement.runtimeOption.width, panel);
  if (columnElement.runtimeOption.cellParent != null) {
    recursionUpdateCellParentWidth(columnElement.runtimeOption.cellParent, offsetX, panel);
  }
}
function recursionUpdateCellParentInitWidth(columnElement) {
  columnElement.runtimeOption.init.width = columnElement.runtimeOption.width;
  if (columnElement.runtimeOption.cellParent != null) {
    recursionUpdateCellParentInitWidth(columnElement.runtimeOption.cellParent);
  }
}
function multipleElementGetValueList(props) {
  const elementList = useAppStoreHook().currentElement;
  const valueList = /* @__PURE__ */ new Set();
  if (elementList.length == 0) {
    return [...valueList];
  }
  for (let currentElementElement of elementList) {
    valueList.add(getNestedPropertyValue(currentElementElement, props));
  }
  return [...valueList];
}
function multipleElementGetValue(props) {
  const elementList = useAppStoreHook().currentElement;
  if (elementList.length == 0) {
    return void 0;
  }
  const firstValue = getNestedPropertyValue(elementList[0], props);
  for (let currentElementElement of elementList) {
    if (getNestedPropertyValue(currentElementElement, props) != firstValue) {
      return void 0;
    }
  }
  return firstValue;
}
function getNestedPropertyValue(obj, propertyPath) {
  const properties = propertyPath.split(".");
  let currentObj = obj;
  for (let prop of properties) {
    if (currentObj.hasOwnProperty(prop)) {
      currentObj = currentObj[prop];
    } else {
      return void 0;
    }
  }
  return currentObj;
}
function setNestedPropertyValue(obj, propertyPath, value) {
  const properties = propertyPath.split(".");
  let currentObj = obj;
  for (let i = 0; i < properties.length - 1; i++) {
    if (!currentObj.hasOwnProperty(properties[i])) {
      currentObj[properties[i]] = {};
    }
    currentObj = currentObj[properties[i]];
  }
  currentObj[properties[properties.length - 1]] = value;
}
function multipleElementSetValue(props, val) {
  for (let currentElementElement of useAppStoreHook().currentElement) {
    setNestedPropertyValue(currentElementElement, props, val);
    if (currentElementElement.type == "DataTable") {
      for (let myElement of currentElementElement.tableHeadList) {
        for (let tableCellElement of myElement) {
          if (tableCellElement != null) {
            setNestedPropertyValue(tableCellElement, props, val);
          }
        }
      }
      for (let bodyRowList of currentElementElement.tableBodyList) {
        for (let myElement of bodyRowList) {
          setNestedPropertyValue(myElement, props, val);
        }
      }
      for (let bodyRowList of currentElementElement.statisticsList) {
        for (let myElement of bodyRowList) {
          setNestedPropertyValue(myElement, props, val);
        }
      }
    }
  }
}
function autoComputedPanelHeight() {
  const panel = getCurrentPanel();
  if (panel.pageSize != "AutoHeight") {
    return;
  }
  if (panel.elementList == null || panel.elementList.length == 0) {
    return;
  }
  let maxY = 0;
  for (let myElement of panel.elementList) {
    const tmpY = myElement.y + myElement.height;
    maxY = Math.max(tmpY, maxY);
  }
  panel.height = maxY;
}
function getPrintRealHeight(panel) {
  panel = getCurrentPanel(panel);
  if (panel.pageSize == "AutoHeight") {
    return panel.runtimeOption.printRealHeight;
  }
  return panel.height;
}

export { addElement, autoComputedPanelHeight, changePageSize, changePageUnit, clearPanel, clearParent, computedShapeBound, defaultPreviewData, displayDesign, displayPreview, element2PreviewWrapper, elementBarCodeValueStyle, elementCommonPositionStyle, elementCommonStyle, elementDown, elementGroup, elementUngroup, elementUp, extractVariableNames, formatter, getCurrentPanel, getCurrentPanelUnit, getPositionX, getPositionY, getPreviewData, getPrintRealHeight, getProvider, getRecursionParentPanel, groupListToMap, handle, handleElementType, height, heightValueUnit, initElement, initPanel, innerElementIs, installListParentElement, installPanelParentElement, installParentElement, isPageFooter, isPageHeader, multipleElementGetValue, multipleElementGetValueList, multipleElementSetValue, none, parentInitElement, recursionElement, recursionForElement, recursionUpdateCellParentInitWidth, recursionUpdateCellParentWidth, removeElement, replaceVariables, setCurrentElement, setCurrentPanel, setElementHeightPx, setElementOffsetWidthPx, setElementWidthHeightPx, setElementWidthPx, setPreviewData, setProvider, valueUnit, width, widthValueUnit };
//# sourceMappingURL=elementUtil.mjs.map
