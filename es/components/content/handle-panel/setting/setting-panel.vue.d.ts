import { i18n } from '..\..\..\../locales';
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
    settingItemList: import("vue").Reactive<{
        title: string;
        type: string;
        active: boolean;
    }[]>;
    currentSettingItem: import("vue").Ref<{
        title: string;
        type: string;
        active: boolean;
    }, {
        title: string;
        type: string;
        active: boolean;
    } | {
        title: string;
        type: string;
        active: boolean;
    }>;
    clickItem: (item: any) => void;
    clickClose: () => void;
    SettingPrinter: import("vue").DefineComponent<{}, {
        useSocketData: import("pinia").Store<"myPrintSocket", {
            socket: any;
            timer: any;
            connect: boolean;
            printerList: import("../../../../index").Printer[];
            resolveMap: {};
        }, {}, {
            INIT_SOCKET(): void;
            SET_PRINTER_LIST(list: import("../../../../index").Printer[]): void;
            SEND(taskId: string, msg: any): Promise<import("../../../../index").ClientResult>;
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
        statusName: import("vue").ComputedRef<"连接成功" | "连接断开">;
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
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    SettingAbout: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    SettingDesign: import("vue").DefineComponent<{}, {
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
    MyDialog: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        modelValue: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        fullscreen: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        showHeader: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        class: {
            type: any;
            required: false;
            default: string;
        };
        title: {
            type: StringConstructor;
            required: false;
        };
        width: {
            type: StringConstructor;
            required: false;
            default: string;
        };
    }>, {
        emit: (event: "close" | "update:modelValue", ...args: any[]) => void;
        props: any;
        data: {
            rendered: boolean;
        };
        dialogRef: import("vue").Ref<any, any>;
        style: import("vue").ComputedRef<{
            width: any;
        }>;
        onClose: () => void;
        CloseBold: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
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
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "update:modelValue")[], "close" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        fullscreen: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        showHeader: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        class: {
            type: any;
            required: false;
            default: string;
        };
        title: {
            type: StringConstructor;
            required: false;
        };
        width: {
            type: StringConstructor;
            required: false;
            default: string;
        };
    }>> & Readonly<{
        "onUpdate:modelValue"?: (...args: any[]) => any;
        onClose?: (...args: any[]) => any;
    }>, {
        width: string;
        modelValue: boolean;
        fullscreen: boolean;
        showHeader: boolean;
        class: any;
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
    CloseBold: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    readonly i18n: typeof i18n;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
