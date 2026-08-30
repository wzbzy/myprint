'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var business = require('./business.vue.js');
var basic = require('./basic.vue.js');
var custom = require('../../../constants/provider/custom.js');
var myScrollbar = require('../../my/scrollbar/my-scrollbar.vue.js');
var myWidgetCollapse = require('../../my/collapse/my-widget-collapse.vue.js');
var index = require('../../../locales/index.js');
var elementUtil = require('../../../utils/elementUtil.js');
var ArrowLeft = require('../../my/icon/icons/ArrowLeft.vue.js');
var myIcon = require('../../my/icon/my-icon.vue.js');

const _hoisted_1 = { class: "option-container display-flex-column" };
const _hoisted_2 = { class: "header display-flex" };
const _hoisted_3 = { style: { "flex": "1" } };
const _hoisted_4 = { class: "option-container display-flex-column" };
const _hoisted_5 = {
  class: "display-flex display-flex-wrap",
  style: { "gap": "5px" }
};
const _hoisted_6 = {
  class: "display-flex",
  style: { "flex-wrap": "wrap" }
};
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "index",
  props: {
    moduleName: { default: index.i18n("common.default.name") },
    showBackButton: { type: Boolean, default: true }
  },
  emits: ["back"],
  setup(__props, { emit: __emit }) {
    const $emit = __emit;
    const provider = elementUtil.getProvider();
    function back() {
      $emit("back");
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.createElementVNode("div", _hoisted_2, [
          __props.showBackButton ? (vue.openBlock(), vue.createBlock(myIcon.default, {
            key: 0,
            size: "25",
            class: "header-back-icon"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(ArrowLeft.default, { onClick: back })
            ]),
            _: 1
            /* STABLE */
          })) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode(
            "div",
            _hoisted_3,
            vue.toDisplayString(__props.moduleName),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("div", _hoisted_4, [
          vue.createVNode(myScrollbar.default, null, {
            default: vue.withCtx(() => [
              vue.unref(provider).elementList != null && vue.unref(provider).elementList.length > 0 ? (vue.openBlock(), vue.createBlock(myWidgetCollapse.default, {
                key: 0,
                title: vue.unref(index.i18n)("common.business.widget")
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("div", _hoisted_5, [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(vue.unref(provider).elementList, (element, index) => {
                        return vue.openBlock(), vue.createBlock(business.default, {
                          key: index,
                          data: element,
                          pageUnit: vue.unref(provider).pageUnit
                        }, null, 8, ["data", "pageUnit"]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title"])) : vue.createCommentVNode("v-if", true),
              vue.createVNode(myWidgetCollapse.default, {
                title: vue.unref(index.i18n)("common.common.widget")
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("div", _hoisted_6, [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(vue.unref(custom.customProvider).elementList, (element, index) => {
                        return vue.openBlock(), vue.createBlock(basic.default, {
                          key: index,
                          data: element,
                          pageUnit: vue.unref(custom.customProvider).pageUnit
                        }, null, 8, ["data", "pageUnit"]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]),
                  vue.createCommentVNode('                    <el-collapse-item title="\u8BBE\u8BA1\u8F85\u52A9" name="3" v-if="auxiliaryProvider.length> 0">'),
                  vue.createCommentVNode('                        <div class="display-flex" style="flex-wrap: wrap;">'),
                  vue.createCommentVNode('                            <basic v-for="(element, index) in auxiliaryProvider" :key="index" :data="element" />'),
                  vue.createCommentVNode("                        </div>"),
                  vue.createCommentVNode("                    </el-collapse-item>")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title"])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _cache[0] || (_cache[0] = vue.createElementVNode(
          "div",
          { class: "option-bottom" },
          [
            vue.createCommentVNode('      <img class="my-logo" src="../../../assets/myprint-logo.png" alt="my-logo"/>'),
            vue.createCommentVNode('            <div class="my-version">{{ _package.version }}</div>')
          ],
          -1
          /* CACHED */
        ))
      ]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=index.vue2.js.map
