import { MyElement } from '../types/entity';
import * as mittInit from 'mitt';
import { EventTypes } from '../types/eventType';
export declare const mitt: mittInit.Emitter<EventTypes>;
export declare function sortColumn(myElement: MyElement, baseColIndex: number, row: number, sourceIndex: number, targetIndex: number): void;
export declare function click(ev: any, realFun: () => void): void;
export declare function parse<T>(str: string, target: T): T;
export declare function to<T>(source: any, target: T): T;
export declare function trend0(num: number): number;
export declare function trend1(num: number): number;
export declare function getRatio(): number;
export declare function mm2pxNoScale(mm: number): number;
export declare function stringify(obj: any, ...ignore: any[]): string;
export declare function getCollapsePanelZIndex(zIndex: number): number;
export declare function rgbaToHex(rgba: string): string;
export declare function printCssStyle(): any;
export declare function download(blob: Blob, fileName: string): void;
export declare function downloadImg2Base64(url: string): Promise<unknown>;
export declare function isBlob(obj: any): boolean;
export declare function isArrayBuffer(obj: any): boolean;
export declare function isUint8Array(obj: any): boolean;
export declare function arrayBuffer2Base64(buffer: ArrayBuffer): string;
export declare function uint8Array2Base64(bytes: Uint8Array): string;
export declare function blob2Base64(blob: Blob): Promise<string>;
export declare function getFontFamilyName(val: string): string;
/**
 * 路径压缩
 * @param points
 * @param epsilon
 */
export declare function douglasPeucker(points: any, epsilon: any): any;
export declare function isFunction(func: any): boolean;
export declare function _defaultVal(val: any, _default: any): any;
export declare function n2br(val: any): any;
export declare function br2n(val: any): any;
export declare function replaceSpacesOutsideHTMLTags(input: any): any;
/**
 * 使用requestAnimationFrame实现的延迟setTimeout或间隔setInterval调用函数。
 *
 * @param fn 要执行的函数。
 * @param delay 延迟的时间，单位为ms，默认为0，表示不延迟立即执行。
 * @param interval 是否间隔执行，如果为true，则在首次执行后，以delay为间隔持续执行。
 * @returns 返回一个对象，包含一个id属性，该id为requestAnimationFrame的调用ID，可用于取消动画帧。
 */
export declare function rafTimeout(fn: Function, delay?: number, interval?: boolean): object;
/**
 * 用于取消 rafTimeout 函数
 *
 * @param raf - 包含请求动画帧ID的对象。该ID是由requestAnimationFrame返回的。
 *              该函数旨在取消之前通过requestAnimationFrame请求的动画帧。
 *              如果传入的raf对象或其id无效，则会打印警告。
 */
export declare function cancelRaf(raf: {
    id: number;
}): void;
export declare function generateUUID(): string;
