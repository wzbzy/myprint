import { defineComponent, openBlock, createBlock, unref } from 'vue';
import { reactive } from 'vue-demi';
import { unit2px } from '../../../utils/devicePixelRatio.mjs';
import SvgBase from './svg-base.vue.mjs';
import * as d3Path from 'd3-path';
import { getRecursionParentPanel } from '../../../utils/elementUtil.mjs';

var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "svg-circle",
  props: {
    element: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const svgOptions = reactive({
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
      let path = d3Path.path();
      path.moveTo(svgOptions.centerPoint.x * 2, svgOptions.centerPoint.x);
      path.arc(svgOptions.centerPoint.x, svgOptions.centerPoint.x, svgOptions.centerPoint.x, 0, Math.PI * 2);
      return path;
    }
    initPoint();
    function initPoint() {
      svgOptions.width = unit2px(props.element.width, getRecursionParentPanel(props.element));
      svgOptions.height = unit2px(props.element.height, getRecursionParentPanel(props.element));
      svgOptions.centerPoint = { x: svgOptions.width / 2, y: svgOptions.height / 2 };
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(SvgBase, {
        element: __props.element,
        svgOptions: unref(svgOptions),
        draw,
        changeSize
      }, null, 8, ["element", "svgOptions"]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=svg-circle.vue2.mjs.map
