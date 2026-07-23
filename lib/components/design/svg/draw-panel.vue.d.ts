import { MyElement, PointClick } from '..\..\../types/entity';
import { displayPreview } from '..\..\../utils/elementUtil';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
    lastClickPoint: PointClick;
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
    readonly displayPreview: typeof displayPreview;
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
