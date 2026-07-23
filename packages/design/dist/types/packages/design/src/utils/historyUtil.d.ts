import { MyElement, Panel } from '@myprint/design/types/entity';
export declare enum ActionEnum {
    INIT = "\u52A0\u8F7D",
    ADD = "\u6DFB\u52A0<{element}>",
    RESIZE = "\u4FEE\u6539<{element}>\u5C3A\u5BF8",
    ROTATE = "\u65CB\u8F6C<{element}>",
    REMOVE = "\u5220\u9664<{element}>",
    PASTE = "\u7C98\u8D34<{element}>",
    CUT = "\u526A\u5207<{element}>",
    CLEAR = "\u6E05\u7A7A\u9762\u677F",
    MOVE = "\u79FB\u52A8<{element}>",
    BATCH_MOVE = "\u79FB\u52A8<\u591A\u4E2A\u5143\u7D20>",
    UPDATE_STYLE = "\u4FEE\u6539<{element}>\u7684[{content}]",
    BATCH_UPDATE_STYLE = "\u4FEE\u6539<\u591A\u4E2A\u5143\u7D20>\u7684[{content}]"
}
export interface History {
    label: string;
    content: string;
}
export interface Snapshot {
    panel?: Panel;
    elementList?: MyElement[];
    content?: string;
    action: ActionEnum;
    type?: 'Element' | 'PANEL';
}
declare const undoStack: import("vue-demi").Ref<import("@vueuse/core").UseRefHistoryRecord<History | {
    label: string;
    content: string;
}>[], import("@vueuse/core").UseRefHistoryRecord<History | {
    label: string;
    content: string;
}>[]>, redoStack: import("vue-demi").Ref<import("@vueuse/core").UseRefHistoryRecord<History | {
    label: string;
    content: string;
}>[], import("@vueuse/core").UseRefHistoryRecord<History | {
    label: string;
    content: string;
}>[]>, history: import("vue-demi").Ref<import("@vueuse/core").UseRefHistoryRecord<History | {
    label: string;
    content: string;
}>[], import("@vueuse/core").UseRefHistoryRecord<History | {
    label: string;
    content: string;
}>[]>, redo: () => void, clear: () => void, canUndo: import("vue-demi").Ref<boolean, boolean>, canRedo: import("vue-demi").Ref<boolean, boolean>;
declare function init(): void;
declare function record(snapshot: Snapshot): void;
declare function undoPanel(): void;
declare function redoPanel(): void;
export declare function changeWrapper(val: string | number, title?: string, callback?: (arg: typeof val) => void): void;
export { init, record, canUndo, canRedo, undoStack, redoStack, undoPanel, redoPanel, redo, history, clear };
