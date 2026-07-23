'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vueDemi = require('vue-demi');
var dataTable$1 = require('./data-table.vue.js');
var common = require('../../../../constants/common.js');
var app = require('../../../../stores/app.js');
var utils = require('../../../../utils/utils.js');
var moveable = require('../../../../plugins/moveable/moveable.js');
var lodash = require('lodash');
var elementUtil = require('../../../../utils/elementUtil.js');
var dataTable = require('../../../../utils/table/dataTable.js');
var myprint = require('../../../../utils/myprint.js');
var myPopover = require('../../../my/popover/my-popover.vue.js');
var myScrollbar = require('../../../my/scrollbar/my-scrollbar.vue.js');
var myTreeList = require('../../../my/tree-list/my-tree-list.vue.js');
var numberUtil = require('../../../../utils/numberUtil.js');

const _hoisted_1 = ["onMousedown"];
const _hoisted_2 = ["onMousedown"];
const _hoisted_3 = ["onClick"];
const _hoisted_4 = {
  class: "table-more-icon",
  ref: "containerMoveIconRef"
};
const _hoisted_5 = { class: "table_header_setting" };
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "table-design",
  props: {
    element: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const data = vueDemi.reactive({
      status: "NONE",
      td: void 0,
      row: -1,
      logicRow: -1,
      col: -1,
      handleIng: false,
      controlPointMouseDownIs: false,
      tableMouseEnterIs: false,
      highlightSort: {
        x: 0,
        y: 0,
        height: 0,
        visibility: "hidden"
      },
      highlightColumn: {
        rowList: {},
        type: "NONE",
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        visibility: "hidden"
      },
      tableRowHeightList: [],
      lastHeadList: [],
      cellList: [],
      headHeight: 0,
      controlPointList: [],
      resizeControlList: [],
      rowControlPointList: [],
      rowRemovePointList: [],
      rowResizeControlList: []
    });
    const tableRef = vueDemi.ref();
    const useApp = app.useAppStoreHook();
    let resizeObserver;
    const bodyList = vueDemi.computed(() => {
      const bodyList2 = [...props.element.tableHeadList, ...props.element.tableBodyList, ...props.element.statisticsList];
      vueDemi.nextTick(() => {
        data.tableRowHeightList = dataTable.computedTableCell(props.element, tableRef.value.$el, bodyList2);
        data.lastHeadList = dataTable.lastHeadList(props.element.tableHeadList);
        dataTable.initTableCell(bodyList2);
        initTableNest();
        computeColumn();
        computeColumnHeight();
      });
      return bodyList2;
    });
    const tableHeadNest = vueDemi.ref([]);
    function initTableNest() {
      tableHeadNest.value = dataTable.tableHeadList2Nest(props.element.tableHeadList, 0, 0, props.element.tableHeadList[0].length);
    }
    vueDemi.onMounted(() => {
      resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          if (entry.contentRect.height == 0 && entry.contentRect.width == 0 && entry.contentRect.x == 0) {
            continue;
          }
          elementUtil.setElementHeightPx(entry.contentRect.height + 2, props.element);
          elementUtil.setElementWidthPx(entry.contentRect.width + 2, props.element);
          vueDemi.nextTick(() => {
            data.tableRowHeightList = dataTable.computedTableCell(props.element, tableRef.value.$el, bodyList.value);
            if (data.cellList && data.cellList.length > 0) {
              dataTable.selectCell(data.highlightColumn, data.cellList);
            }
            moveable.updateMoveableRect();
            computeColumn();
            computeColumnHeight();
          });
        }
      });
      resizeObserver.observe(tableRef.value.$el);
      tableRef.value.$el.parentNode.addEventListener("mouseover", function(event) {
        if (data.handleIng) {
          return;
        }
        const target = event.target;
        const cell = target.closest("td");
        if (cell == void 0) {
          return;
        }
        data.td = cell;
        data.row = cell.parentNode.rowIndex;
        data.col = cell.cellIndex;
        data.tableMouseEnterIs = true;
      });
      tableRef.value.$el.parentNode.addEventListener("mouseleave", function(_event) {
        if (data.handleIng) {
          return;
        }
        data.tableMouseEnterIs = false;
        if (data.controlPointMouseDownIs) {
          return;
        }
        data.row = -1;
        data.col = -1;
      });
      bodyList.value;
    });
    vueDemi.onUnmounted(() => {
      resizeObserver.disconnect();
    });
    function showTableEnableSetting() {
      initTableNest();
    }
    function controlPointMouseDown(ev, row, col) {
      data.row = row;
      data.col = col;
      data.controlPointMouseDownIs = true;
      data.handleIng = true;
      const columnRect = data.td.getBoundingClientRect();
      const tableRect = tableRef.value.$el.getBoundingClientRect();
      const columnLeft = columnRect.left;
      const columnTop = columnRect.top;
      const columnWidth = columnRect.width;
      const tableLeft = tableRect.left;
      const tableWidth = tableRect.width;
      const { rowCellList, colIndex } = dataTable.getTableCellDown(props.element, bodyList.value, data.row, data.col);
      const childByParentList = dataTable.getChildByParent(bodyList.value, data.row, colIndex);
      let columnCell = rowCellList[0][0];
      let clientStartX = ev.clientX;
      let clientStartY = ev.clientY;
      data.highlightSort.y = columnCell.runtimeOption.y;
      data.highlightSort.height = props.element.runtimeOption.height - columnCell.runtimeOption.y;
      myprint.tableColClone.show(columnLeft, columnTop, columnCell.runtimeOption.width, rowCellList);
      let targetIndex = void 0;
      function controlPointMouseMove(ev2) {
        let clientMoveX = ev2.clientX;
        const columnCloneLeft = columnLeft + clientMoveX - clientStartX;
        const offsetX = columnCloneLeft + columnWidth / 2 - tableLeft;
        let findIs = false;
        if (columnCloneLeft >= tableLeft - columnWidth && columnCloneLeft + columnWidth <= tableLeft + tableWidth + columnWidth) {
          myprint.tableColClone.move(columnCloneLeft);
          for (let i = 0; i < childByParentList.length; i++) {
            let columnCellTmp = childByParentList[i];
            if (columnCellTmp === columnCell) {
              continue;
            }
            if (offsetX >= (i == 0 ? columnCellTmp.runtimeOption.x - columnCell.width : columnCellTmp.runtimeOption.x) && offsetX <= columnCellTmp.runtimeOption.x + (i == childByParentList.length - 1 ? columnCellTmp.runtimeOption.width + columnCell.runtimeOption.width : columnCellTmp.runtimeOption.width)) {
              if (offsetX <= columnCellTmp.runtimeOption.x + columnCellTmp.runtimeOption.width / 2) {
                if (i == col + 1) {
                  continue;
                }
                data.highlightSort.x = columnCellTmp.runtimeOption.x;
                targetIndex = i;
                findIs = true;
              } else {
                if (i == col - 1) {
                  continue;
                }
                data.highlightSort.x = columnCellTmp.runtimeOption.x + columnCellTmp.runtimeOption.width;
                targetIndex = i + 1;
                findIs = true;
              }
              break;
            }
          }
        }
        if (findIs) {
          data.highlightSort.visibility = "visible";
        } else {
          targetIndex = void 0;
          data.highlightSort.visibility = "hidden";
        }
      }
      function controlPointMouseUp(evUp) {
        let clientEndX = evUp.clientX;
        let clientEndY = evUp.clientY;
        data.handleIng = false;
        if (clientStartX == clientEndX && clientEndY == clientStartY) {
          const { cellList } = dataTable.getTableCellDown(props.element, bodyList.value, data.row, data.col);
          data.cellList = cellList;
          dataTable.selectCell(data.highlightColumn, data.cellList);
        } else {
          if (targetIndex != void 0) {
            if (targetIndex > col) {
              targetIndex--;
            }
            utils.sortColumn(props.element, colIndex, row, col, targetIndex);
            vueDemi.nextTick(() => {
              dataTable.computedTableCell(props.element, props.element.runtimeOption.target, bodyList.value);
              computeColumn();
            });
            data.highlightColumn.visibility = "hidden";
          }
        }
        document.removeEventListener("mousemove", controlPointMouseMove);
        document.removeEventListener("mouseup", controlPointMouseUp);
        myprint.tableColClone.hidden();
        useApp.dataRotation = "none";
        data.controlPointMouseDownIs = false;
        if (!data.tableMouseEnterIs) {
          data.row = -1;
          data.col = -1;
        }
        data.highlightSort.visibility = "hidden";
      }
      useApp.dataRotation = "move";
      ev.stopPropagation();
      document.addEventListener("mousemove", controlPointMouseMove);
      document.addEventListener("mouseup", controlPointMouseUp);
    }
    function resizeMouseDown(ev, col) {
      const clientStartX = ev.clientX;
      const realHeadCell = dataTable.tableRealCol(props.element, data.lastHeadList, col);
      const columnElement = realHeadCell;
      const columnOldWidth = realHeadCell.runtimeOption.width;
      const tableOldWidth = props.element.runtimeOption.width;
      useApp.dataRotation = "col-resize";
      data.status = "RESIZE";
      data.handleIng = true;
      console.log(col);
      function resizeMouseMove(ev2) {
        const offsetX = ev2.clientX - clientStartX;
        const newWidth = columnOldWidth + offsetX;
        if (newWidth > 20) {
          elementUtil.setElementWidthPx(tableOldWidth + offsetX, props.element);
          elementUtil.recursionUpdateCellParentWidth(columnElement, offsetX, elementUtil.getRecursionParentPanel(props.element));
          elementUtil.setElementOffsetWidthPx(offsetX, dataTable.tableRealCol(props.element, props.element.tableBodyList[0], col));
          moveable.updateMoveableRect();
          computeColumn();
        }
        if (data.highlightColumn.visibility == "visible") {
          vueDemi.nextTick(() => {
            dataTable.computedTableCell(props.element, props.element.runtimeOption.target, bodyList.value);
            dataTable.selectCell(data.highlightColumn, data.cellList);
          });
        }
      }
      function resizeMouseUp() {
        useApp.dataRotation = "none";
        data.status = "NONE";
        data.handleIng = false;
        dataTable.initTableCell(bodyList.value);
        elementUtil.recursionUpdateCellParentInitWidth(columnElement);
        document.removeEventListener("mousemove", resizeMouseMove);
        document.removeEventListener("mouseup", resizeMouseUp);
      }
      ev.stopPropagation();
      document.addEventListener("mousemove", resizeMouseMove);
      document.addEventListener("mouseup", resizeMouseUp);
    }
    function tableMouseDown(ev) {
      data.cellList = dataTable.getTableCell(props.element, bodyList.value, data.row, data.col);
      console.log(data.cellList);
      let clientStartX = ev.clientX, clientStartY = ev.clientY;
      function tableMouseUp(ev2) {
        let clientEndX = ev2.clientX, clientEndY = ev2.clientY;
        if (clientEndX == clientStartX && clientEndY == clientStartY) {
          dataTable.selectCell(data.highlightColumn, data.cellList);
        }
        document.removeEventListener("mouseup", tableMouseUp);
      }
      document.addEventListener("mouseup", tableMouseUp);
    }
    function removeStatisticsRow(item) {
      data.cellList = [];
      data.highlightColumn.visibility = "hidden";
      elementUtil.setCurrentElement([props.element]);
      props.element.statisticsList.splice(item.row, 1);
      bodyList.value;
    }
    function changeColumnEnable() {
      props.element.disableCellMap = dataTable.computedDisableColumn(props.element.tableHeadList);
      dataTable.computeColumnColspan(tableHeadNest.value, 0);
      let widthTotal = 0;
      for (let lastHeadListElement of data.lastHeadList) {
        widthTotal = numberUtil.default.sum(widthTotal, lastHeadListElement.runtimeOption.width);
      }
      elementUtil.setElementWidthPx(numberUtil.default.sum(widthTotal, 1), props.element);
      vueDemi.nextTick(() => {
        dataTable.computedTableCell(props.element, props.element.runtimeOption.target, bodyList.value);
        computeColumn();
      });
    }
    vueDemi.watch(() => props.element.option.tableHeightType, (n, _o) => {
      if (n == "AUTO") {
        resizeObserver.observe(tableRef.value.$el);
      } else {
        resizeObserver.unobserve(tableRef.value.$el);
      }
      moveable.freshMoveableOption(props.element);
    });
    vueDemi.watch(() => props.element.runtimeOption.status, (n, _o) => {
      if (common.elementHandleStatusList.includes(n)) {
        tableRef.value.$el.addEventListener("mousedown", tableMouseDown);
      } else {
        tableRef.value.$el.removeEventListener("mousedown", tableMouseDown);
        data.highlightColumn.visibility = "hidden";
      }
    });
    const computeColumn = lodash.throttle(() => {
      data.controlPointList.length = 0;
      data.resizeControlList.length = 0;
      for (let tableHeadListElement of props.element.tableHeadList) {
        const pointListTmp = [];
        for (let col = 0; col < tableHeadListElement.length; col++) {
          let tableCellElement = tableHeadListElement[col];
          if (dataTable.cellIsContinue(props.element, tableCellElement, col)) {
            continue;
          }
          pointListTmp.push({
            x: tableCellElement.runtimeOption.x + tableCellElement.runtimeOption.width / 2 - 10,
            y: tableCellElement.runtimeOption.y
          });
        }
        data.controlPointList.push(pointListTmp);
      }
      for (let col = 0; col < data.lastHeadList.length; col++) {
        let tableCellElement = data.lastHeadList[col];
        if (dataTable.cellIsContinue(props.element, tableCellElement, col)) {
          continue;
        }
        data.resizeControlList.push({
          x: tableCellElement.runtimeOption.x + tableCellElement.runtimeOption.width - 5,
          y: 0
        });
      }
    }, 10);
    const computeColumnHeight = lodash.throttle(() => {
      data.rowControlPointList.length = 0;
      data.rowResizeControlList.length = 0;
      data.rowRemovePointList.length = 0;
      let height = 0;
      for (let i = 0; i < bodyList.value.length; i++) {
        const rowList = bodyList.value[i];
        let firstColumn = rowList[0];
        for (let rowListElement of rowList) {
          if (rowListElement != null && rowListElement.rowspan == 1) {
            firstColumn = rowListElement;
            break;
          }
        }
        if (firstColumn == null) {
          continue;
        }
        height = height + firstColumn.runtimeOption.height;
        data.rowControlPointList.push({
          x: 0,
          y: firstColumn.runtimeOption.y + firstColumn.runtimeOption.height / 2 - 10
        });
      }
      for (let i = 0; i < props.element.statisticsList.length; i++) {
        let firstColumn = props.element.statisticsList[i][0];
        data.rowRemovePointList.push({
          row: i,
          y: firstColumn.runtimeOption.y + firstColumn.runtimeOption.height / 2 - 10
        });
      }
    }, 10);
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        null,
        [
          vue.createVNode(dataTable$1.default, {
            element: __props.element,
            ref_key: "tableRef",
            ref: tableRef
          }, null, 8, ["element"]),
          "HANDLE_ED" == __props.element.runtimeOption.status && !__props.element.lock ? (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            { key: 0 },
            [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(vue.unref(data).resizeControlList, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("div", {
                    class: "my-table-resize",
                    style: vue.normalizeStyle({ left: item.x + "px" }),
                    onMousedown: ($event) => resizeMouseDown($event, index)
                  }, null, 44, _hoisted_1);
                }),
                256
                /* UNKEYED_FRAGMENT */
              )),
              vue.createCommentVNode('        <div class="my-table-row-resize" v-for="(item, index) in data.rowResizeControlList"'),
              vue.createCommentVNode(`             :style="{left: item.x + 'px'}" @mousedown="resizeMouseDown($event, index)" />`),
              vue.createCommentVNode("        "),
              vue.createCommentVNode('        <div class="my-table-tool"/>'),
              vue.withDirectives(vue.createElementVNode(
                "div",
                {
                  class: "my-table-highlight-sort",
                  style: vue.normalizeStyle({ left: vue.unref(data).highlightSort.x + "px", top: vue.unref(data).highlightSort.y + "px", height: vue.unref(data).highlightSort.height + "px" })
                },
                null,
                4
                /* STYLE */
              ), [
                [vue.vShow, vue.unref(data).highlightSort.visibility == "visible"]
              ]),
              vue.withDirectives(vue.createElementVNode(
                "div",
                {
                  class: "my-table-highlight-column pointer-events",
                  style: vue.normalizeStyle({
                    left: vue.unref(data).highlightColumn.x - 1 + "px",
                    top: vue.unref(data).highlightColumn.y + "px",
                    width: vue.unref(data).highlightColumn.width + 2 + "px",
                    height: vue.unref(data).highlightColumn.height + 3 + "px"
                  })
                },
                null,
                4
                /* STYLE */
              ), [
                [vue.vShow, vue.unref(data).highlightColumn.visibility == "visible"]
              ]),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(vue.unref(data).controlPointList, (rowList, row) => {
                  return vue.openBlock(), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    [
                      (vue.openBlock(true), vue.createElementBlock(
                        vue.Fragment,
                        null,
                        vue.renderList(rowList, (item, col) => {
                          return vue.openBlock(), vue.createElementBlock("div", {
                            class: vue.normalizeClass(["my-table-control-head-point iconfont icon-sigedian", { "my-table-control-head-point-active": vue.unref(data).row == row && vue.unref(data).col == col && vue.unref(data).status != "RESIZE" }]),
                            style: vue.normalizeStyle({ left: item.x + "px", top: item.y - 10 + "px" }),
                            onMousedown: ($event) => controlPointMouseDown($event, row, col)
                          }, null, 46, _hoisted_2);
                        }),
                        256
                        /* UNKEYED_FRAGMENT */
                      ))
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  );
                }),
                256
                /* UNKEYED_FRAGMENT */
              )),
              vue.createCommentVNode('        <div class="my-table-control-head-col-point iconfont icon-sigedian"'),
              vue.createCommentVNode('             v-for="(item, index) in data.rowControlPointList"'),
              vue.createCommentVNode(`             :class="{'my-table-control-head-point-active': data.row == index && data.status != 'RESIZE'}"`),
              vue.createCommentVNode(`             :style="{top: item.y + 'px'}"`),
              vue.createCommentVNode('             @mousedown="rowControlPointMouseDown($event, index)">'),
              vue.createCommentVNode('            <div style="color: black">{{ data.row }}</div>'),
              vue.createCommentVNode("        </div>"),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(vue.unref(data).rowRemovePointList, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("div", {
                    class: "my-table-statistics-row-remove user-select-none",
                    onClick: ($event) => removeStatisticsRow(item),
                    key: index,
                    style: vue.normalizeStyle([{ "background": "white !important" }, { top: item.y - 1 + "px" }])
                  }, null, 12, _hoisted_3);
                }),
                128
                /* KEYED_FRAGMENT */
              )),
              vue.createVNode(
                myPopover.default,
                {
                  trigger: "click",
                  ref: "popoverRef",
                  class: "table-more-icon_popover",
                  onShow: showTableEnableSetting,
                  placement: "top"
                },
                {
                  reference: vue.withCtx(() => [
                    vue.createElementVNode(
                      "div",
                      _hoisted_4,
                      [..._cache[0] || (_cache[0] = [
                        vue.createElementVNode(
                          "i",
                          { class: "icon-setting iconfont" },
                          null,
                          -1
                          /* CACHED */
                        )
                      ])],
                      512
                      /* NEED_PATCH */
                    )
                  ]),
                  default: vue.withCtx(() => [
                    vue.createVNode(myScrollbar.default, { height: "200px" }, {
                      default: vue.withCtx(() => [
                        vue.createElementVNode("div", _hoisted_5, [
                          vue.createVNode(myTreeList.default, {
                            onChange: changeColumnEnable,
                            nullActive: "",
                            list: vue.unref(tableHeadNest)
                          }, null, 8, ["list"])
                        ])
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                },
                512
                /* NEED_PATCH */
              )
            ],
            64
            /* STABLE_FRAGMENT */
          )) : vue.createCommentVNode("v-if", true)
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=table-design.vue2.js.map
