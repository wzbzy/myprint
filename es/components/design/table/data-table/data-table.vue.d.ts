import { CSSProperties } from 'vue-demi';
import { MyElement } from '..\..\..\../types/entity';
import { recursionColumnDisable } from '..\..\..\../utils/table/dataTable';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    element: {
        type: any;
        required: true;
        default: () => MyElement;
    };
}>, {
    props: any;
    itemRefs: HTMLElement[];
    setItemRef: (element: MyElement, el: any) => void;
    bodyStyle: (column: MyElement) => CSSProperties;
    ColumnView: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        column: {
            type: any;
            required: false;
            default: () => import("..\..\..\../types/entity").TableCellElement;
        };
    }>, {
        props: any;
        columnRef: import("vue").Ref<any, any>;
        headStyle: import("vue").ComputedRef<CSSProperties>;
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
            style: import("vue").ComputedRef<CSSProperties>;
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
                style: import("vue").ComputedRef<CSSProperties>;
                valueStyle: import("vue").ComputedRef<CSSProperties>;
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
                style: import("vue").ComputedRef<CSSProperties>;
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
            readonly elementHandleEditStatusList: import("..\..\..\../types/entity").elementStatus[];
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            element: {
                type: any;
                required: true;
                default: () => MyElement;
            };
        }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        column: {
            type: any;
            required: false;
            default: () => import("..\..\..\../types/entity").TableCellElement;
        };
    }>> & Readonly<{}>, {
        column: any;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    readonly TextView: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
        style: import("vue").ComputedRef<CSSProperties>;
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
            style: import("vue").ComputedRef<CSSProperties>;
            valueStyle: import("vue").ComputedRef<CSSProperties>;
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
            style: import("vue").ComputedRef<CSSProperties>;
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
        readonly elementHandleEditStatusList: import("..\..\..\../types/entity").elementStatus[];
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        element: {
            type: any;
            required: true;
            default: () => MyElement;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    readonly recursionColumnDisable: typeof recursionColumnDisable;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    element: {
        type: any;
        required: true;
        default: () => MyElement;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
