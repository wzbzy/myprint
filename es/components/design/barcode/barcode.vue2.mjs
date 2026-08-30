import { defineComponent, openBlock, createElementBlock, normalizeStyle, unref, toDisplayString, createCommentVNode, createElementVNode, withDirectives, vShow } from 'vue';
import JsBarcode from 'jsbarcode';
import { ref, reactive, computed, watch } from 'vue-demi';
import { unit2px } from '../../../utils/devicePixelRatio.mjs';
import { _defaultNum } from '../../../utils/numberUtil.mjs';
import { elementCommonStyle, elementBarCodeValueStyle, getRecursionParentPanel } from '../../../utils/elementUtil.mjs';

const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "my-print-barcode_svg_wrapper display-flex" };
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "barcode",
  props: {
    element: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const barCode = ref();
    const svgStyle = ref({});
    const data = reactive({
      errorMsg: void 0
    });
    const style = computed(() => {
      return elementCommonStyle(props.element);
    });
    const valueStyle = computed(() => {
      return elementBarCodeValueStyle(props.element, {
        lineHeight: `${props.element.option.fontSize}px`,
        height: `${props.element.option.fontSize}px`,
        fontSize: `${props.element.option.fontSize}px`
      });
    });
    function setSvgStyle() {
      let height = unit2px(props.element.height, getRecursionParentPanel(props.element)) - (showCustomValueIs() ? _defaultNum(props.element.option.fontSize, 10) : 0);
      let subHeight = 0;
      const option = props.element.option;
      if (option.margin.top) {
        subHeight += unit2px(option.margin.top, getRecursionParentPanel(props.element));
      }
      if (option.margin.bottom) {
        subHeight += unit2px(option.margin.bottom, getRecursionParentPanel(props.element));
      }
      if (option.padding.top) {
        subHeight += unit2px(option.padding.top, getRecursionParentPanel(props.element));
      }
      if (option.padding.bottom) {
        subHeight += unit2px(option.padding.bottom, getRecursionParentPanel(props.element));
      }
      svgStyle.value["height"] = height - subHeight + "px";
    }
    watch([
      () => props.element.height,
      () => props.element.option.padding.top,
      () => props.element.option.padding.bottom,
      () => props.element.option.margin.top,
      () => props.element.option.margin.bottom
    ], (_n, _o) => {
      setSvgStyle();
    });
    watch([
      () => barCode.value,
      () => props.element.data,
      () => props.element.option.barCodeType,
      () => props.element.option.fontSize,
      () => props.element.option.color,
      () => props.element.option.background,
      () => props.element.option.barCodeDisplayValIs
    ], (_n, _o) => {
      data.errorMsg = void 0;
      if (barCode.value == null) {
        return;
      }
      if (!props.element.option.barCodeType) {
        props.element.option.barCodeType = "CODE128";
      }
      try {
        const codeLength = props.element.data.length;
        let numBars;
        switch (props.element.option.barCodeType) {
          case "EAN2":
            numBars = 20;
            break;
          case "EAN5":
            numBars = 47;
            break;
          case "EAN8":
            numBars = 67;
            break;
          case "EAN13":
          case "UPC":
            numBars = 95;
            break;
          case "UPC_E":
            numBars = 57;
            break;
          case "ITF":
            numBars = codeLength * 3;
            break;
          case "ITF14":
            numBars = 94;
            break;
          case "CODE39":
          case "codabar":
            numBars = codeLength * 12;
            break;
          case "CODE128":
          case "CODE128A":
          case "CODE128B":
          case "CODE128C":
            numBars = codeLength * 5;
            break;
          case "pharmacode":
            numBars = codeLength * 10;
            break;
          case "MSI":
          case "MSI10":
          case "MSI11":
          case "MSI1010":
          case "MSI1110":
            numBars = codeLength * 2.5;
            break;
          default:
            numBars = codeLength * 7;
        }
        const barWidth = unit2px(props.element.width, getRecursionParentPanel(props.element)) / numBars;
        JsBarcode(barCode.value, props.element.data, {
          format: props.element.option.barCodeType,
          //选择要使用的条形码类型
          width: barWidth,
          //设置条之间的宽度
          height: unit2px(props.element.height, getRecursionParentPanel(props.element)),
          //高度
          displayValue: showJsBarcodeValueIs(),
          //是否在条形码下方显示文字
          //   text:"456",//覆盖显示的文本
          //   fontOptions:"bold italic",//使文字加粗体或变斜体
          //   font:"fantasy",//设置文本的字体
          //   textAlign:"left",//设置文本的水平对齐方式
          //   textPosition:"top",//设置文本的垂直位置
          textMargin: 0,
          //设置条形码和文本之间的间距
          fontSize: _defaultNum(props.element.option.fontSize, 10),
          //设置文本的大小
          background: props.element.option.background,
          //设置条形码的背景
          lineColor: props.element.option.color,
          //设置条和文本的颜色。
          margin: 0
          //设置条形码周围的空白边距
        });
        setSvgStyle();
      } catch (e) {
        data.errorMsg = "\u4E0D\u652F\u6301\u7684\u5185\u5BB9";
      }
    }, { immediate: true });
    function showCustomValueIs() {
      if (props.element.option.barCodeDisplayValIs) {
        return !barValueList.includes(props.element.option.barCodeType);
      }
      return false;
    }
    function showJsBarcodeValueIs() {
      if (props.element.option.barCodeDisplayValIs) {
        return barValueList.includes(props.element.option.barCodeType);
      }
      return false;
    }
    const barValueList = ["EAN13"];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: "display-flex display-flex-column",
          style: normalizeStyle(unref(style))
        },
        [
          unref(data).errorMsg ? (openBlock(), createElementBlock(
            "div",
            _hoisted_1,
            toDisplayString(unref(data).errorMsg),
            1
            /* TEXT */
          )) : createCommentVNode("v-if", true),
          createElementVNode("div", _hoisted_2, [
            withDirectives((openBlock(), createElementBlock(
              "svg",
              {
                style: normalizeStyle(unref(svgStyle)),
                ref_key: "barCode",
                ref: barCode,
                preserveAspectRatio: "none"
              },
              null,
              4
              /* STYLE */
            )), [
              [vShow, !unref(data).errorMsg]
            ])
          ]),
          showCustomValueIs() ? (openBlock(), createElementBlock(
            "div",
            {
              key: 1,
              class: "barcode-value display-flex",
              style: normalizeStyle(unref(valueStyle))
            },
            toDisplayString(props.element.data),
            5
            /* TEXT, STYLE */
          )) : createCommentVNode("v-if", true)
        ],
        4
        /* STYLE */
      );
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=barcode.vue2.mjs.map
