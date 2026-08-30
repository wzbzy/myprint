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
  __name: "svg-bezier-curve",
  props: {
    element: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    let path;
    const svgOptions = vueDemi.reactive({
      width: 0,
      height: 0,
      rotateControl: {},
      controlLine: [],
      centerPoint: {},
      // controlPointLineStart: {} as PointLabel,
      // controlPointLineEnd: {} as PointLabel,
      controlPoint: {},
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
      path.quadraticCurveTo(svgOptions.controlPoint.x, svgOptions.controlPoint.y, svgOptions.linePoints[1].x, svgOptions.linePoints[1].y);
      return path;
    }
    function initPoint() {
      const data = JSON.parse(props.element.data);
      svgOptions.linePoints = data.points;
      svgOptions.controlPoint = data.controlPoints[0];
      svgOptions.controlPoint.type = "control";
      svgOptions.allPoint = [...svgOptions.linePoints, svgOptions.controlPoint];
      svgOptions.controlLine = [
        { start: svgOptions.linePoints[0], end: svgOptions.controlPoint },
        { start: svgOptions.linePoints[1], end: svgOptions.controlPoint }
      ];
    }
    function dragStart() {
    }
    function dragIng(subject, event, dx, dy) {
      subject.x = event.x + dx;
      subject.y = event.y + dy;
    }
    function dragEnd() {
      const bezierProperties = bezierUtil.bezier2(svgOptions.allPoint[0], svgOptions.allPoint[2], svgOptions.allPoint[1]);
      moveable.moveableDragOffsetResize(bezierProperties.x, bezierProperties.y, bezierProperties.width, bezierProperties.height, props.element);
      svgOptions.width = bezierProperties.width;
      svgOptions.height = bezierProperties.height;
      for (let allPointElement of svgOptions.allPoint) {
        allPointElement.x -= bezierProperties.x;
        allPointElement.y -= bezierProperties.y;
      }
      props.element.data = utils.stringify({ points: svgOptions.linePoints, controlPoints: [svgOptions.controlPoint] }, "type");
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
//# sourceMappingURL=svg-bezier-curve.vue2.js.map
