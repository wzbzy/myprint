import { changeWrapper } from '@myprint/design/utils/historyUtil';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<string | number>;
        default: any;
    };
    historyLabel: StringConstructor;
}>, {
    emit: (event: "update:modelValue", ...args: any[]) => void;
    readonly changeWrapper: typeof changeWrapper;
    MyInput: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        modelValue: {
            type: any;
            required: true;
        };
        placeholder: {
            type: StringConstructor;
            required: false;
        };
        type: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
    }>, {
        emit: (event: "input" | "change" | "update:modelValue", ...args: any[]) => void;
        inputRef: import("vue").Ref<HTMLInputElement, HTMLInputElement>;
        textareaRef: import("vue").Ref<HTMLInputElement, HTMLInputElement>;
        props: any;
        myInputRef: import("vue").ComputedRef<HTMLInputElement>;
        nativeInputValue: import("vue").ComputedRef<string>;
        setNativeInputValue: () => void;
        data: {
            focusIs: boolean;
        };
        inputBlur: () => void;
        inputFocus: () => void;
        onInput: (e: InputEvent) => Promise<void>;
        onChange: (e: InputEvent) => void;
        clickWrapper: () => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "change" | "update:modelValue")[], "input" | "change" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: any;
            required: true;
        };
        placeholder: {
            type: StringConstructor;
            required: false;
        };
        type: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
    }>> & Readonly<{
        "onUpdate:modelValue"?: (...args: any[]) => any;
        onInput?: (...args: any[]) => any;
        onChange?: (...args: any[]) => any;
    }>, {
        type: string;
        disabled: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<string | number>;
        default: any;
    };
    historyLabel: StringConstructor;
}>> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
}>, {
    modelValue: string | number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
