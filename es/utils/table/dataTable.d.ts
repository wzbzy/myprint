import { MyElement, Rect, TableCellElement, TableHeadProviderCellElement, TableStatisticsCellElement } from '..\../types/entity';
export declare function recursionForTableCell(tableHeadList: TableHeadProviderCellElement[], callback: (providerCell: TableHeadProviderCellElement) => void): void;
export declare function findTableHeadDeep(tableHeadList: TableHeadProviderCellElement[], deep: number): any;
export declare function getTableCellDown(element: MyElement, tableHeadList: TableCellElement[][], row: number, col: number): {
    cellList: TableCellElement[];
    rowCellList: TableCellElement[][];
    colIndex: number;
};
export declare function cellIsContinue(element: MyElement, tableHeadCellElement: TableCellElement, col: number): boolean;
export declare function getTableCell(element: MyElement, tableHeadList: TableCellElement[][], chooseRow: number, chooseCol: number): TableCellElement[];
export declare function getChildByParent(tableHeadList: TableCellElement[][], row: number, col: number): TableCellElement[];
export declare function selectCell(highlightColumn: any, cellList: TableCellElement[]): void;
export declare function computedCellRect(cellList: TableCellElement[]): Rect;
/**
 * 往上找，看有没有不为空的节点
 * @param floorHeaderList
 * @param col
 * @param deep
 */
export declare function findUpperCell(floorHeaderList: TableCellElement[][], col: number, deep: number): TableCellElement;
export declare function findUpperCellIndex(floorHeaderList: TableCellElement[][], col: number, deep: number): number;
export declare function findFromLeftCell(floorHeaderList: TableCellElement[][], row: number, col: number, deep: number): {
    cell: TableCellElement;
    col: number;
};
export declare function lastHeadList(tableHeadListList: TableCellElement[][]): TableCellElement[];
/**
 * 计算表格的宽高和位置
 * @param tableElement
 * @param table
 * @param tableHeadListList
 */
export declare function computedTableCell(tableElement: MyElement, table: HTMLElement, tableHeadListList: TableCellElement[][]): number[];
export declare function initTableCell(tableHeadListList: TableCellElement[][]): void;
export declare function handleTableCellInitHeight(tableHeadListList: TableCellElement[][]): void;
export declare function tableHeadList2Nest(headListList: TableCellElement[][], row: number, col: number, size: number): TableCellElement[];
export declare function computedDisableColumn(rowColumnList: TableCellElement[][]): {};
export declare function recursionColumnDisable(column: TableCellElement): any;
export declare function recursionHandleTableHead(tableHeadListList: TableCellElement[][], tableHeadList: TableHeadProviderCellElement[], deep: number): void;
export declare function computeColumnColspan(tableHeadList: TableCellElement[], deep: number): void;
export declare function addStatisticsRow(tableElement: MyElement): void;
export declare function tableRealCol(tableElement: MyElement, colList: TableCellElement[], col: number): TableCellElement;
export declare function previewTableStatisticsList(tableStatisticsTmpList: TableStatisticsCellElement[][], tableStatisticsList: TableStatisticsCellElement[][], statisticsListWrapper: Record<number, any[]>, headList: TableCellElement[]): void;
export declare function previewRowStatisticsList(rowList: TableStatisticsCellElement[], statisticsList: Record<number, any[]>, headList: TableCellElement[], statisticsDisplayType: string): boolean;
export declare function statisticsData(previewDataList: any[], statisticsListWrapper: Record<number, any[]>): void;
