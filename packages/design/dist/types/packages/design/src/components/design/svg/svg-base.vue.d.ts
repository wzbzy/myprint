import { Line, MyElement, Point, PointClick, PointLabel } from '@myprint/design/types/entity';
import { Path } from 'd3-path';
import { D3DragEvent } from '@myprint/design/types/d3Type';
import { displayDesign } from '@myprint/design/utils/elementUtil';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
    path: Path;
    chartRef: import("vue").Ref<any, any>;
    subject: PointLabel;
    dx: any;
    dy: any;
    startX: any;
    startY: any;
    dragFun: any;
    lastClickPoint: PointClick;
    draggable: () => void;
    dragSubject: (event: any) => PointLabel;
    readonly displayDesign: typeof displayDesign;
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
export default _default;
