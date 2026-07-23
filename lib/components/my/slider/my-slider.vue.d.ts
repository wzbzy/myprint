declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    width: {
        type: (NumberConstructor | StringConstructor)[];
        required: false;
        default: string;
    };
    min: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    max: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    step: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    formatTooltip: {
        type: FunctionConstructor;
        required: false;
        default: (value: number) => number;
    };
    tooltip: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    modelValue: {
        type: (NumberConstructor | ArrayConstructor)[];
        required: false;
        default: number;
    };
}>, {
    props: any;
    transition: import("vue").Ref<boolean, boolean>;
    timer: import("vue").Ref<any, any>;
    right: import("vue").Ref<number, number>;
    slider: import("vue").Ref<any, any>;
    sliderWidth: import("vue").Ref<any, any>;
    rightHandle: import("vue").Ref<any, any>;
    rightTooltip: import("vue").Ref<any, any>;
    pixelStep: import("vue").ComputedRef<number>;
    precision: import("vue").ComputedRef<any>;
    totalWidth: import("vue").ComputedRef<any>;
    sliderValue: import("vue").ComputedRef<number>;
    rightValue: import("vue").ComputedRef<any>;
    emits: (event: "change" | "update:modelValue", ...args: any[]) => void;
    checkValue: (value: number) => number;
    getSliderWidth: () => void;
    getPosition: () => void;
    fixedDigit: (num: number, precision: number) => number;
    handlerBlur: (tooltip: HTMLElement) => void;
    handlerFocus: (handler: HTMLElement, tooltip: HTMLElement) => void;
    onClickPoint: (e: any) => void;
    onRightMouseDown: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    width: {
        type: (NumberConstructor | StringConstructor)[];
        required: false;
        default: string;
    };
    min: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    max: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    step: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    formatTooltip: {
        type: FunctionConstructor;
        required: false;
        default: (value: number) => number;
    };
    tooltip: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    modelValue: {
        type: (NumberConstructor | ArrayConstructor)[];
        required: false;
        default: number;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
}>, {
    width: string | number;
    max: number;
    modelValue: number | unknown[];
    disabled: boolean;
    min: number;
    step: number;
    formatTooltip: Function;
    tooltip: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
