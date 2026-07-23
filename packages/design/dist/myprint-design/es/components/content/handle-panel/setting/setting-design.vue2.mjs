import { defineComponent, openBlock, createElementBlock, createVNode, withCtx, unref } from 'vue';
import { useConfigStore } from '../../../../stores/config.mjs';
import MySwitch from '../../../my/switch/my-switch.vue.mjs';
import MyForm from '../../../my/form/my-form.vue.mjs';
import MyFormItem from '../../../my/form/my-form-item.vue.mjs';
import { i18n } from '../../../../locales/index.mjs';

const _hoisted_1 = { class: "printer-panel" };
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "setting-design",
  setup(__props) {
    const configStore = useConfigStore();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(MyForm, null, {
          default: withCtx(() => [
            createVNode(MyFormItem, {
              "label-width": "100px",
              label: unref(i18n)("common.show.element.design.border")
            }, {
              default: withCtx(() => [
                createVNode(MySwitch, {
                  modelValue: unref(configStore).settingDesign.showElementDesignBorderIs,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(configStore).settingDesign.showElementDesignBorderIs = $event),
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

export { _sfc_main as default };
//# sourceMappingURL=setting-design.vue2.mjs.map
