declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    props: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    propsValue: {
        type: StringConstructor;
        required: false;
        default: any;
    };
    enableProps: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        skipCheck: boolean;
        default: any;
    };
    marginTop: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}>, {
    appStore: import("pinia").Store<"myPrintApp", {
        locale: string;
        displayModel: import("../../../index").DisplayModel;
        client: {
            connect: boolean;
        };
        panelPosition: {
            x: number;
            y: number;
            scrollX: number;
            scrollY: number;
        };
        currentPanel: import("../../../index").Panel;
        previewData: any[];
        provider: import("../../../index").Provider;
        lastPageUnit: import("../../../index").PageUnit;
        currentElement: import("../../../index").MyElement[];
        auxiliaryLineTmp: import("../../../index").MyAuxiliaryLine;
        dataRotation: number | "rotate" | "none" | "ns-resize" | "move" | "col-resize";
    }, {}, {
        SET_LOCALE<T extends "zhCn" | "enUs">(locale: T): void;
        SET_CLIENT_CONNECT(status: boolean): void;
    }>;
    emit: (event: "update:modelValue", ...args: any[]) => void;
    props: any;
    value: import("vue").ComputedRef<any>;
    disabled: import("vue").ComputedRef<any>;
    change: (val: boolean) => void;
    TipIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        tips: {
            type: StringConstructor;
            required: false;
            default: string;
        };
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
        class: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        size: {
            type: NumberConstructor;
            required: false;
            default: any;
        };
        padding: {
            type: StringConstructor;
            required: false;
            default: any;
        };
        placement: {
            type: StringConstructor;
            required: false;
            default: string;
        };
    }>, {
        emit: (event: "click" | "update:modelValue", ...args: any[]) => void;
        props: any;
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
        MyTooltip: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            disabled: {
                type: BooleanConstructor;
                required: false;
            };
            content: {
                type: StringConstructor;
                required: false;
                default: string;
            };
        }>, {
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
            };
            content: {
                type: StringConstructor;
                required: false;
                default: string;
            };
        }>> & Readonly<{}>, {
            content: string;
            disabled: boolean;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "update:modelValue")[], "click" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        tips: {
            type: StringConstructor;
            required: false;
            default: string;
        };
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
        class: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        size: {
            type: NumberConstructor;
            required: false;
            default: any;
        };
        padding: {
            type: StringConstructor;
            required: false;
            default: any;
        };
        placement: {
            type: StringConstructor;
            required: false;
            default: string;
        };
    }>> & Readonly<{
        onClick?: (...args: any[]) => any;
        "onUpdate:modelValue"?: (...args: any[]) => any;
    }>, {
        padding: string;
        size: number;
        modelValue: boolean;
        disabled: boolean;
        class: string;
        placement: string;
        tips: string;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    props: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    propsValue: {
        type: StringConstructor;
        required: false;
        default: any;
    };
    enableProps: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        skipCheck: boolean;
        default: any;
    };
    marginTop: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
}>, {
    props: string;
    disabled: boolean;
    marginTop: string;
    propsValue: string;
    enableProps: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
