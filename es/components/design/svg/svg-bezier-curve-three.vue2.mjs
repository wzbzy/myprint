import { defineComponent, openBlock, createBlock, unref } from 'vue';
import { reactive } from 'vue-demi';
import * as d3Path from 'd3-path';
import { unit2px } from '../../../utils/devicePixelRatio.mjs';
import { moveableDragOffsetResize } from '../../../plugins/moveable/moveable.mjs';
import SvgBase from './svg-base.vue.mjs';
import { bezier3 } from '../../../utils/bezierUtil.mjs';
import { stringify } from '../../../utils/utils.mjs';
import { computeLineAngle, rotatePoint } from '../../../utils/svgUtil.mjs';
import { getRecursionParentPanel } from '../../../utils/elementUtil.mjs';

var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "svg-bezier-curve-three",
  props: {
    element: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    let path;
    let orgPoint;
    const svgOptions = reactive({
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
    svgOptions.width = unit2px(props.element.width, getRecursionParentPanel(props.element));
    svgOptions.height = unit2px(props.element.height, getRecursionParentPanel(props.element));
    initPoint();
    function draw() {
      path = d3Path.path();
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
        const angle = computeLineAngle(
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
          const po = rotatePoint(centerX, centerY, point.x, point.y, angle);
          svgOptions.allPoint[i].x = po.x;
          svgOptions.allPoint[i].y = po.y;
        }
      }
    }
    function dragEnd() {
      const bezierProperties = bezier3(svgOptions.allPoint[0], svgOptions.allPoint[2], svgOptions.allPoint[3], svgOptions.allPoint[1]);
      moveableDragOffsetResize(bezierProperties.x, bezierProperties.y, bezierProperties.width, bezierProperties.height, props.element);
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
      props.element.data = stringify({
        points: svgOptions.linePoints,
        controlPoints: svgOptions.controlPointList
      }, "type");
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
//# sourceMappingURL=svg-bezier-curve-three.vue2.mjs.map
