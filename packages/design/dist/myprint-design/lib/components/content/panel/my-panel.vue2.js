'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var rule = require('../../my/rule/rule.vue.js');
var scaleUtil = require('../../../utils/scaleUtil.js');
var vueDemi = require('vue-demi');
var historyUtil = require('../../../utils/historyUtil.js');
var elementUtil = require('../../../utils/elementUtil.js');
var app = require('../../../stores/app.js');
var elementList = require('../../design/element-list.vue.js');
var keyboardUtil = require('../../../utils/keyboardUtil.js');
var moveable = require('../../../plugins/moveable/moveable.js');
var design = require('../../design/design.vue.js');
var selecto = require('../../../plugins/moveable/selecto.js');
var auxiliaryLine = require('../../design/auxiliary/auxiliary-line.vue.js');
var myIcon = require('../../my/icon/my-icon.vue.js');
var utils = require('../../../utils/utils.js');

const _hoisted_1 = { class: "design-panel user-select-none" };
const _hoisted_2 = { class: "display-flex" };
const _hoisted_3 = {
  class: "display-flex design-content_inner",
  tabindex: "0"
};
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "my-panel",
  setup(__props) {
    const panel = elementUtil.getCurrentPanel();
    const designContentRef = vueDemi.ref();
    const appStore = app.useAppStoreHook();
    const contentScale = vueDemi.reactive({
      openIs: false
    });
    const auxiliaryLineVisible = vueDemi.ref(true);
    let resizeObserver;
    const highlightRule = vueDemi.reactive({
      horizontal: {
        direction: "horizontal",
        highlight: { x: void 0, width: 0 },
        scroll: 0
      },
      vertical: {
        direction: "vertical",
        highlight: { x: void 0, width: 0 },
        scroll: 0
      }
    });
    const designScrollRef = vueDemi.ref();
    utils.mitt.on("elementClick", elementClick);
    utils.mitt.on("scaleEvent", scaleEvent);
    utils.mitt.on("panelSnapshot", panelSnapshot);
    utils.mitt.on("updatePanel", moveable.updatePanel);
    utils.mitt.on("triggerScroll", moveable.updatePanel);
    utils.mitt.on("scaleMove", scaleMove);
    vueDemi.onMounted(() => {
      keyboardUtil.mountedKeyboardEvent();
      vueDemi.nextTick(() => {
        selecto.initSelecto();
        moveable.initMoveable(selecto.selecto.value, highlightRule);
      });
      utils.mitt.emit("minimapViewportSize", {
        width: designScrollRef.value.clientWidth,
        height: designScrollRef.value.clientHeight
      });
      resizeObserver = new ResizeObserver((_entries) => {
        utils.mitt.emit("minimapViewportSize", {
          width: designScrollRef.value.clientWidth,
          height: designScrollRef.value.clientHeight
        });
      });
      resizeObserver.observe(designScrollRef.value);
      const rect = designScrollRef.value.getBoundingClientRect();
      panel.runtimeOption.target = designContentRef.value;
      appStore.panelPosition = { x: rect.x, y: rect.y, scrollX: 0, scrollY: 0 };
    });
    vueDemi.onUnmounted(() => {
      resizeObserver.disconnect();
      keyboardUtil.unMountedKeyboardEvent();
    });
    function clickAuxiliaryLineVisible() {
      auxiliaryLineVisible.value = !auxiliaryLineVisible.value;
      for (let myAuxiliaryLine of panel.auxiliaryLineList) {
        myAuxiliaryLine.runtimeOption.auxiliaryLineStatus = auxiliaryLineVisible.value ? "SHOW" : "HIDDEN";
      }
      moveable.changeDragSnapIs();
    }
    function scroll(_scrollData) {
      highlightRule.horizontal.scroll = designScrollRef.value.scrollLeft;
      highlightRule.vertical.scroll = designScrollRef.value.scrollTop;
      utils.mitt.emit("minimapViewportScroll", {
        x: designScrollRef.value.scrollLeft,
        y: designScrollRef.value.scrollTop
      });
      appStore.panelPosition.scrollX = designScrollRef.value.scrollLeft;
      appStore.panelPosition.scrollY = designScrollRef.value.scrollTop;
    }
    function wheel(event) {
      event.preventDefault();
      designScrollRef.value.scrollTop += event.deltaY;
      designScrollRef.value.scrollLeft += event.deltaX;
      utils.mitt.emit("minimapViewportScroll", {
        x: designScrollRef.value.scrollLeft,
        y: designScrollRef.value.scrollTop
      });
      appStore.panelPosition.scrollX = designScrollRef.value.scrollLeft;
      appStore.panelPosition.scrollY = designScrollRef.value.scrollTop;
    }
    function scaleMove(data) {
      designScrollRef.value.scrollTo(data.x, data.y);
    }
    function panelSnapshot(snapshot) {
      if (!snapshot.type) {
        snapshot.type = "PANEL";
      }
      historyUtil.record(snapshot);
    }
    function elementClick(element) {
      contentScale.openIs = true;
      elementUtil.none(panel.pageHeader);
      elementUtil.none(panel.pageFooter);
      elementListNone();
      elementUtil.handle(element);
    }
    function scaleEvent() {
      designContentRef.value?.classList.add("design-content-scale");
      vueDemi.nextTick(() => {
        setTimeout(() => {
          designContentRef.value?.classList.remove("design-content-scale");
        }, 100);
      });
    }
    function elementListNone() {
      for (let valueElement of panel.elementList) {
        elementUtil.none(valueElement);
      }
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.createElementVNode("div", _hoisted_2, [
          vue.createVNode(myIcon.default, {
            style: { "min-width": "20px", "height": "20px" },
            onClick: clickAuxiliaryLineVisible,
            class: vue.normalizeClass(["cursor-pointer iconfont", [vue.unref(auxiliaryLineVisible) ? "icon-yanjing_xianshi_o" : "icon-yanjing_yincang_o"]])
          }, null, 8, ["class"]),
          vue.createVNode(rule.default, {
            direction: vue.unref(highlightRule).horizontal.direction,
            length: vue.unref(panel).width,
            auxiliaryLineVisible: vue.unref(auxiliaryLineVisible),
            highlight: vue.unref(highlightRule).horizontal.highlight,
            scroll: vue.unref(highlightRule).horizontal.scroll
          }, null, 8, ["direction", "length", "auxiliaryLineVisible", "highlight", "scroll"])
        ]),
        vue.createElementVNode("div", _hoisted_3, [
          vue.createVNode(rule.default, {
            direction: vue.unref(highlightRule).vertical.direction,
            length: vue.unref(panel).height,
            auxiliaryLineVisible: vue.unref(auxiliaryLineVisible),
            highlight: vue.unref(highlightRule).vertical.highlight,
            scroll: vue.unref(highlightRule).vertical.scroll
          }, null, 8, ["direction", "length", "auxiliaryLineVisible", "highlight", "scroll"]),
          vue.createElementVNode(
            "div",
            {
              class: "affix-container design-content-scroll",
              onScroll: scroll,
              onWheel: wheel,
              ref_key: "designScrollRef",
              ref: designScrollRef
            },
            [
              vue.createElementVNode(
                "div",
                {
                  class: vue.normalizeClass(["design-content design-content-bg", { "dropInIs": vue.unref(panel).runtimeOption.dragInIs }]),
                  ref_key: "designContentRef",
                  ref: designContentRef,
                  style: vue.normalizeStyle({
                    transformOrigin: "left top",
                    transform: "scale(" + vue.unref(scaleUtil.scaleUtil).miniMap.scale + ")",
                    minWidth: vue.unref(elementUtil.valueUnit)(vue.unref(panel).width),
                    width: vue.unref(elementUtil.valueUnit)(vue.unref(panel).width),
                    height: vue.unref(elementUtil.valueUnit)(vue.unref(panel).height)
                  })
                },
                [
                  vue.unref(panel).pageHeader != void 0 ? (vue.openBlock(), vue.createBlock(design.default, {
                    key: 0,
                    element: vue.unref(panel).pageHeader
                  }, null, 8, ["element"])) : vue.createCommentVNode("v-if", true),
                  vue.unref(panel).pageFooter != void 0 ? (vue.openBlock(), vue.createBlock(design.default, {
                    key: 1,
                    element: vue.unref(panel).pageFooter
                  }, null, 8, ["element"])) : vue.createCommentVNode("v-if", true),
                  vue.createVNode(elementList.default, {
                    elementList: vue.unref(panel).elementList
                  }, null, 8, ["elementList"])
                ],
                6
                /* CLASS, STYLE */
              )
            ],
            544
            /* NEED_HYDRATION, NEED_PATCH */
          ),
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(vue.unref(panel).auxiliaryLineList, (item) => {
              return vue.openBlock(), vue.createBlock(auxiliaryLine.default, {
                element: item,
                key: item.id,
                "scroll-x": vue.unref(highlightRule).horizontal.scroll,
                "scroll-y": vue.unref(highlightRule).vertical.scroll
              }, null, 8, ["element", "scroll-x", "scroll-y"]);
            }),
            128
            /* KEYED_FRAGMENT */
          )),
          vue.unref(auxiliaryLineVisible) ? (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            { key: 0 },
            [
              vue.unref(appStore).auxiliaryLineTmp.x != null ? (vue.openBlock(), vue.createBlock(auxiliaryLine.default, {
                key: 0,
                tmp: "",
                element: vue.unref(appStore).auxiliaryLineTmp
              }, null, 8, ["element"])) : vue.createCommentVNode("v-if", true)
            ],
            64
            /* STABLE_FRAGMENT */
          )) : vue.createCommentVNode("v-if", true)
        ])
      ]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=my-panel.vue2.js.map
