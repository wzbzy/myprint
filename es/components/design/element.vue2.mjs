import { defineComponent, openBlock, createBlock, unref, createCommentVNode } from 'vue';
import './text/index.mjs';
import './image/index.mjs';
import './shape/index.mjs';
import SvgPolygonLine from './svg/svg-polygon-line.vue.mjs';
import SvgCircle from './svg/svg-circle.vue.mjs';
import DrawPanel from './svg/draw-panel.vue.mjs';
import SvgLine from './svg/svg-line.vue.mjs';
import SvgBezierCurve from './svg/svg-bezier-curve.vue.mjs';
import SvgBezierCurveThree from './svg/svg-bezier-curve-three.vue.mjs';
import SvgEllipse from './svg/svg-ellipse.vue.mjs';
import MyText from './text/text.vue.mjs';
import MyImage from './image/image.vue.mjs';
import MyRect from './shape/rect/rect/rect.vue.mjs';
import MyHorizontalLine from './shape/line/horizontalLine/horizontalLine.vue.mjs';
import MyVerticalLine from './shape/line/verticalLine/verticalLine.vue.mjs';
import MyDottedHorizontalLine from './shape/line/dottedHorizontalLine/dottedHorizontalLine.vue.mjs';
import MyDottedVerticalLine from './shape/line/dottedVerticalLine/dottedVerticalLine.vue.mjs';

var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "element",
  props: {
    element: { default: () => ({}) }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.element.type == "Text" ? (openBlock(), createBlock(unref(MyText), {
        key: 0,
        element: __props.element
      }, null, 8, ["element"])) : __props.element.type == "TextTime" ? (openBlock(), createBlock(unref(MyText), {
        key: 1,
        element: __props.element
      }, null, 8, ["element"])) : __props.element.type == "PageNum" ? (openBlock(), createBlock(unref(MyText), {
        key: 2,
        element: __props.element
      }, null, 8, ["element"])) : __props.element.type === "Image" ? (openBlock(), createBlock(unref(MyImage), {
        key: 3,
        element: __props.element
      }, null, 8, ["element"])) : __props.element.type === "Rect" ? (openBlock(), createBlock(unref(MyRect), {
        key: 4,
        element: __props.element
      }, null, 8, ["element"])) : __props.element.type === "HorizontalLine" ? (openBlock(), createBlock(unref(MyHorizontalLine), {
        key: 5,
        element: __props.element
      }, null, 8, ["element"])) : __props.element.type === "VerticalLine" ? (openBlock(), createBlock(unref(MyVerticalLine), {
        key: 6,
        element: __props.element
      }, null, 8, ["element"])) : __props.element.type === "DottedHorizontalLine" ? (openBlock(), createBlock(unref(MyDottedHorizontalLine), {
        key: 7,
        element: __props.element
      }, null, 8, ["element"])) : __props.element.type === "DottedVerticalLine" ? (openBlock(), createBlock(unref(MyDottedVerticalLine), {
        key: 8,
        element: __props.element
      }, null, 8, ["element"])) : __props.element.type === "SvgPolygonLine" ? (openBlock(), createBlock(SvgPolygonLine, {
        key: 9,
        element: __props.element
      }, null, 8, ["element"])) : __props.element.type === "SvgCircle" ? (openBlock(), createBlock(SvgCircle, {
        key: 10,
        element: __props.element
      }, null, 8, ["element"])) : __props.element.type === "SvgEllipse" ? (openBlock(), createBlock(SvgEllipse, {
        key: 11,
        element: __props.element
      }, null, 8, ["element"])) : __props.element.type === "SvgLine" ? (openBlock(), createBlock(SvgLine, {
        key: 12,
        element: __props.element
      }, null, 8, ["element"])) : __props.element.type === "SvgBezierCurve" ? (openBlock(), createBlock(SvgBezierCurve, {
        key: 13,
        element: __props.element
      }, null, 8, ["element"])) : __props.element.type === "SvgBezierCurveThree" ? (openBlock(), createBlock(SvgBezierCurveThree, {
        key: 14,
        element: __props.element
      }, null, 8, ["element"])) : __props.element.type === "DrawPanel" ? (openBlock(), createBlock(DrawPanel, {
        key: 15,
        element: __props.element
      }, null, 8, ["element"])) : createCommentVNode("v-if", true);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=element.vue2.mjs.map
