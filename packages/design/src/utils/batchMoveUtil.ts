import { ElementOption, MyElement, Panel } from '@myprint/design/types/entity';
import { ActionEnum, record } from '@myprint/design/utils/historyUtil';
import { addElement, initElement, installParentElement, removeElement } from '@myprint/design/utils/elementUtil';
import { unit2px } from '@myprint/design/utils/devicePixelRatio';
import { updatePanel } from '@myprint/design/plugins/moveable/moveable';
import { generateUUID } from '@myprint/design/utils/utils';
import { useAppStoreHook } from '@myprint/design/stores/app';

export type PageContainerKey = 'pageHeader' | 'pageFooter';

// 当前面板选中的可移入元素：正文元素 + 页眉/页脚容器内的子元素（支持跨容器互移），
// 仅排除页眉/页脚容器本身——容器不能再移入容器
export function getSelectedBodyElements(panel: Panel): MyElement[] {
    return useAppStoreHook().currentElement.filter(element => {
        const parent = element.runtimeOption?.parent;
        if (!parent) {
            return false;
        }
        if (element.type == 'PageHeader' || element.type == 'PageFooter') {
            return false;
        }
        return parent === panel || parent.type == 'PageHeader' || parent.type == 'PageFooter';
    });
}

// 模板未带页眉/页脚时按工具箱拖入的同样默认值自动创建（fixed=true 每页重复），
// 几何与挂载方式与 base-widget.vue 的拖入路径保持一致
export function ensureBatchMoveTarget(panel: Panel, key: PageContainerKey): MyElement {
    const existing = panel[key] as unknown as MyElement | undefined;
    if (existing != null) {
        return existing;
    }
    const container = {
        id: generateUUID(),
        // 元素类型全库约定为首字母大写（'PageHeader'/'PageFooter'），key 只是属性名
        type: key == 'pageHeader' ? 'PageHeader' : 'PageFooter',
        option: { fixed: true } as ElementOption,
        height: 30
    } as unknown as MyElement;
    initElement(panel, container, 0);
    container.width = panel.width;
    container.x = 0;
    container.y = key == 'pageHeader' ? 0 : panel.height - container.height;
    container.runtimeOption.width = unit2px(panel.width);
    container.runtimeOption.x = 0;
    container.runtimeOption.y = unit2px(container.y);
    panel[key] = container as any;
    installParentElement(panel, container);
    return container;
}

// 把选中元素移入页眉/页脚容器（容器缺失时自动创建），右键菜单与属性面板按钮共用。
// 来源可以是正文或另一个页眉/页脚容器（跨容器互移）：x/y 统一先换算成页面绝对坐标再对目标取相对
export function moveSelectedElementsTo(panel: Panel, key: PageContainerKey) {
    const target = ensureBatchMoveTarget(panel, key);
    const selectedElements = getSelectedBodyElements(panel);

    if (selectedElements.length < 1) {
        return;
    }

    for (let element of selectedElements) {
        const fromParent = element.runtimeOption.parent!;
        const fromIsContainer = fromParent !== panel;
        // 正文元素的 fixed/displayStrategy 是页面级语义，进容器后无意义；容器间互移保持原状
        // （如 PageNum 的 fixed 让它在打印时提升到页面级，删掉会破坏页码）
        if (!fromIsContainer) {
            delete element.option.fixed;
            delete element.option.displayStrategy;
        }
        removeElement(element);
        // 容器间互移：x/y 本就是相对所在分区的坐标，页眉/页脚是等宽横条，原样照搬即保持相对布局；
        // 此前按画布绝对坐标换算会被分区自身位置带偏（页脚子元素 y+页脚.y 再钳制），
        // 批量互移时全部叠到目标分区底边
        // 正文移入：x/y 是画布绝对坐标，减去分区位置转成相对
        if (!fromIsContainer) {
            element.x = element.x - target.x;
            element.y = element.y - target.y;
        }
        // 钳制只在越界时生效（目标分区比元素小/元素来自更小的分区），正常互移不动原坐标
        element.x = Math.min(Math.max(element.x, 0), Math.max(target.width - element.width, 0));
        element.y = Math.min(Math.max(element.y, 0), Math.max(target.height - element.height, 0));
        addElement(panel, target, element);
    }

    updatePanel();
    record({
        type: 'PANEL',
        action: ActionEnum.BATCH_MOVE,
        elementList: selectedElements
    });
}
