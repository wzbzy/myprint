import { App } from 'vue-demi';
export declare function installMessage(app: App<any>): void;
export declare const MyMessage: {
    success(msg: string): void;
    error(msg: string): void;
};
