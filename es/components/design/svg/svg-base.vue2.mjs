import { defineComponent, openBlock, createElementBlock, createElementVNode, unref, Fragment, renderList, createCommentVNode } from 'vue';
import { ref, watch, onMounted } from 'vue-demi';
import * as d3Array from 'd3-array';
import * as d3Selection from 'd3-selection';
import * as d3Drag from 'd3-drag';
import { updateSvg, dist } from '../../../utils/svgUtil.mjs';
import { elementHandleHandleStatusList } from '../../../constants/common.mjs';
import { displayDesign } from '../../../utils/elementUtil.mjs';

var _sfc_main = /* @__PURE__ */ defineComponent({
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
    const chartRef = ref();
    let subject = void 0, dx, dy;
    let startX, startY;
    let dragFun;
    let lastClickPoint = void 0;
    watch(() => props.element.runtimeOption.status, (n, _o) => {
      props.svgOptions.drawAuxiliary = elementHandleHandleStatusList.includes(n) && !props.element.lock;
      updateSvg(chartRef.value, props.svgOptions, props.draw);
      draggable();
    });
    watch(() => props.element.lock, (_n, _o) => {
      props.svgOptions.drawAuxiliary = elementHandleHandleStatusList.includes(props.element.runtimeOption.status) && !props.element.lock;
      updateSvg(chartRef.value, props.svgOptions, props.draw);
      draggable();
    });
    watch([() => props.element.width, () => props.element.height], (_n, _o) => {
      const renderIs = props.changeSize();
      if (renderIs) {
        updateSvg(chartRef.value, props.svgOptions, props.draw);
      }
    });
    watch([() => props.element.option.color, () => props.element.option.background, () => props.element.option.opacity], (_n, _o) => {
      updateSvg(chartRef.value, props.svgOptions, props.draw);
    });
    onMounted(() => {
      props.svgOptions.element = props.element;
      dragFun = d3Drag.drag().subject(dragSubject).on("start", (event) => {
        if (subject) {
          d3Selection.select(chartRef.value).style("cursor", "grabbing");
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
            updateSvg(chartRef.value, props.svgOptions, props.draw);
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
        d3Selection.select(chartRef.value).style("cursor", null);
        updateSvg(chartRef.value, props.svgOptions, props.draw);
      }).on(
        "start.render drag.render end.render",
        () => updateSvg(chartRef.value, props.svgOptions, props.draw)
      );
      updateSvg(chartRef.value, props.svgOptions, props.draw);
    });
    function draggable() {
      if (!props.svgOptions.drawAuxiliary) {
        d3Selection.select(chartRef.value).on("mousemove", null).on(".drag", null);
        d3Selection.select(chartRef.value).style("cursor", null);
      } else {
        d3Selection.select(chartRef.value).on("mousemove", (event) => dragSubject({ sourceEvent: event })).call(dragFun);
      }
    }
    function dragSubject(event) {
      if (!props.svgOptions.allPoint) {
        return null;
      }
      const p = d3Selection.pointer(event.sourceEvent, chartRef.value);
      subject = d3Array.least(props.svgOptions.allPoint, (a, b) => dist(p, a) - dist(p, b));
      if (dist(p, subject) > 12) subject = void 0;
      if (subject == null && props.svgOptions.virtualPoint && props.svgOptions.virtualPoint.length > 0) {
        subject = d3Array.least(props.svgOptions.virtualPoint, (a, b) => dist(p, a) - dist(p, b));
        if (dist(p, subject) > 12) subject = void 0;
      }
      if (subject)
        d3Selection.select(chartRef.value).style("cursor", "hand").style("cursor", "grab");
      else d3Selection.select(chartRef.value).style("cursor", null);
      return subject;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "svg",
        {
          ref_key: "chartRef",
          ref: chartRef,
          class: "my-print-chart"
        },
        [
          _cache[2] || (_cache[2] = createElementVNode(
            "path",
            {
              class: "u-path",
              d: ""
            },
            null,
            -1
            /* CACHED */
          )),
          unref(displayDesign)(__props.element) ? (openBlock(), createElementBlock(
            Fragment,
            { key: 0 },
            [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(__props.svgOptions.controlLine, (index) => {
                  return openBlock(), createElementBlock("line", {
                    class: "u-line",
                    key: index
                  });
                }),
                128
                /* KEYED_FRAGMENT */
              )),
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(__props.svgOptions.allPoint, (index) => {
                  return openBlock(), createElementBlock("g", {
                    class: "u-point",
                    style: { "display": "none" },
                    key: index
                  }, [..._cache[0] || (_cache[0] = [
                    createElementVNode(
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
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(__props.svgOptions.virtualPoint, (index) => {
                  return openBlock(), createElementBlock("g", {
                    class: "uv-point",
                    style: { "display": "none" },
                    key: index
                  }, [..._cache[1] || (_cache[1] = [
                    createElementVNode(
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
          )) : createCommentVNode("v-if", true)
        ],
        512
        /* NEED_PATCH */
      );
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=svg-base.vue2.mjs.map
