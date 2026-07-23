import { CSSProperties } from 'vue-demi';
import { Container, MyAuxiliaryLine } from '..\..\../types/entity';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    direction: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    highlight: {
        type: any;
        required: false;
        default: () => Container;
    };
    length: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    auxiliaryLineVisible: {
        type: BooleanConstructor;
        required: true;
    };
    scroll: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}>, {
    appStore: import("pinia").Store<"myPrintApp", {
        locale: string;
        displayModel: import("..\..\../types/entity").DisplayModel;
        client: {
            connect: boolean;
        };
        panelPosition: {
            x: number;
            y: number;
            scrollX: number;
            scrollY: number;
        };
        currentPanel: import("..\..\../types/entity").Panel;
        previewData: any[];
        provider: import("..\..\../types/entity").Provider;
        lastPageUnit: import("..\..\../types/entity").PageUnit;
        currentElement: import("..\..\../types/entity").MyElement[];
        auxiliaryLineTmp: MyAuxiliaryLine;
        dataRotation: number | "rotate" | "none" | "ns-resize" | "move" | "col-resize";
    }, {}, {
        SET_LOCALE<T extends "zhCn" | "enUs">(locale: T): void;
        SET_CLIENT_CONNECT(status: boolean): void;
    }>;
    props: any;
    highlightStyle: import("vue").ComputedRef<CSSProperties>;
    canvas: import("vue").Ref<SVGElement, SVGElement>;
    ruleRef: import("vue").Ref<HTMLDivElement, HTMLDivElement>;
    height: number;
    length: import("vue").Ref<number, number>;
    ruleWidth: import("vue").Ref<number, number>;
    ruleHeight: import("vue").Ref<number, number>;
    chartSvg: any;
    mouseMove: (event: MouseEvent) => void;
    mouseLeave: () => void;
    mouseClick: (event: MouseEvent) => void;
    styleWrapper: import("vue").ComputedRef<any>;
    style: import("vue").ComputedRef<any>;
    drawRuler: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    direction: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    highlight: {
        type: any;
        required: false;
        default: () => Container;
    };
    length: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    auxiliaryLineVisible: {
        type: BooleanConstructor;
        required: true;
    };
    scroll: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}>> & Readonly<{}>, {
    length: number;
    direction: string;
    highlight: any;
    scroll: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
