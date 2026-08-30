import { ClientResult, Printer } from '../types/entity';
export declare const useSocket: import("pinia").StoreDefinition<"myPrintSocket", {
    socket: any;
    timer: any;
    connect: boolean;
    printerList: Printer[];
    resolveMap: {};
}, {}, {
    INIT_SOCKET(): void;
    SET_PRINTER_LIST(list: Printer[]): void;
    SEND(taskId: string, msg: any): Promise<ClientResult>;
}>;
