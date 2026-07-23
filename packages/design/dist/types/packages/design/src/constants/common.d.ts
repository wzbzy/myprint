import { Container, DownList, ElementOption, elementStatus, elementType, MyElement } from '@myprint/design/types/entity';
import { PropType } from 'vue-demi';
export declare const defaultElement: MyElement[];
export declare const canMoveStatusList: string[];
export declare const fontMap: {
    heiti: string;
    SimSun: string;
    kaiti: string;
    FZShuTi: string;
    NSimSun: string;
    DengXian: string;
};
export declare const fontList: DownList[][];
export declare const fontSizeList: DownList[][];
export declare const definePropType: <T>(val: any) => PropType<T>;
export declare type elementSettingType = keyof ElementOption | (keyof Container) | 'contentType' | 'data' | 'label' | 'common' | 'clearDrawPanel' | 'tableBodyHeightType' | 'tablePageHead' | 'tableHeightAttr';
export declare function getElementSetting(type: elementType): elementSettingType[];
export declare function hasStyle(type: elementType, style: elementSettingType): boolean;
export declare function hasStyleByTypeList(typeList: elementType[], style: elementSettingType): boolean;
export declare const textContentTypes: {
    label: string;
    value: string;
}[];
export declare const barcodeTypes: {
    label: string;
    value: string;
    eg: string;
}[];
export declare const handleConstants: any;
export declare type handleConstantsType = keyof typeof handleConstants;
export declare const cursorStyleArray: string[];
export declare const elementTypeLineList: Array<elementType>;
export declare const elementTypeContainerList: Array<elementType>;
export declare const elementHandleEditStatusList: Array<elementStatus>;
export declare const elementHandleHandleStatusList: Array<elementStatus>;
export declare const elementHandleStatusList: Array<elementStatus>;
export declare const noCopyElementTypeList: Array<elementType>;
export declare const displayStrategyList: any[];
export declare const statisticsTypeList: any[];
export declare const chooseImgTypeList: DownList[];
export declare const tableBodyHeightTypeList: DownList[];
export declare const pageUnitList: {
    label: string;
    value: string;
}[][];
export declare const fontSizeUnitList: {
    label: string;
    value: string;
}[][];
export declare const clientProtocolList: {
    label: string;
    value: string;
}[];
export declare const pageSizeList: {
    label: string;
    value: string;
    width: number;
    height: number;
}[];
export declare const dottedStyleList: {
    label: string;
    value: string;
}[];
export declare const qrCodeErrorCorrectionLevel: {
    label: string;
    value: string;
}[];
