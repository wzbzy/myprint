'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var columnView = require('./column-view.vue.js');
require('../../text/index.js');
var dataTable = require('../../../../utils/table/dataTable.js');
var text = require('../../text/text.vue.js');

const _hoisted_1 = {
  class: "my-print-table",
  ref: "tableRef",
  border: "0",
  cellspacing: "0"
};
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
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
      return vue.openBlock(), vue.createElementBlock(
        "table",
        _hoisted_1,
        [
          vue.createElementVNode("tbody", null, [
            props.element.option.tableHiddenHeadIs != 1 ? (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              { key: 0 },
              vue.renderList(props.element.tableHeadList, (columnList, headRowIndex) => {
                return vue.openBlock(), vue.createElementBlock("tr", {
                  class: "my-print-border-box",
                  key: "t-" + headRowIndex
                }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(columnList, (column) => {
                      return vue.openBlock(), vue.createElementBlock(
                        vue.Fragment,
                        null,
                        [
                          column != null && !vue.unref(dataTable.recursionColumnDisable)(column) ? (vue.openBlock(), vue.createBlock(columnView.default, {
                            key: "head" + column.id,
                            column
                          }, null, 8, ["column"])) : vue.createCommentVNode("v-if", true)
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
            )) : vue.createCommentVNode("v-if", true),
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(props.element.tableBodyList, (bodyRowList, rowIndex) => {
                return vue.openBlock(), vue.createElementBlock("tr", {
                  class: "my-print-border-box",
                  key: rowIndex
                }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(bodyRowList, (body, index) => {
                      return vue.openBlock(), vue.createElementBlock(
                        vue.Fragment,
                        null,
                        [
                          props.element.disableCellMap == null || props.element.disableCellMap[index] != 1 ? (vue.openBlock(), vue.createElementBlock(
                            "td",
                            {
                              class: "my-print-table-column_body",
                              key: "body" + rowIndex + "-" + body.id,
                              ref_for: true,
                              ref: (el) => setItemRef(body, el),
                              style: vue.normalizeStyle(bodyStyle(body))
                            },
                            [
                              body.type === "Text" ? (vue.openBlock(), vue.createBlock(vue.unref(text.default), {
                                key: 0,
                                element: body
                              }, null, 8, ["element"])) : vue.createCommentVNode("v-if", true),
                              vue.createCommentVNode(`        <ImageView v-if="column.type === 'Image'" :element="convert(column, rowData, indexTr)"/>`)
                            ],
                            4
                            /* STYLE */
                          )) : vue.createCommentVNode("v-if", true)
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
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(props.element.statisticsList, (bodyRowList, rowIndex) => {
                return vue.openBlock(), vue.createElementBlock("tr", {
                  class: "my-print-border-box",
                  key: rowIndex
                }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(bodyRowList, (body, index) => {
                      return vue.openBlock(), vue.createElementBlock(
                        vue.Fragment,
                        null,
                        [
                          props.element.disableCellMap == null || props.element.disableCellMap[index] != 1 ? (vue.openBlock(), vue.createElementBlock(
                            "td",
                            {
                              class: "my-print-table-column_body",
                              key: "s" + rowIndex + "-" + body.id,
                              ref_for: true,
                              ref: (el) => setItemRef(body, el),
                              style: vue.normalizeStyle(bodyStyle(body))
                            },
                            [
                              body.type === "Text" ? (vue.openBlock(), vue.createBlock(vue.unref(text.default), {
                                key: 0,
                                element: body
                              }, null, 8, ["element"])) : vue.createCommentVNode("v-if", true),
                              vue.createCommentVNode(`        <ImageView v-if="column.type === 'Image'" :element="convert(column, rowData, indexTr)"/>`)
                            ],
                            4
                            /* STYLE */
                          )) : vue.createCommentVNode("v-if", true)
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

exports.default = _sfc_main;
//# sourceMappingURL=data-table.vue2.js.map
