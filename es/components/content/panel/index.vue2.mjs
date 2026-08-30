import { defineComponent, openBlock, createElementBlock, createVNode, createElementVNode, Fragment, renderList, unref, normalizeClass } from 'vue';
import Toolbar from '../toolbar/toolbar.vue.mjs';
import MyPanel from './my-panel.vue.mjs';
import { handlePanelElementList } from '../../../constants/settingPanel.mjs';
import HistoryPanel from '../handle-panel/history-panel.vue.mjs';
import OperationPanel from '../handle-panel/operation-panel/index.vue.mjs';
import SettingPanel from '../handle-panel/setting/setting-panel.vue.mjs';
import { useConfigStore } from '../../../stores/config.mjs';
import MinimapPanel from '../handle-panel/minimap-panel.vue.mjs';

const _hoisted_1 = { class: "design-panel-container" };
const _hoisted_2 = { class: "display-flex design-panel-container-height" };
const _hoisted_3 = {
  style: { "background": "white" },
  class: "display-flex-column width-20"
};
const _hoisted_4 = ["onClick"];
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    designProps: {}
  },
  setup(__props) {
    const configStore = useConfigStore();
    function clickHandlePanelIcon(key) {
      configStore.settingPanel[key].visible = !configStore.settingPanel[key].visible;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(Toolbar, { designProps: __props.designProps }, null, 8, ["designProps"]),
        createElementVNode("div", _hoisted_2, [
          createVNode(MyPanel),
          createElementVNode("div", _hoisted_3, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(unref(handlePanelElementList), (value, key) => {
                return openBlock(), createElementBlock("div", {
                  onClick: ($event) => clickHandlePanelIcon(key),
                  class: normalizeClass(["my-icon handle-panel-icon iconfont", { "handle-panel-icon-active": unref(configStore).settingPanel[key].visible }, value.icon]),
                  key
                }, null, 10, _hoisted_4);
              }),
              128
              /* KEYED_FRAGMENT */
            )),
            createVNode(HistoryPanel),
            createVNode(OperationPanel),
            createVNode(SettingPanel)
          ]),
          createVNode(MinimapPanel)
        ])
      ]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=index.vue2.mjs.map
