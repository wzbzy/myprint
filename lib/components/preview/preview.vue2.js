'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vueDemi = require('vue-demi');
var element = require('../design/element.vue.js');
var elementUtil = require('../../utils/elementUtil.js');
var dataTable = require('../design/table/data-table/data-table.vue.js');
require('../design/container/index.js');
var containerView = require('../design/container/container/containerView.vue.js');

var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "preview",
  props: {
    preview: { default: () => ({}) }
  },
  setup(__props) {
    const style = vueDemi.computed(() => {
      const _style = {
        width: elementUtil.valueUnit(props.preview.width, elementUtil.getRecursionParentPanel(props.preview)),
        left: elementUtil.valueUnit(props.preview.x, elementUtil.getRecursionParentPanel(props.preview)),
        top: elementUtil.valueUnit(props.preview.y, elementUtil.getRecursionParentPanel(props.preview)),
        zIndex: props.preview.runtimeOption.index
      };
      if (props.preview.option.rotate != null) {
        _style.transform = `rotate(${props.preview.option.rotate}deg)`;
      }
      if (props.preview.heightIs) {
        _style.height = elementUtil.valueUnit(props.preview.height, elementUtil.getRecursionParentPanel(props.preview));
      }
      return _style;
    });
    const props = __props;
    const previewWrapRef = vueDemi.ref();
    vueDemi.onMounted(() => {
      props.preview.target = previewWrapRef.value;
    });
    vueDemi.onUnmounted(() => {
      props.preview.target = void 0;
    });
    return (_ctx, _cache) => {
      const _component_Preview = vue.resolveComponent("Preview", true);
      return vue.openBlock(), vue.createElementBlock(
        "div",
        {
          class: "my-print-preview-wrap",
          ref_key: "previewWrapRef",
          ref: previewWrapRef,
          style: vue.normalizeStyle(vue.unref(style))
        },
        [
          vue.createVNode(element.default, { element: __props.preview }, null, 8, ["element"]),
          __props.preview.type === "DataTable" ? (vue.openBlock(), vue.createBlock(dataTable.default, {
            key: 0,
            element: __props.preview
          }, null, 8, ["element"])) : __props.preview.type === "PageHeader" ? (vue.openBlock(), vue.createBlock(vue.unref(containerView.default), { key: 1 }, {
            default: vue.withCtx(() => [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(__props.preview.previewWrapperList, (item, index) => {
                  return vue.openBlock(), vue.createBlock(_component_Preview, {
                    preview: item,
                    key: index
                  }, null, 8, ["preview"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          })) : __props.preview.type === "PageFooter" ? (vue.openBlock(), vue.createBlock(vue.unref(containerView.default), { key: 2 }, {
            default: vue.withCtx(() => [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(__props.preview.previewWrapperList, (item, index) => {
                  return vue.openBlock(), vue.createBlock(_component_Preview, {
                    preview: item,
                    key: index
                  }, null, 8, ["preview"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          })) : __props.preview.type === "Container" ? (vue.openBlock(), vue.createBlock(vue.unref(containerView.default), { key: 3 }, {
            default: vue.withCtx(() => [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(__props.preview.previewWrapperList, (item, index) => {
                  return vue.openBlock(), vue.createBlock(_component_Preview, {
                    preview: item,
                    key: index
                  }, null, 8, ["preview"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          })) : vue.createCommentVNode("v-if", true)
        ],
        4
        /* STYLE */
      );
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=preview.vue2.js.map
