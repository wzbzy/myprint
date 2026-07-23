import MathCalc from './numberUtil.mjs';
import { getCurrentPanelUnit } from './elementUtil.mjs';

let displayRatio = 3;
const unitConvert = {
  px: {
    mm: { ratio: displayRatio, compute: "div" },
    cm: { ratio: displayRatio * 10, compute: "div" }
  },
  mm: {
    px: { ratio: displayRatio, compute: "mul" },
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
  displayRatio = MathCalc.ceil(mmDivRect.width);
  body.removeChild(mmDiv);
  unitConvert.px = {
    mm: { ratio: displayRatio, compute: "div" },
    cm: { ratio: displayRatio * 10, compute: "div" }
  };
  unitConvert.mm = {
    px: { ratio: displayRatio, compute: "mul" },
    cm: { ratio: 10, compute: "div" }
  };
}
function px2unit(val, panel) {
  return unit2unit("px", getCurrentPanelUnit(panel), val);
}
function unit2px(val, panel) {
  if (isNaN(val)) {
    return 0;
  }
  return unit2unit(getCurrentPanelUnit(panel), "px", val);
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
      return MathCalc.div(val, convert.ratio);
    } else {
      return MathCalc.mul(val, convert.ratio);
    }
  }
  convert = unitConvert[newUnit]?.[oldUnit];
  if (convert.compute === "div") {
    return MathCalc.mul(val, convert.ratio);
  } else {
    return MathCalc.div(val, convert.ratio);
  }
}

export { displayRatio, initDisplayRatio, px2unit, unit2px, unit2unit };
//# sourceMappingURL=devicePixelRatio.mjs.map
