export declare function mountedKeyboardEvent(): void;
export declare function unMountedKeyboardEvent(): void;
export declare function addKeyboardEvent(): {
    subscribe(keys: (string | ((event: KeyboardEvent) => boolean))[], callback: () => void): any;
};
export declare function removeKeyboardEvent(): void;
export declare function isCtrl(event: KeyboardEvent): boolean;
export declare function isShift(event: KeyboardEvent): boolean;
export declare function isCtrlShift(event: KeyboardEvent): boolean;
export declare function isDelete(event: KeyboardEvent): boolean;
