import { PropType } from 'vue-demi';
import { MyElement } from '@myprint/design/types/entity';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    element: {
        type: PropType<MyElement>;
        default: () => MyElement;
    };
}>, {
    props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        element: {
            type: PropType<MyElement>;
            default: () => MyElement;
        };
    }>> & Readonly<{}> & {}>;
    labelStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    element: {
        type: PropType<MyElement>;
        default: () => MyElement;
    };
}>> & Readonly<{}>, {
    element: MyElement;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
