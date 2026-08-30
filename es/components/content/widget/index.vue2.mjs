import { defineComponent, openBlock, createElementBlock, createElementVNode, createBlock, withCtx, createVNode, createCommentVNode, toDisplayString, unref, Fragment, renderList } from 'vue';
import business from './business.vue.mjs';
import basic from './basic.vue.mjs';
import { customProvider } from '../../../constants/provider/custom.mjs';
import MyScrollbar from '../../my/scrollbar/my-scrollbar.vue.mjs';
import MyWidgetCollapse from '../../my/collapse/my-widget-collapse.vue.mjs';
import { i18n } from '../../../locales/index.mjs';
import { getProvider } from '../../../utils/elementUtil.mjs';
import ArrowLeft from '../../my/icon/icons/ArrowLeft.vue.mjs';
import MyIcon from '../../my/icon/my-icon.vue.mjs';

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
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    moduleName: { default: i18n("common.default.name") },
    showBackButton: { type: Boolean, default: true }
  },
  emits: ["back"],
  setup(__props, { emit: __emit }) {
    const $emit = __emit;
    const provider = getProvider();
    function back() {
      $emit("back");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          __props.showBackButton ? (openBlock(), createBlock(MyIcon, {
            key: 0,
            size: "25",
            class: "header-back-icon"
          }, {
            default: withCtx(() => [
              createVNode(ArrowLeft, { onClick: back })
            ]),
            _: 1
            /* STABLE */
          })) : createCommentVNode("v-if", true),
          createElementVNode(
            "div",
            _hoisted_3,
            toDisplayString(__props.moduleName),
            1
            /* TEXT */
          )
        ]),
        createElementVNode("div", _hoisted_4, [
          createVNode(MyScrollbar, null, {
            default: withCtx(() => [
              unref(provider).elementList != null && unref(provider).elementList.length > 0 ? (openBlock(), createBlock(MyWidgetCollapse, {
                key: 0,
                title: unref(i18n)("common.business.widget")
              }, {
                default: withCtx(() => [
                  createElementVNode("div", _hoisted_5, [
                    (openBlock(true), createElementBlock(
                      Fragment,
                      null,
                      renderList(unref(provider).elementList, (element, index) => {
                        return openBlock(), createBlock(business, {
                          key: index,
                          data: element,
                          pageUnit: unref(provider).pageUnit
                        }, null, 8, ["data", "pageUnit"]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title"])) : createCommentVNode("v-if", true),
              createVNode(MyWidgetCollapse, {
                title: unref(i18n)("common.common.widget")
              }, {
                default: withCtx(() => [
                  createElementVNode("div", _hoisted_6, [
                    (openBlock(true), createElementBlock(
                      Fragment,
                      null,
                      renderList(unref(customProvider).elementList, (element, index) => {
                        return openBlock(), createBlock(basic, {
                          key: index,
                          data: element,
                          pageUnit: unref(customProvider).pageUnit
                        }, null, 8, ["data", "pageUnit"]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]),
                  createCommentVNode('                    <el-collapse-item title="\u8BBE\u8BA1\u8F85\u52A9" name="3" v-if="auxiliaryProvider.length> 0">'),
                  createCommentVNode('                        <div class="display-flex" style="flex-wrap: wrap;">'),
                  createCommentVNode('                            <basic v-for="(element, index) in auxiliaryProvider" :key="index" :data="element" />'),
                  createCommentVNode("                        </div>"),
                  createCommentVNode("                    </el-collapse-item>")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title"])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _cache[0] || (_cache[0] = createElementVNode(
          "div",
          { class: "option-bottom" },
          [
            createCommentVNode('      <img class="my-logo" src="../../../assets/myprint-logo.png" alt="my-logo"/>'),
            createCommentVNode('            <div class="my-version">{{ _package.version }}</div>')
          ],
          -1
          /* CACHED */
        ))
      ]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=index.vue2.mjs.map
