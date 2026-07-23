'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var utils = require('../../../utils/utils.js');

const _hoisted_1 = ["onMouseenter", "onMouseleave"];
const _hoisted_2 = { class: "u-content" };
var ColorStyle = /* @__PURE__ */ ((ColorStyle2) => {
  ColorStyle2["info"] = "#1677FF";
  ColorStyle2["success"] = "#52c41a";
  ColorStyle2["error"] = "#ff4d4f";
  ColorStyle2["warning"] = "#faad14";
  ColorStyle2["loading"] = "#1677FF";
  return ColorStyle2;
})(ColorStyle || {});
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "my-message",
  props: {
    duration: { default: 3e3 },
    top: { default: 30 }
  },
  emits: ["close"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const resetTimer = vue.ref();
    const showMessage = vue.ref([]);
    const hideTimers = vue.ref([]);
    const messageContent = vue.ref([]);
    const messTop = vue.computed(() => {
      if (typeof props.top === "number") {
        return props.top + "px";
      }
      return props.top;
    });
    const clear = vue.computed(() => {
      return showMessage.value.every((show2) => !show2);
    });
    vue.watch(clear, (to, from) => {
      if (!from && to) {
        resetTimer.value = utils.rafTimeout(() => {
          messageContent.value.splice(0);
          showMessage.value.splice(0);
        }, 300);
      }
    });
    function onEnter(index) {
      utils.cancelRaf(hideTimers.value[index]);
    }
    function onLeave(index) {
      onHideMessage(index);
    }
    function show() {
      utils.cancelRaf(resetTimer.value);
      const index = messageContent.value.length - 1;
      showMessage.value[index] = true;
      onHideMessage(index);
    }
    function info(content) {
      messageContent.value.push({
        content,
        mode: "info"
      });
      show();
    }
    function success(content) {
      messageContent.value.push({
        content,
        mode: "success"
      });
      show();
    }
    function error(content) {
      messageContent.value.push({
        content,
        mode: "error"
      });
      show();
    }
    function warning(content) {
      messageContent.value.push({
        content,
        mode: "warning"
      });
      show();
    }
    function loading(content) {
      messageContent.value.push({
        content,
        mode: "loading"
      });
      show();
    }
    __expose({
      info,
      success,
      error,
      warning,
      loading
    });
    const emit = __emit;
    function onHideMessage(index) {
      hideTimers.value[index] = utils.rafTimeout(() => {
        showMessage.value[index] = false;
        emit("close");
      }, props.duration);
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(
        "div",
        {
          class: "m-message-wrap",
          style: vue.normalizeStyle(`top: ${messTop.value};`)
        },
        [
          vue.createVNode(vue.TransitionGroup, { name: "slide-fade" }, {
            default: vue.withCtx(() => [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(messageContent.value, (message, index) => {
                  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
                    class: "m-message",
                    key: index
                  }, [
                    vue.createElementVNode("div", {
                      class: "m-message-content",
                      onMouseenter: ($event) => onEnter(index),
                      onMouseleave: ($event) => onLeave(index)
                    }, [
                      message.mode === "info" ? (vue.openBlock(), vue.createElementBlock(
                        "svg",
                        {
                          key: 0,
                          class: "u-svg",
                          style: vue.normalizeStyle({ fill: ColorStyle[message.mode] }),
                          viewBox: "64 64 896 896",
                          "data-icon": "info-circle",
                          "aria-hidden": "true",
                          focusable: "false"
                        },
                        [..._cache[0] || (_cache[0] = [
                          vue.createElementVNode(
                            "path",
                            { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z" },
                            null,
                            -1
                            /* CACHED */
                          )
                        ])],
                        4
                        /* STYLE */
                      )) : vue.createCommentVNode("v-if", true),
                      message.mode === "success" ? (vue.openBlock(), vue.createElementBlock(
                        "svg",
                        {
                          key: 1,
                          class: "u-svg",
                          style: vue.normalizeStyle({ fill: ColorStyle[message.mode] }),
                          viewBox: "64 64 896 896",
                          "data-icon": "check-circle",
                          "aria-hidden": "true",
                          focusable: "false"
                        },
                        [..._cache[1] || (_cache[1] = [
                          vue.createElementVNode(
                            "path",
                            { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" },
                            null,
                            -1
                            /* CACHED */
                          )
                        ])],
                        4
                        /* STYLE */
                      )) : vue.createCommentVNode("v-if", true),
                      message.mode === "error" ? (vue.openBlock(), vue.createElementBlock(
                        "svg",
                        {
                          key: 2,
                          class: "u-svg",
                          style: vue.normalizeStyle({ fill: ColorStyle[message.mode] }),
                          viewBox: "64 64 896 896",
                          "data-icon": "close-circle",
                          "aria-hidden": "true",
                          focusable: "false"
                        },
                        [..._cache[2] || (_cache[2] = [
                          vue.createElementVNode(
                            "path",
                            { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" },
                            null,
                            -1
                            /* CACHED */
                          )
                        ])],
                        4
                        /* STYLE */
                      )) : vue.createCommentVNode("v-if", true),
                      message.mode === "warning" ? (vue.openBlock(), vue.createElementBlock(
                        "svg",
                        {
                          key: 3,
                          class: "u-svg",
                          style: vue.normalizeStyle({ fill: ColorStyle[message.mode] }),
                          viewBox: "64 64 896 896",
                          "data-icon": "exclamation-circle",
                          "aria-hidden": "true",
                          focusable: "false"
                        },
                        [..._cache[3] || (_cache[3] = [
                          vue.createElementVNode(
                            "path",
                            { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z" },
                            null,
                            -1
                            /* CACHED */
                          )
                        ])],
                        4
                        /* STYLE */
                      )) : vue.createCommentVNode("v-if", true),
                      message.mode === "loading" ? (vue.openBlock(), vue.createElementBlock(
                        "svg",
                        {
                          key: 4,
                          class: "u-svg circular",
                          style: vue.normalizeStyle({ stroke: ColorStyle[message.mode] }),
                          viewBox: "0 0 50 50",
                          focusable: "false"
                        },
                        [..._cache[4] || (_cache[4] = [
                          vue.createElementVNode(
                            "circle",
                            {
                              class: "path",
                              cx: "25",
                              cy: "25",
                              r: "20",
                              fill: "none"
                            },
                            null,
                            -1
                            /* CACHED */
                          )
                        ])],
                        4
                        /* STYLE */
                      )) : vue.createCommentVNode("v-if", true),
                      vue.createElementVNode(
                        "span",
                        _hoisted_2,
                        vue.toDisplayString(message.content),
                        1
                        /* TEXT */
                      )
                    ], 40, _hoisted_1)
                  ])), [
                    [vue.vShow, showMessage.value[index]]
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          })
        ],
        4
        /* STYLE */
      );
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=my-message.vue2.js.map
