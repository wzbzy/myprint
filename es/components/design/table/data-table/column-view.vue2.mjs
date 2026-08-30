import { defineComponent, openBlock, createElementBlock, normalizeStyle, unref, createVNode, createCommentVNode } from 'vue';
import { ref, onMounted, computed } from 'vue-demi';
import '../../text/index.mjs';
import MyText from '../../text/text.vue.mjs';

const _hoisted_1 = ["colspan", "rowspan"];
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "column-view",
  props: {
    column: { default: () => void 0 }
  },
  setup(__props) {
    const props = __props;
    const columnRef = ref();
    onMounted(() => {
      props.column.runtimeOption.target = columnRef.value;
    });
    const headStyle = computed(() => {
      if (props.column == null) {
        return;
      }
      const style = {
        //       nowrap="nowrap"
        maxWidth: props.column.runtimeOption.width + "px",
        width: props.column.runtimeOption.width + "px",
        height: props.column.runtimeOption.init.height + "px",
        maxHeight: props.column.runtimeOption.init.height + "px"
      };
      if (props.column.option.borderAll) {
        style["border"] = "1px solid black";
      } else {
      }
      if (props.column.contentType == "QrCode" || props.column.type == "Image") {
        style.lineHeight = 0;
      }
      return style;
    });
    return (_ctx, _cache) => {
      return __props.column != void 0 ? (openBlock(), createElementBlock("td", {
        key: 0,
        ref_key: "columnRef",
        ref: columnRef,
        class: "my-print-columnHead",
        colspan: __props.column.colspan,
        rowspan: __props.column.rowspan,
        style: normalizeStyle(unref(headStyle))
      }, [
        createVNode(unref(MyText), { element: __props.column }, null, 8, ["element"])
      ], 12, _hoisted_1)) : createCommentVNode("v-if", true);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=column-view.vue2.mjs.map
