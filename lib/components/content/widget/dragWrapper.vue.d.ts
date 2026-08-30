import { Container } from '..\..\../types/entity';
import { CSSProperties } from 'vue-demi';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    data: {
        type: ObjectConstructor;
        required: false;
        default: () => Container & {
            visible: boolean;
            opacity: number;
            transitionAnime: boolean;
        };
    };
}>, {
    props: any;
    wrapperRef: import("vue").Ref<HTMLElement, HTMLElement>;
    style: import("vue").ComputedRef<CSSProperties>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: ObjectConstructor;
        required: false;
        default: () => Container & {
            visible: boolean;
            opacity: number;
            transitionAnime: boolean;
        };
    };
}>> & Readonly<{}>, {
    data: Record<string, any>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
