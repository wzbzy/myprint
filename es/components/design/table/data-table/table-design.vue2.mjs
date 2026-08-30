import { defineComponent, openBlock, createElementBlock, Fragment, createVNode, renderList, unref, normalizeStyle, createCommentVNode, withDirectives, createElementVNode, vShow, normalizeClass, withCtx } from 'vue';
import { reactive, ref, computed, nextTick, onMounted, onUnmounted, watch } from 'vue-demi';
import DataTable from './data-table.vue.mjs';
import { elementHandleStatusList } from '../../../../constants/common.mjs';
import { useAppStoreHook } from '../../../../stores/app.mjs';
import { sortColumn } from '../../../../utils/utils.mjs';
import { updateMoveableRect, freshMoveableOption } from '../../../../plugins/moveable/moveable.mjs';
import { throttle } from 'lodash';
import { setElementHeightPx, setElementWidthPx, recursionUpdateCellParentWidth, getRecursionParentPanel, setElementOffsetWidthPx, recursionUpdateCellParentInitWidth, setCurrentElement } from '../../../../utils/elementUtil.mjs';
import { computedTableCell, lastHeadList, initTableCell, tableHeadList2Nest, selectCell, cellIsContinue, getTableCellDown, getChildByParent, tableRealCol, getTableCell, computedDisableColumn, computeColumnColspan } from '../../../../utils/table/dataTable.mjs';
import { tableColClone } from '../../../../utils/myprint.mjs';
import MyPopover from '../../../my/popover/my-popover.vue.mjs';
import MyScrollbar from '../../../my/scrollbar/my-scrollbar.vue.mjs';
import MyTreeList from '../../../my/tree-list/my-tree-list.vue.mjs';
import MathCalc from '../../../../utils/numberUtil.mjs';

