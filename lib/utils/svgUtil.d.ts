import { Line } from '../types/entity';
export declare function computeLineAngle(lineA: Line, lineB: Line): number;
export declare function rad2Ang(angle: number): number;
export declare function rotatePoint(centerX: any, centerY: any, x: any, y: any, angle: any): {
    x: number;
    y: any;
};
export declare function dist(p: any, m: any): number;
export declare function updateSvg(chart: any, svgOptions: any, draw: any): void;
