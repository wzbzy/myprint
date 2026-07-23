declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
export default _default;
