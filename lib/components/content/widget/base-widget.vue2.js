'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vueDemi = require('vue-demi');
var devicePixelRatio = require('../../../utils/devicePixelRatio.js');
var design = require('../../design/design.vue.js');
var elementUtil = require('../../../utils/elementUtil.js');
var event = require('../../../utils/event.js');
var moveable = require('../../../plugins/moveable/moveable.js');
var app = require('../../../stores/app.js');
var dragWrapper = require('./dragWrapper.vue.js');
var mouseTips = require('../../../utils/mouseTips.js');
var historyUtil = require('../../../utils/historyUtil.js');
var dataTable = require('../../../utils/table/dataTable.js');

const padding = 30;
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "base-widget",
  props: {
    data: { default: () => ({}) },
    pageUnit: {}
  },
  setup(__props) {
    const appStore = app.useAppStoreHook();
    const designRef = vueDemi.ref();
    const isDrop = vueDemi.ref(false);
    const tmpElement = vueDemi.ref({});
    const dragWrapper$1 = vueDemi.reactive({
      visible: false,
      transitionAnime: false,
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      opacity: 0
    });
    const props = __props;
    const panel = elementUtil.getCurrentPanel();
    function dragStart(ev) {
      mouseTips.mouseTips.visible();
      tmpElement.value = JSON.parse(JSON.stringify(props.data));
      const element = tmpElement.value;
      let parentElement;
      let startX = 0, startY = 0;
      if (element.type == "PageHeader" || element.type == "PageFooter") {
        element.width = devicePixelRatio.unit2unit(panel.pageUnit, props.pageUnit, panel.width);
      }
      mouseTips.mouseTips.move(ev.clientX, ev.clientY, "\u677E\u5F00\u53D6\u6D88");
      if (props.pageUnit != panel.pageUnit) {
        element.width = devicePixelRatio.unit2unit(props.pageUnit, panel.pageUnit, tmpElement.value.width);
        element.height = devicePixelRatio.unit2unit(props.pageUnit, panel.pageUnit, tmpElement.value.height);
        if (element.type == "DataTable") {
          dataTable.recursionForTableCell(element.columnList, (providerCell) => {
            const columnCell = providerCell;
            if (columnCell.height == null) {
              columnCell.height = 7;
            }
            if (!columnCell.data) {
              columnCell.data = columnCell.label;
            }
            columnCell.height = devicePixelRatio.unit2unit(props.pageUnit, panel.pageUnit, columnCell.height);
            columnCell.width = devicePixelRatio.unit2unit(props.pageUnit, panel.pageUnit, columnCell.width);
            if (columnCell.columnBody) {
              if (columnCell.columnBody.height) {
                columnCell.columnBody.height = devicePixelRatio.unit2unit(props.pageUnit, panel.pageUnit, columnCell.columnBody.height);
              }
              if (columnCell.columnBody.width) {
                columnCell.columnBody.width = devicePixelRatio.unit2unit(props.pageUnit, panel.pageUnit, columnCell.columnBody.width);
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
              point.x = devicePixelRatio.unit2unit(props.pageUnit, panel.pageUnit, point.x);
              point.y = devicePixelRatio.unit2unit(props.pageUnit, panel.pageUnit, point.y);
            }
            dataJson.points = points;
          }
          if (controlPoints) {
            for (let point of controlPoints) {
              point.x = devicePixelRatio.unit2unit(props.pageUnit, panel.pageUnit, point.x);
              point.y = devicePixelRatio.unit2unit(props.pageUnit, panel.pageUnit, point.y);
            }
            dataJson.controlPoints = controlPoints;
          }
          element.data = JSON.stringify(dataJson);
        }
      } else {
        if (element.type == "DataTable") {
          dataTable.recursionForTableCell(element.columnList, (providerCell) => {
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
      elementUtil.initElement(panel, element, 0);
      let halfWidth = devicePixelRatio.unit2px(tmpElement.value.width) / 2;
      let halfHeight = devicePixelRatio.unit2px(tmpElement.value.height) / 2;
      startX = ev.clientX - halfWidth;
      startY = ev.clientY - halfHeight;
      element.x = devicePixelRatio.px2unit(startX - appStore.panelPosition.x + appStore.panelPosition.scrollX - padding);
      element.y = devicePixelRatio.px2unit(startY - appStore.panelPosition.y + appStore.panelPosition.scrollY - padding);
      element.runtimeOption.x = devicePixelRatio.unit2px(element.x);
      element.runtimeOption.y = devicePixelRatio.unit2px(element.y);
      element.runtimeOption.init.x = element.runtimeOption.x;
      element.runtimeOption.init.y = element.runtimeOption.y;
      element.runtimeOption.parent = panel;
      dragWrapper$1.visible = true;
      dragWrapper$1.opacity = 1;
      dragWrapper$1.x = startX;
      dragWrapper$1.y = startY;
      dragWrapper$1.width = element.runtimeOption.width;
      dragWrapper$1.height = element.runtimeOption.height;
      isDrop.value = true;
      document.addEventListener("mousemove", mouseMove);
      document.addEventListener("mouseup", mouseup);
      event.clearEventBubble(ev);
      vueDemi.nextTick(() => {
        const myHtmlElement = designRef.value.$el;
        element.runtimeOption.target = myHtmlElement;
        myHtmlElement.element = element;
        moveable.dragNewElement(element.runtimeOption.target, ev);
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
            dragWrapper$1.opacity = diffXNum / halfWidth;
          } else if (diffXNum == 0) {
            dragWrapper$1.opacity = diffYNum / halfHeight;
          } else {
            dragWrapper$1.opacity = (diffXNum / halfWidth + diffYNum / halfHeight) / 2;
          }
        }
        dragWrapper$1.x = element.runtimeOption.x + appStore.panelPosition.x + padding - appStore.panelPosition.scrollX;
        dragWrapper$1.y = element.runtimeOption.y + appStore.panelPosition.y + padding - appStore.panelPosition.scrollY;
        mouseTips.mouseTips.move(dragWrapper$1.x + halfWidth, dragWrapper$1.y + halfHeight);
        if (diffXNum == 0 && diffYNum == 0) {
          mouseTips.mouseTips.setData("\u677E\u5F00\u653E\u7F6E");
          const point = { x: element.runtimeOption.x + halfWidth, y: element.runtimeOption.y + halfHeight };
          if (!parentElement || !elementUtil.innerElementIs(point, element, parentElement)) {
            if (parentElement) {
              parentElement.runtimeOption.dragInIs = false;
              parentElement = void 0;
            }
            if (panel.pageHeader && elementUtil.innerElementIs(point, element, panel.pageHeader)) {
              panel.pageHeader.runtimeOption.dragInIs = true;
              parentElement = panel.pageHeader;
            } else if (panel.pageFooter && elementUtil.innerElementIs(point, element, panel.pageFooter)) {
              panel.pageFooter.runtimeOption.dragInIs = true;
              parentElement = panel.pageFooter;
            } else {
              for (let elementOf of panel.elementList) {
                if (elementOf.type == "Container" && elementUtil.innerElementIs(point, element, elementOf)) {
                  elementOf.runtimeOption.dragInIs = true;
                  parentElement = elementOf;
                  break;
                }
              }
            }
            panel.runtimeOption.dragInIs = !parentElement;
          }
        } else {
          mouseTips.mouseTips.setData("\u677E\u5F00\u53D6\u6D88");
          panel.runtimeOption.dragInIs = false;
        }
      }
      function mouseup(mouseupEvent) {
        mouseTips.mouseTips.hidden();
        mouseupEvent["tmpElement"] = true;
        if (dragWrapper$1.opacity > 0) {
          dragWrapper$1.opacity = 1;
          if (dragWrapper$1.x == startX && dragWrapper$1.y == startY) {
            dragWrapper$1.visible = false;
          } else {
            dragWrapper$1.transitionAnime = true;
            dragWrapper$1.x = startX;
            dragWrapper$1.y = startY;
          }
          moveable.dragNewElementCancel(element.runtimeOption.target);
          isDrop.value = false;
        } else {
          dragWrapper$1.visible = false;
          panel.runtimeOption.dragInIs = false;
          if (parentElement) {
            element.x = element.x - parentElement.x;
            element.y = element.y - parentElement.y;
            elementUtil.addElement(panel, parentElement, element);
            parentElement.runtimeOption.dragInIs = false;
            parentElement = void 0;
          } else {
            elementUtil.handleElementType(element).handle(
              "PageHeader",
              () => {
                if (panel.pageHeader != void 0) {
                  return;
                }
                panel.pageHeader = element;
                element.width = panel.width;
                element.runtimeOption.width = devicePixelRatio.unit2px(panel.width);
                element.runtimeOption.x = 0;
                element.runtimeOption.y = 0;
                element.x = 0;
                element.y = 0;
                elementUtil.installParentElement(panel, element);
              }
            ).handle(
              "PageFooter",
              () => {
                if (panel.pageFooter != void 0) {
                  return;
                }
                panel.pageFooter = element;
                element.width = panel.width;
                element.runtimeOption.width = devicePixelRatio.unit2px(panel.width);
                element.runtimeOption.x = 0;
                element.x = 0;
                element.y = panel.height - element.height;
                element.runtimeOption.y = devicePixelRatio.unit2px(panel.height - element.height);
                elementUtil.installParentElement(panel, element);
              }
            ).end(() => {
              elementUtil.addElement(panel, panel, element);
            });
          }
          historyUtil.record({
            type: "Element",
            action: historyUtil.ActionEnum.ADD,
            elementList: [element]
          });
          vueDemi.nextTick(() => {
            moveable.updatePanel([element]);
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
      return vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        null,
        [
          vue.createElementVNode(
            "div",
            {
              onMousedown: _cache[0] || (_cache[0] = ($event) => dragStart($event))
            },
            [
              vue.renderSlot(_ctx.$slots, "default")
            ],
            32
            /* NEED_HYDRATION */
          ),
          vue.unref(isDrop) ? (vue.openBlock(), vue.createBlock(vue.Teleport, {
            key: 0,
            to: ".design-content"
          }, [
            vue.createVNode(design.default, {
              element: vue.unref(tmpElement),
              ref_key: "designRef",
              ref: designRef
            }, null, 8, ["element"])
          ])) : vue.createCommentVNode("v-if", true),
          vue.unref(dragWrapper$1).visible ? (vue.openBlock(), vue.createBlock(vue.Teleport, {
            key: 1,
            to: "body"
          }, [
            vue.createVNode(dragWrapper.default, { data: vue.unref(dragWrapper$1) }, null, 8, ["data"])
          ])) : vue.createCommentVNode("v-if", true)
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=base-widget.vue2.js.map
