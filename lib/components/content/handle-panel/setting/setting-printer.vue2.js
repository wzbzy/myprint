'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var socket = require('../../../../stores/socket.js');
var vueDemi = require('vue-demi');
var config = require('../../../../stores/config.js');
var mySwitch = require('../../../my/switch/my-switch.vue.js');
var myFormItem = require('../../../my/form/my-form-item.vue.js');
var myForm = require('../../../my/form/my-form.vue.js');
var myInput = require('../../../my/input/my-input.vue.js');
var index = require('../../../../locales/index.js');

const _hoisted_1 = { class: "printer-panel" };
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "setting-printer",
  setup(__props) {
    const useSocketData = socket.useSocket();
    const configStore = config.useConfigStore();
    const statusName = vueDemi.computed(() => {
      return useSocketData.connect ? "\u8FDE\u63A5\u6210\u529F" : "\u8FDE\u63A5\u65AD\u5F00";
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.createVNode(myForm.default, {
          "label-width": "80px",
          size: "small",
          "label-position": "right"
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(myFormItem.default, {
              label: vue.unref(index.i18n)("common.connect.status")
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode(
                  "div",
                  {
                    class: vue.normalizeClass(["printer-status-icon", [{
                      "printer-status-icon-normal": vue.unref(useSocketData).connect,
                      "printer-status-icon-error": !vue.unref(useSocketData).connect
                    }]])
                  },
                  vue.toDisplayString(vue.unref(statusName)),
                  3
                  /* TEXT, CLASS */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["label"]),
            vue.createVNode(myFormItem.default, {
              label: vue.unref(index.i18n)("common.auto.connect")
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(mySwitch.default, {
                  modelValue: vue.unref(configStore).autoConnect,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(configStore).autoConnect = $event),
                  class: "ml-2"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["label"]),
            vue.createCommentVNode('            <my-form-item label="\u5BA2\u6237\u7AEF\u534F\u8BAE">'),
            vue.createCommentVNode('                <my-select v-model="configStore.clientProtocol"'),
            vue.createCommentVNode('                           :data-list="clientProtocolList" />'),
            vue.createCommentVNode("            "),
            vue.createCommentVNode("            </my-form-item>"),
            vue.createVNode(myFormItem.default, {
              label: vue.unref(index.i18n)("common.client.url")
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(myInput.default, {
                  modelValue: vue.unref(configStore).clientUrl,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.unref(configStore).clientUrl = $event)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["label"]),
            vue.createCommentVNode('            <my-form-item label="\u9ED8\u8BA4\u6253\u5370\u673A">'),
            vue.createCommentVNode('                <my-select v-model="configStore.defaultPrinter"'),
            vue.createCommentVNode('                           :data-list="useSocketData.printerList" />'),
            vue.createCommentVNode("            </my-form-item>")
          ]),
          _: 1
          /* STABLE */
        }),
        vue.createCommentVNode("    <div>\u4E0B\u8F7D\u5BA2\u6237\u7AEF myprint/lodop/hiprint</div>")
      ]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=setting-printer.vue2.js.map
