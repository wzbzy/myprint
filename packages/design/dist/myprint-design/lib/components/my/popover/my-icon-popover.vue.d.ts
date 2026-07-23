import { Placement } from '@popperjs/core/lib/enums';
export interface Props {
    trigger?: string;
    placement?: Placement;
    popperStyle?: any;
    pressHide?: boolean;
    disabled?: boolean;
    lock?: boolean;
}
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    trigger: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    placement: {
        type: any;
        required: false;
        default: string;
    };
    popperStyle: {
        type: any;
        required: false;
        default: () => {};
    };
    pressHide: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    lock: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>, {
    props: any;
    visible: import("vue").Ref<{
        popover: boolean;
    }, {
        popover: boolean;
    } | {
        popover: boolean;
    }>;
    popoverRef: import("vue").Ref<any, any>;
    mousedownFlag: import("vue").Ref<boolean, boolean>;
    popoverVisible: import("vue").ComputedRef<any>;
    timer: any;
    stop: () => void;
    mousedown: (_ev: MouseEvent) => void;
    mouseup: (_ev: MouseEvent) => void;
    hover: (flag: boolean) => void;
    updateVisible: (flag: boolean) => void;
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
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    trigger: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    placement: {
        type: any;
        required: false;
        default: string;
    };
    popperStyle: {
        type: any;
        required: false;
        default: () => {};
    };
    pressHide: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    lock: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>> & Readonly<{}>, {
    lock: boolean;
    disabled: boolean;
    placement: any;
    trigger: string;
    popperStyle: any;
    pressHide: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
