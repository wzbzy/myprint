'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vueDemi = require('vue-demi');
var d3Path = require('d3-path');
var devicePixelRatio = require('../../../utils/devicePixelRatio.js');
var svgUtil = require('../../../utils/svgUtil.js');
var elementUtil = require('../../../utils/elementUtil.js');
var moveable = require('../../../plugins/moveable/moveable.js');
var svgBase = require('./svg-base.vue.js');
var utils = require('../../../utils/utils.js');
var arrays = require('../../../utils/arrays.js');

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
  __name: "svg-polygon-line",
  props: {
    element: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    let orgPoint;
    const svgOptions = vueDemi.reactive({
      width: 0,
      height: 0,
      // 辅助线
      controlLine: [],
      rotateLineStart: {},
      rotateLineEnd: {},
      rotateLineEndDragPoint: {},
      // svg 形状点
      linePoints: [],
      // svg 形状点(包括控制点)
      allPoint: [],
      virtualPoint: []
    });
    svgOptions.width = devicePixelRatio.unit2px(props.element.width, elementUtil.getRecursionParentPanel(props.element));
    svgOptions.height = devicePixelRatio.unit2px(props.element.height, elementUtil.getRecursionParentPanel(props.element));
    initPoint();
    function initPoint() {
      const data = JSON.parse(props.element.data);
      svgOptions.linePoints = data.points;
      svgOptions.rotateLineEndDragPoint = { ...svgOptions.rotateLineEnd };
      svgOptions.rotateLineStart = { x: svgOptions.width / 2, y: svgOptions.height / 2 };
      svgOptions.rotateLineEnd = { x: svgOptions.width / 2, y: -20, type: "rotate" };
      svgOptions.allPoint = [...svgOptions.linePoints, svgOptions.rotateLineEnd];
      svgOptions.controlLine = [{ start: svgOptions.rotateLineStart, end: svgOptions.rotateLineEnd }];
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
        for (let i = 0; i < svgOptions.allPoint.length; i++) {
          let point = orgPoint[i];
          const po = svgUtil.rotatePoint(centerX, centerY, point.x, point.y, angle);
          svgOptions.allPoint[i].x = po.x;
          svgOptions.allPoint[i].y = po.y;
        }
      }
    }
    function dragEnd() {
      const rect = elementUtil.computedShapeBound(svgOptions.linePoints);
      moveable.moveableDragOffsetResize(rect.x, rect.y, rect.width, rect.height, props.element);
      svgOptions.width = rect.width;
      svgOptions.height = rect.height;
      for (let allPointElement of svgOptions.allPoint) {
        allPointElement.x -= rect.x;
        allPointElement.y -= rect.y;
      }
      svgOptions.rotateLineStart.x = rect.width / 2;
      svgOptions.rotateLineStart.y = rect.height / 2;
      svgOptions.rotateLineEnd.x = rect.width / 2;
      svgOptions.rotateLineEnd.y = -20;
      props.element.data = utils.stringify({ points: svgOptions.linePoints }, "insertIndex");
    }
    function doubleClick(subject) {
      arrays.arrayRemove(svgOptions.allPoint, subject);
      arrays.arrayRemove(svgOptions.linePoints, subject);
      dragEnd();
    }
    function draw() {
      let path = d3Path__namespace.path();
      path.moveTo(svgOptions.linePoints[0].x, svgOptions.linePoints[0].y);
      for (let i = 1; i < svgOptions.linePoints.length; i++) {
        path.lineTo(svgOptions.linePoints[i].x, svgOptions.linePoints[i].y);
      }
      path.closePath();
      svgOptions.virtualPoint.length = 0;
      if (svgOptions.linePoints.length > 1) {
        for (let i = 0; i < svgOptions.linePoints.length - 1; i++) {
          const start2 = svgOptions.linePoints[i];
          const end2 = svgOptions.linePoints[i + 1];
          svgOptions.virtualPoint.push(
            {
              x: (start2.x + end2.x) / 2,
              y: (start2.y + end2.y) / 2,
              type: "virtual",
              insertIndex: i + 1
            }
          );
        }
        const start = svgOptions.linePoints[svgOptions.linePoints.length - 1];
        const end = svgOptions.linePoints[0];
        svgOptions.virtualPoint.push(
          {
            x: (start.x + end.x) / 2,
            y: (start.y + end.y) / 2,
            type: "virtual",
            insertIndex: svgOptions.linePoints.length
          }
        );
      }
      return path;
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(svgBase.default, {
        element: __props.element,
        svgOptions: vue.unref(svgOptions),
        draw,
        dragStart,
        dragIng,
        dragEnd,
        doubleClick
      }, null, 8, ["element", "svgOptions"]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=svg-polygon-line.vue2.js.map
