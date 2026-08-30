'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var historyUtil = require('../../../utils/historyUtil.js');
var settingPanel = require('../../../constants/settingPanel.js');
var myCollapse = require('../../my/collapse/my-collapse.vue.js');
var config = require('../../../stores/config.js');
var historyLineText = require('./history-line-text.vue.js');
var event = require('../../../utils/event.js');

const _hoisted_1 = { class: "display-flex" };
const _hoisted_2 = { class: "history-list" };
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "history-panel",
  setup(__props) {
    const configStore = config.useConfigStore();
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(myCollapse.default, {
        modelValue: vue.unref(configStore).settingPanel.history.visible,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => vue.unref(configStore).settingPanel.history.visible = $event),
        element: vue.unref(settingPanel.handlePanelElementList).history,
        position: vue.unref(configStore).settingPanel.history
      }, {
        head: vue.withCtx(() => [
          vue.createElementVNode("div", _hoisted_1, [
            vue.createElementVNode(
              "div",
              {
                onMousedown: _cache[0] || (_cache[0] = ($event) => vue.unref(event.clearEventBubble)($event)),
                onClick: _cache[1] || (_cache[1] = //@ts-ignore
                (...args) => vue.unref(historyUtil.undoPanel) && vue.unref(historyUtil.undoPanel)(...args)),
                class: vue.normalizeClass([[{ "my-icon-disabled": !vue.unref(historyUtil.canUndo) }], "my-icon iconfont icon-undo my-handle-panel-icon"])
              },
              null,
              34
              /* CLASS, NEED_HYDRATION */
            ),
            vue.createElementVNode(
              "div",
              {
                onMousedown: _cache[2] || (_cache[2] = ($event) => vue.unref(event.clearEventBubble)($event)),
                onClick: _cache[3] || (_cache[3] = //@ts-ignore
                (...args) => vue.unref(historyUtil.redoPanel) && vue.unref(historyUtil.redoPanel)(...args)),
                class: vue.normalizeClass([[{ "my-icon-disabled": !vue.unref(historyUtil.canRedo) }], "my-icon iconfont icon-redo my-handle-panel-icon"])
              },
              null,
              34
              /* CLASS, NEED_HYDRATION */
            )
          ])
        ]),
        default: vue.withCtx(() => [
          vue.createElementVNode("div", _hoisted_2, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(vue.unref(historyUtil.redoStack).slice().reverse(), (item) => {
                return vue.openBlock(), vue.createElementBlock("div", {
                  key: item.timestamp,
                  class: "history-list-item"
                }, [
                  vue.createVNode(historyLineText.default, {
                    content: item.snapshot.label
                  }, null, 8, ["content"])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            )),
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(vue.unref(historyUtil.history), (item, index) => {
                return vue.openBlock(), vue.createBlock(historyLineText.default, {
                  class: vue.normalizeClass([{ "currentHistory": index == 0, "history-list-item": index != 0 }]),
                  key: item.timestamp,
                  content: item.snapshot.label
                }, null, 8, ["class", "content"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "element", "position"]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=history-panel.vue2.js.map
