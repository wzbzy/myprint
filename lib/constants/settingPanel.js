'use strict';

var vueDemi = require('vue-demi');
var index = require('../locales/index.js');

const handlePanelElementList = vueDemi.reactive({
  "setting": {
    icon: "icon-setting",
    label: index.i18n("common.setting"),
    visible: false
  },
  "operation": {
    icon: "icon-operation",
    label: index.i18n("common.attr"),
    visible: false
  },
  "history": {
    icon: "icon-history",
    label: index.i18n("common.operation.history"),
    visible: false
  }
  // 'elementList': {
  //     icon: 'icon-element-list',
  //     right: 20, y: 660, width: 200, height: 200,
  //     label: '历史操作',
  //     visible: false,
  // } as HandlePanel
});
const miniMap = {
  // icon: 'icon-history',
  label: index.i18n("common.mini.map"),
  visible: false
};

exports.handlePanelElementList = handlePanelElementList;
exports.miniMap = miniMap;
//# sourceMappingURL=settingPanel.js.map
