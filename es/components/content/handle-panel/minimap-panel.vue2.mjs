import { defineComponent, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, normalizeStyle, Fragment, renderList, createBlock, createCommentVNode, createVNode, toDisplayString } from 'vue';
import { ref, reactive, computed } from 'vue-demi';
import '../../design/shape/line/horizontalLine/index.mjs';
import '../../design/shape/rect/rect/index.mjs';
import '../../design/shape/line/dottedHorizontalLine/index.mjs';
import '../../design/shape/line/verticalLine/index.mjs';
import '../../design/shape/line/dottedVerticalLine/index.mjs';
import '../../design/image/index.mjs';
import '../../design/text/index.mjs';
import DataTable from '../../design/table/data-table/data-table.vue.mjs';
import { clearEventBubble } from '../../../utils/event.mjs';
import MathCalc from '../../../utils/numberUtil.mjs';
import { scaleUtil } from '../../../utils/scaleUtil.mjs';
import { useAppStoreHook } from '../../../stores/app.mjs';
import { getCurrentPanel, valueUnit } from '../../../utils/elementUtil.mjs';
import { unit2px } from '../../../utils/devicePixelRatio.mjs';
import { useConfigStore } from '../../../stores/config.mjs';
import { undoPanel, canUndo, redoPanel, canRedo } from '../../../utils/historyUtil.mjs';
import TipIcon from '../../my/icon/tip-icon.vue.mjs';
import { i18n } from '../../../locales/index.mjs';
import { mitt } from '../../../utils/utils.mjs';
import MyText from '../../design/text/text.vue.mjs';
import MyImage from '../../design/image/image.vue.mjs';
import MyRect from '../../design/shape/rect/rect/rect.vue.mjs';
import MyHorizontalLine from '../../design/shape/line/horizontalLine/horizontalLine.vue.mjs';
import MyVerticalLine from '../../design/shape/line/verticalLine/verticalLine.vue.mjs';
import MyDottedHorizontalLine from '../../design/shape/line/dottedHorizontalLine/dottedHorizontalLine.vue.mjs';
import MyDottedVerticalLine from '../../design/shape/line/dottedVerticalLine/dottedVerticalLine.vue.mjs';

