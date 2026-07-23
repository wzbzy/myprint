import { hasStyle, hasStyleByTypeList } from '@myprint/design/constants/common';
import { group, ungroup } from '@myprint/design/plugins/moveable/moveable';
import { multipleElementGetValue, multipleElementGetValueList, multipleElementSetValue } from '@myprint/design/utils/elementUtil';
import { DownList } from '@myprint/design/types/entity';
import { i18n } from '@myprint/design/locales';
declare const _default: import("vue").DefineComponent<{}, {
    elementAlignList: import("vue").Reactive<DownList[][]>;
    elementLayerList: import("vue").Reactive<DownList[][]>;
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
    groupDisabledIs: import("vue").ComputedRef<any>;
    ungroupDisabledIs: import("vue").ComputedRef<boolean>;
    fontDisabledComputed: import("vue").ComputedRef<boolean>;
    myColorPicker: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
    readonly MyStyleIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
    readonly hasStyle: typeof hasStyle;
    readonly hasStyleByTypeList: typeof hasStyleByTypeList;
    readonly group: typeof group;
    readonly ungroup: typeof ungroup;
    readonly multipleElementGetValue: typeof multipleElementGetValue;
    readonly multipleElementGetValueList: typeof multipleElementGetValueList;
    readonly multipleElementSetValue: typeof multipleElementSetValue;
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
    FontSize: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
        readonly fontSizeList: DownList[][];
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
    FontFamily: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        disabled: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
    }>, {
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
        data: {
            fontFamily: string;
            fontFamilyName: string;
        };
        changeFontFamily: (fontFamily: string) => void;
        readonly fontList: DownList[][];
        readonly hasStyle: typeof hasStyle;
        readonly multipleElementGetValue: typeof multipleElementGetValue;
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
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        disabled: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        disabled: boolean;
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
        eventListeners: Record<import("@myprint/design/components/my/scrollbar/my-scrollbar.vue").PerfectScrollbarEmitsKeys, (event: Event) => void>;
        createEventListener: (eventName: import("@myprint/design/components/my/scrollbar/my-scrollbar.vue").PerfectScrollbarEmitsKeys) => (event: Event) => void;
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
    readonly i18n: typeof i18n;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
