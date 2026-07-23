import { changeWrapper } from '..\..\../utils/historyUtil';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<string | number>;
        default: any;
    };
    dataList: {
        type: import("vue").PropType<any[]>;
        default: () => any[];
    };
    historyLabel: StringConstructor;
}>, {
    emit: (event: "update:modelValue", ...args: any[]) => void;
    readonly changeWrapper: typeof changeWrapper;
    MySelect: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        disabled: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        showSelectedStatus: {
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
        height: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        size: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        placeholder: {
            type: StringConstructor;
            required: false;
            default: string;
        };
    }>, {
        emit: (event: "change" | "update:modelValue", ...args: any[]) => void;
        props: any;
        data: {
            label: string;
        };
        popoverRef: import("vue").Ref<import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
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
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "show"[], import("vue").PublicProps, {
            disabled: boolean;
            placement: any;
            trigger: string;
        }, true, {}, {}, import("@vue/runtime-core").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
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
        }, {}, {}, {}, {
            disabled: boolean;
            placement: any;
            trigger: string;
        }>, import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
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
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "show"[], import("vue").PublicProps, {
            disabled: boolean;
            placement: any;
            trigger: string;
        }, true, {}, {}, import("@vue/runtime-core").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
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
        }, {}, {}, {}, {
            disabled: boolean;
            placement: any;
            trigger: string;
        }>>;
        change: (val: any) => void;
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
                default: () => import("../../../index").DownList[][];
            };
        }>, {
            emit: (event: "change" | "click" | "update:modelValue", ...args: any[]) => void;
            props: any;
            dataList: import("vue").ComputedRef<any>;
            click: (elementAlign: import("../../../index").DownList) => void;
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
                default: () => import("../../../index").DownList[][];
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
        MyScrollbar: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            tag: {
                type: StringConstructor;
                required: false;
                default: string;
            };
            height: {
                type: StringConstructor;
                required: false;
                default: string;
            };
            options: {
                type: any;
                required: false;
                default: () => {};
            };
            hoverBlod: {
                type: BooleanConstructor;
                required: false;
                default: boolean;
            };
            disabledScrollBar: {
                type: BooleanConstructor;
                required: false;
                default: boolean;
            };
        }>, {
            props: any;
            emit: (event: "scroll" | "ps-scroll-y" | "ps-scroll-x" | "ps-scroll-up" | "ps-scroll-down" | "ps-scroll-left" | "ps-scroll-right" | "ps-y-reach-start" | "ps-y-reach-end" | "ps-x-reach-start" | "ps-x-reach-end", ...args: any[]) => void;
            scrollbar: import("vue").Ref<HTMLElement, HTMLElement>;
            ps: import("vue").Ref<any, any>;
            resizeObserver: ResizeObserver;
            createInstance: () => void;
            destroyInstance: () => void;
            eventListeners: Record<import("../scrollbar/my-scrollbar.vue").PerfectScrollbarEmitsKeys, (event: Event) => void>;
            createEventListener: (eventName: import("../scrollbar/my-scrollbar.vue").PerfectScrollbarEmitsKeys) => (event: Event) => void;
            toggleListeners: (addListeners?: boolean) => void;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scroll" | "ps-scroll-y" | "ps-scroll-x" | "ps-scroll-up" | "ps-scroll-down" | "ps-scroll-left" | "ps-scroll-right" | "ps-y-reach-start" | "ps-y-reach-end" | "ps-x-reach-start" | "ps-x-reach-end")[], "scroll" | "ps-scroll-y" | "ps-scroll-x" | "ps-scroll-up" | "ps-scroll-down" | "ps-scroll-left" | "ps-scroll-right" | "ps-y-reach-start" | "ps-y-reach-end" | "ps-x-reach-start" | "ps-x-reach-end", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            tag: {
                type: StringConstructor;
                required: false;
                default: string;
            };
            height: {
                type: StringConstructor;
                required: false;
                default: string;
            };
            options: {
                type: any;
                required: false;
                default: () => {};
            };
            hoverBlod: {
                type: BooleanConstructor;
                required: false;
                default: boolean;
            };
            disabledScrollBar: {
                type: BooleanConstructor;
                required: false;
                default: boolean;
            };
        }>> & Readonly<{
            onScroll?: (...args: any[]) => any;
            "onPs-scroll-y"?: (...args: any[]) => any;
            "onPs-scroll-x"?: (...args: any[]) => any;
            "onPs-scroll-up"?: (...args: any[]) => any;
            "onPs-scroll-down"?: (...args: any[]) => any;
            "onPs-scroll-left"?: (...args: any[]) => any;
            "onPs-scroll-right"?: (...args: any[]) => any;
            "onPs-y-reach-start"?: (...args: any[]) => any;
            "onPs-y-reach-end"?: (...args: any[]) => any;
            "onPs-x-reach-start"?: (...args: any[]) => any;
            "onPs-x-reach-end"?: (...args: any[]) => any;
        }>, {
            height: string;
            tag: string;
            options: any;
            hoverBlod: boolean;
            disabledScrollBar: boolean;
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
        readonly isNull: (value: any) => value is null;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        disabled: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        showSelectedStatus: {
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
        height: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        size: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        placeholder: {
            type: StringConstructor;
            required: false;
            default: string;
        };
    }>> & Readonly<{
        "onUpdate:modelValue"?: (...args: any[]) => any;
        onChange?: (...args: any[]) => any;
    }>, {
        height: string;
        size: string;
        showSelectedStatus: boolean;
        disabled: boolean;
        placeholder: string;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<string | number>;
        default: any;
    };
    dataList: {
        type: import("vue").PropType<any[]>;
        default: () => any[];
    };
    historyLabel: StringConstructor;
}>> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
}>, {
    modelValue: string | number;
    dataList: any[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
