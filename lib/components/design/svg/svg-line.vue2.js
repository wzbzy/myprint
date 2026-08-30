'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vueDemi = require('vue-demi');
var d3Path = require('d3-path');
var devicePixelRatio = require('../../../utils/devicePixelRatio.js');
var moveable = require('../../../plugins/moveable/moveable.js');
var svgBase = require('./svg-base.vue.js');
var elementUtil = require('../../../utils/elementUtil.js');
var utils = require('../../../utils/utils.js');

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
  __name: "svg-line",
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
      if (svgOptions.linePoints.length > 1) {
        path.moveTo(svgOptions.linePoints[0].x, svgOptions.linePoints[0].y);
        path.lineTo(svgOptions.linePoints[1].x, svgOptions.linePoints[1].y);
      }
      return path;
    }
    function initPoint() {
      if (props.element.data) {
        const data = JSON.parse(props.element.data);
        svgOptions.linePoints = data.points;
      }
      svgOptions.allPoint = [...svgOptions.linePoints];
    }
    function dragIng(subject, event, dx, dy) {
      subject.x = event.x + dx;
      subject.y = event.y + dy;
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
      props.element.data = utils.stringify({ points: svgOptions.linePoints });
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(svgBase.default, {
        element: __props.element,
        svgOptions: vue.unref(svgOptions),
        draw,
        dragIng,
        dragEnd
      }, null, 8, ["element", "svgOptions"]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=svg-line.vue2.js.map
