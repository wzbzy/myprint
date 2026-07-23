declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    fullscreen: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    showHeader: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    class: {
        type: any;
        required: false;
        default: string;
    };
    title: {
        type: StringConstructor;
        required: false;
    };
    width: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}>, {
    emit: (event: "close" | "update:modelValue", ...args: any[]) => void;
    props: any;
    data: {
        rendered: boolean;
    };
    dialogRef: import("vue").Ref<any, any>;
    style: import("vue").ComputedRef<{
        width: any;
    }>;
    onClose: () => void;
    CloseBold: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
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
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "update:modelValue")[], "close" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    fullscreen: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    showHeader: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    class: {
        type: any;
        required: false;
        default: string;
    };
    title: {
        type: StringConstructor;
        required: false;
    };
    width: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onClose?: (...args: any[]) => any;
}>, {
    width: string;
    modelValue: boolean;
    fullscreen: boolean;
    showHeader: boolean;
    class: any;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
