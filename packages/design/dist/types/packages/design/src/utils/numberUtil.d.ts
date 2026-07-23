declare const MathCalc: {
    toFixed(x: number, scale?: number): number;
    ceil(x: number, scale?: number): number;
    /**
     ** 加法函数，用来得到精确的加法结果
     ** 说明：javascript 的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
     ** 调用：sum(arg1,arg2)
     ** 返回值：arg1 加上 arg2 的精确结果
     **/
    sumScale(arg1?: number, arg2?: number, scale?: number): any;
    sum(arg1?: number, arg2?: number): number;
    /**
     ** 减法函数，用来得到精确的减法结果
     ** 说明：javascript 的减法结果会有误差，在两个浮点 g2)会比较明显。这个函数返回较为精确的减法结果。
     ** 调用：sub(arg1,arg2)
     ** 返回值：arg1 加上 arg2 的精确结果
     **/
    subScale(arg1?: number, arg2?: number, scale?: number): any;
    sub(arg1: number, arg2: number): number;
    /**
     ** 乘法函数，用来得到精确的乘法结果
     ** 说明：javascript 的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
     ** 调用：mul(arg1,arg2)
     ** 返回值：arg1 乘以 arg2 的精确结果
     **/
    mul(arg1: number, arg2: number, scale?: number): any;
    /**
     ** 除法函数，用来得到精确的除法结果
     ** 说明：javascript 的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。
     ** 调用：div(arg1,arg2)
     ** 返回值：arg1 除以 arg2 的精确结果
     **/
    div(arg1: number, arg2: number, scale?: number): any;
    limitMin(val: number, min: number): number;
    isNumber(value: any): boolean;
};
export default MathCalc;
export declare function _default<T = any>(val: T, _default: T): T;
export declare function _defaultNum(val: number, _default: number): number;
