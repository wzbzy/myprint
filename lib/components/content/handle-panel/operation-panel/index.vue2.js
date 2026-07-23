'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var settingPanel = require('../../../../constants/settingPanel.js');
var myCollapse = require('../../../my/collapse/my-collapse.vue.js');
var myElementSetting = require('./my-element-setting.vue.js');
var myPanelSetting = require('./my-panel-setting.vue.js');
var entity = require('../../../../types/entity.js');
var vueDemi = require('vue-demi');
var config = require('../../../../stores/config.js');
var app = require('../../../../stores/app.js');

var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "index",
  setup(__props) {
    const appStore = app.useAppStoreHook();
    const configStore = config.useConfigStore();
    const title = vueDemi.computed(() => {
      if (appStore.currentElement.length > 0) {
        const current = appStore.currentElement[0];
        let type = entity.elementTypeFormat[current.type];
        if (current.label) {
          type = type + ":" + current.label;
        }
        return type;
      }
      return "\u9762\u677F";
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(myCollapse.default, {
        modelValue: vue.unref(configStore).settingPanel.operation.visible,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(configStore).settingPanel.operation.visible = $event),
        element: vue.unref(settingPanel.handlePanelElementList).operation,
        position: vue.unref(configStore).settingPanel.operation
      }, {
        head: vue.withCtx(() => [
          vue.createTextVNode(
            " | " + vue.toDisplayString(vue.unref(title)),
            1
            /* TEXT */
          )
        ]),
        default: vue.withCtx(() => [
          vue.unref(appStore).currentElement.length > 0 ? (vue.openBlock(), vue.createBlock(myElementSetting.default, {
            key: 0,
            class: "advanced-config"
          })) : (vue.openBlock(), vue.createBlock(myPanelSetting.default, {
            key: 1,
            class: "advanced-config"
          }))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "element", "position"]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=index.vue2.js.map
