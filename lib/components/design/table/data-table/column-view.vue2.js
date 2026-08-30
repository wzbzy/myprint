'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vueDemi = require('vue-demi');
require('../../text/index.js');
var text = require('../../text/text.vue.js');

const _hoisted_1 = ["colspan", "rowspan"];
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "column-view",
  props: {
    column: { default: () => void 0 }
  },
  setup(__props) {
    const props = __props;
    const columnRef = vueDemi.ref();
    vueDemi.onMounted(() => {
      props.column.runtimeOption.target = columnRef.value;
    });
    const headStyle = vueDemi.computed(() => {
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
      return __props.column != void 0 ? (vue.openBlock(), vue.createElementBlock("td", {
        key: 0,
        ref_key: "columnRef",
        ref: columnRef,
        class: "my-print-columnHead",
        colspan: __props.column.colspan,
        rowspan: __props.column.rowspan,
        style: vue.normalizeStyle(vue.unref(headStyle))
      }, [
        vue.createVNode(vue.unref(text.default), { element: __props.column }, null, 8, ["element"])
      ], 12, _hoisted_1)) : vue.createCommentVNode("v-if", true);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=column-view.vue2.js.map
