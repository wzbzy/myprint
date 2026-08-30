'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vueDemi = require('vue-demi');
require('../../design/shape/line/horizontalLine/index.js');
require('../../design/shape/rect/rect/index.js');
require('../../design/shape/line/dottedHorizontalLine/index.js');
require('../../design/shape/line/verticalLine/index.js');
require('../../design/shape/line/dottedVerticalLine/index.js');
require('../../design/image/index.js');
require('../../design/text/index.js');
var dataTable = require('../../design/table/data-table/data-table.vue.js');
var event = require('../../../utils/event.js');
var numberUtil = require('../../../utils/numberUtil.js');
var scaleUtil = require('../../../utils/scaleUtil.js');
var app = require('../../../stores/app.js');
var elementUtil = require('../../../utils/elementUtil.js');
var devicePixelRatio = require('../../../utils/devicePixelRatio.js');
var config = require('../../../stores/config.js');
var historyUtil = require('../../../utils/historyUtil.js');
var tipIcon = require('../../my/icon/tip-icon.vue.js');
var index = require('../../../locales/index.js');
var utils = require('../../../utils/utils.js');
var text = require('../../design/text/text.vue.js');
var image = require('../../design/image/image.vue.js');
var rect = require('../../design/shape/rect/rect/rect.vue.js');
var horizontalLine = require('../../design/shape/line/horizontalLine/horizontalLine.vue.js');
var verticalLine = require('../../design/shape/line/verticalLine/verticalLine.vue.js');
var dottedHorizontalLine = require('../../design/shape/line/dottedHorizontalLine/dottedHorizontalLine.vue.js');
var dottedVerticalLine = require('../../design/shape/line/dottedVerticalLine/dottedVerticalLine.vue.js');

