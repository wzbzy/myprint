/// <reference types="node" />
/// <reference types="node" />
import { Module, SaveResult, Template } from '../types/R';
export interface PrintOptions {
    taskId?: string;
    panel?: Panel | string;
    previewDataList?: any[];
    title?: string;
    timeout?: number;
    file?: Blob | ArrayBuffer | Uint8Array | string;
    html?: string;
    css?: string;
    printer?: string;
    orientation?: 'portrait' | 'landscape' | 'auto';
    swapWidthHeight?: boolean;
    pageSize?: string;
    width?: number;
    height?: number;
    copies?: number;
    scale?: 'fit';
    scaleFactor?: number;
    printBackground?: boolean;
    color?: boolean;
    /**
     * 支持MyPrint客户端、windows直连，macos直连
     * 双面打印 | 单面打印
     */
    duplexMode?: 'duplex' | 'simplex';
    dpi?: any;
}
export interface DesignPanelProps {
    template?: Template;
    saveTemplate?: (template: Template) => Promise<SaveResult>;
    module?: Module;
    height?: string;
    generateImg?: boolean;
    showBackButton?: boolean;
    showPrintButton?: boolean;
    showDownloadPdfButton?: boolean;
    showPreviewButton?: boolean;
    showClearButton?: boolean;
    showSaveButton?: boolean;
}
export interface MyPrintConfig {
    serverUrl?: string;
    clientUrl?: string;
    disabledClient?: boolean;
}
export interface PrintResult {
    status: 'SUCCESS' | 'ERROR' | 'TIMEOUT' | 'CLOSE';
    msg?: string;
    blob?: Blob;
    blobList?: Blob[];
    type: 'CHROME_PRINT' | 'TIMEOUT' | 'CLIENT_PRINT' | 'CHROME_GENERATE_PDF' | 'CHROME_GENERATE_IMG' | 'SERVER_GENERATE_IMG' | 'CLIENT_GENERATE_PDF' | 'SERVER_GENERATE_PDF' | 'CLOSE';
}
export interface ClientCmd {
    taskId: string;
    cmd: 'print' | 'printerList' | 'generatePdf' | 'generatePdfResult' | 'printResult' | 'ping' | 'text/css';
    options?: PrintOptions;
}
export interface ClientResult {
    taskId: string;
    cmd: 'print' | 'printerList' | 'generatePdf' | 'generatePdfResult' | 'printResult' | 'pong';
    data?: Buffer | any;
    status?: 'SUCCESS' | 'ERROR';
    msg?: string;
}
export interface Printer {
    /**
     * a longer description of the printer's type.
     */
    description: string;
    /**
     * the name of the printer as shown in Print Preview.
     */
    displayName: string;
    /**
     * whether or not a given printer is set as the default printer on the OS.
     */
    isDefault: boolean;
    /**
     * the name of the printer as understood by the OS.
     */
    name: string;
    /**
     * an object containing a variable number of platform-specific printer information.
     */
    options: any;
    /**
     * the current status of the printer.
     */
    status: number;
}
export interface Provider {
    name: string;
    pageUnit: PageUnit;
    fontSizeUnit: FontSizeUnit;
    pageSize: string;
    width: number;
    height: number;
    watermark: boolean;
    watermarkContent: string;
    dragSnapPanelIs: number;
    dragSnapIs: number;
    elementList: MyElement[];
}
export interface Design {
    scale: number;
}
/**
 * 节点关系
 */
