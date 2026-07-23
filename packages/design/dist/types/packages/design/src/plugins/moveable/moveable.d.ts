import { elementStatus, MyElement, MyHtmlElement } from '@myprint/design/types/entity';
export declare function dragNewElement(newElement: MyHtmlElement, inputEvent: any): void;
export declare function dragNewElementCancel(newElement: MyHtmlElement): void;
export declare function updatePanel(list?: MyElement[]): void;
export declare function moveableMove(x?: number, y?: number): void;
export declare function moveableMoveX(x: number): void;
export declare function moveableMoveY(y: number): void;
export declare function moveableMoveOffset(x: number, y: number): void;
export declare function group(): void;
export declare function ungroup(): void;
export declare function moveableResize(width: number, height: number, keepRatio?: boolean): void;
export declare function moveableRotate(rotate: number): void;
export declare function moveableResizeOffset(width: number, height: number, keepRatio?: boolean): void;
export declare function moveableDragResize(x: number, y: number, width: number, height: number, element: MyElement): void;
export declare function moveableDragOffsetResize(x: number, y: number, width: number, height: number, element: MyElement): void;
export declare function moveableDragTarget(drag: HTMLElement | null, event?: any): void;
export declare function moveableClearDragTarget(): void;
export declare function alignTop(): void;
export declare function alignBottom(): void;
export declare function alignLeft(): void;
export declare function alignRight(): void;
export declare function alignVerticalCenter(): void;
export declare function alignHorizontalCenter(): void;
/**
 * 排列垂直间距
 */
export declare function arrangeVerticalSpacing(): void;
/**
 * 排列水平间距
 */
export declare function arrangeHorizontalSpacing(): void;
export declare function updateMoveableRect(): void;
export declare const setSelectedTargets: (nextTargetes: Array<MyHtmlElement | MyHtmlElement[]>, status?: elementStatus) => void;
export declare function freshMoveableOption(element: MyElement): void;
export declare function initMoveable(_selecto: any, _highlightRule: any): void;
export declare function getSelectElement(): any;
export declare function selectAllElement(): void;
export declare function removeSelectElement(elementList?: MyElement[]): void;
export declare function addCanSelectElement(elementList: MyElement | MyElement[]): void;
export declare function removeCanSelectElement(elementList: MyElement | MyElement[]): void;
export declare function selectTabNext(): void;
export declare function moveableEditing(): void;
export declare function testMoveable(): void;
export declare function checkInput(): void;
/**
 * 边界限制
 * @param filterStatus
 */
export declare function changeDragSnapIs(filterStatus?: boolean): void;
