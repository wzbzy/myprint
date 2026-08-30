declare const _default: import("vue").DefineComponent<{}, {
    useAppStore: import("pinia").Store<"myPrintApp", {
        locale: string;
        displayModel: import("../../../index").DisplayModel;
        client: {
            connect: boolean;
        };
        panelPosition: {
            x: number;
            y: number;
            scrollX: number;
            scrollY: number;
        };
        currentPanel: import("../../../index").Panel;
        previewData: any[];
        provider: import("../../../index").Provider;
        lastPageUnit: import("../../../index").PageUnit;
        currentElement: import("../../../index").MyElement[];
        auxiliaryLineTmp: import("../../../index").MyAuxiliaryLine;
        dataRotation: number | "rotate" | "none" | "ns-resize" | "move" | "col-resize";
    }, {}, {
        SET_LOCALE<T extends "zhCn" | "enUs">(locale: T): void;
        SET_CLIENT_CONNECT(status: boolean): void;
    }>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
