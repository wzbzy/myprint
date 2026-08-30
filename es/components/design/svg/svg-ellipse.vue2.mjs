import { defineComponent, openBlock, createBlock, unref } from 'vue';
import { reactive } from 'vue-demi';
import { unit2px } from '../../../utils/devicePixelRatio.mjs';
import SvgBase from './svg-base.vue.mjs';
import { getRecursionParentPanel } from '../../../utils/elementUtil.mjs';

var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "svg-ellipse",
  props: {
    element: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    let ellipse;
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
    function draw(chart) {
      if (!ellipse) {
        ellipse = chart.append("ellipse");
      }
      ellipse.attr("cx", svgOptions.centerPoint.x).attr("cy", svgOptions.centerPoint.y).attr("rx", svgOptions.centerPoint.x).attr("ry", svgOptions.centerPoint.y).attr("stroke", props.element.option.color ? props.element.option.color : "black").attr("opacity", props.element.option.opacity != void 0 ? props.element.option.opacity : 1).attr("fill", props.element.option.background ? props.element.option.background : "none");
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
//# sourceMappingURL=svg-ellipse.vue2.mjs.map
