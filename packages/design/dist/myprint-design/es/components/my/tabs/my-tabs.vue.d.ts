import { DownList } from '..\..\../types/entity';
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
    itemList: {
        type: ArrayConstructor;
        required: true;
        default: () => DownList[];
    };
}>, {
    emit: (event: "click" | "update:modelValue", ...args: any[]) => void;
    click: (item: DownList) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "update:modelValue")[], "click" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
    itemList: {
        type: ArrayConstructor;
        required: true;
        default: () => DownList[];
    };
}>> & Readonly<{
    onClick?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
}>, {
    showSelectedStatus: boolean;
    modelValue: any;
    itemList: unknown[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
