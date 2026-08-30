'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var myColorPicker = require('../../my/color-picker/my-color-picker.vue.js');
require('../../my/icon/index.js');
var common = require('../../../constants/common.js');
var app = require('../../../stores/app.js');
var moveable = require('../../../plugins/moveable/moveable.js');
var elementUtil = require('../../../utils/elementUtil.js');
var vueDemi = require('vue-demi');
var toolIconPopover = require('../../my/icon/tool-icon-popover.vue.js');
var elementAlign = require('./toolbar-style/element-align.vue.js');
var fontSize = require('./toolbar-style/font-size.vue.js');
var fontFamily = require('./toolbar-style/font-family.vue.js');
var myIcon = require('../../my/icon/my-icon.vue.js');
var myScrollbar = require('../../my/scrollbar/my-scrollbar.vue.js');
var index = require('../../../locales/index.js');
var styleIcon = require('../../my/icon/style-icon.vue.js');

var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "style-design",
  setup(__props) {
    const elementAlignList = vueDemi.reactive([
      [
        {
          label: index.i18n("toolbar.style.textAlignLeft"),
          click: moveable.alignLeft,
          icon: "icon-color-spz iconfont-color",
          enable: true
        },
        {
          label: index.i18n("toolbar.style.alignHorizontalCenter"),
          click: moveable.alignHorizontalCenter,
          icon: "icon-color-spjz iconfont-color",
          enable: true
        },
        {
          label: index.i18n("toolbar.style.textAlignRight"),
          click: moveable.alignRight,
          icon: "icon-color-spy iconfont-color",
          enable: true
        }
      ],
      [
        {
          label: index.i18n("toolbar.style.alignTop"),
          click: moveable.alignTop,
          icon: "icon-color-czding iconfont-color",
          enable: true
        },
        {
          label: index.i18n("toolbar.style.alignVerticalCenter"),
          click: moveable.alignVerticalCenter,
          icon: "icon-color-czjz iconfont-color",
          enable: true
        },
        {
          label: index.i18n("toolbar.style.alignBottom"),
          click: moveable.alignBottom,
          icon: "icon-color-czd iconfont-color",
          enable: true
        }
      ],
      [
        {
          label: index.i18n("toolbar.style.arrangeHorizontalSpacing"),
          click: moveable.arrangeHorizontalSpacing,
          icon: "icon-color-spdjfb iconfont-color",
          enable: true
        },
        {
          label: index.i18n("toolbar.style.arrangeVerticalSpacing"),
          click: moveable.arrangeVerticalSpacing,
          icon: "icon-color-czdjfb iconfont-color",
          enable: true
        }
      ]
      // , [
      // {
      //   label: "父元水平直平均分布",
      //   click: alignLeft,
      //   icon: "icon-color-fyzsp iconfont-color",
      //   enable: true
      // },
      // {
      //   label: "父元素垂直平均分布",
      //   click: alignHorizontalCenter,
      //   icon: "icon-color-fyscz iconfont-color",
      //   enable: true
      // }
      // ]
    ]);
    const elementLayerList = vueDemi.reactive([
      [
        {
          label: index.i18n("toolbar.layer.top"),
          click: () => {
            elementUtil.elementUp(appStore.currentElement, 999999);
          },
          icon: "icon-color-zydc iconfont-color",
          enable: true
        },
        {
          label: index.i18n("toolbar.layer.up.one"),
          click: () => {
            elementUtil.elementUp(appStore.currentElement, 1);
          },
          icon: "icon-color-syyc iconfont-color",
          enable: true
        },
        {
          label: index.i18n("toolbar.layer.down.one"),
          click: () => {
            elementUtil.elementDown(appStore.currentElement, 1);
          },
          icon: "icon-color-xyyc iconfont-color",
          enable: true
        },
        {
          label: index.i18n("toolbar.layer.bottom"),
          click: () => {
            elementUtil.elementDown(appStore.currentElement, 999999);
          },
          icon: "icon-color-zydic iconfont-color",
          enable: true
        }
      ]
    ]);
    const appStore = app.useAppStoreHook();
    const groupDisabledIs = vueDemi.computed(() => {
      if (appStore.currentElement.length > 1) {
        const groupIs = elementUtil.multipleElementGetValue("groupIs");
        return groupIs || groupIs == false;
      } else {
        return true;
      }
    });
    const ungroupDisabledIs = vueDemi.computed(() => {
      if (appStore.currentElement.length > 1) {
        for (let currentElementElement of appStore.currentElement) {
          if (currentElementElement.groupIs) {
            return false;
          }
        }
        return true;
      } else {
        return true;
      }
    });
    const fontDisabledComputed = vueDemi.computed(() => {
      if (appStore.currentElement.length == 0) {
        return true;
      }
      for (let currentElementElement of appStore.currentElement) {
        if (!common.hasStyle(currentElementElement.type, "fontFamily")) {
          return true;
        }
      }
      return false;
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(myScrollbar.default, {
        class: "my-style-design",
        disabledScrollBar: "",
        "hover-blod": false
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(fontFamily.default, { disabled: vue.unref(fontDisabledComputed) }, null, 8, ["disabled"]),
          vue.createVNode(fontSize.default, { disabled: vue.unref(fontDisabledComputed) }, null, 8, ["disabled"]),
          _cache[6] || (_cache[6] = vue.createElementVNode(
            "div",
            { class: "my-style-divider" },
            null,
            -1
            /* CACHED */
          )),
          vue.createVNode(vue.unref(styleIcon.default), {
            tips: vue.unref(index.i18n)("toolbar.style.blob"),
            props: "option.bold",
            enableProps: "bold",
            class: "icon-zitijiacu iconfont cursor-pointer my-style-item"
          }, null, 8, ["tips"]),
          vue.createVNode(vue.unref(styleIcon.default), {
            tips: vue.unref(index.i18n)("toolbar.style.italic"),
            props: "option.italic",
            enableProps: "italic",
            class: "icon-zitixieti iconfont cursor-pointer my-style-item"
          }, null, 8, ["tips"]),
          vue.createVNode(vue.unref(styleIcon.default), {
            tips: vue.unref(index.i18n)("toolbar.style.underline"),
            props: "option.underline",
            enableProps: "underline",
            class: "icon-zitixiahuaxian iconfont cursor-pointer my-style-item"
          }, null, 8, ["tips"]),
          vue.createVNode(vue.unref(styleIcon.default), {
            tips: vue.unref(index.i18n)("toolbar.style.lineThrough"),
            props: "option.lineThrough",
            enableProps: "lineThrough",
            class: "icon-wenben-shanchuxian iconfont cursor-pointer my-style-item"
          }, null, 8, ["tips"]),
          vue.createVNode(myColorPicker.default, {
            modelValue: vue.unref(elementUtil.multipleElementGetValue)("option.color"),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = (val) => vue.unref(elementUtil.multipleElementSetValue)("option.color", val)),
            disabled: !vue.unref(common.hasStyle)(vue.unref(elementUtil.multipleElementGetValue)("type"), "color")
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(myIcon.default, {
                class: "icon-zitiyanse iconfont",
                size: 14,
                style: { "height": "100%" },
                disabled: !vue.unref(common.hasStyle)(vue.unref(elementUtil.multipleElementGetValue)("type"), "color")
              }, null, 8, ["disabled"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue", "disabled"]),
          vue.createVNode(myColorPicker.default, {
            modelValue: vue.unref(elementUtil.multipleElementGetValue)("option.background"),
            "onUpdate:modelValue": _cache[1] || (_cache[1] = (val) => vue.unref(elementUtil.multipleElementSetValue)("option.background", val)),
            disabled: !vue.unref(common.hasStyle)(vue.unref(elementUtil.multipleElementGetValue)("type"), "background")
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(myIcon.default, {
                class: "icon-bucket iconfont",
                size: 14,
                style: { "height": "100%" },
                disabled: !vue.unref(common.hasStyle)(vue.unref(elementUtil.multipleElementGetValue)("type"), "background")
              }, null, 8, ["disabled"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue", "disabled"]),
          _cache[7] || (_cache[7] = vue.createElementVNode(
            "div",
            { class: "my-style-divider" },
            null,
            -1
            /* CACHED */
          )),
          vue.createVNode(vue.unref(styleIcon.default), {
            tips: vue.unref(index.i18n)("toolbar.style.textAlignLeft"),
            props: "option.textAlign",
            propsValue: "start",
            class: "icon-zuoduiqi iconfont cursor-pointer my-style-item",
            enableProps: "textAlign"
          }, null, 8, ["tips"]),
          vue.createVNode(vue.unref(styleIcon.default), {
            tips: vue.unref(index.i18n)("toolbar.style.textAlignCenter"),
            props: "option.textAlign",
            propsValue: "center",
            class: "icon-chuizhijuzhong iconfont cursor-pointer my-style-item",
            enableProps: "textAlign"
          }, null, 8, ["tips"]),
          vue.createVNode(vue.unref(styleIcon.default), {
            tips: vue.unref(index.i18n)("toolbar.style.textAlignRight"),
            props: "option.textAlign",
            propsValue: "end",
            enableProps: "textAlign",
            class: "icon-youduiqi iconfont cursor-pointer my-style-item"
          }, null, 8, ["tips"]),
          vue.createCommentVNode(`        <style-icon tips="\u4E24\u7AEF\u5BF9\u9F50" :modelValue="appStore.currentElement.option.textAlign == 'justify'"`),
          vue.createCommentVNode(`                    @update:model-value="flag => {if(flag) appStore.currentElement.option.textAlign = 'justify'}"`),
          vue.createCommentVNode(`                    :enable="['Text', 'Table'].includes(appStore.currentElement.type)">`),
          vue.createCommentVNode('          <i class="icon-caidan iconfont"/>'),
          vue.createCommentVNode("        </style-icon>"),
          vue.createVNode(vue.unref(styleIcon.default), {
            tips: vue.unref(index.i18n)("toolbar.style.verticalAlignTop"),
            props: "option.verticalAlign",
            propsValue: "start",
            enableProps: "verticalAlign",
            class: "icon-shangduiqi iconfont cursor-pointer my-style-item"
          }, null, 8, ["tips"]),
          vue.createVNode(vue.unref(styleIcon.default), {
            tips: vue.unref(index.i18n)("toolbar.style.verticalAlignCenter"),
            props: "option.verticalAlign",
            propsValue: "center",
            enableProps: "verticalAlign",
            class: "icon-shuipingjuzhong iconfont cursor-pointer my-style-item"
          }, null, 8, ["tips"]),
          vue.createVNode(vue.unref(styleIcon.default), {
            tips: vue.unref(index.i18n)("toolbar.style.verticalAlignBottom"),
            props: "option.verticalAlign",
            propsValue: "end",
            enableProps: "verticalAlign",
            class: "icon-xiaduiqi iconfont cursor-pointer my-style-item"
          }, null, 8, ["tips"]),
          vue.createVNode(vue.unref(styleIcon.default), {
            tips: vue.unref(index.i18n)("toolbar.style.lineBreak"),
            marginTop: "-3px",
            props: "option.lineBreak",
            enableProps: "lineBreak",
            class: "icon-wenbenhuanhang iconfont cursor-pointer my-style-item"
          }, null, 8, ["tips"]),
          vue.createVNode(vue.unref(styleIcon.default), {
            tips: vue.unref(index.i18n)("toolbar.style.borderAll"),
            props: "option.borderAll",
            enableProps: "borderAll",
            class: "icon-jurassic_border-all iconfont cursor-pointer my-style-item"
          }, null, 8, ["tips"]),
          vue.createVNode(vue.unref(styleIcon.default), {
            tips: vue.unref(index.i18n)("toolbar.style.group"),
            onClick: _cache[2] || (_cache[2] = ($event) => vue.unref(moveable.group)()),
            disabled: vue.unref(groupDisabledIs),
            class: "icon-color-zh iconfont-color cursor-pointer my-style-item"
          }, null, 8, ["tips", "disabled"]),
          vue.createVNode(vue.unref(styleIcon.default), {
            tips: vue.unref(index.i18n)("toolbar.style.unGroup"),
            onClick: _cache[3] || (_cache[3] = ($event) => vue.unref(moveable.ungroup)()),
            disabled: vue.unref(ungroupDisabledIs),
            class: "icon-color-qxzh iconfont-color cursor-pointer my-style-item"
          }, null, 8, ["tips", "disabled"]),
          vue.createVNode(toolIconPopover.default, {
            disabled: !vue.unref(common.hasStyleByTypeList)(vue.unref(elementUtil.multipleElementGetValueList)("type"), "common")
          }, {
            reference: vue.withCtx(() => [
              vue.createVNode(myIcon.default, null, {
                default: vue.withCtx(() => [..._cache[4] || (_cache[4] = [
                  vue.createElementVNode(
                    "i",
                    { class: "icon-color-zydic iconfont-color" },
                    null,
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              })
            ]),
            panel: vue.withCtx(() => [
              vue.createVNode(elementAlign.default, { elementAlignList: vue.unref(elementLayerList) }, null, 8, ["elementAlignList"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled"]),
          vue.createVNode(toolIconPopover.default, {
            disabled: !vue.unref(common.hasStyleByTypeList)(vue.unref(elementUtil.multipleElementGetValueList)("type"), "common")
          }, {
            reference: vue.withCtx(() => [
              vue.createVNode(myIcon.default, null, {
                default: vue.withCtx(() => [..._cache[5] || (_cache[5] = [
                  vue.createElementVNode(
                    "i",
                    { class: "icon-color-spz iconfont-color" },
                    null,
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              })
            ]),
            panel: vue.withCtx(() => [
              vue.createVNode(elementAlign.default, { elementAlignList: vue.unref(elementAlignList) }, null, 8, ["elementAlignList"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled"])
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=style-design.vue2.js.map
