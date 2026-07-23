import { defineComponent, openBlock, createBlock, unref } from 'vue';
import { reactive } from 'vue-demi';
import * as d3Path from 'd3-path';
import { unit2px } from '../../../utils/devicePixelRatio.mjs';
import { moveableDragOffsetResize } from '../../../plugins/moveable/moveable.mjs';
import SvgBase from './svg-base.vue.mjs';
import { getRecursionParentPanel, computedShapeBound } from '../../../utils/elementUtil.mjs';
import { stringify } from '../../../utils/utils.mjs';

var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "svg-line",
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
      const rect = computedShapeBound(svgOptions.linePoints);
      moveableDragOffsetResize(rect.x, rect.y, rect.width, rect.height, props.element);
      svgOptions.width = rect.width;
      svgOptions.height = rect.height;
      for (let allPointElement of svgOptions.allPoint) {
        allPointElement.x -= rect.x;
        allPointElement.y -= rect.y;
      }
      props.element.data = stringify({ points: svgOptions.linePoints });
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(SvgBase, {
        element: __props.element,
        svgOptions: unref(svgOptions),
        draw,
        dragIng,
        dragEnd
      }, null, 8, ["element", "svgOptions"]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=svg-line.vue2.mjs.map
