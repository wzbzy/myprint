import type { Ref } from 'vue-demi';
export declare type PerfectScrollbarEmitsKeys = 'scroll' | 'ps-scroll-y' | 'ps-scroll-x' | 'ps-scroll-up' | 'ps-scroll-down' | 'ps-scroll-left' | 'ps-scroll-right' | 'ps-y-reach-start' | 'ps-y-reach-end' | 'ps-x-reach-start' | 'ps-x-reach-end';
export declare type PerfectScrollbarEmits = {
    [EventName in PerfectScrollbarEmitsKeys]: [value: Event];
};
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
    scrollbar: Ref<HTMLElement, HTMLElement>;
    ps: Ref<any, any>;
    resizeObserver: ResizeObserver;
    createInstance: () => void;
    destroyInstance: () => void;
    eventListeners: Record<PerfectScrollbarEmitsKeys, (event: Event) => void>;
    createEventListener: (eventName: PerfectScrollbarEmitsKeys) => (event: Event) => void;
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
export default _default;
