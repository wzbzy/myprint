import { defineComponent, openBlock, createElementBlock, normalizeClass, unref, createElementVNode } from 'vue';
import { ref, onMounted, computed, watch, reactive, nextTick } from 'vue-demi';
import { isNil } from 'lodash';

const _hoisted_1 = ["disabled", "placeholder"];
const _hoisted_2 = {
  key: 1,
  class: "my-input display-flex"
};
const _hoisted_3 = ["disabled", "placeholder"];
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "my-input",
  props: {
    modelValue: {},
    placeholder: {},
    type: { default: "input" },
    disabled: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "change", "input"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const inputRef = ref(null);
    const textareaRef = ref(null);
    const props = __props;
    onMounted(() => {
      setNativeInputValue();
    });
    const myInputRef = computed(() => {
      return inputRef.value ? inputRef.value : textareaRef.value;
    });
    const nativeInputValue = computed(
      () => isNil(props.modelValue) ? "" : String(props.modelValue)
    );
    watch(nativeInputValue, () => setNativeInputValue());
    function setNativeInputValue() {
      if (!myInputRef.value || myInputRef.value.value === nativeInputValue.value) return;
      myInputRef.value.value = nativeInputValue.value;
    }
    const data = reactive({
      focusIs: false
    });
    function inputBlur() {
      data.focusIs = false;
    }
    function inputFocus() {
      if (props.disabled) {
        return;
      }
      data.focusIs = true;
    }
    async function onInput(e) {
      emit("update:modelValue", e.target.value);
      emit("input", e.target.value);
      await nextTick();
      setNativeInputValue();
    }
    function onChange(e) {
      emit("update:modelValue", e.target.value);
      emit("change", e.target.value);
    }
    function clickWrapper() {
      if (props.disabled) {
        return;
      }
      data.focusIs = true;
      myInputRef.value.focus();
    }
    return (_ctx, _cache) => {
      return __props.type == "textarea" ? (openBlock(), createElementBlock("textarea", {
        key: 0,
        ref_key: "textareaRef",
        ref: textareaRef,
        disabled: __props.disabled,
        placeholder: __props.placeholder,
        onBlur: inputBlur,
        onFocus: inputFocus,
        onInput,
        onChange,
        class: normalizeClass([[{ "is-focus": unref(data).focusIs, "is-disabled": __props.disabled }], "my-textarea__inner"])
      }, null, 42, _hoisted_1)) : (openBlock(), createElementBlock("div", _hoisted_2, [
        createElementVNode(
          "div",
          {
            class: normalizeClass(["my-input__wrapper", [{ "is-focus": unref(data).focusIs, "is-disabled": __props.disabled }]]),
            onClick: clickWrapper
          },
          [
            createElementVNode("input", {
              class: "my-input__inner",
              ref_key: "inputRef",
              ref: inputRef,
              disabled: __props.disabled,
              onBlur: inputBlur,
              onFocus: inputFocus,
              placeholder: __props.placeholder,
              onInput,
              onChange
            }, null, 40, _hoisted_3)
          ],
          2
          /* CLASS */
        )
      ]));
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=my-input.vue2.mjs.map
