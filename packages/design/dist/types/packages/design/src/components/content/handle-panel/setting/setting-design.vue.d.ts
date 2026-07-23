import { i18n } from '@myprint/design/locales';
declare const _default: import("vue").DefineComponent<{}, {
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
    MyForm: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
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
    readonly i18n: typeof i18n;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
