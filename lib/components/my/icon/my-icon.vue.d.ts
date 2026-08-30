declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
export default _default;
