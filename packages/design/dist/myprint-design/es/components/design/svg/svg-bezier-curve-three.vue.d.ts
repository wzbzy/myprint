import * as d3Path from 'd3-path';
import { Line, MyElement, Point, PointLabel } from '..\..\../types/entity';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    element: {
        type: any;
        required: false;
        default: () => MyElement;
    };
}>, {
    props: any;
    path: d3Path.Path;
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
    draw: () => d3Path.Path;
    initPoint: () => void;
    dragStart: (subject: PointLabel) => void;
    dragIng: (subject: PointLabel, event: any, dx: any, dy: any) => void;
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
                controlLine: Line[];
                centerPoint: Point;
                controlPointScale: PointLabel;
                controlPointResize: PointLabel;
                controlPointEndDragStart: Point;
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
            default: (_subject: PointLabel, _event: import("../../../types/d3Type").D3DragEvent, _dx: number, _dy: number) => void;
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
        lastClickPoint: import("..\..\../types/entity").PointClick;
        draggable: () => void;
        dragSubject: (event: any) => PointLabel;
        readonly displayDesign: typeof import("..\..\../utils/elementUtil").displayDesign;
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
                controlLine: Line[];
                centerPoint: Point;
                controlPointScale: PointLabel;
                controlPointResize: PointLabel;
                controlPointEndDragStart: Point;
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
            default: (_subject: PointLabel, _event: import("../../../types/d3Type").D3DragEvent, _dx: number, _dy: number) => void;
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
