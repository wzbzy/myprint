import { defineComponent, openBlock, createElementBlock, Fragment, createElementVNode, renderSlot, unref, createBlock, Teleport, createVNode, createCommentVNode } from 'vue';
import { ref, reactive, nextTick } from 'vue-demi';
import { unit2unit, unit2px, px2unit } from '../../../utils/devicePixelRatio.mjs';
import Design from '../../design/design.vue.mjs';
import { getCurrentPanel, initElement, innerElementIs, addElement, handleElementType, installParentElement } from '../../../utils/elementUtil.mjs';
import { clearEventBubble } from '../../../utils/event.mjs';
import { dragNewElement, dragNewElementCancel, updatePanel } from '../../../plugins/moveable/moveable.mjs';
import { useAppStoreHook } from '../../../stores/app.mjs';
import DragWrapper from './dragWrapper.vue.mjs';
import { mouseTips } from '../../../utils/mouseTips.mjs';
import { record, ActionEnum } from '../../../utils/historyUtil.mjs';
import { recursionForTableCell } from '../../../utils/table/dataTable.mjs';

const padding = 30;
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "base-widget",
  props: {
    data: { default: () => ({}) },
    pageUnit: {}
  },
  setup(__props) {
    const appStore = useAppStoreHook();
    const designRef = ref();
    const isDrop = ref(false);
    const tmpElement = ref({});
    const dragWrapper = reactive({
      visible: false,
      transitionAnime: false,
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      opacity: 0
    });
    const props = __props;
    const panel = getCurrentPanel();
    function dragStart(ev) {
      mouseTips.visible();
      tmpElement.value = JSON.parse(JSON.stringify(props.data));
      const element = tmpElement.value;
      let parentElement;
      let startX = 0, startY = 0;
      if (element.type == "PageHeader" || element.type == "PageFooter") {
        element.width = unit2unit(panel.pageUnit, props.pageUnit, panel.width);
      }
      mouseTips.move(ev.clientX, ev.clientY, "\u677E\u5F00\u53D6\u6D88");
      if (props.pageUnit != panel.pageUnit) {
        element.width = unit2unit(props.pageUnit, panel.pageUnit, tmpElement.value.width);
        element.height = unit2unit(props.pageUnit, panel.pageUnit, tmpElement.value.height);
        if (element.type == "DataTable") {
          recursionForTableCell(element.columnList, (providerCell) => {
            const columnCell = providerCell;
            if (columnCell.height == null) {
              columnCell.height = 7;
            }
            if (!columnCell.data) {
              columnCell.data = columnCell.label;
            }
            columnCell.height = unit2unit(props.pageUnit, panel.pageUnit, columnCell.height);
            columnCell.width = unit2unit(props.pageUnit, panel.pageUnit, columnCell.width);
            if (columnCell.columnBody) {
              if (columnCell.columnBody.height) {
                columnCell.columnBody.height = unit2unit(props.pageUnit, panel.pageUnit, columnCell.columnBody.height);
              }
              if (columnCell.columnBody.width) {
                columnCell.columnBody.width = unit2unit(props.pageUnit, panel.pageUnit, columnCell.columnBody.width);
              }
            }
          });
        }
        if (element.type.startsWith("Svg") && element.data) {
          const data = JSON.parse(element.data);
          const points = data.points;
          const controlPoints = data.controlPoints;
          const dataJson = {};
          if (points) {
            for (let point of points) {
              point.x = unit2unit(props.pageUnit, panel.pageUnit, point.x);
              point.y = unit2unit(props.pageUnit, panel.pageUnit, point.y);
            }
            dataJson.points = points;
          }
          if (controlPoints) {
            for (let point of controlPoints) {
              point.x = unit2unit(props.pageUnit, panel.pageUnit, point.x);
              point.y = unit2unit(props.pageUnit, panel.pageUnit, point.y);
            }
            dataJson.controlPoints = controlPoints;
          }
          element.data = JSON.stringify(dataJson);
        }
      } else {
        if (element.type == "DataTable") {
          recursionForTableCell(element.columnList, (providerCell) => {
            const columnCell = providerCell;
            if (columnCell.height == null) {
              columnCell.height = 7;
            }
            if (!columnCell.data) {
              columnCell.data = columnCell.label;
            }
          });
        }
      }
      initElement(panel, element, 0);
      let halfWidth = unit2px(tmpElement.value.width) / 2;
      let halfHeight = unit2px(tmpElement.value.height) / 2;
      startX = ev.clientX - halfWidth;
      startY = ev.clientY - halfHeight;
      element.x = px2unit(startX - appStore.panelPosition.x + appStore.panelPosition.scrollX - padding);
      element.y = px2unit(startY - appStore.panelPosition.y + appStore.panelPosition.scrollY - padding);
      element.runtimeOption.x = unit2px(element.x);
      element.runtimeOption.y = unit2px(element.y);
      element.runtimeOption.init.x = element.runtimeOption.x;
      element.runtimeOption.init.y = element.runtimeOption.y;
      element.runtimeOption.parent = panel;
      dragWrapper.visible = true;
      dragWrapper.opacity = 1;
      dragWrapper.x = startX;
      dragWrapper.y = startY;
      dragWrapper.width = element.runtimeOption.width;
      dragWrapper.height = element.runtimeOption.height;
      isDrop.value = true;
      document.addEventListener("mousemove", mouseMove);
      document.addEventListener("mouseup", mouseup);
      clearEventBubble(ev);
      nextTick(() => {
        const myHtmlElement = designRef.value.$el;
        element.runtimeOption.target = myHtmlElement;
        myHtmlElement.element = element;
        dragNewElement(element.runtimeOption.target, ev);
      });
      function mouseMove(evMove) {
        let diffXNum = -evMove.clientX + appStore.panelPosition.x;
        let diffYNum = -evMove.clientY + appStore.panelPosition.y;
        if (diffXNum < 0) {
          diffXNum = 0;
        }
        if (diffYNum < 0) {
          diffYNum = 0;
        }
        if (diffXNum <= halfWidth && diffYNum <= halfHeight) {
          if (diffYNum == 0) {
            dragWrapper.opacity = diffXNum / halfWidth;
          } else if (diffXNum == 0) {
            dragWrapper.opacity = diffYNum / halfHeight;
          } else {
            dragWrapper.opacity = (diffXNum / halfWidth + diffYNum / halfHeight) / 2;
          }
        }
        dragWrapper.x = element.runtimeOption.x + appStore.panelPosition.x + padding - appStore.panelPosition.scrollX;
        dragWrapper.y = element.runtimeOption.y + appStore.panelPosition.y + padding - appStore.panelPosition.scrollY;
        mouseTips.move(dragWrapper.x + halfWidth, dragWrapper.y + halfHeight);
        if (diffXNum == 0 && diffYNum == 0) {
          mouseTips.setData("\u677E\u5F00\u653E\u7F6E");
          const point = { x: element.runtimeOption.x + halfWidth, y: element.runtimeOption.y + halfHeight };
          if (!parentElement || !innerElementIs(point, element, parentElement)) {
            if (parentElement) {
              parentElement.runtimeOption.dragInIs = false;
              parentElement = void 0;
            }
            if (panel.pageHeader && innerElementIs(point, element, panel.pageHeader)) {
              panel.pageHeader.runtimeOption.dragInIs = true;
              parentElement = panel.pageHeader;
            } else if (panel.pageFooter && innerElementIs(point, element, panel.pageFooter)) {
              panel.pageFooter.runtimeOption.dragInIs = true;
              parentElement = panel.pageFooter;
            } else {
              for (let elementOf of panel.elementList) {
                if (elementOf.type == "Container" && innerElementIs(point, element, elementOf)) {
                  elementOf.runtimeOption.dragInIs = true;
                  parentElement = elementOf;
                  break;
                }
              }
            }
            panel.runtimeOption.dragInIs = !parentElement;
          }
        } else {
          mouseTips.setData("\u677E\u5F00\u53D6\u6D88");
          panel.runtimeOption.dragInIs = false;
        }
      }
      function mouseup(mouseupEvent) {
        mouseTips.hidden();
        mouseupEvent["tmpElement"] = true;
        if (dragWrapper.opacity > 0) {
          dragWrapper.opacity = 1;
          if (dragWrapper.x == startX && dragWrapper.y == startY) {
            dragWrapper.visible = false;
          } else {
            dragWrapper.transitionAnime = true;
            dragWrapper.x = startX;
            dragWrapper.y = startY;
          }
          dragNewElementCancel(element.runtimeOption.target);
          isDrop.value = false;
        } else {
          dragWrapper.visible = false;
          panel.runtimeOption.dragInIs = false;
          if (parentElement) {
            element.x = element.x - parentElement.x;
            element.y = element.y - parentElement.y;
            addElement(panel, parentElement, element);
            parentElement.runtimeOption.dragInIs = false;
            parentElement = void 0;
          } else {
            handleElementType(element).handle(
              "PageHeader",
              () => {
                if (panel.pageHeader != void 0) {
                  return;
                }
                panel.pageHeader = element;
                element.width = panel.width;
                element.runtimeOption.width = unit2px(panel.width);
                element.runtimeOption.x = 0;
                element.runtimeOption.y = 0;
                element.x = 0;
                element.y = 0;
                installParentElement(panel, element);
              }
            ).handle(
              "PageFooter",
              () => {
                if (panel.pageFooter != void 0) {
                  return;
                }
                panel.pageFooter = element;
                element.width = panel.width;
                element.runtimeOption.width = unit2px(panel.width);
                element.runtimeOption.x = 0;
                element.x = 0;
                element.y = panel.height - element.height;
                element.runtimeOption.y = unit2px(panel.height - element.height);
                installParentElement(panel, element);
              }
            ).end(() => {
              addElement(panel, panel, element);
            });
          }
          record({
            type: "Element",
            action: ActionEnum.ADD,
            elementList: [element]
          });
          nextTick(() => {
            updatePanel([element]);
            setTimeout(() => {
              isDrop.value = false;
            }, 1);
          });
        }
        document.removeEventListener("mousemove", mouseMove);
        document.removeEventListener("mouseup", mouseup);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          createElementVNode(
            "div",
            {
              onMousedown: _cache[0] || (_cache[0] = ($event) => dragStart($event))
            },
            [
              renderSlot(_ctx.$slots, "default")
            ],
            32
            /* NEED_HYDRATION */
          ),
          unref(isDrop) ? (openBlock(), createBlock(Teleport, {
            key: 0,
            to: ".design-content"
          }, [
            createVNode(Design, {
              element: unref(tmpElement),
              ref_key: "designRef",
              ref: designRef
            }, null, 8, ["element"])
          ])) : createCommentVNode("v-if", true),
          unref(dragWrapper).visible ? (openBlock(), createBlock(Teleport, {
            key: 1,
            to: "body"
          }, [
            createVNode(DragWrapper, { data: unref(dragWrapper) }, null, 8, ["data"])
          ])) : createCommentVNode("v-if", true)
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=base-widget.vue2.mjs.map
