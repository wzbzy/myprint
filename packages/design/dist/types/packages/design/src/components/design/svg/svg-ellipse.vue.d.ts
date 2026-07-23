import { MyElement, Point } from '@myprint/design/types/entity';
import { BaseType, Selection } from 'd3-selection';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
    draw: (chart: Selection<BaseType, any, BaseType, any>) => void;
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
                controlLine: import("@myprint/design/types/entity").Line[];
                centerPoint: Point;
                controlPointScale: import("@myprint/design/types/entity").PointLabel;
                controlPointResize: import("@myprint/design/types/entity").PointLabel;
                controlPointEndDragStart: Point;
                allPoint: import("@myprint/design/types/entity").PointLabel[];
                virtualPoint: import("@myprint/design/types/entity").PointLabel[];
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
            default: (_subject: import("@myprint/design/types/entity").PointLabel, _event: import("../../../types/d3Type").D3DragEvent, _dx: number, _dy: number) => void;
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
        subject: import("@myprint/design/types/entity").PointLabel;
        dx: any;
        dy: any;
        startX: any;
        startY: any;
        dragFun: any;
        lastClickPoint: import("@myprint/design/types/entity").PointClick;
        draggable: () => void;
        dragSubject: (event: any) => import("@myprint/design/types/entity").PointLabel;
        readonly displayDesign: typeof import("@myprint/design/utils/elementUtil").displayDesign;
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
                controlLine: import("@myprint/design/types/entity").Line[];
                centerPoint: Point;
                controlPointScale: import("@myprint/design/types/entity").PointLabel;
                controlPointResize: import("@myprint/design/types/entity").PointLabel;
                controlPointEndDragStart: Point;
                allPoint: import("@myprint/design/types/entity").PointLabel[];
                virtualPoint: import("@myprint/design/types/entity").PointLabel[];
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
            default: (_subject: import("@myprint/design/types/entity").PointLabel, _event: import("../../../types/d3Type").D3DragEvent, _dx: number, _dy: number) => void;
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
export default _default;
