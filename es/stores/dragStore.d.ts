import { MyElement, DragWrapper } from '../types/entity';
export declare const dragDataStore: import("pinia").StoreDefinition<"myPrintDragData", {
    data: DragWrapper;
}, {}, {
    set(type: string, element: MyElement): void;
}>;
