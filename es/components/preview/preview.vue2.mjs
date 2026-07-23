import { defineComponent, resolveComponent, openBlock, createElementBlock, normalizeStyle, unref, createVNode, createBlock, withCtx, Fragment, renderList, createCommentVNode } from 'vue';
import { computed, ref, onMounted, onUnmounted } from 'vue-demi';
import ElementView from '../design/element.vue.mjs';
import { valueUnit, getRecursionParentPanel } from '../../utils/elementUtil.mjs';
import DataTable from '../design/table/data-table/data-table.vue.mjs';
import '../design/container/index.mjs';
import MyContainer from '../design/container/container/containerView.vue.mjs';

var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "preview",
  props: {
    preview: { default: () => ({}) }
  },
  setup(__props) {
    const style = computed(() => {
      const _style = {
        width: valueUnit(props.preview.width, getRecursionParentPanel(props.preview)),
        left: valueUnit(props.preview.x, getRecursionParentPanel(props.preview)),
        top: valueUnit(props.preview.y, getRecursionParentPanel(props.preview)),
        zIndex: props.preview.runtimeOption.index
      };
      if (props.preview.option.rotate != null) {
        _style.transform = `rotate(${props.preview.option.rotate}deg)`;
      }
      if (props.preview.heightIs) {
        _style.height = valueUnit(props.preview.height, getRecursionParentPanel(props.preview));
      }
      return _style;
    });
    const props = __props;
    const previewWrapRef = ref();
    onMounted(() => {
      props.preview.target = previewWrapRef.value;
    });
    onUnmounted(() => {
      props.preview.target = void 0;
    });
    return (_ctx, _cache) => {
      const _component_Preview = resolveComponent("Preview", true);
      return openBlock(), createElementBlock(
        "div",
        {
          class: "my-print-preview-wrap",
          ref_key: "previewWrapRef",
          ref: previewWrapRef,
          style: normalizeStyle(unref(style))
        },
        [
          createVNode(ElementView, { element: __props.preview }, null, 8, ["element"]),
          __props.preview.type === "DataTable" ? (openBlock(), createBlock(DataTable, {
            key: 0,
            element: __props.preview
          }, null, 8, ["element"])) : __props.preview.type === "PageHeader" ? (openBlock(), createBlock(unref(MyContainer), { key: 1 }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(__props.preview.previewWrapperList, (item, index) => {
                  return openBlock(), createBlock(_component_Preview, {
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
          })) : __props.preview.type === "PageFooter" ? (openBlock(), createBlock(unref(MyContainer), { key: 2 }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(__props.preview.previewWrapperList, (item, index) => {
                  return openBlock(), createBlock(_component_Preview, {
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
          })) : __props.preview.type === "Container" ? (openBlock(), createBlock(unref(MyContainer), { key: 3 }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(__props.preview.previewWrapperList, (item, index) => {
                  return openBlock(), createBlock(_component_Preview, {
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
          })) : createCommentVNode("v-if", true)
        ],
        4
        /* STYLE */
      );
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=preview.vue2.mjs.map
