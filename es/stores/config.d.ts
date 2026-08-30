export declare const useConfigStore: import("pinia").StoreDefinition<"myPrintConfig", {
    init: boolean;
    printer: any;
    defaultPrinter: any;
    clientProtocol: string;
    clientUrl: string;
    autoConnect: number;
    settingPanel: any;
    settingDesign: {
        autoAlign: number;
        showElementDesignBorderIs: number;
    };
}, {}, {
    initConfig(): void;
    updateConfig(key: string, value: string): void;
    postConfig(): void;
}>;
