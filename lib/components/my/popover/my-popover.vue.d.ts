import { Modifier, State } from '@popperjs/core';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
    deriveState: (state: State) => {
        styles: import("lodash").Dictionary<Partial<CSSStyleDeclaration>>;
        attributes: import("lodash").Dictionary<{
            [key: string]: string | boolean;
        }>;
    };
    stateUpdater: Modifier<"updateState", any>;
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
export default _default;
