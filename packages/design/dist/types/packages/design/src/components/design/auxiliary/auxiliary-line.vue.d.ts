import { MyAuxiliaryLine } from '@myprint/design/types/entity';
import { CSSProperties } from 'vue-demi';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    element: {
        type: any;
        required: true;
        default: () => MyAuxiliaryLine;
    };
    scrollX: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    scrollY: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    tmp: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>, {
    props: any;
    designAuxiliaryLineRef: import("vue").Ref<any, any>;
    style: import("vue").ComputedRef<CSSProperties>;
    useApp: import("pinia").Store<"myPrintApp", {
        locale: string;
        displayModel: import("@myprint/design/types/entity").DisplayModel;
        client: {
            connect: boolean;
        };
        panelPosition: {
            x: number;
            y: number;
            scrollX: number;
            scrollY: number;
        };
        currentPanel: import("@myprint/design/types/entity").Panel;
        previewData: any[];
        provider: import("@myprint/design/types/entity").Provider;
        lastPageUnit: import("@myprint/design/types/entity").PageUnit;
        currentElement: import("@myprint/design/types/entity").MyElement[];
        auxiliaryLineTmp: MyAuxiliaryLine;
        dataRotation: number | "rotate" | "none" | "ns-resize" | "move" | "col-resize";
    }, {}, {
        SET_LOCALE<T extends "zhCn" | "enUs">(locale: T): void;
        SET_CLIENT_CONNECT(status: boolean): void;
    }>;
    removeAuxiliaryLine: () => void;
    auxiliaryLineControlMouseDown: (event: MouseEvent) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    element: {
        type: any;
        required: true;
        default: () => MyAuxiliaryLine;
    };
    scrollX: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    scrollY: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    tmp: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>> & Readonly<{}>, {
    scrollX: number;
    scrollY: number;
    tmp: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
