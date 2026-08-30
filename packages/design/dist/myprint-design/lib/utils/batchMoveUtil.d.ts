import { MyElement, Panel } from '../types/entity';
export declare type PageContainerKey = 'pageHeader' | 'pageFooter';
export declare function getSelectedBodyElements(panel: Panel): MyElement[];
export declare function ensureBatchMoveTarget(panel: Panel, key: PageContainerKey): MyElement;
export declare function moveSelectedElementsTo(panel: Panel, key: PageContainerKey): void;
