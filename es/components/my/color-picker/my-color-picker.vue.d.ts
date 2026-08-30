export interface Props {
    disabled?: boolean;
    modelValue?: string;
}
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    modelValue: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}>, {
    props: any;
    emit: (event: "update:modelValue", ...args: any[]) => void;
    changeFontColor: (val: any) => void;
    MyPopover: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        disabled: {
            type: BooleanConstructor;
            required: false;
        };
        placement: {
            type: any;
            required: false;
            default: string;
        };
        trigger: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        class: {
            type: StringConstructor;
            required: false;
        };
    }>, {
        emit: (event: "show", ...args: any[]) => void;
        props: any;
        data: {
            visible: boolean;
        };
        referenceRef: import("vue").Ref<HTMLElement, HTMLElement>;
        contentRef: import("vue").Ref<HTMLElement, HTMLElement>;
        popperInstance: any;
        styles: import("vue").Ref<{}, {}>;
        deriveState: (state: import("@popperjs/core/index").State) => {
            styles: import("lodash").Dictionary<Partial<CSSStyleDeclaration>>;
            attributes: import("lodash").Dictionary<{
                [key: string]: string | boolean;
            }>;
        };
        stateUpdater: import("@popperjs/core/index").Modifier<"updateState", any>;
        createPopperInstance: () => void;
        destroyPopperInstance: () => void;
        stopHandle: () => void;
        mouseenter: () => void;
        mouseleave: () => void;
        togglePopperShow: () => void;
        onClose: () => void;
        close: () => void;
        show: () => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "show"[], "show", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        disabled: {
            type: BooleanConstructor;
            required: false;
        };
        placement: {
            type: any;
            required: false;
            default: string;
        };
        trigger: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        class: {
            type: StringConstructor;
            required: false;
        };
    }>> & Readonly<{
        onShow?: (...args: any[]) => any;
    }>, {
        disabled: boolean;
        placement: any;
        trigger: string;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
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
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    modelValue: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
}>, {
    modelValue: string;
    disabled: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
