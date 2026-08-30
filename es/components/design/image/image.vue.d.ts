import 'vue-cropper/dist/index.css';
import { MyElement } from '..\..\../types/entity';
import { displayDesign, getRecursionParentPanel, valueUnit } from '..\..\../utils/elementUtil';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    element: {
        type: any;
        required: false;
        default: () => MyElement;
    };
}>, {
    props: any;
    cropper: import("vue").Ref<any, any>;
    uploadFileRef: import("vue").Ref<HTMLInputElement, HTMLInputElement>;
    sourceBase64: import("vue").Ref<any, any>;
    contentBase64: import("vue").Ref<any, any>;
    imageHttpUrlInput: import("vue").Ref<string, string>;
    option: {
        outputSize: number;
        outputType: string;
        info: boolean;
        canScale: boolean;
        autoCrop: boolean;
        autoCropWidth: number;
        autoCropHeight: number;
        fixed: boolean;
        fixedNumber: any[];
        full: boolean;
        fixedBox: boolean;
        canMove: boolean;
        canMoveBox: boolean;
        original: boolean;
        centerBox: boolean;
        height: boolean;
        infoTrue: boolean;
        maxImgSize: number;
        enlarge: number;
        mode: string;
    };
    data: {
        cropVisible: boolean;
        chooseImageVisible: boolean;
        dragFlag: boolean;
        chooseImageType: string;
    };
    editImgClick: () => void;
    realTime: (_data: any) => void;
    imageZoomIn: () => void;
    imageZoomOut: () => void;
    rotateLeft: () => void;
    rotateRight: () => void;
    sureClip: () => void;
    blobToDataURI: (blob: any, callback: any) => void;
    imgLoad: () => void;
    selectImg: (event: any) => boolean;
    clickSureImageHttpUrl: () => void;
    handleCloseChooseImageDialog: () => void;
    clickPlus: (_ev: any) => void;
    chooseImage: (_ev: any) => void;
    imgRef: import("vue").Ref<HTMLImageElement, HTMLImageElement>;
    loadData: () => void;
    loadImg: () => void;
    readonly VueCropper: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    readonly displayDesign: typeof displayDesign;
    readonly getRecursionParentPanel: typeof getRecursionParentPanel;
    readonly valueUnit: typeof valueUnit;
    readonly chooseImgTypeList: import("..\..\../types/entity").DownList[];
    readonly elementHandleStatusList: import("..\..\../types/entity").elementStatus[];
    MyTabs: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
        itemList: {
            type: ArrayConstructor;
            required: true;
            default: () => import("..\..\../types/entity").DownList[];
        };
    }>, {
        emit: (event: "click" | "update:modelValue", ...args: any[]) => void;
        click: (item: import("..\..\../types/entity").DownList) => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "update:modelValue")[], "click" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
        itemList: {
            type: ArrayConstructor;
            required: true;
            default: () => import("..\..\../types/entity").DownList[];
        };
    }>> & Readonly<{
        onClick?: (...args: any[]) => any;
        "onUpdate:modelValue"?: (...args: any[]) => any;
    }>, {
        showSelectedStatus: boolean;
        modelValue: any;
        itemList: unknown[];
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
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
    Crop: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Plus: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    ZoomIn: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    ZoomOut: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    RefreshLeft: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    RefreshRight: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Check: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    CloseBold: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
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
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    element: {
        type: any;
        required: false;
        default: () => MyElement;
    };
}>> & Readonly<{}>, {
    element: any;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
