import { getRecursionParentPanel, valueUnit } from '../../../../utils/elementUtil.mjs';
import { _defaultNum } from '../../../../utils/numberUtil.mjs';
import { _defaultVal } from '../../../../utils/utils.mjs';

function computedStyle(element, type, lineStyle = "dashed") {
  const style = {};
  const panel = getRecursionParentPanel(element);
  const lineHeight = _defaultNum(element.option.lineWidth, 0);
  const color = _defaultVal(element.option.color, "#000");
  if (type == "horizontal") {
    style.maxWidth = valueUnit(element.width, panel);
    style.width = valueUnit(element.width, panel);
    style.height = valueUnit(lineHeight, panel);
    style.top = 0;
    style.borderTop = `${valueUnit(lineHeight, panel)} ${lineStyle} ${color}`;
  }
  if (type == "vertical") {
    style.width = valueUnit(lineHeight, panel);
    style.height = valueUnit(element.height, panel);
    style.left = 0;
    style.borderLeft = `${valueUnit(lineHeight, panel)} ${lineStyle} ${color}`;
  }
  if (type == "rect") {
    style.width = valueUnit(element.width, panel);
    style.height = valueUnit(element.height, panel);
    style.left = 0;
    style.border = `${valueUnit(lineHeight, panel)} ${lineStyle} ${color}`;
  }
  if (element.option.background) {
    style.background = element.option.background;
  }
  return style;
}

export { computedStyle };
//# sourceMappingURL=computeStyle.mjs.map
