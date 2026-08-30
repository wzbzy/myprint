import { defineComponent, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, createVNode, createBlock, createCommentVNode, withCtx, createElementVNode } from 'vue';
import ElementView from './element.vue.mjs';
import { ref, onMounted, computed } from 'vue-demi';
import './container/index.mjs';
import ElementList from './element-list.vue.mjs';
import { elementHandleStatusList, elementTypeLineList, elementHandleHandleStatusList, elementTypeContainerList } from '../../constants/common.mjs';
import TableDesign from './table/data-table/table-design.vue.mjs';
import { setSelectedTargets, moveableDragTarget, moveableClearDragTarget } from '../../plugins/moveable/moveable.mjs';
import { unit2px } from '../../utils/devicePixelRatio.mjs';
import { getRecursionParentPanel } from '../../utils/elementUtil.mjs';
import MyContainer from './container/container/containerView.vue.mjs';

var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "design",
  props: {
    element: { default: () => ({}) }
  },
  setup(__props) {
    const designRef = ref();
    const containerMoveIconRef = ref();
    const props = __props;
    onMounted(() => {
      props.element.runtimeOption.target = designRef.value;
      designRef.value.element = props.element;
    });
    const style = computed(() => {
      props.element.runtimeOption.target = designRef.value;
      let width = props.element.runtimeOption.init.width;
      let height = props.element.runtimeOption.init.height;
      if (props.element.type == "DottedVerticalLine" || props.element.type == "VerticalLine") {
        const lineWidth = unit2px(props.element.option.lineWidth, getRecursionParentPanel(props.element));
        if (width < lineWidth) {
          width = lineWidth;
        }
      }
      if (props.element.type == "DottedHorizontalLine" || props.element.type == "HorizontalLine") {
        const lineWidth = unit2px(props.element.option.lineWidth, getRecursionParentPanel(props.element));
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
      setSelectedTargets([props.element.runtimeOption.target]);
    }
    function elementMoveMouseDown(event) {
      let isHandle = true;
      if (props.element.runtimeOption.status != "HANDLE") {
        isHandle = false;
        setSelectedTargets([props.element.runtimeOption.target]);
      }
      moveableDragTarget(containerMoveIconRef.value, event);
      function mouseup(_ev) {
        if (!isHandle) {
          props.element.runtimeOption.status = "NONE";
          setSelectedTargets([]);
        }
        moveableClearDragTarget();
        document.removeEventListener("mouseup", mouseup);
      }
      document.addEventListener("mouseup", mouseup);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(["my-element-wrapper", {
            "dropInIs": __props.element.runtimeOption.dragInIs,
            "design-activate-cut-ing": __props.element.runtimeOption.cutIngIs,
            "design-inactive": !unref(elementHandleStatusList).includes(__props.element.runtimeOption.status) && !unref(elementTypeLineList).includes(__props.element.type),
            "design-activate": unref(elementHandleHandleStatusList).includes(__props.element.runtimeOption.status),
            "design-activate-edit": __props.element.runtimeOption.status == "HANDLE_EDIT_ING"
          }]),
          style: normalizeStyle(unref(style)),
          ref_key: "designRef",
          ref: designRef
        },
        [
          createVNode(ElementView, { element: __props.element }, null, 8, ["element"]),
          __props.element.type === "DataTable" ? (openBlock(), createBlock(TableDesign, {
            key: 0,
            element: __props.element
          }, null, 8, ["element"])) : createCommentVNode("v-if", true),
          __props.element.type === "PageHeader" ? (openBlock(), createBlock(unref(MyContainer), {
            key: 1,
            element: __props.element
          }, {
            default: withCtx(() => [
              createVNode(ElementList, {
                "element-list": __props.element.elementList
              }, null, 8, ["element-list"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["element"])) : __props.element.type === "PageFooter" ? (openBlock(), createBlock(unref(MyContainer), {
            key: 2,
            element: __props.element
          }, {
            default: withCtx(() => [
              createVNode(ElementList, {
                "element-list": __props.element.elementList
              }, null, 8, ["element-list"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["element"])) : __props.element.type === "Container" ? (openBlock(), createBlock(unref(MyContainer), {
            key: 3,
            element: __props.element
          }, {
            default: withCtx(() => [
              createVNode(ElementList, {
                "element-list": __props.element.elementList
              }, null, 8, ["element-list"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["element"])) : createCommentVNode("v-if", true),
          unref(elementTypeContainerList).includes(__props.element.type) ? (openBlock(), createElementBlock("div", {
            key: 4,
            class: "container-edit-icon",
            onClick: elementEditClick
          }, [..._cache[1] || (_cache[1] = [
            createElementVNode(
              "i",
              { class: "icon-design-edit iconfont" },
              null,
              -1
              /* CACHED */
            )
          ])])) : createCommentVNode("v-if", true),
          __props.element.type == "Container" ? (openBlock(), createElementBlock(
            "div",
            {
              key: 5,
              class: "container-move-icon",
              ref_key: "containerMoveIconRef",
              ref: containerMoveIconRef,
              onMousedown: _cache[0] || (_cache[0] = ($event) => elementMoveMouseDown($event))
            },
            [..._cache[2] || (_cache[2] = [
              createElementVNode(
                "i",
                { class: "icon-design-move iconfont" },
                null,
                -1
                /* CACHED */
              )
            ])],
            544
            /* NEED_HYDRATION, NEED_PATCH */
          )) : createCommentVNode("v-if", true)
        ],
        6
        /* CLASS, STYLE */
      );
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=design.vue2.mjs.map
