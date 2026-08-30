import { defineComponent, openBlock, createBlock, withCtx, createVNode, unref, createElementVNode, createCommentVNode } from 'vue';
import myColorPicker from '../../my/color-picker/my-color-picker.vue.mjs';
import '../../my/icon/index.mjs';
import { hasStyle, hasStyleByTypeList } from '../../../constants/common.mjs';
import { useAppStoreHook } from '../../../stores/app.mjs';
import { alignLeft, alignHorizontalCenter, alignRight, alignTop, alignVerticalCenter, alignBottom, arrangeHorizontalSpacing, arrangeVerticalSpacing, group, ungroup } from '../../../plugins/moveable/moveable.mjs';
import { elementUp, elementDown, multipleElementGetValue, multipleElementSetValue, multipleElementGetValueList } from '../../../utils/elementUtil.mjs';
import { reactive, computed } from 'vue-demi';
import ToolIconPopover from '../../my/icon/tool-icon-popover.vue.mjs';
import ElementAlign from './toolbar-style/element-align.vue.mjs';
import FontSize from './toolbar-style/font-size.vue.mjs';
import FontFamily from './toolbar-style/font-family.vue.mjs';
import MyIcon from '../../my/icon/my-icon.vue.mjs';
import MyScrollbar from '../../my/scrollbar/my-scrollbar.vue.mjs';
import { i18n } from '../../../locales/index.mjs';
import MyStyleIcon from '../../my/icon/style-icon.vue.mjs';

