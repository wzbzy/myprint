import { defineComponent, renderSlot, unref } from 'vue';
import { definePropType } from '../../../constants/common.mjs';
import { changeWrapper } from '../../../utils/historyUtil.mjs';

var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "history",
  props: {
    modelValue: {
      type: definePropType([
        String,
        Number,
        Object
      ]),
      default: null
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return renderSlot(_ctx.$slots, "default", {
        onChange: _cache[0] || (_cache[0] = (val) => unref(changeWrapper)(val, "\u6807\u9898"))
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=history.vue2.mjs.map
