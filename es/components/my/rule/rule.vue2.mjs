import { defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, normalizeStyle, unref } from 'vue';
import { computed, ref, nextTick, watch, watchEffect, onMounted } from 'vue-demi';
import { unit2px, unit2unit } from '../../../utils/devicePixelRatio.mjs';
import { scaleUtil } from '../../../utils/scaleUtil.mjs';
import { getCurrentPanel, valueUnit } from '../../../utils/elementUtil.mjs';
import { generateUUID, getRatio, _defaultVal } from '../../../utils/utils.mjs';
import { useAppStoreHook } from '../../../stores/app.mjs';
import * as d3Selection from 'd3-selection';
import * as d3Path from 'd3-path';
import { changeDragSnapIs } from '../../../plugins/moveable/moveable.mjs';

var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "rule",
  props: {
    direction: { default: "horizontal" },
    highlight: { default: () => {
      return { x: void 0, width: 1 };
    } },
    length: { default: 0 },
    auxiliaryLineVisible: { type: Boolean },
    scroll: { default: 0 }
  },
  setup(__props) {
    const appStore = useAppStoreHook();
    const props = __props;
    const highlightStyle = computed(() => {
      if (props.direction == "horizontal") {
        return {
          position: "absolute",
          left: props.highlight.x + 30 + "px",
          bottom: 0,
          width: props.highlight.width + "px",
          height: "5px",
          border: "1px solid #8c939d"
        };
      } else {
        return {
          position: "absolute",
          top: props.highlight.x + 30 + "px",
          right: 0,
          width: "5px",
          height: props.highlight.width + "px",
          border: "1px solid #8c939d"
        };
      }
    });
    const canvas = ref();
    const ruleRef = ref();
    let height = 20;
    const length = ref(0);
    const ruleWidth = ref(0);
    const ruleHeight = ref(0);
    let chartSvg;
    function mouseMove(event) {
      if (event.buttons == 1) {
        return;
      }
      appStore.auxiliaryLineTmp = {
        x: 0,
        y: 0,
        runtimeOption: { x: 0, y: 0, auxiliaryLineStatus: "SHOW" },
        direction: props.direction == "vertical" ? "horizontal" : "vertical"
      };
      if (appStore.auxiliaryLineTmp.direction == "vertical") {
        appStore.auxiliaryLineTmp.x = event.offsetX + 20;
      } else {
        appStore.auxiliaryLineTmp.y = event.offsetY + 20;
      }
    }
    function mouseLeave() {
      appStore.auxiliaryLineTmp = { runtimeOption: { x: 0, y: 0, auxiliaryLineStatus: "SHOW" } };
    }
    function mouseClick(event) {
      if (!props.auxiliaryLineVisible) {
        return;
      }
      const auxiliaryLine = {
        id: generateUUID(),
        x: 0,
        y: 0,
        runtimeOption: { x: 0, y: 0, auxiliaryLineStatus: "SHOW" },
        direction: props.direction == "vertical" ? "horizontal" : "vertical"
      };
      if (auxiliaryLine.direction == "vertical") {
        auxiliaryLine.x = event.offsetX + 20;
      } else {
        auxiliaryLine.y = event.offsetY + 20;
      }
      getCurrentPanel().auxiliaryLineList.push(auxiliaryLine);
      nextTick(() => {
        changeDragSnapIs();
      });
    }
    watch(() => props.scroll, (_newQuestion, _oldQuestion) => {
      if (props.direction == "horizontal") {
        ruleRef.value.scrollTo(props.scroll, 0);
      } else {
        ruleRef.value.scrollTo(0, props.scroll);
      }
    });
    const styleWrapper = computed(() => {
      const styleTmp = {};
      if (props.direction == "horizontal") {
        styleTmp["box-sizing"] = "border-box";
        styleTmp["borderTop"] = "1px solid rgb(233, 233, 233)";
        styleTmp["paddingLeft"] = "30px";
        styleTmp["paddingRight"] = "30px";
        styleTmp["height"] = height + "px";
      } else {
        styleTmp["paddingTop"] = "30px";
        styleTmp["paddingBottom"] = "50px";
        styleTmp["width"] = height + "px";
      }
      return styleTmp;
    });
    const style = computed(() => {
      const styleTmp = {};
      if (props.direction == "horizontal") {
        styleTmp["width"] = valueUnit(props.length);
        styleTmp["height"] = height + "px";
        styleTmp["transformOrigin"] = scaleUtil.miniMap.scale < 1 ? "0" : " left";
        styleTmp["transform"] = "scaleX(" + scaleUtil.miniMap.scale + ")";
      } else {
        styleTmp["width"] = height + "px";
        styleTmp["minWidth"] = height + "px";
        styleTmp["height"] = valueUnit(props.length);
        styleTmp["transformOrigin"] = scaleUtil.miniMap.scale < 1 ? "0" : " top";
        styleTmp["transform"] = "scaleY(" + scaleUtil.miniMap.scale + ")";
      }
      return styleTmp;
    });
    watchEffect(() => {
      length.value = unit2px(Number.parseInt(props.length.toString()) * 2) + 20;
      if (length.value != 0) {
        nextTick(() => {
          drawRuler();
        });
      }
      if (props.direction == "horizontal") {
        ruleWidth.value = length.value;
        ruleHeight.value = height;
      } else {
        ruleWidth.value = height;
        ruleHeight.value = length.value;
      }
    });
    function drawRuler() {
      const path = d3Path.path();
      const space = getRatio();
      const pxLength = unit2unit(_defaultVal(appStore.lastPageUnit, "px"), _defaultVal(getCurrentPanel().pageUnit, "px"), props.length);
      chartSvg.selectAll("text").remove();
      if (props.direction == "horizontal") {
        for (let i2 = 1; i2 < pxLength; i2++) {
          if (i2 % 5 == 0) {
            path.moveTo(space * i2, 10);
          } else if (i2 % 2 == 0) {
            path.moveTo(space * i2, 13);
          } else {
            path.moveTo(space * i2, 14);
          }
          path.lineTo(space * i2, 20);
          if (i2 % 10 == 0) {
            chartSvg.append("text").attr("x", space * i2 - 7).attr("y", 10).text(i2 + "").style("fill", "black").style("font-size", "12px");
          }
        }
      } else {
        for (var i = 1; i < pxLength; i++) {
          if (i % 5 == 0) {
            path.moveTo(10, space * i);
          } else if (i % 2 == 0) {
            path.moveTo(13, space * i);
          } else {
            path.moveTo(14, space * i);
          }
          path.lineTo(20, space * i);
          if (i % 10 == 0) {
            chartSvg.append("text").attr("x", 3).attr("y", space * i).text(i + "").style("fill", "black").attr("transform", `rotate(-90, 10, ${space * i})`).style("font-size", "12px");
          }
        }
      }
      chartSvg.select(".u-path").style("stroke", "black").style("fill", "white").attr("d", path.toString());
    }
    onMounted(() => {
      chartSvg = d3Selection.select(canvas.value);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          createCommentVNode(" \u523B\u5EA6\u5C3A\u5BB9 "),
          createElementVNode(
            "div",
            {
              class: "verticalRule",
              ref_key: "ruleRef",
              ref: ruleRef,
              style: normalizeStyle(unref(styleWrapper)),
              onMousemove: _cache[0] || (_cache[0] = ($event) => mouseMove($event)),
              onMouseleave: mouseLeave,
              onClick: _cache[1] || (_cache[1] = ($event) => mouseClick($event))
            },
            [
              __props.highlight.x != void 0 ? (openBlock(), createElementBlock(
                "div",
                {
                  key: 0,
                  class: "ruleHighlight pointer-events",
                  style: normalizeStyle(unref(highlightStyle))
                },
                null,
                4
                /* STYLE */
              )) : createCommentVNode("v-if", true),
              (openBlock(), createElementBlock(
                "svg",
                {
                  id: "canvas",
                  ref_key: "canvas",
                  ref: canvas,
                  class: "rule pointer-events",
                  style: normalizeStyle(unref(style))
                },
                [..._cache[2] || (_cache[2] = [
                  createElementVNode(
                    "path",
                    {
                      class: "u-path",
                      d: ""
                    },
                    null,
                    -1
                    /* CACHED */
                  )
                ])],
                4
                /* STYLE */
              ))
            ],
            36
            /* STYLE, NEED_HYDRATION */
          )
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      );
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=rule.vue2.mjs.map
