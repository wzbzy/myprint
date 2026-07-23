import { DisplayModel, MyAuxiliaryLine, PageUnit, Panel, Provider } from '@myprint/design/types/entity';
export declare const useAppStoreHook: import("pinia").StoreDefinition<"myPrintApp", {
    locale: string;
    displayModel: DisplayModel;
    client: {
        connect: boolean;
    };
    panelPosition: {
        x: number;
        y: number;
        scrollX: number;
        scrollY: number;
    };
    currentPanel: Panel;
    previewData: any[];
    provider: Provider;
    lastPageUnit: PageUnit;
    currentElement: import("@myprint/design/types/entity").MyElement[];
    auxiliaryLineTmp: MyAuxiliaryLine;
    dataRotation: number | "rotate" | "none" | "ns-resize" | "move" | "col-resize";
}, {}, {
    SET_LOCALE<T extends "zhCn" | "enUs">(locale: T): void;
    SET_CLIENT_CONNECT(status: boolean): void;
}>;
