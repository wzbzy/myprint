import { ClientCmd, ClientResult, Panel, Printer, PrintOptions, PrintResult } from '@myprint/design/types/entity';
export declare const myPrintClientService: {
    print(clientCmd: ClientCmd, panel: Panel): Promise<ClientResult>;
    connectIs(): boolean;
    getPrinterList(): Printer[];
    asyncGetPrinterList(): Promise<Printer[]>;
};
export declare const handleClientResult: (clientCmd: ClientResult, printResult: Function, previewTimeOutMap: any, resolveMap: any) => Blob;
export declare function printResult(taskId: string, result: PrintResult, previewTimeOutMap: any, resolveMap: any): void;
export declare function handleTimeOut(printProps: PrintOptions, previewTimeOutMap: any, resolveMap: any): void;
