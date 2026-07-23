import { PageUnit, Panel } from '@myprint/design/types/entity';
export declare let displayRatio: number;
export declare function initDisplayRatio(): void;
export declare function px2unit(val: number, panel?: Panel): number;
export declare function unit2px(val: number | undefined, panel?: Panel): number;
export declare function unit2unit(oldUnit: PageUnit, newUnit: PageUnit, val: number | undefined): number;
