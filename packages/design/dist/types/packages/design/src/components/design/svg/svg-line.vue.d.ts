import * as d3Path from 'd3-path';
import { MyElement, PointLabel } from '@myprint/design/types/entity';
import { D3DragEvent } from '@myprint/design/types/d3Type';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    element: {
        type: any;
        required: false;
        default: () => MyElement;
    };
}>, {
    props: any;
    path: d3Path.Path;
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
    draw: () => d3Path.Path;
    initPoint: () => void;
    dragIng: (subject: PointLabel, event: D3DragEvent, dx: number, dy: number) => void;
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
                controlLine: import("@myprint/design/types/entity").Line[];
                centerPoint: import("@myprint/design/types/entity").Point;
                controlPointScale: PointLabel;
                controlPointResize: PointLabel;
                controlPointEndDragStart: import("@myprint/design/types/entity").Point;
                allPoint: PointLabel[];
                virtualPoint: PointLabel[];
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
            default: (_subject: PointLabel, _event: D3DragEvent, _dx: number, _dy: number) => void;
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
        path: d3Path.Path;
        chartRef: import("vue").Ref<any, any>;
        subject: PointLabel;
        dx: any;
        dy: any;
        startX: any;
        startY: any;
        dragFun: any;
        lastClickPoint: import("@myprint/design/types/entity").PointClick;
        draggable: () => void;
        dragSubject: (event: any) => PointLabel;
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
                centerPoint: import("@myprint/design/types/entity").Point;
                controlPointScale: PointLabel;
                controlPointResize: PointLabel;
                controlPointEndDragStart: import("@myprint/design/types/entity").Point;
                allPoint: PointLabel[];
                virtualPoint: PointLabel[];
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
            default: (_subject: PointLabel, _event: D3DragEvent, _dx: number, _dy: number) => void;
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
