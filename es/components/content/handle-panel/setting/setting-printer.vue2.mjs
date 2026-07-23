import { defineComponent, openBlock, createElementBlock, createVNode, withCtx, unref, createElementVNode, normalizeClass, toDisplayString, createCommentVNode } from 'vue';
import { useSocket } from '../../../../stores/socket.mjs';
import { computed } from 'vue-demi';
import { useConfigStore } from '../../../../stores/config.mjs';
import MySwitch from '../../../my/switch/my-switch.vue.mjs';
import MyFormItem from '../../../my/form/my-form-item.vue.mjs';
import MyForm from '../../../my/form/my-form.vue.mjs';
import MyInput from '../../../my/input/my-input.vue.mjs';
import { i18n } from '../../../../locales/index.mjs';

const _hoisted_1 = { class: "printer-panel" };
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "setting-printer",
  setup(__props) {
    const useSocketData = useSocket();
    const configStore = useConfigStore();
    const statusName = computed(() => {
      return useSocketData.connect ? "\u8FDE\u63A5\u6210\u529F" : "\u8FDE\u63A5\u65AD\u5F00";
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(MyForm, {
          "label-width": "80px",
          size: "small",
          "label-position": "right"
        }, {
          default: withCtx(() => [
            createVNode(MyFormItem, {
              label: unref(i18n)("common.connect.status")
            }, {
              default: withCtx(() => [
                createElementVNode(
                  "div",
                  {
                    class: normalizeClass(["printer-status-icon", [{
                      "printer-status-icon-normal": unref(useSocketData).connect,
                      "printer-status-icon-error": !unref(useSocketData).connect
                    }]])
                  },
                  toDisplayString(unref(statusName)),
                  3
                  /* TEXT, CLASS */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["label"]),
            createVNode(MyFormItem, {
              label: unref(i18n)("common.auto.connect")
            }, {
              default: withCtx(() => [
                createVNode(MySwitch, {
                  modelValue: unref(configStore).autoConnect,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(configStore).autoConnect = $event),
                  class: "ml-2"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["label"]),
            createCommentVNode('            <my-form-item label="\u5BA2\u6237\u7AEF\u534F\u8BAE">'),
            createCommentVNode('                <my-select v-model="configStore.clientProtocol"'),
            createCommentVNode('                           :data-list="clientProtocolList" />'),
            createCommentVNode("            "),
            createCommentVNode("            </my-form-item>"),
            createVNode(MyFormItem, {
              label: unref(i18n)("common.client.url")
            }, {
              default: withCtx(() => [
                createVNode(MyInput, {
                  modelValue: unref(configStore).clientUrl,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(configStore).clientUrl = $event)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["label"]),
            createCommentVNode('            <my-form-item label="\u9ED8\u8BA4\u6253\u5370\u673A">'),
            createCommentVNode('                <my-select v-model="configStore.defaultPrinter"'),
            createCommentVNode('                           :data-list="useSocketData.printerList" />'),
            createCommentVNode("            </my-form-item>")
          ]),
          _: 1
          /* STABLE */
        }),
        createCommentVNode("    <div>\u4E0B\u8F7D\u5BA2\u6237\u7AEF myprint/lodop/hiprint</div>")
      ]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=setting-printer.vue2.mjs.map