const _hoisted_1 = ["onMousedown"];
const _hoisted_2 = ["onMousedown"];
const _hoisted_3 = ["onClick"];
const _hoisted_4 = {
  class: "table-more-icon",
  ref: "containerMoveIconRef"
};
const _hoisted_5 = { class: "table_header_setting" };
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "table-design",
  props: {
    element: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const data = reactive({
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
    const tableRef = ref();
    const useApp = useAppStoreHook();
    let resizeObserver;
    const bodyList = computed(() => {
      const bodyList2 = [...props.element.tableHeadList, ...props.element.tableBodyList, ...props.element.statisticsList];
      nextTick(() => {
        data.tableRowHeightList = computedTableCell(props.element, tableRef.value.$el, bodyList2);
        data.lastHeadList = lastHeadList(props.element.tableHeadList);
        initTableCell(bodyList2);
        initTableNest();
        computeColumn();
        computeColumnHeight();
      });
      return bodyList2;
    });
    const tableHeadNest = ref([]);
    function initTableNest() {
      tableHeadNest.value = tableHeadList2Nest(props.element.tableHeadList, 0, 0, props.element.tableHeadList[0].length);
    }
    onMounted(() => {
      resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          if (entry.contentRect.height == 0 && entry.contentRect.width == 0 && entry.contentRect.x == 0) {
            continue;
          }
          setElementHeightPx(entry.contentRect.height + 2, props.element);
          setElementWidthPx(entry.contentRect.width + 2, props.element);
          nextTick(() => {
            data.tableRowHeightList = computedTableCell(props.element, tableRef.value.$el, bodyList.value);
            if (data.cellList && data.cellList.length > 0) {
              selectCell(data.highlightColumn, data.cellList);
            }
            updateMoveableRect();
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
    onUnmounted(() => {
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
      const { rowCellList, colIndex } = getTableCellDown(props.element, bodyList.value, data.row, data.col);
      const childByParentList = getChildByParent(bodyList.value, data.row, colIndex);
      let columnCell = rowCellList[0][0];
      let clientStartX = ev.clientX;
      let clientStartY = ev.clientY;
      data.highlightSort.y = columnCell.runtimeOption.y;
      data.highlightSort.height = props.element.runtimeOption.height - columnCell.runtimeOption.y;
      tableColClone.show(columnLeft, columnTop, columnCell.runtimeOption.width, rowCellList);
      let targetIndex = void 0;
      function controlPointMouseMove(ev2) {
        let clientMoveX = ev2.clientX;
        const columnCloneLeft = columnLeft + clientMoveX - clientStartX;
        const offsetX = columnCloneLeft + columnWidth / 2 - tableLeft;
        let findIs = false;
        if (columnCloneLeft >= tableLeft - columnWidth && columnCloneLeft + columnWidth <= tableLeft + tableWidth + columnWidth) {
          tableColClone.move(columnCloneLeft);
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
          const { cellList } = getTableCellDown(props.element, bodyList.value, data.row, data.col);
          data.cellList = cellList;
          selectCell(data.highlightColumn, data.cellList);
        } else {
          if (targetIndex != void 0) {
            if (targetIndex > col) {
              targetIndex--;
            }
            sortColumn(props.element, colIndex, row, col, targetIndex);
            nextTick(() => {
              computedTableCell(props.element, props.element.runtimeOption.target, bodyList.value);
              computeColumn();
            });
            data.highlightColumn.visibility = "hidden";
          }
        }
        document.removeEventListener("mousemove", controlPointMouseMove);
        document.removeEventListener("mouseup", controlPointMouseUp);
        tableColClone.hidden();
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
      const realHeadCell = tableRealCol(props.element, data.lastHeadList, col);
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
          setElementWidthPx(tableOldWidth + offsetX, props.element);
          recursionUpdateCellParentWidth(columnElement, offsetX, getRecursionParentPanel(props.element));
          setElementOffsetWidthPx(offsetX, tableRealCol(props.element, props.element.tableBodyList[0], col));
          updateMoveableRect();
          computeColumn();
        }
        if (data.highlightColumn.visibility == "visible") {
          nextTick(() => {
            computedTableCell(props.element, props.element.runtimeOption.target, bodyList.value);
            selectCell(data.highlightColumn, data.cellList);
          });
        }
      }
      function resizeMouseUp() {
        useApp.dataRotation = "none";
        data.status = "NONE";
        data.handleIng = false;
        initTableCell(bodyList.value);
        recursionUpdateCellParentInitWidth(columnElement);
        document.removeEventListener("mousemove", resizeMouseMove);
        document.removeEventListener("mouseup", resizeMouseUp);
      }
      ev.stopPropagation();
      document.addEventListener("mousemove", resizeMouseMove);
      document.addEventListener("mouseup", resizeMouseUp);
    }
    function tableMouseDown(ev) {
      data.cellList = getTableCell(props.element, bodyList.value, data.row, data.col);
      console.log(data.cellList);
      let clientStartX = ev.clientX, clientStartY = ev.clientY;
      function tableMouseUp(ev2) {
        let clientEndX = ev2.clientX, clientEndY = ev2.clientY;
        if (clientEndX == clientStartX && clientEndY == clientStartY) {
          selectCell(data.highlightColumn, data.cellList);
        }
        document.removeEventListener("mouseup", tableMouseUp);
      }
      document.addEventListener("mouseup", tableMouseUp);
    }
    function removeStatisticsRow(item) {
      data.cellList = [];
      data.highlightColumn.visibility = "hidden";
      setCurrentElement([props.element]);
      props.element.statisticsList.splice(item.row, 1);
      bodyList.value;
    }
    function changeColumnEnable() {
      props.element.disableCellMap = computedDisableColumn(props.element.tableHeadList);
      computeColumnColspan(tableHeadNest.value, 0);
      let widthTotal = 0;
      for (let lastHeadListElement of data.lastHeadList) {
        widthTotal = MathCalc.sum(widthTotal, lastHeadListElement.runtimeOption.width);
      }
      setElementWidthPx(MathCalc.sum(widthTotal, 1), props.element);
      nextTick(() => {
        computedTableCell(props.element, props.element.runtimeOption.target, bodyList.value);
        computeColumn();
      });
    }
    watch(() => props.element.option.tableHeightType, (n, _o) => {
      if (n == "AUTO") {
        resizeObserver.observe(tableRef.value.$el);
      } else {
        resizeObserver.unobserve(tableRef.value.$el);
      }
      freshMoveableOption(props.element);
    });
    watch(() => props.element.runtimeOption.status, (n, _o) => {
      if (elementHandleStatusList.includes(n)) {
        tableRef.value.$el.addEventListener("mousedown", tableMouseDown);
      } else {
        tableRef.value.$el.removeEventListener("mousedown", tableMouseDown);
        data.highlightColumn.visibility = "hidden";
      }
    });
    const computeColumn = throttle(() => {
      data.controlPointList.length = 0;
      data.resizeControlList.length = 0;
      for (let tableHeadListElement of props.element.tableHeadList) {
        const pointListTmp = [];
        for (let col = 0; col < tableHeadListElement.length; col++) {
          let tableCellElement = tableHeadListElement[col];
          if (cellIsContinue(props.element, tableCellElement, col)) {
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
        if (cellIsContinue(props.element, tableCellElement, col)) {
          continue;
        }
        data.resizeControlList.push({
          x: tableCellElement.runtimeOption.x + tableCellElement.runtimeOption.width - 5,
          y: 0
        });
      }
    }, 10);
    const computeColumnHeight = throttle(() => {
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
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          createVNode(DataTable, {
            element: __props.element,
            ref_key: "tableRef",
            ref: tableRef
          }, null, 8, ["element"]),
          "HANDLE_ED" == __props.element.runtimeOption.status && !__props.element.lock ? (openBlock(), createElementBlock(
            Fragment,
            { key: 0 },
            [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(unref(data).resizeControlList, (item, index) => {
                  return openBlock(), createElementBlock("div", {
                    class: "my-table-resize",
                    style: normalizeStyle({ left: item.x + "px" }),
                    onMousedown: ($event) => resizeMouseDown($event, index)
                  }, null, 44, _hoisted_1);
                }),
                256
                /* UNKEYED_FRAGMENT */
              )),
              createCommentVNode('        <div class="my-table-row-resize" v-for="(item, index) in data.rowResizeControlList"'),
              createCommentVNode(`             :style="{left: item.x + 'px'}" @mousedown="resizeMouseDown($event, index)" />`),
              createCommentVNode("        "),
              createCommentVNode('        <div class="my-table-tool"/>'),
              withDirectives(createElementVNode(
                "div",
                {
                  class: "my-table-highlight-sort",
                  style: normalizeStyle({ left: unref(data).highlightSort.x + "px", top: unref(data).highlightSort.y + "px", height: unref(data).highlightSort.height + "px" })
                },
                null,
                4
                /* STYLE */
              ), [
                [vShow, unref(data).highlightSort.visibility == "visible"]
              ]),
              withDirectives(createElementVNode(
                "div",
                {
                  class: "my-table-highlight-column pointer-events",
                  style: normalizeStyle({
                    left: unref(data).highlightColumn.x - 1 + "px",
                    top: unref(data).highlightColumn.y + "px",
                    width: unref(data).highlightColumn.width + 2 + "px",
                    height: unref(data).highlightColumn.height + 3 + "px"
                  })
                },
                null,
                4
                /* STYLE */
              ), [
                [vShow, unref(data).highlightColumn.visibility == "visible"]
              ]),
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(unref(data).controlPointList, (rowList, row) => {
                  return openBlock(), createElementBlock(
                    Fragment,
                    null,
                    [
                      (openBlock(true), createElementBlock(
                        Fragment,
                        null,
                        renderList(rowList, (item, col) => {
                          return openBlock(), createElementBlock("div", {
                            class: normalizeClass(["my-table-control-head-point iconfont icon-sigedian", { "my-table-control-head-point-active": unref(data).row == row && unref(data).col == col && unref(data).status != "RESIZE" }]),
                            style: normalizeStyle({ left: item.x + "px", top: item.y - 10 + "px" }),
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
              createCommentVNode('        <div class="my-table-control-head-col-point iconfont icon-sigedian"'),
              createCommentVNode('             v-for="(item, index) in data.rowControlPointList"'),
              createCommentVNode(`             :class="{'my-table-control-head-point-active': data.row == index && data.status != 'RESIZE'}"`),
              createCommentVNode(`             :style="{top: item.y + 'px'}"`),
              createCommentVNode('             @mousedown="rowControlPointMouseDown($event, index)">'),
              createCommentVNode('            <div style="color: black">{{ data.row }}</div>'),
              createCommentVNode("        </div>"),
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(unref(data).rowRemovePointList, (item, index) => {
                  return openBlock(), createElementBlock("div", {
                    class: "my-table-statistics-row-remove user-select-none",
                    onClick: ($event) => removeStatisticsRow(item),
                    key: index,
                    style: normalizeStyle([{ "background": "white !important" }, { top: item.y - 1 + "px" }])
                  }, null, 12, _hoisted_3);
                }),
                128
                /* KEYED_FRAGMENT */
              )),
              createVNode(
                MyPopover,
                {
                  trigger: "click",
                  ref: "popoverRef",
                  class: "table-more-icon_popover",
                  onShow: showTableEnableSetting,
                  placement: "top"
                },
                {
                  reference: withCtx(() => [
                    createElementVNode(
                      "div",
                      _hoisted_4,
                      [..._cache[0] || (_cache[0] = [
                        createElementVNode(
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
                  default: withCtx(() => [
                    createVNode(MyScrollbar, { height: "200px" }, {
                      default: withCtx(() => [
                        createElementVNode("div", _hoisted_5, [
                          createVNode(MyTreeList, {
                            onChange: changeColumnEnable,
                            nullActive: "",
                            list: unref(tableHeadNest)
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
          )) : createCommentVNode("v-if", true)
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=table-design.vue2.mjs.map
