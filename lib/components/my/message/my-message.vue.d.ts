declare enum ColorStyle {
    info = "#1677FF",
    success = "#52c41a",
    error = "#ff4d4f",
    warning = "#faad14",
    loading = "#1677FF"
}
interface Message {
    content: string;
    mode: string;
}
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    duration: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    top: {
        type: (NumberConstructor | StringConstructor)[];
        required: false;
        default: number;
    };
}>, {
    props: any;
    ColorStyle: typeof ColorStyle;
    resetTimer: import("vue").Ref<any, any>;
    showMessage: import("vue").Ref<boolean[], boolean[]>;
    hideTimers: import("vue").Ref<any[], any[]>;
    messageContent: import("vue").Ref<{
        content: string;
        mode: string;
    }[], Message[] | {
        content: string;
        mode: string;
    }[]>;
    messTop: import("vue").ComputedRef<any>;
    clear: import("vue").ComputedRef<boolean>;
    onEnter: (index: number) => void;
    onLeave: (index: number) => void;
    show: () => void;
    info: (content: string) => void;
    success: (content: string) => void;
    error: (content: string) => void;
    warning: (content: string) => void;
    loading: (content: string) => void;
    emit: (event: "close", ...args: any[]) => void;
    onHideMessage: (index: number) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    duration: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    top: {
        type: (NumberConstructor | StringConstructor)[];
        required: false;
        default: number;
    };
}>> & Readonly<{
    onClose?: (...args: any[]) => any;
}>, {
    top: string | number;
    duration: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
