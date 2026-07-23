'use strict';

var numberUtil = require('./numberUtil.js');
var elementUtil = require('./elementUtil.js');

exports.displayRatio = 3;
const unitConvert = {
  px: {
    mm: { ratio: exports.displayRatio, compute: "div" },
    cm: { ratio: exports.displayRatio * 10, compute: "div" }
  },
  mm: {
    px: { ratio: exports.displayRatio, compute: "mul" },
    cm: { ratio: 10, compute: "div" }
  }
};
function initDisplayRatio() {
  let mmDiv = document.createElement("div");
  let body = document.querySelector("body");
  mmDiv.id = "mm";
  mmDiv.style.width = "1mm";
  mmDiv.className = "scrollbar-measure";
  body.appendChild(mmDiv);
  let mmDivRect = mmDiv.getBoundingClientRect();
  exports.displayRatio = numberUtil.default.ceil(mmDivRect.width);
  body.removeChild(mmDiv);
  unitConvert.px = {
    mm: { ratio: exports.displayRatio, compute: "div" },
    cm: { ratio: exports.displayRatio * 10, compute: "div" }
  };
  unitConvert.mm = {
    px: { ratio: exports.displayRatio, compute: "mul" },
    cm: { ratio: 10, compute: "div" }
  };
}
function px2unit(val, panel) {
  return unit2unit("px", elementUtil.getCurrentPanelUnit(panel), val);
}
function unit2px(val, panel) {
  if (isNaN(val)) {
    return 0;
  }
  return unit2unit(elementUtil.getCurrentPanelUnit(panel), "px", val);
}
function unit2unit(oldUnit, newUnit, val) {
  if (val == null) {
    return 0;
  }
  if (isNaN(val)) {
    return 0;
  }
  if (oldUnit === newUnit) {
    return val;
  }
  let convert = unitConvert[oldUnit]?.[newUnit];
  if (convert != null) {
    if (convert.compute === "div") {
      return numberUtil.default.div(val, convert.ratio);
    } else {
      return numberUtil.default.mul(val, convert.ratio);
    }
  }
  convert = unitConvert[newUnit]?.[oldUnit];
  if (convert.compute === "div") {
    return numberUtil.default.mul(val, convert.ratio);
  } else {
    return numberUtil.default.div(val, convert.ratio);
  }
}

exports.initDisplayRatio = initDisplayRatio;
exports.px2unit = px2unit;
exports.unit2px = unit2px;
exports.unit2unit = unit2unit;
//# sourceMappingURL=devicePixelRatio.js.map
