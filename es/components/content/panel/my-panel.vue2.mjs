import { defineComponent, openBlock, createElementBlock, createElementVNode, createVNode, normalizeClass, unref, withModifiers, normalizeStyle, createBlock, createCommentVNode, toDisplayString, Fragment, renderList } from 'vue';
import Rule from '../../my/rule/rule.vue.mjs';
import { scaleUtil } from '../../../utils/scaleUtil.mjs';
import { ref, reactive, onMounted, nextTick, onUnmounted } from 'vue-demi';
import { record, ActionEnum } from '../../../utils/historyUtil.mjs';
import { getCurrentPanel, none, handle, initElement, installParentElement, removeElement, addElement, valueUnit } from '../../../utils/elementUtil.mjs';
import { unit2px } from '../../../utils/devicePixelRatio.mjs';
import { useAppStoreHook } from '../../../stores/app.mjs';
import ElementList from '../../design/element-list.vue.mjs';
import { mountedKeyboardEvent, unMountedKeyboardEvent } from '../../../utils/keyboardUtil.mjs';
import { updatePanel, initMoveable, changeDragSnapIs } from '../../../plugins/moveable/moveable.mjs';
import Design from '../../design/design.vue.mjs';
import { initSelecto, selecto } from '../../../plugins/moveable/selecto.mjs';
import AuxiliaryLine from '../../design/auxiliary/auxiliary-line.vue.mjs';
import MyIcon from '../../my/icon/my-icon.vue.mjs';
import { i18n } from '../../../locales/index.mjs';
import { mitt, generateUUID } from '../../../utils/utils.mjs';

