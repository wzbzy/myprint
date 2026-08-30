'use strict';

var historyUtil = require('./historyUtil.js');
var elementUtil = require('./elementUtil.js');
var devicePixelRatio = require('./devicePixelRatio.js');
var moveable = require('../plugins/moveable/moveable.js');
var utils = require('./utils.js');
var app = require('../stores/app.js');

function getSelectedBodyElements(panel) {
  return app.useAppStoreHook().currentElement.filter((element) => {
    const parent = element.runtimeOption?.parent;
    if (!parent) {
      return false;
    }
    if (element.type == "PageHeader" || element.type == "PageFooter") {
      return false;
    }
    return parent === panel || parent.type == "PageHeader" || parent.type == "PageFooter";
  });
}
function ensureBatchMoveTarget(panel, key) {
  const existing = panel[key];
  if (existing != null) {
    return existing;
  }
  const container = {
    id: utils.generateUUID(),
    // 元素类型全库约定为首字母大写（'PageHeader'/'PageFooter'），key 只是属性名
    type: key == "pageHeader" ? "PageHeader" : "PageFooter",
    option: { fixed: true },
    height: 30
  };
  elementUtil.initElement(panel, container, 0);
  container.width = panel.width;
  container.x = 0;
  container.y = key == "pageHeader" ? 0 : panel.height - container.height;
  container.runtimeOption.width = devicePixelRatio.unit2px(panel.width);
  container.runtimeOption.x = 0;
  container.runtimeOption.y = devicePixelRatio.unit2px(container.y);
  panel[key] = container;
  elementUtil.installParentElement(panel, container);
  return container;
}
function moveSelectedElementsTo(panel, key) {
  const target = ensureBatchMoveTarget(panel, key);
  const selectedElements = getSelectedBodyElements(panel);
  if (selectedElements.length < 1) {
    return;
  }
  for (let element of selectedElements) {
    const fromParent = element.runtimeOption.parent;
    const fromIsContainer = fromParent !== panel;
    if (!fromIsContainer) {
      delete element.option.fixed;
      delete element.option.displayStrategy;
    }
    elementUtil.removeElement(element);
    const absoluteX = element.x + (fromIsContainer ? fromParent.x : 0);
    const absoluteY = element.y + (fromIsContainer ? fromParent.y : 0);
    element.x = absoluteX - target.x;
    element.y = absoluteY - target.y;
    element.x = Math.min(Math.max(element.x, 0), Math.max(target.width - element.width, 0));
    element.y = Math.min(Math.max(element.y, 0), Math.max(target.height - element.height, 0));
    elementUtil.addElement(panel, target, element);
  }
  moveable.updatePanel();
  historyUtil.record({
    type: "PANEL",
    action: historyUtil.ActionEnum.BATCH_MOVE,
    elementList: selectedElements
  });
}

exports.ensureBatchMoveTarget = ensureBatchMoveTarget;
exports.getSelectedBodyElements = getSelectedBodyElements;
exports.moveSelectedElementsTo = moveSelectedElementsTo;
//# sourceMappingURL=batchMoveUtil.js.map