export interface ElementRelation {
    elementList: MyElement[];
}
export interface Id {
    id: string;
}
export interface Point {
    x: number;
    y: number;
}
export interface Rect extends Point {
    width: number;
    height: number;
}
export interface SvgData {
    points: Point[];
    controlPoints: Point[];
}
export interface PointLabel extends Point {
    label?: string;
    type: 'control' | 'virtual' | 'rotate';
    insertIndex: number;
}
export interface PointClick extends Point {
    clickTimestamp: number;
}
export interface MyAuxiliaryLine extends Point, Id {
    direction: 'vertical' | 'horizontal';
    runtimeOption: RuntimeElementOption;
}
export interface Line {
    start: Point;
    end: Point;
}
export interface Container extends Rect, ElementRelation, Id {
    minWidth: number;
    minHeight: number;
    type: elementType;
    visibility: 'visible' | 'hidden';
    /**
     * 运行时配置
     */
    runtimeOption: RuntimeElementOption;
}
export interface Panel extends Container {
    name: string;
    width: number;
    height: number;
    pageSize: string;
    pageUnit: PageUnit;
    fontSizeUnit: FontSizeUnit;
    watermark: boolean;
    watermarkContent: string;
    dragSnapPanelIs: number;
    dragSnapIs: number;
    design: Design;
    orientation?: 'p' | 'portrait' | 'l' | 'landscape';
    pageHeader?: MyElement;
    pageFooter?: MyElement;
    groupList: string[][];
    auxiliaryLineList: MyAuxiliaryLine[];
}
export interface PreviewContext {
    autoPageIs: boolean;
    currentPreview: PreviewWrapper;
    previewData: any;
    panel: Panel;
    pageList: PreviewContainerWrapper[];
    currentPage: PreviewContainerWrapper;
    top: number;
    bottom: number;
    pagingRepetition: boolean;
}
export interface PreviewWrapper extends MyElement, TableCellElement, PreviewContainerWrapper {
    offsetLastElementTop: number;
    heightIs: boolean;
    tableHeadHiddenIs: boolean;
    previewTableRowIndex: number;
    target: any;
}
export interface PreviewContainerWrapper extends MyElement {
    offsetTop: number;
    previewWrapperList: PreviewWrapper[];
}
export interface DragWrapper {
    dragIng: boolean;
    type: string;
    element: MyElement;
    start: Position;
    end: Position;
}
export declare const elementTypeFormat: {
    Panel: string;
    Text: string;
    TextTime: string;
    Image: string;
    DataTable: string;
    FreeTable: string;
    Rect: string;
    HorizontalLine: string;
    DottedHorizontalLine: string;
    VerticalLine: string;
    DottedVerticalLine: string;
    Container: string;
    PageHeader: string;
    PageFooter: string;
    PageNum: string;
    SvgPolygonLine: string;
    SvgLine: string;
    SvgBezierCurve: string;
    SvgBezierCurveThree: string;
    SvgCircle: string;
    SvgEllipse: string;
    DrawPanel: string;
};
export declare const displayStrategyFormat: {
    none: string;
    firstPage: string;
    lastPage: string;
    oddPage: string;
    evenPage: string;
};
export declare type displayStrategy = keyof typeof displayStrategyFormat;
export declare const cellTypeFormat: {
    Head: string;
    Body: string;
    Statistics: string;
};
export declare const statisticsTypeFormat: {
    Sum: string;
    Avg: string;
    Count: string;
    DistinctCount: string;
    Max: string;
    Min: string;
    CustomFormula: string;
};
export declare type DisplayModel = 'design' | 'preview' | 'print';
export declare type PageUnit = 'px' | 'mm' | 'cm' | 'in';
export declare type FontSizeUnit = 'px' | 'pt';
export declare type elementType = keyof typeof elementTypeFormat;
export declare type cellType = keyof typeof cellTypeFormat;
export declare type statisticsType = keyof typeof statisticsTypeFormat;
declare type textContentType = 'Text' | 'Barcode' | 'QrCode';
export declare type elementStatus = 'NONE' | 'SELECT' | 'SELECT_REMOVE' | 'HANDLE' | 'HANDLE_ED' | 'HANDLE_EDIT_ING';
export declare type auxiliaryLineStatus = 'SHOW' | 'HIDDEN';
declare type textAlign = 'start' | 'center' | 'end';
export interface HandlePanel {
    icon: string;
    label: string;
    visible: boolean;
}
export interface HandlePanelPosition extends Container {
    right: number;
}
export interface MyElement extends Container {
    contentType?: textContentType;
    field: string;
    enable?: number;
    label?: string;
    data?: any;
    option: ElementOption;
    svgOption: ElementSvgOption;
    columnBody: TableCellElement;
    columnList: TableHeadProviderCellElement[];
    tableHeadList: TableCellElement[][];
    tableBodyList: TableCellElement[][];
    disableCellMap: Record<number, 0 | 1 | undefined>;
    statisticsList: TableStatisticsCellElement[][];
    rowList: TableCellElement[][];
    /**
     * 是否锁定
     */
    lock?: number;
    /**
     * 是否组合
     */
    groupIs?: boolean;
}
export interface TableHeadProviderCellElement extends Rect, Id {
    type: elementType;
    contentType?: textContentType;
    field?: string;
    enable?: number;
    label?: string;
    data?: any;
    columnBody: TableCellElement;
    option: ElementOption;
    rowspan: number;
    colspan: number;
    columnList: Array<TableHeadProviderCellElement>;
}
export interface TableCellElement extends MyElement {
    rowspan: number;
    colspan: number;
}
export interface TableStatisticsCellElement extends TableCellElement {
    statisticsType: statisticsType;
    everyPageStatisticsIs: boolean;
    tableStatisticsIs: boolean;
    customFormula: string;
}
export interface TextElement extends MyElement {
    labelOption?: ElementOption;
    contentType: textContentType;
}
/**
 * 运行时参数，不提交后台
 */
