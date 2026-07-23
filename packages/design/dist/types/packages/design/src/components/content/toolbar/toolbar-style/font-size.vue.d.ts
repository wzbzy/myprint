import { i18n } from '@myprint/design/locales';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>, {
    props: any;
    fontSizeRef: import("vue").Ref<HTMLDivElement, HTMLDivElement>;
    fontSizeWrapperRef: import("vue").Ref<HTMLDivElement, HTMLDivElement>;
    data: {
        fontSizeInputShow: boolean;
        fontSize: string;
    };
    changeFontSize: (val: any) => void;
    fontSizeAdd: () => void;
    fontSizeSub: () => void;
    fontSizeComputed: import("vue").ComputedRef<any>;
    changeFontSizeInputShow: (flag: boolean) => void;
    readonly fontSizeList: import("../../../../index").DownList[][];
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
    ElementAlign: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
            default: () => import("../../../../index").DownList[][];
        };
    }>, {
        emit: (event: "change" | "click" | "update:modelValue", ...args: any[]) => void;
        props: any;
        dataList: import("vue").ComputedRef<any>;
        click: (elementAlign: import("../../../../index").DownList) => void;
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
            default: () => import("../../../../index").DownList[][];
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
    ToolIconPopover: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        disabled: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        showArrow: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
    }>, {
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
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        disabled: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        showArrow: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        disabled: boolean;
        showArrow: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
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
    readonly i18n: typeof i18n;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>> & Readonly<{}>, {
    disabled: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
