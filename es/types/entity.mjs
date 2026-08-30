import { i18n } from '../locales/index.mjs';

const elementTypeFormat = {
  Panel: i18n("provider.panel"),
  Text: i18n("provider.text"),
  TextTime: i18n("provider.text.time"),
  Image: i18n("provider.image"),
  DataTable: i18n("provider.data.table"),
  FreeTable: i18n("provider.free.table"),
  Rect: i18n("provider.rect"),
  HorizontalLine: i18n("provider.horizontal.line"),
  DottedHorizontalLine: i18n("provider.dotted.horizontal.line"),
  VerticalLine: i18n("provider.vertical.line"),
  DottedVerticalLine: i18n("provider.dotted.vertical.line"),
  Container: i18n("provider.container"),
  PageHeader: i18n("provider.page.header"),
  PageFooter: i18n("provider.page.footer"),
  PageNum: i18n("provider.page.num"),
  SvgPolygonLine: i18n("provider.svg.polygon line"),
  SvgLine: i18n("provider.svg.line"),
  SvgBezierCurve: i18n("provider.svg.bezier.curve"),
  SvgBezierCurveThree: i18n("provider.svg.bezier.curve.three"),
  SvgCircle: i18n("provider.svg.circle"),
  SvgEllipse: i18n("provider.svg.ellipse"),
  DrawPanel: i18n("provider.draw.panel")
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

export { cellTypeFormat, displayStrategyFormat, elementTypeFormat, statisticsTypeFormat };
//# sourceMappingURL=entity.mjs.map
