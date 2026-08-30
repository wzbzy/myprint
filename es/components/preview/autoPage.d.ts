import { Ref } from 'vue-demi';
import { Panel, PreviewContainerWrapper } from '..\../types/entity';
export declare function autoPage(previewEl: Ref<HTMLDivElement[] | undefined>, pageList: Array<PreviewContainerWrapper>, panel: Panel, previewDataList?: any[]): Promise<void>;
