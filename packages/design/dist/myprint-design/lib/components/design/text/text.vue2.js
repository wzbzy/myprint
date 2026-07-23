'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vueDemi = require('vue-demi');
require('../barcode/index.js');
require('../qrcode/index.js');
var elementUtil = require('../../../utils/elementUtil.js');
var moveable = require('../../../plugins/moveable/moveable.js');
var common = require('../../../constants/common.js');
var utils = require('../../../utils/utils.js');
var barcode = require('../barcode/barcode.vue.js');
var qrcode = require('../qrcode/qrcode.vue.js');

const _hoisted_1 = ["contentEditable", "innerHTML"];
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "text",
  props: {
    element: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const contentRef = vueDemi.ref();
    const data = vueDemi.reactive({
      content: "",
      innerContent: ""
    });
    const style = vueDemi.computed(() => {
      return elementUtil.elementCommonStyle(props.element);
    });
    vueDemi.onMounted(() => {
      data.content = utils.n2br(props.element.data);
      data.innerContent = data.content;
      if (props.element.data == null) {
        const elementData = elementUtil.formatter(props.element);
        if (elementData != null) {
          props.element.data = elementData;
          data.content = utils.n2br(elementData);
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
      moveable.checkInput();
      moveable.moveableEditing();
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
      props.element.data = utils.br2n(event.target.innerHTML);
      data.innerContent = props.element.data;
    }
    vueDemi.watch(() => props.element.runtimeOption.status, (n, _o) => {
      if (contentRef.value == void 0) {
        return;
      }
      if (n == "HANDLE_ED") {
        contentRef.value.addEventListener("dblclick", click);
      } else {
        contentRef.value.removeEventListener("dblclick", click);
      }
    });
    vueDemi.watch(() => props.element.data, (_n, _o) => {
      if (data.innerContent !== props.element.data) {
        data.content = utils.n2br(props.element.data);
        data.innerContent = data.content;
      }
    });
    vueDemi.watch(() => props.element.option.formatter, (_n, _o) => {
      const elementData = elementUtil.formatter(props.element);
      if (elementData != null) {
        props.element.data = elementData;
        data.content = utils.n2br(elementData);
        data.innerContent = elementData;
      }
    });
    vueDemi.watch(() => props.element.contentType, (n, _o) => {
      if (n != "QrCode") {
        props.element.option.keepRatio = void 0;
      } else {
        props.element.option.keepRatio = true;
      }
      moveable.freshMoveableOption(props.element);
    });
    return (_ctx, _cache) => {
      return __props.element.contentType === "Barcode" ? (vue.openBlock(), vue.createBlock(vue.unref(barcode.default), {
        key: 0,
        element: __props.element
      }, null, 8, ["element"])) : __props.element.contentType === "QrCode" ? (vue.openBlock(), vue.createBlock(vue.unref(qrcode.default), {
        key: 1,
        element: __props.element
      }, null, 8, ["element"])) : (vue.openBlock(), vue.createElementBlock("div", {
        key: 2,
        class: "my-print-text_container",
        ref_key: "contentRef",
        ref: contentRef,
        contentEditable: vue.unref(common.elementHandleEditStatusList).includes(__props.element.runtimeOption.status),
        innerHTML: vue.unref(data).content,
        style: vue.normalizeStyle(vue.unref(style)),
        onInput: handleInput,
        onKeydown: _cache[0] || (_cache[0] = ($event) => handleKeydown($event))
      }, null, 44, _hoisted_1));
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=text.vue2.js.map