const _hoisted_1 = { class: "mini-map-toolbar display-flex" };
const _hoisted_2 = { class: "mini-map-toolbar_redo-undo display-flex" };
const _hoisted_3 = { class: "mini-map-toolbar_control display-flex" };
const _hoisted_4 = { class: "display-flex space-between width-100-p mini-map-toolbar_control_scale" };
const _hoisted_5 = { class: "mini-map-toolbar_control_ratio" };
const scaleContainerWidth = 260;
const scaleContainerHeight = 160;
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "minimap-panel",
  setup(__props) {
    const appStore = useAppStoreHook();
    const configStore = useConfigStore();
    const designContentRef = ref();
    const data = reactive({
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
    mitt.on("minimapViewportSize", minimapViewportSize);
    mitt.on("minimapViewportScroll", minimapViewportScroll);
    function minimapViewportSize(size) {
      data.viewport.width = size.width;
      data.viewport.height = size.height;
    }
    function minimapViewportScroll(size) {
      data.viewport.x = size.x;
      data.viewport.y = size.y;
    }
    mitt.on("changePageSize", changePageSize);
    function changePageSize() {
      data.width = unit2px(getCurrentPanel().width);
      data.height = unit2px(getCurrentPanel().height);
      let widthCalc = scaleContainerWidth / data.width;
      let heightCalc = scaleContainerHeight / data.height;
      let min = Math.min(widthCalc, heightCalc);
      min = min / scaleUtil.miniMap.scale;
      data.scale = min;
      data.miniMap.width = data.width * min;
      data.miniMap.height = data.height * min;
      data.miniMap.x = (scaleContainerWidth - data.miniMap.width) / 2;
      data.miniMap.y = (scaleContainerHeight - data.miniMap.height) / 2;
      mitt.emit("scaleEvent");
    }
    const viewportStyle = computed(() => {
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
      mitt.emit("scaleMove", { x: offsetScrollX, y: offsetScrollY });
      function mousemove(ev2) {
        let offsetX = (ev2.clientX - tmpX) / data.scale + offsetScrollX;
        let offsetY = (ev2.clientY - tmpY) / data.scale + offsetScrollY;
        mitt.emit("scaleMove", { x: offsetX, y: offsetY });
        clearEventBubble(ev2);
        return true;
      }
      function mouseup(ev2) {
        clearEventBubble(ev2);
        document.removeEventListener("mousemove", mousemove);
        document.removeEventListener("mouseup", mouseup);
        appStore.dataRotation = "none";
        return false;
      }
      clearEventBubble(ev);
      return true;
    }
    function startScale(scale) {
      scaleUtil.miniMap.scale = MathCalc.sum(scaleUtil.miniMap.scale, scale);
      changePageSize();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(["content-scale", { run: unref(appStore).currentElement.id == null }])
        },
        [
          unref(configStore).settingPanel.miniMap.visible ? (openBlock(), createElementBlock(
            "div",
            {
              key: 0,
              class: "scale-preview",
              ref: "scalePreviewRef",
              onMousedown: _cache[0] || (_cache[0] = ($event) => mousedown($event))
            },
            [
              createElementVNode(
                "div",
                {
                  class: "scale-design-content",
                  ref_key: "designContentRef",
                  ref: designContentRef,
                  style: normalizeStyle({
                    left: unref(data).miniMap.x + "px",
                    top: unref(data).miniMap.y + "px",
                    transformOrigin: "0% 0%",
                    width: unref(scaleUtil).scale(unref(data).width) + "px",
                    height: unref(scaleUtil).scale(unref(data).height) + "px",
                    scale: unref(data).scale
                  })
                },
                [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList(unref(getCurrentPanel)().elementList, (element, index) => {
                      return openBlock(), createElementBlock(
                        "div",
                        {
                          style: normalizeStyle([{ "position": "absolute" }, { left: unref(valueUnit)(element.x), top: unref(valueUnit)(element.y), width: unref(valueUnit)(element.width), height: unref(valueUnit)(element.height) }]),
                          key: index,
                          class: "pointer-events"
                        },
                        [
                          element.type == "Text" ? (openBlock(), createBlock(unref(MyText), {
                            key: 0,
                            element
                          }, null, 8, ["element"])) : createCommentVNode("v-if", true),
                          element.type === "Image" ? (openBlock(), createBlock(unref(MyImage), {
                            key: 1,
                            element
                          }, null, 8, ["element"])) : createCommentVNode("v-if", true),
                          element.type === "DataTable" ? (openBlock(), createBlock(DataTable, {
                            key: 2,
                            element
                          }, null, 8, ["element"])) : createCommentVNode("v-if", true),
                          element.type === "Rect" ? (openBlock(), createBlock(unref(MyRect), {
                            key: 3,
                            element
                          }, null, 8, ["element"])) : createCommentVNode("v-if", true),
                          element.type === "HorizontalLine" ? (openBlock(), createBlock(unref(MyHorizontalLine), {
                            key: 4,
                            element
                          }, null, 8, ["element"])) : createCommentVNode("v-if", true),
                          element.type === "VerticalLine" ? (openBlock(), createBlock(unref(MyVerticalLine), {
                            key: 5,
                            element
                          }, null, 8, ["element"])) : createCommentVNode("v-if", true),
                          element.type === "DottedHorizontalLine" ? (openBlock(), createBlock(unref(MyDottedHorizontalLine), {
                            key: 6,
                            element
                          }, null, 8, ["element"])) : createCommentVNode("v-if", true),
                          element.type === "DottedVerticalLine" ? (openBlock(), createBlock(unref(MyDottedVerticalLine), {
                            key: 7,
                            element
                          }, null, 8, ["element"])) : createCommentVNode("v-if", true)
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
              createElementVNode(
                "div",
                {
                  class: "viewport",
                  style: normalizeStyle(unref(viewportStyle))
                },
                null,
                4
                /* STYLE */
              )
            ],
            544
            /* NEED_HYDRATION, NEED_PATCH */
          )) : createCommentVNode("v-if", true),
          createElementVNode("div", _hoisted_1, [
            createElementVNode("div", _hoisted_2, [
              createElementVNode(
                "div",
                {
                  onMousedown: _cache[1] || (_cache[1] = ($event) => unref(clearEventBubble)($event)),
                  onClick: _cache[2] || (_cache[2] = //@ts-ignore
                  (...args) => unref(undoPanel) && unref(undoPanel)(...args)),
                  class: normalizeClass([[{ "my-icon-disabled": !unref(canUndo) }], "my-icon iconfont icon-undo mini-map-toolbar-icon"])
                },
                null,
                34
                /* CLASS, NEED_HYDRATION */
              ),
              createElementVNode(
                "div",
                {
                  onMousedown: _cache[3] || (_cache[3] = ($event) => unref(clearEventBubble)($event)),
                  onClick: _cache[4] || (_cache[4] = //@ts-ignore
                  (...args) => unref(redoPanel) && unref(redoPanel)(...args)),
                  class: normalizeClass([[{ "my-icon-disabled": !unref(canRedo) }], "my-icon iconfont icon-redo mini-map-toolbar-icon"])
                },
                null,
                34
                /* CLASS, NEED_HYDRATION */
              )
            ]),
            createElementVNode("div", _hoisted_3, [
              createCommentVNode("        <div>\u624B\u52BF</div>"),
              createElementVNode("div", _hoisted_4, [
                createVNode(TipIcon, {
                  tips: unref(i18n)("common.panel.minimap.zoom.out"),
                  onClick: _cache[5] || (_cache[5] = ($event) => startScale(-0.1)),
                  placement: "top",
                  class: "icon-suoxiao iconfont mini-map-toolbar-icon"
                }, null, 8, ["tips"]),
                createElementVNode(
                  "div",
                  _hoisted_5,
                  toDisplayString(unref(MathCalc).mul(unref(scaleUtil).miniMap.scale, 100)) + "% ",
                  1
                  /* TEXT */
                ),
                createVNode(TipIcon, {
                  tips: unref(i18n)("common.panel.minimap.zoom.in"),
                  onClick: _cache[6] || (_cache[6] = ($event) => startScale(0.1)),
                  placement: "top",
                  class: "icon-fangda iconfont mini-map-toolbar-icon"
                }, null, 8, ["tips"]),
                createCommentVNode(`                    <tip-icon :tips="i18n('common.panel.minimap.navigation')"`),
                createCommentVNode('                              :modelValue="configStore.settingPanel.miniMap.visible"'),
                createCommentVNode('                              @update:model-value="flag => configStore.settingPanel.miniMap.visible = flag"'),
                createCommentVNode('                              class="icon-map iconfont mini-map-toolbar-icon" />')
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

export { _sfc_main as default };
//# sourceMappingURL=minimap-panel.vue2.mjs.map
