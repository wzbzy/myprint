'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('./text/index.js');
require('./image/index.js');
require('./shape/index.js');
var svgPolygonLine = require('./svg/svg-polygon-line.vue.js');
var svgCircle = require('./svg/svg-circle.vue.js');
var drawPanel = require('./svg/draw-panel.vue.js');
var svgLine = require('./svg/svg-line.vue.js');
var svgBezierCurve = require('./svg/svg-bezier-curve.vue.js');
var svgBezierCurveThree = require('./svg/svg-bezier-curve-three.vue.js');
var svgEllipse = require('./svg/svg-ellipse.vue.js');
var text = require('./text/text.vue.js');
var image = require('./image/image.vue.js');
var rect = require('./shape/rect/rect/rect.vue.js');
var horizontalLine = require('./shape/line/horizontalLine/horizontalLine.vue.js');
var verticalLine = require('./shape/line/verticalLine/verticalLine.vue.js');
var dottedHorizontalLine = require('./shape/line/dottedHorizontalLine/dottedHorizontalLine.vue.js');
var dottedVerticalLine = require('./shape/line/dottedVerticalLine/dottedVerticalLine.vue.js');

var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "element",
  props: {
    element: { default: () => ({}) }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.element.type == "Text" ? (vue.openBlock(), vue.createBlock(vue.unref(text.default), {
        key: 0,
        element: __props.element
      }, null, 8, ["element"])) : __props.element.type == "TextTime" ? (vue.openBlock(), vue.createBlock(vue.unref(text.default), {
        key: 1,
        element: __props.element
      }, null, 8, ["element"])) : __props.element.type == "PageNum" ? (vue.openBlock(), vue.createBlock(vue.unref(text.default), {
        key: 2,
        element: __props.element
      }, null, 8, ["element"])) : __props.element.type === "Image" ? (vue.openBlock(), vue.createBlock(vue.unref(image.default), {
        key: 3,
        element: __props.element
      }, null, 8, ["element"])) : __props.element.type === "Rect" ? (vue.openBlock(), vue.createBlock(vue.unref(rect.default), {
        key: 4,
        element: __props.element
      }, null, 8, ["element"])) : __props.element.type === "HorizontalLine" ? (vue.openBlock(), vue.createBlock(vue.unref(horizontalLine.default), {
        key: 5,
        element: __props.element
      }, null, 8, ["element"])) : __props.element.type === "VerticalLine" ? (vue.openBlock(), vue.createBlock(vue.unref(verticalLine.default), {
        key: 6,
        element: __props.element
      }, null, 8, ["element"])) : __props.element.type === "DottedHorizontalLine" ? (vue.openBlock(), vue.createBlock(vue.unref(dottedHorizontalLine.default), {
        key: 7,
        element: __props.element
      }, null, 8, ["element"])) : __props.element.type === "DottedVerticalLine" ? (vue.openBlock(), vue.createBlock(vue.unref(dottedVerticalLine.default), {
        key: 8,
        element: __props.element
      }, null, 8, ["element"])) : __props.element.type === "SvgPolygonLine" ? (vue.openBlock(), vue.createBlock(svgPolygonLine.default, {
        key: 9,
        element: __props.element
      }, null, 8, ["element"])) : __props.element.type === "SvgCircle" ? (vue.openBlock(), vue.createBlock(svgCircle.default, {
        key: 10,
        element: __props.element
      }, null, 8, ["element"])) : __props.element.type === "SvgEllipse" ? (vue.openBlock(), vue.createBlock(svgEllipse.default, {
        key: 11,
        element: __props.element
      }, null, 8, ["element"])) : __props.element.type === "SvgLine" ? (vue.openBlock(), vue.createBlock(svgLine.default, {
        key: 12,
        element: __props.element
      }, null, 8, ["element"])) : __props.element.type === "SvgBezierCurve" ? (vue.openBlock(), vue.createBlock(svgBezierCurve.default, {
        key: 13,
        element: __props.element
      }, null, 8, ["element"])) : __props.element.type === "SvgBezierCurveThree" ? (vue.openBlock(), vue.createBlock(svgBezierCurveThree.default, {
        key: 14,
        element: __props.element
      }, null, 8, ["element"])) : __props.element.type === "DrawPanel" ? (vue.openBlock(), vue.createBlock(drawPanel.default, {
        key: 15,
        element: __props.element
      }, null, 8, ["element"])) : vue.createCommentVNode("v-if", true);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=element.vue2.js.map
