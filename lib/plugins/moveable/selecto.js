'use strict';

var Selecto = require('selecto');
var vueDemi = require('vue-demi');

const selecto = vueDemi.ref();
function newSelecto() {
  selecto.value = null;
}
function initSelecto() {
  if (!selecto.value) {
    selecto.value = new Selecto({
      // The container to add a selection element
      container: document.querySelector(".design-content-scroll"),
      // Selecto's root container (No transformed container. (default: null)
      rootContainer: null,
      // The area to drag selection element (default: container)
      // dragContainer: Element,
      // Targets to select. You can register a queryselector or an Element.
      // selectableTargets: [".design-select"],
      // Whether to select by click (default: true)
      selectByClick: true,
      // Whether to select from the target inside (default: true)
      selectFromInside: false,
      // After the select, whether to select the next target with the selected target (deselected if the target is selected again).
      // continueSelect: false,
      // Determines which key to continue selecting the next target via keydown and keyup.
      // toggleContinueSelect: "shift",
      // The container for keydown and keyup events
      // keyContainer: window,
      // The rate at which the target overlaps the drag area to be selected. (default: 100)
      hitRate: 0,
      ratio: 0
    });
  }
}

exports.initSelecto = initSelecto;
exports.newSelecto = newSelecto;
exports.selecto = selecto;
//# sourceMappingURL=selecto.js.map
