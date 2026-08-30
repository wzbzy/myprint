'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vueDemi = require('vue-demi');
var devicePixelRatio = require('../../../utils/devicePixelRatio.js');
var svgBase = require('./svg-base.vue.js');
var elementUtil = require('../../../utils/elementUtil.js');

var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "svg-ellipse",
  props: {
    element: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    let ellipse;
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
    function draw(chart) {
      if (!ellipse) {
        ellipse = chart.append("ellipse");
      }
      ellipse.attr("cx", svgOptions.centerPoint.x).attr("cy", svgOptions.centerPoint.y).attr("rx", svgOptions.centerPoint.x).attr("ry", svgOptions.centerPoint.y).attr("stroke", props.element.option.color ? props.element.option.color : "black").attr("opacity", props.element.option.opacity != void 0 ? props.element.option.opacity : 1).attr("fill", props.element.option.background ? props.element.option.background : "none");
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
//# sourceMappingURL=svg-ellipse.vue2.js.map
