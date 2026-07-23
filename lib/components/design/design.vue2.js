'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var element = require('./element.vue.js');
var vueDemi = require('vue-demi');
require('./container/index.js');
var elementList = require('./element-list.vue.js');
var common = require('../../constants/common.js');
var tableDesign = require('./table/data-table/table-design.vue.js');
var moveable = require('../../plugins/moveable/moveable.js');
var devicePixelRatio = require('../../utils/devicePixelRatio.js');
var elementUtil = require('../../utils/elementUtil.js');
var containerView = require('./container/container/containerView.vue.js');

var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "design",
  props: {
    element: { default: () => ({}) }
  },
  setup(__props) {
    const designRef = vueDemi.ref();
    const containerMoveIconRef = vueDemi.ref();
    const props = __props;
    vueDemi.onMounted(() => {
      props.element.runtimeOption.target = designRef.value;
      designRef.value.element = props.element;
    });
    const style = vueDemi.computed(() => {
      props.element.runtimeOption.target = designRef.value;
      let width = props.element.runtimeOption.init.width;
      let height = props.element.runtimeOption.init.height;
      if (props.element.type == "DottedVerticalLine" || props.element.type == "VerticalLine") {
        const lineWidth = devicePixelRatio.unit2px(props.element.option.lineWidth, elementUtil.getRecursionParentPanel(props.element));
        if (width < lineWidth) {
          width = lineWidth;
        }
      }
      if (props.element.type == "DottedHorizontalLine" || props.element.type == "HorizontalLine") {
        const lineWidth = devicePixelRatio.unit2px(props.element.option.lineWidth, elementUtil.getRecursionParentPanel(props.element));
        if (height < lineWidth) {
          height = lineWidth;
        }
      }
      return {
        left: props.element.runtimeOption.init.x + "px",
        top: props.element.runtimeOption.init.y + "px",
        transform: `translate(0px, 0px) rotate(${props.element.runtimeOption.init.runtimeOption.rotate}deg)`,
        width: width + "px",
        height: height + "px"
        // maxWidth: widthValueUnit(element),
        // maxHeight: heightValueUnit(element),
      };
    });
    function elementEditClick() {
      moveable.setSelectedTargets([props.element.runtimeOption.target]);
    }
    function elementMoveMouseDown(event) {
      let isHandle = true;
      if (props.element.runtimeOption.status != "HANDLE") {
        isHandle = false;
        moveable.setSelectedTargets([props.element.runtimeOption.target]);
      }
      moveable.moveableDragTarget(containerMoveIconRef.value, event);
      function mouseup(_ev) {
        if (!isHandle) {
          props.element.runtimeOption.status = "NONE";
          moveable.setSelectedTargets([]);
        }
        moveable.moveableClearDragTarget();
        document.removeEventListener("mouseup", mouseup);
      }
      document.addEventListener("mouseup", mouseup);
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(
        "div",
        {
          class: vue.normalizeClass(["my-element-wrapper", {
            "dropInIs": __props.element.runtimeOption.dragInIs,
            "design-activate-cut-ing": __props.element.runtimeOption.cutIngIs,
            "design-inactive": !vue.unref(common.elementHandleStatusList).includes(__props.element.runtimeOption.status) && !vue.unref(common.elementTypeLineList).includes(__props.element.type),
            "design-activate": vue.unref(common.elementHandleHandleStatusList).includes(__props.element.runtimeOption.status),
            "design-activate-edit": __props.element.runtimeOption.status == "HANDLE_EDIT_ING"
          }]),
          style: vue.normalizeStyle(vue.unref(style)),
          ref_key: "designRef",
          ref: designRef
        },
        [
          vue.createVNode(element.default, { element: __props.element }, null, 8, ["element"]),
          __props.element.type === "DataTable" ? (vue.openBlock(), vue.createBlock(tableDesign.default, {
            key: 0,
            element: __props.element
          }, null, 8, ["element"])) : vue.createCommentVNode("v-if", true),
          __props.element.type === "PageHeader" ? (vue.openBlock(), vue.createBlock(vue.unref(containerView.default), {
            key: 1,
            element: __props.element
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(elementList.default, {
                "element-list": __props.element.elementList
              }, null, 8, ["element-list"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["element"])) : __props.element.type === "PageFooter" ? (vue.openBlock(), vue.createBlock(vue.unref(containerView.default), {
            key: 2,
            element: __props.element
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(elementList.default, {
                "element-list": __props.element.elementList
              }, null, 8, ["element-list"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["element"])) : __props.element.type === "Container" ? (vue.openBlock(), vue.createBlock(vue.unref(containerView.default), {
            key: 3,
            element: __props.element
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(elementList.default, {
                "element-list": __props.element.elementList
              }, null, 8, ["element-list"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["element"])) : vue.createCommentVNode("v-if", true),
          vue.unref(common.elementTypeContainerList).includes(__props.element.type) ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 4,
            class: "container-edit-icon",
            onClick: elementEditClick
          }, [..._cache[1] || (_cache[1] = [
            vue.createElementVNode(
              "i",
              { class: "icon-design-edit iconfont" },
              null,
              -1
              /* CACHED */
            )
          ])])) : vue.createCommentVNode("v-if", true),
          __props.element.type == "Container" ? (vue.openBlock(), vue.createElementBlock(
            "div",
            {
              key: 5,
              class: "container-move-icon",
              ref_key: "containerMoveIconRef",
              ref: containerMoveIconRef,
              onMousedown: _cache[0] || (_cache[0] = ($event) => elementMoveMouseDown($event))
            },
            [..._cache[2] || (_cache[2] = [
              vue.createElementVNode(
                "i",
                { class: "icon-design-move iconfont" },
                null,
                -1
                /* CACHED */
              )
            ])],
            544
            /* NEED_HYDRATION, NEED_PATCH */
          )) : vue.createCommentVNode("v-if", true)
        ],
        6
        /* CLASS, STYLE */
      );
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=design.vue2.js.map
