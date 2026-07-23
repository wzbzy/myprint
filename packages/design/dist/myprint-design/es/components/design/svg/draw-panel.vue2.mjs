import { defineComponent, openBlock, createElementBlock, Fragment, unref, createCommentVNode, createElementVNode } from 'vue';
import * as d3Shape from 'd3-shape';
import * as d3Selection from 'd3-selection';
import * as d3Drag from 'd3-drag';
import { ref, reactive, watch, onMounted } from 'vue-demi';
import { unit2px } from '../../../utils/devicePixelRatio.mjs';
import { douglasPeucker } from '../../../utils/utils.mjs';
import { checkInput, moveableEditing } from '../../../plugins/moveable/moveable.mjs';
import { getRecursionParentPanel, displayPreview } from '../../../utils/elementUtil.mjs';

const _hoisted_1 = ["src"];
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "draw-panel",
  props: {
    element: { default: () => ({}) }
  },
  setup(__props) {
    const canvasRef = ref();
    const data = reactive({
      context: {},
      curve: {},
      strokes: [],
      redo: [],
      imgSrc: "",
      // stroke: 'black',
      strokeWidth: 5,
      dragFun: {},
      doubleClick: {}
    });
    let startX, startY;
    let lastClickPoint = void 0;
    const props = __props;
    watch(() => props.element.runtimeOption.status, (n, _o) => {
      if (n == "HANDLE_ED") {
        d3Selection.select(data.context.canvas).on("click", (event) => {
          startX = event.x;
          startY = event.y;
          const timestamp = Date.now();
          if (lastClickPoint == void 0) {
            lastClickPoint = {
              x: startX,
              y: startY,
              clickTimestamp: timestamp
            };
          } else {
            if (startX == lastClickPoint.x && startY == lastClickPoint.y && timestamp - lastClickPoint.clickTimestamp < 350) {
              props.element.runtimeOption.status = "HANDLE_EDIT_ING";
              checkInput();
              moveableEditing();
              lastClickPoint = void 0;
            } else {
              lastClickPoint = {
                x: startX,
                y: startY,
                clickTimestamp: timestamp
              };
            }
          }
        });
      } else if (n == "HANDLE_EDIT_ING") {
        d3Selection.select(data.context.canvas).call(data.dragFun);
      } else {
        d3Selection.select(data.context.canvas).on(".drag", null).on("click", null);
      }
      render();
    });
    watch([() => props.element.width, () => props.element.height], (_n, _o) => {
      canvasRef.value.width = unit2px(props.element.width, getRecursionParentPanel(props.element)) * 2;
      canvasRef.value.height = unit2px(props.element.height, getRecursionParentPanel(props.element)) * 2;
      render();
    });
    watch([() => props.element.option.borderAll], (_n, _o) => {
      render();
    });
    watch([() => props.element.data], (_n, _o) => {
      initData();
      render();
    });
    function initData() {
      const list = JSON.parse(props.element.data);
      data.strokes = [];
      for (let listElement of list) {
        listElement.data["stroke"] = listElement["stroke"];
        listElement.data["strokeWidth"] = listElement["strokeWidth"];
        data.strokes.push(listElement.data);
      }
    }
    if (props.element.data) {
      initData();
    }
    onMounted(() => {
      data.context = canvasRef.value.getContext("2d");
      data.curve = d3Shape.curveBasis(data.context);
      data.context.lineJoin = "round";
      data.context.lineCap = "round";
      data.dragFun = d3Drag.drag().container(data.context.canvas).subject(dragsubject).on("start drag", dragged).on("end", darggend).on("start.render drag.render", render);
      canvasRef.value.width = props.element.runtimeOption.width * 2;
      canvasRef.value.height = props.element.runtimeOption.height * 2;
      render();
    });
    function darggend() {
      const pathList = [];
      for (let stroke of data.strokes) {
        const compressedPath = douglasPeucker(stroke, 1);
        pathList.push({
          stroke: stroke["stroke"],
          strokeWidth: stroke["strokeWidth"],
          data: compressedPath
        });
      }
      props.element.data = JSON.stringify(pathList);
    }
    function render() {
      data.context.clearRect(0, 0, props.element.runtimeOption.width * 2, props.element.runtimeOption.height * 2);
      if (props.element.option.background) {
        data.context.fillStyle = props.element.option.background;
        data.context.fillRect(0, 0, props.element.runtimeOption.width * 2, props.element.runtimeOption.height * 2);
      }
      if (props.element.option.borderAll) {
        data.context.strokeStyle = "black";
        data.context.lineWidth = 2;
        data.context.strokeRect(1, 1, props.element.runtimeOption.width * 2 - 2.5, props.element.runtimeOption.height * 2 - 2.5);
      }
      for (const stroke of data.strokes) {
        data.context.strokeStyle = stroke["stroke"];
        data.context.lineWidth = stroke["strokeWidth"];
        data.context.beginPath();
        data.curve.lineStart();
        for (const point of stroke) {
          data.curve.point(point[0], point[1]);
        }
        if (stroke.length === 1) data.curve.point(stroke[0][0], stroke[0][1]);
        data.curve.lineEnd();
        data.context.stroke();
      }
      data.imgSrc = canvasRef.value.toDataURL();
    }
    function dragsubject() {
      const currentStroke = [];
      currentStroke["stroke"] = props.element.option.color ? props.element.option.color : "black";
      currentStroke["strokeWidth"] = data.strokeWidth;
      data.strokes.push(currentStroke);
      data.redo.length = 0;
      return currentStroke;
    }
    function dragged({ subject, x, y }) {
      subject.push([x * 2, y * 2]);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          unref(displayPreview)(__props.element) ? (openBlock(), createElementBlock("img", {
            key: 0,
            alt: "",
            class: "my-print-draw_panel_img",
            src: unref(data).imgSrc
          }, null, 8, _hoisted_1)) : createCommentVNode("v-if", true),
          createElementVNode(
            "canvas",
            {
              ref_key: "canvasRef",
              ref: canvasRef,
              class: "my-print-draw_panel"
            },
            null,
            512
            /* NEED_PATCH */
          )
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=draw-panel.vue2.mjs.map
