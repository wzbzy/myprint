'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vueDemi = require('vue-demi');
var devicePixelRatio = require('../../../utils/devicePixelRatio.js');
var scaleUtil = require('../../../utils/scaleUtil.js');
var elementUtil = require('../../../utils/elementUtil.js');
var utils = require('../../../utils/utils.js');
var app = require('../../../stores/app.js');
var d3Selection = require('d3-selection');
var d3Path = require('d3-path');
var moveable = require('../../../plugins/moveable/moveable.js');

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

var d3Selection__namespace = /*#__PURE__*/_interopNamespaceDefault(d3Selection);
var d3Path__namespace = /*#__PURE__*/_interopNamespaceDefault(d3Path);

var _sfc_main = /* @__PURE__ */ vue.defineComponent({
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
    const appStore = app.useAppStoreHook();
    const props = __props;
    const highlightStyle = vueDemi.computed(() => {
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
    const canvas = vueDemi.ref();
    const ruleRef = vueDemi.ref();
    let height = 20;
    const length = vueDemi.ref(0);
    const ruleWidth = vueDemi.ref(0);
    const ruleHeight = vueDemi.ref(0);
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
        id: utils.generateUUID(),
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
      elementUtil.getCurrentPanel().auxiliaryLineList.push(auxiliaryLine);
      vueDemi.nextTick(() => {
        moveable.changeDragSnapIs();
      });
    }
    vueDemi.watch(() => props.scroll, (_newQuestion, _oldQuestion) => {
      if (props.direction == "horizontal") {
        ruleRef.value.scrollTo(props.scroll, 0);
      } else {
        ruleRef.value.scrollTo(0, props.scroll);
      }
    });
    const styleWrapper = vueDemi.computed(() => {
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
    const style = vueDemi.computed(() => {
      const styleTmp = {};
      if (props.direction == "horizontal") {
        styleTmp["width"] = elementUtil.valueUnit(props.length);
        styleTmp["height"] = height + "px";
        styleTmp["transformOrigin"] = scaleUtil.scaleUtil.miniMap.scale < 1 ? "0" : " left";
        styleTmp["transform"] = "scaleX(" + scaleUtil.scaleUtil.miniMap.scale + ")";
      } else {
        styleTmp["width"] = height + "px";
        styleTmp["minWidth"] = height + "px";
        styleTmp["height"] = elementUtil.valueUnit(props.length);
        styleTmp["transformOrigin"] = scaleUtil.scaleUtil.miniMap.scale < 1 ? "0" : " top";
        styleTmp["transform"] = "scaleY(" + scaleUtil.scaleUtil.miniMap.scale + ")";
      }
      return styleTmp;
    });
    vueDemi.watchEffect(() => {
      length.value = devicePixelRatio.unit2px(Number.parseInt(props.length.toString()) * 2) + 20;
      if (length.value != 0) {
        vueDemi.nextTick(() => {
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
      const path = d3Path__namespace.path();
      const space = utils.getRatio();
      const pxLength = devicePixelRatio.unit2unit(utils._defaultVal(appStore.lastPageUnit, "px"), utils._defaultVal(elementUtil.getCurrentPanel().pageUnit, "px"), props.length);
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
    vueDemi.onMounted(() => {
      chartSvg = d3Selection__namespace.select(canvas.value);
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        null,
        [
          vue.createCommentVNode(" \u523B\u5EA6\u5C3A\u5BB9 "),
          vue.createElementVNode(
            "div",
            {
              class: "verticalRule",
              ref_key: "ruleRef",
              ref: ruleRef,
              style: vue.normalizeStyle(vue.unref(styleWrapper)),
              onMousemove: _cache[0] || (_cache[0] = ($event) => mouseMove($event)),
              onMouseleave: mouseLeave,
              onClick: _cache[1] || (_cache[1] = ($event) => mouseClick($event))
            },
            [
              __props.highlight.x != void 0 ? (vue.openBlock(), vue.createElementBlock(
                "div",
                {
                  key: 0,
                  class: "ruleHighlight pointer-events",
                  style: vue.normalizeStyle(vue.unref(highlightStyle))
                },
                null,
                4
                /* STYLE */
              )) : vue.createCommentVNode("v-if", true),
              (vue.openBlock(), vue.createElementBlock(
                "svg",
                {
                  id: "canvas",
                  ref_key: "canvas",
                  ref: canvas,
                  class: "rule pointer-events",
                  style: vue.normalizeStyle(vue.unref(style))
                },
                [..._cache[2] || (_cache[2] = [
                  vue.createElementVNode(
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

exports.default = _sfc_main;
//# sourceMappingURL=rule.vue2.js.map
