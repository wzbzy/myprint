declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: any;
        required: false;
        default: any;
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
    step: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    formatter: {
        type: FunctionConstructor;
        required: false;
        default: (value: string) => string;
    };
    precision: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>, {
    emit: (event: "change" | "update:modelValue", ...args: any[]) => void;
    props: any;
    innerValue: import("vue").Ref<any, any>;
    precision: import("vue").ComputedRef<number>;
    emitValue: (value: number | null) => void;
    onInput: (value: any) => void;
    onChange: (value: any) => void;
    onUp: () => void;
    onDown: () => void;
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
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: any;
        required: false;
        default: any;
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
    step: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    formatter: {
        type: FunctionConstructor;
        required: false;
        default: (value: string) => string;
    };
    precision: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
}>, {
    formatter: Function;
    max: number;
    modelValue: any;
    disabled: boolean;
    min: number;
    step: number;
    precision: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
