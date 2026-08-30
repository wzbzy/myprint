import { record, ActionEnum } from './historyUtil.mjs';
import { initElement, installParentElement, removeElement, addElement } from './elementUtil.mjs';
import { unit2px } from './devicePixelRatio.mjs';
import { updatePanel } from '../plugins/moveable/moveable.mjs';
import { generateUUID } from './utils.mjs';
import { useAppStoreHook } from '../stores/app.mjs';

function getSelectedBodyElements(panel) {
  return useAppStoreHook().currentElement.filter(
    (element) => element.runtimeOption?.parent === panel && element.type != "PageHeader" && element.type != "PageFooter"
  );
}
function ensureBatchMoveTarget(panel, key) {
  const existing = panel[key];
  if (existing != null) {
    return existing;
  }
  const container = {
    id: generateUUID(),
    // 元素类型全库约定为首字母大写（'PageHeader'/'PageFooter'），key 只是属性名
    type: key == "pageHeader" ? "PageHeader" : "PageFooter",
    option: { fixed: true },
    height: 30
  };
  initElement(panel, container, 0);
  container.width = panel.width;
  container.x = 0;
  container.y = key == "pageHeader" ? 0 : panel.height - container.height;
  container.runtimeOption.width = unit2px(panel.width);
  container.runtimeOption.x = 0;
  container.runtimeOption.y = unit2px(container.y);
  panel[key] = container;
  installParentElement(panel, container);
  return container;
}
function moveSelectedElementsTo(panel, key) {
  const target = ensureBatchMoveTarget(panel, key);
  const selectedElements = getSelectedBodyElements(panel);
  if (selectedElements.length < 1) {
    return;
  }
  for (let element of selectedElements) {
    delete element.option.fixed;
    delete element.option.displayStrategy;
    removeElement(element);
    element.x -= target.x;
    element.y -= target.y;
    element.x = Math.min(Math.max(element.x, 0), Math.max(target.width - element.width, 0));
    element.y = Math.min(Math.max(element.y, 0), Math.max(target.height - element.height, 0));
    addElement(panel, target, element);
  }
  updatePanel();
  record({
    type: "PANEL",
    action: ActionEnum.BATCH_MOVE,
    elementList: selectedElements
  });
}

export { ensureBatchMoveTarget, getSelectedBodyElements, moveSelectedElementsTo };
//# sourceMappingURL=batchMoveUtil.mjs.map
