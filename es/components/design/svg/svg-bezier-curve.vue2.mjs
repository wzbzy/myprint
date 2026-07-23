import { defineComponent, openBlock, createBlock, unref } from 'vue';
import { reactive } from 'vue-demi';
import * as d3Path from 'd3-path';
import { unit2px } from '../../../utils/devicePixelRatio.mjs';
import { moveableDragOffsetResize } from '../../../plugins/moveable/moveable.mjs';
import SvgBase from './svg-base.vue.mjs';
import { bezier2 } from '../../../utils/bezierUtil.mjs';
import { stringify } from '../../../utils/utils.mjs';
import { getRecursionParentPanel } from '../../../utils/elementUtil.mjs';

var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "svg-bezier-curve",
  props: {
    element: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    let path;
    const svgOptions = reactive({
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
    svgOptions.width = unit2px(props.element.width, getRecursionParentPanel(props.element));
    svgOptions.height = unit2px(props.element.height, getRecursionParentPanel(props.element));
    initPoint();
    function draw() {
      path = d3Path.path();
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
      const bezierProperties = bezier2(svgOptions.allPoint[0], svgOptions.allPoint[2], svgOptions.allPoint[1]);
      moveableDragOffsetResize(bezierProperties.x, bezierProperties.y, bezierProperties.width, bezierProperties.height, props.element);
      svgOptions.width = bezierProperties.width;
      svgOptions.height = bezierProperties.height;
      for (let allPointElement of svgOptions.allPoint) {
        allPointElement.x -= bezierProperties.x;
        allPointElement.y -= bezierProperties.y;
      }
      props.element.data = stringify({ points: svgOptions.linePoints, controlPoints: [svgOptions.controlPoint] }, "type");
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(SvgBase, {
        element: __props.element,
        svgOptions: unref(svgOptions),
        draw,
        dragStart,
        dragIng,
        dragEnd
      }, null, 8, ["element", "svgOptions"]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=svg-bezier-curve.vue2.mjs.map
