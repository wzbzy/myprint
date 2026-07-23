import { hasStyle } from '..\..\..\../constants/common';
import { multipleElementGetValue } from '..\..\..\../utils/elementUtil';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>, {
    appStore: import("pinia").Store<"myPrintApp", {
        locale: string;
        displayModel: import("../../../../index").DisplayModel;
        client: {
            connect: boolean;
        };
        panelPosition: {
            x: number;
            y: number;
            scrollX: number;
            scrollY: number;
        };
        currentPanel: import("../../../../index").Panel;
        previewData: any[];
        provider: import("../../../../index").Provider;
        lastPageUnit: import("../../../../index").PageUnit;
        currentElement: import("../../../../index").MyElement[];
        auxiliaryLineTmp: import("../../../../index").MyAuxiliaryLine;
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
    readonly fontList: import("../../../../index").DownList[][];
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