const _hoisted_1 = { class: "mini-map-toolbar display-flex" };
const _hoisted_2 = { class: "mini-map-toolbar_redo-undo display-flex" };
const _hoisted_3 = { class: "mini-map-toolbar_control display-flex" };
const _hoisted_4 = { class: "display-flex space-between width-100-p mini-map-toolbar_control_scale" };
const _hoisted_5 = { class: "mini-map-toolbar_control_ratio" };
const scaleContainerWidth = 260;
const scaleContainerHeight = 160;
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "minimap-panel",
  setup(__props) {
    const appStore = app.useAppStoreHook();
    const configStore = config.useConfigStore();
    const designContentRef = vueDemi.ref();
    const data = vueDemi.reactive({
      viewport: {
        x: 0,
        y: 0
      },
      width: 0,
      height: 0,
      miniMap: {
        x: 0,
        y: 0
      },
      scale: 0,
      openIs: true
    });
    utils.mitt.on("minimapViewportSize", minimapViewportSize);
    utils.mitt.on("minimapViewportScroll", minimapViewportScroll);
    function minimapViewportSize(size) {
      data.viewport.width = size.width;
      data.viewport.height = size.height;
    }
    function minimapViewportScroll(size) {
      data.viewport.x = size.x;
      data.viewport.y = size.y;
    }
    utils.mitt.on("changePageSize", changePageSize);
    function changePageSize() {
      data.width = devicePixelRatio.unit2px(elementUtil.getCurrentPanel().width);
      data.height = devicePixelRatio.unit2px(elementUtil.getCurrentPanel().height);
      let widthCalc = scaleContainerWidth / data.width;
      let heightCalc = scaleContainerHeight / data.height;
      let min = Math.min(widthCalc, heightCalc);
      min = min / scaleUtil.scaleUtil.miniMap.scale;
      data.scale = min;
      data.miniMap.width = data.width * min;
      data.miniMap.height = data.height * min;
      data.miniMap.x = (scaleContainerWidth - data.miniMap.width) / 2;
      data.miniMap.y = (scaleContainerHeight - data.miniMap.height) / 2;
      utils.mitt.emit("scaleEvent");
    }
    const viewportStyle = vueDemi.computed(() => {
      const style = {};
      const viewport = data.viewport;
      let w = viewport.width - 10;
      let h = viewport.height;
      let x = viewport.x;
      let y = viewport.y;
      let viewportWidth = Math.min(w * data.scale, data.miniMap.width);
      let t = x * data.scale + data.miniMap.x + viewportWidth;
      if (t > 260) {
        t = 260 - viewportWidth;
      } else {
        t = t - viewportWidth;
      }
      style["left"] = t + "px";
      style["top"] = data.miniMap.y + y * data.scale + "px";
      style["width"] = viewportWidth + "px";
      style["height"] = Math.min((h - 1) * data.scale, data.miniMap.height) + "px";
      return style;
    });
    function mousedown(ev) {
      const tmpX = ev.clientX;
      const tmpY = ev.clientY;
      document.addEventListener("mousemove", mousemove);
      document.addEventListener("mouseup", mouseup);
      appStore.dataRotation = "move";
      let offsetScrollX = ev.offsetX - data.viewport.width / 2;
      let offsetScrollY = ev.offsetY - data.viewport.height / 2;
      utils.mitt.emit("scaleMove", { x: offsetScrollX, y: offsetScrollY });
      function mousemove(ev2) {
        let offsetX = (ev2.clientX - tmpX) / data.scale + offsetScrollX;
        let offsetY = (ev2.clientY - tmpY) / data.scale + offsetScrollY;
        utils.mitt.emit("scaleMove", { x: offsetX, y: offsetY });
        event.clearEventBubble(ev2);
        return true;
      }
      function mouseup(ev2) {
        event.clearEventBubble(ev2);
        document.removeEventListener("mousemove", mousemove);
        document.removeEventListener("mouseup", mouseup);
        appStore.dataRotation = "none";
        return false;
      }
      event.clearEventBubble(ev);
      return true;
    }
    function startScale(scale) {
      scaleUtil.scaleUtil.miniMap.scale = numberUtil.default.sum(scaleUtil.scaleUtil.miniMap.scale, scale);
      changePageSize();
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(
        "div",
        {
          class: vue.normalizeClass(["content-scale", { run: vue.unref(appStore).currentElement.id == null }])
        },
        [
          vue.unref(configStore).settingPanel.miniMap.visible ? (vue.openBlock(), vue.createElementBlock(
            "div",
            {
              key: 0,
              class: "scale-preview",
              ref: "scalePreviewRef",
              onMousedown: _cache[0] || (_cache[0] = ($event) => mousedown($event))
            },
            [
              vue.createElementVNode(
                "div",
                {
                  class: "scale-design-content",
                  ref_key: "designContentRef",
                  ref: designContentRef,
                  style: vue.normalizeStyle({
                    left: vue.unref(data).miniMap.x + "px",
                    top: vue.unref(data).miniMap.y + "px",
                    transformOrigin: "0% 0%",
                    width: vue.unref(scaleUtil.scaleUtil).scale(vue.unref(data).width) + "px",
                    height: vue.unref(scaleUtil.scaleUtil).scale(vue.unref(data).height) + "px",
                    scale: vue.unref(data).scale
                  })
                },
                [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(vue.unref(elementUtil.getCurrentPanel)().elementList, (element, index) => {
                      return vue.openBlock(), vue.createElementBlock(
                        "div",
                        {
                          style: vue.normalizeStyle([{ "position": "absolute" }, { left: vue.unref(elementUtil.valueUnit)(element.x), top: vue.unref(elementUtil.valueUnit)(element.y), width: vue.unref(elementUtil.valueUnit)(element.width), height: vue.unref(elementUtil.valueUnit)(element.height) }]),
                          key: index,
                          class: "pointer-events"
                        },
                        [
                          element.type == "Text" ? (vue.openBlock(), vue.createBlock(vue.unref(text.default), {
                            key: 0,
                            element
                          }, null, 8, ["element"])) : vue.createCommentVNode("v-if", true),
                          element.type === "Image" ? (vue.openBlock(), vue.createBlock(vue.unref(image.default), {
                            key: 1,
                            element
                          }, null, 8, ["element"])) : vue.createCommentVNode("v-if", true),
                          element.type === "DataTable" ? (vue.openBlock(), vue.createBlock(dataTable.default, {
                            key: 2,
                            element
                          }, null, 8, ["element"])) : vue.createCommentVNode("v-if", true),
                          element.type === "Rect" ? (vue.openBlock(), vue.createBlock(vue.unref(rect.default), {
                            key: 3,
                            element
                          }, null, 8, ["element"])) : vue.createCommentVNode("v-if", true),
                          element.type === "HorizontalLine" ? (vue.openBlock(), vue.createBlock(vue.unref(horizontalLine.default), {
                            key: 4,
                            element
                          }, null, 8, ["element"])) : vue.createCommentVNode("v-if", true),
                          element.type === "VerticalLine" ? (vue.openBlock(), vue.createBlock(vue.unref(verticalLine.default), {
                            key: 5,
                            element
                          }, null, 8, ["element"])) : vue.createCommentVNode("v-if", true),
                          element.type === "DottedHorizontalLine" ? (vue.openBlock(), vue.createBlock(vue.unref(dottedHorizontalLine.default), {
                            key: 6,
                            element
                          }, null, 8, ["element"])) : vue.createCommentVNode("v-if", true),
                          element.type === "DottedVerticalLine" ? (vue.openBlock(), vue.createBlock(vue.unref(dottedVerticalLine.default), {
                            key: 7,
                            element
                          }, null, 8, ["element"])) : vue.createCommentVNode("v-if", true)
                        ],
                        4
                        /* STYLE */
                      );
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ],
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "div",
                {
                  class: "viewport",
                  style: vue.normalizeStyle(vue.unref(viewportStyle))
                },
                null,
                4
                /* STYLE */
              )
            ],
            544
            /* NEED_HYDRATION, NEED_PATCH */
          )) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("div", _hoisted_1, [
            vue.createElementVNode("div", _hoisted_2, [
              vue.createElementVNode(
                "div",
                {
                  onMousedown: _cache[1] || (_cache[1] = ($event) => vue.unref(event.clearEventBubble)($event)),
                  onClick: _cache[2] || (_cache[2] = //@ts-ignore
                  (...args) => vue.unref(historyUtil.undoPanel) && vue.unref(historyUtil.undoPanel)(...args)),
                  class: vue.normalizeClass([[{ "my-icon-disabled": !vue.unref(historyUtil.canUndo) }], "my-icon iconfont icon-undo mini-map-toolbar-icon"])
                },
                null,
                34
                /* CLASS, NEED_HYDRATION */
              ),
              vue.createElementVNode(
                "div",
                {
                  onMousedown: _cache[3] || (_cache[3] = ($event) => vue.unref(event.clearEventBubble)($event)),
                  onClick: _cache[4] || (_cache[4] = //@ts-ignore
                  (...args) => vue.unref(historyUtil.redoPanel) && vue.unref(historyUtil.redoPanel)(...args)),
                  class: vue.normalizeClass([[{ "my-icon-disabled": !vue.unref(historyUtil.canRedo) }], "my-icon iconfont icon-redo mini-map-toolbar-icon"])
                },
                null,
                34
                /* CLASS, NEED_HYDRATION */
              )
            ]),
            vue.createElementVNode("div", _hoisted_3, [
              vue.createCommentVNode("        <div>\u624B\u52BF</div>"),
              vue.createElementVNode("div", _hoisted_4, [
                vue.createVNode(tipIcon.default, {
                  tips: vue.unref(index.i18n)("common.panel.minimap.zoom.out"),
                  onClick: _cache[5] || (_cache[5] = ($event) => startScale(-0.1)),
                  placement: "top",
                  class: "icon-suoxiao iconfont mini-map-toolbar-icon"
                }, null, 8, ["tips"]),
                vue.createElementVNode(
                  "div",
                  _hoisted_5,
                  vue.toDisplayString(vue.unref(numberUtil.default).mul(vue.unref(scaleUtil.scaleUtil).miniMap.scale, 100)) + "% ",
                  1
                  /* TEXT */
                ),
                vue.createVNode(tipIcon.default, {
                  tips: vue.unref(index.i18n)("common.panel.minimap.zoom.in"),
                  onClick: _cache[6] || (_cache[6] = ($event) => startScale(0.1)),
                  placement: "top",
                  class: "icon-fangda iconfont mini-map-toolbar-icon"
                }, null, 8, ["tips"]),
                vue.createCommentVNode(`                    <tip-icon :tips="i18n('common.panel.minimap.navigation')"`),
                vue.createCommentVNode('                              :modelValue="configStore.settingPanel.miniMap.visible"'),
                vue.createCommentVNode('                              @update:model-value="flag => configStore.settingPanel.miniMap.visible = flag"'),
                vue.createCommentVNode('                              class="icon-map iconfont mini-map-toolbar-icon" />')
              ])
            ])
          ])
        ],
        2
        /* CLASS */
      );
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=minimap-panel.vue2.js.map
