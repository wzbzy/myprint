import { defineComponent, openBlock, createBlock, unref, withCtx, createElementVNode, toDisplayString, createElementBlock, Fragment, renderList, normalizeClass, createVNode, createCommentVNode } from 'vue';
import { reactive, ref } from 'vue-demi';
import SettingPrinter from './setting-printer.vue.mjs';
import SettingAbout from './setting-about.vue.mjs';
import { useConfigStore } from '../../../../stores/config.mjs';
import SettingDesign from './setting-design.vue.mjs';
import MyDialog from '../../../my/dialog/my-dialog.vue.mjs';
import MyIcon from '../../../my/icon/my-icon.vue.mjs';
import CloseBold from '../../../my/icon/icons/CloseBold.vue.mjs';
import { i18n } from '../../../../locales/index.mjs';

const _hoisted_1 = { class: "setting-body display-flex" };
const _hoisted_2 = { class: "setting-menu" };
const _hoisted_3 = { class: "setting-menu-title" };
const _hoisted_4 = ["onClick"];
const _hoisted_5 = { class: "setting-item-item-title" };
const _hoisted_6 = { class: "setting-panel" };
const _hoisted_7 = { class: "setting-panel-header display-flex" };
const _hoisted_8 = { class: "setting-panel-header-title" };
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "setting-panel",
  setup(__props) {
    const configStore = useConfigStore();
    const settingItemList = reactive([{
      title: "\u8BBE\u8BA1\u9762\u677F",
      type: "DESIGN",
      active: true
    }, {
      title: "\u6253\u5370\u673A\u8BBE\u7F6E",
      type: "PRINTER",
      active: false
    }, {
      title: "\u5173\u4E8E",
      type: "ABOUT",
      active: false
    }]);
    const currentSettingItem = ref(settingItemList[0]);
    function clickItem(item) {
      currentSettingItem.value.active = false;
      currentSettingItem.value = item;
      currentSettingItem.value.active = true;
    }
    function clickClose() {
      configStore.settingPanel.setting.visible = false;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MyDialog, {
        modelValue: unref(configStore).settingPanel.setting.visible,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(configStore).settingPanel.setting.visible = $event),
        class: "setting-dialog",
        "show-header": false,
        width: "800"
      }, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            createElementVNode("div", _hoisted_2, [
              createElementVNode(
                "div",
                _hoisted_3,
                toDisplayString(unref(i18n)("common.setting")),
                1
                /* TEXT */
              ),
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(unref(settingItemList), (item, index) => {
                  return openBlock(), createElementBlock("div", {
                    class: normalizeClass([[{ "setting-item-item-active": item.active }], "display-flex setting-item-item"]),
                    onClick: ($event) => clickItem(item),
                    key: index
                  }, [
                    createElementVNode(
                      "div",
                      _hoisted_5,
                      toDisplayString(item.title),
                      1
                      /* TEXT */
                    )
                  ], 10, _hoisted_4);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            createElementVNode("div", _hoisted_6, [
              createElementVNode("div", _hoisted_7, [
                createElementVNode(
                  "div",
                  _hoisted_8,
                  toDisplayString(unref(currentSettingItem).title),
                  1
                  /* TEXT */
                ),
                createVNode(MyIcon, {
                  color: "#666666",
                  size: "20",
                  onClick: clickClose,
                  class: "cursor-pointer"
                }, {
                  default: withCtx(() => [
                    createVNode(CloseBold)
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              unref(currentSettingItem).type == "DESIGN" ? (openBlock(), createBlock(SettingDesign, { key: 0 })) : createCommentVNode("v-if", true),
              unref(currentSettingItem).type == "PRINTER" ? (openBlock(), createBlock(SettingPrinter, { key: 1 })) : createCommentVNode("v-if", true),
              unref(currentSettingItem).type == "ABOUT" ? (openBlock(), createBlock(SettingAbout, { key: 2 })) : createCommentVNode("v-if", true)
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=setting-panel.vue2.mjs.map
