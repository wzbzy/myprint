'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vueDemi = require('vue-demi');
var d3Path = require('d3-path');
var devicePixelRatio = require('../../../utils/devicePixelRatio.js');
var moveable = require('../../../plugins/moveable/moveable.js');
var svgBase = require('./svg-base.vue.js');
var bezierUtil = require('../../../utils/bezierUtil.js');
var utils = require('../../../utils/utils.js');
var svgUtil = require('../../../utils/svgUtil.js');
var elementUtil = require('../../../utils/elementUtil.js');

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

var d3Path__namespace = /*#__PURE__*/_interopNamespaceDefault(d3Path);

var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "svg-bezier-curve-three",
  props: {
    element: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    let path;
    let orgPoint;
    const svgOptions = vueDemi.reactive({
      width: 0,
      height: 0,
      rotateControl: {},
      centerPoint: {},
      // 辅助线
      controlLine: [],
      rotateLineStart: {},
      rotateLineEnd: {},
      rotateLineEndDragPoint: {},
      // controlPointLineStart: {} as PointLabel,
      // controlPointLineEnd: {} as PointLabel,
      controlPointList: [],
      // svg 形状点
      linePoints: [],
      allPoint: [],
      drawAuxiliary: false
    });
    svgOptions.width = devicePixelRatio.unit2px(props.element.width, elementUtil.getRecursionParentPanel(props.element));
    svgOptions.height = devicePixelRatio.unit2px(props.element.height, elementUtil.getRecursionParentPanel(props.element));
    initPoint();
    function draw() {
      path = d3Path__namespace.path();
      path.moveTo(svgOptions.linePoints[0].x, svgOptions.linePoints[0].y);
      path.bezierCurveTo(
        svgOptions.controlPointList[0].x,
        svgOptions.controlPointList[0].y,
        svgOptions.controlPointList[1].x,
        svgOptions.controlPointList[1].y,
        svgOptions.linePoints[1].x,
        svgOptions.linePoints[1].y
      );
      return path;
    }
    function initPoint() {
      const data = JSON.parse(props.element.data);
      svgOptions.linePoints = data.points;
      svgOptions.controlPointList = data.controlPoints;
      for (let controlPoint of svgOptions.controlPointList) {
        controlPoint.type = "control";
      }
      svgOptions.rotateLineStart = { x: svgOptions.width / 2, y: svgOptions.height / 2 };
      svgOptions.rotateLineEnd = { x: svgOptions.width / 2, y: -20, type: "rotate" };
      svgOptions.allPoint = [...svgOptions.linePoints, ...svgOptions.controlPointList, svgOptions.rotateLineEnd];
      svgOptions.controlLine = [
        { start: svgOptions.linePoints[0], end: svgOptions.controlPointList[0] },
        { start: svgOptions.linePoints[1], end: svgOptions.controlPointList[1] },
        { start: svgOptions.rotateLineStart, end: svgOptions.rotateLineEnd }
      ];
    }
    function dragStart(subject) {
      if (subject.type == "rotate") {
        orgPoint = JSON.parse(JSON.stringify(svgOptions.allPoint));
        svgOptions.rotateLineEndDragPoint = { ...svgOptions.rotateLineEnd };
      }
    }
    function dragIng(subject, event, dx, dy) {
      subject.x = event.x + dx;
      subject.y = event.y + dy;
      if (subject.type == "rotate") {
        const angle = svgUtil.computeLineAngle(
          {
            start: svgOptions.rotateLineStart,
            end: svgOptions.rotateLineEndDragPoint
          },
          { start: svgOptions.rotateLineStart, end: { x: subject.x, y: subject.y } }
        );
        const centerX = svgOptions.width / 2;
        const centerY = svgOptions.height / 2;
        for (let i = 0; i < 4; i++) {
          let point = orgPoint[i];
          const po = svgUtil.rotatePoint(centerX, centerY, point.x, point.y, angle);
          svgOptions.allPoint[i].x = po.x;
          svgOptions.allPoint[i].y = po.y;
        }
      }
    }
    function dragEnd() {
      const bezierProperties = bezierUtil.bezier3(svgOptions.allPoint[0], svgOptions.allPoint[2], svgOptions.allPoint[3], svgOptions.allPoint[1]);
      moveable.moveableDragOffsetResize(bezierProperties.x, bezierProperties.y, bezierProperties.width, bezierProperties.height, props.element);
      svgOptions.width = bezierProperties.width;
      svgOptions.height = bezierProperties.height;
      for (let allPointElement of svgOptions.allPoint) {
        allPointElement.x -= bezierProperties.x;
        allPointElement.y -= bezierProperties.y;
      }
      svgOptions.rotateLineStart.x = bezierProperties.width / 2;
      svgOptions.rotateLineStart.y = bezierProperties.height / 2;
      svgOptions.rotateLineEnd.x = bezierProperties.width / 2;
      svgOptions.rotateLineEnd.y = -20;
      props.element.data = utils.stringify({
        points: svgOptions.linePoints,
        controlPoints: svgOptions.controlPointList
      }, "type");
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(svgBase.default, {
        element: __props.element,
        svgOptions: vue.unref(svgOptions),
        draw,
        dragStart,
        dragIng,
        dragEnd
      }, null, 8, ["element", "svgOptions"]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=svg-bezier-curve-three.vue2.js.map