export interface RuntimeElementOption extends Position {
    centerX: number;
    centerY: number;
    width: number;
    height: number;
    translate: Point;
    bounds: Position;
    parent?: Container;
    cellParent: TableCellElement;
    target: any;
    rotate: number;
    init: Container;
    status: elementStatus;
    auxiliaryLineStatus: auxiliaryLineStatus;
    cutIngIs: boolean;
    previewIs: boolean;
    /**
     * 工作环境，如果是在表格中，填充满整个cell
     */
    workEnvironment: elementType;
    cellType: cellType;
    nestColumnList: TableCellElement[];
    dragInIs: boolean;
    index: number;
    printRealHeight: number;
}
export interface ElementOption {
    barCodeType: string;
    barCodeDisplayValIs: boolean;
    qrCodeScale: number;
    qrErrorCorrectionLevel: 'low' | 'medium' | 'quartile' | 'high' | 'L' | 'M' | 'Q' | 'H';
    keepRatio: boolean;
    fixed: boolean;
    fontFamily: string;
    fontSize: number;
    opacity: number;
    color: string;
    background: 'none';
    bold: boolean;
    underline: boolean;
    lineThrough: boolean;
    italic: boolean;
    borderAll: boolean;
    borderWidth: number;
    borderRadius: number;
    lineWidth: number;
    rotate: number;
    textAlign: textAlign;
    verticalAlign: textAlign;
    lineBreak: number;
    lineHeight: number;
    dottedStyle: 'dotted' | 'dashed';
    sort: number;
    hiddenLabel: boolean;
    labelSplit: boolean;
    disableSort: number;
    disableEnable: number;
    autoTextHeight: boolean;
    enable: number;
    padding: Position;
    margin: Position;
    formatter?: string;
    displayStrategy?: displayStrategy;
    tableHeightType: 'FIXED' | 'AUTO';
    tableBodyBgStyleType: 'NONE' | 'COMMON' | 'CUSTOM';
    tablePageHeadIs: number;
    tableHiddenHeadIs: number;
    tableBodyHeightType: 'FIXED' | 'AUTO';
    tableBodyHeight: number;
}
export interface ElementSvgOption {
}
export interface Position extends Point {
    top: number;
    bottom: number;
    left: number;
    right: number;
}
export interface ContentScaleVo {
    viewport: Container;
    miniMap: Container;
    scale: number;
    openIs: boolean;
    width: number;
    height: number;
}
export interface FormatterVariable {
    pageIndex: number;
    pageSize: number;
    nowDate?: Date;
}
export declare type MyHtmlElement = HTMLElement & {
    element: MyElement;
};
export interface DownList {
    label: string;
    value: any;
    enable?: boolean;
    click?: () => void;
    icon?: string;
}
export {};
