import { MyElement } from '..\../types/entity';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    element: {
        type: any;
        required: false;
        default: () => MyElement;
    };
}>, {
    readonly MyText: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        element: {
            type: any;
            required: true;
            default: () => MyElement;
        };
    }>, {
        props: any;
        contentRef: import("vue").Ref<any, any>;
        data: {
            content: string;
            innerContent: string;
        };
        style: import("vue").ComputedRef<import("vue").CSSProperties>;
        handleKeydown: (event: KeyboardEvent) => void;
        click: (event: MouseEvent) => void;
        handleInput: (event: any) => void;
        readonly MyBarcode: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            element: {
                type: any;
                required: false;
                default: () => MyElement;
            };
        }>, {
            props: any;
            barCode: import("vue").Ref<any, any>;
            svgStyle: import("vue").Ref<{}, {}>;
            data: {
                errorMsg: string;
            };
            style: import("vue").ComputedRef<import("vue").CSSProperties>;
            valueStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
            setSvgStyle: () => void;
            showCustomValueIs: () => boolean;
            showJsBarcodeValueIs: () => boolean;
            barValueList: string[];
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            element: {
                type: any;
                required: false;
                default: () => MyElement;
            };
        }>> & Readonly<{}>, {
            element: any;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        readonly MyQrcode: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            element: {
                type: any;
                required: false;
                default: () => MyElement;
            };
        }>, {
            props: any;
            qrCode: import("vue").Ref<any, any>;
            src: import("vue").Ref<any, any>;
            style: import("vue").ComputedRef<import("vue").CSSProperties>;
            freshQrCode: (resetHeight: boolean) => void;
            freshQrCodeThrottle: import("lodash").DebouncedFuncLeading<(resetHeight: boolean) => void>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            element: {
                type: any;
                required: false;
                default: () => MyElement;
            };
        }>> & Readonly<{}>, {
            element: any;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        readonly elementHandleEditStatusList: import("..\../types/entity").elementStatus[];
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        element: {
            type: any;
            required: true;
            default: () => MyElement;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    readonly MyImage: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
        readonly displayDesign: typeof import("../../utils/elementUtil").displayDesign;
        readonly getRecursionParentPanel: typeof import("../../utils/elementUtil").getRecursionParentPanel;
        readonly valueUnit: typeof import("../../utils/elementUtil").valueUnit;
        readonly chooseImgTypeList: import("..\../types/entity").DownList[];
        readonly elementHandleStatusList: import("..\../types/entity").elementStatus[];
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
                default: () => import("..\../types/entity").DownList[];
            };
        }>, {
            emit: (event: "click" | "update:modelValue", ...args: any[]) => void;
            click: (item: import("..\../types/entity").DownList) => void;
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
                default: () => import("..\../types/entity").DownList[];
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
    readonly MyDottedHorizontalLine: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        element: {
            type: any;
            required: false;
            default: () => MyElement;
        };
    }>, {
        props: any;
        labelStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        element: {
            type: any;
            required: false;
            default: () => MyElement;
        };
    }>> & Readonly<{}>, {
        element: any;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    readonly MyDottedVerticalLine: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        element: {
            type: any;
            required: false;
            default: () => MyElement;
        };
    }>, {
        props: any;
        labelStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        element: {
            type: any;
            required: false;
            default: () => MyElement;
        };
    }>> & Readonly<{}>, {
        element: any;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    readonly MyHorizontalLine: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        element: {
            type: any;
            required: false;
            default: () => MyElement;
        };
    }>, {
        props: any;
        labelStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        element: {
            type: any;
            required: false;
            default: () => MyElement;
        };
    }>> & Readonly<{}>, {
        element: any;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    readonly MyVerticalLine: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        element: {
            type: any;
            required: false;
            default: () => MyElement;
        };
    }>, {
        props: any;
        labelStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        element: {
            type: any;
            required: false;
            default: () => MyElement;
        };
    }>> & Readonly<{}>, {
        element: any;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    readonly MyRect: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        element: {
            type: import("vue").PropType<MyElement>;
            default: () => MyElement;
        };
    }>, {
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            element: {
                type: import("vue").PropType<MyElement>;
                default: () => MyElement;
            };
        }>> & Readonly<{}> & {}>;
        labelStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        element: {
            type: import("vue").PropType<MyElement>;
            default: () => MyElement;
        };
    }>> & Readonly<{}>, {
        element: MyElement;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    SvgPolygonLine: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        element: {
            type: any;
            required: false;
            default: () => MyElement;
        };
    }>, {
        props: any;
        orgPoint: any;
        svgOptions: {
            width: number;
            height: number;
            controlLine: {
                start: {
                    x: number;
                    y: number;
                };
                end: {
                    x: number;
                    y: number;
                };
            }[];
            rotateLineStart: {
                label?: string;
                type: "control" | "virtual" | "rotate";
                insertIndex: number;
                x: number;
                y: number;
            };
            rotateLineEnd: {
                label?: string;
                type: "control" | "virtual" | "rotate";
                insertIndex: number;
                x: number;
                y: number;
            };
            rotateLineEndDragPoint: {
                label?: string;
                type: "control" | "virtual" | "rotate";
                insertIndex: number;
                x: number;
                y: number;
            };
            linePoints: {
                label?: string;
                type: "control" | "virtual" | "rotate";
                insertIndex: number;
                x: number;
                y: number;
            }[];
            allPoint: {
                label?: string;
                type: "control" | "virtual" | "rotate";
                insertIndex: number;
                x: number;
                y: number;
            }[];
            virtualPoint: {
                label?: string;
                type: "control" | "virtual" | "rotate";
                insertIndex: number;
                x: number;
                y: number;
            }[];
        };
        initPoint: () => void;
        dragStart: (subject: import("..\../types/entity").PointLabel) => void;
        dragIng: (subject: import("..\../types/entity").PointLabel, event: import("../../types/d3Type").D3DragEvent, dx: number, dy: number) => void;
        dragEnd: () => void;
        doubleClick: (subject: import("..\../types/entity").PointLabel) => void;
        draw: () => import("d3-path").Path;
        SvgBase: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            element: {
                type: any;
                required: false;
                default: () => MyElement;
            };
            svgOptions: {
                type: any;
                required: true;
                default: () => {
                    width: number;
                    height: number;
                    controlLine: import("..\../types/entity").Line[];
                    centerPoint: import("..\../types/entity").Point;
                    controlPointScale: import("..\../types/entity").PointLabel;
                    controlPointResize: import("..\../types/entity").PointLabel;
                    controlPointEndDragStart: import("..\../types/entity").Point;
                    allPoint: import("..\../types/entity").PointLabel[];
                    virtualPoint: import("..\../types/entity").PointLabel[];
                    drawAuxiliary: boolean;
                };
            };
            draw: {
                type: FunctionConstructor;
                required: true;
                default: () => void;
            };
            dragStart: {
                type: FunctionConstructor;
                required: false;
                default: () => void;
            };
            dragIng: {
                type: FunctionConstructor;
                required: false;
                default: (_subject: import("..\../types/entity").PointLabel, _event: import("../../types/d3Type").D3DragEvent, _dx: number, _dy: number) => void;
            };
            dragEnd: {
                type: FunctionConstructor;
                required: false;
                default: () => void;
            };
            changeSize: {
                type: FunctionConstructor;
                required: false;
                default: () => boolean;
            };
            doubleClick: {
                type: FunctionConstructor;
                required: false;
                default: () => void;
            };
        }>, {
            props: any;
            path: import("d3-path").Path;
            chartRef: import("vue").Ref<any, any>;
            subject: import("..\../types/entity").PointLabel;
            dx: any;
            dy: any;
            startX: any;
            startY: any;
            dragFun: any;
            lastClickPoint: import("..\../types/entity").PointClick;
            draggable: () => void;
            dragSubject: (event: any) => import("..\../types/entity").PointLabel;
            readonly displayDesign: typeof import("../../utils/elementUtil").displayDesign;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            element: {
                type: any;
                required: false;
                default: () => MyElement;
            };
            svgOptions: {
                type: any;
                required: true;
                default: () => {
                    width: number;
                    height: number;
                    controlLine: import("..\../types/entity").Line[];
                    centerPoint: import("..\../types/entity").Point;
                    controlPointScale: import("..\../types/entity").PointLabel;
                    controlPointResize: import("..\../types/entity").PointLabel;
                    controlPointEndDragStart: import("..\../types/entity").Point;
                    allPoint: import("..\../types/entity").PointLabel[];
                    virtualPoint: import("..\../types/entity").PointLabel[];
                    drawAuxiliary: boolean;
                };
            };
            draw: {
                type: FunctionConstructor;
                required: true;
                default: () => void;
            };
            dragStart: {
                type: FunctionConstructor;
                required: false;
                default: () => void;
            };
            dragIng: {
                type: FunctionConstructor;
                required: false;
                default: (_subject: import("..\../types/entity").PointLabel, _event: import("../../types/d3Type").D3DragEvent, _dx: number, _dy: number) => void;
            };
            dragEnd: {
                type: FunctionConstructor;
                required: false;
                default: () => void;
            };
            changeSize: {
                type: FunctionConstructor;
                required: false;
                default: () => boolean;
            };
            doubleClick: {
                type: FunctionConstructor;
                required: false;
                default: () => void;
            };
        }>> & Readonly<{}>, {
            element: any;
            dragStart: Function;
            draw: Function;
            dragIng: Function;
            dragEnd: Function;
            changeSize: Function;
            doubleClick: Function;
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
    SvgCircle: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        element: {
            type: any;
            required: false;
            default: () => MyElement;
        };
    }>, {
        props: any;
        svgOptions: {
            width: number;
            height: number;
            rotateControl: {};
            centerPoint: {
                x: number;
                y: number;
            };
            drawAuxiliary: boolean;
        };
        changeSize: () => boolean;
        draw: (_chart: import("d3-selection").Selection<import("d3-selection").BaseType, any, import("d3-selection").BaseType, any>) => import("d3-path").Path;
        initPoint: () => void;
        SvgBase: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            element: {
                type: any;
                required: false;
                default: () => MyElement;
            };
            svgOptions: {
                type: any;
                required: true;
                default: () => {
                    width: number;
                    height: number;
                    controlLine: import("..\../types/entity").Line[];
                    centerPoint: import("..\../types/entity").Point;
                    controlPointScale: import("..\../types/entity").PointLabel;
                    controlPointResize: import("..\../types/entity").PointLabel;
                    controlPointEndDragStart: import("..\../types/entity").Point;
                    allPoint: import("..\../types/entity").PointLabel[];
                    virtualPoint: import("..\../types/entity").PointLabel[];
                    drawAuxiliary: boolean;
                };
            };
            draw: {
                type: FunctionConstructor;
                required: true;
                default: () => void;
            };
            dragStart: {
                type: FunctionConstructor;
                required: false;
                default: () => void;
            };
            dragIng: {
                type: FunctionConstructor;
                required: false;
                default: (_subject: import("..\../types/entity").PointLabel, _event: import("../../types/d3Type").D3DragEvent, _dx: number, _dy: number) => void;
            };
            dragEnd: {
                type: FunctionConstructor;
                required: false;
                default: () => void;
            };
            changeSize: {
                type: FunctionConstructor;
                required: false;
                default: () => boolean;
            };
            doubleClick: {
                type: FunctionConstructor;
                required: false;
                default: () => void;
            };
        }>, {
            props: any;
            path: import("d3-path").Path;
            chartRef: import("vue").Ref<any, any>;
            subject: import("..\../types/entity").PointLabel;
            dx: any;
            dy: any;
            startX: any;
            startY: any;
            dragFun: any;
            lastClickPoint: import("..\../types/entity").PointClick;
            draggable: () => void;
            dragSubject: (event: any) => import("..\../types/entity").PointLabel;
            readonly displayDesign: typeof import("../../utils/elementUtil").displayDesign;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            element: {
                type: any;
                required: false;
                default: () => MyElement;
            };
            svgOptions: {
                type: any;
                required: true;
                default: () => {
                    width: number;
                    height: number;
                    controlLine: import("..\../types/entity").Line[];
                    centerPoint: import("..\../types/entity").Point;
                    controlPointScale: import("..\../types/entity").PointLabel;
                    controlPointResize: import("..\../types/entity").PointLabel;
                    controlPointEndDragStart: import("..\../types/entity").Point;
                    allPoint: import("..\../types/entity").PointLabel[];
                    virtualPoint: import("..\../types/entity").PointLabel[];
                    drawAuxiliary: boolean;
                };
            };
            draw: {
                type: FunctionConstructor;
                required: true;
                default: () => void;
            };
            dragStart: {
                type: FunctionConstructor;
                required: false;
                default: () => void;
            };
            dragIng: {
                type: FunctionConstructor;
                required: false;
                default: (_subject: import("..\../types/entity").PointLabel, _event: import("../../types/d3Type").D3DragEvent, _dx: number, _dy: number) => void;
            };
            dragEnd: {
                type: FunctionConstructor;
                required: false;
                default: () => void;
            };
            changeSize: {
                type: FunctionConstructor;
                required: false;
                default: () => boolean;
            };
            doubleClick: {
                type: FunctionConstructor;
                required: false;
                default: () => void;
            };
        }>> & Readonly<{}>, {
            element: any;
            dragStart: Function;
            draw: Function;
            dragIng: Function;
            dragEnd: Function;
            changeSize: Function;
            doubleClick: Function;
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
    DrawPanel: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        element: {
            type: any;
            required: false;
            default: () => MyElement;
        };
    }>, {
        canvasRef: import("vue").Ref<any, any>;
        data: any;
        startX: number;
        startY: number;
        lastClickPoint: import("..\../types/entity").PointClick;
        props: any;
        initData: () => void;
        darggend: () => void;
        render: () => void;
        dragsubject: () => any[];
        dragged: ({ subject, x, y }: {
            subject: any;
            x: any;
            y: any;
        }) => void;
        readonly displayPreview: typeof import("../../utils/elementUtil").displayPreview;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        element: {
            type: any;
            required: false;
            default: () => MyElement;
        };
    }>> & Readonly<{}>, {
        element: any;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    SvgLine: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        element: {
            type: any;
            required: false;
            default: () => MyElement;
        };
    }>, {
        props: any;
        path: import("d3-path").Path;
        svgOptions: {
            width: number;
            height: number;
            rotateControl: {};
            linePoints: {
                label?: string;
                type: "control" | "virtual" | "rotate";
                insertIndex: number;
                x: number;
                y: number;
            }[];
            allPoint: {
                label?: string;
                type: "control" | "virtual" | "rotate";
                insertIndex: number;
                x: number;
                y: number;
            }[];
            drawAuxiliary: boolean;
        };
        draw: () => import("d3-path").Path;
        initPoint: () => void;
        dragIng: (subject: import("..\../types/entity").PointLabel, event: import("../../types/d3Type").D3DragEvent, dx: number, dy: number) => void;
        dragEnd: () => void;
        SvgBase: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            element: {
                type: any;
                required: false;
                default: () => MyElement;
            };
            svgOptions: {
                type: any;
                required: true;
                default: () => {
                    width: number;
                    height: number;
                    controlLine: import("..\../types/entity").Line[];
                    centerPoint: import("..\../types/entity").Point;
                    controlPointScale: import("..\../types/entity").PointLabel;
                    controlPointResize: import("..\../types/entity").PointLabel;
                    controlPointEndDragStart: import("..\../types/entity").Point;
                    allPoint: import("..\../types/entity").PointLabel[];
                    virtualPoint: import("..\../types/entity").PointLabel[];
                    drawAuxiliary: boolean;
                };
            };
            draw: {
                type: FunctionConstructor;
                required: true;
                default: () => void;
            };
            dragStart: {
                type: FunctionConstructor;
                required: false;
                default: () => void;
            };
            dragIng: {
                type: FunctionConstructor;
                required: false;
                default: (_subject: import("..\../types/entity").PointLabel, _event: import("../../types/d3Type").D3DragEvent, _dx: number, _dy: number) => void;
            };
            dragEnd: {
                type: FunctionConstructor;
                required: false;
                default: () => void;
            };
            changeSize: {
                type: FunctionConstructor;
                required: false;
                default: () => boolean;
            };
            doubleClick: {
                type: FunctionConstructor;
                required: false;
                default: () => void;
            };
        }>, {
            props: any;
            path: import("d3-path").Path;
            chartRef: import("vue").Ref<any, any>;
            subject: import("..\../types/entity").PointLabel;
            dx: any;
            dy: any;
            startX: any;
            startY: any;
            dragFun: any;
            lastClickPoint: import("..\../types/entity").PointClick;
            draggable: () => void;
            dragSubject: (event: any) => import("..\../types/entity").PointLabel;
            readonly displayDesign: typeof import("../../utils/elementUtil").displayDesign;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            element: {
                type: any;
                required: false;
                default: () => MyElement;
            };
            svgOptions: {
                type: any;
                required: true;
                default: () => {
                    width: number;
                    height: number;
                    controlLine: import("..\../types/entity").Line[];
                    centerPoint: import("..\../types/entity").Point;
                    controlPointScale: import("..\../types/entity").PointLabel;
                    controlPointResize: import("..\../types/entity").PointLabel;
                    controlPointEndDragStart: import("..\../types/entity").Point;
                    allPoint: import("..\../types/entity").PointLabel[];
                    virtualPoint: import("..\../types/entity").PointLabel[];
                    drawAuxiliary: boolean;
                };
            };
            draw: {
                type: FunctionConstructor;
                required: true;
                default: () => void;
            };
            dragStart: {
                type: FunctionConstructor;
                required: false;
                default: () => void;
            };
            dragIng: {
                type: FunctionConstructor;
                required: false;
                default: (_subject: import("..\../types/entity").PointLabel, _event: import("../../types/d3Type").D3DragEvent, _dx: number, _dy: number) => void;
            };
            dragEnd: {
                type: FunctionConstructor;
                required: false;
                default: () => void;
            };
            changeSize: {
                type: FunctionConstructor;
                required: false;
                default: () => boolean;
            };
            doubleClick: {
                type: FunctionConstructor;
                required: false;
                default: () => void;
            };
        }>> & Readonly<{}>, {
            element: any;
            dragStart: Function;
            draw: Function;
            dragIng: Function;
            dragEnd: Function;
            changeSize: Function;
            doubleClick: Function;
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
    SvgBezierCurve: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        element: {
            type: any;
            required: false;
            default: () => MyElement;
        };
    }>, {
        props: any;
        path: import("d3-path").Path;
        svgOptions: {
            width: number;
            height: number;
            rotateControl: {};
            controlLine: {
                start: {
                    x: number;
                    y: number;
                };
                end: {
                    x: number;
                    y: number;
                };
            }[];
            centerPoint: {
                x: number;
                y: number;
            };
            controlPoint: {
                label?: string;
                type: "control" | "virtual" | "rotate";
                insertIndex: number;
                x: number;
                y: number;
            };
            linePoints: {
                label?: string;
                type: "control" | "virtual" | "rotate";
                insertIndex: number;
                x: number;
                y: number;
            }[];
            allPoint: {
                label?: string;
                type: "control" | "virtual" | "rotate";
                insertIndex: number;
                x: number;
                y: number;
            }[];
            drawAuxiliary: boolean;
        };
        draw: () => import("d3-path").Path;
        initPoint: () => void;
        dragStart: () => void;
        dragIng: (subject: import("..\../types/entity").PointLabel, event: any, dx: any, dy: any) => void;
        dragEnd: () => void;
        SvgBase: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            element: {
                type: any;
                required: false;
                default: () => MyElement;
            };
            svgOptions: {
                type: any;
                required: true;
                default: () => {
                    width: number;
                    height: number;
                    controlLine: import("..\../types/entity").Line[];
                    centerPoint: import("..\../types/entity").Point;
                    controlPointScale: import("..\../types/entity").PointLabel;
                    controlPointResize: import("..\../types/entity").PointLabel;
                    controlPointEndDragStart: import("..\../types/entity").Point;
                    allPoint: import("..\../types/entity").PointLabel[];
                    virtualPoint: import("..\../types/entity").PointLabel[];
                    drawAuxiliary: boolean;
                };
            };
            draw: {
                type: FunctionConstructor;
                required: true;
                default: () => void;
            };
            dragStart: {
                type: FunctionConstructor;
                required: false;
                default: () => void;
            };
            dragIng: {
                type: FunctionConstructor;
                required: false;
                default: (_subject: import("..\../types/entity").PointLabel, _event: import("../../types/d3Type").D3DragEvent, _dx: number, _dy: number) => void;
            };
            dragEnd: {
                type: FunctionConstructor;
                required: false;
                default: () => void;
            };
            changeSize: {
                type: FunctionConstructor;
                required: false;
                default: () => boolean;
            };
            doubleClick: {
                type: FunctionConstructor;
                required: false;
                default: () => void;
            };
        }>, {
            props: any;
            path: import("d3-path").Path;
            chartRef: import("vue").Ref<any, any>;
            subject: import("..\../types/entity").PointLabel;
            dx: any;
            dy: any;
            startX: any;
            startY: any;
            dragFun: any;
            lastClickPoint: import("..\../types/entity").PointClick;
            draggable: () => void;
            dragSubject: (event: any) => import("..\../types/entity").PointLabel;
            readonly displayDesign: typeof import("../../utils/elementUtil").displayDesign;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            element: {
                type: any;
                required: false;
                default: () => MyElement;
            };
            svgOptions: {
                type: any;
                required: true;
                default: () => {
                    width: number;
                    height: number;
                    controlLine: import("..\../types/entity").Line[];
                    centerPoint: import("..\../types/entity").Point;
                    controlPointScale: import("..\../types/entity").PointLabel;
                    controlPointResize: import("..\../types/entity").PointLabel;
                    controlPointEndDragStart: import("..\../types/entity").Point;
                    allPoint: import("..\../types/entity").PointLabel[];
                    virtualPoint: import("..\../types/entity").PointLabel[];
                    drawAuxiliary: boolean;
                };
            };
            draw: {
                type: FunctionConstructor;
                required: true;
                default: () => void;
            };
            dragStart: {
                type: FunctionConstructor;
                required: false;
                default: () => void;
            };
            dragIng: {
                type: FunctionConstructor;
                required: false;
                default: (_subject: import("..\../types/entity").PointLabel, _event: import("../../types/d3Type").D3DragEvent, _dx: number, _dy: number) => void;
            };
            dragEnd: {
                type: FunctionConstructor;
                required: false;
                default: () => void;
            };
            changeSize: {
                type: FunctionConstructor;
                required: false;
                default: () => boolean;
            };
            doubleClick: {
                type: FunctionConstructor;
                required: false;
                default: () => void;
            };
        }>> & Readonly<{}>, {
            element: any;
            dragStart: Function;
            draw: Function;
            dragIng: Function;
            dragEnd: Function;
            changeSize: Function;
            doubleClick: Function;
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
    SvgBezierCurveThree: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        element: {
            type: any;
            required: false;
            default: () => MyElement;
        };
    }>, {
        props: any;
        path: import("d3-path").Path;
        orgPoint: any;
        svgOptions: {
            width: number;
            height: number;
            rotateControl: {};
            centerPoint: {
                x: number;
                y: number;
            };
            controlLine: {
                start: {
                    x: number;
                    y: number;
                };
                end: {
                    x: number;
                    y: number;
                };
            }[];
            rotateLineStart: {
                label?: string;
                type: "control" | "virtual" | "rotate";
                insertIndex: number;
                x: number;
                y: number;
            };
            rotateLineEnd: {
                label?: string;
                type: "control" | "virtual" | "rotate";
                insertIndex: number;
                x: number;
                y: number;
            };
            rotateLineEndDragPoint: {
                label?: string;
                type: "control" | "virtual" | "rotate";
                insertIndex: number;
                x: number;
                y: number;
            };
            controlPointList: {
                label?: string;
                type: "control" | "virtual" | "rotate";
                insertIndex: number;
                x: number;
                y: number;
            }[];
            linePoints: {
                label?: string;
                type: "control" | "virtual" | "rotate";
                insertIndex: number;
                x: number;
                y: number;
            }[];
            allPoint: {
                label?: string;
                type: "control" | "virtual" | "rotate";
                insertIndex: number;
                x: number;
                y: number;
            }[];
            drawAuxiliary: boolean;
        };
        draw: () => import("d3-path").Path;
        initPoint: () => void;
        dragStart: (subject: import("..\../types/entity").PointLabel) => void;
        dragIng: (subject: import("..\../types/entity").PointLabel, event: any, dx: any, dy: any) => void;
        dragEnd: () => void;
        SvgBase: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            element: {
                type: any;
                required: false;
                default: () => MyElement;
            };
            svgOptions: {
                type: any;
                required: true;
                default: () => {
                    width: number;
                    height: number;
                    controlLine: import("..\../types/entity").Line[];
                    centerPoint: import("..\../types/entity").Point;
                    controlPointScale: import("..\../types/entity").PointLabel;
                    controlPointResize: import("..\../types/entity").PointLabel;
                    controlPointEndDragStart: import("..\../types/entity").Point;
                    allPoint: import("..\../types/entity").PointLabel[];
                    virtualPoint: import("..\../types/entity").PointLabel[];
                    drawAuxiliary: boolean;
                };
            };
            draw: {
                type: FunctionConstructor;
                required: true;
                default: () => void;
            };
            dragStart: {
                type: FunctionConstructor;
                required: false;
                default: () => void;
            };
            dragIng: {
                type: FunctionConstructor;
                required: false;
                default: (_subject: import("..\../types/entity").PointLabel, _event: import("../../types/d3Type").D3DragEvent, _dx: number, _dy: number) => void;
            };
            dragEnd: {
                type: FunctionConstructor;
                required: false;
                default: () => void;
            };
            changeSize: {
                type: FunctionConstructor;
                required: false;
                default: () => boolean;
            };
            doubleClick: {
                type: FunctionConstructor;
                required: false;
                default: () => void;
            };
        }>, {
            props: any;
            path: import("d3-path").Path;
            chartRef: import("vue").Ref<any, any>;
            subject: import("..\../types/entity").PointLabel;
            dx: any;
            dy: any;
            startX: any;
            startY: any;
            dragFun: any;
            lastClickPoint: import("..\../types/entity").PointClick;
            draggable: () => void;
            dragSubject: (event: any) => import("..\../types/entity").PointLabel;
            readonly displayDesign: typeof import("../../utils/elementUtil").displayDesign;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            element: {
                type: any;
                required: false;
                default: () => MyElement;
            };
            svgOptions: {
                type: any;
                required: true;
                default: () => {
                    width: number;
                    height: number;
                    controlLine: import("..\../types/entity").Line[];
                    centerPoint: import("..\../types/entity").Point;
                    controlPointScale: import("..\../types/entity").PointLabel;
                    controlPointResize: import("..\../types/entity").PointLabel;
                    controlPointEndDragStart: import("..\../types/entity").Point;
                    allPoint: import("..\../types/entity").PointLabel[];
                    virtualPoint: import("..\../types/entity").PointLabel[];
                    drawAuxiliary: boolean;
                };
            };
            draw: {
                type: FunctionConstructor;
                required: true;
                default: () => void;
            };
            dragStart: {
                type: FunctionConstructor;
                required: false;
                default: () => void;
            };
            dragIng: {
                type: FunctionConstructor;
                required: false;
                default: (_subject: import("..\../types/entity").PointLabel, _event: import("../../types/d3Type").D3DragEvent, _dx: number, _dy: number) => void;
            };
            dragEnd: {
                type: FunctionConstructor;
                required: false;
                default: () => void;
            };
            changeSize: {
                type: FunctionConstructor;
                required: false;
                default: () => boolean;
            };
            doubleClick: {
                type: FunctionConstructor;
                required: false;
                default: () => void;
            };
        }>> & Readonly<{}>, {
            element: any;
            dragStart: Function;
            draw: Function;
            dragIng: Function;
            dragEnd: Function;
            changeSize: Function;
            doubleClick: Function;
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
    SvgEllipse: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        element: {
            type: any;
            required: false;
            default: () => MyElement;
        };
    }>, {
        props: any;
        ellipse: any;
        svgOptions: {
            width: number;
            height: number;
            rotateControl: {};
            centerPoint: {
                x: number;
                y: number;
            };
            drawAuxiliary: boolean;
        };
        changeSize: () => boolean;
        draw: (chart: import("d3-selection").Selection<import("d3-selection").BaseType, any, import("d3-selection").BaseType, any>) => void;
        initPoint: () => void;
        SvgBase: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            element: {
                type: any;
                required: false;
                default: () => MyElement;
            };
            svgOptions: {
                type: any;
                required: true;
                default: () => {
                    width: number;
                    height: number;
                    controlLine: import("..\../types/entity").Line[];
                    centerPoint: import("..\../types/entity").Point;
                    controlPointScale: import("..\../types/entity").PointLabel;
                    controlPointResize: import("..\../types/entity").PointLabel;
                    controlPointEndDragStart: import("..\../types/entity").Point;
                    allPoint: import("..\../types/entity").PointLabel[];
                    virtualPoint: import("..\../types/entity").PointLabel[];
                    drawAuxiliary: boolean;
                };
            };
            draw: {
                type: FunctionConstructor;
                required: true;
                default: () => void;
            };
            dragStart: {
                type: FunctionConstructor;
                required: false;
                default: () => void;
            };
            dragIng: {
                type: FunctionConstructor;
                required: false;
                default: (_subject: import("..\../types/entity").PointLabel, _event: import("../../types/d3Type").D3DragEvent, _dx: number, _dy: number) => void;
            };
            dragEnd: {
                type: FunctionConstructor;
                required: false;
                default: () => void;
            };
            changeSize: {
                type: FunctionConstructor;
                required: false;
                default: () => boolean;
            };
            doubleClick: {
                type: FunctionConstructor;
                required: false;
                default: () => void;
            };
        }>, {
            props: any;
            path: import("d3-path").Path;
            chartRef: import("vue").Ref<any, any>;
            subject: import("..\../types/entity").PointLabel;
            dx: any;
            dy: any;
            startX: any;
            startY: any;
            dragFun: any;
            lastClickPoint: import("..\../types/entity").PointClick;
            draggable: () => void;
            dragSubject: (event: any) => import("..\../types/entity").PointLabel;
            readonly displayDesign: typeof import("../../utils/elementUtil").displayDesign;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            element: {
                type: any;
                required: false;
                default: () => MyElement;
            };
            svgOptions: {
                type: any;
                required: true;
                default: () => {
                    width: number;
                    height: number;
                    controlLine: import("..\../types/entity").Line[];
                    centerPoint: import("..\../types/entity").Point;
                    controlPointScale: import("..\../types/entity").PointLabel;
                    controlPointResize: import("..\../types/entity").PointLabel;
                    controlPointEndDragStart: import("..\../types/entity").Point;
                    allPoint: import("..\../types/entity").PointLabel[];
                    virtualPoint: import("..\../types/entity").PointLabel[];
                    drawAuxiliary: boolean;
                };
            };
            draw: {
                type: FunctionConstructor;
                required: true;
                default: () => void;
            };
            dragStart: {
                type: FunctionConstructor;
                required: false;
                default: () => void;
            };
            dragIng: {
                type: FunctionConstructor;
                required: false;
                default: (_subject: import("..\../types/entity").PointLabel, _event: import("../../types/d3Type").D3DragEvent, _dx: number, _dy: number) => void;
            };
            dragEnd: {
                type: FunctionConstructor;
                required: false;
                default: () => void;
            };
            changeSize: {
                type: FunctionConstructor;
                required: false;
                default: () => boolean;
            };
            doubleClick: {
                type: FunctionConstructor;
                required: false;
                default: () => void;
            };
        }>> & Readonly<{}>, {
            element: any;
            dragStart: Function;
            draw: Function;
            dragIng: Function;
            dragEnd: Function;
            changeSize: Function;
            doubleClick: Function;
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
