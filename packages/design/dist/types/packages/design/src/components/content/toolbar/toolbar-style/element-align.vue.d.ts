import { DownList } from '@myprint/design/types/entity';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    showSelectedStatus: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    modelValue: {
        type: any;
        required: false;
        default: any;
    };
    elementAlignList: {
        type: ArrayConstructor;
        required: true;
        default: () => DownList[][];
    };
}>, {
    emit: (event: "change" | "click" | "update:modelValue", ...args: any[]) => void;
    props: any;
    dataList: import("vue").ComputedRef<any>;
    click: (elementAlign: DownList) => void;
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
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "click" | "update:modelValue")[], "change" | "click" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    showSelectedStatus: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    modelValue: {
        type: any;
        required: false;
        default: any;
    };
    elementAlignList: {
        type: ArrayConstructor;
        required: true;
        default: () => DownList[][];
    };
}>> & Readonly<{
    onClick?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
}>, {
    showSelectedStatus: boolean;
    modelValue: any;
    elementAlignList: unknown[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
