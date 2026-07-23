import { Panel, TableCellElement } from '../types/entity';
export declare const tableColClone: {
    showIs: boolean;
    clonedTable: HTMLTableElement;
    init(): void;
    show(columnLeft: number, columnTop: number, width: number, rows: TableCellElement[][]): void;
    move(columnLeft: number): void;
    hidden(): void;
};
export declare function getPrintElementHtml(htmlElement: HTMLElement[], pageList: any[]): string;
export declare function iFramePrint(panel: Panel, html: string): void;
