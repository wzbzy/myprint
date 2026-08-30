'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var d3Shape = require('d3-shape');
var d3Selection = require('d3-selection');
var d3Drag = require('d3-drag');
var vueDemi = require('vue-demi');
var devicePixelRatio = require('../../../utils/devicePixelRatio.js');
var utils = require('../../../utils/utils.js');
var moveable = require('../../../plugins/moveable/moveable.js');
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

var d3Shape__namespace = /*#__PURE__*/_interopNamespaceDefault(d3Shape);
var d3Selection__namespace = /*#__PURE__*/_interopNamespaceDefault(d3Selection);
var d3Drag__namespace = /*#__PURE__*/_interopNamespaceDefault(d3Drag);

const _hoisted_1 = ["src"];
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "draw-panel",
  props: {
    element: { default: () => ({}) }
  },
  setup(__props) {
    const canvasRef = vueDemi.ref();
    const data = vueDemi.reactive({
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
    vueDemi.watch(() => props.element.runtimeOption.status, (n, _o) => {
      if (n == "HANDLE_ED") {
        d3Selection__namespace.select(data.context.canvas).on("click", (event) => {
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
              moveable.checkInput();
              moveable.moveableEditing();
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
        d3Selection__namespace.select(data.context.canvas).call(data.dragFun);
      } else {
        d3Selection__namespace.select(data.context.canvas).on(".drag", null).on("click", null);
      }
      render();
    });
    vueDemi.watch([() => props.element.width, () => props.element.height], (_n, _o) => {
      canvasRef.value.width = devicePixelRatio.unit2px(props.element.width, elementUtil.getRecursionParentPanel(props.element)) * 2;
      canvasRef.value.height = devicePixelRatio.unit2px(props.element.height, elementUtil.getRecursionParentPanel(props.element)) * 2;
      render();
    });
    vueDemi.watch([() => props.element.option.borderAll], (_n, _o) => {
      render();
    });
    vueDemi.watch([() => props.element.data], (_n, _o) => {
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
    vueDemi.onMounted(() => {
      data.context = canvasRef.value.getContext("2d");
      data.curve = d3Shape__namespace.curveBasis(data.context);
      data.context.lineJoin = "round";
      data.context.lineCap = "round";
      data.dragFun = d3Drag__namespace.drag().container(data.context.canvas).subject(dragsubject).on("start drag", dragged).on("end", darggend).on("start.render drag.render", render);
      canvasRef.value.width = props.element.runtimeOption.width * 2;
      canvasRef.value.height = props.element.runtimeOption.height * 2;
      render();
    });
    function darggend() {
      const pathList = [];
      for (let stroke of data.strokes) {
        const compressedPath = utils.douglasPeucker(stroke, 1);
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
      return vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        null,
        [
          vue.unref(elementUtil.displayPreview)(__props.element) ? (vue.openBlock(), vue.createElementBlock("img", {
            key: 0,
            alt: "",
            class: "my-print-draw_panel_img",
            src: vue.unref(data).imgSrc
          }, null, 8, _hoisted_1)) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode(
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

exports.default = _sfc_main;
//# sourceMappingURL=draw-panel.vue2.js.map
