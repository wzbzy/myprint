'use strict';

var index = require('../locales/index.js');

const elementTypeFormat = {
  Panel: index.i18n("provider.panel"),
  Text: index.i18n("provider.text"),
  TextTime: index.i18n("provider.text.time"),
  Image: index.i18n("provider.image"),
  DataTable: index.i18n("provider.data.table"),
  FreeTable: index.i18n("provider.free.table"),
  Rect: index.i18n("provider.rect"),
  HorizontalLine: index.i18n("provider.horizontal.line"),
  DottedHorizontalLine: index.i18n("provider.dotted.horizontal.line"),
  VerticalLine: index.i18n("provider.vertical.line"),
  DottedVerticalLine: index.i18n("provider.dotted.vertical.line"),
  Container: index.i18n("provider.container"),
  PageHeader: index.i18n("provider.page.header"),
  PageFooter: index.i18n("provider.page.footer"),
  PageNum: index.i18n("provider.page.num"),
  SvgPolygonLine: index.i18n("provider.svg.polygon line"),
  SvgLine: index.i18n("provider.svg.line"),
  SvgBezierCurve: index.i18n("provider.svg.bezier.curve"),
  SvgBezierCurveThree: index.i18n("provider.svg.bezier.curve.three"),
  SvgCircle: index.i18n("provider.svg.circle"),
  SvgEllipse: index.i18n("provider.svg.ellipse"),
  DrawPanel: index.i18n("provider.draw.panel")
  // 私有类型
};
const displayStrategyFormat = {
  "none": "\u4E0D\u663E\u793A",
  "firstPage": "\u9996\u9875",
  "lastPage": "\u5C3E\u9875",
  "oddPage": "\u5947\u6570",
  "evenPage": "\u5076\u6570"
};
const cellTypeFormat = {
  Head: "\u8868\u5934",
  Body: "\u8868\u4F53",
  Statistics: "\u7EDF\u8BA1\u884C"
};
const statisticsTypeFormat = {
  Sum: "\u6C42\u548C",
  Avg: "\u5E73\u5747\u503C",
  Count: "\u8BA1\u6570",
  DistinctCount: "\u53BB\u91CD\u8BA1\u6570",
  Max: "\u6700\u5927\u503C",
  Min: "\u6700\u5C0F\u503C",
  CustomFormula: "\u81EA\u5B9A\u4E49\u516C\u5F0F"
};

exports.cellTypeFormat = cellTypeFormat;
exports.displayStrategyFormat = displayStrategyFormat;
exports.elementTypeFormat = elementTypeFormat;
exports.statisticsTypeFormat = statisticsTypeFormat;
//# sourceMappingURL=entity.js.map
