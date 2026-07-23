import { h, render } from 'vue-demi';
import './components/content/index.mjs';
import DesignPanel from './components/content/index.vue.mjs';

function mountDesign(app, props, element) {
  const printNode = h(DesignPanel, props == null ? {} : props);
  let elementTmp = element;
  if (elementTmp == null) {
    elementTmp = document.createElement("div");
  }
  printNode.appContext = app._context;
  render(printNode, elementTmp);
  if (element == null) {
    document.body.appendChild(elementTmp.firstElementChild);
  }
}

export { mountDesign };
//# sourceMappingURL=design.mjs.map