const _hoisted_1 = { class: "design-panel user-select-none" };
const _hoisted_2 = { class: "display-flex" };
const _hoisted_3 = {
  class: "display-flex design-content_inner",
  tabindex: "0"
};
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "my-panel",
  setup(__props) {
    const panel = getCurrentPanel();
    const designContentRef = ref();
    const appStore = useAppStoreHook();
    const contentScale = reactive({
      openIs: false
    });
    const auxiliaryLineVisible = ref(true);
    const batchMoveMenu = reactive({
      visible: false,
      x: 0,
      y: 0
    });
    let resizeObserver;
    const highlightRule = reactive({
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
    const designScrollRef = ref();
    mitt.on("elementClick", elementClick);
    mitt.on("scaleEvent", scaleEvent);
    mitt.on("panelSnapshot", panelSnapshot);
    mitt.on("updatePanel", updatePanel);
    mitt.on("triggerScroll", updatePanel);
    mitt.on("scaleMove", scaleMove);
    onMounted(() => {
      mountedKeyboardEvent();
      nextTick(() => {
        initSelecto();
        initMoveable(selecto.value, highlightRule);
      });
      mitt.emit("minimapViewportSize", {
        width: designScrollRef.value.clientWidth,
        height: designScrollRef.value.clientHeight
      });
      resizeObserver = new ResizeObserver((_entries) => {
        mitt.emit("minimapViewportSize", {
          width: designScrollRef.value.clientWidth,
          height: designScrollRef.value.clientHeight
        });
      });
      resizeObserver.observe(designScrollRef.value);
      const rect = designScrollRef.value.getBoundingClientRect();
      panel.runtimeOption.target = designContentRef.value;
      appStore.panelPosition = { x: rect.x, y: rect.y, scrollX: 0, scrollY: 0 };
    });
    onUnmounted(() => {
      resizeObserver.disconnect();
      unMountedKeyboardEvent();
    });
    function clickAuxiliaryLineVisible() {
      auxiliaryLineVisible.value = !auxiliaryLineVisible.value;
      for (let myAuxiliaryLine of panel.auxiliaryLineList) {
        myAuxiliaryLine.runtimeOption.auxiliaryLineStatus = auxiliaryLineVisible.value ? "SHOW" : "HIDDEN";
      }
      changeDragSnapIs();
    }
    function scroll(_scrollData) {
      highlightRule.horizontal.scroll = designScrollRef.value.scrollLeft;
      highlightRule.vertical.scroll = designScrollRef.value.scrollTop;
      mitt.emit("minimapViewportScroll", {
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
      mitt.emit("minimapViewportScroll", {
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
      record(snapshot);
    }
    function elementClick(element) {
      contentScale.openIs = true;
      none(panel.pageHeader);
      none(panel.pageFooter);
      elementListNone();
      handle(element);
    }
    function scaleEvent() {
      designContentRef.value?.classList.add("design-content-scale");
      nextTick(() => {
        setTimeout(() => {
          designContentRef.value?.classList.remove("design-content-scale");
        }, 100);
      });
    }
    function elementListNone() {
      for (let valueElement of panel.elementList) {
        none(valueElement);
      }
    }
    function getSelectedPanelElements() {
      return appStore.currentElement.filter(
        (element) => element.runtimeOption.parent === panel && element.type != "PageHeader" && element.type != "PageFooter"
      );
    }
    function showBatchMoveMenu(event) {
      const selectedElements = getSelectedPanelElements();
      if (selectedElements.length < 2) {
        return;
      }
      batchMoveMenu.visible = true;
      batchMoveMenu.x = event.clientX;
      batchMoveMenu.y = event.clientY;
    }
    function closeBatchMoveMenu() {
      batchMoveMenu.visible = false;
    }
    function ensureBatchMoveTarget(key) {
      const existing = panel[key];
      if (existing != null) {
        return existing;
      }
      const container = {
        id: generateUUID(),
        type: key,
        option: { fixed: true },
        height: 30
      };
      initElement(panel, container, 0);
      container.width = panel.width;
      container.x = 0;
      container.y = key == "pageHeader" ? 0 : panel.height - container.height;
      container.runtimeOption.width = unit2px(panel.width);
      container.runtimeOption.x = 0;
      container.runtimeOption.y = unit2px(container.y);
      panel[key] = container;
      installParentElement(panel, container);
      return container;
    }
    function moveSelectedElementsTo(key) {
      const target = ensureBatchMoveTarget(key);
      const selectedElements = getSelectedPanelElements();
      batchMoveMenu.visible = false;
      if (selectedElements.length < 2) {
        return;
      }
      for (let element of selectedElements) {
        delete element.option.fixed;
        delete element.option.displayStrategy;
        removeElement(element);
        element.x -= target.x;
        element.y -= target.y;
        element.x = Math.min(Math.max(element.x, 0), Math.max(target.width - element.width, 0));
        element.y = Math.min(Math.max(element.y, 0), Math.max(target.height - element.height, 0));
        addElement(panel, target, element);
      }
      updatePanel();
      record({
        type: "PANEL",
        action: ActionEnum.BATCH_MOVE,
        elementList: selectedElements
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          createVNode(MyIcon, {
            style: { "min-width": "20px", "height": "20px" },
            onClick: clickAuxiliaryLineVisible,
            class: normalizeClass(["cursor-pointer iconfont", [unref(auxiliaryLineVisible) ? "icon-yanjing_xianshi_o" : "icon-yanjing_yincang_o"]])
          }, null, 8, ["class"]),
          createVNode(Rule, {
            direction: unref(highlightRule).horizontal.direction,
            length: unref(panel).width,
            auxiliaryLineVisible: unref(auxiliaryLineVisible),
            highlight: unref(highlightRule).horizontal.highlight,
            scroll: unref(highlightRule).horizontal.scroll
          }, null, 8, ["direction", "length", "auxiliaryLineVisible", "highlight", "scroll"])
        ]),
        createElementVNode("div", _hoisted_3, [
          createVNode(Rule, {
            direction: unref(highlightRule).vertical.direction,
            length: unref(panel).height,
            auxiliaryLineVisible: unref(auxiliaryLineVisible),
            highlight: unref(highlightRule).vertical.highlight,
            scroll: unref(highlightRule).vertical.scroll
          }, null, 8, ["direction", "length", "auxiliaryLineVisible", "highlight", "scroll"]),
          createElementVNode(
            "div",
            {
              class: "affix-container design-content-scroll",
              onScroll: scroll,
              onWheel: wheel,
              onContextmenu: withModifiers(showBatchMoveMenu, ["prevent"]),
              ref_key: "designScrollRef",
              ref: designScrollRef
            },
            [
              createElementVNode(
                "div",
                {
                  class: normalizeClass(["design-content design-content-bg", { "dropInIs": unref(panel).runtimeOption.dragInIs }]),
                  ref_key: "designContentRef",
                  ref: designContentRef,
                  style: normalizeStyle({
                    transformOrigin: "left top",
                    transform: "scale(" + unref(scaleUtil).miniMap.scale + ")",
                    minWidth: unref(valueUnit)(unref(panel).width),
                    width: unref(valueUnit)(unref(panel).width),
                    height: unref(valueUnit)(unref(panel).height)
                  })
                },
                [
                  unref(panel).pageHeader != void 0 ? (openBlock(), createBlock(Design, {
                    key: 0,
                    element: unref(panel).pageHeader
                  }, null, 8, ["element"])) : createCommentVNode("v-if", true),
                  unref(panel).pageFooter != void 0 ? (openBlock(), createBlock(Design, {
                    key: 1,
                    element: unref(panel).pageFooter
                  }, null, 8, ["element"])) : createCommentVNode("v-if", true),
                  createVNode(ElementList, {
                    elementList: unref(panel).elementList
                  }, null, 8, ["elementList"])
                ],
                6
                /* CLASS, STYLE */
              )
            ],
            544
            /* NEED_HYDRATION, NEED_PATCH */
          ),
          unref(batchMoveMenu).visible ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "design-context-menu-mask",
            onClick: closeBatchMoveMenu
          }, [
            createElementVNode(
              "div",
              {
                class: "design-context-menu",
                style: normalizeStyle({ left: unref(batchMoveMenu).x + "px", top: unref(batchMoveMenu).y + "px" }),
                onClick: _cache[2] || (_cache[2] = withModifiers(() => {
                }, ["stop"]))
              },
              [
                createElementVNode(
                  "button",
                  {
                    type: "button",
                    onClick: _cache[0] || (_cache[0] = ($event) => moveSelectedElementsTo("pageHeader"))
                  },
                  toDisplayString(unref(i18n)("handle.moveToPageHeader")),
                  1
                  /* TEXT */
                ),
                createElementVNode(
                  "button",
                  {
                    type: "button",
                    onClick: _cache[1] || (_cache[1] = ($event) => moveSelectedElementsTo("pageFooter"))
                  },
                  toDisplayString(unref(i18n)("handle.moveToPageFooter")),
                  1
                  /* TEXT */
                )
              ],
              4
              /* STYLE */
            )
          ])) : createCommentVNode("v-if", true),
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(unref(panel).auxiliaryLineList, (item) => {
              return openBlock(), createBlock(AuxiliaryLine, {
                element: item,
                key: item.id,
                "scroll-x": unref(highlightRule).horizontal.scroll,
                "scroll-y": unref(highlightRule).vertical.scroll
              }, null, 8, ["element", "scroll-x", "scroll-y"]);
            }),
            128
            /* KEYED_FRAGMENT */
          )),
          unref(auxiliaryLineVisible) ? (openBlock(), createElementBlock(
            Fragment,
            { key: 1 },
            [
              unref(appStore).auxiliaryLineTmp.x != null ? (openBlock(), createBlock(AuxiliaryLine, {
                key: 0,
                tmp: "",
                element: unref(appStore).auxiliaryLineTmp
              }, null, 8, ["element"])) : createCommentVNode("v-if", true)
            ],
            64
            /* STABLE_FRAGMENT */
          )) : createCommentVNode("v-if", true)
        ])
      ]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=my-panel.vue2.mjs.map
