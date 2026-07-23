import { defineComponent, openBlock, createElementBlock, createElementVNode, Fragment, renderList, unref, createBlock, createCommentVNode, normalizeStyle } from 'vue';
import ColumnView from './column-view.vue.mjs';
import '../../text/index.mjs';
import { recursionColumnDisable } from '../../../../utils/table/dataTable.mjs';
import MyText from '../../text/text.vue.mjs';

const _hoisted_1 = {
  class: "my-print-table",
  ref: "tableRef",
  border: "0",
  cellspacing: "0"
};
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "data-table",
  props: {
    element: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const itemRefs = [];
    const setItemRef = (element, el) => {
      if (el == null) {
        return;
      }
      element.runtimeOption.target = el;
      itemRefs.push(el);
    };
    const bodyStyle = (column) => {
      const style = {
        // maxWidth: column.runtimeOption.width + 'px',
        // width: column.runtimeOption.width + 'px',
        // height: column.runtimeOption.init.height + 'px',
        // maxHeight: column.runtimeOption.init.height + 'px'
      };
      style.width = column.runtimeOption.width + "px";
      if (column.contentType == "Barcode") {
        style.maxWidth = column.runtimeOption.width + "px";
      }
      if (column.runtimeOption.height != null) {
        style.minHeight = column.runtimeOption.height + "px";
      }
      if (column.option.borderAll) {
        style["border"] = "1px solid black";
      } else {
      }
      if (column.contentType == "QrCode" || column.type == "Image") {
        style.lineHeight = 0;
      }
      return style;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "table",
        _hoisted_1,
        [
          createElementVNode("tbody", null, [
            props.element.option.tableHiddenHeadIs != 1 ? (openBlock(true), createElementBlock(
              Fragment,
              { key: 0 },
              renderList(props.element.tableHeadList, (columnList, headRowIndex) => {
                return openBlock(), createElementBlock("tr", {
                  class: "my-print-border-box",
                  key: "t-" + headRowIndex
                }, [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList(columnList, (column) => {
                      return openBlock(), createElementBlock(
                        Fragment,
                        null,
                        [
                          column != null && !unref(recursionColumnDisable)(column) ? (openBlock(), createBlock(ColumnView, {
                            key: "head" + column.id,
                            column
                          }, null, 8, ["column"])) : createCommentVNode("v-if", true)
                        ],
                        64
                        /* STABLE_FRAGMENT */
                      );
                    }),
                    256
                    /* UNKEYED_FRAGMENT */
                  ))
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            )) : createCommentVNode("v-if", true),
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(props.element.tableBodyList, (bodyRowList, rowIndex) => {
                return openBlock(), createElementBlock("tr", {
                  class: "my-print-border-box",
                  key: rowIndex
                }, [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList(bodyRowList, (body, index) => {
                      return openBlock(), createElementBlock(
                        Fragment,
                        null,
                        [
                          props.element.disableCellMap == null || props.element.disableCellMap[index] != 1 ? (openBlock(), createElementBlock(
                            "td",
                            {
                              class: "my-print-table-column_body",
                              key: "body" + rowIndex + "-" + body.id,
                              ref_for: true,
                              ref: (el) => setItemRef(body, el),
                              style: normalizeStyle(bodyStyle(body))
                            },
                            [
                              body.type === "Text" ? (openBlock(), createBlock(unref(MyText), {
                                key: 0,
                                element: body
                              }, null, 8, ["element"])) : createCommentVNode("v-if", true),
                              createCommentVNode(`        <ImageView v-if="column.type === 'Image'" :element="convert(column, rowData, indexTr)"/>`)
                            ],
                            4
                            /* STYLE */
                          )) : createCommentVNode("v-if", true)
                        ],
                        64
                        /* STABLE_FRAGMENT */
                      );
                    }),
                    256
                    /* UNKEYED_FRAGMENT */
                  ))
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            )),
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(props.element.statisticsList, (bodyRowList, rowIndex) => {
                return openBlock(), createElementBlock("tr", {
                  class: "my-print-border-box",
                  key: rowIndex
                }, [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList(bodyRowList, (body, index) => {
                      return openBlock(), createElementBlock(
                        Fragment,
                        null,
                        [
                          props.element.disableCellMap == null || props.element.disableCellMap[index] != 1 ? (openBlock(), createElementBlock(
                            "td",
                            {
                              class: "my-print-table-column_body",
                              key: "s" + rowIndex + "-" + body.id,
                              ref_for: true,
                              ref: (el) => setItemRef(body, el),
                              style: normalizeStyle(bodyStyle(body))
                            },
                            [
                              body.type === "Text" ? (openBlock(), createBlock(unref(MyText), {
                                key: 0,
                                element: body
                              }, null, 8, ["element"])) : createCommentVNode("v-if", true),
                              createCommentVNode(`        <ImageView v-if="column.type === 'Image'" :element="convert(column, rowData, indexTr)"/>`)
                            ],
                            4
                            /* STYLE */
                          )) : createCommentVNode("v-if", true)
                        ],
                        64
                        /* STABLE_FRAGMENT */
                      );
                    }),
                    256
                    /* UNKEYED_FRAGMENT */
                  ))
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ],
        512
        /* NEED_PATCH */
      );
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=data-table.vue2.mjs.map
