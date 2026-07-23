declare const _default: import("vue").DefineComponent<{}, {
    appStore: import("pinia").Store<"myPrintApp", {
        locale: string;
        displayModel: import("@myprint/design/types/entity").DisplayModel;
        client: {
            connect: boolean;
        };
        panelPosition: {
            x: number;
            y: number;
            scrollX: number;
            scrollY: number;
        };
        currentPanel: import("@myprint/design/types/entity").Panel;
        previewData: any[];
        provider: import("@myprint/design/types/entity").Provider;
        lastPageUnit: import("@myprint/design/types/entity").PageUnit;
        currentElement: import("@myprint/design/types/entity").MyElement[];
        auxiliaryLineTmp: import("@myprint/design/types/entity").MyAuxiliaryLine;
        dataRotation: number | "rotate" | "none" | "ns-resize" | "move" | "col-resize";
    }, {}, {
        SET_LOCALE<T extends "zhCn" | "enUs">(locale: T): void;
        SET_CLIENT_CONNECT(status: boolean): void;
    }>;
    configStore: import("pinia").Store<"myPrintConfig", {
        init: boolean;
        printer: any;
        defaultPrinter: any;
        clientProtocol: string;
        clientUrl: string;
        autoConnect: number;
        settingPanel: any;
        settingDesign: {
            autoAlign: number;
            showElementDesignBorderIs: number;
        };
    }, {}, {
        initConfig(): void;
        updateConfig(key: string, value: string): void;
        postConfig(): void;
    }>;
    title: import("vue").ComputedRef<string>;
    readonly handlePanelElementList: {
        setting: {
            icon: string;
            label: string;
            visible: boolean;
        };
        operation: {
            icon: string;
            label: string;
            visible: boolean;
        };
        history: {
            icon: string;
            label: string;
            visible: boolean;
        };
    };
    MyCollapse: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        element: {
            type: any;
            required: false;
            default: () => import("@myprint/design/types/entity").HandlePanel;
        };
        position: {
            type: any;
            required: true;
            default: () => import("@myprint/design/types/entity").HandlePanelPosition;
        };
        modelValue: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
    }>, {
        props: any;
        appStore: import("pinia").Store<"myPrintApp", {
            locale: string;
            displayModel: import("@myprint/design/types/entity").DisplayModel;
            client: {
                connect: boolean;
            };
            panelPosition: {
                x: number;
                y: number;
                scrollX: number;
                scrollY: number;
            };
            currentPanel: import("@myprint/design/types/entity").Panel;
            previewData: any[];
            provider: import("@myprint/design/types/entity").Provider;
            lastPageUnit: import("@myprint/design/types/entity").PageUnit;
            currentElement: import("@myprint/design/types/entity").MyElement[];
            auxiliaryLineTmp: import("@myprint/design/types/entity").MyAuxiliaryLine;
            dataRotation: number | "rotate" | "none" | "ns-resize" | "move" | "col-resize";
        }, {}, {
            SET_LOCALE<T extends "zhCn" | "enUs">(locale: T): void;
            SET_CLIENT_CONNECT(status: boolean): void;
        }>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        headRef: import("vue").Ref<HTMLDivElement, HTMLDivElement>;
        data: {
            x: number;
            y: number;
            right: number;
            bodyResizeHeight: number;
            translateX: number;
            translateY: number;
            show: boolean;
            resizeIs: boolean;
            zIndex: number;
            loaded: boolean;
        };
        clickHead: () => void;
        clickHeadClose: () => void;
        style: import("vue").ComputedRef<import("vue").CSSProperties>;
        headMouseDown: (e: MouseEvent) => boolean;
        bodyMouseDown: () => void;
        resize: (e: MouseEvent) => boolean;
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
            eventListeners: Record<import("../../../my/scrollbar/my-scrollbar.vue").PerfectScrollbarEmitsKeys, (event: Event) => void>;
            createEventListener: (eventName: import("../../../my/scrollbar/my-scrollbar.vue").PerfectScrollbarEmitsKeys) => (event: Event) => void;
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
        ArrowRight: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        Close: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        element: {
            type: any;
            required: false;
            default: () => import("@myprint/design/types/entity").HandlePanel;
        };
        position: {
            type: any;
            required: true;
            default: () => import("@myprint/design/types/entity").HandlePanelPosition;
        };
        modelValue: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
    }>> & Readonly<{
        "onUpdate:modelValue"?: (...args: any[]) => any;
    }>, {
        element: any;
        modelValue: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    MyElementSetting: import("vue").DefineComponent<{}, {
        appStore: import("pinia").Store<"myPrintApp", {
            locale: string;
            displayModel: import("@myprint/design/types/entity").DisplayModel;
            client: {
                connect: boolean;
            };
            panelPosition: {
                x: number;
                y: number;
                scrollX: number;
                scrollY: number;
            };
            currentPanel: import("@myprint/design/types/entity").Panel;
            previewData: any[];
            provider: import("@myprint/design/types/entity").Provider;
            lastPageUnit: import("@myprint/design/types/entity").PageUnit;
            currentElement: import("@myprint/design/types/entity").MyElement[];
            auxiliaryLineTmp: import("@myprint/design/types/entity").MyAuxiliaryLine;
            dataRotation: number | "rotate" | "none" | "ns-resize" | "move" | "col-resize";
        }, {}, {
            SET_LOCALE<T extends "zhCn" | "enUs">(locale: T): void;
            SET_CLIENT_CONNECT(status: boolean): void;
        }>;
        currentBarCodeEg: import("vue").ComputedRef<string>;
        element: import("vue").ComputedRef<import("@myprint/design/types/entity").MyElement>;
        noWorkInTableIs: import("vue").ComputedRef<boolean>;
        includeProps: (props: string, attr: import("../../../../constants/common").elementSettingType) => boolean;
        changeTableBodyHeight: (val: number) => void;
        changeOptionFixed: () => void;
        changeLock: () => void;
        rotatedPoint: (_rotate: any) => void;
        changeLocationX: (_val: any) => void;
        changeLocationY: (_val: any) => void;
        changeElementWidth: (_val: any) => void;
        changeElementKeepRatio: () => void;
        clearDrawPanel: () => void;
        changeBarCodeType: (val: any) => string;
        readonly barcodeTypes: {
            label: string;
            value: string;
            eg: string;
        }[];
        readonly displayStrategyList: any[];
        readonly dottedStyleList: {
            label: string;
            value: string;
        }[];
        readonly getElementSetting: typeof import("../../../../constants/common").getElementSetting;
        readonly qrCodeErrorCorrectionLevel: {
            label: string;
            value: string;
        }[];
        readonly tableBodyHeightTypeList: import("@myprint/design/types/entity").DownList[];
        readonly textContentTypes: {
            label: string;
            value: string;
        }[];
        readonly MyHistoryInput: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            modelValue: {
                type: import("vue").PropType<string | number>;
                default: any;
            };
            historyLabel: StringConstructor;
        }>, {
            emit: (event: "update:modelValue", ...args: any[]) => void;
            readonly changeWrapper: typeof import("../../../../utils/historyUtil").changeWrapper;
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
        readonly MyHistoryInputNumber: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            modelValue: {
                type: any;
                required: false;
                default: any;
            };
            historyLabel: {
                type: StringConstructor;
                required: true;
                default: any;
            };
        }>, {
            emit: (event: "change" | "update:modelValue", ...args: any[]) => void;
            numRef: import("vue").Ref<any, any>;
            props: any;
            change: (val: any) => void;
            MyInputNumber: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
                emitValue: (value: number) => void;
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
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: any;
                required: false;
                default: any;
            };
            historyLabel: {
                type: StringConstructor;
                required: true;
                default: any;
            };
        }>> & Readonly<{
            "onUpdate:modelValue"?: (...args: any[]) => any;
            onChange?: (...args: any[]) => any;
        }>, {
            modelValue: any;
            historyLabel: string;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        readonly MyHistorySelect: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
            readonly changeWrapper: typeof import("../../../../utils/historyUtil").changeWrapper;
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
                        default: () => import("@myprint/design/types/entity").DownList[][];
                    };
                }>, {
                    emit: (event: "change" | "click" | "update:modelValue", ...args: any[]) => void;
                    props: any;
                    dataList: import("vue").ComputedRef<any>;
                    click: (elementAlign: import("@myprint/design/types/entity").DownList) => void;
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
                        default: () => import("@myprint/design/types/entity").DownList[][];
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
                    eventListeners: Record<import("../../../my/scrollbar/my-scrollbar.vue").PerfectScrollbarEmitsKeys, (event: Event) => void>;
                    createEventListener: (eventName: import("../../../my/scrollbar/my-scrollbar.vue").PerfectScrollbarEmitsKeys) => (event: Event) => void;
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
        readonly MyUnit: import("vue").DefineComponent<{}, {
            useAppStore: import("pinia").Store<"myPrintApp", {
                locale: string;
                displayModel: import("@myprint/design/types/entity").DisplayModel;
                client: {
                    connect: boolean;
                };
                panelPosition: {
                    x: number;
                    y: number;
                    scrollX: number;
                    scrollY: number;
                };
                currentPanel: import("@myprint/design/types/entity").Panel;
                previewData: any[];
                provider: import("@myprint/design/types/entity").Provider;
                lastPageUnit: import("@myprint/design/types/entity").PageUnit;
                currentElement: import("@myprint/design/types/entity").MyElement[];
                auxiliaryLineTmp: import("@myprint/design/types/entity").MyAuxiliaryLine;
                dataRotation: number | "rotate" | "none" | "ns-resize" | "move" | "col-resize";
            }, {}, {
                SET_LOCALE<T extends "zhCn" | "enUs">(locale: T): void;
                SET_CLIENT_CONNECT(status: boolean): void;
            }>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        readonly multipleElementGetValue: typeof import("../../../../utils/elementUtil").multipleElementGetValue;
        readonly multipleElementSetValue: typeof import("../../../../utils/elementUtil").multipleElementSetValue;
        MyDividerPanel: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            class: {
                type: StringConstructor;
                required: false;
                default: any;
            };
        }>, {
            props: any;
            data: {
                basicDividerShowIs: boolean;
            };
            basicDividerRef: import("vue").Ref<HTMLElement, HTMLElement>;
            update: () => void;
            MyDivider: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            class: {
                type: StringConstructor;
                required: false;
                default: any;
            };
        }>> & Readonly<{}>, {
            class: string;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        MyFormItem: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            label: {
                type: StringConstructor;
                required: false;
            };
            labelWidth: {
                type: StringConstructor;
                required: false;
                default: string;
            };
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            label: {
                type: StringConstructor;
                required: false;
            };
            labelWidth: {
                type: StringConstructor;
                required: false;
                default: string;
            };
        }>> & Readonly<{}>, {
            labelWidth: string;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        MyForm: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        readonly i18n: typeof import("../../../../locales/index").i18n;
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
        MySlider: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            width: {
                type: (NumberConstructor | StringConstructor)[];
                required: false;
                default: string;
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
            disabled: {
                type: BooleanConstructor;
                required: false;
                default: boolean;
            };
            step: {
                type: NumberConstructor;
                required: false;
                default: number;
            };
            formatTooltip: {
                type: FunctionConstructor;
                required: false;
                default: (value: number) => number;
            };
            tooltip: {
                type: BooleanConstructor;
                required: false;
                default: boolean;
            };
            modelValue: {
                type: (NumberConstructor | ArrayConstructor)[];
                required: false;
                default: number;
            };
        }>, {
            props: any;
            transition: import("vue").Ref<boolean, boolean>;
            timer: import("vue").Ref<any, any>;
            right: import("vue").Ref<number, number>;
            slider: import("vue").Ref<any, any>;
            sliderWidth: import("vue").Ref<any, any>;
            rightHandle: import("vue").Ref<any, any>;
            rightTooltip: import("vue").Ref<any, any>;
            pixelStep: import("vue").ComputedRef<number>;
            precision: import("vue").ComputedRef<any>;
            totalWidth: import("vue").ComputedRef<any>;
            sliderValue: import("vue").ComputedRef<number>;
            rightValue: import("vue").ComputedRef<any>;
            emits: (event: "change" | "update:modelValue", ...args: any[]) => void;
            checkValue: (value: number) => number;
            getSliderWidth: () => void;
            getPosition: () => void;
            fixedDigit: (num: number, precision: number) => number;
            handlerBlur: (tooltip: HTMLElement) => void;
            handlerFocus: (handler: HTMLElement, tooltip: HTMLElement) => void;
            onClickPoint: (e: any) => void;
            onRightMouseDown: () => void;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            width: {
                type: (NumberConstructor | StringConstructor)[];
                required: false;
                default: string;
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
            disabled: {
                type: BooleanConstructor;
                required: false;
                default: boolean;
            };
            step: {
                type: NumberConstructor;
                required: false;
                default: number;
            };
            formatTooltip: {
                type: FunctionConstructor;
                required: false;
                default: (value: number) => number;
            };
            tooltip: {
                type: BooleanConstructor;
                required: false;
                default: boolean;
            };
            modelValue: {
                type: (NumberConstructor | ArrayConstructor)[];
                required: false;
                default: number;
            };
        }>> & Readonly<{
            "onUpdate:modelValue"?: (...args: any[]) => any;
            onChange?: (...args: any[]) => any;
        }>, {
            width: string | number;
            max: number;
            modelValue: number | unknown[];
            disabled: boolean;
            min: number;
            step: number;
            formatTooltip: Function;
            tooltip: boolean;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        MyGroup: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
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
        QuestionFilled: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
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
        MyRadio: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    MyPanelSetting: import("vue").DefineComponent<{}, {
        panel: import("@myprint/design/types/entity").Panel;
        selectPageSize: (val: any) => void;
        changePanelWidth: (_val: number) => void;
        changePanelHeight: (_val: number) => void;
        selectPageUnit: () => void;
        readonly i18n: typeof import("../../../../locales/index").i18n;
        readonly fontSizeUnitList: {
            label: string;
            value: string;
        }[][];
        readonly pageSizeList: {
            label: string;
            value: string;
            width: number;
            height: number;
        }[];
        readonly pageUnitList: {
            label: string;
            value: string;
        }[][];
        readonly MyHistoryInput: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            modelValue: {
                type: import("vue").PropType<string | number>;
                default: any;
            };
            historyLabel: StringConstructor;
        }>, {
            emit: (event: "update:modelValue", ...args: any[]) => void;
            readonly changeWrapper: typeof import("../../../../utils/historyUtil").changeWrapper;
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
        readonly MyHistoryInputNumber: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            modelValue: {
                type: any;
                required: false;
                default: any;
            };
            historyLabel: {
                type: StringConstructor;
                required: true;
                default: any;
            };
        }>, {
            emit: (event: "change" | "update:modelValue", ...args: any[]) => void;
            numRef: import("vue").Ref<any, any>;
            props: any;
            change: (val: any) => void;
            MyInputNumber: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
                emitValue: (value: number) => void;
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
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: any;
                required: false;
                default: any;
            };
            historyLabel: {
                type: StringConstructor;
                required: true;
                default: any;
            };
        }>> & Readonly<{
            "onUpdate:modelValue"?: (...args: any[]) => any;
            onChange?: (...args: any[]) => any;
        }>, {
            modelValue: any;
            historyLabel: string;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        readonly MyHistorySelect: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
            readonly changeWrapper: typeof import("../../../../utils/historyUtil").changeWrapper;
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
                        default: () => import("@myprint/design/types/entity").DownList[][];
                    };
                }>, {
                    emit: (event: "change" | "click" | "update:modelValue", ...args: any[]) => void;
                    props: any;
                    dataList: import("vue").ComputedRef<any>;
                    click: (elementAlign: import("@myprint/design/types/entity").DownList) => void;
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
                        default: () => import("@myprint/design/types/entity").DownList[][];
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
                    eventListeners: Record<import("../../../my/scrollbar/my-scrollbar.vue").PerfectScrollbarEmitsKeys, (event: Event) => void>;
                    createEventListener: (eventName: import("../../../my/scrollbar/my-scrollbar.vue").PerfectScrollbarEmitsKeys) => (event: Event) => void;
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
        readonly MyUnit: import("vue").DefineComponent<{}, {
            useAppStore: import("pinia").Store<"myPrintApp", {
                locale: string;
                displayModel: import("@myprint/design/types/entity").DisplayModel;
                client: {
                    connect: boolean;
                };
                panelPosition: {
                    x: number;
                    y: number;
                    scrollX: number;
                    scrollY: number;
                };
                currentPanel: import("@myprint/design/types/entity").Panel;
                previewData: any[];
                provider: import("@myprint/design/types/entity").Provider;
                lastPageUnit: import("@myprint/design/types/entity").PageUnit;
                currentElement: import("@myprint/design/types/entity").MyElement[];
                auxiliaryLineTmp: import("@myprint/design/types/entity").MyAuxiliaryLine;
                dataRotation: number | "rotate" | "none" | "ns-resize" | "move" | "col-resize";
            }, {}, {
                SET_LOCALE<T extends "zhCn" | "enUs">(locale: T): void;
                SET_CLIENT_CONNECT(status: boolean): void;
            }>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        MyGroup: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
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
        MyFormItem: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            label: {
                type: StringConstructor;
                required: false;
            };
            labelWidth: {
                type: StringConstructor;
                required: false;
                default: string;
            };
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            label: {
                type: StringConstructor;
                required: false;
            };
            labelWidth: {
                type: StringConstructor;
                required: false;
                default: string;
            };
        }>> & Readonly<{}>, {
            labelWidth: string;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        MyForm: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        MyDividerPanel: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            class: {
                type: StringConstructor;
                required: false;
                default: any;
            };
        }>, {
            props: any;
            data: {
                basicDividerShowIs: boolean;
            };
            basicDividerRef: import("vue").Ref<HTMLElement, HTMLElement>;
            update: () => void;
            MyDivider: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            class: {
                type: StringConstructor;
                required: false;
                default: any;
            };
        }>> & Readonly<{}>, {
            class: string;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
