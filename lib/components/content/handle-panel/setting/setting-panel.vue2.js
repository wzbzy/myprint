'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vueDemi = require('vue-demi');
var settingPrinter = require('./setting-printer.vue.js');
var settingAbout = require('./setting-about.vue.js');
var config = require('../../../../stores/config.js');
var settingDesign = require('./setting-design.vue.js');
var myDialog = require('../../../my/dialog/my-dialog.vue.js');
var myIcon = require('../../../my/icon/my-icon.vue.js');
var CloseBold = require('../../../my/icon/icons/CloseBold.vue.js');
var index = require('../../../../locales/index.js');

const _hoisted_1 = { class: "setting-body display-flex" };
const _hoisted_2 = { class: "setting-menu" };
const _hoisted_3 = { class: "setting-menu-title" };
const _hoisted_4 = ["onClick"];
const _hoisted_5 = { class: "setting-item-item-title" };
const _hoisted_6 = { class: "setting-panel" };
const _hoisted_7 = { class: "setting-panel-header display-flex" };
const _hoisted_8 = { class: "setting-panel-header-title" };
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "setting-panel",
  setup(__props) {
    const configStore = config.useConfigStore();
    const settingItemList = vueDemi.reactive([{
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
    const currentSettingItem = vueDemi.ref(settingItemList[0]);
    function clickItem(item) {
      currentSettingItem.value.active = false;
      currentSettingItem.value = item;
      currentSettingItem.value.active = true;
    }
    function clickClose() {
      configStore.settingPanel.setting.visible = false;
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(myDialog.default, {
        modelValue: vue.unref(configStore).settingPanel.setting.visible,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(configStore).settingPanel.setting.visible = $event),
        class: "setting-dialog",
        "show-header": false,
        width: "800"
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("div", _hoisted_1, [
            vue.createElementVNode("div", _hoisted_2, [
              vue.createElementVNode(
                "div",
                _hoisted_3,
                vue.toDisplayString(vue.unref(index.i18n)("common.setting")),
                1
                /* TEXT */
              ),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(vue.unref(settingItemList), (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("div", {
                    class: vue.normalizeClass([[{ "setting-item-item-active": item.active }], "display-flex setting-item-item"]),
                    onClick: ($event) => clickItem(item),
                    key: index
                  }, [
                    vue.createElementVNode(
                      "div",
                      _hoisted_5,
                      vue.toDisplayString(item.title),
                      1
                      /* TEXT */
                    )
                  ], 10, _hoisted_4);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            vue.createElementVNode("div", _hoisted_6, [
              vue.createElementVNode("div", _hoisted_7, [
                vue.createElementVNode(
                  "div",
                  _hoisted_8,
                  vue.toDisplayString(vue.unref(currentSettingItem).title),
                  1
                  /* TEXT */
                ),
                vue.createVNode(myIcon.default, {
                  color: "#666666",
                  size: "20",
                  onClick: clickClose,
                  class: "cursor-pointer"
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(CloseBold.default)
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              vue.unref(currentSettingItem).type == "DESIGN" ? (vue.openBlock(), vue.createBlock(settingDesign.default, { key: 0 })) : vue.createCommentVNode("v-if", true),
              vue.unref(currentSettingItem).type == "PRINTER" ? (vue.openBlock(), vue.createBlock(settingPrinter.default, { key: 1 })) : vue.createCommentVNode("v-if", true),
              vue.unref(currentSettingItem).type == "ABOUT" ? (vue.openBlock(), vue.createBlock(settingAbout.default, { key: 2 })) : vue.createCommentVNode("v-if", true)
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=setting-panel.vue2.js.map
