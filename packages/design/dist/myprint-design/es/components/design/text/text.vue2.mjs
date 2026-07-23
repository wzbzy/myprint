import { defineComponent, openBlock, createBlock, unref, createElementBlock, normalizeStyle } from 'vue';
import { ref, reactive, computed, onMounted, watch } from 'vue-demi';
import '../barcode/index.mjs';
import '../qrcode/index.mjs';
import { elementCommonStyle, formatter } from '../../../utils/elementUtil.mjs';
import { checkInput, moveableEditing, freshMoveableOption } from '../../../plugins/moveable/moveable.mjs';
import { elementHandleEditStatusList } from '../../../constants/common.mjs';
import { n2br, br2n } from '../../../utils/utils.mjs';
import MyBarcode from '../barcode/barcode.vue.mjs';
import MyQrcode from '../qrcode/qrcode.vue.mjs';

const _hoisted_1 = ["contentEditable", "innerHTML"];
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "text",
  props: {
    element: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const contentRef = ref();
    const data = reactive({
      content: "",
      innerContent: ""
    });
    const style = computed(() => {
      return elementCommonStyle(props.element);
    });
    onMounted(() => {
      data.content = n2br(props.element.data);
      data.innerContent = data.content;
      if (props.element.data == null) {
        const elementData = formatter(props.element);
        if (elementData != null) {
          props.element.data = elementData;
          data.content = n2br(elementData);
          data.innerContent = elementData;
        }
      }
    });
    function handleKeydown(event) {
      if (event.code === "Enter") {
        document.execCommand("insertHTML", false, "<br>&zwnj;");
        event.preventDefault();
      }
      event.stopPropagation();
    }
    function click(event) {
      props.element.runtimeOption.status = "HANDLE_EDIT_ING";
      checkInput();
      moveableEditing();
      const x = event.clientX;
      const y = event.clientY;
      const range = document.caretRangeFromPoint(x, y) || document.caretPositionFromPoint(x, y);
      if (range) {
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      }
      contentRef.value.focus();
    }
    function handleInput(event) {
      props.element.data = br2n(event.target.innerHTML);
      data.innerContent = props.element.data;
    }
    watch(() => props.element.runtimeOption.status, (n, _o) => {
      if (contentRef.value == void 0) {
        return;
      }
      if (n == "HANDLE_ED") {
        contentRef.value.addEventListener("dblclick", click);
      } else {
        contentRef.value.removeEventListener("dblclick", click);
      }
    });
    watch(() => props.element.data, (_n, _o) => {
      if (data.innerContent !== props.element.data) {
        data.content = n2br(props.element.data);
        data.innerContent = data.content;
      }
    });
    watch(() => props.element.option.formatter, (_n, _o) => {
      const elementData = formatter(props.element);
      if (elementData != null) {
        props.element.data = elementData;
        data.content = n2br(elementData);
        data.innerContent = elementData;
      }
    });
    watch(() => props.element.contentType, (n, _o) => {
      if (n != "QrCode") {
        props.element.option.keepRatio = void 0;
      } else {
        props.element.option.keepRatio = true;
      }
      freshMoveableOption(props.element);
    });
    return (_ctx, _cache) => {
      return __props.element.contentType === "Barcode" ? (openBlock(), createBlock(unref(MyBarcode), {
        key: 0,
        element: __props.element
      }, null, 8, ["element"])) : __props.element.contentType === "QrCode" ? (openBlock(), createBlock(unref(MyQrcode), {
        key: 1,
        element: __props.element
      }, null, 8, ["element"])) : (openBlock(), createElementBlock("div", {
        key: 2,
        class: "my-print-text_container",
        ref_key: "contentRef",
        ref: contentRef,
        contentEditable: unref(elementHandleEditStatusList).includes(__props.element.runtimeOption.status),
        innerHTML: unref(data).content,
        style: normalizeStyle(unref(style)),
        onInput: handleInput,
        onKeydown: _cache[0] || (_cache[0] = ($event) => handleKeydown($event))
      }, null, 44, _hoisted_1));
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=text.vue2.mjs.map
