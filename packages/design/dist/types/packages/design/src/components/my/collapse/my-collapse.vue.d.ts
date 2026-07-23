import { CSSProperties } from 'vue-demi';
import { HandlePanel, HandlePanelPosition } from '@myprint/design/types/entity';
export interface Props {
    element?: HandlePanel;
    position: HandlePanelPosition;
    modelValue?: boolean;
}
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    element: {
        type: any;
        required: false;
        default: () => HandlePanel;
    };
    position: {
        type: any;
        required: true;
        default: () => HandlePanelPosition;
    };
    modelValue: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>, {
    props: any;
    appStore: import("pinia").Store<"myPrintApp", {
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
        auxiliaryLineTmp: import("@myprint/design/types/entity").MyAuxiliaryLine;
        dataRotation: number | "rotate" | "none" | "ns-resize" | "move" | "col-resize";
    }, {}, {
        SET_LOCALE<T extends "zhCn" | "enUs">(locale: T): void;
        SET_CLIENT_CONNECT(status: boolean): void;
    }>;
    emit: (event: "update:modelValue", ...args: any[]) => void;
    headRef: import("vue").Ref<HTMLDivElement, HTMLDivElement>;
    data: {
        x: number;
        y: number;
        right: number;
        bodyResizeHeight: number;
        translateX: number;
        translateY: number;
        show: boolean;
        resizeIs: boolean;
        zIndex: number;
        loaded: boolean;
    };
    clickHead: () => void;
    clickHeadClose: () => void;
    style: import("vue").ComputedRef<CSSProperties>;
    headMouseDown: (e: MouseEvent) => boolean;
    bodyMouseDown: () => void;
    resize: (e: MouseEvent) => boolean;
    MyScrollbar: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        tag: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        height: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        options: {
            type: any;
            required: false;
            default: () => {};
        };
        hoverBlod: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        disabledScrollBar: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
    }>, {
        props: any;
        emit: (event: "scroll" | "ps-scroll-y" | "ps-scroll-x" | "ps-scroll-up" | "ps-scroll-down" | "ps-scroll-left" | "ps-scroll-right" | "ps-y-reach-start" | "ps-y-reach-end" | "ps-x-reach-start" | "ps-x-reach-end", ...args: any[]) => void;
        scrollbar: import("vue").Ref<HTMLElement, HTMLElement>;
        ps: import("vue").Ref<any, any>;
        resizeObserver: ResizeObserver;
        createInstance: () => void;
        destroyInstance: () => void;
        eventListeners: Record<import("@myprint/design/components/my/scrollbar/my-scrollbar.vue").PerfectScrollbarEmitsKeys, (event: Event) => void>;
        createEventListener: (eventName: import("@myprint/design/components/my/scrollbar/my-scrollbar.vue").PerfectScrollbarEmitsKeys) => (event: Event) => void;
        toggleListeners: (addListeners?: boolean) => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scroll" | "ps-scroll-y" | "ps-scroll-x" | "ps-scroll-up" | "ps-scroll-down" | "ps-scroll-left" | "ps-scroll-right" | "ps-y-reach-start" | "ps-y-reach-end" | "ps-x-reach-start" | "ps-x-reach-end")[], "scroll" | "ps-scroll-y" | "ps-scroll-x" | "ps-scroll-up" | "ps-scroll-down" | "ps-scroll-left" | "ps-scroll-right" | "ps-y-reach-start" | "ps-y-reach-end" | "ps-x-reach-start" | "ps-x-reach-end", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        tag: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        height: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        options: {
            type: any;
            required: false;
            default: () => {};
        };
        hoverBlod: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        disabledScrollBar: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
    }>> & Readonly<{
        onScroll?: (...args: any[]) => any;
        "onPs-scroll-y"?: (...args: any[]) => any;
        "onPs-scroll-x"?: (...args: any[]) => any;
        "onPs-scroll-up"?: (...args: any[]) => any;
        "onPs-scroll-down"?: (...args: any[]) => any;
        "onPs-scroll-left"?: (...args: any[]) => any;
        "onPs-scroll-right"?: (...args: any[]) => any;
        "onPs-y-reach-start"?: (...args: any[]) => any;
        "onPs-y-reach-end"?: (...args: any[]) => any;
        "onPs-x-reach-start"?: (...args: any[]) => any;
        "onPs-x-reach-end"?: (...args: any[]) => any;
    }>, {
        height: string;
        tag: string;
        options: any;
        hoverBlod: boolean;
        disabledScrollBar: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    MyIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        disabled: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        modelValue: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        focusBk: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        size: {
            type: (NumberConstructor | StringConstructor)[];
            required: false;
            default: number;
        };
        padding: {
            type: StringConstructor;
            required: false;
            default: any;
        };
    }>, {
        emit: (event: "click" | "update:modelValue", ...args: any[]) => void;
        props: any;
        click: () => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "update:modelValue")[], "click" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        disabled: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        modelValue: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        focusBk: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        size: {
            type: (NumberConstructor | StringConstructor)[];
            required: false;
            default: number;
        };
        padding: {
            type: StringConstructor;
            required: false;
            default: any;
        };
    }>> & Readonly<{
        onClick?: (...args: any[]) => any;
        "onUpdate:modelValue"?: (...args: any[]) => any;
    }>, {
        padding: string;
        size: string | number;
        modelValue: boolean;
        disabled: boolean;
        focusBk: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    ArrowRight: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Close: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    element: {
        type: any;
        required: false;
        default: () => HandlePanel;
    };
    position: {
        type: any;
        required: true;
        default: () => HandlePanelPosition;
    };
    modelValue: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
}>, {
    element: any;
    modelValue: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
