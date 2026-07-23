import { MyElement } from '..\..\../types/entity';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
export default _default;
