'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var config = require('../../../../stores/config.js');
var mySwitch = require('../../../my/switch/my-switch.vue.js');
var myForm = require('../../../my/form/my-form.vue.js');
var myFormItem = require('../../../my/form/my-form-item.vue.js');
var index = require('../../../../locales/index.js');

const _hoisted_1 = { class: "printer-panel" };
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "setting-design",
  setup(__props) {
    const configStore = config.useConfigStore();
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.createVNode(myForm.default, null, {
          default: vue.withCtx(() => [
            vue.createVNode(myFormItem.default, {
              "label-width": "100px",
              label: vue.unref(index.i18n)("common.show.element.design.border")
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(mySwitch.default, {
                  modelValue: vue.unref(configStore).settingDesign.showElementDesignBorderIs,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(configStore).settingDesign.showElementDesignBorderIs = $event),
                  class: "ml-2"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["label"])
          ]),
          _: 1
          /* STABLE */
        })
      ]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=setting-design.vue2.js.map
