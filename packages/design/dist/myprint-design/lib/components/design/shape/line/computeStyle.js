'use strict';

var elementUtil = require('../../../../utils/elementUtil.js');
var numberUtil = require('../../../../utils/numberUtil.js');
var utils = require('../../../../utils/utils.js');

function computedStyle(element, type, lineStyle = "dashed") {
  const style = {};
  const panel = elementUtil.getRecursionParentPanel(element);
  const lineHeight = numberUtil._defaultNum(element.option.lineWidth, 0);
  const color = utils._defaultVal(element.option.color, "#000");
  if (type == "horizontal") {
    style.maxWidth = elementUtil.valueUnit(element.width, panel);
    style.width = elementUtil.valueUnit(element.width, panel);
    style.height = elementUtil.valueUnit(lineHeight, panel);
    style.top = 0;
    style.borderTop = `${elementUtil.valueUnit(lineHeight, panel)} ${lineStyle} ${color}`;
  }
  if (type == "vertical") {
    style.width = elementUtil.valueUnit(lineHeight, panel);
    style.height = elementUtil.valueUnit(element.height, panel);
    style.left = 0;
    style.borderLeft = `${elementUtil.valueUnit(lineHeight, panel)} ${lineStyle} ${color}`;
  }
  if (type == "rect") {
    style.width = elementUtil.valueUnit(element.width, panel);
    style.height = elementUtil.valueUnit(element.height, panel);
    style.left = 0;
    style.border = `${elementUtil.valueUnit(lineHeight, panel)} ${lineStyle} ${color}`;
  }
  if (element.option.background) {
    style.background = element.option.background;
  }
  return style;
}

exports.computedStyle = computedStyle;
//# sourceMappingURL=computeStyle.js.map
