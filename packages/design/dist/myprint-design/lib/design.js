'use strict';

var vueDemi = require('vue-demi');
require('./components/content/index.js');
var index = require('./components/content/index.vue.js');

function mountDesign(app, props, element) {
  const printNode = vueDemi.h(index.default, props == null ? {} : props);
  let elementTmp = element;
  if (elementTmp == null) {
    elementTmp = document.createElement("div");
  }
  printNode.appContext = app._context;
  vueDemi.render(printNode, elementTmp);
  if (element == null) {
    document.body.appendChild(elementTmp.firstElementChild);
  }
}

exports.mountDesign = mountDesign;
//# sourceMappingURL=design.js.map
