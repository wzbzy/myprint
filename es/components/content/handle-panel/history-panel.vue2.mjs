import { defineComponent, openBlock, createBlock, unref, withCtx, createElementVNode, normalizeClass, createElementBlock, Fragment, renderList, createVNode } from 'vue';
import { undoPanel, canUndo, redoPanel, canRedo, redoStack, history } from '../../../utils/historyUtil.mjs';
import { handlePanelElementList } from '../../../constants/settingPanel.mjs';
import MyCollapse from '../../my/collapse/my-collapse.vue.mjs';
import { useConfigStore } from '../../../stores/config.mjs';
import HistoryLineText from './history-line-text.vue.mjs';
import { clearEventBubble } from '../../../utils/event.mjs';

const _hoisted_1 = { class: "display-flex" };
const _hoisted_2 = { class: "history-list" };
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "history-panel",
  setup(__props) {
    const configStore = useConfigStore();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MyCollapse, {
        modelValue: unref(configStore).settingPanel.history.visible,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(configStore).settingPanel.history.visible = $event),
        element: unref(handlePanelElementList).history,
        position: unref(configStore).settingPanel.history
      }, {
        head: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            createElementVNode(
              "div",
              {
                onMousedown: _cache[0] || (_cache[0] = ($event) => unref(clearEventBubble)($event)),
                onClick: _cache[1] || (_cache[1] = //@ts-ignore
                (...args) => unref(undoPanel) && unref(undoPanel)(...args)),
                class: normalizeClass([[{ "my-icon-disabled": !unref(canUndo) }], "my-icon iconfont icon-undo my-handle-panel-icon"])
              },
              null,
              34
              /* CLASS, NEED_HYDRATION */
            ),
            createElementVNode(
              "div",
              {
                onMousedown: _cache[2] || (_cache[2] = ($event) => unref(clearEventBubble)($event)),
                onClick: _cache[3] || (_cache[3] = //@ts-ignore
                (...args) => unref(redoPanel) && unref(redoPanel)(...args)),
                class: normalizeClass([[{ "my-icon-disabled": !unref(canRedo) }], "my-icon iconfont icon-redo my-handle-panel-icon"])
              },
              null,
              34
              /* CLASS, NEED_HYDRATION */
            )
          ])
        ]),
        default: withCtx(() => [
          createElementVNode("div", _hoisted_2, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(unref(redoStack).slice().reverse(), (item) => {
                return openBlock(), createElementBlock("div", {
                  key: item.timestamp,
                  class: "history-list-item"
                }, [
                  createVNode(HistoryLineText, {
                    content: item.snapshot.label
                  }, null, 8, ["content"])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            )),
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(unref(history), (item, index) => {
                return openBlock(), createBlock(HistoryLineText, {
                  class: normalizeClass([{ "currentHistory": index == 0, "history-list-item": index != 0 }]),
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

export { _sfc_main as default };
//# sourceMappingURL=history-panel.vue2.mjs.map
