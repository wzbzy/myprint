import { MyElement } from '@myprint/design/types/entity';
import { CSSProperties } from 'vue-demi';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
export default _default;
