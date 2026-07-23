import MathCalc from '../numberUtil.mjs';
import { parse, stringify } from '../utils.mjs';
import { reactive } from 'vue-demi';
import { setCurrentElement, setElementWidthPx, installParentElement } from '../elementUtil.mjs';

function recursionForTableCell(tableHeadList, callback) {
  for (let tableHeadCellElement of tableHeadList) {
    callback(tableHeadCellElement);
    if (tableHeadCellElement.columnList != null && tableHeadCellElement.columnList.length > 0) {
      recursionForTableCell(tableHeadCellElement.columnList, callback);
    }
  }
}
function findTableHeadDeep(tableHeadList, deep) {
  for (let tableHeadCellElement of tableHeadList) {
    if (tableHeadCellElement.columnList != null && tableHeadCellElement.columnList.length > 0) {
      return findTableHeadDeep(tableHeadCellElement.columnList, deep + 1);
    }
  }
  return deep;
}
function getTableCellDown(element, tableHeadList, row, col) {
  const rowCellList = [];
  const cellList = [];
  let rowStart = 0;
  let colIndex = -1;
  let baseCell = void 0;
  for (let i = 0; i < tableHeadList[row].length; i++) {
    let tableHeadCellElement = tableHeadList[row][i];
    if (tableHeadCellElement && col == rowStart) {
      baseCell = tableHeadCellElement;
      colIndex = i;
      break;
    }
    if (cellIsContinue(element, tableHeadCellElement, i)) {
      continue;
    }
    rowStart++;
    if (tableHeadCellElement.colspan > 1) {
      i = i + tableHeadCellElement.colspan - 1;
    }
  }
  if (colIndex >= 0) {
    for (let i = row; i < tableHeadList.length; i++) {
      const rowList = tableHeadList[i];
      const cellListTmp = [];
      for (let j = 0; j < baseCell.colspan; j++) {
        if (rowList[colIndex + j]) {
          cellListTmp.push(rowList[colIndex + j]);
          cellList.push(rowList[colIndex + j]);
        }
      }
      rowCellList.push(cellListTmp);
    }
  }
  return { cellList, rowCellList, colIndex };
}
function cellIsContinue(element, tableHeadCellElement, col) {
  if (tableHeadCellElement == null) {
    return true;
  }
  if (tableHeadCellElement.enable == 0) {
    return true;
  }
  if (element.disableCellMap && element.disableCellMap[col]) {
    return true;
  }
  return false;
}
function getTableCell(element, tableHeadList, chooseRow, chooseCol) {
  const cellList = [];
  if (chooseRow >= 0 && chooseCol >= 0) {
    let rowStart = 0;
    for (let col = 0; col < tableHeadList[chooseRow].length; col++) {
      let tableHeadCellElement = tableHeadList[chooseRow][col];
      if (cellIsContinue(element, tableHeadCellElement, col)) {
        continue;
      }
      if (tableHeadCellElement && chooseCol == rowStart) {
        cellList.push(tableHeadCellElement);
        break;
      }
      rowStart++;
      if (tableHeadCellElement.colspan > 1) {
        col = col + tableHeadCellElement.colspan - 1;
      }
    }
  } else if (chooseCol < 0) {
    for (let col = 0; col < tableHeadList[chooseRow].length; col++) {
      let tableHeadCellElement = tableHeadList[chooseRow][col];
      if (cellIsContinue(element, tableHeadCellElement, col)) {
        continue;
      }
      cellList.push(tableHeadCellElement);
      if (tableHeadCellElement.colspan > 1) {
        col = col + tableHeadCellElement.colspan - 1;
      }
    }
  } else if (chooseRow < 0) {
    for (let col = 0; col < tableHeadList.length; col++) {
      let tableHeadCellElement = tableHeadList[col][chooseCol];
      if (cellIsContinue(element, tableHeadCellElement, col)) {
        continue;
      }
      cellList.push(tableHeadCellElement);
      if (tableHeadCellElement.rowspan > 1) {
        col = col + tableHeadCellElement.rowspan - 1;
      }
    }
  }
  return cellList;
}
function getChildByParent(tableHeadList, row, col) {
  const rowList = tableHeadList[row];
  const baseCell = rowList[col];
  const childByParentList = [];
  for (let i = 0; i < rowList.length; i++) {
    const cell = rowList[i];
    if (cell == null) {
      continue;
    }
    if (baseCell.runtimeOption.cellParent == null) {
      childByParentList.push(cell);
    } else {
      if (cell.runtimeOption.cellParent == null) {
      }
      if (cell.runtimeOption.cellParent.id == baseCell.runtimeOption.cellParent.id) {
        childByParentList.push(cell);
      }
    }
  }
  return childByParentList;
}
function selectCell(highlightColumn, cellList) {
  const rect = computedCellRect(cellList);
  highlightColumn.x = rect.x;
  highlightColumn.y = rect.y;
  highlightColumn.width = rect.width;
  highlightColumn.height = rect.height;
  highlightColumn.visibility = "visible";
  setCurrentElement(cellList);
}
function computedCellRect(cellList) {
  const rect = {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  };
  if (cellList.length == 0) {
    return rect;
  }
  rect.x = cellList[0].runtimeOption.x;
  rect.y = cellList[0].runtimeOption.y;
  for (let i = 0; i < cellList.length; i++) {
    const cell = cellList[i];
    if (rect.x > cell.runtimeOption.x) {
      rect.x = cell.runtimeOption.x;
    }
    if (rect.y > cell.runtimeOption.y) {
      rect.y = cell.runtimeOption.y;
    }
    const width = cell.runtimeOption.x - rect.x + cell.runtimeOption.width;
    const height = cell.runtimeOption.y - rect.y + cell.runtimeOption.height;
    if (rect.width < width) {
      rect.width = width;
    }
    if (rect.height < height) {
      rect.height = height;
    }
  }
  rect.y = rect.y - 1;
  rect.height = rect.height - 1;
  return rect;
}
function findUpperCell(floorHeaderList, col, deep) {
  for (let i = deep; i >= 0; i--) {
    const cell = floorHeaderList[i][col];
    if (cell != null) {
      return floorHeaderList[i][col];
    }
  }
}
function findUpperCellIndex(floorHeaderList, col, deep) {
  for (let i = deep; i >= 0; i--) {
    const cell = floorHeaderList[i][col];
    if (cell != null) {
      return i;
    }
  }
}
function findFromLeftCell(floorHeaderList, row, col, deep) {
  const rowList = floorHeaderList[row];
  if (deep > 0) {
    for (let i = col + 1; i < rowList.length; i++) {
      const cell = rowList[i];
      if (cell != null) {
        if (--deep == 0) {
          return { cell: rowList[i], col: i };
        }
        if (cell.colspan > 1) {
          i = i + cell.colspan - 1;
        }
      }
    }
  }
  if (deep < 0) {
    for (let i = col - 1; i >= 0; i--) {
      const cell = rowList[i];
      if (cell != null) {
        if (++deep == 0) {
          return { cell: rowList[i], col: i };
        }
      }
    }
  }
}
function lastHeadList(tableHeadListList) {
  const headList = tableHeadListList[tableHeadListList.length - 1];
  const lastHeadList2 = [];
  for (let i = 0; i < headList.length; i++) {
    let head = headList[i];
    if (head == null) {
      head = findUpperCell(tableHeadListList, i, tableHeadListList.length - 1);
    }
    lastHeadList2.push(head);
  }
  return lastHeadList2;
}
function computedTableCell(tableElement, table, tableHeadListList) {
  const tableRect = table.getBoundingClientRect();
  const disableCellMap = tableElement.disableCellMap ?? {};
  const rowHeightList = [];
  for (let row = 0; row < tableHeadListList.length; row++) {
    let height = 0;
    const tableHeadListListElement = tableHeadListList[row];
    for (let col = 0; col < tableHeadListListElement.length; col++) {
      const tableCellElement = tableHeadListListElement[col];
      if (tableCellElement == null) {
        continue;
      }
      if (tableCellElement.colspan > 1) {
        if (row + 1 < tableHeadListList.length) {
          const childList = tableHeadListList[row + 1];
          for (let childCol = col; childCol < childList.length; childCol++) {
            const child = childList[childCol];
            if (child == null) {
              continue;
            }
            if (child.runtimeOption == null) {
              child.runtimeOption = {};
            }
            child.runtimeOption.cellParent = tableCellElement;
          }
        }
      }
      if (recursionColumnDisable(tableCellElement)) {
        continue;
      }
      if (disableCellMap[col]) {
        continue;
      }
      const target = tableCellElement.runtimeOption.target;
      if (target == null) {
        continue;
      }
      const tdRect = target.getBoundingClientRect();
      const tdY = MathCalc.sub(tdRect.y, tableRect.y);
      const tdX = MathCalc.sub(tdRect.x, tableRect.x);
      tableCellElement.runtimeOption.x = tdX;
      tableCellElement.runtimeOption.y = tdY;
      tableCellElement.runtimeOption.width = tdRect.width;
      tableCellElement.runtimeOption.height = tdRect.height;
      height = MathCalc.div(tableCellElement.runtimeOption.height, tableCellElement.rowspan);
    }
    rowHeightList.push(height);
  }
  return rowHeightList;
}
function initTableCell(tableHeadListList) {
  for (let row = 0; row < tableHeadListList.length; row++) {
    const tableHeadListListElement = tableHeadListList[row];
    for (let col = 0; col < tableHeadListListElement.length; col++) {
      const tableCellElement = tableHeadListListElement[col];
      if (tableCellElement == null) {
        continue;
      }
      tableCellElement.runtimeOption.init.width = tableCellElement.runtimeOption.width;
      tableCellElement.runtimeOption.init.height = tableCellElement.runtimeOption.height;
    }
  }
}
function handleTableCellInitHeight(tableHeadListList) {
  for (let tableHeadListListElement of tableHeadListList) {
    let height = 0;
    for (let tableCellElement of tableHeadListListElement) {
      if (tableCellElement == null) {
        continue;
      }
      if (height < tableCellElement.height) {
        height = tableCellElement.height;
      }
    }
    for (let tableCellElement of tableHeadListListElement) {
      if (tableCellElement == null) {
        continue;
      }
      tableCellElement.height = height * tableCellElement.rowspan;
    }
  }
}
function tableHeadList2Nest(headListList, row, col, size) {
  const tableHeadNest = [];
  const headList = headListList[row];
  for (let i = col; i < col + size; i++) {
    const column = headList[i];
    if (column == null) {
      continue;
    }
    tableHeadNest.push(column);
    if (row < headListList.length - 1) {
      let colspan = 1;
      for (let j = i + 1; j < headList.length; j++) {
        const cell = headList[j];
        if (row > 0) {
          const upperCellIndex = findUpperCellIndex(headListList, j, row);
          if (upperCellIndex != null) {
            break;
          }
        }
        if (cell != null) {
          break;
        }
        colspan++;
      }
      if (colspan > 1) {
        column.runtimeOption.nestColumnList = tableHeadList2Nest(headListList, row + 1, i, colspan);
      }
    }
  }
  return tableHeadNest;
}
function computedDisableColumn(rowColumnList) {
  const disableCellMap = {};
  for (let row = 0; row < rowColumnList.length; row++) {
    const columnList = rowColumnList[row];
    if (columnList == null) {
      continue;
    }
    for (let col = 0; col < columnList.length; col++) {
      const column = columnList[col];
      if (column == null) {
        continue;
      }
      if (column.option.enable == 0) {
        for (let k = 0; k < column.colspan; k++) {
          disableCellMap[col + k] = 1;
        }
      }
    }
  }
  return disableCellMap;
}
function recursionColumnDisable(column) {
  if (column == null) {
    return false;
  }
  if (column.option.enable == 0) {
    return true;
  }
  if (column.runtimeOption.cellParent) {
    return recursionColumnDisable(column.runtimeOption.cellParent);
  }
  return false;
}
function recursionHandleTableHead(tableHeadListList, tableHeadList, deep) {
  const tableHeadListTmp = tableHeadListList[deep];
  for (let j = 0; j < tableHeadList.length; j++) {
    const tableHeadCell = tableHeadList[j];
    const childList = tableHeadCell.columnList;
    tableHeadCell.columnList = void 0;
    if (childList != null && childList.length > 0) {
      tableHeadCell.rowspan = 1;
      recursionHandleTableHead(tableHeadListList, childList, deep + 1);
      let colspan = 0;
      let width = 0;
      for (let tableHeadCellElement of childList) {
        colspan += tableHeadCellElement.colspan;
        width = MathCalc.sub(width, tableHeadCellElement.width);
      }
      tableHeadCell.colspan = colspan;
      tableHeadCell.width = width;
    } else {
      tableHeadCell.colspan = 1;
      tableHeadCell.rowspan = tableHeadListList.length - deep;
    }
    tableHeadListTmp.push(tableHeadCell);
    for (let k = 1; k < tableHeadCell.colspan; k++) {
      tableHeadListTmp.push(void 0);
    }
    if (tableHeadCell.rowspan > 1) {
      for (let k = 1 + deep; k < tableHeadCell.rowspan + deep; k++) {
        tableHeadListList[k].push(void 0);
      }
    }
  }
}
function computeColumnColspan(tableHeadList, deep) {
  for (let j = 0; j < tableHeadList.length; j++) {
    const tableHeadCell = tableHeadList[j];
    const childList = tableHeadCell.runtimeOption.nestColumnList;
    if (childList != null && childList.length > 0) {
      computeColumnColspan(childList, deep + 1);
      let colspan = 0;
      let width = 0;
      let widthEx = 0;
      for (let tableHeadCellElement of childList) {
        if (tableHeadCellElement.option.enable == 0) {
          continue;
        }
        colspan += tableHeadCellElement.colspan;
        width = MathCalc.sum(width, tableHeadCellElement.width);
        widthEx = MathCalc.sum(widthEx, tableHeadCellElement.runtimeOption.width);
      }
      tableHeadCell.colspan = colspan;
      setElementWidthPx(widthEx, tableHeadCell);
    } else {
      tableHeadCell.colspan = 1;
    }
  }
}
function addStatisticsRow(tableElement) {
  const statisticsRowList = [];
  tableElement.tableBodyList[0].map((v) => {
    const element = parse(stringify(v, "parent", "target", "elementList"), reactive({}));
    element.id = void 0;
    element.data = void 0;
    element.option.formatter = void 0;
    element.runtimeOption.cellType = "Statistics";
    installParentElement(tableElement, element);
    statisticsRowList.push(element);
  });
  tableElement.statisticsList.push(statisticsRowList);
}
function tableRealCol(tableElement, colList, col) {
  let realCol = 0;
  for (let i = 0; i < colList.length; i++) {
    if (cellIsContinue(tableElement, colList[i], i)) {
      continue;
    }
    if (realCol == col) {
      return colList[i];
    }
    realCol++;
  }
}
function previewTableStatisticsList(tableStatisticsTmpList, tableStatisticsList, statisticsListWrapper, headList) {
  for (let i = 0; i < tableStatisticsTmpList.length; i++) {
    const rowList = [...tableStatisticsTmpList[i]];
    let hasCell = previewRowStatisticsList(rowList, statisticsListWrapper, headList, "everyPageStatisticsIs");
    if (hasCell) {
      tableStatisticsList.push(rowList);
    }
  }
}
function previewRowStatisticsList(rowList, statisticsList, headList, statisticsDisplayType) {
  let hasCell = false;
  for (let col = 0; col < rowList.length; col++) {
    const head = rowList[col];
    if (head == null || !head[statisticsDisplayType]) {
      continue;
    }
    const statisticsCell = parse(stringify(head, "parent"), reactive({}));
    statisticsCell.runtimeOption.parent = head.runtimeOption.parent;
    rowList[col] = statisticsCell;
    hasCell = true;
    let statisticsWrapper = statisticsList[col];
    if (statisticsWrapper == void 0) {
      statisticsWrapper = [];
      statisticsList[col] = statisticsWrapper;
    }
    const column = headList[col];
    const cellWrapper = {
      head: column,
      value: 0,
      count: 0,
      setCount: {},
      cell: statisticsCell
    };
    if (statisticsCell.statisticsType == "Min") {
      cellWrapper.value = Number.MAX_VALUE;
    }
    if (statisticsCell.statisticsType == "Max") {
      cellWrapper.value = Number.MIN_VALUE;
    }
    statisticsWrapper.push(cellWrapper);
  }
  return hasCell;
}
function statisticsData(previewDataList, statisticsListWrapper) {
  const colList = Object.keys(statisticsListWrapper);
  if (colList.length == 0) {
    return;
  }
  for (let previewData of previewDataList) {
    for (let col of colList) {
      const statisticsWrapperList = statisticsListWrapper[col];
      for (let statisticsWrapper of statisticsWrapperList) {
        const cell = statisticsWrapper.cell;
        const head = statisticsWrapper.head;
        const data = previewData[head.field];
        if (MathCalc.isNumber(data)) {
          if (cell.statisticsType == "Sum" || cell.statisticsType == "Avg") {
            statisticsWrapper.value = statisticsWrapper.value + data;
            if (cell.statisticsType == "Avg") {
              statisticsWrapper.count++;
            }
          } else if (cell.statisticsType == "Max") {
            if (statisticsWrapper.value < data) {
              statisticsWrapper.value = data;
            }
          } else if (cell.statisticsType == "Min") {
            if (statisticsWrapper.value > data) {
              statisticsWrapper.value = data;
            }
          }
        }
        if (cell.statisticsType == "Count") {
          statisticsWrapper.count++;
        }
        if (cell.statisticsType == "DistinctCount") {
          statisticsWrapper.setCount[data] = null;
        }
      }
    }
  }
  for (let col of colList) {
    for (let statisticsWrapper of statisticsListWrapper[col]) {
      const cell = statisticsWrapper.cell;
      if (cell.statisticsType == "Sum" || cell.statisticsType == "Max" || cell.statisticsType == "Min") {
        cell.data = statisticsWrapper.value;
      } else if (cell.statisticsType == "Avg") {
        cell.data = MathCalc.div(statisticsWrapper.value, statisticsWrapper.count);
      } else if (cell.statisticsType == "Count") {
        cell.data = statisticsWrapper.count;
      } else if (cell.statisticsType == "DistinctCount") {
        cell.data = Object.keys(statisticsWrapper.setCount).length;
      }
    }
  }
}

export { addStatisticsRow, cellIsContinue, computeColumnColspan, computedCellRect, computedDisableColumn, computedTableCell, findFromLeftCell, findTableHeadDeep, findUpperCell, findUpperCellIndex, getChildByParent, getTableCell, getTableCellDown, handleTableCellInitHeight, initTableCell, lastHeadList, previewRowStatisticsList, previewTableStatisticsList, recursionColumnDisable, recursionForTableCell, recursionHandleTableHead, selectCell, statisticsData, tableHeadList2Nest, tableRealCol };
//# sourceMappingURL=dataTable.mjs.map