var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "style-design",
  setup(__props) {
    const elementAlignList = reactive([
      [
        {
          label: i18n("toolbar.style.textAlignLeft"),
          click: alignLeft,
          icon: "icon-color-spz iconfont-color",
          enable: true
        },
        {
          label: i18n("toolbar.style.alignHorizontalCenter"),
          click: alignHorizontalCenter,
          icon: "icon-color-spjz iconfont-color",
          enable: true
        },
        {
          label: i18n("toolbar.style.textAlignRight"),
          click: alignRight,
          icon: "icon-color-spy iconfont-color",
          enable: true
        }
      ],
      [
        {
          label: i18n("toolbar.style.alignTop"),
          click: alignTop,
          icon: "icon-color-czding iconfont-color",
          enable: true
        },
        {
          label: i18n("toolbar.style.alignVerticalCenter"),
          click: alignVerticalCenter,
          icon: "icon-color-czjz iconfont-color",
          enable: true
        },
        {
          label: i18n("toolbar.style.alignBottom"),
          click: alignBottom,
          icon: "icon-color-czd iconfont-color",
          enable: true
        }
      ],
      [
        {
          label: i18n("toolbar.style.arrangeHorizontalSpacing"),
          click: arrangeHorizontalSpacing,
          icon: "icon-color-spdjfb iconfont-color",
          enable: true
        },
        {
          label: i18n("toolbar.style.arrangeVerticalSpacing"),
          click: arrangeVerticalSpacing,
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
    const elementLayerList = reactive([
      [
        {
          label: i18n("toolbar.layer.top"),
          click: () => {
            elementUp(appStore.currentElement, 999999);
          },
          icon: "icon-color-zydc iconfont-color",
          enable: true
        },
        {
          label: i18n("toolbar.layer.up.one"),
          click: () => {
            elementUp(appStore.currentElement, 1);
          },
          icon: "icon-color-syyc iconfont-color",
          enable: true
        },
        {
          label: i18n("toolbar.layer.down.one"),
          click: () => {
            elementDown(appStore.currentElement, 1);
          },
          icon: "icon-color-xyyc iconfont-color",
          enable: true
        },
        {
          label: i18n("toolbar.layer.bottom"),
          click: () => {
            elementDown(appStore.currentElement, 999999);
          },
          icon: "icon-color-zydic iconfont-color",
          enable: true
        }
      ]
    ]);
    const appStore = useAppStoreHook();
    const groupDisabledIs = computed(() => {
      if (appStore.currentElement.length > 1) {
        const groupIs = multipleElementGetValue("groupIs");
        return groupIs || groupIs == false;
      } else {
        return true;
      }
    });
    const ungroupDisabledIs = computed(() => {
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
    const fontDisabledComputed = computed(() => {
      if (appStore.currentElement.length == 0) {
        return true;
      }
      for (let currentElementElement of appStore.currentElement) {
        if (!hasStyle(currentElementElement.type, "fontFamily")) {
          return true;
        }
      }
      return false;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MyScrollbar, {
        class: "my-style-design",
        disabledScrollBar: "",
        "hover-blod": false
      }, {
        default: withCtx(() => [
          createVNode(FontFamily, { disabled: unref(fontDisabledComputed) }, null, 8, ["disabled"]),
          createVNode(FontSize, { disabled: unref(fontDisabledComputed) }, null, 8, ["disabled"]),
          _cache[6] || (_cache[6] = createElementVNode(
            "div",
            { class: "my-style-divider" },
            null,
            -1
            /* CACHED */
          )),
          createVNode(unref(MyStyleIcon), {
            tips: unref(i18n)("toolbar.style.blob"),
            props: "option.bold",
            enableProps: "bold",
            class: "icon-zitijiacu iconfont cursor-pointer my-style-item"
          }, null, 8, ["tips"]),
          createVNode(unref(MyStyleIcon), {
            tips: unref(i18n)("toolbar.style.italic"),
            props: "option.italic",
            enableProps: "italic",
            class: "icon-zitixieti iconfont cursor-pointer my-style-item"
          }, null, 8, ["tips"]),
          createVNode(unref(MyStyleIcon), {
            tips: unref(i18n)("toolbar.style.underline"),
            props: "option.underline",
            enableProps: "underline",
            class: "icon-zitixiahuaxian iconfont cursor-pointer my-style-item"
          }, null, 8, ["tips"]),
          createVNode(unref(MyStyleIcon), {
            tips: unref(i18n)("toolbar.style.lineThrough"),
            props: "option.lineThrough",
            enableProps: "lineThrough",
            class: "icon-wenben-shanchuxian iconfont cursor-pointer my-style-item"
          }, null, 8, ["tips"]),
          createVNode(myColorPicker, {
            modelValue: unref(multipleElementGetValue)("option.color"),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = (val) => unref(multipleElementSetValue)("option.color", val)),
            disabled: !unref(hasStyle)(unref(multipleElementGetValue)("type"), "color")
          }, {
            default: withCtx(() => [
              createVNode(MyIcon, {
                class: "icon-zitiyanse iconfont",
                size: 14,
                style: { "height": "100%" },
                disabled: !unref(hasStyle)(unref(multipleElementGetValue)("type"), "color")
              }, null, 8, ["disabled"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue", "disabled"]),
          createVNode(myColorPicker, {
            modelValue: unref(multipleElementGetValue)("option.background"),
            "onUpdate:modelValue": _cache[1] || (_cache[1] = (val) => unref(multipleElementSetValue)("option.background", val)),
            disabled: !unref(hasStyle)(unref(multipleElementGetValue)("type"), "background")
          }, {
            default: withCtx(() => [
              createVNode(MyIcon, {
                class: "icon-bucket iconfont",
                size: 14,
                style: { "height": "100%" },
                disabled: !unref(hasStyle)(unref(multipleElementGetValue)("type"), "background")
              }, null, 8, ["disabled"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue", "disabled"]),
          _cache[7] || (_cache[7] = createElementVNode(
            "div",
            { class: "my-style-divider" },
            null,
            -1
            /* CACHED */
          )),
          createVNode(unref(MyStyleIcon), {
            tips: unref(i18n)("toolbar.style.textAlignLeft"),
            props: "option.textAlign",
            propsValue: "start",
            class: "icon-zuoduiqi iconfont cursor-pointer my-style-item",
            enableProps: "textAlign"
          }, null, 8, ["tips"]),
          createVNode(unref(MyStyleIcon), {
            tips: unref(i18n)("toolbar.style.textAlignCenter"),
            props: "option.textAlign",
            propsValue: "center",
            class: "icon-chuizhijuzhong iconfont cursor-pointer my-style-item",
            enableProps: "textAlign"
          }, null, 8, ["tips"]),
          createVNode(unref(MyStyleIcon), {
            tips: unref(i18n)("toolbar.style.textAlignRight"),
            props: "option.textAlign",
            propsValue: "end",
            enableProps: "textAlign",
            class: "icon-youduiqi iconfont cursor-pointer my-style-item"
          }, null, 8, ["tips"]),
          createCommentVNode(`        <style-icon tips="\u4E24\u7AEF\u5BF9\u9F50" :modelValue="appStore.currentElement.option.textAlign == 'justify'"`),
          createCommentVNode(`                    @update:model-value="flag => {if(flag) appStore.currentElement.option.textAlign = 'justify'}"`),
          createCommentVNode(`                    :enable="['Text', 'Table'].includes(appStore.currentElement.type)">`),
          createCommentVNode('          <i class="icon-caidan iconfont"/>'),
          createCommentVNode("        </style-icon>"),
          createVNode(unref(MyStyleIcon), {
            tips: unref(i18n)("toolbar.style.verticalAlignTop"),
            props: "option.verticalAlign",
            propsValue: "start",
            enableProps: "verticalAlign",
            class: "icon-shangduiqi iconfont cursor-pointer my-style-item"
          }, null, 8, ["tips"]),
          createVNode(unref(MyStyleIcon), {
            tips: unref(i18n)("toolbar.style.verticalAlignCenter"),
            props: "option.verticalAlign",
            propsValue: "center",
            enableProps: "verticalAlign",
            class: "icon-shuipingjuzhong iconfont cursor-pointer my-style-item"
          }, null, 8, ["tips"]),
          createVNode(unref(MyStyleIcon), {
            tips: unref(i18n)("toolbar.style.verticalAlignBottom"),
            props: "option.verticalAlign",
            propsValue: "end",
            enableProps: "verticalAlign",
            class: "icon-xiaduiqi iconfont cursor-pointer my-style-item"
          }, null, 8, ["tips"]),
          createVNode(unref(MyStyleIcon), {
            tips: unref(i18n)("toolbar.style.lineBreak"),
            marginTop: "-3px",
            props: "option.lineBreak",
            enableProps: "lineBreak",
            class: "icon-wenbenhuanhang iconfont cursor-pointer my-style-item"
          }, null, 8, ["tips"]),
          createVNode(unref(MyStyleIcon), {
            tips: unref(i18n)("toolbar.style.borderAll"),
            props: "option.borderAll",
            enableProps: "borderAll",
            class: "icon-jurassic_border-all iconfont cursor-pointer my-style-item"
          }, null, 8, ["tips"]),
          createVNode(unref(MyStyleIcon), {
            tips: unref(i18n)("toolbar.style.group"),
            onClick: _cache[2] || (_cache[2] = ($event) => unref(group)()),
            disabled: unref(groupDisabledIs),
            class: "icon-color-zh iconfont-color cursor-pointer my-style-item"
          }, null, 8, ["tips", "disabled"]),
          createVNode(unref(MyStyleIcon), {
            tips: unref(i18n)("toolbar.style.unGroup"),
            onClick: _cache[3] || (_cache[3] = ($event) => unref(ungroup)()),
            disabled: unref(ungroupDisabledIs),
            class: "icon-color-qxzh iconfont-color cursor-pointer my-style-item"
          }, null, 8, ["tips", "disabled"]),
          createVNode(ToolIconPopover, {
            disabled: !unref(hasStyleByTypeList)(unref(multipleElementGetValueList)("type"), "common")
          }, {
            reference: withCtx(() => [
              createVNode(MyIcon, null, {
                default: withCtx(() => [..._cache[4] || (_cache[4] = [
                  createElementVNode(
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
            panel: withCtx(() => [
              createVNode(ElementAlign, { elementAlignList: unref(elementLayerList) }, null, 8, ["elementAlignList"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled"]),
          createVNode(ToolIconPopover, {
            disabled: !unref(hasStyleByTypeList)(unref(multipleElementGetValueList)("type"), "common")
          }, {
            reference: withCtx(() => [
              createVNode(MyIcon, null, {
                default: withCtx(() => [..._cache[5] || (_cache[5] = [
                  createElementVNode(
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
            panel: withCtx(() => [
              createVNode(ElementAlign, { elementAlignList: unref(elementAlignList) }, null, 8, ["elementAlignList"])
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

export { _sfc_main as default };
//# sourceMappingURL=style-design.vue2.mjs.map
