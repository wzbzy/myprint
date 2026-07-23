'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vueDemi = require('vue-demi');
var devicePixelRatio = require('../../../utils/devicePixelRatio.js');
var svgBase = require('./svg-base.vue.js');
var d3Path = require('d3-path');
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
  __name: "svg-circle",
  props: {
    element: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const svgOptions = vueDemi.reactive({
      width: 0,
      height: 0,
      rotateControl: {},
      centerPoint: {},
      drawAuxiliary: false
    });
    function changeSize() {
      initPoint();
      return true;
    }
    function draw(_chart) {
      let path = d3Path__namespace.path();
      path.moveTo(svgOptions.centerPoint.x * 2, svgOptions.centerPoint.x);
      path.arc(svgOptions.centerPoint.x, svgOptions.centerPoint.x, svgOptions.centerPoint.x, 0, Math.PI * 2);
      return path;
    }
    initPoint();
    function initPoint() {
      svgOptions.width = devicePixelRatio.unit2px(props.element.width, elementUtil.getRecursionParentPanel(props.element));
      svgOptions.height = devicePixelRatio.unit2px(props.element.height, elementUtil.getRecursionParentPanel(props.element));
      svgOptions.centerPoint = { x: svgOptions.width / 2, y: svgOptions.height / 2 };
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(svgBase.default, {
        element: __props.element,
        svgOptions: vue.unref(svgOptions),
        draw,
        changeSize
      }, null, 8, ["element", "svgOptions"]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=svg-circle.vue2.js.map
