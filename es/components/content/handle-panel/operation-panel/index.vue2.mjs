import { defineComponent, openBlock, createBlock, unref, withCtx, createTextVNode, toDisplayString } from 'vue';
import { handlePanelElementList } from '../../../../constants/settingPanel.mjs';
import MyCollapse from '../../../my/collapse/my-collapse.vue.mjs';
import MyElementSetting from './my-element-setting.vue.mjs';
import MyPanelSetting from './my-panel-setting.vue.mjs';
import { elementTypeFormat } from '../../../../types/entity.mjs';
import { computed } from 'vue-demi';
import { useConfigStore } from '../../../../stores/config.mjs';
import { useAppStoreHook } from '../../../../stores/app.mjs';

var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const appStore = useAppStoreHook();
    const configStore = useConfigStore();
    const title = computed(() => {
      if (appStore.currentElement.length > 0) {
        const current = appStore.currentElement[0];
        let type = elementTypeFormat[current.type];
        if (current.label) {
          type = type + ":" + current.label;
        }
        return type;
      }
      return "\u9762\u677F";
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MyCollapse, {
        modelValue: unref(configStore).settingPanel.operation.visible,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(configStore).settingPanel.operation.visible = $event),
        element: unref(handlePanelElementList).operation,
        position: unref(configStore).settingPanel.operation
      }, {
        head: withCtx(() => [
          createTextVNode(
            " | " + toDisplayString(unref(title)),
            1
            /* TEXT */
          )
        ]),
        default: withCtx(() => [
          unref(appStore).currentElement.length > 0 ? (openBlock(), createBlock(MyElementSetting, {
            key: 0,
            class: "advanced-config"
          })) : (openBlock(), createBlock(MyPanelSetting, {
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

export { _sfc_main as default };
//# sourceMappingURL=index.vue2.mjs.map
