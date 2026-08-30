import { MyElement } from '../types/entity';
declare type memoryClipboardType = 'COPY' | 'CUT';
export declare const memoryClipboardUtil: {
    clipboard: {
        data: MyElement[];
        type: memoryClipboardType;
        pasteNumMap: {};
    };
    copy(): void;
    cut(): void;
    paste(): void;
};
export {};
