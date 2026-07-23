declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    list: {
        type: ArrayConstructor;
        required: false;
        default: () => any[];
    };
    nullActive: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>, {
    emit: (event: "change", ...args: any[]) => void;
    parentChange: (item: any) => void;
    setColumnList: (item: any, val: number) => void;
    childChange: (item: any) => void;
    MySwitch: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        enable: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        modelValue: {
            type: NumberConstructor;
            required: false;
            default: any;
        };
        nullActive: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        activeText: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        inactiveText: {
            type: StringConstructor;
            required: false;
            default: string;
        };
    }>, {
        emit: (event: "change" | "click" | "update:modelValue", ...args: any[]) => void;
        props: any;
        modelValueComputed: import("vue").ComputedRef<any>;
        statusText: import("vue").ComputedRef<any>;
        click: () => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "click" | "update:modelValue")[], "change" | "click" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        enable: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        modelValue: {
            type: NumberConstructor;
            required: false;
            default: any;
        };
        nullActive: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        activeText: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        inactiveText: {
            type: StringConstructor;
            required: false;
            default: string;
        };
    }>> & Readonly<{
        onClick?: (...args: any[]) => any;
        "onUpdate:modelValue"?: (...args: any[]) => any;
        onChange?: (...args: any[]) => any;
    }>, {
        enable: boolean;
        modelValue: number;
        nullActive: boolean;
        activeText: string;
        inactiveText: string;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    list: {
        type: ArrayConstructor;
        required: false;
        default: () => any[];
    };
    nullActive: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>> & Readonly<{
    onChange?: (...args: any[]) => any;
}>, {
    list: unknown[];
    nullActive: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
