'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var toolbar = require('../toolbar/toolbar.vue.js');
var myPanel = require('./my-panel.vue.js');
var settingPanel = require('../../../constants/settingPanel.js');
var historyPanel = require('../handle-panel/history-panel.vue.js');
var index = require('../handle-panel/operation-panel/index.vue.js');
var settingPanel$1 = require('../handle-panel/setting/setting-panel.vue.js');
var config = require('../../../stores/config.js');
var minimapPanel = require('../handle-panel/minimap-panel.vue.js');

const _hoisted_1 = { class: "design-panel-container" };
const _hoisted_2 = { class: "display-flex design-panel-container-height" };
const _hoisted_3 = {
  style: { "background": "white" },
  class: "display-flex-column width-20"
};
const _hoisted_4 = ["onClick"];
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "index",
  props: {
    designProps: {}
  },
  setup(__props) {
    const configStore = config.useConfigStore();
    function clickHandlePanelIcon(key) {
      configStore.settingPanel[key].visible = !configStore.settingPanel[key].visible;
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.createVNode(toolbar.default, { designProps: __props.designProps }, null, 8, ["designProps"]),
        vue.createElementVNode("div", _hoisted_2, [
          vue.createVNode(myPanel.default),
          vue.createElementVNode("div", _hoisted_3, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(vue.unref(settingPanel.handlePanelElementList), (value, key) => {
                return vue.openBlock(), vue.createElementBlock("div", {
                  onClick: ($event) => clickHandlePanelIcon(key),
                  class: vue.normalizeClass(["my-icon handle-panel-icon iconfont", { "handle-panel-icon-active": vue.unref(configStore).settingPanel[key].visible }, value.icon]),
                  key
                }, null, 10, _hoisted_4);
              }),
              128
              /* KEYED_FRAGMENT */
            )),
            vue.createVNode(historyPanel.default),
            vue.createVNode(index.default),
            vue.createVNode(settingPanel$1.default)
          ]),
          vue.createVNode(minimapPanel.default)
        ])
      ]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=index.vue2.js.map
