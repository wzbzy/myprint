declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    modelValue: {
        type: any;
        required: true;
    };
    dataList: {
        type: ArrayConstructor;
        required: true;
    };
}>, {
    emit: (event: "update:modelValue", ...args: any[]) => void;
    onClick: (item: any) => void;
    MyGroup: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    MyButton: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        size: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        isActive: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
    }>, {
        emit: (event: "click", ...args: any[]) => void;
        props: any;
        click: () => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        size: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        isActive: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
    }>> & Readonly<{
        onClick?: (...args: any[]) => any;
    }>, {
        size: string;
        disabled: boolean;
        isActive: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    modelValue: {
        type: any;
        required: true;
    };
    dataList: {
        type: ArrayConstructor;
        required: true;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
}>, {
    disabled: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
