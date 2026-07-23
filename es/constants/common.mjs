import { displayStrategyFormat, statisticsTypeFormat } from '../types/entity.mjs';
import { reactive } from 'vue-demi';
import { i18n } from '../locales/index.mjs';

const defaultElement = [];
const canMoveStatusList = ["SELECT", "HANDLE"];
const fontMap = {
  heiti: "'Microsoft YaHei'",
  //微软雅黑
  SimSun: "'SimSun','STSong','Songti SC'",
  //宋体
  kaiti: "'KaiTi','SimKai', 'STKaiti', 'KaiTi SC'",
  // 楷体
  // heiti: "'Microsoft YaHei'", //微软雅黑
  FZShuTi: "'FZShuTi'",
  //华文舒体
  NSimSun: "'NSimSun'",
  //新宋体
  DengXian: "'DengXian'"
  //等线
  // todo 自定义字体
};
const fontList = [
  [
    {
      label: "\u5FAE\u8F6F\u96C5\u9ED1",
      value: "heiti"
    },
    {
      label: "\u5B8B\u4F53",
      value: "SimSun"
    },
    {
      label: "\u6977\u4F53",
      value: "kaiti"
    },
    {
      label: "\u534E\u6587\u8212\u4F53",
      value: "FZShuTi"
    },
    {
      label: "\u65B0\u5B8B\u4F53",
      value: "NSimSun"
    },
    {
      label: "\u7B49\u7EBF",
      value: "DengXian"
    }
  ]
];
const fontSizeList = [
  [
    {
      label: "8",
      value: 8
    },
    {
      label: "9",
      value: 9
    },
    {
      label: "10",
      value: 10
    },
    {
      label: "18",
      value: 18
    }
  ]
];
const definePropType = (val) => val;
const commonElementSetting = ["x", "y", "width", "height", "opacity", "rotate"];
const styleElementSetting = ["textAlign", "verticalAlign", "borderAll", "color", "background", "bold", "italic", "underline", "lineThrough", "fontFamily", "fontSize"];
const elementSetting = {
  Image: [...commonElementSetting, "common", "borderRadius"],
  Text: [...commonElementSetting, ...styleElementSetting, "common", "autoTextHeight", "lineHeight", "fontFamily", "fontSize", "borderRadius", "color", "hiddenLabel", "contentType", "padding", "margin", "data", "label", "lineBreak", "qrCodeScale", "qrErrorCorrectionLevel"],
  TextTime: [...commonElementSetting, ...styleElementSetting, "common", "lineHeight", "fontFamily", "fontSize", "borderRadius", "color", "hiddenLabel", "formatter", "padding", "margin", "label"],
  Panel: [...commonElementSetting, "common"],
  DataTable: [...commonElementSetting.filter((item) => item !== "rotate"), ...styleElementSetting, "tableHeightAttr", "tableBodyHeightType", "tablePageHead", "common"],
  FreeTable: [...commonElementSetting.filter((item) => item !== "rotate"), ...styleElementSetting, "common"],
  Rect: [...commonElementSetting, "common", "borderRadius", "color", "background", "lineWidth"],
  HorizontalLine: [...commonElementSetting, "common", "color", "lineHeight", "lineWidth"],
  DottedHorizontalLine: [...commonElementSetting, "common", "color", "lineHeight", "dottedStyle", "lineWidth"],
  VerticalLine: [...commonElementSetting, "common", "color", "lineHeight", "lineWidth"],
  DottedVerticalLine: [...commonElementSetting, "common", "color", "lineHeight", "dottedStyle", "lineWidth"],
  Container: [...commonElementSetting, "common"],
  PageHeader: [...commonElementSetting, "common"],
  PageFooter: [...commonElementSetting, "common"],
  PageNum: [...commonElementSetting, ...styleElementSetting, "common", "formatter", "borderRadius"],
  SvgPolygonLine: ["common", "color", "background", "x", "y", "opacity"],
  SvgCircle: ["common", "color", "background", "x", "y", "opacity"],
  SvgEllipse: ["common", "color", "background", "x", "y", "opacity"],
  SvgLine: ["common", "color", "background", "x", "y", "opacity"],
  SvgBezierCurve: ["common", "color", "background", "x", "y", "opacity"],
  SvgBezierCurveThree: ["common", "color", "background", "x", "y", "opacity"],
  DrawPanel: ["common", "color", "background", "borderAll", "x", "y", "opacity", "clearDrawPanel"]
};
function getElementSetting(type) {
  const settingList = elementSetting[type];
  if (settingList) {
    return settingList;
  }
  return [];
}
function hasStyle(type, style) {
  const ele = elementSetting[type];
  if (ele) {
    return ele.includes(style);
  }
  return false;
}
function hasStyleByTypeList(typeList, style) {
  if (typeList == void 0 || typeList.length == 0) {
    return false;
  }
  for (let typeListElement of typeList) {
    const ele = elementSetting[typeListElement];
    if (!ele) {
      return false;
    }
    if (!ele.includes(style)) {
      return false;
    }
  }
  return true;
}
const textContentTypes = [
  {
    "label": i18n("common.text"),
    "value": "Text"
  },
  {
    "label": i18n("common.barcode"),
    "value": "Barcode"
  },
  {
    "label": i18n("common.qrcode"),
    "value": "QrCode"
  }
];
const barcodeTypes = [
  {
    "label": "CODE128",
    "value": "CODE128",
    "eg": i18n("CODE128")
  },
  {
    "label": "CODE128A",
    "value": "CODE128A",
    "eg": i18n("CODE128A")
  },
  {
    "label": "CODE128B",
    "value": "CODE128B",
    "eg": i18n("CODE128B")
  },
  {
    "label": "CODE128C",
    "value": "CODE128C",
    "eg": i18n("CODE128C")
  },
  {
    "label": "CODE39",
    "value": "CODE39",
    "eg": i18n("CODE39")
  },
  {
    "label": "EAN2",
    "value": "EAN2",
    "eg": i18n("EAN2")
  },
  {
    "label": "EAN5",
    "value": "EAN5",
    "eg": i18n("EAN5")
  },
  {
    "label": "EAN8",
    "value": "EAN8",
    "eg": i18n("EAN8")
  },
  {
    "label": "EAN13",
    "value": "EAN13",
    "eg": i18n("EAN13")
  },
  {
    "label": "UPC",
    "value": "UPC",
    "eg": i18n("UPC")
  },
  {
    "label": "UPC-E",
    "value": "UPC_E",
    "eg": i18n("UPC-E")
  },
  {
    "label": "ITF",
    "value": "ITF",
    "eg": i18n("ITF")
  },
  {
    "label": "ITF14",
    "value": "ITF14",
    "eg": i18n("ITF14")
  },
  {
    "label": "MSI",
    "value": "MSI",
    "eg": i18n("MSI")
  },
  {
    "label": "MSI10",
    "value": "MSI10",
    "eg": i18n("MSI10")
  },
  {
    "label": "MSI11",
    "value": "MSI11",
    "eg": i18n("MSI11")
  },
  {
    "label": "MSI1010",
    "value": "MSI1010",
    "eg": i18n("MSI1010")
  },
  {
    "label": "MSI1110",
    "value": "MSI1110",
    "eg": i18n("MSI1110")
  },
  {
    "label": "codabar",
    "value": "codabar",
    "eg": i18n("codabar")
  },
  {
    "label": "pharmacode",
    "value": "pharmacode",
    "eg": i18n("pharmacode")
  }
];
const handleConstants = {
  tl: { id: "tl", index: 0, class: "bg-none l t", x: null, y: null, width: 0, height: 0 },
  tm: { id: "tm", index: 1, class: "t center-h", x: null, y: null, width: 0, height: 0 },
  tr: { id: "tr", index: 2, class: "bg-none r t", x: null, y: null, width: 0, height: 0 },
  rm: { id: "rm", index: 3, class: "r", x: null, y: null, width: 0, height: 0 },
  br: { id: "br", index: 4, class: "bg-none r b", x: null, y: null, width: 0, height: 0 },
  bm: { id: "bm", index: 5, class: "b", x: null, y: null, width: 0, height: 0 },
  bl: { id: "bl", index: 6, class: "bg-none l b", x: null, y: null, width: 0, height: 0 },
  lm: { id: "lm", index: 7, class: "l", x: null, y: null, width: 0, height: 0 },
  rot: { id: "rot", index: 8, class: "l", x: null, y: null, width: 0, height: 0 }
};
const cursorStyleArray = [
  "nwse-resize",
  "ns-resize",
  "nesw-resize",
  "ew-resize",
  "nwse-resize",
  "ns-resize",
  "nesw-resize",
  "ew-resize"
];
const elementTypeLineList = ["HorizontalLine", "DottedHorizontalLine", "VerticalLine", "DottedVerticalLine"];
const elementTypeContainerList = ["PageHeader", "PageFooter", "Container"];
const elementHandleEditStatusList = ["HANDLE_ED", "HANDLE_EDIT_ING"];
const elementHandleHandleStatusList = ["HANDLE", "HANDLE_ED"];
const elementHandleStatusList = ["HANDLE", "HANDLE_ED", "HANDLE_EDIT_ING"];
const noCopyElementTypeList = ["PageHeader", "PageFooter"];
const displayStrategyList = Object.keys(displayStrategyFormat).map((key) => {
  return {
    label: displayStrategyFormat[key],
    value: key
  };
});
const statisticsTypeList = Object.keys(statisticsTypeFormat).map((key) => {
  return {
    label: statisticsTypeFormat[key],
    value: key
  };
});
const chooseImgTypeList = reactive([
  { value: "localFile", label: i18n("common.local.upload") },
  { value: "url", label: i18n("common.image.url") }
]);
const tableBodyHeightTypeList = reactive([
  { value: "AUTO", label: i18n("common.auto") },
  { value: "FIXED", label: i18n("common.fixed") }
]);
const pageUnitList = [
  [{
    label: "px",
    value: "px"
  }, {
    label: "mm",
    value: "mm"
  }, {
    label: "cm",
    value: "cm"
  }]
];
const fontSizeUnitList = [
  [{
    label: "px",
    value: "px"
  }, {
    label: "pt",
    value: "pt"
  }]
];
const clientProtocolList = [
  {
    label: "myprint",
    value: "ws://127.0.0.1:8888"
  },
  {
    label: "lodop",
    value: "ws://127.0.0.1:8000"
  },
  {
    label: "hiprint",
    value: "ws://127.0.0.1:8888"
  }
];
const pageSizeList = [
  {
    label: i18n("common.auto.height"),
    value: "AutoHeight",
    width: 100,
    height: 200
  },
  {
    label: i18n("common.custom"),
    value: "Custom",
    width: 150,
    height: 150
  },
  {
    "label": "A0",
    "value": "A0",
    "width": 841,
    "height": 1189
  },
  {
    "label": "A1",
    "value": "A1",
    "width": 594,
    "height": 841
  },
  {
    "label": "A2",
    "value": "A2",
    "width": 420,
    "height": 594
  },
  {
    "label": "A3",
    "value": "A3",
    "width": 297,
    "height": 420
  },
  {
    "label": "A4",
    "value": "A4",
    "width": 210,
    "height": 297
  },
  {
    "label": "A5",
    "value": "A5",
    "width": 148,
    "height": 210
  },
  {
    "label": "A6",
    "value": "A6",
    "width": 105,
    "height": 148
  },
  {
    "label": "A7",
    "value": "A7",
    "width": 74,
    "height": 105
  },
  {
    "label": "A8",
    "value": "A8",
    "width": 52,
    "height": 74
  },
  {
    "label": "B5",
    "value": "B5",
    "width": 176,
    "height": 250
  },
  {
    "label": "B6",
    "value": "B6",
    "width": 125,
    "height": 176
  },
  {
    "label": "B7",
    "value": "B7",
    "width": 88,
    "height": 125
  },
  {
    "label": "C5",
    "value": "C5",
    "width": 162,
    "height": 229
  },
  {
    "label": "C6",
    "value": "C6",
    "width": 114,
    "height": 162
  },
  {
    "label": "C7",
    "value": "C7",
    "width": 81,
    "height": 114
  }
];
const dottedStyleList = [
  {
    "label": i18n("common.dotted"),
    "value": "dotted"
  },
  {
    "label": i18n("common.dashed"),
    "value": "dashed"
  }
];
const qrCodeErrorCorrectionLevel = [
  {
    "label": i18n("common.qr.errorCorrectionLevel.low"),
    "value": "L"
  },
  {
    "label": i18n("common.qr.errorCorrectionLevel.medium"),
    "value": "M"
  },
  {
    "label": i18n("common.qr.errorCorrectionLevel.quartile"),
    "value": "Q"
  },
  {
    "label": i18n("common.qr.errorCorrectionLevel.high"),
    "value": "H"
  }
];

export { barcodeTypes, canMoveStatusList, chooseImgTypeList, clientProtocolList, cursorStyleArray, defaultElement, definePropType, displayStrategyList, dottedStyleList, elementHandleEditStatusList, elementHandleHandleStatusList, elementHandleStatusList, elementTypeContainerList, elementTypeLineList, fontList, fontMap, fontSizeList, fontSizeUnitList, getElementSetting, handleConstants, hasStyle, hasStyleByTypeList, noCopyElementTypeList, pageSizeList, pageUnitList, qrCodeErrorCorrectionLevel, statisticsTypeList, tableBodyHeightTypeList, textContentTypes };
//# sourceMappingURL=common.mjs.map
