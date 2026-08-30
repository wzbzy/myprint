'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vueDemi = require('vue-demi');
var d3Array = require('d3-array');
var d3Selection = require('d3-selection');
var d3Drag = require('d3-drag');
var svgUtil = require('../../../utils/svgUtil.js');
var common = require('../../../constants/common.js');
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

var d3Array__namespace = /*#__PURE__*/_interopNamespaceDefault(d3Array);
var d3Selection__namespace = /*#__PURE__*/_interopNamespaceDefault(d3Selection);
var d3Drag__namespace = /*#__PURE__*/_interopNamespaceDefault(d3Drag);

var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "svg-base",
  props: {
    element: { default: () => ({}) },
    svgOptions: { default: () => {
      return {
        width: 0,
        height: 0,
        controlLine: [],
        centerPoint: {},
        controlPointScale: {},
        controlPointResize: {},
        controlPointEndDragStart: {},
        // svg 形状点
        allPoint: [],
        virtualPoint: [],
        drawAuxiliary: false
      };
    } },
    draw: { type: Function, default: () => {
    } },
    dragStart: { type: Function, default: () => {
    } },
    dragIng: { type: Function, default: (_subject, _event, _dx, _dy) => {
    } },
    dragEnd: { type: Function, default: () => {
    } },
    changeSize: { type: Function, default: () => {
      return false;
    } },
    doubleClick: { type: Function, default: () => {
    } }
  },
  setup(__props) {
    const props = __props;
    let path;
    const chartRef = vueDemi.ref();
    let subject = void 0, dx, dy;
    let startX, startY;
    let dragFun;
    let lastClickPoint = void 0;
    vueDemi.watch(() => props.element.runtimeOption.status, (n, _o) => {
      props.svgOptions.drawAuxiliary = common.elementHandleHandleStatusList.includes(n) && !props.element.lock;
      svgUtil.updateSvg(chartRef.value, props.svgOptions, props.draw);
      draggable();
    });
    vueDemi.watch(() => props.element.lock, (_n, _o) => {
      props.svgOptions.drawAuxiliary = common.elementHandleHandleStatusList.includes(props.element.runtimeOption.status) && !props.element.lock;
      svgUtil.updateSvg(chartRef.value, props.svgOptions, props.draw);
      draggable();
    });
    vueDemi.watch([() => props.element.width, () => props.element.height], (_n, _o) => {
      const renderIs = props.changeSize();
      if (renderIs) {
        svgUtil.updateSvg(chartRef.value, props.svgOptions, props.draw);
      }
    });
    vueDemi.watch([() => props.element.option.color, () => props.element.option.background, () => props.element.option.opacity], (_n, _o) => {
      svgUtil.updateSvg(chartRef.value, props.svgOptions, props.draw);
    });
    vueDemi.onMounted(() => {
      props.svgOptions.element = props.element;
      dragFun = d3Drag__namespace.drag().subject(dragSubject).on("start", (event) => {
        if (subject) {
          d3Selection__namespace.select(chartRef.value).style("cursor", "grabbing");
          dx = subject.x - event.x;
          dy = subject.y - event.y;
          props.dragStart(subject);
          startX = event.x;
          startY = event.y;
          if (subject.type == "virtual") {
            const insertIndex = subject.insertIndex;
            subject.insertIndex = void 0;
            subject.type = void 0;
            props.svgOptions.allPoint.splice(insertIndex, 0, subject);
            props.svgOptions.linePoints.splice(insertIndex, 0, subject);
            svgUtil.updateSvg(chartRef.value, props.svgOptions, props.draw);
          }
        }
      }).on("drag", (event) => {
        if (subject) {
          props.dragIng(subject, event, dx, dy);
        }
      }).on("end", (event) => {
        if (subject) {
          if (startX == event.x && startY == event.y) {
            const timestamp = Date.now();
            if (lastClickPoint == void 0) {
              lastClickPoint = {
                x: startX,
                y: startY,
                clickTimestamp: timestamp
              };
            } else {
              if (startX == lastClickPoint.x && startY == lastClickPoint.y && timestamp - lastClickPoint.clickTimestamp < 350) {
                props.doubleClick(subject);
                lastClickPoint = void 0;
              } else {
                lastClickPoint = {
                  x: startX,
                  y: startY,
                  clickTimestamp: timestamp
                };
              }
            }
          } else {
            props.dragEnd(subject);
          }
        }
        d3Selection__namespace.select(chartRef.value).style("cursor", null);
        svgUtil.updateSvg(chartRef.value, props.svgOptions, props.draw);
      }).on(
        "start.render drag.render end.render",
        () => svgUtil.updateSvg(chartRef.value, props.svgOptions, props.draw)
      );
      svgUtil.updateSvg(chartRef.value, props.svgOptions, props.draw);
    });
    function draggable() {
      if (!props.svgOptions.drawAuxiliary) {
        d3Selection__namespace.select(chartRef.value).on("mousemove", null).on(".drag", null);
        d3Selection__namespace.select(chartRef.value).style("cursor", null);
      } else {
        d3Selection__namespace.select(chartRef.value).on("mousemove", (event) => dragSubject({ sourceEvent: event })).call(dragFun);
      }
    }
    function dragSubject(event) {
      if (!props.svgOptions.allPoint) {
        return null;
      }
      const p = d3Selection__namespace.pointer(event.sourceEvent, chartRef.value);
      subject = d3Array__namespace.least(props.svgOptions.allPoint, (a, b) => svgUtil.dist(p, a) - svgUtil.dist(p, b));
      if (svgUtil.dist(p, subject) > 12) subject = void 0;
      if (subject == null && props.svgOptions.virtualPoint && props.svgOptions.virtualPoint.length > 0) {
        subject = d3Array__namespace.least(props.svgOptions.virtualPoint, (a, b) => svgUtil.dist(p, a) - svgUtil.dist(p, b));
        if (svgUtil.dist(p, subject) > 12) subject = void 0;
      }
      if (subject)
        d3Selection__namespace.select(chartRef.value).style("cursor", "hand").style("cursor", "grab");
      else d3Selection__namespace.select(chartRef.value).style("cursor", null);
      return subject;
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(
        "svg",
        {
          ref_key: "chartRef",
          ref: chartRef,
          class: "my-print-chart"
        },
        [
          _cache[2] || (_cache[2] = vue.createElementVNode(
            "path",
            {
              class: "u-path",
              d: ""
            },
            null,
            -1
            /* CACHED */
          )),
          vue.unref(elementUtil.displayDesign)(__props.element) ? (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            { key: 0 },
            [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(__props.svgOptions.controlLine, (index) => {
                  return vue.openBlock(), vue.createElementBlock("line", {
                    class: "u-line",
                    key: index
                  });
                }),
                128
                /* KEYED_FRAGMENT */
              )),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(__props.svgOptions.allPoint, (index) => {
                  return vue.openBlock(), vue.createElementBlock("g", {
                    class: "u-point",
                    style: { "display": "none" },
                    key: index
                  }, [..._cache[0] || (_cache[0] = [
                    vue.createElementVNode(
                      "circle",
                      { r: "3" },
                      null,
                      -1
                      /* CACHED */
                    )
                  ])]);
                }),
                128
                /* KEYED_FRAGMENT */
              )),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(__props.svgOptions.virtualPoint, (index) => {
                  return vue.openBlock(), vue.createElementBlock("g", {
                    class: "uv-point",
                    style: { "display": "none" },
                    key: index
                  }, [..._cache[1] || (_cache[1] = [
                    vue.createElementVNode(
                      "circle",
                      { r: "3" },
                      null,
                      -1
                      /* CACHED */
                    )
                  ])]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ],
            64
            /* STABLE_FRAGMENT */
          )) : vue.createCommentVNode("v-if", true)
        ],
        512
        /* NEED_PATCH */
      );
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=svg-base.vue2.js.map
