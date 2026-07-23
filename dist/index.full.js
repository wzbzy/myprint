(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('..../components/content/widget/index.vue'), require('..../components/content/panel/index.vue'), require('..../utils/utils'), require('..../utils/historyUtil'), require('..../stores/app'), require('..../components/my/mouse-tips/my-mouse-tips.vue'), require('..../utils/elementUtil'), require('..../plugins/moveable/selecto'), require('..../components/my/message/my-message'), require('..../printer'), require('..../locales'), require('..../components/preview/preview.vue'), require('..../components/preview/autoPage'), require('..../utils/pdfUtil'), require('..../utils/devicePixelRatio'), require('..../api/pdfServer'), require('..../utils/myprint'), require('..../plugins/myprintClientService'), require('..../components/design/element.vue'), require('..../components/design/table/data-table/data-table.vue'), require('..../components/design/container'), require('..../stores/config'), require('..../utils/numberUtil'), require('..../utils/table/dataTable'), require('..../components/my/scrollbar/my-scrollbar.vue'), require('..../components/my/button/my-Button.vue'), require('..../components/my/dialog/my-dialog.vue'), require('..../components/my/select/my-select.vue'), require('..../plugins/moveable/moveable_js'), require('vue3-colorpicker/style.css'), require('vue-cropper/dist/index.css'), require('....../components/my/message/my-message.vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue', '..../components/content/widget/index.vue', '..../components/content/panel/index.vue', '..../utils/utils', '..../utils/historyUtil', '..../stores/app', '..../components/my/mouse-tips/my-mouse-tips.vue', '..../utils/elementUtil', '..../plugins/moveable/selecto', '..../components/my/message/my-message', '..../printer', '..../locales', '..../components/preview/preview.vue', '..../components/preview/autoPage', '..../utils/pdfUtil', '..../utils/devicePixelRatio', '..../api/pdfServer', '..../utils/myprint', '..../plugins/myprintClientService', '..../components/design/element.vue', '..../components/design/table/data-table/data-table.vue', '..../components/design/container', '..../stores/config', '..../utils/numberUtil', '..../utils/table/dataTable', '..../components/my/scrollbar/my-scrollbar.vue', '..../components/my/button/my-Button.vue', '..../components/my/dialog/my-dialog.vue', '..../components/my/select/my-select.vue', '..../plugins/moveable/moveable_js', 'vue3-colorpicker/style.css', 'vue-cropper/dist/index.css', '....../components/my/message/my-message.vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.MyPrinterDesign = {}, global.Vue, global.widget, global.PanelView, global.utils, global.historyUtil, global.app, global.MyMouseTips, global.elementUtil, global.selecto, global.myMessage, global.printer, global.locales, global.Preview$1, global.autoPage$1, global.pdfUtil, global.devicePixelRatio, global.pdfServer, global.myprint, global.myprintClientService, global.ElementView, global.DataTable, global.container, global.config, global.numberUtil, global.dataTable, global.MyScrollbar, global.MyButton, global.MyDialog, global.MySelect, null, null, null, global.MessageView));
})(this, (function (exports, vue, widget, PanelView, utils, historyUtil, app, MyMouseTips, elementUtil, selecto, myMessage, printer, locales, Preview$1, autoPage$1, pdfUtil, devicePixelRatio, pdfServer, myprint, myprintClientService, ElementView, DataTable, container, config, numberUtil, dataTable, MyScrollbar, MyButton, MyDialog, MySelect, moveable_js, style_css, index_css, MessageView) { 'use strict';

  var isVue2 = false;

  const _hoisted_1$2 = ["data-rotation"];
  const _hoisted_2$2 = {
    class: "my-aside display-flex-column",
    style: { "border-right": "1px #e9e9e9 solid", "background": "#f8f8f8" }
  };
  const _hoisted_3$2 = { class: "my-main design-container-root_main" };
  var _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    props: {
      module: {},
      template: {},
      height: {},
      saveTemplate: {},
      generateImg: { type: Boolean },
      showBackButton: { type: Boolean, default: true },
      showPrintButton: { type: Boolean, default: true },
      showDownloadPdfButton: { type: Boolean, default: true },
      showPreviewButton: { type: Boolean, default: true },
      showClearButton: { type: Boolean, default: true },
      showSaveButton: { type: Boolean, default: true }
    },
    emits: ["back", "panelImg"],
    setup(__props, { emit: __emit }) {
      const appStore = app.useAppStoreHook();
      const $emit = __emit;
      const data = vue.reactive({
        buildImgIs: false
      });
      const provider = vue.ref({});
      const panel = vue.reactive({
        runtimeOption: {
          dragInIs: false
        },
        type: "Panel",
        dragSnapPanelIs: 1,
        dragSnapIs: 1
      });
      const previewData = vue.ref([]);
      elementUtil.setCurrentPanel(panel);
      const props = __props;
      const style = vue.computed(() => {
        return {
          height: props.height
        };
      });
      vue.onMounted(() => {
        utils.mitt.on("saveTemplate", saveTemplate);
        initModule();
        initTemplate();
        selecto.newSelecto();
      });
      vue.onUnmounted(() => {
        utils.mitt.off("saveTemplate", saveTemplate);
      });
      vue.watch(
        () => props.module,
        (_n, _o) => {
          if (props.module) {
            initModule();
          }
        },
        { deep: true }
        // 🔑 深度监听
      );
      function initModule() {
        if (!props.module) {
          return;
        }
        provider.value = JSON.parse(props.module.provider);
        previewData.value = JSON.parse(props.module.previewData);
        elementUtil.setPreviewData(previewData.value);
        elementUtil.setProvider(provider.value);
        elementUtil.initPanel(panel, provider);
        elementUtil.setCurrentPanel(panel);
      }
      const templateWatchStop = vue.watch(() => props.template, (_n, _o) => {
        if (props.template) {
          initTemplate();
          templateWatchStop();
        }
      });
      function initTemplate() {
        if (!props.template) {
          return;
        }
        utils.to(JSON.parse(props.template.content), panel);
        elementUtil.setCurrentPanel(panel);
        if (!panel.watermarkContent) ;
        if (!panel.groupList) {
          panel.groupList = [];
        }
        if (!panel.auxiliaryLineList) {
          panel.auxiliaryLineList = [];
        }
        for (let myAuxiliaryLine of panel.auxiliaryLineList) {
          myAuxiliaryLine.runtimeOption = { x: 0, y: 0, auxiliaryLineStatus: "SHOW" };
        }
        panel.runtimeOption = {};
        for (let i = 0; i < panel.elementList.length; i++) {
          const element = panel.elementList[i];
          elementUtil.parentInitElement(panel, panel, element, i);
        }
        panel.pageHeader && elementUtil.parentInitElement(panel, panel, panel.pageHeader, 0);
        panel.pageFooter && elementUtil.parentInitElement(panel, panel, panel.pageFooter, 0);
        historyUtil.init();
        if (provider.value.pageUnit == void 0) {
          provider.value.pageUnit = "px";
        }
        utils.mitt.emit("updatePanel");
        utils.mitt.emit("changePageSize");
      }
      function back() {
        $emit("back");
      }
      function saveTemplate() {
        if (props.generateImg) {
          if (!data.buildImgIs) {
            data.buildImgIs = true;
            printer.MyPrinter.imgChrome({ previewDataList: [elementUtil.defaultPreviewData(previewData.value)[0]] }).then((res) => {
              $emit("panelImg", res.blobList);
              data.buildImgIs = false;
            }).catch((_e) => {
              data.buildImgIs = false;
            });
          }
        }
        const template = {};
        template.name = panel.name;
        template.content = JSON.stringify(panel, (key, value) => {
          if ("runtimeOption" == key) return void 0;
          return value;
        });
        if (props.saveTemplate != null) {
          props.saveTemplate(template).then((_res) => {
            myMessage.MyMessage.success(locales.i18n("common.save.success"));
          }).catch((e) => {
            let failMsg = locales.i18n("common.save.fail");
            if (e.msg) {
              failMsg = failMsg + ": " + e.msg;
            }
            myMessage.MyMessage.success(failMsg);
          });
        }
      }
      return (_ctx, _cache) => {
        var _a;
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("section", vue.mergeProps({ class: "design-container-root cursor-resize" }, _ctx.$attrs, {
              style: vue.unref(style),
              "data-rotation": vue.unref(appStore).dataRotation
            }), [
              vue.createElementVNode("aside", _hoisted_2$2, [
                vue.createVNode(widget, {
                  "module-name": (_a = props.module) == null ? void 0 : _a.name,
                  showBackButton: __props.showBackButton,
                  onBack: back
                }, null, 8, ["module-name", "showBackButton"])
              ]),
              vue.createElementVNode("main", _hoisted_3$2, [
                vue.createVNode(PanelView, { designProps: props })
              ])
            ], 16, _hoisted_1$2),
            vue.createVNode(MyMouseTips)
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  });

  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  var DesignPanel = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "index.vue"]]);

  const _hoisted_1$1 = { class: "my-print-preview-panel__wrap my-print-print_hidden" };
  const _hoisted_2$1 = { class: "preview-panel__model" };
  const _hoisted_3$1 = { class: "my-print-preview-panel__content" };
  var _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
    __name: "print",
    setup(__props, { expose: __expose }) {
      __expose({
        handleChromePrint,
        handleClientPrint,
        handleChromeDownloadImg,
        handleServerDownloadImg,
        handleChromeDownloadPdf,
        handleClientDownloadPdf,
        handleServerDownloadPdf
      });
      const data = vue.reactive({
        dialogVisible: false,
        pageList: [],
        resolveMap: {},
        previewTimeOutMap: {},
        panel: null
      });
      const previewContentRef = vue.ref();
      let itemRefs = {};
      function setItemRef(el, item) {
        itemRefs[item.id] = el;
      }
      function handleChromePrint(printProps) {
        return new Promise(async (resolve, _reject) => {
          data.resolveMap[printProps.taskId] = resolve;
          data.panel = printProps.panel;
          await vue.nextTick();
          await autoPage$1.autoPage(previewContentRef, data.pageList, data.panel, printProps.previewDataList);
          await vue.nextTick();
          myprintClientService.handleTimeOut(printProps, data.previewTimeOutMap, data.resolveMap);
          printArea();
          data.pageList.length = 0;
          myprintClientService.printResult(printProps.taskId, {
            status: "SUCCESS",
            type: "CHROME_PRINT"
          }, data.previewTimeOutMap, data.resolveMap);
        });
      }
      function handleClientPrint(printProps) {
        return new Promise(async (resolve, _reject) => {
          data.resolveMap[printProps.taskId] = resolve;
          if (printProps.panel) {
            data.panel = printProps.panel;
            await vue.nextTick();
            await autoPage$1.autoPage(previewContentRef, data.pageList, data.panel, printProps.previewDataList);
            await vue.nextTick();
          }
          myprintClientService.handleTimeOut(printProps, data.previewTimeOutMap, data.resolveMap);
          if (!myprintClientService.myPrintClientService.connectIs()) {
            myprintClientService.printResult(printProps.taskId, {
              status: "ERROR",
              msg: "\u5BA2\u6237\u7AEF\u672A\u8FDE\u63A5",
              type: "CLIENT_PRINT"
            }, data.previewTimeOutMap, data.resolveMap);
            return;
          }
          myprintClientService.myPrintClientService.print({
            cmd: "print",
            taskId: printProps.taskId,
            options: {
              ...printProps,
              title: printProps.title ? printProps.title : printProps.panel ? printProps.panel.name : void 0,
              html: printProps.panel ? myprint.getPrintElementHtml(previewContentRef.value, data.pageList) : void 0,
              file: printProps.file ? printProps.file : void 0,
              panel: void 0,
              previewDataList: void 0
            }
          }, data.panel).then((clientCmd) => {
            myprintClientService.handleClientResult(clientCmd, myprintClientService.printResult, data.previewTimeOutMap, data.resolveMap);
          });
        });
      }
      function handleChromeDownloadImg(printProps) {
        return new Promise(async (resolve, _reject) => {
          data.resolveMap[printProps.taskId] = resolve;
          myprintClientService.handleTimeOut(printProps, data.previewTimeOutMap, data.resolveMap);
          data.panel = printProps.panel;
          await vue.nextTick();
          await autoPage$1.autoPage(previewContentRef, data.pageList, data.panel, printProps.previewDataList);
          pdfUtil.chrome2Img(previewContentRef.value, {
            width: devicePixelRatio.unit2px(data.panel.width, data.panel),
            height: devicePixelRatio.unit2px(data.panel.height, data.panel)
          }).then((blobList) => {
            data.pageList = [];
            myprintClientService.printResult(printProps.taskId, {
              status: "SUCCESS",
              blobList,
              type: "CHROME_GENERATE_IMG"
            }, data.previewTimeOutMap, data.resolveMap);
          });
        });
      }
      function handleServerDownloadImg(printProps) {
        return new Promise(async (resolve, reject) => {
          data.resolveMap[printProps.taskId] = resolve;
          myprintClientService.handleTimeOut(printProps, data.previewTimeOutMap, data.resolveMap);
          data.panel = printProps.panel;
          await vue.nextTick();
          await autoPage$1.autoPage(previewContentRef, data.pageList, data.panel, printProps.previewDataList);
          const html = myprint.getPrintElementHtml(previewContentRef.value, data.pageList);
          pdfServer.downloadImg({
            content: html,
            height: devicePixelRatio.unit2unit(elementUtil.getCurrentPanelUnit(data.panel), "mm", data.panel.height),
            width: devicePixelRatio.unit2unit(elementUtil.getCurrentPanelUnit(data.panel), "mm", data.panel.width)
          }).then((blob) => {
            myprintClientService.printResult(printProps.taskId, {
              status: "SUCCESS",
              blob,
              type: "SERVER_GENERATE_IMG"
            }, data.previewTimeOutMap, data.resolveMap);
          }).catch((e) => {
            reject({
              status: "SUCCESS",
              msg: e.msg,
              type: "SERVER_GENERATE_IMG"
            });
          });
        });
      }
      function handleChromeDownloadPdf(printProps) {
        return new Promise(async (resolve, reject) => {
          data.resolveMap[printProps.taskId] = resolve;
          myprintClientService.handleTimeOut(printProps, data.previewTimeOutMap, data.resolveMap);
          data.panel = printProps.panel;
          await vue.nextTick();
          await autoPage$1.autoPage(previewContentRef, data.pageList, data.panel, printProps.previewDataList);
          pdfUtil.toPdf(previewContentRef.value, {
            width: devicePixelRatio.unit2px(data.panel.width, data.panel),
            height: devicePixelRatio.unit2px(data.panel.height, data.panel)
          }).then((blob) => {
            data.pageList.length = 0;
            myprintClientService.printResult(printProps.taskId, {
              status: "SUCCESS",
              blob,
              type: "CHROME_GENERATE_PDF"
            }, data.previewTimeOutMap, data.resolveMap);
          }).catch((e) => {
            data.pageList.length = 0;
            reject({
              status: "ERROR",
              msg: e.msg,
              type: "CHROME_GENERATE_PDF"
            });
          });
        });
      }
      function handleClientDownloadPdf(printProps) {
        return new Promise(async (resolve, reject) => {
          data.resolveMap[printProps.taskId] = resolve;
          myprintClientService.handleTimeOut(printProps, data.previewTimeOutMap, data.resolveMap);
          data.panel = printProps.panel;
          await vue.nextTick();
          await autoPage$1.autoPage(previewContentRef, data.pageList, data.panel, printProps.previewDataList);
          myprintClientService.myPrintClientService.print({
            options: { html: myprint.getPrintElementHtml(previewContentRef.value, data.pageList) },
            cmd: "generatePdf",
            taskId: printProps.taskId
          }, data.panel).then((res) => {
            myprintClientService.handleClientResult(res, myprintClientService.printResult, data.previewTimeOutMap, data.resolveMap);
          }).catch((e) => {
            reject({
              status: "ERROR",
              msg: e.msg,
              type: "CLIENT_GENERATE_PDF"
            });
          });
        });
      }
      function handleServerDownloadPdf(printProps) {
        return new Promise(async (resolve, reject) => {
          data.resolveMap[printProps.taskId] = resolve;
          myprintClientService.handleTimeOut(printProps, data.previewTimeOutMap, data.resolveMap);
          data.panel = printProps.panel;
          await vue.nextTick();
          await autoPage$1.autoPage(previewContentRef, data.pageList, data.panel, printProps.previewDataList);
          const html = myprint.getPrintElementHtml(previewContentRef.value, data.pageList);
          pdfServer.downloadPdf({
            content: html,
            height: devicePixelRatio.unit2unit(elementUtil.getCurrentPanelUnit(data.panel), "mm", data.panel.height),
            width: devicePixelRatio.unit2unit(elementUtil.getCurrentPanelUnit(data.panel), "mm", data.panel.width)
          }).then((blob) => {
            myprintClientService.printResult(printProps.taskId, {
              status: "SUCCESS",
              blob,
              type: "SERVER_GENERATE_PDF"
            }, data.previewTimeOutMap, data.resolveMap);
          }).catch((e) => {
            reject({
              status: "ERROR",
              msg: e.msg,
              type: "SERVER_GENERATE_PDF"
            });
          });
        });
      }
      function printArea() {
        const html = myprint.getPrintElementHtml(previewContentRef.value, data.pageList);
        myprint.iFramePrint(data.panel, html);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
          vue.createElementVNode("div", _hoisted_2$1, [
            vue.createElementVNode("div", _hoisted_3$1, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(vue.unref(data).pageList, (page, index) => {
                  return vue.openBlock(), vue.createElementBlock(
                    "div",
                    {
                      ref_for: true,
                      ref_key: "previewContentRef",
                      ref: previewContentRef,
                      key: index,
                      class: "my-print-preview-panel__content_page preview-page-top",
                      style: vue.normalizeStyle({
                        width: vue.unref(elementUtil.valueUnit)(page.width, vue.unref(data).panel),
                        minHeight: vue.unref(elementUtil.valueUnit)(page.height, vue.unref(data).panel)
                      })
                    },
                    [
                      (vue.openBlock(true), vue.createElementBlock(
                        vue.Fragment,
                        null,
                        vue.renderList(page.previewWrapperList, (element, index2) => {
                          return vue.openBlock(), vue.createBlock(Preview$1, {
                            ref_for: true,
                            ref: (el) => setItemRef(el, element),
                            key: index2,
                            preview: element
                          }, null, 8, ["preview"]);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ],
                    4
                    /* STYLE */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ])
        ]);
      };
    }
  });

  var PrintView = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "print.vue"]]);

  var _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "preview",
    props: {
      preview: { default: () => ({}) }
    },
    setup(__props) {
      const style = vue.computed(() => {
        const _style = {
          width: elementUtil.valueUnit(props.preview.width, elementUtil.getRecursionParentPanel(props.preview)),
          left: elementUtil.valueUnit(props.preview.x, elementUtil.getRecursionParentPanel(props.preview)),
          top: elementUtil.valueUnit(props.preview.y, elementUtil.getRecursionParentPanel(props.preview)),
          zIndex: props.preview.runtimeOption.index
        };
        if (props.preview.option.rotate != null) {
          _style.transform = `rotate(${props.preview.option.rotate}deg)`;
        }
        if (props.preview.heightIs) {
          _style.height = elementUtil.valueUnit(props.preview.height, elementUtil.getRecursionParentPanel(props.preview));
        }
        return _style;
      });
      const props = __props;
      const previewWrapRef = vue.ref();
      vue.onMounted(() => {
        props.preview.target = previewWrapRef.value;
      });
      vue.onUnmounted(() => {
        props.preview.target = void 0;
      });
      return (_ctx, _cache) => {
        const _component_Preview = vue.resolveComponent("Preview", true);
        return vue.openBlock(), vue.createElementBlock(
          "div",
          {
            class: "my-print-preview-wrap",
            ref_key: "previewWrapRef",
            ref: previewWrapRef,
            style: vue.normalizeStyle(vue.unref(style))
          },
          [
            vue.createVNode(ElementView, { element: __props.preview }, null, 8, ["element"]),
            __props.preview.type === "DataTable" ? (vue.openBlock(), vue.createBlock(DataTable, {
              key: 0,
              element: __props.preview
            }, null, 8, ["element"])) : __props.preview.type === "PageHeader" ? (vue.openBlock(), vue.createBlock(vue.unref(container.MyContainer), { key: 1 }, {
              default: vue.withCtx(() => [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(__props.preview.previewWrapperList, (item, index) => {
                    return vue.openBlock(), vue.createBlock(_component_Preview, {
                      preview: item,
                      key: index
                    }, null, 8, ["preview"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            })) : __props.preview.type === "PageFooter" ? (vue.openBlock(), vue.createBlock(vue.unref(container.MyContainer), { key: 2 }, {
              default: vue.withCtx(() => [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(__props.preview.previewWrapperList, (item, index) => {
                    return vue.openBlock(), vue.createBlock(_component_Preview, {
                      preview: item,
                      key: index
                    }, null, 8, ["preview"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            })) : __props.preview.type === "Container" ? (vue.openBlock(), vue.createBlock(vue.unref(container.MyContainer), { key: 3 }, {
              default: vue.withCtx(() => [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(__props.preview.previewWrapperList, (item, index) => {
                    return vue.openBlock(), vue.createBlock(_component_Preview, {
                      preview: item,
                      key: index
                    }, null, 8, ["preview"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            })) : vue.createCommentVNode("v-if", true)
          ],
          4
          /* STYLE */
        );
      };
    }
  });

  var Preview = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "preview.vue"]]);

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var lodashExports = {};
  var lodash = {
    get exports(){ return lodashExports; },
    set exports(v){ lodashExports = v; },
  };

  (function(module, exports) {
    (function() {
      var undefined$1;
      var VERSION = "4.18.1";
      var LARGE_ARRAY_SIZE = 200;
      var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`", INVALID_TEMPL_IMPORTS_ERROR_TEXT = "Invalid `imports` option passed into `_.template`";
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var MAX_MEMOIZE_SIZE = 500;
      var PLACEHOLDER = "__lodash_placeholder__";
      var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
      var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
      var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
      var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
      var HOT_COUNT = 800, HOT_SPAN = 16;
      var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
      var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
      var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
      var wrapFlags = [
        ["ary", WRAP_ARY_FLAG],
        ["bind", WRAP_BIND_FLAG],
        ["bindKey", WRAP_BIND_KEY_FLAG],
        ["curry", WRAP_CURRY_FLAG],
        ["curryRight", WRAP_CURRY_RIGHT_FLAG],
        ["flip", WRAP_FLIP_FLAG],
        ["partial", WRAP_PARTIAL_FLAG],
        ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
        ["rearg", WRAP_REARG_FLAG]
      ];
      var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
      var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
      var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
      var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
      var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
      var reTrimStart = /^\s+/;
      var reWhitespace = /\s/;
      var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
      var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
      var reEscapeChar = /\\(\\)?/g;
      var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
      var reFlags = /\w*$/;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsOctal = /^0o[0-7]+$/i;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      var reNoMatch = /($^)/;
      var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
      var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
      var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
      var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reApos = RegExp(rsApos, "g");
      var reComboMark = RegExp(rsCombo, "g");
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      var reUnicodeWord = RegExp([
        rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
        rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
        rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
        rsUpper + "+" + rsOptContrUpper,
        rsOrdUpper,
        rsOrdLower,
        rsDigits,
        rsEmoji
      ].join("|"), "g");
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      var contextProps = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ];
      var templateCounter = -1;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      var deburredLetters = {
        // Latin-1 Supplement block.
        "\xC0": "A",
        "\xC1": "A",
        "\xC2": "A",
        "\xC3": "A",
        "\xC4": "A",
        "\xC5": "A",
        "\xE0": "a",
        "\xE1": "a",
        "\xE2": "a",
        "\xE3": "a",
        "\xE4": "a",
        "\xE5": "a",
        "\xC7": "C",
        "\xE7": "c",
        "\xD0": "D",
        "\xF0": "d",
        "\xC8": "E",
        "\xC9": "E",
        "\xCA": "E",
        "\xCB": "E",
        "\xE8": "e",
        "\xE9": "e",
        "\xEA": "e",
        "\xEB": "e",
        "\xCC": "I",
        "\xCD": "I",
        "\xCE": "I",
        "\xCF": "I",
        "\xEC": "i",
        "\xED": "i",
        "\xEE": "i",
        "\xEF": "i",
        "\xD1": "N",
        "\xF1": "n",
        "\xD2": "O",
        "\xD3": "O",
        "\xD4": "O",
        "\xD5": "O",
        "\xD6": "O",
        "\xD8": "O",
        "\xF2": "o",
        "\xF3": "o",
        "\xF4": "o",
        "\xF5": "o",
        "\xF6": "o",
        "\xF8": "o",
        "\xD9": "U",
        "\xDA": "U",
        "\xDB": "U",
        "\xDC": "U",
        "\xF9": "u",
        "\xFA": "u",
        "\xFB": "u",
        "\xFC": "u",
        "\xDD": "Y",
        "\xFD": "y",
        "\xFF": "y",
        "\xC6": "Ae",
        "\xE6": "ae",
        "\xDE": "Th",
        "\xFE": "th",
        "\xDF": "ss",
        // Latin Extended-A block.
        "\u0100": "A",
        "\u0102": "A",
        "\u0104": "A",
        "\u0101": "a",
        "\u0103": "a",
        "\u0105": "a",
        "\u0106": "C",
        "\u0108": "C",
        "\u010A": "C",
        "\u010C": "C",
        "\u0107": "c",
        "\u0109": "c",
        "\u010B": "c",
        "\u010D": "c",
        "\u010E": "D",
        "\u0110": "D",
        "\u010F": "d",
        "\u0111": "d",
        "\u0112": "E",
        "\u0114": "E",
        "\u0116": "E",
        "\u0118": "E",
        "\u011A": "E",
        "\u0113": "e",
        "\u0115": "e",
        "\u0117": "e",
        "\u0119": "e",
        "\u011B": "e",
        "\u011C": "G",
        "\u011E": "G",
        "\u0120": "G",
        "\u0122": "G",
        "\u011D": "g",
        "\u011F": "g",
        "\u0121": "g",
        "\u0123": "g",
        "\u0124": "H",
        "\u0126": "H",
        "\u0125": "h",
        "\u0127": "h",
        "\u0128": "I",
        "\u012A": "I",
        "\u012C": "I",
        "\u012E": "I",
        "\u0130": "I",
        "\u0129": "i",
        "\u012B": "i",
        "\u012D": "i",
        "\u012F": "i",
        "\u0131": "i",
        "\u0134": "J",
        "\u0135": "j",
        "\u0136": "K",
        "\u0137": "k",
        "\u0138": "k",
        "\u0139": "L",
        "\u013B": "L",
        "\u013D": "L",
        "\u013F": "L",
        "\u0141": "L",
        "\u013A": "l",
        "\u013C": "l",
        "\u013E": "l",
        "\u0140": "l",
        "\u0142": "l",
        "\u0143": "N",
        "\u0145": "N",
        "\u0147": "N",
        "\u014A": "N",
        "\u0144": "n",
        "\u0146": "n",
        "\u0148": "n",
        "\u014B": "n",
        "\u014C": "O",
        "\u014E": "O",
        "\u0150": "O",
        "\u014D": "o",
        "\u014F": "o",
        "\u0151": "o",
        "\u0154": "R",
        "\u0156": "R",
        "\u0158": "R",
        "\u0155": "r",
        "\u0157": "r",
        "\u0159": "r",
        "\u015A": "S",
        "\u015C": "S",
        "\u015E": "S",
        "\u0160": "S",
        "\u015B": "s",
        "\u015D": "s",
        "\u015F": "s",
        "\u0161": "s",
        "\u0162": "T",
        "\u0164": "T",
        "\u0166": "T",
        "\u0163": "t",
        "\u0165": "t",
        "\u0167": "t",
        "\u0168": "U",
        "\u016A": "U",
        "\u016C": "U",
        "\u016E": "U",
        "\u0170": "U",
        "\u0172": "U",
        "\u0169": "u",
        "\u016B": "u",
        "\u016D": "u",
        "\u016F": "u",
        "\u0171": "u",
        "\u0173": "u",
        "\u0174": "W",
        "\u0175": "w",
        "\u0176": "Y",
        "\u0177": "y",
        "\u0178": "Y",
        "\u0179": "Z",
        "\u017B": "Z",
        "\u017D": "Z",
        "\u017A": "z",
        "\u017C": "z",
        "\u017E": "z",
        "\u0132": "IJ",
        "\u0133": "ij",
        "\u0152": "Oe",
        "\u0153": "oe",
        "\u0149": "'n",
        "\u017F": "s"
      };
      var htmlEscapes = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };
      var htmlUnescapes = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      };
      var stringEscapes = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      };
      var freeParseFloat = parseFloat, freeParseInt = parseInt;
      var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var freeExports = exports && !exports.nodeType && exports;
      var freeModule = freeExports && true && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function arrayAggregator(array, setter, iteratee, accumulator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          var value = array[index];
          setter(accumulator, value, iteratee(value), array);
        }
        return accumulator;
      }
      function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEachRight(array, iteratee) {
        var length = array == null ? 0 : array.length;
        while (length--) {
          if (iteratee(array[length], length, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEvery(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (!predicate(array[index], index, array)) {
            return false;
          }
        }
        return true;
      }
      function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function arrayIncludes(array, value) {
        var length = array == null ? 0 : array.length;
        return !!length && baseIndexOf(array, value, 0) > -1;
      }
      function arrayIncludesWith(array, value, comparator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (comparator(value, array[index])) {
            return true;
          }
        }
        return false;
      }
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      function arrayReduceRight(array, iteratee, accumulator, initAccum) {
        var length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[--length];
        }
        while (length--) {
          accumulator = iteratee(accumulator, array[length], length, array);
        }
        return accumulator;
      }
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      var asciiSize = baseProperty("length");
      function asciiToArray(string) {
        return string.split("");
      }
      function asciiWords(string) {
        return string.match(reAsciiWord) || [];
      }
      function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection, function(value, key, collection2) {
          if (predicate(value, key, collection2)) {
            result = key;
            return false;
          }
        });
        return result;
      }
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      function baseIndexOf(array, value, fromIndex) {
        return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
      }
      function baseIndexOfWith(array, value, fromIndex, comparator) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (comparator(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function baseIsNaN(value) {
        return value !== value;
      }
      function baseMean(array, iteratee) {
        var length = array == null ? 0 : array.length;
        return length ? baseSum(array, iteratee) / length : NAN;
      }
      function baseProperty(key) {
        return function(object) {
          return object == null ? undefined$1 : object[key];
        };
      }
      function basePropertyOf(object) {
        return function(key) {
          return object == null ? undefined$1 : object[key];
        };
      }
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection2) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
        });
        return accumulator;
      }
      function baseSortBy(array, comparer) {
        var length = array.length;
        array.sort(comparer);
        while (length--) {
          array[length] = array[length].value;
        }
        return array;
      }
      function baseSum(array, iteratee) {
        var result, index = -1, length = array.length;
        while (++index < length) {
          var current = iteratee(array[index]);
          if (current !== undefined$1) {
            result = result === undefined$1 ? current : result + current;
          }
        }
        return result;
      }
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      function baseToPairs(object, props) {
        return arrayMap(props, function(key) {
          return [key, object[key]];
        });
      }
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      function baseValues(object, props) {
        return arrayMap(props, function(key) {
          return object[key];
        });
      }
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      function charsStartIndex(strSymbols, chrSymbols) {
        var index = -1, length = strSymbols.length;
        while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function charsEndIndex(strSymbols, chrSymbols) {
        var index = strSymbols.length;
        while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function countHolders(array, placeholder) {
        var length = array.length, result = 0;
        while (length--) {
          if (array[length] === placeholder) {
            ++result;
          }
        }
        return result;
      }
      var deburrLetter = basePropertyOf(deburredLetters);
      var escapeHtmlChar = basePropertyOf(htmlEscapes);
      function escapeStringChar(chr) {
        return "\\" + stringEscapes[chr];
      }
      function getValue(object, key) {
        return object == null ? undefined$1 : object[key];
      }
      function hasUnicode(string) {
        return reHasUnicode.test(string);
      }
      function hasUnicodeWord(string) {
        return reHasUnicodeWord.test(string);
      }
      function iteratorToArray(iterator) {
        var data, result = [];
        while (!(data = iterator.next()).done) {
          result.push(data.value);
        }
        return result;
      }
      function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      function replaceHolders(array, placeholder) {
        var index = -1, length = array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (value === placeholder || value === PLACEHOLDER) {
            array[index] = PLACEHOLDER;
            result[resIndex++] = index;
          }
        }
        return result;
      }
      function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      function setToPairs(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = [value, value];
        });
        return result;
      }
      function strictIndexOf(array, value, fromIndex) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (array[index] === value) {
            return index;
          }
        }
        return -1;
      }
      function strictLastIndexOf(array, value, fromIndex) {
        var index = fromIndex + 1;
        while (index--) {
          if (array[index] === value) {
            return index;
          }
        }
        return index;
      }
      function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
      }
      function stringToArray(string) {
        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
      }
      function trimmedEndIndex(string) {
        var index = string.length;
        while (index-- && reWhitespace.test(string.charAt(index))) {
        }
        return index;
      }
      var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
      function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) {
          ++result;
        }
        return result;
      }
      function unicodeToArray(string) {
        return string.match(reUnicode) || [];
      }
      function unicodeWords(string) {
        return string.match(reUnicodeWord) || [];
      }
      var runInContext = function runInContext2(context) {
        context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
        var Array2 = context.Array, Date = context.Date, Error = context.Error, Function2 = context.Function, Math = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String = context.String, TypeError = context.TypeError;
        var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
        var coreJsData = context["__core-js_shared__"];
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var idCounter = 0;
        var maskSrcKey = function() {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
          return uid ? "Symbol(src)_1." + uid : "";
        }();
        var nativeObjectToString = objectProto.toString;
        var objectCtorString = funcToString.call(Object2);
        var oldDash = root._;
        var reIsNative = RegExp2(
          "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        );
        var Buffer = moduleExports ? context.Buffer : undefined$1, Symbol = context.Symbol, Uint8Array = context.Uint8Array, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined$1, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined$1, symIterator = Symbol ? Symbol.iterator : undefined$1, symToStringTag = Symbol ? Symbol.toStringTag : undefined$1;
        var defineProperty = function() {
          try {
            var func = getNative(Object2, "defineProperty");
            func({}, "", {});
            return func;
          } catch (e) {
          }
        }();
        var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date && Date.now !== root.Date.now && Date.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
        var nativeCeil = Math.ceil, nativeFloor = Math.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined$1, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math.max, nativeMin = Math.min, nativeNow = Date.now, nativeParseInt = context.parseInt, nativeRandom = Math.random, nativeReverse = arrayProto.reverse;
        var DataView = getNative(context, "DataView"), Map = getNative(context, "Map"), Promise = getNative(context, "Promise"), Set = getNative(context, "Set"), WeakMap = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
        var metaMap = WeakMap && new WeakMap();
        var realNames = {};
        var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
        var symbolProto = Symbol ? Symbol.prototype : undefined$1, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined$1, symbolToString = symbolProto ? symbolProto.toString : undefined$1;
        function lodash2(value) {
          if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
            if (value instanceof LodashWrapper) {
              return value;
            }
            if (hasOwnProperty.call(value, "__wrapped__")) {
              return wrapperClone(value);
            }
          }
          return new LodashWrapper(value);
        }
        var baseCreate = /* @__PURE__ */ function() {
          function object() {
          }
          return function(proto) {
            if (!isObject(proto)) {
              return {};
            }
            if (objectCreate) {
              return objectCreate(proto);
            }
            object.prototype = proto;
            var result2 = new object();
            object.prototype = undefined$1;
            return result2;
          };
        }();
        function baseLodash() {
        }
        function LodashWrapper(value, chainAll) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__chain__ = !!chainAll;
          this.__index__ = 0;
          this.__values__ = undefined$1;
        }
        lodash2.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "escape": reEscape,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "evaluate": reEvaluate,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "interpolate": reInterpolate,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          "variable": "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          "imports": {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            "_": lodash2
          }
        };
        lodash2.prototype = baseLodash.prototype;
        lodash2.prototype.constructor = lodash2;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        function LazyWrapper(value) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = MAX_ARRAY_LENGTH;
          this.__views__ = [];
        }
        function lazyClone() {
          var result2 = new LazyWrapper(this.__wrapped__);
          result2.__actions__ = copyArray(this.__actions__);
          result2.__dir__ = this.__dir__;
          result2.__filtered__ = this.__filtered__;
          result2.__iteratees__ = copyArray(this.__iteratees__);
          result2.__takeCount__ = this.__takeCount__;
          result2.__views__ = copyArray(this.__views__);
          return result2;
        }
        function lazyReverse() {
          if (this.__filtered__) {
            var result2 = new LazyWrapper(this);
            result2.__dir__ = -1;
            result2.__filtered__ = true;
          } else {
            result2 = this.clone();
            result2.__dir__ *= -1;
          }
          return result2;
        }
        function lazyValue() {
          var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
          if (!isArr || !isRight && arrLength == length && takeCount == length) {
            return baseWrapperValue(array, this.__actions__);
          }
          var result2 = [];
          outer:
            while (length-- && resIndex < takeCount) {
              index += dir;
              var iterIndex = -1, value = array[index];
              while (++iterIndex < iterLength) {
                var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value);
                if (type == LAZY_MAP_FLAG) {
                  value = computed;
                } else if (!computed) {
                  if (type == LAZY_FILTER_FLAG) {
                    continue outer;
                  } else {
                    break outer;
                  }
                }
              }
              result2[resIndex++] = value;
            }
          return result2;
        }
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        function Hash(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
          this.size = 0;
        }
        function hashDelete(key) {
          var result2 = this.has(key) && delete this.__data__[key];
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result2 = data[key];
            return result2 === HASH_UNDEFINED ? undefined$1 : result2;
          }
          return hasOwnProperty.call(data, key) ? data[key] : undefined$1;
        }
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined$1 : hasOwnProperty.call(data, key);
        }
        function hashSet(key, value) {
          var data = this.__data__;
          this.size += this.has(key) ? 0 : 1;
          data[key] = nativeCreate && value === undefined$1 ? HASH_UNDEFINED : value;
          return this;
        }
        Hash.prototype.clear = hashClear;
        Hash.prototype["delete"] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        function ListCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function listCacheClear() {
          this.__data__ = [];
          this.size = 0;
        }
        function listCacheDelete(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }
          --this.size;
          return true;
        }
        function listCacheGet(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          return index < 0 ? undefined$1 : data[index][1];
        }
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }
        function listCacheSet(key, value) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            ++this.size;
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        function MapCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function mapCacheClear() {
          this.size = 0;
          this.__data__ = {
            "hash": new Hash(),
            "map": new (Map || ListCache)(),
            "string": new Hash()
          };
        }
        function mapCacheDelete(key) {
          var result2 = getMapData(this, key)["delete"](key);
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }
        function mapCacheSet(key, value) {
          var data = getMapData(this, key), size2 = data.size;
          data.set(key, value);
          this.size += data.size == size2 ? 0 : 1;
          return this;
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype["delete"] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        function SetCache(values2) {
          var index = -1, length = values2 == null ? 0 : values2.length;
          this.__data__ = new MapCache();
          while (++index < length) {
            this.add(values2[index]);
          }
        }
        function setCacheAdd(value) {
          this.__data__.set(value, HASH_UNDEFINED);
          return this;
        }
        function setCacheHas(value) {
          return this.__data__.has(value);
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        function Stack(entries) {
          var data = this.__data__ = new ListCache(entries);
          this.size = data.size;
        }
        function stackClear() {
          this.__data__ = new ListCache();
          this.size = 0;
        }
        function stackDelete(key) {
          var data = this.__data__, result2 = data["delete"](key);
          this.size = data.size;
          return result2;
        }
        function stackGet(key) {
          return this.__data__.get(key);
        }
        function stackHas(key) {
          return this.__data__.has(key);
        }
        function stackSet(key, value) {
          var data = this.__data__;
          if (data instanceof ListCache) {
            var pairs = data.__data__;
            if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
              pairs.push([key, value]);
              this.size = ++data.size;
              return this;
            }
            data = this.__data__ = new MapCache(pairs);
          }
          data.set(key, value);
          this.size = data.size;
          return this;
        }
        Stack.prototype.clear = stackClear;
        Stack.prototype["delete"] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        function arrayLikeKeys(value, inherited) {
          var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String) : [], length = result2.length;
          for (var key in value) {
            if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
            (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
            isIndex(key, length)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function arraySample(array) {
          var length = array.length;
          return length ? array[baseRandom(0, length - 1)] : undefined$1;
        }
        function arraySampleSize(array, n) {
          return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
        }
        function arrayShuffle(array) {
          return shuffleSelf(copyArray(array));
        }
        function assignMergeValue(object, key, value) {
          if (value !== undefined$1 && !eq(object[key], value) || value === undefined$1 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assignValue(object, key, value) {
          var objValue = object[key];
          if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined$1 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }
        function baseAggregator(collection, setter, iteratee2, accumulator) {
          baseEach(collection, function(value, key, collection2) {
            setter(accumulator, value, iteratee2(value), collection2);
          });
          return accumulator;
        }
        function baseAssign(object, source) {
          return object && copyObject(source, keys(source), object);
        }
        function baseAssignIn(object, source) {
          return object && copyObject(source, keysIn(source), object);
        }
        function baseAssignValue(object, key, value) {
          if (key == "__proto__" && defineProperty) {
            defineProperty(object, key, {
              "configurable": true,
              "enumerable": true,
              "value": value,
              "writable": true
            });
          } else {
            object[key] = value;
          }
        }
        function baseAt(object, paths) {
          var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
          while (++index < length) {
            result2[index] = skip ? undefined$1 : get(object, paths[index]);
          }
          return result2;
        }
        function baseClamp(number, lower, upper) {
          if (number === number) {
            if (upper !== undefined$1) {
              number = number <= upper ? number : upper;
            }
            if (lower !== undefined$1) {
              number = number >= lower ? number : lower;
            }
          }
          return number;
        }
        function baseClone(value, bitmask, customizer, key, object, stack) {
          var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
          if (customizer) {
            result2 = object ? customizer(value, key, object, stack) : customizer(value);
          }
          if (result2 !== undefined$1) {
            return result2;
          }
          if (!isObject(value)) {
            return value;
          }
          var isArr = isArray(value);
          if (isArr) {
            result2 = initCloneArray(value);
            if (!isDeep) {
              return copyArray(value, result2);
            }
          } else {
            var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
            if (isBuffer(value)) {
              return cloneBuffer(value, isDeep);
            }
            if (tag == objectTag || tag == argsTag || isFunc && !object) {
              result2 = isFlat || isFunc ? {} : initCloneObject(value);
              if (!isDeep) {
                return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
              }
            } else {
              if (!cloneableTags[tag]) {
                return object ? value : {};
              }
              result2 = initCloneByTag(value, tag, isDeep);
            }
          }
          stack || (stack = new Stack());
          var stacked = stack.get(value);
          if (stacked) {
            return stacked;
          }
          stack.set(value, result2);
          if (isSet(value)) {
            value.forEach(function(subValue) {
              result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
            });
          } else if (isMap(value)) {
            value.forEach(function(subValue, key2) {
              result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
            });
          }
          var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
          var props = isArr ? undefined$1 : keysFunc(value);
          arrayEach(props || value, function(subValue, key2) {
            if (props) {
              key2 = subValue;
              subValue = value[key2];
            }
            assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
          return result2;
        }
        function baseConforms(source) {
          var props = keys(source);
          return function(object) {
            return baseConformsTo(object, source, props);
          };
        }
        function baseConformsTo(object, source, props) {
          var length = props.length;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (length--) {
            var key = props[length], predicate = source[key], value = object[key];
            if (value === undefined$1 && !(key in object) || !predicate(value)) {
              return false;
            }
          }
          return true;
        }
        function baseDelay(func, wait, args) {
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          return setTimeout(function() {
            func.apply(undefined$1, args);
          }, wait);
        }
        function baseDifference(array, values2, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
          if (!length) {
            return result2;
          }
          if (iteratee2) {
            values2 = arrayMap(values2, baseUnary(iteratee2));
          }
          if (comparator) {
            includes2 = arrayIncludesWith;
            isCommon = false;
          } else if (values2.length >= LARGE_ARRAY_SIZE) {
            includes2 = cacheHas;
            isCommon = false;
            values2 = new SetCache(values2);
          }
          outer:
            while (++index < length) {
              var value = array[index], computed = iteratee2 == null ? value : iteratee2(value);
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var valuesIndex = valuesLength;
                while (valuesIndex--) {
                  if (values2[valuesIndex] === computed) {
                    continue outer;
                  }
                }
                result2.push(value);
              } else if (!includes2(values2, computed, comparator)) {
                result2.push(value);
              }
            }
          return result2;
        }
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        function baseEvery(collection, predicate) {
          var result2 = true;
          baseEach(collection, function(value, index, collection2) {
            result2 = !!predicate(value, index, collection2);
            return result2;
          });
          return result2;
        }
        function baseExtremum(array, iteratee2, comparator) {
          var index = -1, length = array.length;
          while (++index < length) {
            var value = array[index], current = iteratee2(value);
            if (current != null && (computed === undefined$1 ? current === current && !isSymbol(current) : comparator(current, computed))) {
              var computed = current, result2 = value;
            }
          }
          return result2;
        }
        function baseFill(array, value, start, end) {
          var length = array.length;
          start = toInteger(start);
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end === undefined$1 || end > length ? length : toInteger(end);
          if (end < 0) {
            end += length;
          }
          end = start > end ? 0 : toLength(end);
          while (start < end) {
            array[start++] = value;
          }
          return array;
        }
        function baseFilter(collection, predicate) {
          var result2 = [];
          baseEach(collection, function(value, index, collection2) {
            if (predicate(value, index, collection2)) {
              result2.push(value);
            }
          });
          return result2;
        }
        function baseFlatten(array, depth, predicate, isStrict, result2) {
          var index = -1, length = array.length;
          predicate || (predicate = isFlattenable);
          result2 || (result2 = []);
          while (++index < length) {
            var value = array[index];
            if (depth > 0 && predicate(value)) {
              if (depth > 1) {
                baseFlatten(value, depth - 1, predicate, isStrict, result2);
              } else {
                arrayPush(result2, value);
              }
            } else if (!isStrict) {
              result2[result2.length] = value;
            }
          }
          return result2;
        }
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);
        function baseForOwn(object, iteratee2) {
          return object && baseFor(object, iteratee2, keys);
        }
        function baseForOwnRight(object, iteratee2) {
          return object && baseForRight(object, iteratee2, keys);
        }
        function baseFunctions(object, props) {
          return arrayFilter(props, function(key) {
            return isFunction(object[key]);
          });
        }
        function baseGet(object, path) {
          path = castPath(path, object);
          var index = 0, length = path.length;
          while (object != null && index < length) {
            object = object[toKey(path[index++])];
          }
          return index && index == length ? object : undefined$1;
        }
        function baseGetAllKeys(object, keysFunc, symbolsFunc) {
          var result2 = keysFunc(object);
          return isArray(object) ? result2 : arrayPush(result2, symbolsFunc(object));
        }
        function baseGetTag(value) {
          if (value == null) {
            return value === undefined$1 ? undefinedTag : nullTag;
          }
          return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
        }
        function baseGt(value, other) {
          return value > other;
        }
        function baseHas(object, key) {
          return object != null && hasOwnProperty.call(object, key);
        }
        function baseHasIn(object, key) {
          return object != null && key in Object2(object);
        }
        function baseInRange(number, start, end) {
          return number >= nativeMin(start, end) && number < nativeMax(start, end);
        }
        function baseIntersection(arrays, iteratee2, comparator) {
          var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
          while (othIndex--) {
            var array = arrays[othIndex];
            if (othIndex && iteratee2) {
              array = arrayMap(array, baseUnary(iteratee2));
            }
            maxLength = nativeMin(array.length, maxLength);
            caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined$1;
          }
          array = arrays[0];
          var index = -1, seen = caches[0];
          outer:
            while (++index < length && result2.length < maxLength) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (!(seen ? cacheHas(seen, computed) : includes2(result2, computed, comparator))) {
                othIndex = othLength;
                while (--othIndex) {
                  var cache = caches[othIndex];
                  if (!(cache ? cacheHas(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
                    continue outer;
                  }
                }
                if (seen) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseInverter(object, setter, iteratee2, accumulator) {
          baseForOwn(object, function(value, key, object2) {
            setter(accumulator, iteratee2(value), key, object2);
          });
          return accumulator;
        }
        function baseInvoke(object, path, args) {
          path = castPath(path, object);
          object = parent(object, path);
          var func = object == null ? object : object[toKey(last(path))];
          return func == null ? undefined$1 : apply(func, object, args);
        }
        function baseIsArguments(value) {
          return isObjectLike(value) && baseGetTag(value) == argsTag;
        }
        function baseIsArrayBuffer(value) {
          return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
        }
        function baseIsDate(value) {
          return isObjectLike(value) && baseGetTag(value) == dateTag;
        }
        function baseIsEqual(value, other, bitmask, customizer, stack) {
          if (value === other) {
            return true;
          }
          if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
            return value !== value && other !== other;
          }
          return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
        }
        function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
          var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
          objTag = objTag == argsTag ? objectTag : objTag;
          othTag = othTag == argsTag ? objectTag : othTag;
          var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
          if (isSameTag && isBuffer(object)) {
            if (!isBuffer(other)) {
              return false;
            }
            objIsArr = true;
            objIsObj = false;
          }
          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
          }
          if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
              stack || (stack = new Stack());
              return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack());
          return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
        }
        function baseIsMap(value) {
          return isObjectLike(value) && getTag(value) == mapTag;
        }
        function baseIsMatch(object, source, matchData, customizer) {
          var index = matchData.length, length = index, noCustomizer = !customizer;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (index--) {
            var data = matchData[index];
            if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
              return false;
            }
          }
          while (++index < length) {
            data = matchData[index];
            var key = data[0], objValue = object[key], srcValue = data[1];
            if (noCustomizer && data[2]) {
              if (objValue === undefined$1 && !(key in object)) {
                return false;
              }
            } else {
              var stack = new Stack();
              if (customizer) {
                var result2 = customizer(objValue, srcValue, key, object, source, stack);
              }
              if (!(result2 === undefined$1 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                return false;
              }
            }
          }
          return true;
        }
        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }
        function baseIsRegExp(value) {
          return isObjectLike(value) && baseGetTag(value) == regexpTag;
        }
        function baseIsSet(value) {
          return isObjectLike(value) && getTag(value) == setTag;
        }
        function baseIsTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }
        function baseIteratee(value) {
          if (typeof value == "function") {
            return value;
          }
          if (value == null) {
            return identity;
          }
          if (typeof value == "object") {
            return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
          }
          return property(value);
        }
        function baseKeys(object) {
          if (!isPrototype(object)) {
            return nativeKeys(object);
          }
          var result2 = [];
          for (var key in Object2(object)) {
            if (hasOwnProperty.call(object, key) && key != "constructor") {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseKeysIn(object) {
          if (!isObject(object)) {
            return nativeKeysIn(object);
          }
          var isProto = isPrototype(object), result2 = [];
          for (var key in object) {
            if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseLt(value, other) {
          return value < other;
        }
        function baseMap(collection, iteratee2) {
          var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value, key, collection2) {
            result2[++index] = iteratee2(value, key, collection2);
          });
          return result2;
        }
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function(object) {
            return object === source || baseIsMatch(object, source, matchData);
          };
        }
        function baseMatchesProperty(path, srcValue) {
          if (isKey(path) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path), srcValue);
          }
          return function(object) {
            var objValue = get(object, path);
            return objValue === undefined$1 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
          };
        }
        function baseMerge(object, source, srcIndex, customizer, stack) {
          if (object === source) {
            return;
          }
          baseFor(source, function(srcValue, key) {
            stack || (stack = new Stack());
            if (isObject(srcValue)) {
              baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
            } else {
              var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined$1;
              if (newValue === undefined$1) {
                newValue = srcValue;
              }
              assignMergeValue(object, key, newValue);
            }
          }, keysIn);
        }
        function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
          var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
          if (stacked) {
            assignMergeValue(object, key, stacked);
            return;
          }
          var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined$1;
          var isCommon = newValue === undefined$1;
          if (isCommon) {
            var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
            newValue = srcValue;
            if (isArr || isBuff || isTyped) {
              if (isArray(objValue)) {
                newValue = objValue;
              } else if (isArrayLikeObject(objValue)) {
                newValue = copyArray(objValue);
              } else if (isBuff) {
                isCommon = false;
                newValue = cloneBuffer(srcValue, true);
              } else if (isTyped) {
                isCommon = false;
                newValue = cloneTypedArray(srcValue, true);
              } else {
                newValue = [];
              }
            } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
              newValue = objValue;
              if (isArguments(objValue)) {
                newValue = toPlainObject(objValue);
              } else if (!isObject(objValue) || isFunction(objValue)) {
                newValue = initCloneObject(srcValue);
              }
            } else {
              isCommon = false;
            }
          }
          if (isCommon) {
            stack.set(srcValue, newValue);
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
            stack["delete"](srcValue);
          }
          assignMergeValue(object, key, newValue);
        }
        function baseNth(array, n) {
          var length = array.length;
          if (!length) {
            return;
          }
          n += n < 0 ? length : 0;
          return isIndex(n, length) ? array[n] : undefined$1;
        }
        function baseOrderBy(collection, iteratees, orders) {
          if (iteratees.length) {
            iteratees = arrayMap(iteratees, function(iteratee2) {
              if (isArray(iteratee2)) {
                return function(value) {
                  return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                };
              }
              return iteratee2;
            });
          } else {
            iteratees = [identity];
          }
          var index = -1;
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          var result2 = baseMap(collection, function(value, key, collection2) {
            var criteria = arrayMap(iteratees, function(iteratee2) {
              return iteratee2(value);
            });
            return { "criteria": criteria, "index": ++index, "value": value };
          });
          return baseSortBy(result2, function(object, other) {
            return compareMultiple(object, other, orders);
          });
        }
        function basePick(object, paths) {
          return basePickBy(object, paths, function(value, path) {
            return hasIn(object, path);
          });
        }
        function basePickBy(object, paths, predicate) {
          var index = -1, length = paths.length, result2 = {};
          while (++index < length) {
            var path = paths[index], value = baseGet(object, path);
            if (predicate(value, path)) {
              baseSet(result2, castPath(path, object), value);
            }
          }
          return result2;
        }
        function basePropertyDeep(path) {
          return function(object) {
            return baseGet(object, path);
          };
        }
        function basePullAll(array, values2, iteratee2, comparator) {
          var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array;
          if (array === values2) {
            values2 = copyArray(values2);
          }
          if (iteratee2) {
            seen = arrayMap(array, baseUnary(iteratee2));
          }
          while (++index < length) {
            var fromIndex = 0, value = values2[index], computed = iteratee2 ? iteratee2(value) : value;
            while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
              if (seen !== array) {
                splice.call(seen, fromIndex, 1);
              }
              splice.call(array, fromIndex, 1);
            }
          }
          return array;
        }
        function basePullAt(array, indexes) {
          var length = array ? indexes.length : 0, lastIndex = length - 1;
          while (length--) {
            var index = indexes[length];
            if (length == lastIndex || index !== previous) {
              var previous = index;
              if (isIndex(index)) {
                splice.call(array, index, 1);
              } else {
                baseUnset(array, index);
              }
            }
          }
          return array;
        }
        function baseRandom(lower, upper) {
          return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        function baseRange(start, end, step, fromRight) {
          var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
          while (length--) {
            result2[fromRight ? length : ++index] = start;
            start += step;
          }
          return result2;
        }
        function baseRepeat(string, n) {
          var result2 = "";
          if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
            return result2;
          }
          do {
            if (n % 2) {
              result2 += string;
            }
            n = nativeFloor(n / 2);
            if (n) {
              string += string;
            }
          } while (n);
          return result2;
        }
        function baseRest(func, start) {
          return setToString(overRest(func, start, identity), func + "");
        }
        function baseSample(collection) {
          return arraySample(values(collection));
        }
        function baseSampleSize(collection, n) {
          var array = values(collection);
          return shuffleSelf(array, baseClamp(n, 0, array.length));
        }
        function baseSet(object, path, value, customizer) {
          if (!isObject(object)) {
            return object;
          }
          path = castPath(path, object);
          var index = -1, length = path.length, lastIndex = length - 1, nested = object;
          while (nested != null && ++index < length) {
            var key = toKey(path[index]), newValue = value;
            if (key === "__proto__" || key === "constructor" || key === "prototype") {
              return object;
            }
            if (index != lastIndex) {
              var objValue = nested[key];
              newValue = customizer ? customizer(objValue, key, nested) : undefined$1;
              if (newValue === undefined$1) {
                newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
              }
            }
            assignValue(nested, key, newValue);
            nested = nested[key];
          }
          return object;
        }
        var baseSetData = !metaMap ? identity : function(func, data) {
          metaMap.set(func, data);
          return func;
        };
        var baseSetToString = !defineProperty ? identity : function(func, string) {
          return defineProperty(func, "toString", {
            "configurable": true,
            "enumerable": false,
            "value": constant(string),
            "writable": true
          });
        };
        function baseShuffle(collection) {
          return shuffleSelf(values(collection));
        }
        function baseSlice(array, start, end) {
          var index = -1, length = array.length;
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : end - start >>> 0;
          start >>>= 0;
          var result2 = Array2(length);
          while (++index < length) {
            result2[index] = array[index + start];
          }
          return result2;
        }
        function baseSome(collection, predicate) {
          var result2;
          baseEach(collection, function(value, index, collection2) {
            result2 = predicate(value, index, collection2);
            return !result2;
          });
          return !!result2;
        }
        function baseSortedIndex(array, value, retHighest) {
          var low = 0, high = array == null ? low : array.length;
          if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
            while (low < high) {
              var mid = low + high >>> 1, computed = array[mid];
              if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return high;
          }
          return baseSortedIndexBy(array, value, identity, retHighest);
        }
        function baseSortedIndexBy(array, value, iteratee2, retHighest) {
          var low = 0, high = array == null ? 0 : array.length;
          if (high === 0) {
            return 0;
          }
          value = iteratee2(value);
          var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined$1;
          while (low < high) {
            var mid = nativeFloor((low + high) / 2), computed = iteratee2(array[mid]), othIsDefined = computed !== undefined$1, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
            if (valIsNaN) {
              var setLow = retHighest || othIsReflexive;
            } else if (valIsUndefined) {
              setLow = othIsReflexive && (retHighest || othIsDefined);
            } else if (valIsNull) {
              setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
            } else if (valIsSymbol) {
              setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
            } else if (othIsNull || othIsSymbol) {
              setLow = false;
            } else {
              setLow = retHighest ? computed <= value : computed < value;
            }
            if (setLow) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return nativeMin(high, MAX_ARRAY_INDEX);
        }
        function baseSortedUniq(array, iteratee2) {
          var index = -1, length = array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
            if (!index || !eq(computed, seen)) {
              var seen = computed;
              result2[resIndex++] = value === 0 ? 0 : value;
            }
          }
          return result2;
        }
        function baseToNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          return +value;
        }
        function baseToString(value) {
          if (typeof value == "string") {
            return value;
          }
          if (isArray(value)) {
            return arrayMap(value, baseToString) + "";
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : "";
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function baseUniq(array, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
          if (comparator) {
            isCommon = false;
            includes2 = arrayIncludesWith;
          } else if (length >= LARGE_ARRAY_SIZE) {
            var set2 = iteratee2 ? null : createSet(array);
            if (set2) {
              return setToArray(set2);
            }
            isCommon = false;
            includes2 = cacheHas;
            seen = new SetCache();
          } else {
            seen = iteratee2 ? [] : result2;
          }
          outer:
            while (++index < length) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var seenIndex = seen.length;
                while (seenIndex--) {
                  if (seen[seenIndex] === computed) {
                    continue outer;
                  }
                }
                if (iteratee2) {
                  seen.push(computed);
                }
                result2.push(value);
              } else if (!includes2(seen, computed, comparator)) {
                if (seen !== result2) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseUnset(object, path) {
          path = castPath(path, object);
          var index = -1, length = path.length;
          if (!length) {
            return true;
          }
          while (++index < length) {
            var key = toKey(path[index]);
            if (key === "__proto__" && !hasOwnProperty.call(object, "__proto__")) {
              return false;
            }
            if ((key === "constructor" || key === "prototype") && index < length - 1) {
              return false;
            }
          }
          var obj = parent(object, path);
          return obj == null || delete obj[toKey(last(path))];
        }
        function baseUpdate(object, path, updater, customizer) {
          return baseSet(object, path, updater(baseGet(object, path)), customizer);
        }
        function baseWhile(array, predicate, isDrop, fromRight) {
          var length = array.length, index = fromRight ? length : -1;
          while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
          }
          return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
        }
        function baseWrapperValue(value, actions) {
          var result2 = value;
          if (result2 instanceof LazyWrapper) {
            result2 = result2.value();
          }
          return arrayReduce(actions, function(result3, action) {
            return action.func.apply(action.thisArg, arrayPush([result3], action.args));
          }, result2);
        }
        function baseXor(arrays, iteratee2, comparator) {
          var length = arrays.length;
          if (length < 2) {
            return length ? baseUniq(arrays[0]) : [];
          }
          var index = -1, result2 = Array2(length);
          while (++index < length) {
            var array = arrays[index], othIndex = -1;
            while (++othIndex < length) {
              if (othIndex != index) {
                result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
              }
            }
          }
          return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
        }
        function baseZipObject(props, values2, assignFunc) {
          var index = -1, length = props.length, valsLength = values2.length, result2 = {};
          while (++index < length) {
            var value = index < valsLength ? values2[index] : undefined$1;
            assignFunc(result2, props[index], value);
          }
          return result2;
        }
        function castArrayLikeObject(value) {
          return isArrayLikeObject(value) ? value : [];
        }
        function castFunction(value) {
          return typeof value == "function" ? value : identity;
        }
        function castPath(value, object) {
          if (isArray(value)) {
            return value;
          }
          return isKey(value, object) ? [value] : stringToPath(toString(value));
        }
        var castRest = baseRest;
        function castSlice(array, start, end) {
          var length = array.length;
          end = end === undefined$1 ? length : end;
          return !start && end >= length ? array : baseSlice(array, start, end);
        }
        var clearTimeout = ctxClearTimeout || function(id) {
          return root.clearTimeout(id);
        };
        function cloneBuffer(buffer, isDeep) {
          if (isDeep) {
            return buffer.slice();
          }
          var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
          buffer.copy(result2);
          return result2;
        }
        function cloneArrayBuffer(arrayBuffer) {
          var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
          new Uint8Array(result2).set(new Uint8Array(arrayBuffer));
          return result2;
        }
        function cloneDataView(dataView, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
          return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
        }
        function cloneRegExp(regexp) {
          var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
          result2.lastIndex = regexp.lastIndex;
          return result2;
        }
        function cloneSymbol(symbol) {
          return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
        }
        function cloneTypedArray(typedArray, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
          return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }
        function compareAscending(value, other) {
          if (value !== other) {
            var valIsDefined = value !== undefined$1, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
            var othIsDefined = other !== undefined$1, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
            if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
              return 1;
            }
            if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
              return -1;
            }
          }
          return 0;
        }
        function compareMultiple(object, other, orders) {
          var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
          while (++index < length) {
            var result2 = compareAscending(objCriteria[index], othCriteria[index]);
            if (result2) {
              if (index >= ordersLength) {
                return result2;
              }
              var order = orders[index];
              return result2 * (order == "desc" ? -1 : 1);
            }
          }
          return object.index - other.index;
        }
        function composeArgs(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
          while (++leftIndex < leftLength) {
            result2[leftIndex] = partials[leftIndex];
          }
          while (++argsIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[holders[argsIndex]] = args[argsIndex];
            }
          }
          while (rangeLength--) {
            result2[leftIndex++] = args[argsIndex++];
          }
          return result2;
        }
        function composeArgsRight(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
          while (++argsIndex < rangeLength) {
            result2[argsIndex] = args[argsIndex];
          }
          var offset = argsIndex;
          while (++rightIndex < rightLength) {
            result2[offset + rightIndex] = partials[rightIndex];
          }
          while (++holdersIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[offset + holders[holdersIndex]] = args[argsIndex++];
            }
          }
          return result2;
        }
        function copyArray(source, array) {
          var index = -1, length = source.length;
          array || (array = Array2(length));
          while (++index < length) {
            array[index] = source[index];
          }
          return array;
        }
        function copyObject(source, props, object, customizer) {
          var isNew = !object;
          object || (object = {});
          var index = -1, length = props.length;
          while (++index < length) {
            var key = props[index];
            var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined$1;
            if (newValue === undefined$1) {
              newValue = source[key];
            }
            if (isNew) {
              baseAssignValue(object, key, newValue);
            } else {
              assignValue(object, key, newValue);
            }
          }
          return object;
        }
        function copySymbols(source, object) {
          return copyObject(source, getSymbols(source), object);
        }
        function copySymbolsIn(source, object) {
          return copyObject(source, getSymbolsIn(source), object);
        }
        function createAggregator(setter, initializer) {
          return function(collection, iteratee2) {
            var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
            return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
          };
        }
        function createAssigner(assigner) {
          return baseRest(function(object, sources) {
            var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined$1, guard = length > 2 ? sources[2] : undefined$1;
            customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined$1;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              customizer = length < 3 ? undefined$1 : customizer;
              length = 1;
            }
            object = Object2(object);
            while (++index < length) {
              var source = sources[index];
              if (source) {
                assigner(object, source, index, customizer);
              }
            }
            return object;
          });
        }
        function createBaseEach(eachFunc, fromRight) {
          return function(collection, iteratee2) {
            if (collection == null) {
              return collection;
            }
            if (!isArrayLike(collection)) {
              return eachFunc(collection, iteratee2);
            }
            var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
            while (fromRight ? index-- : ++index < length) {
              if (iteratee2(iterable[index], index, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }
        function createBaseFor(fromRight) {
          return function(object, iteratee2, keysFunc) {
            var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
            while (length--) {
              var key = props[fromRight ? length : ++index];
              if (iteratee2(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object;
          };
        }
        function createBind(func, bitmask, thisArg) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return fn.apply(isBind ? thisArg : this, arguments);
          }
          return wrapper;
        }
        function createCaseFirst(methodName) {
          return function(string) {
            string = toString(string);
            var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined$1;
            var chr = strSymbols ? strSymbols[0] : string.charAt(0);
            var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
            return chr[methodName]() + trailing;
          };
        }
        function createCompounder(callback) {
          return function(string) {
            return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
          };
        }
        function createCtor(Ctor) {
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return new Ctor();
              case 1:
                return new Ctor(args[0]);
              case 2:
                return new Ctor(args[0], args[1]);
              case 3:
                return new Ctor(args[0], args[1], args[2]);
              case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
              case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
              case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
              case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
            var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
            return isObject(result2) ? result2 : thisBinding;
          };
        }
        function createCurry(func, bitmask, arity) {
          var Ctor = createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
            while (index--) {
              args[index] = arguments[index];
            }
            var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
            length -= holders.length;
            if (length < arity) {
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                undefined$1,
                args,
                holders,
                undefined$1,
                undefined$1,
                arity - length
              );
            }
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return apply(fn, this, args);
          }
          return wrapper;
        }
        function createFind(findIndexFunc) {
          return function(collection, predicate, fromIndex) {
            var iterable = Object2(collection);
            if (!isArrayLike(collection)) {
              var iteratee2 = getIteratee(predicate, 3);
              collection = keys(collection);
              predicate = function(key) {
                return iteratee2(iterable[key], key, iterable);
              };
            }
            var index = findIndexFunc(collection, predicate, fromIndex);
            return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined$1;
          };
        }
        function createFlow(fromRight) {
          return flatRest(function(funcs) {
            var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
            if (fromRight) {
              funcs.reverse();
            }
            while (index--) {
              var func = funcs[index];
              if (typeof func != "function") {
                throw new TypeError(FUNC_ERROR_TEXT);
              }
              if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                var wrapper = new LodashWrapper([], true);
              }
            }
            index = wrapper ? index : length;
            while (++index < length) {
              func = funcs[index];
              var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined$1;
              if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
              } else {
                wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
              }
            }
            return function() {
              var args = arguments, value = args[0];
              if (wrapper && args.length == 1 && isArray(value)) {
                return wrapper.plant(value).value();
              }
              var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
              while (++index2 < length) {
                result2 = funcs[index2].call(this, result2);
              }
              return result2;
            };
          });
        }
        function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
          var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined$1 : createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length;
            while (index--) {
              args[index] = arguments[index];
            }
            if (isCurried) {
              var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
            }
            if (partials) {
              args = composeArgs(args, partials, holders, isCurried);
            }
            if (partialsRight) {
              args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
            }
            length -= holdersCount;
            if (isCurried && length < arity) {
              var newHolders = replaceHolders(args, placeholder);
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                thisArg,
                args,
                newHolders,
                argPos,
                ary2,
                arity - length
              );
            }
            var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
            length = args.length;
            if (argPos) {
              args = reorder(args, argPos);
            } else if (isFlip && length > 1) {
              args.reverse();
            }
            if (isAry && ary2 < length) {
              args.length = ary2;
            }
            if (this && this !== root && this instanceof wrapper) {
              fn = Ctor || createCtor(fn);
            }
            return fn.apply(thisBinding, args);
          }
          return wrapper;
        }
        function createInverter(setter, toIteratee) {
          return function(object, iteratee2) {
            return baseInverter(object, setter, toIteratee(iteratee2), {});
          };
        }
        function createMathOperation(operator, defaultValue) {
          return function(value, other) {
            var result2;
            if (value === undefined$1 && other === undefined$1) {
              return defaultValue;
            }
            if (value !== undefined$1) {
              result2 = value;
            }
            if (other !== undefined$1) {
              if (result2 === undefined$1) {
                return other;
              }
              if (typeof value == "string" || typeof other == "string") {
                value = baseToString(value);
                other = baseToString(other);
              } else {
                value = baseToNumber(value);
                other = baseToNumber(other);
              }
              result2 = operator(value, other);
            }
            return result2;
          };
        }
        function createOver(arrayFunc) {
          return flatRest(function(iteratees) {
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            return baseRest(function(args) {
              var thisArg = this;
              return arrayFunc(iteratees, function(iteratee2) {
                return apply(iteratee2, thisArg, args);
              });
            });
          });
        }
        function createPadding(length, chars) {
          chars = chars === undefined$1 ? " " : baseToString(chars);
          var charsLength = chars.length;
          if (charsLength < 2) {
            return charsLength ? baseRepeat(chars, length) : chars;
          }
          var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
          return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
        }
        function createPartial(func, bitmask, thisArg, partials) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            while (++leftIndex < leftLength) {
              args[leftIndex] = partials[leftIndex];
            }
            while (argsLength--) {
              args[leftIndex++] = arguments[++argsIndex];
            }
            return apply(fn, isBind ? thisArg : this, args);
          }
          return wrapper;
        }
        function createRange(fromRight) {
          return function(start, end, step) {
            if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
              end = step = undefined$1;
            }
            start = toFinite(start);
            if (end === undefined$1) {
              end = start;
              start = 0;
            } else {
              end = toFinite(end);
            }
            step = step === undefined$1 ? start < end ? 1 : -1 : toFinite(step);
            return baseRange(start, end, step, fromRight);
          };
        }
        function createRelationalOperation(operator) {
          return function(value, other) {
            if (!(typeof value == "string" && typeof other == "string")) {
              value = toNumber(value);
              other = toNumber(other);
            }
            return operator(value, other);
          };
        }
        function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
          var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined$1, newHoldersRight = isCurry ? undefined$1 : holders, newPartials = isCurry ? partials : undefined$1, newPartialsRight = isCurry ? undefined$1 : partials;
          bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
          bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
          if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
            bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
          }
          var newData = [
            func,
            bitmask,
            thisArg,
            newPartials,
            newHolders,
            newPartialsRight,
            newHoldersRight,
            argPos,
            ary2,
            arity
          ];
          var result2 = wrapFunc.apply(undefined$1, newData);
          if (isLaziable(func)) {
            setData(result2, newData);
          }
          result2.placeholder = placeholder;
          return setWrapToString(result2, func, bitmask);
        }
        function createRound(methodName) {
          var func = Math[methodName];
          return function(number, precision) {
            number = toNumber(number);
            precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
            if (precision && nativeIsFinite(number)) {
              var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
              pair = (toString(value) + "e").split("e");
              return +(pair[0] + "e" + (+pair[1] - precision));
            }
            return func(number);
          };
        }
        var createSet = !(Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY) ? noop : function(values2) {
          return new Set(values2);
        };
        function createToPairs(keysFunc) {
          return function(object) {
            var tag = getTag(object);
            if (tag == mapTag) {
              return mapToArray(object);
            }
            if (tag == setTag) {
              return setToPairs(object);
            }
            return baseToPairs(object, keysFunc(object));
          };
        }
        function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
          var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
          if (!isBindKey && typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          var length = partials ? partials.length : 0;
          if (!length) {
            bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
            partials = holders = undefined$1;
          }
          ary2 = ary2 === undefined$1 ? ary2 : nativeMax(toInteger(ary2), 0);
          arity = arity === undefined$1 ? arity : toInteger(arity);
          length -= holders ? holders.length : 0;
          if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
            var partialsRight = partials, holdersRight = holders;
            partials = holders = undefined$1;
          }
          var data = isBindKey ? undefined$1 : getData(func);
          var newData = [
            func,
            bitmask,
            thisArg,
            partials,
            holders,
            partialsRight,
            holdersRight,
            argPos,
            ary2,
            arity
          ];
          if (data) {
            mergeData(newData, data);
          }
          func = newData[0];
          bitmask = newData[1];
          thisArg = newData[2];
          partials = newData[3];
          holders = newData[4];
          arity = newData[9] = newData[9] === undefined$1 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
          if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
            bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
          }
          if (!bitmask || bitmask == WRAP_BIND_FLAG) {
            var result2 = createBind(func, bitmask, thisArg);
          } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
            result2 = createCurry(func, bitmask, arity);
          } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
            result2 = createPartial(func, bitmask, thisArg, partials);
          } else {
            result2 = createHybrid.apply(undefined$1, newData);
          }
          var setter = data ? baseSetData : setData;
          return setWrapToString(setter(result2, newData), func, bitmask);
        }
        function customDefaultsAssignIn(objValue, srcValue, key, object) {
          if (objValue === undefined$1 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
            return srcValue;
          }
          return objValue;
        }
        function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
          if (isObject(objValue) && isObject(srcValue)) {
            stack.set(srcValue, objValue);
            baseMerge(objValue, srcValue, undefined$1, customDefaultsMerge, stack);
            stack["delete"](srcValue);
          }
          return objValue;
        }
        function customOmitClone(value) {
          return isPlainObject(value) ? undefined$1 : value;
        }
        function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          var arrStacked = stack.get(array);
          var othStacked = stack.get(other);
          if (arrStacked && othStacked) {
            return arrStacked == other && othStacked == array;
          }
          var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined$1;
          stack.set(array, other);
          stack.set(other, array);
          while (++index < arrLength) {
            var arrValue = array[index], othValue = other[index];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
            }
            if (compared !== undefined$1) {
              if (compared) {
                continue;
              }
              result2 = false;
              break;
            }
            if (seen) {
              if (!arraySome(other, function(othValue2, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
                result2 = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              result2 = false;
              break;
            }
          }
          stack["delete"](array);
          stack["delete"](other);
          return result2;
        }
        function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
          switch (tag) {
            case dataViewTag:
              if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                return false;
              }
              object = object.buffer;
              other = other.buffer;
            case arrayBufferTag:
              if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
                return false;
              }
              return true;
            case boolTag:
            case dateTag:
            case numberTag:
              return eq(+object, +other);
            case errorTag:
              return object.name == other.name && object.message == other.message;
            case regexpTag:
            case stringTag:
              return object == other + "";
            case mapTag:
              var convert = mapToArray;
            case setTag:
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
              convert || (convert = setToArray);
              if (object.size != other.size && !isPartial) {
                return false;
              }
              var stacked = stack.get(object);
              if (stacked) {
                return stacked == other;
              }
              bitmask |= COMPARE_UNORDERED_FLAG;
              stack.set(object, other);
              var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
              stack["delete"](object);
              return result2;
            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other);
              }
          }
          return false;
        }
        function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index = objLength;
          while (index--) {
            var key = objProps[index];
            if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
              return false;
            }
          }
          var objStacked = stack.get(object);
          var othStacked = stack.get(other);
          if (objStacked && othStacked) {
            return objStacked == other && othStacked == object;
          }
          var result2 = true;
          stack.set(object, other);
          stack.set(other, object);
          var skipCtor = isPartial;
          while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key], othValue = other[key];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
            }
            if (!(compared === undefined$1 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
              result2 = false;
              break;
            }
            skipCtor || (skipCtor = key == "constructor");
          }
          if (result2 && !skipCtor) {
            var objCtor = object.constructor, othCtor = other.constructor;
            if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
              result2 = false;
            }
          }
          stack["delete"](object);
          stack["delete"](other);
          return result2;
        }
        function flatRest(func) {
          return setToString(overRest(func, undefined$1, flatten), func + "");
        }
        function getAllKeys(object) {
          return baseGetAllKeys(object, keys, getSymbols);
        }
        function getAllKeysIn(object) {
          return baseGetAllKeys(object, keysIn, getSymbolsIn);
        }
        var getData = !metaMap ? noop : function(func) {
          return metaMap.get(func);
        };
        function getFuncName(func) {
          var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
          while (length--) {
            var data = array[length], otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
              return data.name;
            }
          }
          return result2;
        }
        function getHolder(func) {
          var object = hasOwnProperty.call(lodash2, "placeholder") ? lodash2 : func;
          return object.placeholder;
        }
        function getIteratee() {
          var result2 = lodash2.iteratee || iteratee;
          result2 = result2 === iteratee ? baseIteratee : result2;
          return arguments.length ? result2(arguments[0], arguments[1]) : result2;
        }
        function getMapData(map2, key) {
          var data = map2.__data__;
          return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
        }
        function getMatchData(object) {
          var result2 = keys(object), length = result2.length;
          while (length--) {
            var key = result2[length], value = object[key];
            result2[length] = [key, value, isStrictComparable(value)];
          }
          return result2;
        }
        function getNative(object, key) {
          var value = getValue(object, key);
          return baseIsNative(value) ? value : undefined$1;
        }
        function getRawTag(value) {
          var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
          try {
            value[symToStringTag] = undefined$1;
            var unmasked = true;
          } catch (e) {
          }
          var result2 = nativeObjectToString.call(value);
          if (unmasked) {
            if (isOwn) {
              value[symToStringTag] = tag;
            } else {
              delete value[symToStringTag];
            }
          }
          return result2;
        }
        var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
          if (object == null) {
            return [];
          }
          object = Object2(object);
          return arrayFilter(nativeGetSymbols(object), function(symbol) {
            return propertyIsEnumerable.call(object, symbol);
          });
        };
        var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
          var result2 = [];
          while (object) {
            arrayPush(result2, getSymbols(object));
            object = getPrototype(object);
          }
          return result2;
        };
        var getTag = baseGetTag;
        if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
          getTag = function(value) {
            var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined$1, ctorString = Ctor ? toSource(Ctor) : "";
            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result2;
          };
        }
        function getView(start, end, transforms) {
          var index = -1, length = transforms.length;
          while (++index < length) {
            var data = transforms[index], size2 = data.size;
            switch (data.type) {
              case "drop":
                start += size2;
                break;
              case "dropRight":
                end -= size2;
                break;
              case "take":
                end = nativeMin(end, start + size2);
                break;
              case "takeRight":
                start = nativeMax(start, end - size2);
                break;
            }
          }
          return { "start": start, "end": end };
        }
        function getWrapDetails(source) {
          var match = source.match(reWrapDetails);
          return match ? match[1].split(reSplitDetails) : [];
        }
        function hasPath(object, path, hasFunc) {
          path = castPath(path, object);
          var index = -1, length = path.length, result2 = false;
          while (++index < length) {
            var key = toKey(path[index]);
            if (!(result2 = object != null && hasFunc(object, key))) {
              break;
            }
            object = object[key];
          }
          if (result2 || ++index != length) {
            return result2;
          }
          length = object == null ? 0 : object.length;
          return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
        }
        function initCloneArray(array) {
          var length = array.length, result2 = new array.constructor(length);
          if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
            result2.index = array.index;
            result2.input = array.input;
          }
          return result2;
        }
        function initCloneObject(object) {
          return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
        }
        function initCloneByTag(object, tag, isDeep) {
          var Ctor = object.constructor;
          switch (tag) {
            case arrayBufferTag:
              return cloneArrayBuffer(object);
            case boolTag:
            case dateTag:
              return new Ctor(+object);
            case dataViewTag:
              return cloneDataView(object, isDeep);
            case float32Tag:
            case float64Tag:
            case int8Tag:
            case int16Tag:
            case int32Tag:
            case uint8Tag:
            case uint8ClampedTag:
            case uint16Tag:
            case uint32Tag:
              return cloneTypedArray(object, isDeep);
            case mapTag:
              return new Ctor();
            case numberTag:
            case stringTag:
              return new Ctor(object);
            case regexpTag:
              return cloneRegExp(object);
            case setTag:
              return new Ctor();
            case symbolTag:
              return cloneSymbol(object);
          }
        }
        function insertWrapDetails(source, details) {
          var length = details.length;
          if (!length) {
            return source;
          }
          var lastIndex = length - 1;
          details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
          details = details.join(length > 2 ? ", " : " ");
          return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
        }
        function isFlattenable(value) {
          return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        function isIndex(value, length) {
          var type = typeof value;
          length = length == null ? MAX_SAFE_INTEGER : length;
          return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
        }
        function isIterateeCall(value, index, object) {
          if (!isObject(object)) {
            return false;
          }
          var type = typeof index;
          if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
            return eq(object[index], value);
          }
          return false;
        }
        function isKey(value, object) {
          if (isArray(value)) {
            return false;
          }
          var type = typeof value;
          if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
            return true;
          }
          return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
        }
        function isKeyable(value) {
          var type = typeof value;
          return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
        }
        function isLaziable(func) {
          var funcName = getFuncName(func), other = lodash2[funcName];
          if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
            return false;
          }
          if (func === other) {
            return true;
          }
          var data = getData(other);
          return !!data && func === data[0];
        }
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }
        var isMaskable = coreJsData ? isFunction : stubFalse;
        function isPrototype(value) {
          var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
          return value === proto;
        }
        function isStrictComparable(value) {
          return value === value && !isObject(value);
        }
        function matchesStrictComparable(key, srcValue) {
          return function(object) {
            if (object == null) {
              return false;
            }
            return object[key] === srcValue && (srcValue !== undefined$1 || key in Object2(object));
          };
        }
        function memoizeCapped(func) {
          var result2 = memoize(func, function(key) {
            if (cache.size === MAX_MEMOIZE_SIZE) {
              cache.clear();
            }
            return key;
          });
          var cache = result2.cache;
          return result2;
        }
        function mergeData(data, source) {
          var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
          var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
          if (!(isCommon || isCombo)) {
            return data;
          }
          if (srcBitmask & WRAP_BIND_FLAG) {
            data[2] = source[2];
            newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
          }
          var value = source[3];
          if (value) {
            var partials = data[3];
            data[3] = partials ? composeArgs(partials, value, source[4]) : value;
            data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
          }
          value = source[5];
          if (value) {
            partials = data[5];
            data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
            data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
          }
          value = source[7];
          if (value) {
            data[7] = value;
          }
          if (srcBitmask & WRAP_ARY_FLAG) {
            data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
          }
          if (data[9] == null) {
            data[9] = source[9];
          }
          data[0] = source[0];
          data[1] = newBitmask;
          return data;
        }
        function nativeKeysIn(object) {
          var result2 = [];
          if (object != null) {
            for (var key in Object2(object)) {
              result2.push(key);
            }
          }
          return result2;
        }
        function objectToString(value) {
          return nativeObjectToString.call(value);
        }
        function overRest(func, start, transform2) {
          start = nativeMax(start === undefined$1 ? func.length - 1 : start, 0);
          return function() {
            var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
            while (++index < length) {
              array[index] = args[start + index];
            }
            index = -1;
            var otherArgs = Array2(start + 1);
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = transform2(array);
            return apply(func, this, otherArgs);
          };
        }
        function parent(object, path) {
          return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
        }
        function reorder(array, indexes) {
          var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
          while (length--) {
            var index = indexes[length];
            array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined$1;
          }
          return array;
        }
        function safeGet(object, key) {
          if (key === "constructor" && typeof object[key] === "function") {
            return;
          }
          if (key == "__proto__") {
            return;
          }
          return object[key];
        }
        var setData = shortOut(baseSetData);
        var setTimeout = ctxSetTimeout || function(func, wait) {
          return root.setTimeout(func, wait);
        };
        var setToString = shortOut(baseSetToString);
        function setWrapToString(wrapper, reference, bitmask) {
          var source = reference + "";
          return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
        }
        function shortOut(func) {
          var count = 0, lastCalled = 0;
          return function() {
            var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return arguments[0];
              }
            } else {
              count = 0;
            }
            return func.apply(undefined$1, arguments);
          };
        }
        function shuffleSelf(array, size2) {
          var index = -1, length = array.length, lastIndex = length - 1;
          size2 = size2 === undefined$1 ? length : size2;
          while (++index < size2) {
            var rand = baseRandom(index, lastIndex), value = array[rand];
            array[rand] = array[index];
            array[index] = value;
          }
          array.length = size2;
          return array;
        }
        var stringToPath = memoizeCapped(function(string) {
          var result2 = [];
          if (string.charCodeAt(0) === 46) {
            result2.push("");
          }
          string.replace(rePropName, function(match, number, quote, subString) {
            result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
          });
          return result2;
        });
        function toKey(value) {
          if (typeof value == "string" || isSymbol(value)) {
            return value;
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {
            }
            try {
              return func + "";
            } catch (e) {
            }
          }
          return "";
        }
        function updateWrapDetails(details, bitmask) {
          arrayEach(wrapFlags, function(pair) {
            var value = "_." + pair[0];
            if (bitmask & pair[1] && !arrayIncludes(details, value)) {
              details.push(value);
            }
          });
          return details.sort();
        }
        function wrapperClone(wrapper) {
          if (wrapper instanceof LazyWrapper) {
            return wrapper.clone();
          }
          var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
          result2.__actions__ = copyArray(wrapper.__actions__);
          result2.__index__ = wrapper.__index__;
          result2.__values__ = wrapper.__values__;
          return result2;
        }
        function chunk(array, size2, guard) {
          if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined$1) {
            size2 = 1;
          } else {
            size2 = nativeMax(toInteger(size2), 0);
          }
          var length = array == null ? 0 : array.length;
          if (!length || size2 < 1) {
            return [];
          }
          var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
          while (index < length) {
            result2[resIndex++] = baseSlice(array, index, index += size2);
          }
          return result2;
        }
        function compact(array) {
          var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index];
            if (value) {
              result2[resIndex++] = value;
            }
          }
          return result2;
        }
        function concat() {
          var length = arguments.length;
          if (!length) {
            return [];
          }
          var args = Array2(length - 1), array = arguments[0], index = length;
          while (index--) {
            args[index - 1] = arguments[index];
          }
          return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
        }
        var difference = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
        });
        var differenceBy = baseRest(function(array, values2) {
          var iteratee2 = last(values2);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined$1;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
        });
        var differenceWith = baseRest(function(array, values2) {
          var comparator = last(values2);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined$1;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined$1, comparator) : [];
        });
        function drop(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined$1 ? 1 : toInteger(n);
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function dropRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined$1 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function dropRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
        }
        function dropWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
        }
        function fill(array, value, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
            start = 0;
            end = length;
          }
          return baseFill(array, value, start, end);
        }
        function findIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index);
        }
        function findLastIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length - 1;
          if (fromIndex !== undefined$1) {
            index = toInteger(fromIndex);
            index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index, true);
        }
        function flatten(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, 1) : [];
        }
        function flattenDeep(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, INFINITY) : [];
        }
        function flattenDepth(array, depth) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          depth = depth === undefined$1 ? 1 : toInteger(depth);
          return baseFlatten(array, depth);
        }
        function fromPairs(pairs) {
          var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
          while (++index < length) {
            var pair = pairs[index];
            baseAssignValue(result2, pair[0], pair[1]);
          }
          return result2;
        }
        function head(array) {
          return array && array.length ? array[0] : undefined$1;
        }
        function indexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseIndexOf(array, value, index);
        }
        function initial(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 0, -1) : [];
        }
        var intersection = baseRest(function(arrays) {
          var mapped = arrayMap(arrays, castArrayLikeObject);
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
        });
        var intersectionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          if (iteratee2 === last(mapped)) {
            iteratee2 = undefined$1;
          } else {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
        });
        var intersectionWith = baseRest(function(arrays) {
          var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          comparator = typeof comparator == "function" ? comparator : undefined$1;
          if (comparator) {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined$1, comparator) : [];
        });
        function join(array, separator) {
          return array == null ? "" : nativeJoin.call(array, separator);
        }
        function last(array) {
          var length = array == null ? 0 : array.length;
          return length ? array[length - 1] : undefined$1;
        }
        function lastIndexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length;
          if (fromIndex !== undefined$1) {
            index = toInteger(fromIndex);
            index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
        }
        function nth(array, n) {
          return array && array.length ? baseNth(array, toInteger(n)) : undefined$1;
        }
        var pull = baseRest(pullAll);
        function pullAll(array, values2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
        }
        function pullAllBy(array, values2, iteratee2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
        }
        function pullAllWith(array, values2, comparator) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined$1, comparator) : array;
        }
        var pullAt = flatRest(function(array, indexes) {
          var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
          basePullAt(array, arrayMap(indexes, function(index) {
            return isIndex(index, length) ? +index : index;
          }).sort(compareAscending));
          return result2;
        });
        function remove(array, predicate) {
          var result2 = [];
          if (!(array && array.length)) {
            return result2;
          }
          var index = -1, indexes = [], length = array.length;
          predicate = getIteratee(predicate, 3);
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result2.push(value);
              indexes.push(index);
            }
          }
          basePullAt(array, indexes);
          return result2;
        }
        function reverse(array) {
          return array == null ? array : nativeReverse.call(array);
        }
        function slice(array, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
            start = 0;
            end = length;
          } else {
            start = start == null ? 0 : toInteger(start);
            end = end === undefined$1 ? length : toInteger(end);
          }
          return baseSlice(array, start, end);
        }
        function sortedIndex(array, value) {
          return baseSortedIndex(array, value);
        }
        function sortedIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
        }
        function sortedIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value);
            if (index < length && eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedLastIndex(array, value) {
          return baseSortedIndex(array, value, true);
        }
        function sortedLastIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
        }
        function sortedLastIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value, true) - 1;
            if (eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedUniq(array) {
          return array && array.length ? baseSortedUniq(array) : [];
        }
        function sortedUniqBy(array, iteratee2) {
          return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function tail(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 1, length) : [];
        }
        function take(array, n, guard) {
          if (!(array && array.length)) {
            return [];
          }
          n = guard || n === undefined$1 ? 1 : toInteger(n);
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function takeRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined$1 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function takeRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
        }
        function takeWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
        }
        var union = baseRest(function(arrays) {
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
        });
        var unionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined$1;
          }
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
        });
        var unionWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined$1;
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined$1, comparator);
        });
        function uniq(array) {
          return array && array.length ? baseUniq(array) : [];
        }
        function uniqBy(array, iteratee2) {
          return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function uniqWith(array, comparator) {
          comparator = typeof comparator == "function" ? comparator : undefined$1;
          return array && array.length ? baseUniq(array, undefined$1, comparator) : [];
        }
        function unzip(array) {
          if (!(array && array.length)) {
            return [];
          }
          var length = 0;
          array = arrayFilter(array, function(group) {
            if (isArrayLikeObject(group)) {
              length = nativeMax(group.length, length);
              return true;
            }
          });
          return baseTimes(length, function(index) {
            return arrayMap(array, baseProperty(index));
          });
        }
        function unzipWith(array, iteratee2) {
          if (!(array && array.length)) {
            return [];
          }
          var result2 = unzip(array);
          if (iteratee2 == null) {
            return result2;
          }
          return arrayMap(result2, function(group) {
            return apply(iteratee2, undefined$1, group);
          });
        }
        var without = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
        });
        var xor = baseRest(function(arrays) {
          return baseXor(arrayFilter(arrays, isArrayLikeObject));
        });
        var xorBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined$1;
          }
          return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
        });
        var xorWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined$1;
          return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined$1, comparator);
        });
        var zip = baseRest(unzip);
        function zipObject(props, values2) {
          return baseZipObject(props || [], values2 || [], assignValue);
        }
        function zipObjectDeep(props, values2) {
          return baseZipObject(props || [], values2 || [], baseSet);
        }
        var zipWith = baseRest(function(arrays) {
          var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined$1;
          iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined$1;
          return unzipWith(arrays, iteratee2);
        });
        function chain(value) {
          var result2 = lodash2(value);
          result2.__chain__ = true;
          return result2;
        }
        function tap(value, interceptor) {
          interceptor(value);
          return value;
        }
        function thru(value, interceptor) {
          return interceptor(value);
        }
        var wrapperAt = flatRest(function(paths) {
          var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
            return baseAt(object, paths);
          };
          if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
            return this.thru(interceptor);
          }
          value = value.slice(start, +start + (length ? 1 : 0));
          value.__actions__.push({
            "func": thru,
            "args": [interceptor],
            "thisArg": undefined$1
          });
          return new LodashWrapper(value, this.__chain__).thru(function(array) {
            if (length && !array.length) {
              array.push(undefined$1);
            }
            return array;
          });
        });
        function wrapperChain() {
          return chain(this);
        }
        function wrapperCommit() {
          return new LodashWrapper(this.value(), this.__chain__);
        }
        function wrapperNext() {
          if (this.__values__ === undefined$1) {
            this.__values__ = toArray(this.value());
          }
          var done = this.__index__ >= this.__values__.length, value = done ? undefined$1 : this.__values__[this.__index__++];
          return { "done": done, "value": value };
        }
        function wrapperToIterator() {
          return this;
        }
        function wrapperPlant(value) {
          var result2, parent2 = this;
          while (parent2 instanceof baseLodash) {
            var clone2 = wrapperClone(parent2);
            clone2.__index__ = 0;
            clone2.__values__ = undefined$1;
            if (result2) {
              previous.__wrapped__ = clone2;
            } else {
              result2 = clone2;
            }
            var previous = clone2;
            parent2 = parent2.__wrapped__;
          }
          previous.__wrapped__ = value;
          return result2;
        }
        function wrapperReverse() {
          var value = this.__wrapped__;
          if (value instanceof LazyWrapper) {
            var wrapped = value;
            if (this.__actions__.length) {
              wrapped = new LazyWrapper(this);
            }
            wrapped = wrapped.reverse();
            wrapped.__actions__.push({
              "func": thru,
              "args": [reverse],
              "thisArg": undefined$1
            });
            return new LodashWrapper(wrapped, this.__chain__);
          }
          return this.thru(reverse);
        }
        function wrapperValue() {
          return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        var countBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            ++result2[key];
          } else {
            baseAssignValue(result2, key, 1);
          }
        });
        function every(collection, predicate, guard) {
          var func = isArray(collection) ? arrayEvery : baseEvery;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined$1;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        function filter(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, getIteratee(predicate, 3));
        }
        var find = createFind(findIndex);
        var findLast = createFind(findLastIndex);
        function flatMap(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), 1);
        }
        function flatMapDeep(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), INFINITY);
        }
        function flatMapDepth(collection, iteratee2, depth) {
          depth = depth === undefined$1 ? 1 : toInteger(depth);
          return baseFlatten(map(collection, iteratee2), depth);
        }
        function forEach(collection, iteratee2) {
          var func = isArray(collection) ? arrayEach : baseEach;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function forEachRight(collection, iteratee2) {
          var func = isArray(collection) ? arrayEachRight : baseEachRight;
          return func(collection, getIteratee(iteratee2, 3));
        }
        var groupBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            result2[key].push(value);
          } else {
            baseAssignValue(result2, key, [value]);
          }
        });
        function includes(collection, value, fromIndex, guard) {
          collection = isArrayLike(collection) ? collection : values(collection);
          fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
          var length = collection.length;
          if (fromIndex < 0) {
            fromIndex = nativeMax(length + fromIndex, 0);
          }
          return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
        }
        var invokeMap = baseRest(function(collection, path, args) {
          var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value) {
            result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
          });
          return result2;
        });
        var keyBy = createAggregator(function(result2, value, key) {
          baseAssignValue(result2, key, value);
        });
        function map(collection, iteratee2) {
          var func = isArray(collection) ? arrayMap : baseMap;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function orderBy(collection, iteratees, orders, guard) {
          if (collection == null) {
            return [];
          }
          if (!isArray(iteratees)) {
            iteratees = iteratees == null ? [] : [iteratees];
          }
          orders = guard ? undefined$1 : orders;
          if (!isArray(orders)) {
            orders = orders == null ? [] : [orders];
          }
          return baseOrderBy(collection, iteratees, orders);
        }
        var partition = createAggregator(function(result2, value, key) {
          result2[key ? 0 : 1].push(value);
        }, function() {
          return [[], []];
        });
        function reduce(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
        }
        function reduceRight(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
        }
        function reject(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, negate(getIteratee(predicate, 3)));
        }
        function sample(collection) {
          var func = isArray(collection) ? arraySample : baseSample;
          return func(collection);
        }
        function sampleSize(collection, n, guard) {
          if (guard ? isIterateeCall(collection, n, guard) : n === undefined$1) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          var func = isArray(collection) ? arraySampleSize : baseSampleSize;
          return func(collection, n);
        }
        function shuffle(collection) {
          var func = isArray(collection) ? arrayShuffle : baseShuffle;
          return func(collection);
        }
        function size(collection) {
          if (collection == null) {
            return 0;
          }
          if (isArrayLike(collection)) {
            return isString(collection) ? stringSize(collection) : collection.length;
          }
          var tag = getTag(collection);
          if (tag == mapTag || tag == setTag) {
            return collection.size;
          }
          return baseKeys(collection).length;
        }
        function some(collection, predicate, guard) {
          var func = isArray(collection) ? arraySome : baseSome;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined$1;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        var sortBy = baseRest(function(collection, iteratees) {
          if (collection == null) {
            return [];
          }
          var length = iteratees.length;
          if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
            iteratees = [];
          } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
            iteratees = [iteratees[0]];
          }
          return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
        });
        var now = ctxNow || function() {
          return root.Date.now();
        };
        function after(n, func) {
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n < 1) {
              return func.apply(this, arguments);
            }
          };
        }
        function ary(func, n, guard) {
          n = guard ? undefined$1 : n;
          n = func && n == null ? func.length : n;
          return createWrap(func, WRAP_ARY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, n);
        }
        function before(n, func) {
          var result2;
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n > 0) {
              result2 = func.apply(this, arguments);
            }
            if (n <= 1) {
              func = undefined$1;
            }
            return result2;
          };
        }
        var bind = baseRest(function(func, thisArg, partials) {
          var bitmask = WRAP_BIND_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bind));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(func, bitmask, thisArg, partials, holders);
        });
        var bindKey = baseRest(function(object, key, partials) {
          var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bindKey));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(key, bitmask, object, partials, holders);
        });
        function curry(func, arity, guard) {
          arity = guard ? undefined$1 : arity;
          var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
          result2.placeholder = curry.placeholder;
          return result2;
        }
        function curryRight(func, arity, guard) {
          arity = guard ? undefined$1 : arity;
          var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
          result2.placeholder = curryRight.placeholder;
          return result2;
        }
        function debounce(func, wait, options) {
          var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          wait = toNumber(wait) || 0;
          if (isObject(options)) {
            leading = !!options.leading;
            maxing = "maxWait" in options;
            maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          function invokeFunc(time) {
            var args = lastArgs, thisArg = lastThis;
            lastArgs = lastThis = undefined$1;
            lastInvokeTime = time;
            result2 = func.apply(thisArg, args);
            return result2;
          }
          function leadingEdge(time) {
            lastInvokeTime = time;
            timerId = setTimeout(timerExpired, wait);
            return leading ? invokeFunc(time) : result2;
          }
          function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
            return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
          }
          function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
            return lastCallTime === undefined$1 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
          }
          function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
              return trailingEdge(time);
            }
            timerId = setTimeout(timerExpired, remainingWait(time));
          }
          function trailingEdge(time) {
            timerId = undefined$1;
            if (trailing && lastArgs) {
              return invokeFunc(time);
            }
            lastArgs = lastThis = undefined$1;
            return result2;
          }
          function cancel() {
            if (timerId !== undefined$1) {
              clearTimeout(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined$1;
          }
          function flush() {
            return timerId === undefined$1 ? result2 : trailingEdge(now());
          }
          function debounced() {
            var time = now(), isInvoking = shouldInvoke(time);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;
            if (isInvoking) {
              if (timerId === undefined$1) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                clearTimeout(timerId);
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === undefined$1) {
              timerId = setTimeout(timerExpired, wait);
            }
            return result2;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        var defer = baseRest(function(func, args) {
          return baseDelay(func, 1, args);
        });
        var delay = baseRest(function(func, wait, args) {
          return baseDelay(func, toNumber(wait) || 0, args);
        });
        function flip(func) {
          return createWrap(func, WRAP_FLIP_FLAG);
        }
        function memoize(func, resolver) {
          if (typeof func != "function" || resolver != null && typeof resolver != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          var memoized = function() {
            var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
            if (cache.has(key)) {
              return cache.get(key);
            }
            var result2 = func.apply(this, args);
            memoized.cache = cache.set(key, result2) || cache;
            return result2;
          };
          memoized.cache = new (memoize.Cache || MapCache)();
          return memoized;
        }
        memoize.Cache = MapCache;
        function negate(predicate) {
          if (typeof predicate != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return !predicate.call(this);
              case 1:
                return !predicate.call(this, args[0]);
              case 2:
                return !predicate.call(this, args[0], args[1]);
              case 3:
                return !predicate.call(this, args[0], args[1], args[2]);
            }
            return !predicate.apply(this, args);
          };
        }
        function once(func) {
          return before(2, func);
        }
        var overArgs = castRest(function(func, transforms) {
          transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
          var funcsLength = transforms.length;
          return baseRest(function(args) {
            var index = -1, length = nativeMin(args.length, funcsLength);
            while (++index < length) {
              args[index] = transforms[index].call(this, args[index]);
            }
            return apply(func, this, args);
          });
        });
        var partial = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partial));
          return createWrap(func, WRAP_PARTIAL_FLAG, undefined$1, partials, holders);
        });
        var partialRight = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partialRight));
          return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined$1, partials, holders);
        });
        var rearg = flatRest(function(func, indexes) {
          return createWrap(func, WRAP_REARG_FLAG, undefined$1, undefined$1, undefined$1, indexes);
        });
        function rest(func, start) {
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          start = start === undefined$1 ? start : toInteger(start);
          return baseRest(func, start);
        }
        function spread(func, start) {
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          start = start == null ? 0 : nativeMax(toInteger(start), 0);
          return baseRest(function(args) {
            var array = args[start], otherArgs = castSlice(args, 0, start);
            if (array) {
              arrayPush(otherArgs, array);
            }
            return apply(func, this, otherArgs);
          });
        }
        function throttle(func, wait, options) {
          var leading = true, trailing = true;
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (isObject(options)) {
            leading = "leading" in options ? !!options.leading : leading;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          return debounce(func, wait, {
            "leading": leading,
            "maxWait": wait,
            "trailing": trailing
          });
        }
        function unary(func) {
          return ary(func, 1);
        }
        function wrap(value, wrapper) {
          return partial(castFunction(wrapper), value);
        }
        function castArray() {
          if (!arguments.length) {
            return [];
          }
          var value = arguments[0];
          return isArray(value) ? value : [value];
        }
        function clone(value) {
          return baseClone(value, CLONE_SYMBOLS_FLAG);
        }
        function cloneWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined$1;
          return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
        }
        function cloneDeep(value) {
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
        }
        function cloneDeepWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined$1;
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
        }
        function conformsTo(object, source) {
          return source == null || baseConformsTo(object, source, keys(source));
        }
        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }
        var gt = createRelationalOperation(baseGt);
        var gte = createRelationalOperation(function(value, other) {
          return value >= other;
        });
        var isArguments = baseIsArguments(/* @__PURE__ */ function() {
          return arguments;
        }()) ? baseIsArguments : function(value) {
          return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
        };
        var isArray = Array2.isArray;
        var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction(value);
        }
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }
        function isBoolean(value) {
          return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
        }
        var isBuffer = nativeIsBuffer || stubFalse;
        var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
        function isElement(value) {
          return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
        }
        function isEmpty(value) {
          if (value == null) {
            return true;
          }
          if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
            return !value.length;
          }
          var tag = getTag(value);
          if (tag == mapTag || tag == setTag) {
            return !value.size;
          }
          if (isPrototype(value)) {
            return !baseKeys(value).length;
          }
          for (var key in value) {
            if (hasOwnProperty.call(value, key)) {
              return false;
            }
          }
          return true;
        }
        function isEqual(value, other) {
          return baseIsEqual(value, other);
        }
        function isEqualWith(value, other, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined$1;
          var result2 = customizer ? customizer(value, other) : undefined$1;
          return result2 === undefined$1 ? baseIsEqual(value, other, undefined$1, customizer) : !!result2;
        }
        function isError(value) {
          if (!isObjectLike(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
        }
        function isFinite(value) {
          return typeof value == "number" && nativeIsFinite(value);
        }
        function isFunction(value) {
          if (!isObject(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        function isInteger(value) {
          return typeof value == "number" && value == toInteger(value);
        }
        function isLength(value) {
          return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        function isObject(value) {
          var type = typeof value;
          return value != null && (type == "object" || type == "function");
        }
        function isObjectLike(value) {
          return value != null && typeof value == "object";
        }
        var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
        function isMatch(object, source) {
          return object === source || baseIsMatch(object, source, getMatchData(source));
        }
        function isMatchWith(object, source, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined$1;
          return baseIsMatch(object, source, getMatchData(source), customizer);
        }
        function isNaN(value) {
          return isNumber(value) && value != +value;
        }
        function isNative(value) {
          if (isMaskable(value)) {
            throw new Error(CORE_ERROR_TEXT);
          }
          return baseIsNative(value);
        }
        function isNull(value) {
          return value === null;
        }
        function isNil(value) {
          return value == null;
        }
        function isNumber(value) {
          return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
        }
        function isPlainObject(value) {
          if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
            return false;
          }
          var proto = getPrototype(value);
          if (proto === null) {
            return true;
          }
          var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
          return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
        function isSafeInteger(value) {
          return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
        }
        var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
        function isString(value) {
          return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
        }
        function isSymbol(value) {
          return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
        }
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        function isUndefined(value) {
          return value === undefined$1;
        }
        function isWeakMap(value) {
          return isObjectLike(value) && getTag(value) == weakMapTag;
        }
        function isWeakSet(value) {
          return isObjectLike(value) && baseGetTag(value) == weakSetTag;
        }
        var lt = createRelationalOperation(baseLt);
        var lte = createRelationalOperation(function(value, other) {
          return value <= other;
        });
        function toArray(value) {
          if (!value) {
            return [];
          }
          if (isArrayLike(value)) {
            return isString(value) ? stringToArray(value) : copyArray(value);
          }
          if (symIterator && value[symIterator]) {
            return iteratorToArray(value[symIterator]());
          }
          var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
          return func(value);
        }
        function toFinite(value) {
          if (!value) {
            return value === 0 ? value : 0;
          }
          value = toNumber(value);
          if (value === INFINITY || value === -INFINITY) {
            var sign = value < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
          }
          return value === value ? value : 0;
        }
        function toInteger(value) {
          var result2 = toFinite(value), remainder = result2 % 1;
          return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
        }
        function toLength(value) {
          return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
        }
        function toNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject(value)) {
            var other = typeof value.valueOf == "function" ? value.valueOf() : value;
            value = isObject(other) ? other + "" : other;
          }
          if (typeof value != "string") {
            return value === 0 ? value : +value;
          }
          value = baseTrim(value);
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        function toPlainObject(value) {
          return copyObject(value, keysIn(value));
        }
        function toSafeInteger(value) {
          return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
        }
        function toString(value) {
          return value == null ? "" : baseToString(value);
        }
        var assign = createAssigner(function(object, source) {
          if (isPrototype(source) || isArrayLike(source)) {
            copyObject(source, keys(source), object);
            return;
          }
          for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
              assignValue(object, key, source[key]);
            }
          }
        });
        var assignIn = createAssigner(function(object, source) {
          copyObject(source, keysIn(source), object);
        });
        var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keysIn(source), object, customizer);
        });
        var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keys(source), object, customizer);
        });
        var at = flatRest(baseAt);
        function create(prototype, properties) {
          var result2 = baseCreate(prototype);
          return properties == null ? result2 : baseAssign(result2, properties);
        }
        var defaults = baseRest(function(object, sources) {
          object = Object2(object);
          var index = -1;
          var length = sources.length;
          var guard = length > 2 ? sources[2] : undefined$1;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            length = 1;
          }
          while (++index < length) {
            var source = sources[index];
            var props = keysIn(source);
            var propsIndex = -1;
            var propsLength = props.length;
            while (++propsIndex < propsLength) {
              var key = props[propsIndex];
              var value = object[key];
              if (value === undefined$1 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                object[key] = source[key];
              }
            }
          }
          return object;
        });
        var defaultsDeep = baseRest(function(args) {
          args.push(undefined$1, customDefaultsMerge);
          return apply(mergeWith, undefined$1, args);
        });
        function findKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
        }
        function findLastKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
        }
        function forIn(object, iteratee2) {
          return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forInRight(object, iteratee2) {
          return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forOwn(object, iteratee2) {
          return object && baseForOwn(object, getIteratee(iteratee2, 3));
        }
        function forOwnRight(object, iteratee2) {
          return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
        }
        function functions(object) {
          return object == null ? [] : baseFunctions(object, keys(object));
        }
        function functionsIn(object) {
          return object == null ? [] : baseFunctions(object, keysIn(object));
        }
        function get(object, path, defaultValue) {
          var result2 = object == null ? undefined$1 : baseGet(object, path);
          return result2 === undefined$1 ? defaultValue : result2;
        }
        function has(object, path) {
          return object != null && hasPath(object, path, baseHas);
        }
        function hasIn(object, path) {
          return object != null && hasPath(object, path, baseHasIn);
        }
        var invert = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          result2[value] = key;
        }, constant(identity));
        var invertBy = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          if (hasOwnProperty.call(result2, value)) {
            result2[value].push(key);
          } else {
            result2[value] = [key];
          }
        }, getIteratee);
        var invoke = baseRest(baseInvoke);
        function keys(object) {
          return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }
        function keysIn(object) {
          return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
        }
        function mapKeys(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, iteratee2(value, key, object2), value);
          });
          return result2;
        }
        function mapValues(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, key, iteratee2(value, key, object2));
          });
          return result2;
        }
        var merge = createAssigner(function(object, source, srcIndex) {
          baseMerge(object, source, srcIndex);
        });
        var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
          baseMerge(object, source, srcIndex, customizer);
        });
        var omit = flatRest(function(object, paths) {
          var result2 = {};
          if (object == null) {
            return result2;
          }
          var isDeep = false;
          paths = arrayMap(paths, function(path) {
            path = castPath(path, object);
            isDeep || (isDeep = path.length > 1);
            return path;
          });
          copyObject(object, getAllKeysIn(object), result2);
          if (isDeep) {
            result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
          }
          var length = paths.length;
          while (length--) {
            baseUnset(result2, paths[length]);
          }
          return result2;
        });
        function omitBy(object, predicate) {
          return pickBy(object, negate(getIteratee(predicate)));
        }
        var pick = flatRest(function(object, paths) {
          return object == null ? {} : basePick(object, paths);
        });
        function pickBy(object, predicate) {
          if (object == null) {
            return {};
          }
          var props = arrayMap(getAllKeysIn(object), function(prop) {
            return [prop];
          });
          predicate = getIteratee(predicate);
          return basePickBy(object, props, function(value, path) {
            return predicate(value, path[0]);
          });
        }
        function result(object, path, defaultValue) {
          path = castPath(path, object);
          var index = -1, length = path.length;
          if (!length) {
            length = 1;
            object = undefined$1;
          }
          while (++index < length) {
            var value = object == null ? undefined$1 : object[toKey(path[index])];
            if (value === undefined$1) {
              index = length;
              value = defaultValue;
            }
            object = isFunction(value) ? value.call(object) : value;
          }
          return object;
        }
        function set(object, path, value) {
          return object == null ? object : baseSet(object, path, value);
        }
        function setWith(object, path, value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined$1;
          return object == null ? object : baseSet(object, path, value, customizer);
        }
        var toPairs = createToPairs(keys);
        var toPairsIn = createToPairs(keysIn);
        function transform(object, iteratee2, accumulator) {
          var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
          iteratee2 = getIteratee(iteratee2, 4);
          if (accumulator == null) {
            var Ctor = object && object.constructor;
            if (isArrLike) {
              accumulator = isArr ? new Ctor() : [];
            } else if (isObject(object)) {
              accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
            } else {
              accumulator = {};
            }
          }
          (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
            return iteratee2(accumulator, value, index, object2);
          });
          return accumulator;
        }
        function unset(object, path) {
          return object == null ? true : baseUnset(object, path);
        }
        function update(object, path, updater) {
          return object == null ? object : baseUpdate(object, path, castFunction(updater));
        }
        function updateWith(object, path, updater, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined$1;
          return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
        }
        function values(object) {
          return object == null ? [] : baseValues(object, keys(object));
        }
        function valuesIn(object) {
          return object == null ? [] : baseValues(object, keysIn(object));
        }
        function clamp(number, lower, upper) {
          if (upper === undefined$1) {
            upper = lower;
            lower = undefined$1;
          }
          if (upper !== undefined$1) {
            upper = toNumber(upper);
            upper = upper === upper ? upper : 0;
          }
          if (lower !== undefined$1) {
            lower = toNumber(lower);
            lower = lower === lower ? lower : 0;
          }
          return baseClamp(toNumber(number), lower, upper);
        }
        function inRange(number, start, end) {
          start = toFinite(start);
          if (end === undefined$1) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          number = toNumber(number);
          return baseInRange(number, start, end);
        }
        function random(lower, upper, floating) {
          if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
            upper = floating = undefined$1;
          }
          if (floating === undefined$1) {
            if (typeof upper == "boolean") {
              floating = upper;
              upper = undefined$1;
            } else if (typeof lower == "boolean") {
              floating = lower;
              lower = undefined$1;
            }
          }
          if (lower === undefined$1 && upper === undefined$1) {
            lower = 0;
            upper = 1;
          } else {
            lower = toFinite(lower);
            if (upper === undefined$1) {
              upper = lower;
              lower = 0;
            } else {
              upper = toFinite(upper);
            }
          }
          if (lower > upper) {
            var temp = lower;
            lower = upper;
            upper = temp;
          }
          if (floating || lower % 1 || upper % 1) {
            var rand = nativeRandom();
            return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
          }
          return baseRandom(lower, upper);
        }
        var camelCase = createCompounder(function(result2, word, index) {
          word = word.toLowerCase();
          return result2 + (index ? capitalize(word) : word);
        });
        function capitalize(string) {
          return upperFirst(toString(string).toLowerCase());
        }
        function deburr(string) {
          string = toString(string);
          return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
        }
        function endsWith(string, target, position) {
          string = toString(string);
          target = baseToString(target);
          var length = string.length;
          position = position === undefined$1 ? length : baseClamp(toInteger(position), 0, length);
          var end = position;
          position -= target.length;
          return position >= 0 && string.slice(position, end) == target;
        }
        function escape(string) {
          string = toString(string);
          return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
        }
        function escapeRegExp(string) {
          string = toString(string);
          return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
        }
        var kebabCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "-" : "") + word.toLowerCase();
        });
        var lowerCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toLowerCase();
        });
        var lowerFirst = createCaseFirst("toLowerCase");
        function pad(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          if (!length || strLength >= length) {
            return string;
          }
          var mid = (length - strLength) / 2;
          return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
        }
        function padEnd(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
        }
        function padStart(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
        }
        function parseInt2(string, radix, guard) {
          if (guard || radix == null) {
            radix = 0;
          } else if (radix) {
            radix = +radix;
          }
          return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
        }
        function repeat(string, n, guard) {
          if (guard ? isIterateeCall(string, n, guard) : n === undefined$1) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          return baseRepeat(toString(string), n);
        }
        function replace() {
          var args = arguments, string = toString(args[0]);
          return args.length < 3 ? string : string.replace(args[1], args[2]);
        }
        var snakeCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "_" : "") + word.toLowerCase();
        });
        function split(string, separator, limit) {
          if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
            separator = limit = undefined$1;
          }
          limit = limit === undefined$1 ? MAX_ARRAY_LENGTH : limit >>> 0;
          if (!limit) {
            return [];
          }
          string = toString(string);
          if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
            separator = baseToString(separator);
            if (!separator && hasUnicode(string)) {
              return castSlice(stringToArray(string), 0, limit);
            }
          }
          return string.split(separator, limit);
        }
        var startCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + upperFirst(word);
        });
        function startsWith(string, target, position) {
          string = toString(string);
          position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
          target = baseToString(target);
          return string.slice(position, position + target.length) == target;
        }
        function template(string, options, guard) {
          var settings = lodash2.templateSettings;
          if (guard && isIterateeCall(string, options, guard)) {
            options = undefined$1;
          }
          string = toString(string);
          options = assignWith({}, options, settings, customDefaultsAssignIn);
          var imports = assignWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
          arrayEach(importsKeys, function(key) {
            if (reForbiddenIdentifierChars.test(key)) {
              throw new Error(INVALID_TEMPL_IMPORTS_ERROR_TEXT);
            }
          });
          var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
          var reDelimiters = RegExp2(
            (options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$",
            "g"
          );
          var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
          string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
            interpolateValue || (interpolateValue = esTemplateValue);
            source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
            if (escapeValue) {
              isEscaping = true;
              source += "' +\n__e(" + escapeValue + ") +\n'";
            }
            if (evaluateValue) {
              isEvaluating = true;
              source += "';\n" + evaluateValue + ";\n__p += '";
            }
            if (interpolateValue) {
              source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
            }
            index = offset + match.length;
            return match;
          });
          source += "';\n";
          var variable = hasOwnProperty.call(options, "variable") && options.variable;
          if (!variable) {
            source = "with (obj) {\n" + source + "\n}\n";
          } else if (reForbiddenIdentifierChars.test(variable)) {
            throw new Error(INVALID_TEMPL_VAR_ERROR_TEXT);
          }
          source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
          source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
          var result2 = attempt(function() {
            return Function2(importsKeys, sourceURL + "return " + source).apply(undefined$1, importsValues);
          });
          result2.source = source;
          if (isError(result2)) {
            throw result2;
          }
          return result2;
        }
        function toLower(value) {
          return toString(value).toLowerCase();
        }
        function toUpper(value) {
          return toString(value).toUpperCase();
        }
        function trim(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined$1)) {
            return baseTrim(string);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
          return castSlice(strSymbols, start, end).join("");
        }
        function trimEnd(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined$1)) {
            return string.slice(0, trimmedEndIndex(string) + 1);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
          return castSlice(strSymbols, 0, end).join("");
        }
        function trimStart(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined$1)) {
            return string.replace(reTrimStart, "");
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
          return castSlice(strSymbols, start).join("");
        }
        function truncate(string, options) {
          var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
          if (isObject(options)) {
            var separator = "separator" in options ? options.separator : separator;
            length = "length" in options ? toInteger(options.length) : length;
            omission = "omission" in options ? baseToString(options.omission) : omission;
          }
          string = toString(string);
          var strLength = string.length;
          if (hasUnicode(string)) {
            var strSymbols = stringToArray(string);
            strLength = strSymbols.length;
          }
          if (length >= strLength) {
            return string;
          }
          var end = length - stringSize(omission);
          if (end < 1) {
            return omission;
          }
          var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
          if (separator === undefined$1) {
            return result2 + omission;
          }
          if (strSymbols) {
            end += result2.length - end;
          }
          if (isRegExp(separator)) {
            if (string.slice(end).search(separator)) {
              var match, substring = result2;
              if (!separator.global) {
                separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
              }
              separator.lastIndex = 0;
              while (match = separator.exec(substring)) {
                var newEnd = match.index;
              }
              result2 = result2.slice(0, newEnd === undefined$1 ? end : newEnd);
            }
          } else if (string.indexOf(baseToString(separator), end) != end) {
            var index = result2.lastIndexOf(separator);
            if (index > -1) {
              result2 = result2.slice(0, index);
            }
          }
          return result2 + omission;
        }
        function unescape(string) {
          string = toString(string);
          return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
        }
        var upperCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toUpperCase();
        });
        var upperFirst = createCaseFirst("toUpperCase");
        function words(string, pattern, guard) {
          string = toString(string);
          pattern = guard ? undefined$1 : pattern;
          if (pattern === undefined$1) {
            return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
          }
          return string.match(pattern) || [];
        }
        var attempt = baseRest(function(func, args) {
          try {
            return apply(func, undefined$1, args);
          } catch (e) {
            return isError(e) ? e : new Error(e);
          }
        });
        var bindAll = flatRest(function(object, methodNames) {
          arrayEach(methodNames, function(key) {
            key = toKey(key);
            baseAssignValue(object, key, bind(object[key], object));
          });
          return object;
        });
        function cond(pairs) {
          var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
          pairs = !length ? [] : arrayMap(pairs, function(pair) {
            if (typeof pair[1] != "function") {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            return [toIteratee(pair[0]), pair[1]];
          });
          return baseRest(function(args) {
            var index = -1;
            while (++index < length) {
              var pair = pairs[index];
              if (apply(pair[0], this, args)) {
                return apply(pair[1], this, args);
              }
            }
          });
        }
        function conforms(source) {
          return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
        }
        function constant(value) {
          return function() {
            return value;
          };
        }
        function defaultTo(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }
        var flow = createFlow();
        var flowRight = createFlow(true);
        function identity(value) {
          return value;
        }
        function iteratee(func) {
          return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
        }
        function matches(source) {
          return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
        }
        function matchesProperty(path, srcValue) {
          return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
        }
        var method = baseRest(function(path, args) {
          return function(object) {
            return baseInvoke(object, path, args);
          };
        });
        var methodOf = baseRest(function(object, args) {
          return function(path) {
            return baseInvoke(object, path, args);
          };
        });
        function mixin(object, source, options) {
          var props = keys(source), methodNames = baseFunctions(source, props);
          if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
            options = source;
            source = object;
            object = this;
            methodNames = baseFunctions(source, keys(source));
          }
          var chain2 = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object);
          arrayEach(methodNames, function(methodName) {
            var func = source[methodName];
            object[methodName] = func;
            if (isFunc) {
              object.prototype[methodName] = function() {
                var chainAll = this.__chain__;
                if (chain2 || chainAll) {
                  var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                  actions.push({ "func": func, "args": arguments, "thisArg": object });
                  result2.__chain__ = chainAll;
                  return result2;
                }
                return func.apply(object, arrayPush([this.value()], arguments));
              };
            }
          });
          return object;
        }
        function noConflict() {
          if (root._ === this) {
            root._ = oldDash;
          }
          return this;
        }
        function noop() {
        }
        function nthArg(n) {
          n = toInteger(n);
          return baseRest(function(args) {
            return baseNth(args, n);
          });
        }
        var over = createOver(arrayMap);
        var overEvery = createOver(arrayEvery);
        var overSome = createOver(arraySome);
        function property(path) {
          return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        function propertyOf(object) {
          return function(path) {
            return object == null ? undefined$1 : baseGet(object, path);
          };
        }
        var range = createRange();
        var rangeRight = createRange(true);
        function stubArray() {
          return [];
        }
        function stubFalse() {
          return false;
        }
        function stubObject() {
          return {};
        }
        function stubString() {
          return "";
        }
        function stubTrue() {
          return true;
        }
        function times(n, iteratee2) {
          n = toInteger(n);
          if (n < 1 || n > MAX_SAFE_INTEGER) {
            return [];
          }
          var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
          iteratee2 = getIteratee(iteratee2);
          n -= MAX_ARRAY_LENGTH;
          var result2 = baseTimes(length, iteratee2);
          while (++index < n) {
            iteratee2(index);
          }
          return result2;
        }
        function toPath(value) {
          if (isArray(value)) {
            return arrayMap(value, toKey);
          }
          return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
        }
        function uniqueId(prefix) {
          var id = ++idCounter;
          return toString(prefix) + id;
        }
        var add = createMathOperation(function(augend, addend) {
          return augend + addend;
        }, 0);
        var ceil = createRound("ceil");
        var divide = createMathOperation(function(dividend, divisor) {
          return dividend / divisor;
        }, 1);
        var floor = createRound("floor");
        function max(array) {
          return array && array.length ? baseExtremum(array, identity, baseGt) : undefined$1;
        }
        function maxBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined$1;
        }
        function mean(array) {
          return baseMean(array, identity);
        }
        function meanBy(array, iteratee2) {
          return baseMean(array, getIteratee(iteratee2, 2));
        }
        function min(array) {
          return array && array.length ? baseExtremum(array, identity, baseLt) : undefined$1;
        }
        function minBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined$1;
        }
        var multiply = createMathOperation(function(multiplier, multiplicand) {
          return multiplier * multiplicand;
        }, 1);
        var round = createRound("round");
        var subtract = createMathOperation(function(minuend, subtrahend) {
          return minuend - subtrahend;
        }, 0);
        function sum(array) {
          return array && array.length ? baseSum(array, identity) : 0;
        }
        function sumBy(array, iteratee2) {
          return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
        }
        lodash2.after = after;
        lodash2.ary = ary;
        lodash2.assign = assign;
        lodash2.assignIn = assignIn;
        lodash2.assignInWith = assignInWith;
        lodash2.assignWith = assignWith;
        lodash2.at = at;
        lodash2.before = before;
        lodash2.bind = bind;
        lodash2.bindAll = bindAll;
        lodash2.bindKey = bindKey;
        lodash2.castArray = castArray;
        lodash2.chain = chain;
        lodash2.chunk = chunk;
        lodash2.compact = compact;
        lodash2.concat = concat;
        lodash2.cond = cond;
        lodash2.conforms = conforms;
        lodash2.constant = constant;
        lodash2.countBy = countBy;
        lodash2.create = create;
        lodash2.curry = curry;
        lodash2.curryRight = curryRight;
        lodash2.debounce = debounce;
        lodash2.defaults = defaults;
        lodash2.defaultsDeep = defaultsDeep;
        lodash2.defer = defer;
        lodash2.delay = delay;
        lodash2.difference = difference;
        lodash2.differenceBy = differenceBy;
        lodash2.differenceWith = differenceWith;
        lodash2.drop = drop;
        lodash2.dropRight = dropRight;
        lodash2.dropRightWhile = dropRightWhile;
        lodash2.dropWhile = dropWhile;
        lodash2.fill = fill;
        lodash2.filter = filter;
        lodash2.flatMap = flatMap;
        lodash2.flatMapDeep = flatMapDeep;
        lodash2.flatMapDepth = flatMapDepth;
        lodash2.flatten = flatten;
        lodash2.flattenDeep = flattenDeep;
        lodash2.flattenDepth = flattenDepth;
        lodash2.flip = flip;
        lodash2.flow = flow;
        lodash2.flowRight = flowRight;
        lodash2.fromPairs = fromPairs;
        lodash2.functions = functions;
        lodash2.functionsIn = functionsIn;
        lodash2.groupBy = groupBy;
        lodash2.initial = initial;
        lodash2.intersection = intersection;
        lodash2.intersectionBy = intersectionBy;
        lodash2.intersectionWith = intersectionWith;
        lodash2.invert = invert;
        lodash2.invertBy = invertBy;
        lodash2.invokeMap = invokeMap;
        lodash2.iteratee = iteratee;
        lodash2.keyBy = keyBy;
        lodash2.keys = keys;
        lodash2.keysIn = keysIn;
        lodash2.map = map;
        lodash2.mapKeys = mapKeys;
        lodash2.mapValues = mapValues;
        lodash2.matches = matches;
        lodash2.matchesProperty = matchesProperty;
        lodash2.memoize = memoize;
        lodash2.merge = merge;
        lodash2.mergeWith = mergeWith;
        lodash2.method = method;
        lodash2.methodOf = methodOf;
        lodash2.mixin = mixin;
        lodash2.negate = negate;
        lodash2.nthArg = nthArg;
        lodash2.omit = omit;
        lodash2.omitBy = omitBy;
        lodash2.once = once;
        lodash2.orderBy = orderBy;
        lodash2.over = over;
        lodash2.overArgs = overArgs;
        lodash2.overEvery = overEvery;
        lodash2.overSome = overSome;
        lodash2.partial = partial;
        lodash2.partialRight = partialRight;
        lodash2.partition = partition;
        lodash2.pick = pick;
        lodash2.pickBy = pickBy;
        lodash2.property = property;
        lodash2.propertyOf = propertyOf;
        lodash2.pull = pull;
        lodash2.pullAll = pullAll;
        lodash2.pullAllBy = pullAllBy;
        lodash2.pullAllWith = pullAllWith;
        lodash2.pullAt = pullAt;
        lodash2.range = range;
        lodash2.rangeRight = rangeRight;
        lodash2.rearg = rearg;
        lodash2.reject = reject;
        lodash2.remove = remove;
        lodash2.rest = rest;
        lodash2.reverse = reverse;
        lodash2.sampleSize = sampleSize;
        lodash2.set = set;
        lodash2.setWith = setWith;
        lodash2.shuffle = shuffle;
        lodash2.slice = slice;
        lodash2.sortBy = sortBy;
        lodash2.sortedUniq = sortedUniq;
        lodash2.sortedUniqBy = sortedUniqBy;
        lodash2.split = split;
        lodash2.spread = spread;
        lodash2.tail = tail;
        lodash2.take = take;
        lodash2.takeRight = takeRight;
        lodash2.takeRightWhile = takeRightWhile;
        lodash2.takeWhile = takeWhile;
        lodash2.tap = tap;
        lodash2.throttle = throttle;
        lodash2.thru = thru;
        lodash2.toArray = toArray;
        lodash2.toPairs = toPairs;
        lodash2.toPairsIn = toPairsIn;
        lodash2.toPath = toPath;
        lodash2.toPlainObject = toPlainObject;
        lodash2.transform = transform;
        lodash2.unary = unary;
        lodash2.union = union;
        lodash2.unionBy = unionBy;
        lodash2.unionWith = unionWith;
        lodash2.uniq = uniq;
        lodash2.uniqBy = uniqBy;
        lodash2.uniqWith = uniqWith;
        lodash2.unset = unset;
        lodash2.unzip = unzip;
        lodash2.unzipWith = unzipWith;
        lodash2.update = update;
        lodash2.updateWith = updateWith;
        lodash2.values = values;
        lodash2.valuesIn = valuesIn;
        lodash2.without = without;
        lodash2.words = words;
        lodash2.wrap = wrap;
        lodash2.xor = xor;
        lodash2.xorBy = xorBy;
        lodash2.xorWith = xorWith;
        lodash2.zip = zip;
        lodash2.zipObject = zipObject;
        lodash2.zipObjectDeep = zipObjectDeep;
        lodash2.zipWith = zipWith;
        lodash2.entries = toPairs;
        lodash2.entriesIn = toPairsIn;
        lodash2.extend = assignIn;
        lodash2.extendWith = assignInWith;
        mixin(lodash2, lodash2);
        lodash2.add = add;
        lodash2.attempt = attempt;
        lodash2.camelCase = camelCase;
        lodash2.capitalize = capitalize;
        lodash2.ceil = ceil;
        lodash2.clamp = clamp;
        lodash2.clone = clone;
        lodash2.cloneDeep = cloneDeep;
        lodash2.cloneDeepWith = cloneDeepWith;
        lodash2.cloneWith = cloneWith;
        lodash2.conformsTo = conformsTo;
        lodash2.deburr = deburr;
        lodash2.defaultTo = defaultTo;
        lodash2.divide = divide;
        lodash2.endsWith = endsWith;
        lodash2.eq = eq;
        lodash2.escape = escape;
        lodash2.escapeRegExp = escapeRegExp;
        lodash2.every = every;
        lodash2.find = find;
        lodash2.findIndex = findIndex;
        lodash2.findKey = findKey;
        lodash2.findLast = findLast;
        lodash2.findLastIndex = findLastIndex;
        lodash2.findLastKey = findLastKey;
        lodash2.floor = floor;
        lodash2.forEach = forEach;
        lodash2.forEachRight = forEachRight;
        lodash2.forIn = forIn;
        lodash2.forInRight = forInRight;
        lodash2.forOwn = forOwn;
        lodash2.forOwnRight = forOwnRight;
        lodash2.get = get;
        lodash2.gt = gt;
        lodash2.gte = gte;
        lodash2.has = has;
        lodash2.hasIn = hasIn;
        lodash2.head = head;
        lodash2.identity = identity;
        lodash2.includes = includes;
        lodash2.indexOf = indexOf;
        lodash2.inRange = inRange;
        lodash2.invoke = invoke;
        lodash2.isArguments = isArguments;
        lodash2.isArray = isArray;
        lodash2.isArrayBuffer = isArrayBuffer;
        lodash2.isArrayLike = isArrayLike;
        lodash2.isArrayLikeObject = isArrayLikeObject;
        lodash2.isBoolean = isBoolean;
        lodash2.isBuffer = isBuffer;
        lodash2.isDate = isDate;
        lodash2.isElement = isElement;
        lodash2.isEmpty = isEmpty;
        lodash2.isEqual = isEqual;
        lodash2.isEqualWith = isEqualWith;
        lodash2.isError = isError;
        lodash2.isFinite = isFinite;
        lodash2.isFunction = isFunction;
        lodash2.isInteger = isInteger;
        lodash2.isLength = isLength;
        lodash2.isMap = isMap;
        lodash2.isMatch = isMatch;
        lodash2.isMatchWith = isMatchWith;
        lodash2.isNaN = isNaN;
        lodash2.isNative = isNative;
        lodash2.isNil = isNil;
        lodash2.isNull = isNull;
        lodash2.isNumber = isNumber;
        lodash2.isObject = isObject;
        lodash2.isObjectLike = isObjectLike;
        lodash2.isPlainObject = isPlainObject;
        lodash2.isRegExp = isRegExp;
        lodash2.isSafeInteger = isSafeInteger;
        lodash2.isSet = isSet;
        lodash2.isString = isString;
        lodash2.isSymbol = isSymbol;
        lodash2.isTypedArray = isTypedArray;
        lodash2.isUndefined = isUndefined;
        lodash2.isWeakMap = isWeakMap;
        lodash2.isWeakSet = isWeakSet;
        lodash2.join = join;
        lodash2.kebabCase = kebabCase;
        lodash2.last = last;
        lodash2.lastIndexOf = lastIndexOf;
        lodash2.lowerCase = lowerCase;
        lodash2.lowerFirst = lowerFirst;
        lodash2.lt = lt;
        lodash2.lte = lte;
        lodash2.max = max;
        lodash2.maxBy = maxBy;
        lodash2.mean = mean;
        lodash2.meanBy = meanBy;
        lodash2.min = min;
        lodash2.minBy = minBy;
        lodash2.stubArray = stubArray;
        lodash2.stubFalse = stubFalse;
        lodash2.stubObject = stubObject;
        lodash2.stubString = stubString;
        lodash2.stubTrue = stubTrue;
        lodash2.multiply = multiply;
        lodash2.nth = nth;
        lodash2.noConflict = noConflict;
        lodash2.noop = noop;
        lodash2.now = now;
        lodash2.pad = pad;
        lodash2.padEnd = padEnd;
        lodash2.padStart = padStart;
        lodash2.parseInt = parseInt2;
        lodash2.random = random;
        lodash2.reduce = reduce;
        lodash2.reduceRight = reduceRight;
        lodash2.repeat = repeat;
        lodash2.replace = replace;
        lodash2.result = result;
        lodash2.round = round;
        lodash2.runInContext = runInContext2;
        lodash2.sample = sample;
        lodash2.size = size;
        lodash2.snakeCase = snakeCase;
        lodash2.some = some;
        lodash2.sortedIndex = sortedIndex;
        lodash2.sortedIndexBy = sortedIndexBy;
        lodash2.sortedIndexOf = sortedIndexOf;
        lodash2.sortedLastIndex = sortedLastIndex;
        lodash2.sortedLastIndexBy = sortedLastIndexBy;
        lodash2.sortedLastIndexOf = sortedLastIndexOf;
        lodash2.startCase = startCase;
        lodash2.startsWith = startsWith;
        lodash2.subtract = subtract;
        lodash2.sum = sum;
        lodash2.sumBy = sumBy;
        lodash2.template = template;
        lodash2.times = times;
        lodash2.toFinite = toFinite;
        lodash2.toInteger = toInteger;
        lodash2.toLength = toLength;
        lodash2.toLower = toLower;
        lodash2.toNumber = toNumber;
        lodash2.toSafeInteger = toSafeInteger;
        lodash2.toString = toString;
        lodash2.toUpper = toUpper;
        lodash2.trim = trim;
        lodash2.trimEnd = trimEnd;
        lodash2.trimStart = trimStart;
        lodash2.truncate = truncate;
        lodash2.unescape = unescape;
        lodash2.uniqueId = uniqueId;
        lodash2.upperCase = upperCase;
        lodash2.upperFirst = upperFirst;
        lodash2.each = forEach;
        lodash2.eachRight = forEachRight;
        lodash2.first = head;
        mixin(lodash2, function() {
          var source = {};
          baseForOwn(lodash2, function(func, methodName) {
            if (!hasOwnProperty.call(lodash2.prototype, methodName)) {
              source[methodName] = func;
            }
          });
          return source;
        }(), { "chain": false });
        lodash2.VERSION = VERSION;
        arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
          lodash2[methodName].placeholder = lodash2;
        });
        arrayEach(["drop", "take"], function(methodName, index) {
          LazyWrapper.prototype[methodName] = function(n) {
            n = n === undefined$1 ? 1 : nativeMax(toInteger(n), 0);
            var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
            if (result2.__filtered__) {
              result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
            } else {
              result2.__views__.push({
                "size": nativeMin(n, MAX_ARRAY_LENGTH),
                "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
              });
            }
            return result2;
          };
          LazyWrapper.prototype[methodName + "Right"] = function(n) {
            return this.reverse()[methodName](n).reverse();
          };
        });
        arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
          var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
          LazyWrapper.prototype[methodName] = function(iteratee2) {
            var result2 = this.clone();
            result2.__iteratees__.push({
              "iteratee": getIteratee(iteratee2, 3),
              "type": type
            });
            result2.__filtered__ = result2.__filtered__ || isFilter;
            return result2;
          };
        });
        arrayEach(["head", "last"], function(methodName, index) {
          var takeName = "take" + (index ? "Right" : "");
          LazyWrapper.prototype[methodName] = function() {
            return this[takeName](1).value()[0];
          };
        });
        arrayEach(["initial", "tail"], function(methodName, index) {
          var dropName = "drop" + (index ? "" : "Right");
          LazyWrapper.prototype[methodName] = function() {
            return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
          };
        });
        LazyWrapper.prototype.compact = function() {
          return this.filter(identity);
        };
        LazyWrapper.prototype.find = function(predicate) {
          return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function(predicate) {
          return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
          if (typeof path == "function") {
            return new LazyWrapper(this);
          }
          return this.map(function(value) {
            return baseInvoke(value, path, args);
          });
        });
        LazyWrapper.prototype.reject = function(predicate) {
          return this.filter(negate(getIteratee(predicate)));
        };
        LazyWrapper.prototype.slice = function(start, end) {
          start = toInteger(start);
          var result2 = this;
          if (result2.__filtered__ && (start > 0 || end < 0)) {
            return new LazyWrapper(result2);
          }
          if (start < 0) {
            result2 = result2.takeRight(-start);
          } else if (start) {
            result2 = result2.drop(start);
          }
          if (end !== undefined$1) {
            end = toInteger(end);
            result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
          }
          return result2;
        };
        LazyWrapper.prototype.takeRightWhile = function(predicate) {
          return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function() {
          return this.take(MAX_ARRAY_LENGTH);
        };
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash2[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
          if (!lodashFunc) {
            return;
          }
          lodash2.prototype[methodName] = function() {
            var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
            var interceptor = function(value2) {
              var result3 = lodashFunc.apply(lodash2, arrayPush([value2], args));
              return isTaker && chainAll ? result3[0] : result3;
            };
            if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
              isLazy = useLazy = false;
            }
            var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
            if (!retUnwrapped && useLazy) {
              value = onlyLazy ? value : new LazyWrapper(this);
              var result2 = func.apply(value, args);
              result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined$1 });
              return new LodashWrapper(result2, chainAll);
            }
            if (isUnwrapped && onlyLazy) {
              return func.apply(this, args);
            }
            result2 = this.thru(interceptor);
            return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
          };
        });
        arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
          var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
          lodash2.prototype[methodName] = function() {
            var args = arguments;
            if (retUnwrapped && !this.__chain__) {
              var value = this.value();
              return func.apply(isArray(value) ? value : [], args);
            }
            return this[chainName](function(value2) {
              return func.apply(isArray(value2) ? value2 : [], args);
            });
          };
        });
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var lodashFunc = lodash2[methodName];
          if (lodashFunc) {
            var key = lodashFunc.name + "";
            if (!hasOwnProperty.call(realNames, key)) {
              realNames[key] = [];
            }
            realNames[key].push({ "name": methodName, "func": lodashFunc });
          }
        });
        realNames[createHybrid(undefined$1, WRAP_BIND_KEY_FLAG).name] = [{
          "name": "wrapper",
          "func": undefined$1
        }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash2.prototype.at = wrapperAt;
        lodash2.prototype.chain = wrapperChain;
        lodash2.prototype.commit = wrapperCommit;
        lodash2.prototype.next = wrapperNext;
        lodash2.prototype.plant = wrapperPlant;
        lodash2.prototype.reverse = wrapperReverse;
        lodash2.prototype.toJSON = lodash2.prototype.valueOf = lodash2.prototype.value = wrapperValue;
        lodash2.prototype.first = lodash2.prototype.head;
        if (symIterator) {
          lodash2.prototype[symIterator] = wrapperToIterator;
        }
        return lodash2;
      };
      var _ = runInContext();
      if (freeModule) {
        (freeModule.exports = _)._ = _;
        freeExports._ = _;
      } else {
        root._ = _;
      }
    }).call(commonjsGlobal);
  })(lodash, lodashExports);
  /*! Bundled license information:

  lodash/lodash.js:
    (**
     * @license
     * Lodash <https://lodash.com/>
     * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
     * Released under MIT license <https://lodash.com/license>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     *)
  */

  async function autoPage(previewEl, pageList, panel, previewDataList) {
    if (previewDataList == null) {
      previewDataList = [{}];
    }
    const variable = {
      pageIndex: 0,
      pageSize: 0,
      nowDate: /* @__PURE__ */ new Date()
    };
    let offsetLastElementTop = 0;
    const fixedPreviewElementList = [];
    const previewElementList = [];
    let previewContext = {
      currentPreview: void 0,
      autoPageIs: false,
      previewData: {},
      panel,
      pageList: [],
      currentPage: void 0,
      top: 0,
      bottom: panel.height,
      // 单位 mm
      pagingRepetition: true
    };
    for (let myElement of previewContext.panel.elementList) {
      handleElement(myElement);
    }
    if (previewContext.panel.pageHeader) {
      handleElement(previewContext.panel.pageHeader);
    }
    if (previewContext.panel.pageFooter) {
      handleElement(previewContext.panel.pageFooter);
    }
    function handleElement(myElement) {
      const previewElement = elementUtil.element2PreviewWrapper(myElement);
      if (previewElement.previewWrapperList != null && previewElement.previewWrapperList.length > 0) {
        for (let i = previewElement.previewWrapperList.length - 1; i >= 0; i--) {
          const pageNumPreviewElement = previewElement.previewWrapperList[i];
          if (pageNumPreviewElement.option.fixed) {
            pageNumPreviewElement.x = pageNumPreviewElement.x + previewElement.x;
            pageNumPreviewElement.y = pageNumPreviewElement.y + previewElement.y;
            fixedPreviewElementList.push(pageNumPreviewElement);
            previewElement.previewWrapperList.splice(i, 1);
          }
        }
      }
      if (previewElement.option.fixed) {
        fixedPreviewElementList.push(previewElement);
      } else {
        previewElementList.push(previewElement);
      }
    }
    previewElementList.sort((o1, o2) => {
      return o1.y - o2.y;
    });
    for (let previewWrapper of previewElementList) {
      previewWrapper.offsetLastElementTop = numberUtil.subScale(previewWrapper.y, offsetLastElementTop);
      offsetLastElementTop = numberUtil.sumScale(previewWrapper.y, previewWrapper.height);
    }
    for (let previewData of previewDataList) {
      previewContext.previewData = previewData;
      while (previewContext.pagingRepetition) {
        previewContext.pagingRepetition = false;
        previewContext.currentPreview = void 0;
        await newPage();
        await installPreviewElement(previewElementList);
      }
      previewContext.pagingRepetition = true;
    }
    previewContext.autoPageIs = false;
    variable.pageSize = pageList.length;
    for (let i = 0; i < pageList.length; i++) {
      previewContext.currentPage = pageList[i];
      variable.pageIndex = i + 1;
      await installPreviewElement(fixedPreviewElementList);
    }
    if (panel.pageSize == "AutoHeight") {
      await vue.nextTick();
      const lastElementChild = previewEl.value[0].lastElementChild;
      if (lastElementChild) {
        const rect = lastElementChild.getBoundingClientRect();
        pageList[0].height = devicePixelRatio.px2unit(rect.bottom, panel);
        panel.runtimeOption.printRealHeight = pageList[0].height;
      }
    }
    async function installPreviewElement(previewElementList2) {
      for (let i = 0; i < previewElementList2.length; i++) {
        const oldPreviewWrapper = previewElementList2[i];
        let previewWrapper = elementUtil.element2PreviewWrapper(previewElementList2[i]);
        if (!previewWrapper.option.fixed) {
          if (previewContext.currentPage.offsetTop > 0 && previewContext.currentPreview) {
            if (previewContext.currentPreview.heightIs) {
              previewWrapper.y = previewContext.currentPreview.y + previewContext.currentPreview.height + previewWrapper.offsetLastElementTop;
            } else {
              previewWrapper.y = numberUtil.sumScale(previewContext.currentPage.offsetTop, previewWrapper.offsetLastElementTop);
            }
          }
          if (previewWrapper.type != "PageFooter" && previewContext.currentPage.previewWrapperList.length > 0 && (await isNeedNewPage(previewWrapper.y, previewContext.bottom) || await isNeedNewPage(previewWrapper.y + previewWrapper.height, previewContext.bottom))) {
            previewWrapper.y = 1;
            previewContext.currentPage.offsetTop = 1;
          }
        }
        if (previewWrapper.option.fixed && previewWrapper.option.displayStrategy != void 0) {
          switch (previewWrapper.option.displayStrategy) {
            case "firstPage":
              if (variable.pageIndex != 1) {
                continue;
              }
              break;
            case "lastPage":
              if (variable.pageIndex != variable.pageSize) {
                continue;
              }
              break;
            case "none":
              continue;
            case "oddPage":
              if (variable.pageIndex % 2 != 1) {
                continue;
              }
              break;
            case "evenPage":
              if (variable.pageIndex % 2 != 0) {
                continue;
              }
              break;
          }
        }
        previewContext.currentPreview = previewWrapper;
        let previewDataTmp;
        if (previewWrapper.field) {
          previewDataTmp = previewContext.previewData[previewWrapper.field];
        }
        if (!previewDataTmp) {
          previewDataTmp = elementUtil.formatter(previewWrapper, variable);
        }
        if (!previewDataTmp) {
          previewDataTmp = previewWrapper.data;
        }
        if (previewWrapper.type == "Image") {
          previewWrapper.data = previewDataTmp;
          if (!lodashExports.isEmpty(previewWrapper.data) && previewWrapper.data.startsWith("http")) {
            try {
              previewWrapper.data = await utils.downloadImg2Base64(previewWrapper.data);
            } catch (e) {
              previewWrapper.data = "\u56FE\u7247\u52A0\u8F7D\u9519\u8BEF";
            }
          }
          previewContext.currentPage.previewWrapperList.push(previewWrapper);
          await vue.nextTick();
        } else if (previewWrapper.type == "Text" || previewWrapper.type == "PageNum" || previewWrapper.type == "TextTime") {
          if (previewWrapper.type == "PageNum") {
            previewWrapper = elementUtil.element2PreviewWrapper(previewWrapper);
            previewContext.currentPreview = previewWrapper;
            previewElementList2[i] = previewWrapper;
          }
          if (previewWrapper.contentType == "Text") {
            if (previewDataTmp) {
              previewDataTmp = utils.replaceSpacesOutsideHTMLTags(previewDataTmp);
            }
            await autoTextElement(previewDataTmp, true);
          }
          previewWrapper.data = previewDataTmp;
          if (previewWrapper.contentType == "QrCode") {
            previewContext.currentPage.previewWrapperList.push(previewWrapper);
            await vue.nextTick();
          }
          if (previewWrapper.contentType == "Barcode") {
            previewContext.currentPage.previewWrapperList.push(previewWrapper);
            await vue.nextTick();
          }
        } else if (previewWrapper.type == "DataTable") {
          let tableRowIndex = 0;
          await autoTableRow(previewContext, previewDataTmp, tableRowIndex);
        } else if (previewWrapper.type == "Container") {
          previewContext.currentPage.previewWrapperList.push(previewWrapper);
          const tmpPage = previewContext.currentPage;
          previewContext.currentPage = previewWrapper;
          previewWrapper.previewWrapperList = [];
          await installPreviewElement(oldPreviewWrapper.previewWrapperList);
          previewContext.currentPage = tmpPage;
        } else if (previewWrapper.type == "PageHeader") {
          previewContext.currentPage.previewWrapperList.push(previewWrapper);
          const tmpPage = previewContext.currentPage;
          previewContext.currentPage = previewWrapper;
          previewWrapper.previewWrapperList = [];
          await installPreviewElement(oldPreviewWrapper.previewWrapperList);
          previewContext.currentPage = tmpPage;
        } else if (previewWrapper.type == "PageFooter") {
          previewContext.currentPage.previewWrapperList.push(previewWrapper);
          const tmpPage = previewContext.currentPage;
          previewContext.currentPage = previewWrapper;
          previewWrapper.previewWrapperList = [];
          await installPreviewElement(oldPreviewWrapper.previewWrapperList);
          previewContext.currentPage = tmpPage;
        } else {
          previewContext.currentPage.previewWrapperList.push(previewWrapper);
        }
        if (!previewContext.currentPreview.heightIs) {
          previewContext.currentPage.offsetTop = await computeBottom(previewContext.currentPreview);
        }
        previewContext.currentPreview = previewWrapper;
      }
    }
    async function autoTextElement(previewData, first) {
      let previewWrapper = previewContext.currentPreview;
      previewWrapper.data = previewData;
      previewWrapper.heightIs = false;
      previewContext.currentPage.previewWrapperList.push(previewWrapper);
      await vue.nextTick();
      const height = previewWrapper.target.clientHeight;
      if (previewWrapper.option.autoTextHeight == null || !previewWrapper.option.autoTextHeight) {
        previewWrapper.heightIs = true;
        return false;
      }
      if (first && height < previewWrapper.runtimeOption.height) {
        previewWrapper.heightIs = true;
        return false;
      }
      if (previewWrapper.y + devicePixelRatio.px2unit(height, panel) < previewContext.bottom) {
        return false;
      }
      let mid = await binary_search(previewWrapper, previewData, 1, previewData.length);
      if (mid > 0 && mid < previewData.length) {
        if (previewContext.autoPageIs) {
          await newPage();
          previewContext.currentPreview = elementUtil.element2PreviewWrapper(previewWrapper);
          previewContext.currentPreview.y = previewContext.top;
          await autoTextElement(previewData.substring(mid + 1, previewData.length), false);
          return true;
        }
      }
      return false;
    }
    async function autoTableRow(previewContext2, previewDataList2, index) {
      if (previewDataList2 == null) {
        previewDataList2 = [];
      }
      let previewWrapper = previewContext2.currentPreview;
      if (previewWrapper.option.tableHeightType == "AUTO") {
        previewWrapper.heightIs = false;
      }
      previewContext2.currentPage.previewWrapperList.push(previewWrapper);
      await vue.nextTick();
      const table = previewWrapper.target;
      if (!table) {
        return false;
      }
      const tableHeadList = [...previewWrapper.tableHeadList];
      const headList = dataTable.lastHeadList(tableHeadList);
      const bodyList = previewWrapper.tableBodyList[0];
      if (previewWrapper.statisticsList == null) {
        previewWrapper.statisticsList = [];
      }
      const tableStatisticsList = [...previewWrapper.statisticsList];
      const tableStatisticsSize = tableStatisticsList.length;
      let statisticsListWrapper = {};
      let tableStaticsListWrapper = {};
      if (previewWrapper.tableHeadHiddenIs) {
        previewWrapper.tableHeadList.length = 0;
        for (let j = 0; j < bodyList.length; j++) {
          bodyList[j].runtimeOption.width = headList[j].runtimeOption.width;
        }
      }
      previewWrapper.tableBodyList.length = 0;
      previewWrapper.statisticsList.length = 0;
      if (index < previewDataList2.length) {
        dataTable.previewTableStatisticsList(tableStatisticsList, previewWrapper.statisticsList, statisticsListWrapper, headList);
      }
      const previewDataTmpList = [];
      let i = index;
      for (; i < previewDataList2.length + tableStatisticsSize; i++) {
        const rowList = [];
        if (i < previewDataList2.length) {
          const previewData = previewDataList2[i];
          previewDataTmpList.push(previewData);
          if (!previewData["autoIncrement"]) {
            previewData["autoIncrement"] = i + 1;
          }
          for (let j = 0; j < headList.length; j++) {
            const head = headList[j];
            bodyList[j].data = previewData[head.field];
            rowList.push(elementUtil.element2PreviewWrapper(bodyList[j]));
          }
          previewWrapper.tableBodyList.push(rowList);
        } else {
          const tableStatisticsIndex = i - previewDataList2.length;
          const rowList2 = [...tableStatisticsList[tableStatisticsIndex]];
          let hasCell = dataTable.previewRowStatisticsList(rowList2, tableStaticsListWrapper, headList, "tableStatisticsIs");
          if (hasCell) {
            previewWrapper.statisticsList.push(rowList2);
          }
        }
        await vue.nextTick();
        if (previewWrapper.option.tableHeightType == "FIXED") {
          if (table.childNodes[1].clientHeight > devicePixelRatio.unit2px(previewWrapper.height, panel)) {
            if (i == index) {
              previewWrapper.previewTableRowIndex = i + 1;
              previewContext2.pagingRepetition = true;
            } else {
              previewWrapper.tableBodyList.pop();
              previewDataTmpList.pop();
              previewWrapper.previewTableRowIndex = i;
              previewContext2.pagingRepetition = true;
            }
            dataTable.statisticsData(previewDataTmpList, statisticsListWrapper);
            if (i >= previewDataList2.length) {
              dataTable.statisticsData(previewDataList2, tableStaticsListWrapper);
            }
            previewDataTmpList.pop();
            break;
          }
        }
        if (await isNeedNewPage(devicePixelRatio.unit2px(previewWrapper.y, panel) + table.clientHeight, devicePixelRatio.unit2px(previewContext2.bottom, panel))) {
          previewWrapper.tableBodyList.pop();
          previewDataTmpList.pop();
          dataTable.statisticsData(previewDataTmpList, statisticsListWrapper);
          previewContext2.currentPreview = elementUtil.element2PreviewWrapper(previewWrapper);
          previewWrapper = previewContext2.currentPreview;
          if (!previewWrapper.option.tablePageHeadIs) {
            previewWrapper.tableHeadHiddenIs = true;
          }
          previewWrapper.tableHeadList = [...tableHeadList];
          previewWrapper.statisticsList = [...tableStatisticsList];
          previewWrapper.runtimeOption = utils.parse(utils.stringify(previewWrapper.runtimeOption, "parent"), {});
          previewWrapper.tableBodyList = [bodyList];
          previewWrapper.y = previewContext2.top + 1;
          await autoTableRow(previewContext2, previewDataList2, i);
          break;
        }
      }
      if (i >= previewDataList2.length) {
        dataTable.statisticsData(previewDataTmpList, statisticsListWrapper);
      }
      dataTable.statisticsData(previewDataList2, tableStaticsListWrapper);
    }
    async function isNeedNewPage(y, bottom, callback) {
      if (!previewContext.autoPageIs) {
        return false;
      }
      if (previewContext.panel.pageSize == "AutoHeight") {
        return false;
      }
      if (y > bottom + 1) {
        if (callback) {
          callback();
        }
        await newPage();
        return true;
      }
      return false;
    }
    async function newPage() {
      previewContext.currentPage = vue.reactive({
        id: utils.generateUUID(),
        width: previewContext.panel.width,
        height: previewContext.panel.height,
        offsetTop: 0,
        previewWrapperList: []
      });
      previewContext.pageList.push(previewContext.currentPage);
      previewContext.autoPageIs = true;
      pageList.push(previewContext.currentPage);
      await vue.nextTick();
      if (previewContext.panel.pageHeader) {
        let preview = previewContext.panel.pageHeader;
        previewContext.currentPage.previewWrapperList.push(preview);
        previewContext.top = await computeBottom(preview);
      }
      if (previewContext.panel.pageFooter) {
        let preview = previewContext.panel.pageFooter;
        previewContext.currentPage.previewWrapperList.push(preview);
        previewContext.bottom = await computeTop(preview);
      }
    }
    async function computeBottom(previewWrapper) {
      await vue.nextTick();
      if (!previewWrapper.target) {
        return;
      }
      const div = previewWrapper.target;
      return numberUtil.toFixed(devicePixelRatio.px2unit(numberUtil.sumScale(div.offsetTop, div.offsetHeight), panel));
    }
    async function computeTop(previewWrapper) {
      await vue.nextTick();
      if (!previewWrapper.target) {
        return;
      }
      const div = previewWrapper.target;
      return numberUtil.toFixed(devicePixelRatio.px2unit(div.offsetTop, panel));
    }
    async function computeTextHeight(previewWrapper, previewDataTmp) {
      previewWrapper.data = previewDataTmp;
      await vue.nextTick();
      const itemRef = previewWrapper.target;
      if (!itemRef) {
        return;
      }
      const height = previewWrapper.target.clientHeight;
      return previewWrapper.y + devicePixelRatio.px2unit(height, panel) < previewContext.bottom;
    }
    async function binary_search(previewWrapper, previewData, low, height) {
      if (low > height) {
        return -1;
      }
      const mid = Math.floor((height + low) / 2);
      let isH = await computeTextHeight(previewWrapper, previewData.substring(0, mid + 2));
      let isL = await computeTextHeight(previewWrapper, previewData.substring(0, mid + 1));
      if (isL && !isH) {
        return mid;
      } else if (!isH) {
        height = mid - 1;
        return binary_search(previewWrapper, previewData, low, height);
      } else if (isL) {
        low = mid + 1;
        return binary_search(previewWrapper, previewData, low, height);
      } else {
        return -1;
      }
    }
  }

  const _hoisted_1 = { class: "preview-panel" };
  const _hoisted_2 = { class: "my-print-preview-panel__wrap" };
  const _hoisted_3 = { class: "preview-panel__model" };
  const _hoisted_4 = { class: "my-print-preview-panel__content" };
  const _hoisted_5 = { class: "preview-panel__tool display-flex-column display-flex-wrap" };
  const _hoisted_6 = { key: 1 };
  var _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "preview-panel",
    setup(__props, { expose: __expose }) {
      __expose({ handleChromePreview });
      const configStore = config.useConfigStore();
      const data = vue.reactive({
        dialogVisible: false,
        printer: configStore.defaultPrinter,
        pageList: [],
        resolveMap: {},
        previewTimeOutMap: {},
        taskId: null
      });
      const previewContentRef = vue.ref();
      const panel = vue.ref({});
      let itemRefs = {};
      const printList = vue.computed(() => {
        return printer.MyPrinter.getPrinterList().map((res) => {
          return {
            label: res.name,
            value: res.name
          };
        });
      });
      function print() {
        myprintClientService.myPrintClientService.print({
          options: {
            title: panel.value ? panel.value.name : void 0,
            html: myprint.getPrintElementHtml(previewContentRef.value, []),
            printer: data.printer
          },
          cmd: "print",
          taskId: data.taskId
        }, panel.value).then((res) => {
          myprintClientService.handleClientResult(res, myprintClientService.printResult, data.previewTimeOutMap, data.resolveMap);
        }).catch((e) => {
          myprintClientService.printResult(data.taskId, {
            status: "ERROR",
            msg: e.msg,
            type: "CLIENT_PRINT"
          }, data.previewTimeOutMap, data.resolveMap);
        });
      }
      function downloadPdf() {
        if (printer.MyPrinter.clientConnectIs()) {
          myprintClientService.myPrintClientService.print({
            options: { html: myprint.getPrintElementHtml(previewContentRef.value, []) },
            cmd: "generatePdf",
            taskId: data.taskId
          }, panel.value).then((res) => {
            const blob = myprintClientService.handleClientResult(res, myprintClientService.printResult, data.previewTimeOutMap, data.resolveMap);
            if (blob) {
              utils.download(blob, panel.value.name + ".pdf");
            }
          }).catch((e) => {
            myprintClientService.printResult(data.taskId, {
              status: "ERROR",
              msg: e.msg,
              type: "CLIENT_GENERATE_PDF"
            }, data.previewTimeOutMap, data.resolveMap);
          });
        } else {
          pdfUtil.toPdf(previewContentRef.value, {
            width: devicePixelRatio.unit2px(panel.value.width, panel.value),
            height: devicePixelRatio.unit2px(panel.value.height, panel.value)
          }).then((blob) => {
            utils.download(blob, panel.value.name + ".pdf");
            myprintClientService.printResult(data.taskId, {
              status: "SUCCESS",
              msg: "",
              type: "CHROME_GENERATE_PDF"
            }, data.previewTimeOutMap, data.resolveMap);
          }).catch((e) => {
            myprintClientService.printResult(data.taskId, {
              status: "ERROR",
              msg: e.msg,
              type: "CHROME_GENERATE_PDF"
            }, data.previewTimeOutMap, data.resolveMap);
          });
        }
      }
      function printChromePdf() {
        myprint.iFramePrint(panel.value, myprint.getPrintElementHtml(previewContentRef.value, []));
        myprintClientService.printResult(data.taskId, {
          status: "SUCCESS",
          type: "CHROME_PRINT"
        }, data.previewTimeOutMap, data.resolveMap);
      }
      function setItemRef(el, item) {
        itemRefs[item.id] = el;
      }
      function handleChromePreview(printProps) {
        data.dialogVisible = true;
        panel.value = printProps.panel;
        data.taskId = printProps.taskId;
        myprintClientService.handleTimeOut(printProps, data.previewTimeOutMap, data.resolveMap);
        return new Promise((resolve, _reject) => {
          data.resolveMap[printProps.taskId] = resolve;
          autoPage(previewContentRef, data.pageList, panel.value, printProps.previewDataList);
        });
      }
      function closePreviewPanel() {
        data.pageList = [];
        myprintClientService.printResult(data.taskId, {
          status: "CLOSE",
          type: "CLOSE"
        }, data.previewTimeOutMap, data.resolveMap);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(MyDialog, {
          modelValue: vue.unref(data).dialogVisible,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vue.unref(data).dialogVisible = $event),
          class: "preview-dialog",
          fullscreen: "",
          showHeader: false,
          onClose: closePreviewPanel
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("div", _hoisted_1, [
              vue.createVNode(MyScrollbar, {
                height: "100%",
                class: "preview-panel__scrollbar",
                style: vue.normalizeStyle({ minWidth: vue.unref(elementUtil.valueUnit)(vue.unref(panel).width, vue.unref(panel)) })
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("div", _hoisted_2, [
                    vue.createElementVNode("div", _hoisted_3, [
                      vue.createElementVNode("div", _hoisted_4, [
                        (vue.openBlock(true), vue.createElementBlock(
                          vue.Fragment,
                          null,
                          vue.renderList(vue.unref(data).pageList, (page, index) => {
                            return vue.openBlock(), vue.createElementBlock(
                              "div",
                              {
                                ref_for: true,
                                ref_key: "previewContentRef",
                                ref: previewContentRef,
                                key: index,
                                class: "my-print-preview-panel__content_page preview-page-top",
                                style: vue.normalizeStyle({
                                  width: vue.unref(elementUtil.valueUnit)(page.width, vue.unref(panel)),
                                  minHeight: vue.unref(elementUtil.valueUnit)(page.height, vue.unref(panel))
                                })
                              },
                              [
                                (vue.openBlock(true), vue.createElementBlock(
                                  vue.Fragment,
                                  null,
                                  vue.renderList(page.previewWrapperList, (element, index2) => {
                                    return vue.openBlock(), vue.createBlock(Preview, {
                                      ref_for: true,
                                      ref: (el) => setItemRef(el, element),
                                      key: index2,
                                      preview: element
                                    }, null, 8, ["preview"]);
                                  }),
                                  128
                                  /* KEYED_FRAGMENT */
                                ))
                              ],
                              4
                              /* STYLE */
                            );
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ])
                    ])
                  ])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["style"]),
              vue.createElementVNode("div", _hoisted_5, [
                vue.createElementVNode(
                  "div",
                  null,
                  "\u540D\u79F0\uFF1A" + vue.toDisplayString(vue.unref(panel).name),
                  1
                  /* TEXT */
                ),
                vue.createCommentVNode("                <div>\u6253\u5370\u4EFD\u6570\uFF1A\u6D4B\u8BD5</div>"),
                vue.unref(printer.MyPrinter).clientConnectIs() ? (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  { key: 0 },
                  [
                    vue.createElementVNode("div", null, [
                      vue.createTextVNode(
                        vue.toDisplayString(vue.unref(locales.i18n)("toolbar.printer")) + "\uFF1A ",
                        1
                        /* TEXT */
                      ),
                      vue.createVNode(MySelect, {
                        modelValue: vue.unref(data).printer,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(data).printer = $event),
                        placeholder: "\u8BF7\u9009\u62E9",
                        size: "middle",
                        "data-list": vue.unref(printList)
                      }, null, 8, ["modelValue", "data-list"])
                    ]),
                    vue.createVNode(MyButton, {
                      style: { "margin-top": "40px" },
                      disabled: !vue.unref(data).printer,
                      onClick: print
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(
                          vue.toDisplayString(vue.unref(locales.i18n)("toolbar.print")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["disabled"])
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_6, "\u5BA2\u6237\u7AEF\u672A\u8FDE\u63A5\uFF0C\u65E0\u6CD5\u4F7F\u7528\u76F4\u63A5\u6253\u5370\u529F\u80FD\uFF0C\u53BB\u4E0B\u8F7D")),
                vue.createVNode(MyButton, {
                  class: "preview-panel__tool_button",
                  onClick: printChromePdf
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(
                      vue.toDisplayString(vue.unref(locales.i18n)("toolbar.chrome.print")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }),
                vue.createVNode(MyButton, {
                  class: "preview-panel__tool_button",
                  onClick: downloadPdf
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(
                      vue.toDisplayString(vue.unref(locales.i18n)("preview.download.pdf")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }),
                vue.createVNode(MyButton, {
                  class: "preview-panel__tool_button",
                  onClick: _cache[1] || (_cache[1] = () => vue.unref(data).dialogVisible = false)
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(
                      vue.toDisplayString(vue.unref(locales.i18n)("common.close")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]);
      };
    }
  });

  var previewPanelView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "preview-panel.vue"]]);

  /*!
    * shared v9.14.5
    * (c) 2025 kazuya kawaguchi
    * Released under the MIT License.
    */
  function warn(msg, err) {
      if (typeof console !== 'undefined') {
          console.warn(`[intlify] ` + msg);
          /* istanbul ignore if */
          if (err) {
              console.warn(err.stack);
          }
      }
  }

  /**
   * Original Utilities
   * written by kazuya kawaguchi
   */
  const inBrowser = typeof window !== 'undefined';
  const makeSymbol = (name, shareable = false) => !shareable ? Symbol(name) : Symbol.for(name);
  const generateFormatCacheKey = (locale, key, source) => friendlyJSONstringify({ l: locale, k: key, s: source });
  const friendlyJSONstringify = (json) => JSON.stringify(json)
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029')
      .replace(/\u0027/g, '\\u0027');
  const isNumber = (val) => typeof val === 'number' && isFinite(val);
  const isDate = (val) => toTypeString(val) === '[object Date]';
  const isRegExp = (val) => toTypeString(val) === '[object RegExp]';
  const isEmptyObject = (val) => isPlainObject$3(val) && Object.keys(val).length === 0;
  const assign$2 = Object.assign;
  const _create = Object.create;
  const create = (obj = null) => _create(obj);
  let _globalThis;
  const getGlobalThis = () => {
      // prettier-ignore
      return (_globalThis ||
          (_globalThis =
              typeof globalThis !== 'undefined'
                  ? globalThis
                  : typeof self !== 'undefined'
                      ? self
                      : typeof window !== 'undefined'
                          ? window
                          : typeof global !== 'undefined'
                              ? global
                              : create()));
  };
  function escapeHtml(rawText) {
      return rawText
          .replace(/&/g, '&amp;') // escape `&` first to avoid double escaping
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&apos;')
          .replace(/\//g, '&#x2F;') // escape `/` to prevent closing tags or JavaScript URLs
          .replace(/=/g, '&#x3D;'); // escape `=` to prevent attribute injection
  }
  function escapeAttributeValue(value) {
      return value
          .replace(/&(?![a-zA-Z0-9#]{2,6};)/g, '&amp;') // escape unescaped `&`
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&apos;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
  }
  function sanitizeTranslatedHtml(html) {
      // Escape dangerous characters in attribute values
      // Process attributes with double quotes
      html = html.replace(/(\w+)\s*=\s*"([^"]*)"/g, (_, attrName, attrValue) => `${attrName}="${escapeAttributeValue(attrValue)}"`);
      // Process attributes with single quotes
      html = html.replace(/(\w+)\s*=\s*'([^']*)'/g, (_, attrName, attrValue) => `${attrName}='${escapeAttributeValue(attrValue)}'`);
      // Detect and neutralize event handler attributes
      const eventHandlerPattern = /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi;
      if (eventHandlerPattern.test(html)) {
          // Neutralize event handler attributes by escaping 'on'
          html = html.replace(/(\s+)(on)(\w+\s*=)/gi, '$1&#111;n$3');
      }
      // Disable javascript: URLs in various contexts
      const javascriptUrlPattern = [
          // In href, src, action, formaction attributes
          /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
          // In style attributes within url()
          /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
      ];
      javascriptUrlPattern.forEach(pattern => {
          html = html.replace(pattern, '$1javascript&#58;');
      });
      return html;
  }
  const hasOwnProperty$9 = Object.prototype.hasOwnProperty;
  function hasOwn(obj, key) {
      return hasOwnProperty$9.call(obj, key);
  }
  /* eslint-enable */
  /**
   * Useful Utilities By Evan you
   * Modified by kazuya kawaguchi
   * MIT License
   * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/index.ts
   * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/codeframe.ts
   */
  const isArray$1 = Array.isArray;
  const isFunction$1 = (val) => typeof val === 'function';
  const isString = (val) => typeof val === 'string';
  const isBoolean = (val) => typeof val === 'boolean';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isObject$4 = (val) => val !== null && typeof val === 'object';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isPromise = (val) => {
      return isObject$4(val) && isFunction$1(val.then) && isFunction$1(val.catch);
  };
  const objectToString$1 = Object.prototype.toString;
  const toTypeString = (value) => objectToString$1.call(value);
  const isPlainObject$3 = (val) => {
      if (!isObject$4(val))
          return false;
      const proto = Object.getPrototypeOf(val);
      return proto === null || proto.constructor === Object;
  };
  // for converting list and named values to displayed strings.
  const toDisplayString = (val) => {
      return val == null
          ? ''
          : isArray$1(val) || (isPlainObject$3(val) && val.toString === objectToString$1)
              ? JSON.stringify(val, null, 2)
              : String(val);
  };
  function join(items, separator = '') {
      return items.reduce((str, item, index) => (index === 0 ? str + item : str + separator + item), '');
  }
  function incrementer(code) {
      let current = code;
      return () => ++current;
  }

  /**
   * Event emitter, forked from the below:
   * - original repository url: https://github.com/developit/mitt
   * - code url: https://github.com/developit/mitt/blob/master/src/index.ts
   * - author: Jason Miller (https://github.com/developit)
   * - license: MIT
   */
  /**
   * Create a event emitter
   *
   * @returns An event emitter
   */
  function createEmitter() {
      const events = new Map();
      const emitter = {
          events,
          on(event, handler) {
              const handlers = events.get(event);
              const added = handlers && handlers.push(handler);
              if (!added) {
                  events.set(event, [handler]);
              }
          },
          off(event, handler) {
              const handlers = events.get(event);
              if (handlers) {
                  handlers.splice(handlers.indexOf(handler) >>> 0, 1);
              }
          },
          emit(event, payload) {
              (events.get(event) || [])
                  .slice()
                  .map(handler => handler(payload));
              (events.get('*') || [])
                  .slice()
                  .map(handler => handler(event, payload));
          }
      };
      return emitter;
  }

  const isNotObjectOrIsArray = (val) => !isObject$4(val) || isArray$1(val);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  function deepCopy(src, des) {
      // src and des should both be objects, and none of them can be a array
      if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
          throw new Error('Invalid value');
      }
      const stack = [{ src, des }];
      while (stack.length) {
          const { src, des } = stack.pop();
          // using `Object.keys` which skips prototype properties
          Object.keys(src).forEach(key => {
              if (key === '__proto__') {
                  return;
              }
              // if src[key] is an object/array, set des[key]
              // to empty object/array to prevent setting by reference
              if (isObject$4(src[key]) && !isObject$4(des[key])) {
                  des[key] = Array.isArray(src[key]) ? [] : create();
              }
              if (isNotObjectOrIsArray(des[key]) || isNotObjectOrIsArray(src[key])) {
                  // replace with src[key] when:
                  // src[key] or des[key] is not an object, or
                  // src[key] or des[key] is an array
                  des[key] = src[key];
              }
              else {
                  // src[key] and des[key] are both objects, merge them
                  stack.push({ src: src[key], des: des[key] });
              }
          });
      }
  }

  /*!
    * message-compiler v9.14.5
    * (c) 2025 kazuya kawaguchi
    * Released under the MIT License.
    */
  function createPosition(line, column, offset) {
      return { line, column, offset };
  }
  function createLocation(start, end, source) {
      const loc = { start, end };
      if (source != null) {
          loc.source = source;
      }
      return loc;
  }

  const CompileWarnCodes = {
      USE_MODULO_SYNTAX: 1,
      __EXTEND_POINT__: 2
  };
  function createCompileWarn(code, loc, ...args) {
      const msg = code;
      const message = { message: String(msg), code };
      if (loc) {
          message.location = loc;
      }
      return message;
  }

  const CompileErrorCodes = {
      // tokenizer error codes
      EXPECTED_TOKEN: 1,
      INVALID_TOKEN_IN_PLACEHOLDER: 2,
      UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
      UNKNOWN_ESCAPE_SEQUENCE: 4,
      INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
      UNBALANCED_CLOSING_BRACE: 6,
      UNTERMINATED_CLOSING_BRACE: 7,
      EMPTY_PLACEHOLDER: 8,
      NOT_ALLOW_NEST_PLACEHOLDER: 9,
      INVALID_LINKED_FORMAT: 10,
      // parser error codes
      MUST_HAVE_MESSAGES_IN_PLURAL: 11,
      UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
      UNEXPECTED_EMPTY_LINKED_KEY: 13,
      UNEXPECTED_LEXICAL_ANALYSIS: 14,
      // generator error codes
      UNHANDLED_CODEGEN_NODE_TYPE: 15,
      // minifier error codes
      UNHANDLED_MINIFIER_NODE_TYPE: 16,
      // Special value for higher-order compilers to pick up the last code
      // to avoid collision of error codes. This should always be kept as the last
      // item.
      __EXTEND_POINT__: 17
  };
  function createCompileError(code, loc, options = {}) {
      const { domain, messages, args } = options;
      const msg = code;
      const error = new SyntaxError(String(msg));
      error.code = code;
      if (loc) {
          error.location = loc;
      }
      error.domain = domain;
      return error;
  }
  /** @internal */
  function defaultOnError(error) {
      throw error;
  }

  const CHAR_SP = ' ';
  const CHAR_CR = '\r';
  const CHAR_LF = '\n';
  const CHAR_LS = String.fromCharCode(0x2028);
  const CHAR_PS = String.fromCharCode(0x2029);
  function createScanner(str) {
      const _buf = str;
      let _index = 0;
      let _line = 1;
      let _column = 1;
      let _peekOffset = 0;
      const isCRLF = (index) => _buf[index] === CHAR_CR && _buf[index + 1] === CHAR_LF;
      const isLF = (index) => _buf[index] === CHAR_LF;
      const isPS = (index) => _buf[index] === CHAR_PS;
      const isLS = (index) => _buf[index] === CHAR_LS;
      const isLineEnd = (index) => isCRLF(index) || isLF(index) || isPS(index) || isLS(index);
      const index = () => _index;
      const line = () => _line;
      const column = () => _column;
      const peekOffset = () => _peekOffset;
      const charAt = (offset) => isCRLF(offset) || isPS(offset) || isLS(offset) ? CHAR_LF : _buf[offset];
      const currentChar = () => charAt(_index);
      const currentPeek = () => charAt(_index + _peekOffset);
      function next() {
          _peekOffset = 0;
          if (isLineEnd(_index)) {
              _line++;
              _column = 0;
          }
          if (isCRLF(_index)) {
              _index++;
          }
          _index++;
          _column++;
          return _buf[_index];
      }
      function peek() {
          if (isCRLF(_index + _peekOffset)) {
              _peekOffset++;
          }
          _peekOffset++;
          return _buf[_index + _peekOffset];
      }
      function reset() {
          _index = 0;
          _line = 1;
          _column = 1;
          _peekOffset = 0;
      }
      function resetPeek(offset = 0) {
          _peekOffset = offset;
      }
      function skipToPeek() {
          const target = _index + _peekOffset;
          // eslint-disable-next-line no-unmodified-loop-condition
          while (target !== _index) {
              next();
          }
          _peekOffset = 0;
      }
      return {
          index,
          line,
          column,
          peekOffset,
          charAt,
          currentChar,
          currentPeek,
          next,
          peek,
          reset,
          resetPeek,
          skipToPeek
      };
  }

  const EOF = undefined;
  const DOT = '.';
  const LITERAL_DELIMITER = "'";
  const ERROR_DOMAIN$3 = 'tokenizer';
  function createTokenizer(source, options = {}) {
      const location = options.location !== false;
      const _scnr = createScanner(source);
      const currentOffset = () => _scnr.index();
      const currentPosition = () => createPosition(_scnr.line(), _scnr.column(), _scnr.index());
      const _initLoc = currentPosition();
      const _initOffset = currentOffset();
      const _context = {
          currentType: 14 /* TokenTypes.EOF */,
          offset: _initOffset,
          startLoc: _initLoc,
          endLoc: _initLoc,
          lastType: 14 /* TokenTypes.EOF */,
          lastOffset: _initOffset,
          lastStartLoc: _initLoc,
          lastEndLoc: _initLoc,
          braceNest: 0,
          inLinked: false,
          text: ''
      };
      const context = () => _context;
      const { onError } = options;
      function emitError(code, pos, offset, ...args) {
          const ctx = context();
          pos.column += offset;
          pos.offset += offset;
          if (onError) {
              const loc = location ? createLocation(ctx.startLoc, pos) : null;
              const err = createCompileError(code, loc, {
                  domain: ERROR_DOMAIN$3,
                  args
              });
              onError(err);
          }
      }
      function getToken(context, type, value) {
          context.endLoc = currentPosition();
          context.currentType = type;
          const token = { type };
          if (location) {
              token.loc = createLocation(context.startLoc, context.endLoc);
          }
          if (value != null) {
              token.value = value;
          }
          return token;
      }
      const getEndToken = (context) => getToken(context, 14 /* TokenTypes.EOF */);
      function eat(scnr, ch) {
          if (scnr.currentChar() === ch) {
              scnr.next();
              return ch;
          }
          else {
              emitError(CompileErrorCodes.EXPECTED_TOKEN, currentPosition(), 0, ch);
              return '';
          }
      }
      function peekSpaces(scnr) {
          let buf = '';
          while (scnr.currentPeek() === CHAR_SP || scnr.currentPeek() === CHAR_LF) {
              buf += scnr.currentPeek();
              scnr.peek();
          }
          return buf;
      }
      function skipSpaces(scnr) {
          const buf = peekSpaces(scnr);
          scnr.skipToPeek();
          return buf;
      }
      function isIdentifierStart(ch) {
          if (ch === EOF) {
              return false;
          }
          const cc = ch.charCodeAt(0);
          return ((cc >= 97 && cc <= 122) || // a-z
              (cc >= 65 && cc <= 90) || // A-Z
              cc === 95 // _
          );
      }
      function isNumberStart(ch) {
          if (ch === EOF) {
              return false;
          }
          const cc = ch.charCodeAt(0);
          return cc >= 48 && cc <= 57; // 0-9
      }
      function isNamedIdentifierStart(scnr, context) {
          const { currentType } = context;
          if (currentType !== 2 /* TokenTypes.BraceLeft */) {
              return false;
          }
          peekSpaces(scnr);
          const ret = isIdentifierStart(scnr.currentPeek());
          scnr.resetPeek();
          return ret;
      }
      function isListIdentifierStart(scnr, context) {
          const { currentType } = context;
          if (currentType !== 2 /* TokenTypes.BraceLeft */) {
              return false;
          }
          peekSpaces(scnr);
          const ch = scnr.currentPeek() === '-' ? scnr.peek() : scnr.currentPeek();
          const ret = isNumberStart(ch);
          scnr.resetPeek();
          return ret;
      }
      function isLiteralStart(scnr, context) {
          const { currentType } = context;
          if (currentType !== 2 /* TokenTypes.BraceLeft */) {
              return false;
          }
          peekSpaces(scnr);
          const ret = scnr.currentPeek() === LITERAL_DELIMITER;
          scnr.resetPeek();
          return ret;
      }
      function isLinkedDotStart(scnr, context) {
          const { currentType } = context;
          if (currentType !== 8 /* TokenTypes.LinkedAlias */) {
              return false;
          }
          peekSpaces(scnr);
          const ret = scnr.currentPeek() === "." /* TokenChars.LinkedDot */;
          scnr.resetPeek();
          return ret;
      }
      function isLinkedModifierStart(scnr, context) {
          const { currentType } = context;
          if (currentType !== 9 /* TokenTypes.LinkedDot */) {
              return false;
          }
          peekSpaces(scnr);
          const ret = isIdentifierStart(scnr.currentPeek());
          scnr.resetPeek();
          return ret;
      }
      function isLinkedDelimiterStart(scnr, context) {
          const { currentType } = context;
          if (!(currentType === 8 /* TokenTypes.LinkedAlias */ ||
              currentType === 12 /* TokenTypes.LinkedModifier */)) {
              return false;
          }
          peekSpaces(scnr);
          const ret = scnr.currentPeek() === ":" /* TokenChars.LinkedDelimiter */;
          scnr.resetPeek();
          return ret;
      }
      function isLinkedReferStart(scnr, context) {
          const { currentType } = context;
          if (currentType !== 10 /* TokenTypes.LinkedDelimiter */) {
              return false;
          }
          const fn = () => {
              const ch = scnr.currentPeek();
              if (ch === "{" /* TokenChars.BraceLeft */) {
                  return isIdentifierStart(scnr.peek());
              }
              else if (ch === "@" /* TokenChars.LinkedAlias */ ||
                  ch === "%" /* TokenChars.Modulo */ ||
                  ch === "|" /* TokenChars.Pipe */ ||
                  ch === ":" /* TokenChars.LinkedDelimiter */ ||
                  ch === "." /* TokenChars.LinkedDot */ ||
                  ch === CHAR_SP ||
                  !ch) {
                  return false;
              }
              else if (ch === CHAR_LF) {
                  scnr.peek();
                  return fn();
              }
              else {
                  // other characters
                  return isTextStart(scnr, false);
              }
          };
          const ret = fn();
          scnr.resetPeek();
          return ret;
      }
      function isPluralStart(scnr) {
          peekSpaces(scnr);
          const ret = scnr.currentPeek() === "|" /* TokenChars.Pipe */;
          scnr.resetPeek();
          return ret;
      }
      function detectModuloStart(scnr) {
          const spaces = peekSpaces(scnr);
          const ret = scnr.currentPeek() === "%" /* TokenChars.Modulo */ &&
              scnr.peek() === "{" /* TokenChars.BraceLeft */;
          scnr.resetPeek();
          return {
              isModulo: ret,
              hasSpace: spaces.length > 0
          };
      }
      function isTextStart(scnr, reset = true) {
          const fn = (hasSpace = false, prev = '', detectModulo = false) => {
              const ch = scnr.currentPeek();
              if (ch === "{" /* TokenChars.BraceLeft */) {
                  return prev === "%" /* TokenChars.Modulo */ ? false : hasSpace;
              }
              else if (ch === "@" /* TokenChars.LinkedAlias */ || !ch) {
                  return prev === "%" /* TokenChars.Modulo */ ? true : hasSpace;
              }
              else if (ch === "%" /* TokenChars.Modulo */) {
                  scnr.peek();
                  return fn(hasSpace, "%" /* TokenChars.Modulo */, true);
              }
              else if (ch === "|" /* TokenChars.Pipe */) {
                  return prev === "%" /* TokenChars.Modulo */ || detectModulo
                      ? true
                      : !(prev === CHAR_SP || prev === CHAR_LF);
              }
              else if (ch === CHAR_SP) {
                  scnr.peek();
                  return fn(true, CHAR_SP, detectModulo);
              }
              else if (ch === CHAR_LF) {
                  scnr.peek();
                  return fn(true, CHAR_LF, detectModulo);
              }
              else {
                  return true;
              }
          };
          const ret = fn();
          reset && scnr.resetPeek();
          return ret;
      }
      function takeChar(scnr, fn) {
          const ch = scnr.currentChar();
          if (ch === EOF) {
              return EOF;
          }
          if (fn(ch)) {
              scnr.next();
              return ch;
          }
          return null;
      }
      function isIdentifier(ch) {
          const cc = ch.charCodeAt(0);
          return ((cc >= 97 && cc <= 122) || // a-z
              (cc >= 65 && cc <= 90) || // A-Z
              (cc >= 48 && cc <= 57) || // 0-9
              cc === 95 || // _
              cc === 36 // $
          );
      }
      function takeIdentifierChar(scnr) {
          return takeChar(scnr, isIdentifier);
      }
      function isNamedIdentifier(ch) {
          const cc = ch.charCodeAt(0);
          return ((cc >= 97 && cc <= 122) || // a-z
              (cc >= 65 && cc <= 90) || // A-Z
              (cc >= 48 && cc <= 57) || // 0-9
              cc === 95 || // _
              cc === 36 || // $
              cc === 45 // -
          );
      }
      function takeNamedIdentifierChar(scnr) {
          return takeChar(scnr, isNamedIdentifier);
      }
      function isDigit(ch) {
          const cc = ch.charCodeAt(0);
          return cc >= 48 && cc <= 57; // 0-9
      }
      function takeDigit(scnr) {
          return takeChar(scnr, isDigit);
      }
      function isHexDigit(ch) {
          const cc = ch.charCodeAt(0);
          return ((cc >= 48 && cc <= 57) || // 0-9
              (cc >= 65 && cc <= 70) || // A-F
              (cc >= 97 && cc <= 102)); // a-f
      }
      function takeHexDigit(scnr) {
          return takeChar(scnr, isHexDigit);
      }
      function getDigits(scnr) {
          let ch = '';
          let num = '';
          while ((ch = takeDigit(scnr))) {
              num += ch;
          }
          return num;
      }
      function readModulo(scnr) {
          skipSpaces(scnr);
          const ch = scnr.currentChar();
          if (ch !== "%" /* TokenChars.Modulo */) {
              emitError(CompileErrorCodes.EXPECTED_TOKEN, currentPosition(), 0, ch);
          }
          scnr.next();
          return "%" /* TokenChars.Modulo */;
      }
      function readText(scnr) {
          let buf = '';
          // eslint-disable-next-line no-constant-condition
          while (true) {
              const ch = scnr.currentChar();
              if (ch === "{" /* TokenChars.BraceLeft */ ||
                  ch === "}" /* TokenChars.BraceRight */ ||
                  ch === "@" /* TokenChars.LinkedAlias */ ||
                  ch === "|" /* TokenChars.Pipe */ ||
                  !ch) {
                  break;
              }
              else if (ch === "%" /* TokenChars.Modulo */) {
                  if (isTextStart(scnr)) {
                      buf += ch;
                      scnr.next();
                  }
                  else {
                      break;
                  }
              }
              else if (ch === CHAR_SP || ch === CHAR_LF) {
                  if (isTextStart(scnr)) {
                      buf += ch;
                      scnr.next();
                  }
                  else if (isPluralStart(scnr)) {
                      break;
                  }
                  else {
                      buf += ch;
                      scnr.next();
                  }
              }
              else {
                  buf += ch;
                  scnr.next();
              }
          }
          return buf;
      }
      function readNamedIdentifier(scnr) {
          skipSpaces(scnr);
          let ch = '';
          let name = '';
          while ((ch = takeNamedIdentifierChar(scnr))) {
              name += ch;
          }
          if (scnr.currentChar() === EOF) {
              emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
          }
          return name;
      }
      function readListIdentifier(scnr) {
          skipSpaces(scnr);
          let value = '';
          if (scnr.currentChar() === '-') {
              scnr.next();
              value += `-${getDigits(scnr)}`;
          }
          else {
              value += getDigits(scnr);
          }
          if (scnr.currentChar() === EOF) {
              emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
          }
          return value;
      }
      function isLiteral(ch) {
          return ch !== LITERAL_DELIMITER && ch !== CHAR_LF;
      }
      function readLiteral(scnr) {
          skipSpaces(scnr);
          // eslint-disable-next-line no-useless-escape
          eat(scnr, `\'`);
          let ch = '';
          let literal = '';
          while ((ch = takeChar(scnr, isLiteral))) {
              if (ch === '\\') {
                  literal += readEscapeSequence(scnr);
              }
              else {
                  literal += ch;
              }
          }
          const current = scnr.currentChar();
          if (current === CHAR_LF || current === EOF) {
              emitError(CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, currentPosition(), 0);
              // TODO: Is it correct really?
              if (current === CHAR_LF) {
                  scnr.next();
                  // eslint-disable-next-line no-useless-escape
                  eat(scnr, `\'`);
              }
              return literal;
          }
          // eslint-disable-next-line no-useless-escape
          eat(scnr, `\'`);
          return literal;
      }
      function readEscapeSequence(scnr) {
          const ch = scnr.currentChar();
          switch (ch) {
              case '\\':
              case `\'`: // eslint-disable-line no-useless-escape
                  scnr.next();
                  return `\\${ch}`;
              case 'u':
                  return readUnicodeEscapeSequence(scnr, ch, 4);
              case 'U':
                  return readUnicodeEscapeSequence(scnr, ch, 6);
              default:
                  emitError(CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE, currentPosition(), 0, ch);
                  return '';
          }
      }
      function readUnicodeEscapeSequence(scnr, unicode, digits) {
          eat(scnr, unicode);
          let sequence = '';
          for (let i = 0; i < digits; i++) {
              const ch = takeHexDigit(scnr);
              if (!ch) {
                  emitError(CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE, currentPosition(), 0, `\\${unicode}${sequence}${scnr.currentChar()}`);
                  break;
              }
              sequence += ch;
          }
          return `\\${unicode}${sequence}`;
      }
      function isInvalidIdentifier(ch) {
          return (ch !== "{" /* TokenChars.BraceLeft */ &&
              ch !== "}" /* TokenChars.BraceRight */ &&
              ch !== CHAR_SP &&
              ch !== CHAR_LF);
      }
      function readInvalidIdentifier(scnr) {
          skipSpaces(scnr);
          let ch = '';
          let identifiers = '';
          while ((ch = takeChar(scnr, isInvalidIdentifier))) {
              identifiers += ch;
          }
          return identifiers;
      }
      function readLinkedModifier(scnr) {
          let ch = '';
          let name = '';
          while ((ch = takeIdentifierChar(scnr))) {
              name += ch;
          }
          return name;
      }
      function readLinkedRefer(scnr) {
          const fn = (buf) => {
              const ch = scnr.currentChar();
              if (ch === "{" /* TokenChars.BraceLeft */ ||
                  ch === "%" /* TokenChars.Modulo */ ||
                  ch === "@" /* TokenChars.LinkedAlias */ ||
                  ch === "|" /* TokenChars.Pipe */ ||
                  ch === "(" /* TokenChars.ParenLeft */ ||
                  ch === ")" /* TokenChars.ParenRight */ ||
                  !ch) {
                  return buf;
              }
              else if (ch === CHAR_SP) {
                  return buf;
              }
              else if (ch === CHAR_LF || ch === DOT) {
                  buf += ch;
                  scnr.next();
                  return fn(buf);
              }
              else {
                  buf += ch;
                  scnr.next();
                  return fn(buf);
              }
          };
          return fn('');
      }
      function readPlural(scnr) {
          skipSpaces(scnr);
          const plural = eat(scnr, "|" /* TokenChars.Pipe */);
          skipSpaces(scnr);
          return plural;
      }
      // TODO: We need refactoring of token parsing ...
      function readTokenInPlaceholder(scnr, context) {
          let token = null;
          const ch = scnr.currentChar();
          switch (ch) {
              case "{" /* TokenChars.BraceLeft */:
                  if (context.braceNest >= 1) {
                      emitError(CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER, currentPosition(), 0);
                  }
                  scnr.next();
                  token = getToken(context, 2 /* TokenTypes.BraceLeft */, "{" /* TokenChars.BraceLeft */);
                  skipSpaces(scnr);
                  context.braceNest++;
                  return token;
              case "}" /* TokenChars.BraceRight */:
                  if (context.braceNest > 0 &&
                      context.currentType === 2 /* TokenTypes.BraceLeft */) {
                      emitError(CompileErrorCodes.EMPTY_PLACEHOLDER, currentPosition(), 0);
                  }
                  scnr.next();
                  token = getToken(context, 3 /* TokenTypes.BraceRight */, "}" /* TokenChars.BraceRight */);
                  context.braceNest--;
                  context.braceNest > 0 && skipSpaces(scnr);
                  if (context.inLinked && context.braceNest === 0) {
                      context.inLinked = false;
                  }
                  return token;
              case "@" /* TokenChars.LinkedAlias */:
                  if (context.braceNest > 0) {
                      emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
                  }
                  token = readTokenInLinked(scnr, context) || getEndToken(context);
                  context.braceNest = 0;
                  return token;
              default: {
                  let validNamedIdentifier = true;
                  let validListIdentifier = true;
                  let validLiteral = true;
                  if (isPluralStart(scnr)) {
                      if (context.braceNest > 0) {
                          emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
                      }
                      token = getToken(context, 1 /* TokenTypes.Pipe */, readPlural(scnr));
                      // reset
                      context.braceNest = 0;
                      context.inLinked = false;
                      return token;
                  }
                  if (context.braceNest > 0 &&
                      (context.currentType === 5 /* TokenTypes.Named */ ||
                          context.currentType === 6 /* TokenTypes.List */ ||
                          context.currentType === 7 /* TokenTypes.Literal */)) {
                      emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
                      context.braceNest = 0;
                      return readToken(scnr, context);
                  }
                  if ((validNamedIdentifier = isNamedIdentifierStart(scnr, context))) {
                      token = getToken(context, 5 /* TokenTypes.Named */, readNamedIdentifier(scnr));
                      skipSpaces(scnr);
                      return token;
                  }
                  if ((validListIdentifier = isListIdentifierStart(scnr, context))) {
                      token = getToken(context, 6 /* TokenTypes.List */, readListIdentifier(scnr));
                      skipSpaces(scnr);
                      return token;
                  }
                  if ((validLiteral = isLiteralStart(scnr, context))) {
                      token = getToken(context, 7 /* TokenTypes.Literal */, readLiteral(scnr));
                      skipSpaces(scnr);
                      return token;
                  }
                  if (!validNamedIdentifier && !validListIdentifier && !validLiteral) {
                      // TODO: we should be re-designed invalid cases, when we will extend message syntax near the future ...
                      token = getToken(context, 13 /* TokenTypes.InvalidPlace */, readInvalidIdentifier(scnr));
                      emitError(CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER, currentPosition(), 0, token.value);
                      skipSpaces(scnr);
                      return token;
                  }
                  break;
              }
          }
          return token;
      }
      // TODO: We need refactoring of token parsing ...
      function readTokenInLinked(scnr, context) {
          const { currentType } = context;
          let token = null;
          const ch = scnr.currentChar();
          if ((currentType === 8 /* TokenTypes.LinkedAlias */ ||
              currentType === 9 /* TokenTypes.LinkedDot */ ||
              currentType === 12 /* TokenTypes.LinkedModifier */ ||
              currentType === 10 /* TokenTypes.LinkedDelimiter */) &&
              (ch === CHAR_LF || ch === CHAR_SP)) {
              emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
          }
          switch (ch) {
              case "@" /* TokenChars.LinkedAlias */:
                  scnr.next();
                  token = getToken(context, 8 /* TokenTypes.LinkedAlias */, "@" /* TokenChars.LinkedAlias */);
                  context.inLinked = true;
                  return token;
              case "." /* TokenChars.LinkedDot */:
                  skipSpaces(scnr);
                  scnr.next();
                  return getToken(context, 9 /* TokenTypes.LinkedDot */, "." /* TokenChars.LinkedDot */);
              case ":" /* TokenChars.LinkedDelimiter */:
                  skipSpaces(scnr);
                  scnr.next();
                  return getToken(context, 10 /* TokenTypes.LinkedDelimiter */, ":" /* TokenChars.LinkedDelimiter */);
              default:
                  if (isPluralStart(scnr)) {
                      token = getToken(context, 1 /* TokenTypes.Pipe */, readPlural(scnr));
                      // reset
                      context.braceNest = 0;
                      context.inLinked = false;
                      return token;
                  }
                  if (isLinkedDotStart(scnr, context) ||
                      isLinkedDelimiterStart(scnr, context)) {
                      skipSpaces(scnr);
                      return readTokenInLinked(scnr, context);
                  }
                  if (isLinkedModifierStart(scnr, context)) {
                      skipSpaces(scnr);
                      return getToken(context, 12 /* TokenTypes.LinkedModifier */, readLinkedModifier(scnr));
                  }
                  if (isLinkedReferStart(scnr, context)) {
                      skipSpaces(scnr);
                      if (ch === "{" /* TokenChars.BraceLeft */) {
                          // scan the placeholder
                          return readTokenInPlaceholder(scnr, context) || token;
                      }
                      else {
                          return getToken(context, 11 /* TokenTypes.LinkedKey */, readLinkedRefer(scnr));
                      }
                  }
                  if (currentType === 8 /* TokenTypes.LinkedAlias */) {
                      emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
                  }
                  context.braceNest = 0;
                  context.inLinked = false;
                  return readToken(scnr, context);
          }
      }
      // TODO: We need refactoring of token parsing ...
      function readToken(scnr, context) {
          let token = { type: 14 /* TokenTypes.EOF */ };
          if (context.braceNest > 0) {
              return readTokenInPlaceholder(scnr, context) || getEndToken(context);
          }
          if (context.inLinked) {
              return readTokenInLinked(scnr, context) || getEndToken(context);
          }
          const ch = scnr.currentChar();
          switch (ch) {
              case "{" /* TokenChars.BraceLeft */:
                  return readTokenInPlaceholder(scnr, context) || getEndToken(context);
              case "}" /* TokenChars.BraceRight */:
                  emitError(CompileErrorCodes.UNBALANCED_CLOSING_BRACE, currentPosition(), 0);
                  scnr.next();
                  return getToken(context, 3 /* TokenTypes.BraceRight */, "}" /* TokenChars.BraceRight */);
              case "@" /* TokenChars.LinkedAlias */:
                  return readTokenInLinked(scnr, context) || getEndToken(context);
              default: {
                  if (isPluralStart(scnr)) {
                      token = getToken(context, 1 /* TokenTypes.Pipe */, readPlural(scnr));
                      // reset
                      context.braceNest = 0;
                      context.inLinked = false;
                      return token;
                  }
                  const { isModulo, hasSpace } = detectModuloStart(scnr);
                  if (isModulo) {
                      return hasSpace
                          ? getToken(context, 0 /* TokenTypes.Text */, readText(scnr))
                          : getToken(context, 4 /* TokenTypes.Modulo */, readModulo(scnr));
                  }
                  if (isTextStart(scnr)) {
                      return getToken(context, 0 /* TokenTypes.Text */, readText(scnr));
                  }
                  break;
              }
          }
          return token;
      }
      function nextToken() {
          const { currentType, offset, startLoc, endLoc } = _context;
          _context.lastType = currentType;
          _context.lastOffset = offset;
          _context.lastStartLoc = startLoc;
          _context.lastEndLoc = endLoc;
          _context.offset = currentOffset();
          _context.startLoc = currentPosition();
          if (_scnr.currentChar() === EOF) {
              return getToken(_context, 14 /* TokenTypes.EOF */);
          }
          return readToken(_scnr, _context);
      }
      return {
          nextToken,
          currentOffset,
          currentPosition,
          context
      };
  }

  const ERROR_DOMAIN$2 = 'parser';
  // Backslash backslash, backslash quote, uHHHH, UHHHHHH.
  const KNOWN_ESCAPES = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
  function fromEscapeSequence(match, codePoint4, codePoint6) {
      switch (match) {
          case `\\\\`:
              return `\\`;
          // eslint-disable-next-line no-useless-escape
          case `\\\'`:
              // eslint-disable-next-line no-useless-escape
              return `\'`;
          default: {
              const codePoint = parseInt(codePoint4 || codePoint6, 16);
              if (codePoint <= 0xd7ff || codePoint >= 0xe000) {
                  return String.fromCodePoint(codePoint);
              }
              // invalid ...
              // Replace them with U+FFFD REPLACEMENT CHARACTER.
              return '�';
          }
      }
  }
  function createParser(options = {}) {
      const location = options.location !== false;
      const { onError, onWarn } = options;
      function emitError(tokenzer, code, start, offset, ...args) {
          const end = tokenzer.currentPosition();
          end.offset += offset;
          end.column += offset;
          if (onError) {
              const loc = location ? createLocation(start, end) : null;
              const err = createCompileError(code, loc, {
                  domain: ERROR_DOMAIN$2,
                  args
              });
              onError(err);
          }
      }
      function emitWarn(tokenzer, code, start, offset, ...args) {
          const end = tokenzer.currentPosition();
          end.offset += offset;
          end.column += offset;
          if (onWarn) {
              const loc = location ? createLocation(start, end) : null;
              onWarn(createCompileWarn(code, loc, args));
          }
      }
      function startNode(type, offset, loc) {
          const node = { type };
          if (location) {
              node.start = offset;
              node.end = offset;
              node.loc = { start: loc, end: loc };
          }
          return node;
      }
      function endNode(node, offset, pos, type) {
          if (type) {
              node.type = type;
          }
          if (location) {
              node.end = offset;
              if (node.loc) {
                  node.loc.end = pos;
              }
          }
      }
      function parseText(tokenizer, value) {
          const context = tokenizer.context();
          const node = startNode(3 /* NodeTypes.Text */, context.offset, context.startLoc);
          node.value = value;
          endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
          return node;
      }
      function parseList(tokenizer, index) {
          const context = tokenizer.context();
          const { lastOffset: offset, lastStartLoc: loc } = context; // get brace left loc
          const node = startNode(5 /* NodeTypes.List */, offset, loc);
          node.index = parseInt(index, 10);
          tokenizer.nextToken(); // skip brach right
          endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
          return node;
      }
      function parseNamed(tokenizer, key, modulo) {
          const context = tokenizer.context();
          const { lastOffset: offset, lastStartLoc: loc } = context; // get brace left loc
          const node = startNode(4 /* NodeTypes.Named */, offset, loc);
          node.key = key;
          if (modulo === true) {
              node.modulo = true;
          }
          tokenizer.nextToken(); // skip brach right
          endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
          return node;
      }
      function parseLiteral(tokenizer, value) {
          const context = tokenizer.context();
          const { lastOffset: offset, lastStartLoc: loc } = context; // get brace left loc
          const node = startNode(9 /* NodeTypes.Literal */, offset, loc);
          node.value = value.replace(KNOWN_ESCAPES, fromEscapeSequence);
          tokenizer.nextToken(); // skip brach right
          endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
          return node;
      }
      function parseLinkedModifier(tokenizer) {
          const token = tokenizer.nextToken();
          const context = tokenizer.context();
          const { lastOffset: offset, lastStartLoc: loc } = context; // get linked dot loc
          const node = startNode(8 /* NodeTypes.LinkedModifier */, offset, loc);
          if (token.type !== 12 /* TokenTypes.LinkedModifier */) {
              // empty modifier
              emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER, context.lastStartLoc, 0);
              node.value = '';
              endNode(node, offset, loc);
              return {
                  nextConsumeToken: token,
                  node
              };
          }
          // check token
          if (token.value == null) {
              emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.value = token.value || '';
          endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
          return {
              node
          };
      }
      function parseLinkedKey(tokenizer, value) {
          const context = tokenizer.context();
          const node = startNode(7 /* NodeTypes.LinkedKey */, context.offset, context.startLoc);
          node.value = value;
          endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
          return node;
      }
      function parseLinked(tokenizer) {
          const context = tokenizer.context();
          const linkedNode = startNode(6 /* NodeTypes.Linked */, context.offset, context.startLoc);
          let token = tokenizer.nextToken();
          if (token.type === 9 /* TokenTypes.LinkedDot */) {
              const parsed = parseLinkedModifier(tokenizer);
              linkedNode.modifier = parsed.node;
              token = parsed.nextConsumeToken || tokenizer.nextToken();
          }
          // asset check token
          if (token.type !== 10 /* TokenTypes.LinkedDelimiter */) {
              emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          token = tokenizer.nextToken();
          // skip brace left
          if (token.type === 2 /* TokenTypes.BraceLeft */) {
              token = tokenizer.nextToken();
          }
          switch (token.type) {
              case 11 /* TokenTypes.LinkedKey */:
                  if (token.value == null) {
                      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
                  }
                  linkedNode.key = parseLinkedKey(tokenizer, token.value || '');
                  break;
              case 5 /* TokenTypes.Named */:
                  if (token.value == null) {
                      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
                  }
                  linkedNode.key = parseNamed(tokenizer, token.value || '');
                  break;
              case 6 /* TokenTypes.List */:
                  if (token.value == null) {
                      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
                  }
                  linkedNode.key = parseList(tokenizer, token.value || '');
                  break;
              case 7 /* TokenTypes.Literal */:
                  if (token.value == null) {
                      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
                  }
                  linkedNode.key = parseLiteral(tokenizer, token.value || '');
                  break;
              default: {
                  // empty key
                  emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY, context.lastStartLoc, 0);
                  const nextContext = tokenizer.context();
                  const emptyLinkedKeyNode = startNode(7 /* NodeTypes.LinkedKey */, nextContext.offset, nextContext.startLoc);
                  emptyLinkedKeyNode.value = '';
                  endNode(emptyLinkedKeyNode, nextContext.offset, nextContext.startLoc);
                  linkedNode.key = emptyLinkedKeyNode;
                  endNode(linkedNode, nextContext.offset, nextContext.startLoc);
                  return {
                      nextConsumeToken: token,
                      node: linkedNode
                  };
              }
          }
          endNode(linkedNode, tokenizer.currentOffset(), tokenizer.currentPosition());
          return {
              node: linkedNode
          };
      }
      function parseMessage(tokenizer) {
          const context = tokenizer.context();
          const startOffset = context.currentType === 1 /* TokenTypes.Pipe */
              ? tokenizer.currentOffset()
              : context.offset;
          const startLoc = context.currentType === 1 /* TokenTypes.Pipe */
              ? context.endLoc
              : context.startLoc;
          const node = startNode(2 /* NodeTypes.Message */, startOffset, startLoc);
          node.items = [];
          let nextToken = null;
          let modulo = null;
          do {
              const token = nextToken || tokenizer.nextToken();
              nextToken = null;
              switch (token.type) {
                  case 0 /* TokenTypes.Text */:
                      if (token.value == null) {
                          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
                      }
                      node.items.push(parseText(tokenizer, token.value || ''));
                      break;
                  case 6 /* TokenTypes.List */:
                      if (token.value == null) {
                          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
                      }
                      node.items.push(parseList(tokenizer, token.value || ''));
                      break;
                  case 4 /* TokenTypes.Modulo */:
                      modulo = true;
                      break;
                  case 5 /* TokenTypes.Named */:
                      if (token.value == null) {
                          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
                      }
                      node.items.push(parseNamed(tokenizer, token.value || '', !!modulo));
                      if (modulo) {
                          emitWarn(tokenizer, CompileWarnCodes.USE_MODULO_SYNTAX, context.lastStartLoc, 0, getTokenCaption(token));
                          modulo = null;
                      }
                      break;
                  case 7 /* TokenTypes.Literal */:
                      if (token.value == null) {
                          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
                      }
                      node.items.push(parseLiteral(tokenizer, token.value || ''));
                      break;
                  case 8 /* TokenTypes.LinkedAlias */: {
                      const parsed = parseLinked(tokenizer);
                      node.items.push(parsed.node);
                      nextToken = parsed.nextConsumeToken || null;
                      break;
                  }
              }
          } while (context.currentType !== 14 /* TokenTypes.EOF */ &&
              context.currentType !== 1 /* TokenTypes.Pipe */);
          // adjust message node loc
          const endOffset = context.currentType === 1 /* TokenTypes.Pipe */
              ? context.lastOffset
              : tokenizer.currentOffset();
          const endLoc = context.currentType === 1 /* TokenTypes.Pipe */
              ? context.lastEndLoc
              : tokenizer.currentPosition();
          endNode(node, endOffset, endLoc);
          return node;
      }
      function parsePlural(tokenizer, offset, loc, msgNode) {
          const context = tokenizer.context();
          let hasEmptyMessage = msgNode.items.length === 0;
          const node = startNode(1 /* NodeTypes.Plural */, offset, loc);
          node.cases = [];
          node.cases.push(msgNode);
          do {
              const msg = parseMessage(tokenizer);
              if (!hasEmptyMessage) {
                  hasEmptyMessage = msg.items.length === 0;
              }
              node.cases.push(msg);
          } while (context.currentType !== 14 /* TokenTypes.EOF */);
          if (hasEmptyMessage) {
              emitError(tokenizer, CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL, loc, 0);
          }
          endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
          return node;
      }
      function parseResource(tokenizer) {
          const context = tokenizer.context();
          const { offset, startLoc } = context;
          const msgNode = parseMessage(tokenizer);
          if (context.currentType === 14 /* TokenTypes.EOF */) {
              return msgNode;
          }
          else {
              return parsePlural(tokenizer, offset, startLoc, msgNode);
          }
      }
      function parse(source) {
          const tokenizer = createTokenizer(source, assign$2({}, options));
          const context = tokenizer.context();
          const node = startNode(0 /* NodeTypes.Resource */, context.offset, context.startLoc);
          if (location && node.loc) {
              node.loc.source = source;
          }
          node.body = parseResource(tokenizer);
          if (options.onCacheKey) {
              node.cacheKey = options.onCacheKey(source);
          }
          // assert whether achieved to EOF
          if (context.currentType !== 14 /* TokenTypes.EOF */) {
              emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, source[context.offset] || '');
          }
          endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
          return node;
      }
      return { parse };
  }
  function getTokenCaption(token) {
      if (token.type === 14 /* TokenTypes.EOF */) {
          return 'EOF';
      }
      const name = (token.value || '').replace(/\r?\n/gu, '\\n');
      return name.length > 10 ? name.slice(0, 9) + '…' : name;
  }

  function createTransformer(ast, options = {} // eslint-disable-line
  ) {
      const _context = {
          ast,
          helpers: new Set()
      };
      const context = () => _context;
      const helper = (name) => {
          _context.helpers.add(name);
          return name;
      };
      return { context, helper };
  }
  function traverseNodes(nodes, transformer) {
      for (let i = 0; i < nodes.length; i++) {
          traverseNode(nodes[i], transformer);
      }
  }
  function traverseNode(node, transformer) {
      // TODO: if we need pre-hook of transform, should be implemented to here
      switch (node.type) {
          case 1 /* NodeTypes.Plural */:
              traverseNodes(node.cases, transformer);
              transformer.helper("plural" /* HelperNameMap.PLURAL */);
              break;
          case 2 /* NodeTypes.Message */:
              traverseNodes(node.items, transformer);
              break;
          case 6 /* NodeTypes.Linked */: {
              const linked = node;
              traverseNode(linked.key, transformer);
              transformer.helper("linked" /* HelperNameMap.LINKED */);
              transformer.helper("type" /* HelperNameMap.TYPE */);
              break;
          }
          case 5 /* NodeTypes.List */:
              transformer.helper("interpolate" /* HelperNameMap.INTERPOLATE */);
              transformer.helper("list" /* HelperNameMap.LIST */);
              break;
          case 4 /* NodeTypes.Named */:
              transformer.helper("interpolate" /* HelperNameMap.INTERPOLATE */);
              transformer.helper("named" /* HelperNameMap.NAMED */);
              break;
      }
      // TODO: if we need post-hook of transform, should be implemented to here
  }
  // transform AST
  function transform(ast, options = {} // eslint-disable-line
  ) {
      const transformer = createTransformer(ast);
      transformer.helper("normalize" /* HelperNameMap.NORMALIZE */);
      // traverse
      ast.body && traverseNode(ast.body, transformer);
      // set meta information
      const context = transformer.context();
      ast.helpers = Array.from(context.helpers);
  }

  function optimize(ast) {
      const body = ast.body;
      if (body.type === 2 /* NodeTypes.Message */) {
          optimizeMessageNode(body);
      }
      else {
          body.cases.forEach(c => optimizeMessageNode(c));
      }
      return ast;
  }
  function optimizeMessageNode(message) {
      if (message.items.length === 1) {
          const item = message.items[0];
          if (item.type === 3 /* NodeTypes.Text */ || item.type === 9 /* NodeTypes.Literal */) {
              message.static = item.value;
              delete item.value; // optimization for size
          }
      }
      else {
          const values = [];
          for (let i = 0; i < message.items.length; i++) {
              const item = message.items[i];
              if (!(item.type === 3 /* NodeTypes.Text */ || item.type === 9 /* NodeTypes.Literal */)) {
                  break;
              }
              if (item.value == null) {
                  break;
              }
              values.push(item.value);
          }
          if (values.length === message.items.length) {
              message.static = join(values);
              for (let i = 0; i < message.items.length; i++) {
                  const item = message.items[i];
                  if (item.type === 3 /* NodeTypes.Text */ || item.type === 9 /* NodeTypes.Literal */) {
                      delete item.value; // optimization for size
                  }
              }
          }
      }
  }
  /* eslint-disable @typescript-eslint/no-explicit-any */
  function minify(node) {
      node.t = node.type;
      switch (node.type) {
          case 0 /* NodeTypes.Resource */: {
              const resource = node;
              minify(resource.body);
              resource.b = resource.body;
              delete resource.body;
              break;
          }
          case 1 /* NodeTypes.Plural */: {
              const plural = node;
              const cases = plural.cases;
              for (let i = 0; i < cases.length; i++) {
                  minify(cases[i]);
              }
              plural.c = cases;
              delete plural.cases;
              break;
          }
          case 2 /* NodeTypes.Message */: {
              const message = node;
              const items = message.items;
              for (let i = 0; i < items.length; i++) {
                  minify(items[i]);
              }
              message.i = items;
              delete message.items;
              if (message.static) {
                  message.s = message.static;
                  delete message.static;
              }
              break;
          }
          case 3 /* NodeTypes.Text */:
          case 9 /* NodeTypes.Literal */:
          case 8 /* NodeTypes.LinkedModifier */:
          case 7 /* NodeTypes.LinkedKey */: {
              const valueNode = node;
              if (valueNode.value) {
                  valueNode.v = valueNode.value;
                  delete valueNode.value;
              }
              break;
          }
          case 6 /* NodeTypes.Linked */: {
              const linked = node;
              minify(linked.key);
              linked.k = linked.key;
              delete linked.key;
              if (linked.modifier) {
                  minify(linked.modifier);
                  linked.m = linked.modifier;
                  delete linked.modifier;
              }
              break;
          }
          case 5 /* NodeTypes.List */: {
              const list = node;
              list.i = list.index;
              delete list.index;
              break;
          }
          case 4 /* NodeTypes.Named */: {
              const named = node;
              named.k = named.key;
              delete named.key;
              break;
          }
      }
      delete node.type;
  }
  function createCodeGenerator(ast, options) {
      const { sourceMap, filename, breakLineCode, needIndent: _needIndent } = options;
      const location = options.location !== false;
      const _context = {
          filename,
          code: '',
          column: 1,
          line: 1,
          offset: 0,
          map: undefined,
          breakLineCode,
          needIndent: _needIndent,
          indentLevel: 0
      };
      if (location && ast.loc) {
          _context.source = ast.loc.source;
      }
      const context = () => _context;
      function push(code, node) {
          _context.code += code;
      }
      function _newline(n, withBreakLine = true) {
          const _breakLineCode = withBreakLine ? breakLineCode : '';
          push(_needIndent ? _breakLineCode + `  `.repeat(n) : _breakLineCode);
      }
      function indent(withNewLine = true) {
          const level = ++_context.indentLevel;
          withNewLine && _newline(level);
      }
      function deindent(withNewLine = true) {
          const level = --_context.indentLevel;
          withNewLine && _newline(level);
      }
      function newline() {
          _newline(_context.indentLevel);
      }
      const helper = (key) => `_${key}`;
      const needIndent = () => _context.needIndent;
      return {
          context,
          push,
          indent,
          deindent,
          newline,
          helper,
          needIndent
      };
  }
  function generateLinkedNode(generator, node) {
      const { helper } = generator;
      generator.push(`${helper("linked" /* HelperNameMap.LINKED */)}(`);
      generateNode(generator, node.key);
      if (node.modifier) {
          generator.push(`, `);
          generateNode(generator, node.modifier);
          generator.push(`, _type`);
      }
      else {
          generator.push(`, undefined, _type`);
      }
      generator.push(`)`);
  }
  function generateMessageNode(generator, node) {
      const { helper, needIndent } = generator;
      generator.push(`${helper("normalize" /* HelperNameMap.NORMALIZE */)}([`);
      generator.indent(needIndent());
      const length = node.items.length;
      for (let i = 0; i < length; i++) {
          generateNode(generator, node.items[i]);
          if (i === length - 1) {
              break;
          }
          generator.push(', ');
      }
      generator.deindent(needIndent());
      generator.push('])');
  }
  function generatePluralNode(generator, node) {
      const { helper, needIndent } = generator;
      if (node.cases.length > 1) {
          generator.push(`${helper("plural" /* HelperNameMap.PLURAL */)}([`);
          generator.indent(needIndent());
          const length = node.cases.length;
          for (let i = 0; i < length; i++) {
              generateNode(generator, node.cases[i]);
              if (i === length - 1) {
                  break;
              }
              generator.push(', ');
          }
          generator.deindent(needIndent());
          generator.push(`])`);
      }
  }
  function generateResource(generator, node) {
      if (node.body) {
          generateNode(generator, node.body);
      }
      else {
          generator.push('null');
      }
  }
  function generateNode(generator, node) {
      const { helper } = generator;
      switch (node.type) {
          case 0 /* NodeTypes.Resource */:
              generateResource(generator, node);
              break;
          case 1 /* NodeTypes.Plural */:
              generatePluralNode(generator, node);
              break;
          case 2 /* NodeTypes.Message */:
              generateMessageNode(generator, node);
              break;
          case 6 /* NodeTypes.Linked */:
              generateLinkedNode(generator, node);
              break;
          case 8 /* NodeTypes.LinkedModifier */:
              generator.push(JSON.stringify(node.value), node);
              break;
          case 7 /* NodeTypes.LinkedKey */:
              generator.push(JSON.stringify(node.value), node);
              break;
          case 5 /* NodeTypes.List */:
              generator.push(`${helper("interpolate" /* HelperNameMap.INTERPOLATE */)}(${helper("list" /* HelperNameMap.LIST */)}(${node.index}))`, node);
              break;
          case 4 /* NodeTypes.Named */:
              generator.push(`${helper("interpolate" /* HelperNameMap.INTERPOLATE */)}(${helper("named" /* HelperNameMap.NAMED */)}(${JSON.stringify(node.key)}))`, node);
              break;
          case 9 /* NodeTypes.Literal */:
              generator.push(JSON.stringify(node.value), node);
              break;
          case 3 /* NodeTypes.Text */:
              generator.push(JSON.stringify(node.value), node);
              break;
      }
  }
  // generate code from AST
  const generate = (ast, options = {} // eslint-disable-line
  ) => {
      const mode = isString(options.mode) ? options.mode : 'normal';
      const filename = isString(options.filename)
          ? options.filename
          : 'message.intl';
      const sourceMap = !!options.sourceMap;
      // prettier-ignore
      const breakLineCode = options.breakLineCode != null
          ? options.breakLineCode
          : mode === 'arrow'
              ? ';'
              : '\n';
      const needIndent = options.needIndent ? options.needIndent : mode !== 'arrow';
      const helpers = ast.helpers || [];
      const generator = createCodeGenerator(ast, {
          mode,
          filename,
          sourceMap,
          breakLineCode,
          needIndent
      });
      generator.push(mode === 'normal' ? `function __msg__ (ctx) {` : `(ctx) => {`);
      generator.indent(needIndent);
      if (helpers.length > 0) {
          generator.push(`const { ${join(helpers.map(s => `${s}: _${s}`), ', ')} } = ctx`);
          generator.newline();
      }
      generator.push(`return `);
      generateNode(generator, ast);
      generator.deindent(needIndent);
      generator.push(`}`);
      delete ast.helpers;
      const { code, map } = generator.context();
      return {
          ast,
          code,
          map: map ? map.toJSON() : undefined // eslint-disable-line @typescript-eslint/no-explicit-any
      };
  };

  function baseCompile$1(source, options = {}) {
      const assignedOptions = assign$2({}, options);
      const jit = !!assignedOptions.jit;
      const enalbeMinify = !!assignedOptions.minify;
      const enambeOptimize = assignedOptions.optimize == null ? true : assignedOptions.optimize;
      // parse source codes
      const parser = createParser(assignedOptions);
      const ast = parser.parse(source);
      if (!jit) {
          // transform ASTs
          transform(ast, assignedOptions);
          // generate javascript codes
          return generate(ast, assignedOptions);
      }
      else {
          // optimize ASTs
          enambeOptimize && optimize(ast);
          // minimize ASTs
          enalbeMinify && minify(ast);
          // In JIT mode, no ast transform, no code generation.
          return { ast, code: '' };
      }
  }

  /*!
    * core-base v9.14.5
    * (c) 2025 kazuya kawaguchi
    * Released under the MIT License.
    */

  /**
   * This is only called in esm-bundler builds.
   * istanbul-ignore-next
   */
  function initFeatureFlags$1() {
      if (typeof __INTLIFY_PROD_DEVTOOLS__ !== 'boolean') {
          getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
      }
      if (typeof __INTLIFY_JIT_COMPILATION__ !== 'boolean') {
          getGlobalThis().__INTLIFY_JIT_COMPILATION__ = false;
      }
      if (typeof __INTLIFY_DROP_MESSAGE_COMPILER__ !== 'boolean') {
          getGlobalThis().__INTLIFY_DROP_MESSAGE_COMPILER__ = false;
      }
  }

  function isMessageAST(val) {
      return (isObject$4(val) &&
          resolveType(val) === 0 &&
          (hasOwn(val, 'b') || hasOwn(val, 'body')));
  }
  const PROPS_BODY = ['b', 'body'];
  function resolveBody(node) {
      return resolveProps(node, PROPS_BODY);
  }
  const PROPS_CASES = ['c', 'cases'];
  function resolveCases(node) {
      return resolveProps(node, PROPS_CASES, []);
  }
  const PROPS_STATIC = ['s', 'static'];
  function resolveStatic(node) {
      return resolveProps(node, PROPS_STATIC);
  }
  const PROPS_ITEMS = ['i', 'items'];
  function resolveItems(node) {
      return resolveProps(node, PROPS_ITEMS, []);
  }
  const PROPS_TYPE = ['t', 'type'];
  function resolveType(node) {
      return resolveProps(node, PROPS_TYPE);
  }
  const PROPS_VALUE = ['v', 'value'];
  function resolveValue$1(node, type) {
      const resolved = resolveProps(node, PROPS_VALUE);
      if (resolved != null) {
          return resolved;
      }
      else {
          throw createUnhandleNodeError(type);
      }
  }
  const PROPS_MODIFIER = ['m', 'modifier'];
  function resolveLinkedModifier(node) {
      return resolveProps(node, PROPS_MODIFIER);
  }
  const PROPS_KEY = ['k', 'key'];
  function resolveLinkedKey(node) {
      const resolved = resolveProps(node, PROPS_KEY);
      if (resolved) {
          return resolved;
      }
      else {
          throw createUnhandleNodeError(6 /* NodeTypes.Linked */);
      }
  }
  function resolveProps(node, props, defaultValue) {
      for (let i = 0; i < props.length; i++) {
          const prop = props[i];
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          if (hasOwn(node, prop) && node[prop] != null) {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              return node[prop];
          }
      }
      return defaultValue;
  }
  const AST_NODE_PROPS_KEYS = [
      ...PROPS_BODY,
      ...PROPS_CASES,
      ...PROPS_STATIC,
      ...PROPS_ITEMS,
      ...PROPS_KEY,
      ...PROPS_MODIFIER,
      ...PROPS_VALUE,
      ...PROPS_TYPE
  ];
  function createUnhandleNodeError(type) {
      return new Error(`unhandled node type: ${type}`);
  }

  const pathStateMachine =  [];
  pathStateMachine[0 /* States.BEFORE_PATH */] = {
      ["w" /* PathCharTypes.WORKSPACE */]: [0 /* States.BEFORE_PATH */],
      ["i" /* PathCharTypes.IDENT */]: [3 /* States.IN_IDENT */, 0 /* Actions.APPEND */],
      ["[" /* PathCharTypes.LEFT_BRACKET */]: [4 /* States.IN_SUB_PATH */],
      ["o" /* PathCharTypes.END_OF_FAIL */]: [7 /* States.AFTER_PATH */]
  };
  pathStateMachine[1 /* States.IN_PATH */] = {
      ["w" /* PathCharTypes.WORKSPACE */]: [1 /* States.IN_PATH */],
      ["." /* PathCharTypes.DOT */]: [2 /* States.BEFORE_IDENT */],
      ["[" /* PathCharTypes.LEFT_BRACKET */]: [4 /* States.IN_SUB_PATH */],
      ["o" /* PathCharTypes.END_OF_FAIL */]: [7 /* States.AFTER_PATH */]
  };
  pathStateMachine[2 /* States.BEFORE_IDENT */] = {
      ["w" /* PathCharTypes.WORKSPACE */]: [2 /* States.BEFORE_IDENT */],
      ["i" /* PathCharTypes.IDENT */]: [3 /* States.IN_IDENT */, 0 /* Actions.APPEND */],
      ["0" /* PathCharTypes.ZERO */]: [3 /* States.IN_IDENT */, 0 /* Actions.APPEND */]
  };
  pathStateMachine[3 /* States.IN_IDENT */] = {
      ["i" /* PathCharTypes.IDENT */]: [3 /* States.IN_IDENT */, 0 /* Actions.APPEND */],
      ["0" /* PathCharTypes.ZERO */]: [3 /* States.IN_IDENT */, 0 /* Actions.APPEND */],
      ["w" /* PathCharTypes.WORKSPACE */]: [1 /* States.IN_PATH */, 1 /* Actions.PUSH */],
      ["." /* PathCharTypes.DOT */]: [2 /* States.BEFORE_IDENT */, 1 /* Actions.PUSH */],
      ["[" /* PathCharTypes.LEFT_BRACKET */]: [4 /* States.IN_SUB_PATH */, 1 /* Actions.PUSH */],
      ["o" /* PathCharTypes.END_OF_FAIL */]: [7 /* States.AFTER_PATH */, 1 /* Actions.PUSH */]
  };
  pathStateMachine[4 /* States.IN_SUB_PATH */] = {
      ["'" /* PathCharTypes.SINGLE_QUOTE */]: [5 /* States.IN_SINGLE_QUOTE */, 0 /* Actions.APPEND */],
      ["\"" /* PathCharTypes.DOUBLE_QUOTE */]: [6 /* States.IN_DOUBLE_QUOTE */, 0 /* Actions.APPEND */],
      ["[" /* PathCharTypes.LEFT_BRACKET */]: [
          4 /* States.IN_SUB_PATH */,
          2 /* Actions.INC_SUB_PATH_DEPTH */
      ],
      ["]" /* PathCharTypes.RIGHT_BRACKET */]: [1 /* States.IN_PATH */, 3 /* Actions.PUSH_SUB_PATH */],
      ["o" /* PathCharTypes.END_OF_FAIL */]: 8 /* States.ERROR */,
      ["l" /* PathCharTypes.ELSE */]: [4 /* States.IN_SUB_PATH */, 0 /* Actions.APPEND */]
  };
  pathStateMachine[5 /* States.IN_SINGLE_QUOTE */] = {
      ["'" /* PathCharTypes.SINGLE_QUOTE */]: [4 /* States.IN_SUB_PATH */, 0 /* Actions.APPEND */],
      ["o" /* PathCharTypes.END_OF_FAIL */]: 8 /* States.ERROR */,
      ["l" /* PathCharTypes.ELSE */]: [5 /* States.IN_SINGLE_QUOTE */, 0 /* Actions.APPEND */]
  };
  pathStateMachine[6 /* States.IN_DOUBLE_QUOTE */] = {
      ["\"" /* PathCharTypes.DOUBLE_QUOTE */]: [4 /* States.IN_SUB_PATH */, 0 /* Actions.APPEND */],
      ["o" /* PathCharTypes.END_OF_FAIL */]: 8 /* States.ERROR */,
      ["l" /* PathCharTypes.ELSE */]: [6 /* States.IN_DOUBLE_QUOTE */, 0 /* Actions.APPEND */]
  };
  /**
   * Check if an expression is a literal value.
   */
  const literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
  function isLiteral(exp) {
      return literalValueRE.test(exp);
  }
  /**
   * Strip quotes from a string
   */
  function stripQuotes(str) {
      const a = str.charCodeAt(0);
      const b = str.charCodeAt(str.length - 1);
      return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
  }
  /**
   * Determine the type of a character in a keypath.
   */
  function getPathCharType(ch) {
      if (ch === undefined || ch === null) {
          return "o" /* PathCharTypes.END_OF_FAIL */;
      }
      const code = ch.charCodeAt(0);
      switch (code) {
          case 0x5b: // [
          case 0x5d: // ]
          case 0x2e: // .
          case 0x22: // "
          case 0x27: // '
              return ch;
          case 0x5f: // _
          case 0x24: // $
          case 0x2d: // -
              return "i" /* PathCharTypes.IDENT */;
          case 0x09: // Tab (HT)
          case 0x0a: // Newline (LF)
          case 0x0d: // Return (CR)
          case 0xa0: // No-break space (NBSP)
          case 0xfeff: // Byte Order Mark (BOM)
          case 0x2028: // Line Separator (LS)
          case 0x2029: // Paragraph Separator (PS)
              return "w" /* PathCharTypes.WORKSPACE */;
      }
      return "i" /* PathCharTypes.IDENT */;
  }
  /**
   * Format a subPath, return its plain form if it is
   * a literal string or number. Otherwise prepend the
   * dynamic indicator (*).
   */
  function formatSubPath(path) {
      const trimmed = path.trim();
      // invalid leading 0
      if (path.charAt(0) === '0' && isNaN(parseInt(path))) {
          return false;
      }
      return isLiteral(trimmed)
          ? stripQuotes(trimmed)
          : "*" /* PathCharTypes.ASTARISK */ + trimmed;
  }
  /**
   * Parse a string path into an array of segments
   */
  function parse$1(path) {
      const keys = [];
      let index = -1;
      let mode = 0 /* States.BEFORE_PATH */;
      let subPathDepth = 0;
      let c;
      let key; // eslint-disable-line
      let newChar;
      let type;
      let transition;
      let action;
      let typeMap;
      const actions = [];
      actions[0 /* Actions.APPEND */] = () => {
          if (key === undefined) {
              key = newChar;
          }
          else {
              key += newChar;
          }
      };
      actions[1 /* Actions.PUSH */] = () => {
          if (key !== undefined) {
              keys.push(key);
              key = undefined;
          }
      };
      actions[2 /* Actions.INC_SUB_PATH_DEPTH */] = () => {
          actions[0 /* Actions.APPEND */]();
          subPathDepth++;
      };
      actions[3 /* Actions.PUSH_SUB_PATH */] = () => {
          if (subPathDepth > 0) {
              subPathDepth--;
              mode = 4 /* States.IN_SUB_PATH */;
              actions[0 /* Actions.APPEND */]();
          }
          else {
              subPathDepth = 0;
              if (key === undefined) {
                  return false;
              }
              key = formatSubPath(key);
              if (key === false) {
                  return false;
              }
              else {
                  actions[1 /* Actions.PUSH */]();
              }
          }
      };
      function maybeUnescapeQuote() {
          const nextChar = path[index + 1];
          if ((mode === 5 /* States.IN_SINGLE_QUOTE */ &&
              nextChar === "'" /* PathCharTypes.SINGLE_QUOTE */) ||
              (mode === 6 /* States.IN_DOUBLE_QUOTE */ &&
                  nextChar === "\"" /* PathCharTypes.DOUBLE_QUOTE */)) {
              index++;
              newChar = '\\' + nextChar;
              actions[0 /* Actions.APPEND */]();
              return true;
          }
      }
      while (mode !== null) {
          index++;
          c = path[index];
          if (c === '\\' && maybeUnescapeQuote()) {
              continue;
          }
          type = getPathCharType(c);
          typeMap = pathStateMachine[mode];
          transition = typeMap[type] || typeMap["l" /* PathCharTypes.ELSE */] || 8 /* States.ERROR */;
          // check parse error
          if (transition === 8 /* States.ERROR */) {
              return;
          }
          mode = transition[0];
          if (transition[1] !== undefined) {
              action = actions[transition[1]];
              if (action) {
                  newChar = c;
                  if (action() === false) {
                      return;
                  }
              }
          }
          // check parse finish
          if (mode === 7 /* States.AFTER_PATH */) {
              return keys;
          }
      }
  }
  // path token cache
  const cache = new Map();
  /**
   * key-value message resolver
   *
   * @remarks
   * Resolves messages with the key-value structure. Note that messages with a hierarchical structure such as objects cannot be resolved
   *
   * @param obj - A target object to be resolved with path
   * @param path - A {@link Path | path} to resolve the value of message
   *
   * @returns A resolved {@link PathValue | path value}
   *
   * @VueI18nGeneral
   */
  function resolveWithKeyValue(obj, path) {
      return isObject$4(obj) ? obj[path] : null;
  }
  /**
   * message resolver
   *
   * @remarks
   * Resolves messages. messages with a hierarchical structure such as objects can be resolved. This resolver is used in VueI18n as default.
   *
   * @param obj - A target object to be resolved with path
   * @param path - A {@link Path | path} to resolve the value of message
   *
   * @returns A resolved {@link PathValue | path value}
   *
   * @VueI18nGeneral
   */
  function resolveValue(obj, path) {
      // check object
      if (!isObject$4(obj)) {
          return null;
      }
      // parse path
      let hit = cache.get(path);
      if (!hit) {
          hit = parse$1(path);
          if (hit) {
              cache.set(path, hit);
          }
      }
      // check hit
      if (!hit) {
          return null;
      }
      // resolve path value
      const len = hit.length;
      let last = obj;
      let i = 0;
      while (i < len) {
          const key = hit[i];
          /**
           * NOTE:
           * if `key` is intlify message format AST node key and `last` is intlify message format AST, skip it.
           * because the AST node is not a key-value structure.
           */
          if (AST_NODE_PROPS_KEYS.includes(key) && isMessageAST(last)) {
              return null;
          }
          const val = last[key];
          if (val === undefined) {
              return null;
          }
          if (isFunction$1(last)) {
              return null;
          }
          last = val;
          i++;
      }
      return last;
  }

  const DEFAULT_MODIFIER = (str) => str;
  const DEFAULT_MESSAGE = (ctx) => ''; // eslint-disable-line
  const DEFAULT_MESSAGE_DATA_TYPE = 'text';
  const DEFAULT_NORMALIZE = (values) => values.length === 0 ? '' : join(values);
  const DEFAULT_INTERPOLATE = toDisplayString;
  function pluralDefault(choice, choicesLength) {
      choice = Math.abs(choice);
      if (choicesLength === 2) {
          // prettier-ignore
          return choice
              ? choice > 1
                  ? 1
                  : 0
              : 1;
      }
      return choice ? Math.min(choice, 2) : 0;
  }
  function getPluralIndex(options) {
      // prettier-ignore
      const index = isNumber(options.pluralIndex)
          ? options.pluralIndex
          : -1;
      // prettier-ignore
      return options.named && (isNumber(options.named.count) || isNumber(options.named.n))
          ? isNumber(options.named.count)
              ? options.named.count
              : isNumber(options.named.n)
                  ? options.named.n
                  : index
          : index;
  }
  function normalizeNamed(pluralIndex, props) {
      if (!props.count) {
          props.count = pluralIndex;
      }
      if (!props.n) {
          props.n = pluralIndex;
      }
  }
  function createMessageContext(options = {}) {
      const locale = options.locale;
      const pluralIndex = getPluralIndex(options);
      const pluralRule = isObject$4(options.pluralRules) &&
          isString(locale) &&
          isFunction$1(options.pluralRules[locale])
          ? options.pluralRules[locale]
          : pluralDefault;
      const orgPluralRule = isObject$4(options.pluralRules) &&
          isString(locale) &&
          isFunction$1(options.pluralRules[locale])
          ? pluralDefault
          : undefined;
      const plural = (messages) => {
          return messages[pluralRule(pluralIndex, messages.length, orgPluralRule)];
      };
      const _list = options.list || [];
      const list = (index) => _list[index];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const _named = options.named || create();
      isNumber(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
      const named = (key) => _named[key];
      function message(key) {
          // prettier-ignore
          const msg = isFunction$1(options.messages)
              ? options.messages(key)
              : isObject$4(options.messages)
                  ? options.messages[key]
                  : false;
          return !msg
              ? options.parent
                  ? options.parent.message(key) // resolve from parent messages
                  : DEFAULT_MESSAGE
              : msg;
      }
      const _modifier = (name) => options.modifiers
          ? options.modifiers[name]
          : DEFAULT_MODIFIER;
      const normalize = isPlainObject$3(options.processor) && isFunction$1(options.processor.normalize)
          ? options.processor.normalize
          : DEFAULT_NORMALIZE;
      const interpolate = isPlainObject$3(options.processor) &&
          isFunction$1(options.processor.interpolate)
          ? options.processor.interpolate
          : DEFAULT_INTERPOLATE;
      const type = isPlainObject$3(options.processor) && isString(options.processor.type)
          ? options.processor.type
          : DEFAULT_MESSAGE_DATA_TYPE;
      const linked = (key, ...args) => {
          const [arg1, arg2] = args;
          let type = 'text';
          let modifier = '';
          if (args.length === 1) {
              if (isObject$4(arg1)) {
                  modifier = arg1.modifier || modifier;
                  type = arg1.type || type;
              }
              else if (isString(arg1)) {
                  modifier = arg1 || modifier;
              }
          }
          else if (args.length === 2) {
              if (isString(arg1)) {
                  modifier = arg1 || modifier;
              }
              if (isString(arg2)) {
                  type = arg2 || type;
              }
          }
          const ret = message(key)(ctx);
          const msg = 
          // The message in vnode resolved with linked are returned as an array by processor.nomalize
          type === 'vnode' && isArray$1(ret) && modifier
              ? ret[0]
              : ret;
          return modifier ? _modifier(modifier)(msg, type) : msg;
      };
      const ctx = {
          ["list" /* HelperNameMap.LIST */]: list,
          ["named" /* HelperNameMap.NAMED */]: named,
          ["plural" /* HelperNameMap.PLURAL */]: plural,
          ["linked" /* HelperNameMap.LINKED */]: linked,
          ["message" /* HelperNameMap.MESSAGE */]: message,
          ["type" /* HelperNameMap.TYPE */]: type,
          ["interpolate" /* HelperNameMap.INTERPOLATE */]: interpolate,
          ["normalize" /* HelperNameMap.NORMALIZE */]: normalize,
          ["values" /* HelperNameMap.VALUES */]: assign$2(create(), _list, _named)
      };
      return ctx;
  }

  let devtools = null;
  function setDevToolsHook(hook) {
      devtools = hook;
  }
  function initI18nDevTools(i18n, version, meta) {
      // TODO: queue if devtools is undefined
      devtools &&
          devtools.emit("i18n:init" /* IntlifyDevToolsHooks.I18nInit */, {
              timestamp: Date.now(),
              i18n,
              version,
              meta
          });
  }
  const translateDevTools = /* #__PURE__*/ createDevToolsHook("function:translate" /* IntlifyDevToolsHooks.FunctionTranslate */);
  function createDevToolsHook(hook) {
      return (payloads) => devtools && devtools.emit(hook, payloads);
  }

  const code$1$1 = CompileWarnCodes.__EXTEND_POINT__;
  const inc$1$1 = incrementer(code$1$1);
  const CoreWarnCodes = {
      NOT_FOUND_KEY: code$1$1, // 2
      FALLBACK_TO_TRANSLATE: inc$1$1(), // 3
      CANNOT_FORMAT_NUMBER: inc$1$1(), // 4
      FALLBACK_TO_NUMBER_FORMAT: inc$1$1(), // 5
      CANNOT_FORMAT_DATE: inc$1$1(), // 6
      FALLBACK_TO_DATE_FORMAT: inc$1$1(), // 7
      EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: inc$1$1(), // 8
      __EXTEND_POINT__: inc$1$1() // 9
  };

  const code$2 = CompileErrorCodes.__EXTEND_POINT__;
  const inc$2 = incrementer(code$2);
  const CoreErrorCodes = {
      INVALID_ARGUMENT: code$2, // 17
      INVALID_DATE_ARGUMENT: inc$2(), // 18
      INVALID_ISO_DATE_ARGUMENT: inc$2(), // 19
      NOT_SUPPORT_NON_STRING_MESSAGE: inc$2(), // 20
      NOT_SUPPORT_LOCALE_PROMISE_VALUE: inc$2(), // 21
      NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: inc$2(), // 22
      NOT_SUPPORT_LOCALE_TYPE: inc$2(), // 23
      __EXTEND_POINT__: inc$2() // 24
  };
  function createCoreError(code) {
      return createCompileError(code, null, undefined);
  }

  /** @internal */
  function getLocale(context, options) {
      return options.locale != null
          ? resolveLocale(options.locale)
          : resolveLocale(context.locale);
  }
  let _resolveLocale;
  /** @internal */
  function resolveLocale(locale) {
      if (isString(locale)) {
          return locale;
      }
      else {
          if (isFunction$1(locale)) {
              if (locale.resolvedOnce && _resolveLocale != null) {
                  return _resolveLocale;
              }
              else if (locale.constructor.name === 'Function') {
                  const resolve = locale();
                  if (isPromise(resolve)) {
                      throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
                  }
                  return (_resolveLocale = resolve);
              }
              else {
                  throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
              }
          }
          else {
              throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_TYPE);
          }
      }
  }
  /**
   * Fallback with simple implemenation
   *
   * @remarks
   * A fallback locale function implemented with a simple fallback algorithm.
   *
   * Basically, it returns the value as specified in the `fallbackLocale` props, and is processed with the fallback inside intlify.
   *
   * @param ctx - A {@link CoreContext | context}
   * @param fallback - A {@link FallbackLocale | fallback locale}
   * @param start - A starting {@link Locale | locale}
   *
   * @returns Fallback locales
   *
   * @VueI18nGeneral
   */
  function fallbackWithSimple(ctx, fallback, start // eslint-disable-line @typescript-eslint/no-unused-vars
  ) {
      // prettier-ignore
      return [...new Set([
              start,
              ...(isArray$1(fallback)
                  ? fallback
                  : isObject$4(fallback)
                      ? Object.keys(fallback)
                      : isString(fallback)
                          ? [fallback]
                          : [start])
          ])];
  }
  /**
   * Fallback with locale chain
   *
   * @remarks
   * A fallback locale function implemented with a fallback chain algorithm. It's used in VueI18n as default.
   *
   * @param ctx - A {@link CoreContext | context}
   * @param fallback - A {@link FallbackLocale | fallback locale}
   * @param start - A starting {@link Locale | locale}
   *
   * @returns Fallback locales
   *
   * @VueI18nSee [Fallbacking](../guide/essentials/fallback)
   *
   * @VueI18nGeneral
   */
  function fallbackWithLocaleChain(ctx, fallback, start) {
      const startLocale = isString(start) ? start : DEFAULT_LOCALE;
      const context = ctx;
      if (!context.__localeChainCache) {
          context.__localeChainCache = new Map();
      }
      let chain = context.__localeChainCache.get(startLocale);
      if (!chain) {
          chain = [];
          // first block defined by start
          let block = [start];
          // while any intervening block found
          while (isArray$1(block)) {
              block = appendBlockToChain(chain, block, fallback);
          }
          // prettier-ignore
          // last block defined by default
          const defaults = isArray$1(fallback) || !isPlainObject$3(fallback)
              ? fallback
              : fallback['default']
                  ? fallback['default']
                  : null;
          // convert defaults to array
          block = isString(defaults) ? [defaults] : defaults;
          if (isArray$1(block)) {
              appendBlockToChain(chain, block, false);
          }
          context.__localeChainCache.set(startLocale, chain);
      }
      return chain;
  }
  function appendBlockToChain(chain, block, blocks) {
      let follow = true;
      for (let i = 0; i < block.length && isBoolean(follow); i++) {
          const locale = block[i];
          if (isString(locale)) {
              follow = appendLocaleToChain(chain, block[i], blocks);
          }
      }
      return follow;
  }
  function appendLocaleToChain(chain, locale, blocks) {
      let follow;
      const tokens = locale.split('-');
      do {
          const target = tokens.join('-');
          follow = appendItemToChain(chain, target, blocks);
          tokens.splice(-1, 1);
      } while (tokens.length && follow === true);
      return follow;
  }
  function appendItemToChain(chain, target, blocks) {
      let follow = false;
      if (!chain.includes(target)) {
          follow = true;
          if (target) {
              follow = target[target.length - 1] !== '!';
              const locale = target.replace(/!/g, '');
              chain.push(locale);
              if ((isArray$1(blocks) || isPlainObject$3(blocks)) &&
                  blocks[locale] // eslint-disable-line @typescript-eslint/no-explicit-any
              ) {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  follow = blocks[locale];
              }
          }
      }
      return follow;
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  /**
   * Intlify core-base version
   * @internal
   */
  const VERSION$1 = '9.14.5';
  const NOT_REOSLVED = -1;
  const DEFAULT_LOCALE = 'en-US';
  const MISSING_RESOLVE_VALUE = '';
  const capitalize = (str) => `${str.charAt(0).toLocaleUpperCase()}${str.substr(1)}`;
  function getDefaultLinkedModifiers() {
      return {
          upper: (val, type) => {
              // prettier-ignore
              return type === 'text' && isString(val)
                  ? val.toUpperCase()
                  : type === 'vnode' && isObject$4(val) && '__v_isVNode' in val
                      ? val.children.toUpperCase()
                      : val;
          },
          lower: (val, type) => {
              // prettier-ignore
              return type === 'text' && isString(val)
                  ? val.toLowerCase()
                  : type === 'vnode' && isObject$4(val) && '__v_isVNode' in val
                      ? val.children.toLowerCase()
                      : val;
          },
          capitalize: (val, type) => {
              // prettier-ignore
              return (type === 'text' && isString(val)
                  ? capitalize(val)
                  : type === 'vnode' && isObject$4(val) && '__v_isVNode' in val
                      ? capitalize(val.children)
                      : val);
          }
      };
  }
  let _compiler;
  function registerMessageCompiler(compiler) {
      _compiler = compiler;
  }
  let _resolver;
  /**
   * Register the message resolver
   *
   * @param resolver - A {@link MessageResolver} function
   *
   * @VueI18nGeneral
   */
  function registerMessageResolver(resolver) {
      _resolver = resolver;
  }
  let _fallbacker;
  /**
   * Register the locale fallbacker
   *
   * @param fallbacker - A {@link LocaleFallbacker} function
   *
   * @VueI18nGeneral
   */
  function registerLocaleFallbacker(fallbacker) {
      _fallbacker = fallbacker;
  }
  // Additional Meta for Intlify DevTools
  let _additionalMeta =  null;
  /* #__NO_SIDE_EFFECTS__ */
  const setAdditionalMeta = (meta) => {
      _additionalMeta = meta;
  };
  /* #__NO_SIDE_EFFECTS__ */
  const getAdditionalMeta = () => _additionalMeta;
  let _fallbackContext = null;
  const setFallbackContext = (context) => {
      _fallbackContext = context;
  };
  const getFallbackContext = () => _fallbackContext;
  // ID for CoreContext
  let _cid = 0;
  function createCoreContext(options = {}) {
      // setup options
      const onWarn = isFunction$1(options.onWarn) ? options.onWarn : warn;
      const version = isString(options.version) ? options.version : VERSION$1;
      const locale = isString(options.locale) || isFunction$1(options.locale)
          ? options.locale
          : DEFAULT_LOCALE;
      const _locale = isFunction$1(locale) ? DEFAULT_LOCALE : locale;
      const fallbackLocale = isArray$1(options.fallbackLocale) ||
          isPlainObject$3(options.fallbackLocale) ||
          isString(options.fallbackLocale) ||
          options.fallbackLocale === false
          ? options.fallbackLocale
          : _locale;
      const messages = isPlainObject$3(options.messages)
          ? options.messages
          : createResources(_locale);
      const datetimeFormats = isPlainObject$3(options.datetimeFormats)
              ? options.datetimeFormats
              : createResources(_locale)
          ;
      const numberFormats = isPlainObject$3(options.numberFormats)
              ? options.numberFormats
              : createResources(_locale)
          ;
      const modifiers = assign$2(create(), options.modifiers, getDefaultLinkedModifiers());
      const pluralRules = options.pluralRules || create();
      const missing = isFunction$1(options.missing) ? options.missing : null;
      const missingWarn = isBoolean(options.missingWarn) || isRegExp(options.missingWarn)
          ? options.missingWarn
          : true;
      const fallbackWarn = isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn)
          ? options.fallbackWarn
          : true;
      const fallbackFormat = !!options.fallbackFormat;
      const unresolving = !!options.unresolving;
      const postTranslation = isFunction$1(options.postTranslation)
          ? options.postTranslation
          : null;
      const processor = isPlainObject$3(options.processor) ? options.processor : null;
      const warnHtmlMessage = isBoolean(options.warnHtmlMessage)
          ? options.warnHtmlMessage
          : true;
      const escapeParameter = !!options.escapeParameter;
      const messageCompiler = isFunction$1(options.messageCompiler)
          ? options.messageCompiler
          : _compiler;
      const messageResolver = isFunction$1(options.messageResolver)
          ? options.messageResolver
          : _resolver || resolveWithKeyValue;
      const localeFallbacker = isFunction$1(options.localeFallbacker)
          ? options.localeFallbacker
          : _fallbacker || fallbackWithSimple;
      const fallbackContext = isObject$4(options.fallbackContext)
          ? options.fallbackContext
          : undefined;
      // setup internal options
      const internalOptions = options;
      const __datetimeFormatters = isObject$4(internalOptions.__datetimeFormatters)
              ? internalOptions.__datetimeFormatters
              : new Map()
          ;
      const __numberFormatters = isObject$4(internalOptions.__numberFormatters)
              ? internalOptions.__numberFormatters
              : new Map()
          ;
      const __meta = isObject$4(internalOptions.__meta) ? internalOptions.__meta : {};
      _cid++;
      const context = {
          version,
          cid: _cid,
          locale,
          fallbackLocale,
          messages,
          modifiers,
          pluralRules,
          missing,
          missingWarn,
          fallbackWarn,
          fallbackFormat,
          unresolving,
          postTranslation,
          processor,
          warnHtmlMessage,
          escapeParameter,
          messageCompiler,
          messageResolver,
          localeFallbacker,
          fallbackContext,
          onWarn,
          __meta
      };
      {
          context.datetimeFormats = datetimeFormats;
          context.numberFormats = numberFormats;
          context.__datetimeFormatters = __datetimeFormatters;
          context.__numberFormatters = __numberFormatters;
      }
      // NOTE: experimental !!
      if (__INTLIFY_PROD_DEVTOOLS__) {
          initI18nDevTools(context, version, __meta);
      }
      return context;
  }
  const createResources = (locale) => ({ [locale]: create() });
  /** @internal */
  function handleMissing(context, key, locale, missingWarn, type) {
      const { missing, onWarn } = context;
      if (missing !== null) {
          const ret = missing(context, locale, key, type);
          return isString(ret) ? ret : key;
      }
      else {
          return key;
      }
  }
  /** @internal */
  function updateFallbackLocale(ctx, locale, fallback) {
      const context = ctx;
      context.__localeChainCache = new Map();
      ctx.localeFallbacker(ctx, fallback, locale);
  }
  /** @internal */
  function isAlmostSameLocale(locale, compareLocale) {
      if (locale === compareLocale)
          return false;
      return locale.split('-')[0] === compareLocale.split('-')[0];
  }
  /** @internal */
  function isImplicitFallback(targetLocale, locales) {
      const index = locales.indexOf(targetLocale);
      if (index === -1) {
          return false;
      }
      for (let i = index + 1; i < locales.length; i++) {
          if (isAlmostSameLocale(targetLocale, locales[i])) {
              return true;
          }
      }
      return false;
  }
  /* eslint-enable @typescript-eslint/no-explicit-any */

  function format(ast) {
      const msg = (ctx) => formatParts(ctx, ast);
      return msg;
  }
  function formatParts(ctx, ast) {
      const body = resolveBody(ast);
      if (body == null) {
          throw createUnhandleNodeError(0 /* NodeTypes.Resource */);
      }
      const type = resolveType(body);
      if (type === 1 /* NodeTypes.Plural */) {
          const plural = body;
          const cases = resolveCases(plural);
          return ctx.plural(cases.reduce((messages, c) => [
              ...messages,
              formatMessageParts(ctx, c)
          ], []));
      }
      else {
          return formatMessageParts(ctx, body);
      }
  }
  function formatMessageParts(ctx, node) {
      const static_ = resolveStatic(node);
      if (static_ != null) {
          return ctx.type === 'text'
              ? static_
              : ctx.normalize([static_]);
      }
      else {
          const messages = resolveItems(node).reduce((acm, c) => [...acm, formatMessagePart(ctx, c)], []);
          return ctx.normalize(messages);
      }
  }
  function formatMessagePart(ctx, node) {
      const type = resolveType(node);
      switch (type) {
          case 3 /* NodeTypes.Text */: {
              return resolveValue$1(node, type);
          }
          case 9 /* NodeTypes.Literal */: {
              return resolveValue$1(node, type);
          }
          case 4 /* NodeTypes.Named */: {
              const named = node;
              if (hasOwn(named, 'k') && named.k) {
                  return ctx.interpolate(ctx.named(named.k));
              }
              if (hasOwn(named, 'key') && named.key) {
                  return ctx.interpolate(ctx.named(named.key));
              }
              throw createUnhandleNodeError(type);
          }
          case 5 /* NodeTypes.List */: {
              const list = node;
              if (hasOwn(list, 'i') && isNumber(list.i)) {
                  return ctx.interpolate(ctx.list(list.i));
              }
              if (hasOwn(list, 'index') && isNumber(list.index)) {
                  return ctx.interpolate(ctx.list(list.index));
              }
              throw createUnhandleNodeError(type);
          }
          case 6 /* NodeTypes.Linked */: {
              const linked = node;
              const modifier = resolveLinkedModifier(linked);
              const key = resolveLinkedKey(linked);
              return ctx.linked(formatMessagePart(ctx, key), modifier ? formatMessagePart(ctx, modifier) : undefined, ctx.type);
          }
          case 7 /* NodeTypes.LinkedKey */: {
              return resolveValue$1(node, type);
          }
          case 8 /* NodeTypes.LinkedModifier */: {
              return resolveValue$1(node, type);
          }
          default:
              throw new Error(`unhandled node on format message part: ${type}`);
      }
  }
  const defaultOnCacheKey = (message) => message;
  let compileCache = create();
  function baseCompile(message, options = {}) {
      // error detecting on compile
      let detectError = false;
      const onError = options.onError || defaultOnError;
      options.onError = (err) => {
          detectError = true;
          onError(err);
      };
      // compile with mesasge-compiler
      return { ...baseCompile$1(message, options), detectError };
  }
  /* #__NO_SIDE_EFFECTS__ */
  const compileToFunction = (message, context) => {
      if (!isString(message)) {
          throw createCoreError(CoreErrorCodes.NOT_SUPPORT_NON_STRING_MESSAGE);
      }
      {
          // check HTML message
          isBoolean(context.warnHtmlMessage)
              ? context.warnHtmlMessage
              : true;
          // check caches
          const onCacheKey = context.onCacheKey || defaultOnCacheKey;
          const cacheKey = onCacheKey(message);
          const cached = compileCache[cacheKey];
          if (cached) {
              return cached;
          }
          // compile
          const { code, detectError } = baseCompile(message, context);
          // evaluate function
          const msg = new Function(`return ${code}`)();
          // if occurred compile error, don't cache
          return !detectError
              ? (compileCache[cacheKey] = msg)
              : msg;
      }
  };
  function compile(message, context) {
      if (((__INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__)) &&
          isString(message)) {
          // check HTML message
          isBoolean(context.warnHtmlMessage)
              ? context.warnHtmlMessage
              : true;
          // check caches
          const onCacheKey = context.onCacheKey || defaultOnCacheKey;
          const cacheKey = onCacheKey(message);
          const cached = compileCache[cacheKey];
          if (cached) {
              return cached;
          }
          // compile with JIT mode
          const { ast, detectError } = baseCompile(message, {
              ...context,
              location: ("production" !== 'production'),
              jit: true
          });
          // compose message function from AST
          const msg = format(ast);
          // if occurred compile error, don't cache
          return !detectError
              ? (compileCache[cacheKey] = msg)
              : msg;
      }
      else {
          // AST case (passed from bundler)
          const cacheKey = message.cacheKey;
          if (cacheKey) {
              const cached = compileCache[cacheKey];
              if (cached) {
                  return cached;
              }
              // compose message function from message (AST)
              return (compileCache[cacheKey] =
                  format(message));
          }
          else {
              return format(message);
          }
      }
  }

  const NOOP_MESSAGE_FUNCTION = () => '';
  const isMessageFunction = (val) => isFunction$1(val);
  // implementation of `translate` function
  function translate(context, ...args) {
      const { fallbackFormat, postTranslation, unresolving, messageCompiler, fallbackLocale, messages } = context;
      const [key, options] = parseTranslateArgs(...args);
      const missingWarn = isBoolean(options.missingWarn)
          ? options.missingWarn
          : context.missingWarn;
      const fallbackWarn = isBoolean(options.fallbackWarn)
          ? options.fallbackWarn
          : context.fallbackWarn;
      const escapeParameter = isBoolean(options.escapeParameter)
          ? options.escapeParameter
          : context.escapeParameter;
      const resolvedMessage = !!options.resolvedMessage;
      // prettier-ignore
      const defaultMsgOrKey = isString(options.default) || isBoolean(options.default) // default by function option
          ? !isBoolean(options.default)
              ? options.default
              : (!messageCompiler ? () => key : key)
          : fallbackFormat // default by `fallbackFormat` option
              ? (!messageCompiler ? () => key : key)
              : '';
      const enableDefaultMsg = fallbackFormat || defaultMsgOrKey !== '';
      const locale = getLocale(context, options);
      // escape params
      escapeParameter && escapeParams(options);
      // resolve message format
      // eslint-disable-next-line prefer-const
      let [formatScope, targetLocale, message] = !resolvedMessage
          ? resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn)
          : [
              key,
              locale,
              messages[locale] || create()
          ];
      // NOTE:
      //  Fix to work around `ssrTransfrom` bug in Vite.
      //  https://github.com/vitejs/vite/issues/4306
      //  To get around this, use temporary variables.
      //  https://github.com/nuxt/framework/issues/1461#issuecomment-954606243
      let format = formatScope;
      // if you use default message, set it as message format!
      let cacheBaseKey = key;
      if (!resolvedMessage &&
          !(isString(format) ||
              isMessageAST(format) ||
              isMessageFunction(format))) {
          if (enableDefaultMsg) {
              format = defaultMsgOrKey;
              cacheBaseKey = format;
          }
      }
      // checking message format and target locale
      if (!resolvedMessage &&
          (!(isString(format) ||
              isMessageAST(format) ||
              isMessageFunction(format)) ||
              !isString(targetLocale))) {
          return unresolving ? NOT_REOSLVED : key;
      }
      // setup compile error detecting
      let occurred = false;
      const onError = () => {
          occurred = true;
      };
      // compile message format
      const msg = !isMessageFunction(format)
          ? compileMessageFormat(context, key, targetLocale, format, cacheBaseKey, onError)
          : format;
      // if occurred compile error, return the message format
      if (occurred) {
          return format;
      }
      // evaluate message with context
      const ctxOptions = getMessageContextOptions(context, targetLocale, message, options);
      const msgContext = createMessageContext(ctxOptions);
      const messaged = evaluateMessage(context, msg, msgContext);
      // if use post translation option, proceed it with handler
      let ret = postTranslation
          ? postTranslation(messaged, key)
          : messaged;
      // apply HTML sanitization for security
      if (escapeParameter && isString(ret)) {
          ret = sanitizeTranslatedHtml(ret);
      }
      // NOTE: experimental !!
      if (__INTLIFY_PROD_DEVTOOLS__) {
          // prettier-ignore
          const payloads = {
              timestamp: Date.now(),
              key: isString(key)
                  ? key
                  : isMessageFunction(format)
                      ? format.key
                      : '',
              locale: targetLocale || (isMessageFunction(format)
                  ? format.locale
                  : ''),
              format: isString(format)
                  ? format
                  : isMessageFunction(format)
                      ? format.source
                      : '',
              message: ret
          };
          payloads.meta = assign$2({}, context.__meta, getAdditionalMeta() || {});
          translateDevTools(payloads);
      }
      return ret;
  }
  function escapeParams(options) {
      if (isArray$1(options.list)) {
          options.list = options.list.map(item => isString(item) ? escapeHtml(item) : item);
      }
      else if (isObject$4(options.named)) {
          Object.keys(options.named).forEach(key => {
              if (isString(options.named[key])) {
                  options.named[key] = escapeHtml(options.named[key]);
              }
          });
      }
  }
  function resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) {
      const { messages, onWarn, messageResolver: resolveValue, localeFallbacker } = context;
      const locales = localeFallbacker(context, fallbackLocale, locale); // eslint-disable-line @typescript-eslint/no-explicit-any
      let message = create();
      let targetLocale;
      let format = null;
      const type = 'translate';
      for (let i = 0; i < locales.length; i++) {
          targetLocale = locales[i];
          message =
              messages[targetLocale] || create();
          if ((format = resolveValue(message, key)) === null) {
              // if null, resolve with object key path
              format = message[key]; // eslint-disable-line @typescript-eslint/no-explicit-any
          }
          if (isString(format) || isMessageAST(format) || isMessageFunction(format)) {
              break;
          }
          if (!isImplicitFallback(targetLocale, locales)) {
              const missingRet = handleMissing(context, // eslint-disable-line @typescript-eslint/no-explicit-any
              key, targetLocale, missingWarn, type);
              if (missingRet !== key) {
                  format = missingRet;
              }
          }
      }
      return [format, targetLocale, message];
  }
  function compileMessageFormat(context, key, targetLocale, format, cacheBaseKey, onError) {
      const { messageCompiler, warnHtmlMessage } = context;
      if (isMessageFunction(format)) {
          const msg = format;
          msg.locale = msg.locale || targetLocale;
          msg.key = msg.key || key;
          return msg;
      }
      if (messageCompiler == null) {
          const msg = (() => format);
          msg.locale = targetLocale;
          msg.key = key;
          return msg;
      }
      const msg = messageCompiler(format, getCompileContext(context, targetLocale, cacheBaseKey, format, warnHtmlMessage, onError));
      msg.locale = targetLocale;
      msg.key = key;
      msg.source = format;
      return msg;
  }
  function evaluateMessage(context, msg, msgCtx) {
      const messaged = msg(msgCtx);
      return messaged;
  }
  /** @internal */
  function parseTranslateArgs(...args) {
      const [arg1, arg2, arg3] = args;
      const options = create();
      if (!isString(arg1) &&
          !isNumber(arg1) &&
          !isMessageFunction(arg1) &&
          !isMessageAST(arg1)) {
          throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
      }
      // prettier-ignore
      const key = isNumber(arg1)
          ? String(arg1)
          : isMessageFunction(arg1)
              ? arg1
              : arg1;
      if (isNumber(arg2)) {
          options.plural = arg2;
      }
      else if (isString(arg2)) {
          options.default = arg2;
      }
      else if (isPlainObject$3(arg2) && !isEmptyObject(arg2)) {
          options.named = arg2;
      }
      else if (isArray$1(arg2)) {
          options.list = arg2;
      }
      if (isNumber(arg3)) {
          options.plural = arg3;
      }
      else if (isString(arg3)) {
          options.default = arg3;
      }
      else if (isPlainObject$3(arg3)) {
          assign$2(options, arg3);
      }
      return [key, options];
  }
  function getCompileContext(context, locale, key, source, warnHtmlMessage, onError) {
      return {
          locale,
          key,
          warnHtmlMessage,
          onError: (err) => {
              onError && onError(err);
              {
                  throw err;
              }
          },
          onCacheKey: (source) => generateFormatCacheKey(locale, key, source)
      };
  }
  function getMessageContextOptions(context, locale, message, options) {
      const { modifiers, pluralRules, messageResolver: resolveValue, fallbackLocale, fallbackWarn, missingWarn, fallbackContext } = context;
      const resolveMessage = (key) => {
          let val = resolveValue(message, key);
          // fallback to root context
          if (val == null && fallbackContext) {
              const [, , message] = resolveMessageFormat(fallbackContext, key, locale, fallbackLocale, fallbackWarn, missingWarn);
              val = resolveValue(message, key);
          }
          if (isString(val) || isMessageAST(val)) {
              let occurred = false;
              const onError = () => {
                  occurred = true;
              };
              const msg = compileMessageFormat(context, key, locale, val, key, onError);
              return !occurred
                  ? msg
                  : NOOP_MESSAGE_FUNCTION;
          }
          else if (isMessageFunction(val)) {
              return val;
          }
          else {
              // TODO: should be implemented warning message
              return NOOP_MESSAGE_FUNCTION;
          }
      };
      const ctxOptions = {
          locale,
          modifiers,
          pluralRules,
          messages: resolveMessage
      };
      if (context.processor) {
          ctxOptions.processor = context.processor;
      }
      if (options.list) {
          ctxOptions.list = options.list;
      }
      if (options.named) {
          ctxOptions.named = options.named;
      }
      if (isNumber(options.plural)) {
          ctxOptions.pluralIndex = options.plural;
      }
      return ctxOptions;
  }

  // implementation of `datetime` function
  function datetime(context, ...args) {
      const { datetimeFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
      const { __datetimeFormatters } = context;
      const [key, value, options, overrides] = parseDateTimeArgs(...args);
      const missingWarn = isBoolean(options.missingWarn)
          ? options.missingWarn
          : context.missingWarn;
      isBoolean(options.fallbackWarn)
          ? options.fallbackWarn
          : context.fallbackWarn;
      const part = !!options.part;
      const locale = getLocale(context, options);
      const locales = localeFallbacker(context, // eslint-disable-line @typescript-eslint/no-explicit-any
      fallbackLocale, locale);
      if (!isString(key) || key === '') {
          return new Intl.DateTimeFormat(locale, overrides).format(value);
      }
      // resolve format
      let datetimeFormat = {};
      let targetLocale;
      let format = null;
      const type = 'datetime format';
      for (let i = 0; i < locales.length; i++) {
          targetLocale = locales[i];
          datetimeFormat =
              datetimeFormats[targetLocale] || {};
          format = datetimeFormat[key];
          if (isPlainObject$3(format))
              break;
          handleMissing(context, key, targetLocale, missingWarn, type); // eslint-disable-line @typescript-eslint/no-explicit-any
      }
      // checking format and target locale
      if (!isPlainObject$3(format) || !isString(targetLocale)) {
          return unresolving ? NOT_REOSLVED : key;
      }
      let id = `${targetLocale}__${key}`;
      if (!isEmptyObject(overrides)) {
          id = `${id}__${JSON.stringify(overrides)}`;
      }
      let formatter = __datetimeFormatters.get(id);
      if (!formatter) {
          formatter = new Intl.DateTimeFormat(targetLocale, assign$2({}, format, overrides));
          __datetimeFormatters.set(id, formatter);
      }
      return !part ? formatter.format(value) : formatter.formatToParts(value);
  }
  /** @internal */
  const DATETIME_FORMAT_OPTIONS_KEYS = [
      'localeMatcher',
      'weekday',
      'era',
      'year',
      'month',
      'day',
      'hour',
      'minute',
      'second',
      'timeZoneName',
      'formatMatcher',
      'hour12',
      'timeZone',
      'dateStyle',
      'timeStyle',
      'calendar',
      'dayPeriod',
      'numberingSystem',
      'hourCycle',
      'fractionalSecondDigits'
  ];
  /** @internal */
  function parseDateTimeArgs(...args) {
      const [arg1, arg2, arg3, arg4] = args;
      const options = create();
      let overrides = create();
      let value;
      if (isString(arg1)) {
          // Only allow ISO strings - other date formats are often supported,
          // but may cause different results in different browsers.
          const matches = arg1.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
          if (!matches) {
              throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
          }
          // Some browsers can not parse the iso datetime separated by space,
          // this is a compromise solution by replace the 'T'/' ' with 'T'
          const dateTime = matches[3]
              ? matches[3].trim().startsWith('T')
                  ? `${matches[1].trim()}${matches[3].trim()}`
                  : `${matches[1].trim()}T${matches[3].trim()}`
              : matches[1].trim();
          value = new Date(dateTime);
          try {
              // This will fail if the date is not valid
              value.toISOString();
          }
          catch (e) {
              throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
          }
      }
      else if (isDate(arg1)) {
          if (isNaN(arg1.getTime())) {
              throw createCoreError(CoreErrorCodes.INVALID_DATE_ARGUMENT);
          }
          value = arg1;
      }
      else if (isNumber(arg1)) {
          value = arg1;
      }
      else {
          throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
      }
      if (isString(arg2)) {
          options.key = arg2;
      }
      else if (isPlainObject$3(arg2)) {
          Object.keys(arg2).forEach(key => {
              if (DATETIME_FORMAT_OPTIONS_KEYS.includes(key)) {
                  overrides[key] = arg2[key];
              }
              else {
                  options[key] = arg2[key];
              }
          });
      }
      if (isString(arg3)) {
          options.locale = arg3;
      }
      else if (isPlainObject$3(arg3)) {
          overrides = arg3;
      }
      if (isPlainObject$3(arg4)) {
          overrides = arg4;
      }
      return [options.key || '', value, options, overrides];
  }
  /** @internal */
  function clearDateTimeFormat(ctx, locale, format) {
      const context = ctx;
      for (const key in format) {
          const id = `${locale}__${key}`;
          if (!context.__datetimeFormatters.has(id)) {
              continue;
          }
          context.__datetimeFormatters.delete(id);
      }
  }

  // implementation of `number` function
  function number(context, ...args) {
      const { numberFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
      const { __numberFormatters } = context;
      const [key, value, options, overrides] = parseNumberArgs(...args);
      const missingWarn = isBoolean(options.missingWarn)
          ? options.missingWarn
          : context.missingWarn;
      isBoolean(options.fallbackWarn)
          ? options.fallbackWarn
          : context.fallbackWarn;
      const part = !!options.part;
      const locale = getLocale(context, options);
      const locales = localeFallbacker(context, // eslint-disable-line @typescript-eslint/no-explicit-any
      fallbackLocale, locale);
      if (!isString(key) || key === '') {
          return new Intl.NumberFormat(locale, overrides).format(value);
      }
      // resolve format
      let numberFormat = {};
      let targetLocale;
      let format = null;
      const type = 'number format';
      for (let i = 0; i < locales.length; i++) {
          targetLocale = locales[i];
          numberFormat =
              numberFormats[targetLocale] || {};
          format = numberFormat[key];
          if (isPlainObject$3(format))
              break;
          handleMissing(context, key, targetLocale, missingWarn, type); // eslint-disable-line @typescript-eslint/no-explicit-any
      }
      // checking format and target locale
      if (!isPlainObject$3(format) || !isString(targetLocale)) {
          return unresolving ? NOT_REOSLVED : key;
      }
      let id = `${targetLocale}__${key}`;
      if (!isEmptyObject(overrides)) {
          id = `${id}__${JSON.stringify(overrides)}`;
      }
      let formatter = __numberFormatters.get(id);
      if (!formatter) {
          formatter = new Intl.NumberFormat(targetLocale, assign$2({}, format, overrides));
          __numberFormatters.set(id, formatter);
      }
      return !part ? formatter.format(value) : formatter.formatToParts(value);
  }
  /** @internal */
  const NUMBER_FORMAT_OPTIONS_KEYS = [
      'localeMatcher',
      'style',
      'currency',
      'currencyDisplay',
      'currencySign',
      'useGrouping',
      'minimumIntegerDigits',
      'minimumFractionDigits',
      'maximumFractionDigits',
      'minimumSignificantDigits',
      'maximumSignificantDigits',
      'compactDisplay',
      'notation',
      'signDisplay',
      'unit',
      'unitDisplay',
      'roundingMode',
      'roundingPriority',
      'roundingIncrement',
      'trailingZeroDisplay'
  ];
  /** @internal */
  function parseNumberArgs(...args) {
      const [arg1, arg2, arg3, arg4] = args;
      const options = create();
      let overrides = create();
      if (!isNumber(arg1)) {
          throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
      }
      const value = arg1;
      if (isString(arg2)) {
          options.key = arg2;
      }
      else if (isPlainObject$3(arg2)) {
          Object.keys(arg2).forEach(key => {
              if (NUMBER_FORMAT_OPTIONS_KEYS.includes(key)) {
                  overrides[key] = arg2[key];
              }
              else {
                  options[key] = arg2[key];
              }
          });
      }
      if (isString(arg3)) {
          options.locale = arg3;
      }
      else if (isPlainObject$3(arg3)) {
          overrides = arg3;
      }
      if (isPlainObject$3(arg4)) {
          overrides = arg4;
      }
      return [options.key || '', value, options, overrides];
  }
  /** @internal */
  function clearNumberFormat(ctx, locale, format) {
      const context = ctx;
      for (const key in format) {
          const id = `${locale}__${key}`;
          if (!context.__numberFormatters.has(id)) {
              continue;
          }
          context.__numberFormatters.delete(id);
      }
  }

  {
      initFeatureFlags$1();
  }

  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : {};
  }
  const isProxyAvailable = typeof Proxy === "function";

  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";

  let supported;
  let perf;
  function isPerformanceSupported() {
    var _a;
    if (supported !== void 0) {
      return supported;
    }
    if (typeof window !== "undefined" && window.performance) {
      supported = true;
      perf = window.performance;
    } else if (typeof globalThis !== "undefined" && ((_a = globalThis.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
      supported = true;
      perf = globalThis.perf_hooks.performance;
    } else {
      supported = false;
    }
    return supported;
  }
  function now() {
    return isPerformanceSupported() ? perf.now() : Date.now();
  }

  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = Object.assign({}, defaultSettings);
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e) {
          }
          currentSettings = value;
        },
        now() {
          return now();
        }
      };
      if (hook) {
        hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
          if (pluginId === this.plugin.id) {
            this.fallbacks.setSettings(value);
          }
        });
      }
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }

  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const descriptor = pluginDescriptor;
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor: descriptor,
        setupFn,
        proxy
      });
      if (proxy) {
        setupFn(proxy.proxiedTarget);
      }
    }
  }

  /*!
    * vue-i18n v9.14.5
    * (c) 2025 kazuya kawaguchi
    * Released under the MIT License.
    */

  /**
   * Vue I18n Version
   *
   * @remarks
   * Semver format. Same format as the package.json `version` field.
   *
   * @VueI18nGeneral
   */
  const VERSION = '9.14.5';
  /**
   * This is only called in esm-bundler builds.
   * istanbul-ignore-next
   */
  function initFeatureFlags() {
      if (typeof __VUE_I18N_FULL_INSTALL__ !== 'boolean') {
          getGlobalThis().__VUE_I18N_FULL_INSTALL__ = true;
      }
      if (typeof __VUE_I18N_LEGACY_API__ !== 'boolean') {
          getGlobalThis().__VUE_I18N_LEGACY_API__ = true;
      }
      if (typeof __INTLIFY_JIT_COMPILATION__ !== 'boolean') {
          getGlobalThis().__INTLIFY_JIT_COMPILATION__ = false;
      }
      if (typeof __INTLIFY_DROP_MESSAGE_COMPILER__ !== 'boolean') {
          getGlobalThis().__INTLIFY_DROP_MESSAGE_COMPILER__ = false;
      }
      if (typeof __INTLIFY_PROD_DEVTOOLS__ !== 'boolean') {
          getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
      }
  }

  const code$1 = CoreWarnCodes.__EXTEND_POINT__;
  const inc$1 = incrementer(code$1);
  ({
      FALLBACK_TO_ROOT: code$1, // 9
      NOT_SUPPORTED_PRESERVE: inc$1(), // 10
      NOT_SUPPORTED_FORMATTER: inc$1(), // 11
      NOT_SUPPORTED_PRESERVE_DIRECTIVE: inc$1(), // 12
      NOT_SUPPORTED_GET_CHOICE_INDEX: inc$1(), // 13
      COMPONENT_NAME_LEGACY_COMPATIBLE: inc$1(), // 14
      NOT_FOUND_PARENT_SCOPE: inc$1(), // 15
      IGNORE_OBJ_FLATTEN: inc$1(), // 16
      NOTICE_DROP_ALLOW_COMPOSITION: inc$1(), // 17
      NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG: inc$1() // 18
  });

  const code = CoreErrorCodes.__EXTEND_POINT__;
  const inc = incrementer(code);
  const I18nErrorCodes = {
      // composer module errors
      UNEXPECTED_RETURN_TYPE: code, // 24
      // legacy module errors
      INVALID_ARGUMENT: inc(), // 25
      // i18n module errors
      MUST_BE_CALL_SETUP_TOP: inc(), // 26
      NOT_INSTALLED: inc(), // 27
      NOT_AVAILABLE_IN_LEGACY_MODE: inc(), // 28
      // directive module errors
      REQUIRED_VALUE: inc(), // 29
      INVALID_VALUE: inc(), // 30
      // vue-devtools errors
      CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: inc(), // 31
      NOT_INSTALLED_WITH_PROVIDE: inc(), // 32
      // unexpected error
      UNEXPECTED_ERROR: inc(), // 33
      // not compatible legacy vue-i18n constructor
      NOT_COMPATIBLE_LEGACY_VUE_I18N: inc(), // 34
      // bridge support vue 2.x only
      BRIDGE_SUPPORT_VUE_2_ONLY: inc(), // 35
      // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
      MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: inc(), // 36
      // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
      NOT_AVAILABLE_COMPOSITION_IN_LEGACY: inc(), // 37
      // for enhancement
      __EXTEND_POINT__: inc() // 38
  };
  function createI18nError(code, ...args) {
      return createCompileError(code, null, undefined);
  }

  const TranslateVNodeSymbol = 
  /* #__PURE__*/ makeSymbol('__translateVNode');
  const DatetimePartsSymbol = /* #__PURE__*/ makeSymbol('__datetimeParts');
  const NumberPartsSymbol = /* #__PURE__*/ makeSymbol('__numberParts');
  const EnableEmitter = /* #__PURE__*/ makeSymbol('__enableEmitter');
  const DisableEmitter = /* #__PURE__*/ makeSymbol('__disableEmitter');
  const SetPluralRulesSymbol = makeSymbol('__setPluralRules');
  const InejctWithOptionSymbol = 
  /* #__PURE__*/ makeSymbol('__injectWithOption');
  const DisposeSymbol = /* #__PURE__*/ makeSymbol('__dispose');

  /* eslint-disable @typescript-eslint/no-explicit-any */
  /**
   * Transform flat json in obj to normal json in obj
   */
  function handleFlatJson(obj) {
      // check obj
      if (!isObject$4(obj)) {
          return obj;
      }
      if (isMessageAST(obj)) {
          return obj;
      }
      for (const key in obj) {
          // check key
          if (!hasOwn(obj, key)) {
              continue;
          }
          // handle for normal json
          if (!key.includes('.')) {
              // recursive process value if value is also a object
              if (isObject$4(obj[key])) {
                  handleFlatJson(obj[key]);
              }
          }
          // handle for flat json, transform to normal json
          else {
              // go to the last object
              const subKeys = key.split('.');
              const lastIndex = subKeys.length - 1;
              let currentObj = obj;
              let hasStringValue = false;
              for (let i = 0; i < lastIndex; i++) {
                  if (subKeys[i] === '__proto__') {
                      throw new Error(`unsafe key: ${subKeys[i]}`);
                  }
                  if (!(subKeys[i] in currentObj)) {
                      currentObj[subKeys[i]] = create();
                  }
                  if (!isObject$4(currentObj[subKeys[i]])) {
                      hasStringValue = true;
                      break;
                  }
                  currentObj = currentObj[subKeys[i]];
              }
              // update last object value, delete old property
              if (!hasStringValue) {
                  if (!isMessageAST(currentObj)) {
                      currentObj[subKeys[lastIndex]] = obj[key];
                      delete obj[key];
                  }
                  else {
                      /**
                       * NOTE:
                       * if the last object is a message AST and subKeys[lastIndex] has message AST prop key, ignore to copy and key deletion
                       */
                      if (!AST_NODE_PROPS_KEYS.includes(subKeys[lastIndex])) {
                          delete obj[key];
                      }
                  }
              }
              // recursive process value if value is also a object
              if (!isMessageAST(currentObj)) {
                  const target = currentObj[subKeys[lastIndex]];
                  if (isObject$4(target)) {
                      handleFlatJson(target);
                  }
              }
          }
      }
      return obj;
  }
  function getLocaleMessages(locale, options) {
      const { messages, __i18n, messageResolver, flatJson } = options;
      // prettier-ignore
      const ret = (isPlainObject$3(messages)
          ? messages
          : isArray$1(__i18n)
              ? create()
              : { [locale]: create() });
      // merge locale messages of i18n custom block
      if (isArray$1(__i18n)) {
          __i18n.forEach(custom => {
              if ('locale' in custom && 'resource' in custom) {
                  const { locale, resource } = custom;
                  if (locale) {
                      ret[locale] = ret[locale] || create();
                      deepCopy(resource, ret[locale]);
                  }
                  else {
                      deepCopy(resource, ret);
                  }
              }
              else {
                  isString(custom) && deepCopy(JSON.parse(custom), ret);
              }
          });
      }
      // handle messages for flat json
      if (messageResolver == null && flatJson) {
          for (const key in ret) {
              if (hasOwn(ret, key)) {
                  handleFlatJson(ret[key]);
              }
          }
      }
      return ret;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function getComponentOptions(instance) {
      return instance.type ;
  }
  function adjustI18nResources(gl, options, componentOptions // eslint-disable-line @typescript-eslint/no-explicit-any
  ) {
      let messages = isObject$4(options.messages)
          ? options.messages
          : create();
      if ('__i18nGlobal' in componentOptions) {
          messages = getLocaleMessages(gl.locale.value, {
              messages,
              __i18n: componentOptions.__i18nGlobal
          });
      }
      // merge locale messages
      const locales = Object.keys(messages);
      if (locales.length) {
          locales.forEach(locale => {
              gl.mergeLocaleMessage(locale, messages[locale]);
          });
      }
      {
          // merge datetime formats
          if (isObject$4(options.datetimeFormats)) {
              const locales = Object.keys(options.datetimeFormats);
              if (locales.length) {
                  locales.forEach(locale => {
                      gl.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
                  });
              }
          }
          // merge number formats
          if (isObject$4(options.numberFormats)) {
              const locales = Object.keys(options.numberFormats);
              if (locales.length) {
                  locales.forEach(locale => {
                      gl.mergeNumberFormat(locale, options.numberFormats[locale]);
                  });
              }
          }
      }
  }
  function createTextNode(key) {
      return vue.createVNode(vue.Text, null, key, 0)
          ;
  }
  /* eslint-enable @typescript-eslint/no-explicit-any */

  /* eslint-disable @typescript-eslint/no-explicit-any */
  // extend VNode interface
  const DEVTOOLS_META = '__INTLIFY_META__';
  const NOOP_RETURN_ARRAY = () => [];
  const NOOP_RETURN_FALSE = () => false;
  let composerID = 0;
  function defineCoreMissingHandler(missing) {
      return ((ctx, locale, key, type) => {
          return missing(locale, key, vue.getCurrentInstance() || undefined, type);
      });
  }
  // for Intlify DevTools
  /* #__NO_SIDE_EFFECTS__ */
  const getMetaInfo = () => {
      const instance = vue.getCurrentInstance();
      let meta = null; // eslint-disable-line @typescript-eslint/no-explicit-any
      return instance && (meta = getComponentOptions(instance)[DEVTOOLS_META])
          ? { [DEVTOOLS_META]: meta } // eslint-disable-line @typescript-eslint/no-explicit-any
          : null;
  };
  /**
   * Create composer interface factory
   *
   * @internal
   */
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  function createComposer(options = {}, VueI18nLegacy) {
      const { __root, __injectWithOption } = options;
      const _isGlobal = __root === undefined;
      const flatJson = options.flatJson;
      const _ref = inBrowser ? vue.ref : vue.shallowRef;
      const translateExistCompatible = !!options.translateExistCompatible;
      let _inheritLocale = isBoolean(options.inheritLocale)
          ? options.inheritLocale
          : true;
      const _locale = _ref(
      // prettier-ignore
      __root && _inheritLocale
          ? __root.locale.value
          : isString(options.locale)
              ? options.locale
              : DEFAULT_LOCALE);
      const _fallbackLocale = _ref(
      // prettier-ignore
      __root && _inheritLocale
          ? __root.fallbackLocale.value
          : isString(options.fallbackLocale) ||
              isArray$1(options.fallbackLocale) ||
              isPlainObject$3(options.fallbackLocale) ||
              options.fallbackLocale === false
              ? options.fallbackLocale
              : _locale.value);
      const _messages = _ref(getLocaleMessages(_locale.value, options));
      // prettier-ignore
      const _datetimeFormats = _ref(isPlainObject$3(options.datetimeFormats)
              ? options.datetimeFormats
              : { [_locale.value]: {} })
          ;
      // prettier-ignore
      const _numberFormats = _ref(isPlainObject$3(options.numberFormats)
              ? options.numberFormats
              : { [_locale.value]: {} })
          ;
      // warning suppress options
      // prettier-ignore
      let _missingWarn = __root
          ? __root.missingWarn
          : isBoolean(options.missingWarn) || isRegExp(options.missingWarn)
              ? options.missingWarn
              : true;
      // prettier-ignore
      let _fallbackWarn = __root
          ? __root.fallbackWarn
          : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn)
              ? options.fallbackWarn
              : true;
      // prettier-ignore
      let _fallbackRoot = __root
          ? __root.fallbackRoot
          : isBoolean(options.fallbackRoot)
              ? options.fallbackRoot
              : true;
      // configure fall back to root
      let _fallbackFormat = !!options.fallbackFormat;
      // runtime missing
      let _missing = isFunction$1(options.missing) ? options.missing : null;
      let _runtimeMissing = isFunction$1(options.missing)
          ? defineCoreMissingHandler(options.missing)
          : null;
      // postTranslation handler
      let _postTranslation = isFunction$1(options.postTranslation)
          ? options.postTranslation
          : null;
      // prettier-ignore
      let _warnHtmlMessage = __root
          ? __root.warnHtmlMessage
          : isBoolean(options.warnHtmlMessage)
              ? options.warnHtmlMessage
              : true;
      let _escapeParameter = !!options.escapeParameter;
      // custom linked modifiers
      // prettier-ignore
      const _modifiers = __root
          ? __root.modifiers
          : isPlainObject$3(options.modifiers)
              ? options.modifiers
              : {};
      // pluralRules
      let _pluralRules = options.pluralRules || (__root && __root.pluralRules);
      // runtime context
      // eslint-disable-next-line prefer-const
      let _context;
      const getCoreContext = () => {
          _isGlobal && setFallbackContext(null);
          const ctxOptions = {
              version: VERSION,
              locale: _locale.value,
              fallbackLocale: _fallbackLocale.value,
              messages: _messages.value,
              modifiers: _modifiers,
              pluralRules: _pluralRules,
              missing: _runtimeMissing === null ? undefined : _runtimeMissing,
              missingWarn: _missingWarn,
              fallbackWarn: _fallbackWarn,
              fallbackFormat: _fallbackFormat,
              unresolving: true,
              postTranslation: _postTranslation === null ? undefined : _postTranslation,
              warnHtmlMessage: _warnHtmlMessage,
              escapeParameter: _escapeParameter,
              messageResolver: options.messageResolver,
              messageCompiler: options.messageCompiler,
              __meta: { framework: 'vue' }
          };
          {
              ctxOptions.datetimeFormats = _datetimeFormats.value;
              ctxOptions.numberFormats = _numberFormats.value;
              ctxOptions.__datetimeFormatters = isPlainObject$3(_context)
                  ? _context.__datetimeFormatters
                  : undefined;
              ctxOptions.__numberFormatters = isPlainObject$3(_context)
                  ? _context.__numberFormatters
                  : undefined;
          }
          const ctx = createCoreContext(ctxOptions);
          _isGlobal && setFallbackContext(ctx);
          return ctx;
      };
      _context = getCoreContext();
      updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      // track reactivity
      function trackReactivityValues() {
          return [
                  _locale.value,
                  _fallbackLocale.value,
                  _messages.value,
                  _datetimeFormats.value,
                  _numberFormats.value
              ]
              ;
      }
      // locale
      const locale = vue.computed({
          get: () => _locale.value,
          set: val => {
              _locale.value = val;
              _context.locale = _locale.value;
          }
      });
      // fallbackLocale
      const fallbackLocale = vue.computed({
          get: () => _fallbackLocale.value,
          set: val => {
              _fallbackLocale.value = val;
              _context.fallbackLocale = _fallbackLocale.value;
              updateFallbackLocale(_context, _locale.value, val);
          }
      });
      // messages
      const messages = vue.computed(() => _messages.value);
      // datetimeFormats
      const datetimeFormats = /* #__PURE__*/ vue.computed(() => _datetimeFormats.value);
      // numberFormats
      const numberFormats = /* #__PURE__*/ vue.computed(() => _numberFormats.value);
      // getPostTranslationHandler
      function getPostTranslationHandler() {
          return isFunction$1(_postTranslation) ? _postTranslation : null;
      }
      // setPostTranslationHandler
      function setPostTranslationHandler(handler) {
          _postTranslation = handler;
          _context.postTranslation = handler;
      }
      // getMissingHandler
      function getMissingHandler() {
          return _missing;
      }
      // setMissingHandler
      function setMissingHandler(handler) {
          if (handler !== null) {
              _runtimeMissing = defineCoreMissingHandler(handler);
          }
          _missing = handler;
          _context.missing = _runtimeMissing;
      }
      const wrapWithDeps = (fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) => {
          trackReactivityValues(); // track reactive dependency
          // NOTE: experimental !!
          let ret;
          try {
              if (("production" !== 'production') || __INTLIFY_PROD_DEVTOOLS__) {
                  setAdditionalMeta(getMetaInfo());
              }
              if (!_isGlobal) {
                  _context.fallbackContext = __root
                      ? getFallbackContext()
                      : undefined;
              }
              ret = fn(_context);
          }
          finally {
              if (__INTLIFY_PROD_DEVTOOLS__) ;
              if (!_isGlobal) {
                  _context.fallbackContext = undefined;
              }
          }
          if ((warnType !== 'translate exists' && // for not `te` (e.g `t`)
              isNumber(ret) &&
              ret === NOT_REOSLVED) ||
              (warnType === 'translate exists' && !ret) // for `te`
          ) {
              const [key, arg2] = argumentParser();
              return __root && _fallbackRoot
                  ? fallbackSuccess(__root)
                  : fallbackFail(key);
          }
          else if (successCondition(ret)) {
              return ret;
          }
          else {
              /* istanbul ignore next */
              throw createI18nError(I18nErrorCodes.UNEXPECTED_RETURN_TYPE);
          }
      };
      // t
      function t(...args) {
          return wrapWithDeps(context => Reflect.apply(translate, null, [context, ...args]), () => parseTranslateArgs(...args), 'translate', root => Reflect.apply(root.t, root, [...args]), key => key, val => isString(val));
      }
      // rt
      function rt(...args) {
          const [arg1, arg2, arg3] = args;
          if (arg3 && !isObject$4(arg3)) {
              throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
          }
          return t(...[arg1, arg2, assign$2({ resolvedMessage: true }, arg3 || {})]);
      }
      // d
      function d(...args) {
          return wrapWithDeps(context => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), 'datetime format', root => Reflect.apply(root.d, root, [...args]), () => MISSING_RESOLVE_VALUE, val => isString(val));
      }
      // n
      function n(...args) {
          return wrapWithDeps(context => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), 'number format', root => Reflect.apply(root.n, root, [...args]), () => MISSING_RESOLVE_VALUE, val => isString(val));
      }
      // for custom processor
      function normalize(values) {
          return values.map(val => isString(val) || isNumber(val) || isBoolean(val)
              ? createTextNode(String(val))
              : val);
      }
      const interpolate = (val) => val;
      const processor = {
          normalize,
          interpolate,
          type: 'vnode'
      };
      // translateVNode, using for `i18n-t` component
      function translateVNode(...args) {
          return wrapWithDeps(context => {
              let ret;
              const _context = context;
              try {
                  _context.processor = processor;
                  ret = Reflect.apply(translate, null, [_context, ...args]);
              }
              finally {
                  _context.processor = null;
              }
              return ret;
          }, () => parseTranslateArgs(...args), 'translate', 
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          root => root[TranslateVNodeSymbol](...args), key => [createTextNode(key)], val => isArray$1(val));
      }
      // numberParts, using for `i18n-n` component
      function numberParts(...args) {
          return wrapWithDeps(context => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), 'number format', 
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          root => root[NumberPartsSymbol](...args), NOOP_RETURN_ARRAY, val => isString(val) || isArray$1(val));
      }
      // datetimeParts, using for `i18n-d` component
      function datetimeParts(...args) {
          return wrapWithDeps(context => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), 'datetime format', 
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          root => root[DatetimePartsSymbol](...args), NOOP_RETURN_ARRAY, val => isString(val) || isArray$1(val));
      }
      function setPluralRules(rules) {
          _pluralRules = rules;
          _context.pluralRules = _pluralRules;
      }
      // te
      function te(key, locale) {
          return wrapWithDeps(() => {
              if (!key) {
                  return false;
              }
              const targetLocale = isString(locale) ? locale : _locale.value;
              const message = getLocaleMessage(targetLocale);
              const resolved = _context.messageResolver(message, key);
              return !translateExistCompatible
                  ? isMessageAST(resolved) ||
                      isMessageFunction(resolved) ||
                      isString(resolved)
                  : resolved != null;
          }, () => [key], 'translate exists', root => {
              return Reflect.apply(root.te, root, [key, locale]);
          }, NOOP_RETURN_FALSE, val => isBoolean(val));
      }
      function resolveMessages(key) {
          let messages = null;
          const locales = fallbackWithLocaleChain(_context, _fallbackLocale.value, _locale.value);
          for (let i = 0; i < locales.length; i++) {
              const targetLocaleMessages = _messages.value[locales[i]] || {};
              const messageValue = _context.messageResolver(targetLocaleMessages, key);
              if (messageValue != null) {
                  messages = messageValue;
                  break;
              }
          }
          return messages;
      }
      // tm
      function tm(key) {
          const messages = resolveMessages(key);
          // prettier-ignore
          return messages != null
              ? messages
              : __root
                  ? __root.tm(key) || {}
                  : {};
      }
      // getLocaleMessage
      function getLocaleMessage(locale) {
          return (_messages.value[locale] || {});
      }
      // setLocaleMessage
      function setLocaleMessage(locale, message) {
          if (flatJson) {
              const _message = { [locale]: message };
              for (const key in _message) {
                  if (hasOwn(_message, key)) {
                      handleFlatJson(_message[key]);
                  }
              }
              message = _message[locale];
          }
          _messages.value[locale] = message;
          _context.messages = _messages.value;
      }
      // mergeLocaleMessage
      function mergeLocaleMessage(locale, message) {
          _messages.value[locale] = _messages.value[locale] || {};
          const _message = { [locale]: message };
          if (flatJson) {
              for (const key in _message) {
                  if (hasOwn(_message, key)) {
                      handleFlatJson(_message[key]);
                  }
              }
          }
          message = _message[locale];
          deepCopy(message, _messages.value[locale]);
          _context.messages = _messages.value;
      }
      // getDateTimeFormat
      function getDateTimeFormat(locale) {
          return _datetimeFormats.value[locale] || {};
      }
      // setDateTimeFormat
      function setDateTimeFormat(locale, format) {
          _datetimeFormats.value[locale] = format;
          _context.datetimeFormats = _datetimeFormats.value;
          clearDateTimeFormat(_context, locale, format);
      }
      // mergeDateTimeFormat
      function mergeDateTimeFormat(locale, format) {
          _datetimeFormats.value[locale] = assign$2(_datetimeFormats.value[locale] || {}, format);
          _context.datetimeFormats = _datetimeFormats.value;
          clearDateTimeFormat(_context, locale, format);
      }
      // getNumberFormat
      function getNumberFormat(locale) {
          return _numberFormats.value[locale] || {};
      }
      // setNumberFormat
      function setNumberFormat(locale, format) {
          _numberFormats.value[locale] = format;
          _context.numberFormats = _numberFormats.value;
          clearNumberFormat(_context, locale, format);
      }
      // mergeNumberFormat
      function mergeNumberFormat(locale, format) {
          _numberFormats.value[locale] = assign$2(_numberFormats.value[locale] || {}, format);
          _context.numberFormats = _numberFormats.value;
          clearNumberFormat(_context, locale, format);
      }
      // for debug
      composerID++;
      // watch root locale & fallbackLocale
      if (__root && inBrowser) {
          vue.watch(__root.locale, (val) => {
              if (_inheritLocale) {
                  _locale.value = val;
                  _context.locale = val;
                  updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
              }
          });
          vue.watch(__root.fallbackLocale, (val) => {
              if (_inheritLocale) {
                  _fallbackLocale.value = val;
                  _context.fallbackLocale = val;
                  updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
              }
          });
      }
      // define basic composition API!
      const composer = {
          id: composerID,
          locale,
          fallbackLocale,
          get inheritLocale() {
              return _inheritLocale;
          },
          set inheritLocale(val) {
              _inheritLocale = val;
              if (val && __root) {
                  _locale.value = __root.locale.value;
                  _fallbackLocale.value = __root.fallbackLocale.value;
                  updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
              }
          },
          get availableLocales() {
              return Object.keys(_messages.value).sort();
          },
          messages,
          get modifiers() {
              return _modifiers;
          },
          get pluralRules() {
              return _pluralRules || {};
          },
          get isGlobal() {
              return _isGlobal;
          },
          get missingWarn() {
              return _missingWarn;
          },
          set missingWarn(val) {
              _missingWarn = val;
              _context.missingWarn = _missingWarn;
          },
          get fallbackWarn() {
              return _fallbackWarn;
          },
          set fallbackWarn(val) {
              _fallbackWarn = val;
              _context.fallbackWarn = _fallbackWarn;
          },
          get fallbackRoot() {
              return _fallbackRoot;
          },
          set fallbackRoot(val) {
              _fallbackRoot = val;
          },
          get fallbackFormat() {
              return _fallbackFormat;
          },
          set fallbackFormat(val) {
              _fallbackFormat = val;
              _context.fallbackFormat = _fallbackFormat;
          },
          get warnHtmlMessage() {
              return _warnHtmlMessage;
          },
          set warnHtmlMessage(val) {
              _warnHtmlMessage = val;
              _context.warnHtmlMessage = val;
          },
          get escapeParameter() {
              return _escapeParameter;
          },
          set escapeParameter(val) {
              _escapeParameter = val;
              _context.escapeParameter = val;
          },
          t,
          getLocaleMessage,
          setLocaleMessage,
          mergeLocaleMessage,
          getPostTranslationHandler,
          setPostTranslationHandler,
          getMissingHandler,
          setMissingHandler,
          [SetPluralRulesSymbol]: setPluralRules
      };
      {
          composer.datetimeFormats = datetimeFormats;
          composer.numberFormats = numberFormats;
          composer.rt = rt;
          composer.te = te;
          composer.tm = tm;
          composer.d = d;
          composer.n = n;
          composer.getDateTimeFormat = getDateTimeFormat;
          composer.setDateTimeFormat = setDateTimeFormat;
          composer.mergeDateTimeFormat = mergeDateTimeFormat;
          composer.getNumberFormat = getNumberFormat;
          composer.setNumberFormat = setNumberFormat;
          composer.mergeNumberFormat = mergeNumberFormat;
          composer[InejctWithOptionSymbol] = __injectWithOption;
          composer[TranslateVNodeSymbol] = translateVNode;
          composer[DatetimePartsSymbol] = datetimeParts;
          composer[NumberPartsSymbol] = numberParts;
      }
      return composer;
  }
  /* eslint-enable @typescript-eslint/no-explicit-any */

  /* eslint-disable @typescript-eslint/no-explicit-any */
  /**
   * Convert to I18n Composer Options from VueI18n Options
   *
   * @internal
   */
  function convertComposerOptions(options) {
      const locale = isString(options.locale) ? options.locale : DEFAULT_LOCALE;
      const fallbackLocale = isString(options.fallbackLocale) ||
          isArray$1(options.fallbackLocale) ||
          isPlainObject$3(options.fallbackLocale) ||
          options.fallbackLocale === false
          ? options.fallbackLocale
          : locale;
      const missing = isFunction$1(options.missing) ? options.missing : undefined;
      const missingWarn = isBoolean(options.silentTranslationWarn) ||
          isRegExp(options.silentTranslationWarn)
          ? !options.silentTranslationWarn
          : true;
      const fallbackWarn = isBoolean(options.silentFallbackWarn) ||
          isRegExp(options.silentFallbackWarn)
          ? !options.silentFallbackWarn
          : true;
      const fallbackRoot = isBoolean(options.fallbackRoot)
          ? options.fallbackRoot
          : true;
      const fallbackFormat = !!options.formatFallbackMessages;
      const modifiers = isPlainObject$3(options.modifiers) ? options.modifiers : {};
      const pluralizationRules = options.pluralizationRules;
      const postTranslation = isFunction$1(options.postTranslation)
          ? options.postTranslation
          : undefined;
      const warnHtmlMessage = isString(options.warnHtmlInMessage)
          ? options.warnHtmlInMessage !== 'off'
          : true;
      const escapeParameter = !!options.escapeParameterHtml;
      const inheritLocale = isBoolean(options.sync) ? options.sync : true;
      let messages = options.messages;
      if (isPlainObject$3(options.sharedMessages)) {
          const sharedMessages = options.sharedMessages;
          const locales = Object.keys(sharedMessages);
          messages = locales.reduce((messages, locale) => {
              const message = messages[locale] || (messages[locale] = {});
              assign$2(message, sharedMessages[locale]);
              return messages;
          }, (messages || {}));
      }
      const { __i18n, __root, __injectWithOption } = options;
      const datetimeFormats = options.datetimeFormats;
      const numberFormats = options.numberFormats;
      const flatJson = options.flatJson;
      const translateExistCompatible = options
          .translateExistCompatible;
      return {
          locale,
          fallbackLocale,
          messages,
          flatJson,
          datetimeFormats,
          numberFormats,
          missing,
          missingWarn,
          fallbackWarn,
          fallbackRoot,
          fallbackFormat,
          modifiers,
          pluralRules: pluralizationRules,
          postTranslation,
          warnHtmlMessage,
          escapeParameter,
          messageResolver: options.messageResolver,
          inheritLocale,
          translateExistCompatible,
          __i18n,
          __root,
          __injectWithOption
      };
  }
  /**
   * create VueI18n interface factory
   *
   * @internal
   */
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  function createVueI18n(options = {}, VueI18nLegacy) {
      {
          const composer = createComposer(convertComposerOptions(options));
          const { __extender } = options;
          // defines VueI18n
          const vueI18n = {
              // id
              id: composer.id,
              // locale
              get locale() {
                  return composer.locale.value;
              },
              set locale(val) {
                  composer.locale.value = val;
              },
              // fallbackLocale
              get fallbackLocale() {
                  return composer.fallbackLocale.value;
              },
              set fallbackLocale(val) {
                  composer.fallbackLocale.value = val;
              },
              // messages
              get messages() {
                  return composer.messages.value;
              },
              // datetimeFormats
              get datetimeFormats() {
                  return composer.datetimeFormats.value;
              },
              // numberFormats
              get numberFormats() {
                  return composer.numberFormats.value;
              },
              // availableLocales
              get availableLocales() {
                  return composer.availableLocales;
              },
              // formatter
              get formatter() {
                  // dummy
                  return {
                      interpolate() {
                          return [];
                      }
                  };
              },
              set formatter(val) {
              },
              // missing
              get missing() {
                  return composer.getMissingHandler();
              },
              set missing(handler) {
                  composer.setMissingHandler(handler);
              },
              // silentTranslationWarn
              get silentTranslationWarn() {
                  return isBoolean(composer.missingWarn)
                      ? !composer.missingWarn
                      : composer.missingWarn;
              },
              set silentTranslationWarn(val) {
                  composer.missingWarn = isBoolean(val) ? !val : val;
              },
              // silentFallbackWarn
              get silentFallbackWarn() {
                  return isBoolean(composer.fallbackWarn)
                      ? !composer.fallbackWarn
                      : composer.fallbackWarn;
              },
              set silentFallbackWarn(val) {
                  composer.fallbackWarn = isBoolean(val) ? !val : val;
              },
              // modifiers
              get modifiers() {
                  return composer.modifiers;
              },
              // formatFallbackMessages
              get formatFallbackMessages() {
                  return composer.fallbackFormat;
              },
              set formatFallbackMessages(val) {
                  composer.fallbackFormat = val;
              },
              // postTranslation
              get postTranslation() {
                  return composer.getPostTranslationHandler();
              },
              set postTranslation(handler) {
                  composer.setPostTranslationHandler(handler);
              },
              // sync
              get sync() {
                  return composer.inheritLocale;
              },
              set sync(val) {
                  composer.inheritLocale = val;
              },
              // warnInHtmlMessage
              get warnHtmlInMessage() {
                  return composer.warnHtmlMessage ? 'warn' : 'off';
              },
              set warnHtmlInMessage(val) {
                  composer.warnHtmlMessage = val !== 'off';
              },
              // escapeParameterHtml
              get escapeParameterHtml() {
                  return composer.escapeParameter;
              },
              set escapeParameterHtml(val) {
                  composer.escapeParameter = val;
              },
              // preserveDirectiveContent
              get preserveDirectiveContent() {
                  return true;
              },
              set preserveDirectiveContent(val) {
              },
              // pluralizationRules
              get pluralizationRules() {
                  return composer.pluralRules || {};
              },
              // for internal
              __composer: composer,
              // t
              t(...args) {
                  const [arg1, arg2, arg3] = args;
                  const options = {};
                  let list = null;
                  let named = null;
                  if (!isString(arg1)) {
                      throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
                  }
                  const key = arg1;
                  if (isString(arg2)) {
                      options.locale = arg2;
                  }
                  else if (isArray$1(arg2)) {
                      list = arg2;
                  }
                  else if (isPlainObject$3(arg2)) {
                      named = arg2;
                  }
                  if (isArray$1(arg3)) {
                      list = arg3;
                  }
                  else if (isPlainObject$3(arg3)) {
                      named = arg3;
                  }
                  // return composer.t(key, (list || named || {}) as any, options)
                  return Reflect.apply(composer.t, composer, [
                      key,
                      (list || named || {}),
                      options
                  ]);
              },
              rt(...args) {
                  return Reflect.apply(composer.rt, composer, [...args]);
              },
              // tc
              tc(...args) {
                  const [arg1, arg2, arg3] = args;
                  const options = { plural: 1 };
                  let list = null;
                  let named = null;
                  if (!isString(arg1)) {
                      throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
                  }
                  const key = arg1;
                  if (isString(arg2)) {
                      options.locale = arg2;
                  }
                  else if (isNumber(arg2)) {
                      options.plural = arg2;
                  }
                  else if (isArray$1(arg2)) {
                      list = arg2;
                  }
                  else if (isPlainObject$3(arg2)) {
                      named = arg2;
                  }
                  if (isString(arg3)) {
                      options.locale = arg3;
                  }
                  else if (isArray$1(arg3)) {
                      list = arg3;
                  }
                  else if (isPlainObject$3(arg3)) {
                      named = arg3;
                  }
                  // return composer.t(key, (list || named || {}) as any, options)
                  return Reflect.apply(composer.t, composer, [
                      key,
                      (list || named || {}),
                      options
                  ]);
              },
              // te
              te(key, locale) {
                  return composer.te(key, locale);
              },
              // tm
              tm(key) {
                  return composer.tm(key);
              },
              // getLocaleMessage
              getLocaleMessage(locale) {
                  return composer.getLocaleMessage(locale);
              },
              // setLocaleMessage
              setLocaleMessage(locale, message) {
                  composer.setLocaleMessage(locale, message);
              },
              // mergeLocaleMessage
              mergeLocaleMessage(locale, message) {
                  composer.mergeLocaleMessage(locale, message);
              },
              // d
              d(...args) {
                  return Reflect.apply(composer.d, composer, [...args]);
              },
              // getDateTimeFormat
              getDateTimeFormat(locale) {
                  return composer.getDateTimeFormat(locale);
              },
              // setDateTimeFormat
              setDateTimeFormat(locale, format) {
                  composer.setDateTimeFormat(locale, format);
              },
              // mergeDateTimeFormat
              mergeDateTimeFormat(locale, format) {
                  composer.mergeDateTimeFormat(locale, format);
              },
              // n
              n(...args) {
                  return Reflect.apply(composer.n, composer, [...args]);
              },
              // getNumberFormat
              getNumberFormat(locale) {
                  return composer.getNumberFormat(locale);
              },
              // setNumberFormat
              setNumberFormat(locale, format) {
                  composer.setNumberFormat(locale, format);
              },
              // mergeNumberFormat
              mergeNumberFormat(locale, format) {
                  composer.mergeNumberFormat(locale, format);
              },
              // getChoiceIndex
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              getChoiceIndex(choice, choicesLength) {
                  return -1;
              }
          };
          vueI18n.__extender = __extender;
          return vueI18n;
      }
  }
  /* eslint-enable @typescript-eslint/no-explicit-any */

  const baseFormatProps = {
      tag: {
          type: [String, Object]
      },
      locale: {
          type: String
      },
      scope: {
          type: String,
          // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
          validator: (val /* ComponentI18nScope */) => val === 'parent' || val === 'global',
          default: 'parent' /* ComponentI18nScope */
      },
      i18n: {
          type: Object
      }
  };

  function getInterpolateArg(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { slots }, // SetupContext,
  keys) {
      if (keys.length === 1 && keys[0] === 'default') {
          // default slot with list
          const ret = slots.default ? slots.default() : [];
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return ret.reduce((slot, current) => {
              return [
                  ...slot,
                  // prettier-ignore
                  ...(current.type === vue.Fragment ? current.children : [current]
                      )
              ];
          }, []);
      }
      else {
          // named slots
          return keys.reduce((arg, key) => {
              const slot = slots[key];
              if (slot) {
                  arg[key] = slot();
              }
              return arg;
          }, create());
      }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function getFragmentableTag(tag) {
      return vue.Fragment ;
  }

  const TranslationImpl = /*#__PURE__*/ vue.defineComponent({
      /* eslint-disable */
      name: 'i18n-t',
      props: assign$2({
          keypath: {
              type: String,
              required: true
          },
          plural: {
              type: [Number, String],
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              validator: (val) => isNumber(val) || !isNaN(val)
          }
      }, baseFormatProps),
      /* eslint-enable */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setup(props, context) {
          const { slots, attrs } = context;
          // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
          const i18n = props.i18n ||
              useI18n({
                  useScope: props.scope,
                  __useComponent: true
              });
          return () => {
              const keys = Object.keys(slots).filter(key => key !== '_');
              const options = create();
              if (props.locale) {
                  options.locale = props.locale;
              }
              if (props.plural !== undefined) {
                  options.plural = isString(props.plural) ? +props.plural : props.plural;
              }
              const arg = getInterpolateArg(context, keys);
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const children = i18n[TranslateVNodeSymbol](props.keypath, arg, options);
              const assignedAttrs = assign$2(create(), attrs);
              const tag = isString(props.tag) || isObject$4(props.tag)
                  ? props.tag
                  : getFragmentableTag();
              return vue.h(tag, assignedAttrs, children);
          };
      }
  });
  /**
   * export the public type for h/tsx inference
   * also to avoid inline import() in generated d.ts files
   */
  /**
   * Translation Component
   *
   * @remarks
   * See the following items for property about details
   *
   * @VueI18nSee [TranslationProps](component#translationprops)
   * @VueI18nSee [BaseFormatProps](component#baseformatprops)
   * @VueI18nSee [Component Interpolation](../guide/advanced/component)
   *
   * @example
   * ```html
   * <div id="app">
   *   <!-- ... -->
   *   <i18n keypath="term" tag="label" for="tos">
   *     <a :href="url" target="_blank">{{ $t('tos') }}</a>
   *   </i18n>
   *   <!-- ... -->
   * </div>
   * ```
   * ```js
   * import { createApp } from 'vue'
   * import { createI18n } from 'vue-i18n'
   *
   * const messages = {
   *   en: {
   *     tos: 'Term of Service',
   *     term: 'I accept xxx {0}.'
   *   },
   *   ja: {
   *     tos: '利用規約',
   *     term: '私は xxx の{0}に同意します。'
   *   }
   * }
   *
   * const i18n = createI18n({
   *   locale: 'en',
   *   messages
   * })
   *
   * const app = createApp({
   *   data: {
   *     url: '/term'
   *   }
   * }).use(i18n).mount('#app')
   * ```
   *
   * @VueI18nComponent
   */
  const Translation = TranslationImpl;

  function isVNode(target) {
      return isArray$1(target) && !isString(target[0]);
  }
  function renderFormatter(props, context, slotKeys, partFormatter) {
      const { slots, attrs } = context;
      return () => {
          const options = { part: true };
          let overrides = create();
          if (props.locale) {
              options.locale = props.locale;
          }
          if (isString(props.format)) {
              options.key = props.format;
          }
          else if (isObject$4(props.format)) {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              if (isString(props.format.key)) {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  options.key = props.format.key;
              }
              // Filter out number format options only
              overrides = Object.keys(props.format).reduce((options, prop) => {
                  return slotKeys.includes(prop)
                      ? assign$2(create(), options, { [prop]: props.format[prop] }) // eslint-disable-line @typescript-eslint/no-explicit-any
                      : options;
              }, create());
          }
          const parts = partFormatter(...[props.value, options, overrides]);
          let children = [options.key];
          if (isArray$1(parts)) {
              children = parts.map((part, index) => {
                  const slot = slots[part.type];
                  const node = slot
                      ? slot({ [part.type]: part.value, index, parts })
                      : [part.value];
                  if (isVNode(node)) {
                      node[0].key = `${part.type}-${index}`;
                  }
                  return node;
              });
          }
          else if (isString(parts)) {
              children = [parts];
          }
          const assignedAttrs = assign$2(create(), attrs);
          const tag = isString(props.tag) || isObject$4(props.tag)
              ? props.tag
              : getFragmentableTag();
          return vue.h(tag, assignedAttrs, children);
      };
  }

  const NumberFormatImpl = /*#__PURE__*/ vue.defineComponent({
      /* eslint-disable */
      name: 'i18n-n',
      props: assign$2({
          value: {
              type: Number,
              required: true
          },
          format: {
              type: [String, Object]
          }
      }, baseFormatProps),
      /* eslint-enable */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setup(props, context) {
          const i18n = props.i18n ||
              useI18n({
                  useScope: props.scope,
                  __useComponent: true
              });
          return renderFormatter(props, context, NUMBER_FORMAT_OPTIONS_KEYS, (...args) => 
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          i18n[NumberPartsSymbol](...args));
      }
  });
  /**
   * export the public type for h/tsx inference
   * also to avoid inline import() in generated d.ts files
   */
  /**
   * Number Format Component
   *
   * @remarks
   * See the following items for property about details
   *
   * @VueI18nSee [FormattableProps](component#formattableprops)
   * @VueI18nSee [BaseFormatProps](component#baseformatprops)
   * @VueI18nSee [Custom Formatting](../guide/essentials/number#custom-formatting)
   *
   * @VueI18nDanger
   * Not supported IE, due to no support `Intl.NumberFormat#formatToParts` in [IE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts)
   *
   * If you want to use it, you need to use [polyfill](https://github.com/formatjs/formatjs/tree/main/packages/intl-numberformat)
   *
   * @VueI18nComponent
   */
  const NumberFormat = NumberFormatImpl;

  const DatetimeFormatImpl = /* #__PURE__*/ vue.defineComponent({
      /* eslint-disable */
      name: 'i18n-d',
      props: assign$2({
          value: {
              type: [Number, Date],
              required: true
          },
          format: {
              type: [String, Object]
          }
      }, baseFormatProps),
      /* eslint-enable */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setup(props, context) {
          const i18n = props.i18n ||
              useI18n({
                  useScope: props.scope,
                  __useComponent: true
              });
          return renderFormatter(props, context, DATETIME_FORMAT_OPTIONS_KEYS, (...args) => 
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          i18n[DatetimePartsSymbol](...args));
      }
  });
  /**
   * Datetime Format Component
   *
   * @remarks
   * See the following items for property about details
   *
   * @VueI18nSee [FormattableProps](component#formattableprops)
   * @VueI18nSee [BaseFormatProps](component#baseformatprops)
   * @VueI18nSee [Custom Formatting](../guide/essentials/datetime#custom-formatting)
   *
   * @VueI18nDanger
   * Not supported IE, due to no support `Intl.DateTimeFormat#formatToParts` in [IE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts)
   *
   * If you want to use it, you need to use [polyfill](https://github.com/formatjs/formatjs/tree/main/packages/intl-datetimeformat)
   *
   * @VueI18nComponent
   */
  const DatetimeFormat = DatetimeFormatImpl;

  function getComposer$2(i18n, instance) {
      const i18nInternal = i18n;
      if (i18n.mode === 'composition') {
          return (i18nInternal.__getInstance(instance) || i18n.global);
      }
      else {
          const vueI18n = i18nInternal.__getInstance(instance);
          return vueI18n != null
              ? vueI18n.__composer
              : i18n.global.__composer;
      }
  }
  function vTDirective(i18n) {
      const _process = (binding) => {
          const { instance, modifiers, value } = binding;
          /* istanbul ignore if */
          if (!instance || !instance.$) {
              throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
          }
          const composer = getComposer$2(i18n, instance.$);
          const parsedValue = parseValue(value);
          return [
              Reflect.apply(composer.t, composer, [...makeParams(parsedValue)]),
              composer
          ];
      };
      const register = (el, binding) => {
          const [textContent, composer] = _process(binding);
          if (inBrowser && i18n.global === composer) {
              // global scope only
              el.__i18nWatcher = vue.watch(composer.locale, () => {
                  binding.instance && binding.instance.$forceUpdate();
              });
          }
          el.__composer = composer;
          el.textContent = textContent;
      };
      const unregister = (el) => {
          if (inBrowser && el.__i18nWatcher) {
              el.__i18nWatcher();
              el.__i18nWatcher = undefined;
              delete el.__i18nWatcher;
          }
          if (el.__composer) {
              el.__composer = undefined;
              delete el.__composer;
          }
      };
      const update = (el, { value }) => {
          if (el.__composer) {
              const composer = el.__composer;
              const parsedValue = parseValue(value);
              el.textContent = Reflect.apply(composer.t, composer, [
                  ...makeParams(parsedValue)
              ]);
          }
      };
      const getSSRProps = (binding) => {
          const [textContent] = _process(binding);
          return { textContent };
      };
      return {
          created: register,
          unmounted: unregister,
          beforeUpdate: update,
          getSSRProps
      };
  }
  function parseValue(value) {
      if (isString(value)) {
          return { path: value };
      }
      else if (isPlainObject$3(value)) {
          if (!('path' in value)) {
              throw createI18nError(I18nErrorCodes.REQUIRED_VALUE, 'path');
          }
          return value;
      }
      else {
          throw createI18nError(I18nErrorCodes.INVALID_VALUE);
      }
  }
  function makeParams(value) {
      const { path, locale, args, choice, plural } = value;
      const options = {};
      const named = args || {};
      if (isString(locale)) {
          options.locale = locale;
      }
      if (isNumber(choice)) {
          options.plural = choice;
      }
      if (isNumber(plural)) {
          options.plural = plural;
      }
      return [path, named, options];
  }

  function apply$1(app, i18n, ...options) {
      const pluginOptions = isPlainObject$3(options[0])
          ? options[0]
          : {};
      const useI18nComponentName = !!pluginOptions.useI18nComponentName;
      const globalInstall = isBoolean(pluginOptions.globalInstall)
          ? pluginOptions.globalInstall
          : true;
      if (globalInstall) {
          [!useI18nComponentName ? Translation.name : 'i18n', 'I18nT'].forEach(name => app.component(name, Translation));
          [NumberFormat.name, 'I18nN'].forEach(name => app.component(name, NumberFormat));
          [DatetimeFormat.name, 'I18nD'].forEach(name => app.component(name, DatetimeFormat));
      }
      // install directive
      {
          app.directive('t', vTDirective(i18n));
      }
  }

  const VueDevToolsLabels = {
      ["vue-devtools-plugin-vue-i18n" /* VueDevToolsIDs.PLUGIN */]: 'Vue I18n devtools',
      ["vue-i18n-resource-inspector" /* VueDevToolsIDs.CUSTOM_INSPECTOR */]: 'I18n Resources',
      ["vue-i18n-timeline" /* VueDevToolsIDs.TIMELINE */]: 'Vue I18n'
  };
  const VueDevToolsPlaceholders = {
      ["vue-i18n-resource-inspector" /* VueDevToolsIDs.CUSTOM_INSPECTOR */]: 'Search for scopes ...'
  };
  const VueDevToolsTimelineColors = {
      ["vue-i18n-timeline" /* VueDevToolsIDs.TIMELINE */]: 0xffcd19
  };

  const VUE_I18N_COMPONENT_TYPES = 'vue-i18n: composer properties';
  let devtoolsApi;
  async function enableDevTools(app, i18n) {
      return new Promise((resolve, reject) => {
          try {
              setupDevtoolsPlugin({
                  id: "vue-devtools-plugin-vue-i18n" /* VueDevToolsIDs.PLUGIN */,
                  label: VueDevToolsLabels["vue-devtools-plugin-vue-i18n" /* VueDevToolsIDs.PLUGIN */],
                  packageName: 'vue-i18n',
                  homepage: 'https://vue-i18n.intlify.dev',
                  logo: 'https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png',
                  componentStateTypes: [VUE_I18N_COMPONENT_TYPES],
                  app: app // eslint-disable-line @typescript-eslint/no-explicit-any
              }, api => {
                  devtoolsApi = api;
                  api.on.visitComponentTree(({ componentInstance, treeNode }) => {
                      updateComponentTreeTags(componentInstance, treeNode, i18n);
                  });
                  api.on.inspectComponent(({ componentInstance, instanceData }) => {
                      if (componentInstance.vnode.el &&
                          componentInstance.vnode.el.__VUE_I18N__ &&
                          instanceData) {
                          if (i18n.mode === 'legacy') {
                              // ignore global scope on legacy mode
                              if (componentInstance.vnode.el.__VUE_I18N__ !==
                                  i18n.global.__composer) {
                                  inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
                              }
                          }
                          else {
                              inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
                          }
                      }
                  });
                  api.addInspector({
                      id: "vue-i18n-resource-inspector" /* VueDevToolsIDs.CUSTOM_INSPECTOR */,
                      label: VueDevToolsLabels["vue-i18n-resource-inspector" /* VueDevToolsIDs.CUSTOM_INSPECTOR */],
                      icon: 'language',
                      treeFilterPlaceholder: VueDevToolsPlaceholders["vue-i18n-resource-inspector" /* VueDevToolsIDs.CUSTOM_INSPECTOR */]
                  });
                  api.on.getInspectorTree(payload => {
                      if (payload.app === app &&
                          payload.inspectorId === "vue-i18n-resource-inspector" /* VueDevToolsIDs.CUSTOM_INSPECTOR */) {
                          registerScope(payload, i18n);
                      }
                  });
                  const roots = new Map();
                  api.on.getInspectorState(async (payload) => {
                      if (payload.app === app &&
                          payload.inspectorId === "vue-i18n-resource-inspector" /* VueDevToolsIDs.CUSTOM_INSPECTOR */) {
                          api.unhighlightElement();
                          inspectScope(payload, i18n);
                          if (payload.nodeId === 'global') {
                              if (!roots.has(payload.app)) {
                                  const [root] = await api.getComponentInstances(payload.app);
                                  roots.set(payload.app, root);
                              }
                              api.highlightElement(roots.get(payload.app));
                          }
                          else {
                              const instance = getComponentInstance(payload.nodeId, i18n);
                              instance && api.highlightElement(instance);
                          }
                      }
                  });
                  api.on.editInspectorState(payload => {
                      if (payload.app === app &&
                          payload.inspectorId === "vue-i18n-resource-inspector" /* VueDevToolsIDs.CUSTOM_INSPECTOR */) {
                          editScope(payload, i18n);
                      }
                  });
                  api.addTimelineLayer({
                      id: "vue-i18n-timeline" /* VueDevToolsIDs.TIMELINE */,
                      label: VueDevToolsLabels["vue-i18n-timeline" /* VueDevToolsIDs.TIMELINE */],
                      color: VueDevToolsTimelineColors["vue-i18n-timeline" /* VueDevToolsIDs.TIMELINE */]
                  });
                  resolve(true);
              });
          }
          catch (e) {
              console.error(e);
              reject(false);
          }
      });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function getI18nScopeLable(instance) {
      return (instance.type.name ||
          instance.type.displayName ||
          instance.type.__file ||
          'Anonymous');
  }
  function updateComponentTreeTags(instance, // eslint-disable-line @typescript-eslint/no-explicit-any
  treeNode, i18n) {
      // prettier-ignore
      const global = i18n.mode === 'composition'
          ? i18n.global
          : i18n.global.__composer;
      if (instance && instance.vnode.el && instance.vnode.el.__VUE_I18N__) {
          // add custom tags local scope only
          if (instance.vnode.el.__VUE_I18N__ !== global) {
              const tag = {
                  label: `i18n (${getI18nScopeLable(instance)} Scope)`,
                  textColor: 0x000000,
                  backgroundColor: 0xffcd19
              };
              treeNode.tags.push(tag);
          }
      }
  }
  function inspectComposer(instanceData, composer) {
      const type = VUE_I18N_COMPONENT_TYPES;
      instanceData.state.push({
          type,
          key: 'locale',
          editable: true,
          value: composer.locale.value
      });
      instanceData.state.push({
          type,
          key: 'availableLocales',
          editable: false,
          value: composer.availableLocales
      });
      instanceData.state.push({
          type,
          key: 'fallbackLocale',
          editable: true,
          value: composer.fallbackLocale.value
      });
      instanceData.state.push({
          type,
          key: 'inheritLocale',
          editable: true,
          value: composer.inheritLocale
      });
      instanceData.state.push({
          type,
          key: 'messages',
          editable: false,
          value: getLocaleMessageValue(composer.messages.value)
      });
      {
          instanceData.state.push({
              type,
              key: 'datetimeFormats',
              editable: false,
              value: composer.datetimeFormats.value
          });
          instanceData.state.push({
              type,
              key: 'numberFormats',
              editable: false,
              value: composer.numberFormats.value
          });
      }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function getLocaleMessageValue(messages) {
      const value = {};
      Object.keys(messages).forEach((key) => {
          const v = messages[key];
          if (isFunction$1(v) && 'source' in v) {
              value[key] = getMessageFunctionDetails(v);
          }
          else if (isMessageAST(v) && v.loc && v.loc.source) {
              value[key] = v.loc.source;
          }
          else if (isObject$4(v)) {
              value[key] = getLocaleMessageValue(v);
          }
          else {
              value[key] = v;
          }
      });
      return value;
  }
  const ESC = {
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '&': '&amp;'
  };
  function escape(s) {
      return s.replace(/[<>"&]/g, escapeChar);
  }
  function escapeChar(a) {
      return ESC[a] || a;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function getMessageFunctionDetails(func) {
      const argString = func.source ? `("${escape(func.source)}")` : `(?)`;
      return {
          _custom: {
              type: 'function',
              display: `<span>ƒ</span> ${argString}`
          }
      };
  }
  function registerScope(payload, i18n) {
      payload.rootNodes.push({
          id: 'global',
          label: 'Global Scope'
      });
      // prettier-ignore
      const global = i18n.mode === 'composition'
          ? i18n.global
          : i18n.global.__composer;
      for (const [keyInstance, instance] of i18n.__instances) {
          // prettier-ignore
          const composer = i18n.mode === 'composition'
              ? instance
              : instance.__composer;
          if (global === composer) {
              continue;
          }
          payload.rootNodes.push({
              id: composer.id.toString(),
              label: `${getI18nScopeLable(keyInstance)} Scope`
          });
      }
  }
  function getComponentInstance(nodeId, i18n) {
      let instance = null;
      if (nodeId !== 'global') {
          for (const [component, composer] of i18n.__instances.entries()) {
              if (composer.id.toString() === nodeId) {
                  instance = component;
                  break;
              }
          }
      }
      return instance;
  }
  function getComposer$1(nodeId, i18n) {
      if (nodeId === 'global') {
          return i18n.mode === 'composition'
              ? i18n.global
              : i18n.global.__composer;
      }
      else {
          const instance = Array.from(i18n.__instances.values()).find(item => item.id.toString() === nodeId);
          if (instance) {
              return i18n.mode === 'composition'
                  ? instance
                  : instance.__composer;
          }
          else {
              return null;
          }
      }
  }
  function inspectScope(payload, i18n
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) {
      const composer = getComposer$1(payload.nodeId, i18n);
      if (composer) {
          // TODO:
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          payload.state = makeScopeInspectState(composer);
      }
      return null;
  }
  function makeScopeInspectState(composer) {
      const state = {};
      const localeType = 'Locale related info';
      const localeStates = [
          {
              type: localeType,
              key: 'locale',
              editable: true,
              value: composer.locale.value
          },
          {
              type: localeType,
              key: 'fallbackLocale',
              editable: true,
              value: composer.fallbackLocale.value
          },
          {
              type: localeType,
              key: 'availableLocales',
              editable: false,
              value: composer.availableLocales
          },
          {
              type: localeType,
              key: 'inheritLocale',
              editable: true,
              value: composer.inheritLocale
          }
      ];
      state[localeType] = localeStates;
      const localeMessagesType = 'Locale messages info';
      const localeMessagesStates = [
          {
              type: localeMessagesType,
              key: 'messages',
              editable: false,
              value: getLocaleMessageValue(composer.messages.value)
          }
      ];
      state[localeMessagesType] = localeMessagesStates;
      {
          const datetimeFormatsType = 'Datetime formats info';
          const datetimeFormatsStates = [
              {
                  type: datetimeFormatsType,
                  key: 'datetimeFormats',
                  editable: false,
                  value: composer.datetimeFormats.value
              }
          ];
          state[datetimeFormatsType] = datetimeFormatsStates;
          const numberFormatsType = 'Datetime formats info';
          const numberFormatsStates = [
              {
                  type: numberFormatsType,
                  key: 'numberFormats',
                  editable: false,
                  value: composer.numberFormats.value
              }
          ];
          state[numberFormatsType] = numberFormatsStates;
      }
      return state;
  }
  function addTimelineEvent(event, payload) {
      if (devtoolsApi) {
          let groupId;
          if (payload && 'groupId' in payload) {
              groupId = payload.groupId;
              delete payload.groupId;
          }
          devtoolsApi.addTimelineEvent({
              layerId: "vue-i18n-timeline" /* VueDevToolsIDs.TIMELINE */,
              event: {
                  title: event,
                  groupId,
                  time: Date.now(),
                  meta: {},
                  data: payload || {},
                  logType: event === "compile-error" /* VueDevToolsTimelineEvents.COMPILE_ERROR */
                      ? 'error'
                      : event === "fallback" /* VueDevToolsTimelineEvents.FALBACK */ ||
                          event === "missing" /* VueDevToolsTimelineEvents.MISSING */
                          ? 'warning'
                          : 'default'
              }
          });
      }
  }
  function editScope(payload, i18n) {
      const composer = getComposer$1(payload.nodeId, i18n);
      if (composer) {
          const [field] = payload.path;
          if (field === 'locale' && isString(payload.state.value)) {
              composer.locale.value = payload.state.value;
          }
          else if (field === 'fallbackLocale' &&
              (isString(payload.state.value) ||
                  isArray$1(payload.state.value) ||
                  isObject$4(payload.state.value))) {
              composer.fallbackLocale.value = payload.state.value;
          }
          else if (field === 'inheritLocale' && isBoolean(payload.state.value)) {
              composer.inheritLocale = payload.state.value;
          }
      }
  }

  /**
   * Supports compatibility for legacy vue-i18n APIs
   * This mixin is used when we use vue-i18n@v9.x or later
   */
  function defineMixin(vuei18n, composer, i18n) {
      return {
          beforeCreate() {
              const instance = vue.getCurrentInstance();
              /* istanbul ignore if */
              if (!instance) {
                  throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
              }
              const options = this.$options;
              if (options.i18n) {
                  const optionsI18n = options.i18n;
                  if (options.__i18n) {
                      optionsI18n.__i18n = options.__i18n;
                  }
                  optionsI18n.__root = composer;
                  if (this === this.$root) {
                      // merge option and gttach global
                      this.$i18n = mergeToGlobal(vuei18n, optionsI18n);
                  }
                  else {
                      optionsI18n.__injectWithOption = true;
                      optionsI18n.__extender = i18n.__vueI18nExtend;
                      // atttach local VueI18n instance
                      this.$i18n = createVueI18n(optionsI18n);
                      // extend VueI18n instance
                      const _vueI18n = this.$i18n;
                      if (_vueI18n.__extender) {
                          _vueI18n.__disposer = _vueI18n.__extender(this.$i18n);
                      }
                  }
              }
              else if (options.__i18n) {
                  if (this === this.$root) {
                      // merge option and gttach global
                      this.$i18n = mergeToGlobal(vuei18n, options);
                  }
                  else {
                      // atttach local VueI18n instance
                      this.$i18n = createVueI18n({
                          __i18n: options.__i18n,
                          __injectWithOption: true,
                          __extender: i18n.__vueI18nExtend,
                          __root: composer
                      });
                      // extend VueI18n instance
                      const _vueI18n = this.$i18n;
                      if (_vueI18n.__extender) {
                          _vueI18n.__disposer = _vueI18n.__extender(this.$i18n);
                      }
                  }
              }
              else {
                  // attach global VueI18n instance
                  this.$i18n = vuei18n;
              }
              if (options.__i18nGlobal) {
                  adjustI18nResources(composer, options, options);
              }
              // defines vue-i18n legacy APIs
              this.$t = (...args) => this.$i18n.t(...args);
              this.$rt = (...args) => this.$i18n.rt(...args);
              this.$tc = (...args) => this.$i18n.tc(...args);
              this.$te = (key, locale) => this.$i18n.te(key, locale);
              this.$d = (...args) => this.$i18n.d(...args);
              this.$n = (...args) => this.$i18n.n(...args);
              this.$tm = (key) => this.$i18n.tm(key);
              i18n.__setInstance(instance, this.$i18n);
          },
          mounted() {
              /* istanbul ignore if */
              if ((__VUE_PROD_DEVTOOLS__) &&
                  !false &&
                  this.$el &&
                  this.$i18n) {
                  const _vueI18n = this.$i18n;
                  this.$el.__VUE_I18N__ = _vueI18n.__composer;
                  const emitter = (this.__v_emitter =
                      createEmitter());
                  _vueI18n.__enableEmitter && _vueI18n.__enableEmitter(emitter);
                  emitter.on('*', addTimelineEvent);
              }
          },
          unmounted() {
              const instance = vue.getCurrentInstance();
              /* istanbul ignore if */
              if (!instance) {
                  throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
              }
              const _vueI18n = this.$i18n;
              /* istanbul ignore if */
              if ((__VUE_PROD_DEVTOOLS__) &&
                  !false &&
                  this.$el &&
                  this.$el.__VUE_I18N__) {
                  if (this.__v_emitter) {
                      this.__v_emitter.off('*', addTimelineEvent);
                      delete this.__v_emitter;
                  }
                  if (this.$i18n) {
                      _vueI18n.__disableEmitter && _vueI18n.__disableEmitter();
                      delete this.$el.__VUE_I18N__;
                  }
              }
              delete this.$t;
              delete this.$rt;
              delete this.$tc;
              delete this.$te;
              delete this.$d;
              delete this.$n;
              delete this.$tm;
              if (_vueI18n.__disposer) {
                  _vueI18n.__disposer();
                  delete _vueI18n.__disposer;
                  delete _vueI18n.__extender;
              }
              i18n.__deleteInstance(instance);
              delete this.$i18n;
          }
      };
  }
  function mergeToGlobal(g, options) {
      g.locale = options.locale || g.locale;
      g.fallbackLocale = options.fallbackLocale || g.fallbackLocale;
      g.missing = options.missing || g.missing;
      g.silentTranslationWarn =
          options.silentTranslationWarn || g.silentFallbackWarn;
      g.silentFallbackWarn = options.silentFallbackWarn || g.silentFallbackWarn;
      g.formatFallbackMessages =
          options.formatFallbackMessages || g.formatFallbackMessages;
      g.postTranslation = options.postTranslation || g.postTranslation;
      g.warnHtmlInMessage = options.warnHtmlInMessage || g.warnHtmlInMessage;
      g.escapeParameterHtml = options.escapeParameterHtml || g.escapeParameterHtml;
      g.sync = options.sync || g.sync;
      g.__composer[SetPluralRulesSymbol](options.pluralizationRules || g.pluralizationRules);
      const messages = getLocaleMessages(g.locale, {
          messages: options.messages,
          __i18n: options.__i18n
      });
      Object.keys(messages).forEach(locale => g.mergeLocaleMessage(locale, messages[locale]));
      if (options.datetimeFormats) {
          Object.keys(options.datetimeFormats).forEach(locale => g.mergeDateTimeFormat(locale, options.datetimeFormats[locale]));
      }
      if (options.numberFormats) {
          Object.keys(options.numberFormats).forEach(locale => g.mergeNumberFormat(locale, options.numberFormats[locale]));
      }
      return g;
  }

  /**
   * Injection key for {@link useI18n}
   *
   * @remarks
   * The global injection key for I18n instances with `useI18n`. this injection key is used in Web Components.
   * Specify the i18n instance created by {@link createI18n} together with `provide` function.
   *
   * @VueI18nGeneral
   */
  const I18nInjectionKey = 
  /* #__PURE__*/ makeSymbol('global-vue-i18n');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  function createI18n(options = {}, VueI18nLegacy) {
      // prettier-ignore
      const __legacyMode = __VUE_I18N_LEGACY_API__ && isBoolean(options.legacy)
              ? options.legacy
              : __VUE_I18N_LEGACY_API__;
      // prettier-ignore
      const __globalInjection = isBoolean(options.globalInjection)
          ? options.globalInjection
          : true;
      // prettier-ignore
      const __allowComposition = __VUE_I18N_LEGACY_API__ && __legacyMode
              ? !!options.allowComposition
              : true;
      const __instances = new Map();
      const [globalScope, __global] = createGlobal(options, __legacyMode);
      const symbol = /* #__PURE__*/ makeSymbol('');
      function __getInstance(component) {
          return __instances.get(component) || null;
      }
      function __setInstance(component, instance) {
          __instances.set(component, instance);
      }
      function __deleteInstance(component) {
          __instances.delete(component);
      }
      {
          const i18n = {
              // mode
              get mode() {
                  return __VUE_I18N_LEGACY_API__ && __legacyMode
                      ? 'legacy'
                      : 'composition';
              },
              // allowComposition
              get allowComposition() {
                  return __allowComposition;
              },
              // install plugin
              async install(app, ...options) {
                  if ((__VUE_PROD_DEVTOOLS__) &&
                      !false) {
                      app.__VUE_I18N__ = i18n;
                  }
                  // setup global provider
                  app.__VUE_I18N_SYMBOL__ = symbol;
                  app.provide(app.__VUE_I18N_SYMBOL__, i18n);
                  // set composer & vuei18n extend hook options from plugin options
                  if (isPlainObject$3(options[0])) {
                      const opts = options[0];
                      i18n.__composerExtend =
                          opts.__composerExtend;
                      i18n.__vueI18nExtend =
                          opts.__vueI18nExtend;
                  }
                  // global method and properties injection for Composition API
                  let globalReleaseHandler = null;
                  if (!__legacyMode && __globalInjection) {
                      globalReleaseHandler = injectGlobalFields(app, i18n.global);
                  }
                  // install built-in components and directive
                  if (__VUE_I18N_FULL_INSTALL__) {
                      apply$1(app, i18n, ...options);
                  }
                  // setup mixin for Legacy API
                  if (__VUE_I18N_LEGACY_API__ && __legacyMode) {
                      app.mixin(defineMixin(__global, __global.__composer, i18n));
                  }
                  // release global scope
                  const unmountApp = app.unmount;
                  app.unmount = () => {
                      globalReleaseHandler && globalReleaseHandler();
                      i18n.dispose();
                      unmountApp();
                  };
                  // setup vue-devtools plugin
                  if ((__VUE_PROD_DEVTOOLS__) && !false) {
                      const ret = await enableDevTools(app, i18n);
                      if (!ret) {
                          throw createI18nError(I18nErrorCodes.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
                      }
                      const emitter = createEmitter();
                      if (__legacyMode) {
                          const _vueI18n = __global;
                          _vueI18n.__enableEmitter && _vueI18n.__enableEmitter(emitter);
                      }
                      else {
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          const _composer = __global;
                          _composer[EnableEmitter] && _composer[EnableEmitter](emitter);
                      }
                      emitter.on('*', addTimelineEvent);
                  }
              },
              // global accessor
              get global() {
                  return __global;
              },
              dispose() {
                  globalScope.stop();
              },
              // @internal
              __instances,
              // @internal
              __getInstance,
              // @internal
              __setInstance,
              // @internal
              __deleteInstance
          };
          return i18n;
      }
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  function useI18n(options = {}) {
      const instance = vue.getCurrentInstance();
      if (instance == null) {
          throw createI18nError(I18nErrorCodes.MUST_BE_CALL_SETUP_TOP);
      }
      if (!instance.isCE &&
          instance.appContext.app != null &&
          !instance.appContext.app.__VUE_I18N_SYMBOL__) {
          throw createI18nError(I18nErrorCodes.NOT_INSTALLED);
      }
      const i18n = getI18nInstance(instance);
      const gl = getGlobalComposer(i18n);
      const componentOptions = getComponentOptions(instance);
      const scope = getScope(options, componentOptions);
      if (__VUE_I18N_LEGACY_API__) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          if (i18n.mode === 'legacy' && !options.__useComponent) {
              if (!i18n.allowComposition) {
                  throw createI18nError(I18nErrorCodes.NOT_AVAILABLE_IN_LEGACY_MODE);
              }
              return useI18nForLegacy(instance, scope, gl, options);
          }
      }
      if (scope === 'global') {
          adjustI18nResources(gl, options, componentOptions);
          return gl;
      }
      if (scope === 'parent') {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          let composer = getComposer(i18n, instance, options.__useComponent);
          if (composer == null) {
              composer = gl;
          }
          return composer;
      }
      const i18nInternal = i18n;
      let composer = i18nInternal.__getInstance(instance);
      if (composer == null) {
          const composerOptions = assign$2({}, options);
          if ('__i18n' in componentOptions) {
              composerOptions.__i18n = componentOptions.__i18n;
          }
          if (gl) {
              composerOptions.__root = gl;
          }
          composer = createComposer(composerOptions);
          if (i18nInternal.__composerExtend) {
              composer[DisposeSymbol] =
                  i18nInternal.__composerExtend(composer);
          }
          setupLifeCycle(i18nInternal, instance, composer);
          i18nInternal.__setInstance(instance, composer);
      }
      return composer;
  }
  function createGlobal(options, legacyMode, VueI18nLegacy // eslint-disable-line @typescript-eslint/no-explicit-any
  ) {
      const scope = vue.effectScope();
      {
          const obj = __VUE_I18N_LEGACY_API__ && legacyMode
              ? scope.run(() => createVueI18n(options))
              : scope.run(() => createComposer(options));
          if (obj == null) {
              throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
          }
          return [scope, obj];
      }
  }
  function getI18nInstance(instance) {
      {
          const i18n = vue.inject(!instance.isCE
              ? instance.appContext.app.__VUE_I18N_SYMBOL__
              : I18nInjectionKey);
          /* istanbul ignore if */
          if (!i18n) {
              throw createI18nError(!instance.isCE
                  ? I18nErrorCodes.UNEXPECTED_ERROR
                  : I18nErrorCodes.NOT_INSTALLED_WITH_PROVIDE);
          }
          return i18n;
      }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function getScope(options, componentOptions) {
      // prettier-ignore
      return isEmptyObject(options)
          ? ('__i18n' in componentOptions)
              ? 'local'
              : 'global'
          : !options.useScope
              ? 'local'
              : options.useScope;
  }
  function getGlobalComposer(i18n) {
      // prettier-ignore
      return i18n.mode === 'composition'
              ? i18n.global
              : i18n.global.__composer
          ;
  }
  function getComposer(i18n, target, useComponent = false) {
      let composer = null;
      const root = target.root;
      let current = getParentComponentInstance(target, useComponent);
      while (current != null) {
          const i18nInternal = i18n;
          if (i18n.mode === 'composition') {
              composer = i18nInternal.__getInstance(current);
          }
          else {
              if (__VUE_I18N_LEGACY_API__) {
                  const vueI18n = i18nInternal.__getInstance(current);
                  if (vueI18n != null) {
                      composer = vueI18n
                          .__composer;
                      if (useComponent &&
                          composer &&
                          !composer[InejctWithOptionSymbol] // eslint-disable-line @typescript-eslint/no-explicit-any
                      ) {
                          composer = null;
                      }
                  }
              }
          }
          if (composer != null) {
              break;
          }
          if (root === current) {
              break;
          }
          current = current.parent;
      }
      return composer;
  }
  function getParentComponentInstance(target, useComponent = false) {
      if (target == null) {
          return null;
      }
      {
          // if `useComponent: true` will be specified, we get lexical scope owner instance for use-case slots
          return !useComponent
              ? target.parent
              : target.vnode.ctx || target.parent; // eslint-disable-line @typescript-eslint/no-explicit-any
      }
  }
  function setupLifeCycle(i18n, target, composer) {
      let emitter = null;
      {
          vue.onMounted(() => {
              // inject composer instance to DOM for intlify-devtools
              if ((__VUE_PROD_DEVTOOLS__) &&
                  !false &&
                  target.vnode.el) {
                  target.vnode.el.__VUE_I18N__ = composer;
                  emitter = createEmitter();
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  const _composer = composer;
                  _composer[EnableEmitter] && _composer[EnableEmitter](emitter);
                  emitter.on('*', addTimelineEvent);
              }
          }, target);
          vue.onUnmounted(() => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const _composer = composer;
              // remove composer instance from DOM for intlify-devtools
              if ((__VUE_PROD_DEVTOOLS__) &&
                  !false &&
                  target.vnode.el &&
                  target.vnode.el.__VUE_I18N__) {
                  emitter && emitter.off('*', addTimelineEvent);
                  _composer[DisableEmitter] && _composer[DisableEmitter]();
                  delete target.vnode.el.__VUE_I18N__;
              }
              i18n.__deleteInstance(target);
              // dispose extended resources
              const dispose = _composer[DisposeSymbol];
              if (dispose) {
                  dispose();
                  delete _composer[DisposeSymbol];
              }
          }, target);
      }
  }
  function useI18nForLegacy(instance, scope, root, options = {} // eslint-disable-line @typescript-eslint/no-explicit-any
  ) {
      const isLocalScope = scope === 'local';
      const _composer = vue.shallowRef(null);
      if (isLocalScope &&
          instance.proxy &&
          !(instance.proxy.$options.i18n || instance.proxy.$options.__i18n)) {
          throw createI18nError(I18nErrorCodes.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
      }
      const _inheritLocale = isBoolean(options.inheritLocale)
          ? options.inheritLocale
          : !isString(options.locale);
      const _locale = vue.ref(
      // prettier-ignore
      !isLocalScope || _inheritLocale
          ? root.locale.value
          : isString(options.locale)
              ? options.locale
              : DEFAULT_LOCALE);
      const _fallbackLocale = vue.ref(
      // prettier-ignore
      !isLocalScope || _inheritLocale
          ? root.fallbackLocale.value
          : isString(options.fallbackLocale) ||
              isArray$1(options.fallbackLocale) ||
              isPlainObject$3(options.fallbackLocale) ||
              options.fallbackLocale === false
              ? options.fallbackLocale
              : _locale.value);
      const _messages = vue.ref(getLocaleMessages(_locale.value, options));
      // prettier-ignore
      const _datetimeFormats = vue.ref(isPlainObject$3(options.datetimeFormats)
          ? options.datetimeFormats
          : { [_locale.value]: {} });
      // prettier-ignore
      const _numberFormats = vue.ref(isPlainObject$3(options.numberFormats)
          ? options.numberFormats
          : { [_locale.value]: {} });
      // prettier-ignore
      const _missingWarn = isLocalScope
          ? root.missingWarn
          : isBoolean(options.missingWarn) || isRegExp(options.missingWarn)
              ? options.missingWarn
              : true;
      // prettier-ignore
      const _fallbackWarn = isLocalScope
          ? root.fallbackWarn
          : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn)
              ? options.fallbackWarn
              : true;
      // prettier-ignore
      const _fallbackRoot = isLocalScope
          ? root.fallbackRoot
          : isBoolean(options.fallbackRoot)
              ? options.fallbackRoot
              : true;
      // configure fall back to root
      const _fallbackFormat = !!options.fallbackFormat;
      // runtime missing
      const _missing = isFunction$1(options.missing) ? options.missing : null;
      // postTranslation handler
      const _postTranslation = isFunction$1(options.postTranslation)
          ? options.postTranslation
          : null;
      // prettier-ignore
      const _warnHtmlMessage = isLocalScope
          ? root.warnHtmlMessage
          : isBoolean(options.warnHtmlMessage)
              ? options.warnHtmlMessage
              : true;
      const _escapeParameter = !!options.escapeParameter;
      // prettier-ignore
      const _modifiers = isLocalScope
          ? root.modifiers
          : isPlainObject$3(options.modifiers)
              ? options.modifiers
              : {};
      // pluralRules
      const _pluralRules = options.pluralRules || (isLocalScope && root.pluralRules);
      // track reactivity
      function trackReactivityValues() {
          return [
              _locale.value,
              _fallbackLocale.value,
              _messages.value,
              _datetimeFormats.value,
              _numberFormats.value
          ];
      }
      // locale
      const locale = vue.computed({
          get: () => {
              return _composer.value ? _composer.value.locale.value : _locale.value;
          },
          set: val => {
              if (_composer.value) {
                  _composer.value.locale.value = val;
              }
              _locale.value = val;
          }
      });
      // fallbackLocale
      const fallbackLocale = vue.computed({
          get: () => {
              return _composer.value
                  ? _composer.value.fallbackLocale.value
                  : _fallbackLocale.value;
          },
          set: val => {
              if (_composer.value) {
                  _composer.value.fallbackLocale.value = val;
              }
              _fallbackLocale.value = val;
          }
      });
      // messages
      const messages = vue.computed(() => {
          if (_composer.value) {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              return _composer.value.messages.value;
          }
          else {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              return _messages.value;
          }
      });
      const datetimeFormats = vue.computed(() => _datetimeFormats.value);
      const numberFormats = vue.computed(() => _numberFormats.value);
      function getPostTranslationHandler() {
          return _composer.value
              ? _composer.value.getPostTranslationHandler()
              : _postTranslation;
      }
      function setPostTranslationHandler(handler) {
          if (_composer.value) {
              _composer.value.setPostTranslationHandler(handler);
          }
      }
      function getMissingHandler() {
          return _composer.value ? _composer.value.getMissingHandler() : _missing;
      }
      function setMissingHandler(handler) {
          if (_composer.value) {
              _composer.value.setMissingHandler(handler);
          }
      }
      function warpWithDeps(fn) {
          trackReactivityValues();
          return fn();
      }
      function t(...args) {
          return _composer.value
              ? warpWithDeps(() => Reflect.apply(_composer.value.t, null, [...args]))
              : warpWithDeps(() => '');
      }
      function rt(...args) {
          return _composer.value
              ? Reflect.apply(_composer.value.rt, null, [...args])
              : '';
      }
      function d(...args) {
          return _composer.value
              ? warpWithDeps(() => Reflect.apply(_composer.value.d, null, [...args]))
              : warpWithDeps(() => '');
      }
      function n(...args) {
          return _composer.value
              ? warpWithDeps(() => Reflect.apply(_composer.value.n, null, [...args]))
              : warpWithDeps(() => '');
      }
      function tm(key) {
          return _composer.value ? _composer.value.tm(key) : {};
      }
      function te(key, locale) {
          return _composer.value ? _composer.value.te(key, locale) : false;
      }
      function getLocaleMessage(locale) {
          return _composer.value ? _composer.value.getLocaleMessage(locale) : {};
      }
      function setLocaleMessage(locale, message) {
          if (_composer.value) {
              _composer.value.setLocaleMessage(locale, message);
              _messages.value[locale] = message;
          }
      }
      function mergeLocaleMessage(locale, message) {
          if (_composer.value) {
              _composer.value.mergeLocaleMessage(locale, message);
          }
      }
      function getDateTimeFormat(locale) {
          return _composer.value ? _composer.value.getDateTimeFormat(locale) : {};
      }
      function setDateTimeFormat(locale, format) {
          if (_composer.value) {
              _composer.value.setDateTimeFormat(locale, format);
              _datetimeFormats.value[locale] = format;
          }
      }
      function mergeDateTimeFormat(locale, format) {
          if (_composer.value) {
              _composer.value.mergeDateTimeFormat(locale, format);
          }
      }
      function getNumberFormat(locale) {
          return _composer.value ? _composer.value.getNumberFormat(locale) : {};
      }
      function setNumberFormat(locale, format) {
          if (_composer.value) {
              _composer.value.setNumberFormat(locale, format);
              _numberFormats.value[locale] = format;
          }
      }
      function mergeNumberFormat(locale, format) {
          if (_composer.value) {
              _composer.value.mergeNumberFormat(locale, format);
          }
      }
      const wrapper = {
          get id() {
              return _composer.value ? _composer.value.id : -1;
          },
          locale,
          fallbackLocale,
          messages,
          datetimeFormats,
          numberFormats,
          get inheritLocale() {
              return _composer.value ? _composer.value.inheritLocale : _inheritLocale;
          },
          set inheritLocale(val) {
              if (_composer.value) {
                  _composer.value.inheritLocale = val;
              }
          },
          get availableLocales() {
              return _composer.value
                  ? _composer.value.availableLocales
                  : Object.keys(_messages.value);
          },
          get modifiers() {
              return (_composer.value ? _composer.value.modifiers : _modifiers);
          },
          get pluralRules() {
              return (_composer.value ? _composer.value.pluralRules : _pluralRules);
          },
          get isGlobal() {
              return _composer.value ? _composer.value.isGlobal : false;
          },
          get missingWarn() {
              return _composer.value ? _composer.value.missingWarn : _missingWarn;
          },
          set missingWarn(val) {
              if (_composer.value) {
                  _composer.value.missingWarn = val;
              }
          },
          get fallbackWarn() {
              return _composer.value ? _composer.value.fallbackWarn : _fallbackWarn;
          },
          set fallbackWarn(val) {
              if (_composer.value) {
                  _composer.value.missingWarn = val;
              }
          },
          get fallbackRoot() {
              return _composer.value ? _composer.value.fallbackRoot : _fallbackRoot;
          },
          set fallbackRoot(val) {
              if (_composer.value) {
                  _composer.value.fallbackRoot = val;
              }
          },
          get fallbackFormat() {
              return _composer.value ? _composer.value.fallbackFormat : _fallbackFormat;
          },
          set fallbackFormat(val) {
              if (_composer.value) {
                  _composer.value.fallbackFormat = val;
              }
          },
          get warnHtmlMessage() {
              return _composer.value
                  ? _composer.value.warnHtmlMessage
                  : _warnHtmlMessage;
          },
          set warnHtmlMessage(val) {
              if (_composer.value) {
                  _composer.value.warnHtmlMessage = val;
              }
          },
          get escapeParameter() {
              return _composer.value
                  ? _composer.value.escapeParameter
                  : _escapeParameter;
          },
          set escapeParameter(val) {
              if (_composer.value) {
                  _composer.value.escapeParameter = val;
              }
          },
          t,
          getPostTranslationHandler,
          setPostTranslationHandler,
          getMissingHandler,
          setMissingHandler,
          rt,
          d,
          n,
          tm,
          te,
          getLocaleMessage,
          setLocaleMessage,
          mergeLocaleMessage,
          getDateTimeFormat,
          setDateTimeFormat,
          mergeDateTimeFormat,
          getNumberFormat,
          setNumberFormat,
          mergeNumberFormat
      };
      function sync(composer) {
          composer.locale.value = _locale.value;
          composer.fallbackLocale.value = _fallbackLocale.value;
          Object.keys(_messages.value).forEach(locale => {
              composer.mergeLocaleMessage(locale, _messages.value[locale]);
          });
          Object.keys(_datetimeFormats.value).forEach(locale => {
              composer.mergeDateTimeFormat(locale, _datetimeFormats.value[locale]);
          });
          Object.keys(_numberFormats.value).forEach(locale => {
              composer.mergeNumberFormat(locale, _numberFormats.value[locale]);
          });
          composer.escapeParameter = _escapeParameter;
          composer.fallbackFormat = _fallbackFormat;
          composer.fallbackRoot = _fallbackRoot;
          composer.fallbackWarn = _fallbackWarn;
          composer.missingWarn = _missingWarn;
          composer.warnHtmlMessage = _warnHtmlMessage;
      }
      vue.onBeforeMount(() => {
          if (instance.proxy == null || instance.proxy.$i18n == null) {
              throw createI18nError(I18nErrorCodes.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const composer = (_composer.value = instance.proxy.$i18n
              .__composer);
          if (scope === 'global') {
              _locale.value = composer.locale.value;
              _fallbackLocale.value = composer.fallbackLocale.value;
              _messages.value = composer.messages.value;
              _datetimeFormats.value = composer.datetimeFormats.value;
              _numberFormats.value = composer.numberFormats.value;
          }
          else if (isLocalScope) {
              sync(composer);
          }
      });
      return wrapper;
  }
  const globalExportProps = [
      'locale',
      'fallbackLocale',
      'availableLocales'
  ];
  const globalExportMethods = ['t', 'rt', 'd', 'n', 'tm', 'te']
      ;
  function injectGlobalFields(app, composer) {
      const i18n = Object.create(null);
      globalExportProps.forEach(prop => {
          const desc = Object.getOwnPropertyDescriptor(composer, prop);
          if (!desc) {
              throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
          }
          const wrap = vue.isRef(desc.value) // check computed props
              ? {
                  get() {
                      return desc.value.value;
                  },
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  set(val) {
                      desc.value.value = val;
                  }
              }
              : {
                  get() {
                      return desc.get && desc.get();
                  }
              };
          Object.defineProperty(i18n, prop, wrap);
      });
      app.config.globalProperties.$i18n = i18n;
      globalExportMethods.forEach(method => {
          const desc = Object.getOwnPropertyDescriptor(composer, method);
          if (!desc || !desc.value) {
              throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
          }
          Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
      });
      const dispose = () => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          delete app.config.globalProperties.$i18n;
          globalExportMethods.forEach(method => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              delete app.config.globalProperties[`$${method}`];
          });
      };
      return dispose;
  }

  {
      initFeatureFlags();
  }
  // register message compiler at vue-i18n
  if (__INTLIFY_JIT_COMPILATION__) {
      registerMessageCompiler(compile);
  }
  else {
      registerMessageCompiler(compileToFunction);
  }
  // register message resolver at vue-i18n
  registerMessageResolver(resolveValue);
  // register fallback locale at vue-i18n
  registerLocaleFallbacker(fallbackWithLocaleChain);
  // NOTE: experimental !!
  if (__INTLIFY_PROD_DEVTOOLS__) {
      const target = getGlobalThis();
      target.__INTLIFY__ = true;
      setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
  }

  var barcodeMsg$1 = {
    "CODE128": "CODE128\u662F\u4E00\u79CD\u7528\u9014\u5E7F\u6CDB\u7684\u6761\u5F62\u7801\u3002\u5B83\u652F\u6301\u6240\u6709128\u4E2AASCII\u5B57\u7B26\uFF0C\u4F46\u4E5F\u80FD\u9AD8\u6548\u5730\u7F16\u7801\u6570\u5B57\u3002\u5B83\u6709\u4E09\u79CD\u6A21\u5F0F(A/B/C)\uFF0C\u4F46\u53EF\u4EE5\u5728\u5B83\u4EEC\u4E4B\u95F4\u968F\u65F6\u5207\u6362\u3002CODE128\u662F\u9ED8\u8BA4\u7684\u6761\u7801\uFF0C\u5982\u679C\u6CA1\u6709\u6307\u5B9A\u5176\u4ED6\u6761\u7801\uFF0C\u5219\u4F1A\u9009\u62E9\u5B83\u3002\u793A\u4F8B\uFF1AExample1234",
    "CODE128A": "\u5982\u679C\u6761\u5F62\u7801\u626B\u63CF\u5668\u53EA\u652F\u6301\u4E00\u79CD\u7C7B\u578B\u7684CODE128\uFF0C\u60A8\u53EF\u4EE5\u5F3A\u5236\u8BE5\u6A21\u5F0F\u3002\u793A\u4F8B\uFF1AEXAMPLE\n1234",
    "CODE128B": "\u5982\u679C\u6761\u5F62\u7801\u626B\u63CF\u5668\u53EA\u652F\u6301\u4E00\u79CD\u7C7B\u578B\u7684CODE128\uFF0C\u60A8\u53EF\u4EE5\u5F3A\u5236\u8BE5\u6A21\u5F0F\u3002\u793A\u4F8B\uFF1AExample1234",
    "CODE128C": "\u5982\u679C\u6761\u5F62\u7801\u626B\u63CF\u5668\u53EA\u652F\u6301\u4E00\u79CD\u7C7B\u578B\u7684CODE128\uFF0C\u60A8\u53EF\u4EE5\u5F3A\u5236\u8BE5\u6A21\u5F0F\u3002\u793A\u4F8B\uFF1A12345678",
    "CODE39": "CODE39\u662F\u4E00\u4E2A\u65E7\u7684\u6761\u5F62\u7801\u7C7B\u578B\uFF0C\u53EF\u4EE5\u7F16\u7801\u6570\u5B57\u3001\u5927\u5199\u5B57\u6BCD\u548C\u4E00\u4E9B\u7279\u6B8A\u5B57\u7B26(-\u3001.\u3001$\u3001/\u3001+\u3001%\u548C\u7A7A\u683C)\u3002\u5B83\u5728\u8FC7\u53BB\u662F\u4E00\u79CD\u5E38\u89C1\u7684\u6761\u5F62\u7801\u7C7B\u578B\uFF0C\u4F46\u5982\u679C\u4E0D\u662F\u56E0\u4E3A\u9057\u7559\u539F\u56E0\uFF0C\u5EFA\u8BAE\u4F7F\u7528CODE128\u3002\u793A\u4F8B\uFF1AABCDEFG",
    "EAN2": "EAN\u6709\u591A\u79CD\u5F62\u5F0F\uFF0C\u6700\u5E38\u7528\u7684\u662FEAN-13 (GTIN-13)\uFF0C\u5728\u4E16\u754C\u8303\u56F4\u5185\u7528\u4E8E\u6807\u8BB0\u4EA7\u54C1\u7684\u8EAB\u4EFD\u3002 \n\u652F\u6301\u683C\u5F0FEAN-13, EAN-8\u548CUPC\u4EE5\u53CA\u6761\u7801\u63D2\u4EF6EAN-5\u548CEAN-2\u3002\u793A\u4F8B\uFF1A53",
    "EAN5": "EAN\u6709\u591A\u79CD\u5F62\u5F0F\uFF0C\u6700\u5E38\u7528\u7684\u662FEAN-13 (GTIN-13)\uFF0C\u5728\u4E16\u754C\u8303\u56F4\u5185\u7528\u4E8E\u6807\u8BB0\u4EA7\u54C1\u7684\u8EAB\u4EFD\u3002 \n\u652F\u6301\u683C\u5F0FEAN-13, EAN-8\u548CUPC\u4EE5\u53CA\u6761\u7801\u63D2\u4EF6EAN-5\u548CEAN-2\u3002\u793A\u4F8B\uFF1A54495",
    "EAN8": "EAN\u6709\u591A\u79CD\u5F62\u5F0F\uFF0C\u6700\u5E38\u7528\u7684\u662FEAN-13 (GTIN-13)\uFF0C\u5728\u4E16\u754C\u8303\u56F4\u5185\u7528\u4E8E\u6807\u8BB0\u4EA7\u54C1\u7684\u8EAB\u4EFD\u3002 \n\u652F\u6301\u683C\u5F0FEAN-13, EAN-8\u548CUPC\u4EE5\u53CA\u6761\u7801\u63D2\u4EF6EAN-5\u548CEAN-2\u3002\u793A\u4F8B\uFF1A96385074",
    "EAN13": "EAN\u6709\u591A\u79CD\u5F62\u5F0F\uFF0C\u6700\u5E38\u7528\u7684\u662FEAN-13 (GTIN-13)\uFF0C\u5728\u4E16\u754C\u8303\u56F4\u5185\u7528\u4E8E\u6807\u8BB0\u4EA7\u54C1\u7684\u8EAB\u4EFD\u3002 \n\u652F\u6301\u683C\u5F0FEAN-13, EAN-8\u548CUPC\u4EE5\u53CA\u6761\u7801\u63D2\u4EF6EAN-5\u548CEAN-2\u3002\u793A\u4F8B\uFF1A5901234123457",
    "UPC": "EAN\u6709\u591A\u79CD\u5F62\u5F0F\uFF0C\u6700\u5E38\u7528\u7684\u662FEAN-13 (GTIN-13)\uFF0C\u5728\u4E16\u754C\u8303\u56F4\u5185\u7528\u4E8E\u6807\u8BB0\u4EA7\u54C1\u7684\u8EAB\u4EFD\u3002 \n\u652F\u6301\u683C\u5F0FEAN-13, EAN-8\u548CUPC\u4EE5\u53CA\u6761\u7801\u63D2\u4EF6EAN-5\u548CEAN-2\u3002\u793A\u4F8B\uFF1A123456789999",
    "UPC-E": "EAN\u6709\u591A\u79CD\u5F62\u5F0F\uFF0C\u6700\u5E38\u7528\u7684\u662FEAN-13 (GTIN-13)\uFF0C\u5728\u4E16\u754C\u8303\u56F4\u5185\u7528\u4E8E\u6807\u8BB0\u4EA7\u54C1\u7684\u8EAB\u4EFD\u3002 \n\u652F\u6301\u683C\u5F0FEAN-13, EAN-8\u548CUPC\u4EE5\u53CA\u6761\u7801\u63D2\u4EF6EAN-5\u548CEAN-2\u3002\u793A\u4F8B\uFF1A12345678",
    "ITF": "ITF-14 (Interleaved Two of Five)\u662F5\u4E2A\u6761\u7801\u4E2D2\u4E2A\u6761\u7801\u7684GS1\u5B9E\u73B0\uFF0C\u7528\u4E8E\u7F16\u7801\u5168\u7403\u8D38\u6613\u9879\u76EE\u7F16\u53F7\u3002ITF-14\u7B26\u53F7\u901A\u5E38\u7528\u4E8E\u4EA7\u54C1\u7684\u5305\u88C5\u7EA7\u522B\uFF0C\u4F8B\u5982\u4E00\u76D224\u7F50\u6C64\u3002ITF-14\u5C06\u59CB\u7EC8\u7F16\u780114\u4E2A\u6570\u5B57\u3002 \nITF-14\u6761\u7801\u7684\u6700\u540E\u4E00\u4E2A\u6570\u5B57\u662F\u6821\u9A8C\u548C\u3002\u5B83\u901A\u5E38\u5305\u62EC\u5728\u5185\uFF0C\u4F46\u5982\u679C\u9057\u6F0F\u4E86\u5B83\uFF0CJsBarcode\u53EF\u4EE5\u81EA\u52A8\u4E3A\u60A8\u8BA1\u7B97\u5B83\u3002\u793A\u4F8B\uFF1A12345678",
    "ITF14": "ITF-14 (Interleaved Two of Five)\u662F5\u4E2A\u6761\u7801\u4E2D2\u4E2A\u6761\u7801\u7684GS1\u5B9E\u73B0\uFF0C\u7528\u4E8E\u7F16\u7801\u5168\u7403\u8D38\u6613\u9879\u76EE\u7F16\u53F7\u3002ITF-14\u7B26\u53F7\u901A\u5E38\u7528\u4E8E\u4EA7\u54C1\u7684\u5305\u88C5\u7EA7\u522B\uFF0C\u4F8B\u5982\u4E00\u76D224\u7F50\u6C64\u3002ITF-14\u5C06\u59CB\u7EC8\u7F16\u780114\u4E2A\u6570\u5B57\u3002 \nITF-14\u6761\u7801\u7684\u6700\u540E\u4E00\u4E2A\u6570\u5B57\u662F\u6821\u9A8C\u548C\u3002\u5B83\u901A\u5E38\u5305\u62EC\u5728\u5185\uFF0C\u4F46\u5982\u679C\u9057\u6F0F\u4E86\u5B83\uFF0CJsBarcode\u53EF\u4EE5\u81EA\u52A8\u4E3A\u60A8\u8BA1\u7B97\u5B83\u3002\u793A\u4F8B\uFF1A12345678901231",
    "MSI": "MSI or Modified Plessey\u662F\u4E00\u79CD\u7531MSI\u6570\u636E\u516C\u53F8\u5F00\u53D1\u7684\u6761\u5F62\u7801\uFF0C\u4E3B\u8981\u7528\u4E8E\u5E93\u5B58\u63A7\u5236\uFF0C\u5728\u4ED3\u5E93\u73AF\u5883\u4E2D\u6807\u8BB0\u5B58\u50A8\u5BB9\u5668\u548C\u8D27\u67B6\u3002\u652F\u6301\u6570\u5B570 ~ 9\u3002\u63D0\u4F9BMod 10, Mod 11, Mod 1010\u548CMod 1110\u7684\u81EA\u52A8\u6821\u9A8C\u548C\u8BA1\u7B97\u3002\u793A\u4F8B\uFF1A1234",
    "MSI10": "MSI or Modified Plessey\u662F\u4E00\u79CD\u7531MSI\u6570\u636E\u516C\u53F8\u5F00\u53D1\u7684\u6761\u5F62\u7801\uFF0C\u4E3B\u8981\u7528\u4E8E\u5E93\u5B58\u63A7\u5236\uFF0C\u5728\u4ED3\u5E93\u73AF\u5883\u4E2D\u6807\u8BB0\u5B58\u50A8\u5BB9\u5668\u548C\u8D27\u67B6\u3002\u652F\u6301\u6570\u5B570 ~ 9\u3002\u63D0\u4F9BMod 10, Mod 11, Mod 1010\u548CMod 1110\u7684\u81EA\u52A8\u6821\u9A8C\u548C\u8BA1\u7B97\u3002\u793A\u4F8B\uFF1A1234",
    "MSI11": "MSI or Modified Plessey\u662F\u4E00\u79CD\u7531MSI\u6570\u636E\u516C\u53F8\u5F00\u53D1\u7684\u6761\u5F62\u7801\uFF0C\u4E3B\u8981\u7528\u4E8E\u5E93\u5B58\u63A7\u5236\uFF0C\u5728\u4ED3\u5E93\u73AF\u5883\u4E2D\u6807\u8BB0\u5B58\u50A8\u5BB9\u5668\u548C\u8D27\u67B6\u3002\u652F\u6301\u6570\u5B570 ~ 9\u3002\u63D0\u4F9BMod 10, Mod 11, Mod 1010\u548CMod 1110\u7684\u81EA\u52A8\u6821\u9A8C\u548C\u8BA1\u7B97\u3002\u793A\u4F8B\uFF1A1234",
    "MSI1010": "MSI or Modified Plessey\u662F\u4E00\u79CD\u7531MSI\u6570\u636E\u516C\u53F8\u5F00\u53D1\u7684\u6761\u5F62\u7801\uFF0C\u4E3B\u8981\u7528\u4E8E\u5E93\u5B58\u63A7\u5236\uFF0C\u5728\u4ED3\u5E93\u73AF\u5883\u4E2D\u6807\u8BB0\u5B58\u50A8\u5BB9\u5668\u548C\u8D27\u67B6\u3002\u652F\u6301\u6570\u5B570 ~ 9\u3002\u63D0\u4F9BMod 10, Mod 11, Mod 1010\u548CMod 1110\u7684\u81EA\u52A8\u6821\u9A8C\u548C\u8BA1\u7B97\u3002\u793A\u4F8B\uFF1A1234",
    "MSI1110": "MSI or Modified Plessey\u662F\u4E00\u79CD\u7531MSI\u6570\u636E\u516C\u53F8\u5F00\u53D1\u7684\u6761\u5F62\u7801\uFF0C\u4E3B\u8981\u7528\u4E8E\u5E93\u5B58\u63A7\u5236\uFF0C\u5728\u4ED3\u5E93\u73AF\u5883\u4E2D\u6807\u8BB0\u5B58\u50A8\u5BB9\u5668\u548C\u8D27\u67B6\u3002\u652F\u6301\u6570\u5B570 ~ 9\u3002\u63D0\u4F9BMod 10, Mod 11, Mod 1010\u548CMod 1110\u7684\u81EA\u52A8\u6821\u9A8C\u548C\u8BA1\u7B97\u3002\u793A\u4F8B\uFF1A1234",
    "codabar": "CODE39\u662F\u4E00\u4E2A\u65E7\u7684\u6761\u5F62\u7801\u7C7B\u578B\uFF0C\u53EF\u4EE5\u7F16\u7801\u6570\u5B57\u3001\u5927\u5199\u5B57\u6BCD\u548C\u4E00\u4E9B\u7279\u6B8A\u5B57\u7B26(-\u3001.\u3001$\u3001/\u3001+\u3001%\u548C\u7A7A\u683C)\u3002\u5B83\u5728\u8FC7\u53BB\u662F\u4E00\u79CD\u5E38\u89C1\u7684\u6761\u5F62\u7801\u7C7B\u578B\uFF0C\u4F46\u5982\u679C\u4E0D\u662F\u56E0\u4E3A\u9057\u7559\u539F\u56E0\uFF0C\u5EFA\u8BAE\u4F7F\u7528CODE128\u3002\u793A\u4F8B\uFF1A1234567890, C1234567890D",
    "pharmacode": "Pharmacode\u662F\u4E00\u79CD\u7528\u4E8E\u5236\u836F\u884C\u4E1A\u7684\u6761\u5F62\u7801\u3002\u5B83\u53EF\u4EE5\u5C06\u6570\u5B573\u7F16\u7801\u4E3A131070\u3002\u793A\u4F8B\uFF1A1234"
  };

  var common$1 = {
    "common.auto.height": "\u81EA\u52A8\u9AD8\u5EA6",
    "common.custom": "\u81EA\u5B9A\u4E49",
    "common.default.name": "\u9ED8\u8BA4\u540D\u79F0",
    "common.width": "\u5BBD",
    "common.height": "\u9AD8",
    "common.close": "\u5173\u95ED",
    "common.setting": "\u8BBE\u7F6E",
    "common.switch.open": "\u5F00",
    "common.switch.close": "\u5173",
    "common.panel": "\u9762\u677F",
    "common.layout": "\u5E03\u5C40",
    "common.basics": "\u57FA\u7840",
    "common.attr": "\u5C5E\u6027",
    "common.content": "\u5185\u5BB9",
    "common.paper": "\u7EB8\u5F20",
    "common.unit": "\u5355\u4F4D",
    "common.font.size.unit": "\u5B57\u4F53\u5355\u4F4D",
    "common.show": "\u663E\u793A",
    "common.hidden": "\u9690\u85CF",
    "common.xy": "\u5750\u6807(x/y)",
    "common.position": "\u4F4D\u7F6E",
    "common.place.select": "\u8BF7\u9009\u62E9",
    "common.business.widget": "\u4E1A\u52A1\u5B57\u6BB5",
    "common.common.widget": "\u516C\u5171\u7EC4\u4EF6",
    "common.show.element.design.border": "\u663E\u793A\u5143\u7D20\u8FB9\u754C",
    "common.panel.minimap.zoom.in": "\u653E\u5927",
    "common.panel.minimap.zoom.out": "\u7F29\u5C0F",
    "common.panel.minimap.navigation": "\u5BFC\u822A",
    "common.save.success": "\u4FDD\u5B58\u6210\u529F",
    "common.save.fail": "\u4FDD\u5B58\u5931\u8D25",
    "common.auto": "\u81EA\u52A8",
    "common.fixed": "\u56FA\u5B9A",
    "common.local.upload": "\u672C\u5730\u4E0A\u4F20",
    "common.image.url": "\u56FE\u7247\u94FE\u63A5",
    "common.text": "\u6587\u672C",
    "common.barcode": "\u6761\u5F62\u7801",
    "common.qrcode": "\u4E8C\u7EF4\u7801",
    "common.dotted": "\u70B9",
    "common.dashed": "\u7EBF",
    "common.operation.history": "\u5386\u53F2\u64CD\u4F5C",
    "common.mini.map": "\u5C0F\u5730\u56FE",
    "common.qr.errorCorrectionLevel.low": "\u4F4E",
    "common.qr.errorCorrectionLevel.medium": "\u4E2D\u7B49",
    "common.qr.errorCorrectionLevel.quartile": "\u56DB\u5206\u4E4B\u4E00",
    "common.qr.errorCorrectionLevel.high": "\u9AD8"
  };

  var font$1 = {
    "font": "\u5B57\u4F53",
    "font.size": "\u5B57\u53F7",
    "font.default": "\u9ED8\u8BA4"
  };

  var handelPanel$1 = {
    "handle.drag.snap": "\u62D6\u52A8\u78C1\u5438",
    "handle.drag.snap.panel": "\u8FB9\u754C\u9650\u5236",
    "handle.watermark": "\u6C34\u5370",
    "handle.width&height": "\u5BBD/\u9AD8",
    "handle.page.width": "\u7EB8\u5F20\u5BBD",
    "handle.page.height": "\u7EB8\u5F20\u9AD8",
    "handle.template.name": "\u6A21\u7248\u540D\u79F0",
    "handle.please.template.name": "\u8BF7\u8F93\u5165\u6A21\u7248\u540D\u79F0",
    "handle.formatter": "\u683C\u5F0F\u5316\u5668",
    "handle.lock.edit": "\u9501\u5B9A\u7F16\u8F91",
    "handle.border.radius": "\u5706\u89D2\u8FB9\u6846",
    "handle.opacity": "\u900F\u660E\u5EA6",
    "handle.rotate": "\u65CB\u8F6C\u89D2\u5EA6",
    "handle.content.type": "\u5185\u5BB9\u7C7B\u578B",
    "handle.barCode.type": "\u6761\u7801\u7C7B\u578B",
    "handle.barCode.value": "\u6761\u7801\u503C",
    "handle.qrCode.errorCorrectionLevel": "\u5BB9\u9519\u7EA7\u522B",
    "handle.qrCode.qrCodeScale": "\u4E8C\u7EF4\u7801\u7F29\u653E",
    "handle.qrCode.qrCodeScale.tips": "\u6570\u5B57\u8D8A\u5927\u8D8A\u6E05\u6670",
    "handle.text.auto.height": "\u81EA\u52A8\u9AD8\u5EA6",
    "handle.line.break": "\u6362\u884C",
    "handle.line.height": "\u884C\u9AD8",
    "handle.line.width": "\u7EBF\u5BBD",
    "handle.dotted.style": "\u865A\u7EBF\u6837\u5F0F",
    "handle.padding": "\u5185\u8FB9\u8DDD",
    "handle.padding.top": "\u9876\u5185\u8FB9\u8DDD",
    "handle.padding.bottom": "\u5E95\u5185\u8FB9\u8DDD",
    "handle.padding.left": "\u5DE6\u5185\u8FB9\u8DDD",
    "handle.padding.right": "\u53F3\u5185\u8FB9\u8DDD",
    "handle.top": "\u9876",
    "handle.bottom": "\u5E95",
    "handle.left": "\u5DE6",
    "handle.right": "\u53F3",
    "handle.margin": "\u5916\u8FB9\u8DDD",
    "handle.margin.top": "\u9876\u5916\u8FB9\u8DDD",
    "handle.margin.bottom": "\u5E95\u5916\u8FB9\u8DDD",
    "handle.margin.left": "\u5DE6\u5916\u8FB9\u8DDD",
    "handle.margin.right": "\u53F3\u5916\u8FB9\u8DDD",
    "handle.fixed.position": "\u56FA\u5B9A\u4F4D\u7F6E",
    "handle.clear.canvas": "\u6E05\u7A7A\u753B\u5E03",
    "handle.print.strategy": "\u6253\u5370\u7B56\u7565",
    "handle.display.strategy": "\u663E\u793A\u7B56\u7565",
    "handle.height.attr": "\u9AD8\u5EA6\u5C5E\u6027",
    "handle.table.hidden.head": "\u9690\u85CF\u8868\u5934",
    "handle.table.page.head": "\u5206\u9875\u8868\u5934",
    "handle.add.statistics.row": "\u65B0\u589E\u7EDF\u8BA1\u884C",
    "handle.column": "\u5217",
    "handle.table.statistics.type": "\u7EDF\u8BA1\u65B9\u5F0F",
    "handle.table.every.page.statistics": "\u6BCF\u9875\u7EDF\u8BA1",
    "handle.table.all.table.statistics": "\u6574\u8868\u7EDF\u8BA1"
  };

  var preview$1 = {
    "preview.download.pdf": "\u4E0B\u8F7DPDF"
  };

  var provider$1 = {
    "provider.text.default.data": "\u6EDA\u6EDA\u957F\u6C5F\u4E1C\u901D\u6C34",
    "provider.panel": "\u9762\u677F",
    "provider.text": "\u6587\u672C",
    "provider.text.time": "\u65F6\u95F4\u6587\u672C",
    "provider.image": "\u56FE\u7247",
    "provider.data.table": "\u6570\u636E\u8868\u683C",
    "provider.free.table": "\u81EA\u7531\u8868\u683C",
    "provider.rect": "\u77E9\u5F62",
    "provider.horizontal.line": "\u6A2A\u7EBF",
    "provider.dotted.horizontal.line": "\u6A2A\u865A\u7EBF",
    "provider.vertical.line": "\u7AD6\u7EBF",
    "provider.dotted.vertical.line": "\u7AD6\u865A\u7EBF",
    "provider.container": "\u5BB9\u5668",
    "provider.page.header": "\u9875\u7709",
    "provider.page.footer": "\u9875\u811A",
    "provider.page.num": "\u9875\u6570",
    "provider.svg.polygon line": "\u591A\u8FB9\u5F62",
    "provider.svg.line": "\u7EBF",
    "provider.svg.bezier.curve": "\u66F2\u7EBF",
    "provider.svg.bezier.curve.three": "\u66F2\u7EBF3",
    "provider.svg.circle": "\u5706",
    "provider.svg.ellipse": "\u692D\u5706",
    "provider.draw.panel": "\u753B\u677F"
  };

  var setting$1 = {
    "common.auto.connect": "\u81EA\u52A8\u8FDE\u63A5",
    "common.connect.status": "\u8FDE\u63A5\u72B6\u6001",
    "common.client.url": "\u5BA2\u6237\u7AEF\u5730\u57401"
  };

  var toolbar$1 = {
    "toolbar.chrome.print": "\u6D4F\u89C8\u5668\u6253\u5370",
    "toolbar.print": "\u6253\u5370",
    "toolbar.preview": "\u9884\u89C8",
    "toolbar.download": "\u4E0B\u8F7D",
    "toolbar.clear": "\u6E05\u7A7A",
    "toolbar.save": "\u4FDD\u5B58",
    "toolbar.widget": "\u63A7\u4EF6",
    "toolbar.page": "\u9875\u9762",
    "toolbar.printer.setting": "\u6253\u5370\u673A\u8BBE\u7F6E",
    "toolbar.history": "\u5386\u53F2",
    "toolbar.setting": "\u8BBE\u7F6E",
    "toolbar.style.blob": "\u52A0\u7C97",
    "toolbar.style.italic": "\u503E\u659C",
    "toolbar.style.underline": "\u4E0B\u5212\u7EBF",
    "toolbar.style.lineThrough": "\u5220\u9664\u7EBF",
    "toolbar.style.textAlignLeft": "\u5DE6\u5BF9\u9F50",
    "toolbar.style.textAlignCenter": "\u6C34\u5E73\u5C45\u4E2D",
    "toolbar.style.alignHorizontalCenter": "\u5C45\u4E2D\u5BF9\u9F50",
    "toolbar.style.textAlignRight": "\u53F3\u5BF9\u9F50",
    "toolbar.style.verticalAlignTop": "\u9876\u5BF9\u9F50",
    "toolbar.style.alignTop": "\u9876\u7AEF\u5BF9\u9F50",
    "toolbar.style.verticalAlignCenter": "\u5782\u76F4\u5C45\u4E2D",
    "toolbar.style.alignVerticalCenter": "\u5782\u76F4\u5C45\u4E2D\u5BF9\u9F50",
    "toolbar.style.verticalAlignBottom": "\u5E95\u5BF9\u9F50",
    "toolbar.style.alignBottom": "\u5E95\u7AEF\u5BF9\u9F50",
    "toolbar.style.arrangeHorizontalSpacing": "\u6C34\u5E73\u5E73\u5747\u5206\u5E03",
    "toolbar.style.arrangeVerticalSpacing": "\u5782\u76F4\u5E73\u5747\u5206\u5E03",
    "toolbar.style.lineBreak": "\u6362\u884C",
    "toolbar.style.borderAll": "\u8FB9\u6846",
    "toolbar.style.group": "\u7EC4\u5408",
    "toolbar.style.unGroup": "\u53D6\u6D88\u7EC4\u5408",
    "toolbar.printer": "\u6253\u5370\u673A",
    "toolbar.layer.top": "\u7F6E\u4E8E\u9876\u5C42",
    "toolbar.layer.up.one": "\u4E0A\u79FB\u4E00\u5C42",
    "toolbar.layer.bottom": "\u7F6E\u4E8E\u5E95\u5C42",
    "toolbar.layer.down.one": "\u4E0B\u79FB\u4E00\u5C42"
  };

  var zhCn = {
    ...barcodeMsg$1,
    ...common$1,
    ...font$1,
    ...handelPanel$1,
    ...preview$1,
    ...provider$1,
    ...setting$1,
    ...toolbar$1
  };

  var barcodeMsg = {
    "CODE128": "CODE128 is one of the more versatile barcodes. It has support for all 128 ASCII characters but does also encode numbers efficiently. It has three modes (A/B/C) but can switch between them at any time. CODE128 is the default barcode that will choose if nothing else is specified. Example: Example1234",
    "CODE128A": "If the barcode scanner only support one type of CODE128 you can force that mode. Example: EXAMPLE\n1234",
    "CODE128B": "If the barcode scanner only support one type of CODE128 you can force that mode. Example: Example1234",
    "CODE128C": "If the barcode scanner only support one type of CODE128 you can force that mode. Example: 12345678",
    "CODE39": "CODE39 is an old barcode type that can encode numbers, uppercase letters and a number of special characters (-, ., $, /, +, %, and space). It has been a common barcode type in the past but CODE128 is recommended if not for legacy reasons. Example: ABCDEFG",
    "EAN2": "EAN comes in a variety of forms, most commonly used is EAN-13 (GTIN-13) that is used on world wide to marking the identity of products.\nSupports the formats EAN-13, EAN-8 and UPC as well as the barcode addons EAN-5 and EAN-2. Example: 53",
    "EAN5": "EAN comes in a variety of forms, most commonly used is EAN-13 (GTIN-13) that is used on world wide to marking the identity of products.\nSupports the formats EAN-13, EAN-8 and UPC as well as the barcode addons EAN-5 and EAN-2. Example: 54495",
    "EAN8": "EAN comes in a variety of forms, most commonly used is EAN-13 (GTIN-13) that is used on world wide to marking the identity of products.\nSupports the formats EAN-13, EAN-8 and UPC as well as the barcode addons EAN-5 and EAN-2. Example: 96385074",
    "EAN13": "EAN comes in a variety of forms, most commonly used is EAN-13 (GTIN-13) that is used on world wide to marking the identity of products.\nSupports the formats EAN-13, EAN-8 and UPC as well as the barcode addons EAN-5 and EAN-2. Example: 5901234123457",
    "UPC": "EAN comes in a variety of forms, most commonly used is EAN-13 (GTIN-13) that is used on world wide to marking the identity of products.\nSupports the formats EAN-13, EAN-8 and UPC as well as the barcode addons EAN-5 and EAN-2. Example: 123456789999",
    "UPC-E": "EAN comes in a variety of forms, most commonly used is EAN-13 (GTIN-13) that is used on world wide to marking the identity of products.\nSupports the formats EAN-13, EAN-8 and UPC as well as the barcode addons EAN-5 and EAN-2. Example: 12345678",
    "ITF": "ITF-14 (Interleaved Two of Five) is the GS1 implementation of an Interleaved 2 of 5 bar code to encode a Global Trade Item Number. ITF-14 symbols are generally used on packaging levels of a product, such as a case box of 24 cans of soup. The ITF-14 will always encode 14 digits. Example: 12345678",
    "ITF14": "ITF-14 (Interleaved Two of Five) is the GS1 implementation of an Interleaved 2 of 5 bar code to encode a Global Trade Item Number. ITF-14 symbols are generally used on packaging levels of a product, such as a case box of 24 cans of soup. The ITF-14 will always encode 14 digits. Example: 12345678901231",
    "MSI": "MSI or Modified Plessey is a barcode developed by the MSI Data Corporation and is primarily used for inventory control, marking storage containers and shelves in warehouse environments. It supports digits 0-9. Provides automatic checksum calculation of Mod 10, Mod 11, Mod 1010 and Mod 1110. Example: 1234",
    "MSI10": "MSI or Modified Plessey is a barcode developed by the MSI Data Corporation and is primarily used for inventory control, marking storage containers and shelves in warehouse environments. It supports digits 0-9. Provides automatic checksum calculation of Mod 10, Mod 11, Mod 1010 and Mod 1110. Example: 1234",
    "MSI11": "MSI or Modified Plessey is a barcode developed by the MSI Data Corporation and is primarily used for inventory control, marking storage containers and shelves in warehouse environments. It supports digits 0-9. Provides automatic checksum calculation of Mod 10, Mod 11, Mod 1010 and Mod 1110. Example: 1234",
    "MSI1010": "MSI or Modified Plessey is a barcode developed by the MSI Data Corporation and is primarily used for inventory control, marking storage containers and shelves in warehouse environments. It supports digits 0-9. Provides automatic checksum calculation of Mod 10, Mod 11, Mod 1010 and Mod 1110. Example: 1234",
    "MSI1110": "MSI or Modified Plessey is a barcode developed by the MSI Data Corporation and is primarily used for inventory control, marking storage containers and shelves in warehouse environments. It supports digits 0-9. Provides automatic checksum calculation of Mod 10, Mod 11, Mod 1010 and Mod 1110. Example: 1234",
    "codabar": "CODE39 is an old barcode type that can encode numbers, uppercase letters and a number of special characters (-, ., $, /, +, %, and space). It has been a common barcode type in the past but CODE128 is recommended if not for legacy reasons. Example: 1234567890, C1234567890D",
    "pharmacode": "Pharmacode is a barcode used in the pharmaceutical industry. It can encode numbers 3 to 131070. Example: 1234"
  };

  var common = {
    "common.custom": "Custom",
    "common.default.name": "Default Name",
    "common.width": "Width",
    "common.height": "Height",
    "common.close": "Close",
    "common.setting": "Settings",
    "common.switch.open": "On",
    "common.switch.close": "Off",
    "common.panel": "Panel",
    "common.layout": "Layout",
    "common.basics": "Basics",
    "common.attr": "Attributes",
    "common.content": "Content",
    "common.paper": "Paper",
    "common.unit": "Unit",
    "common.font.size.unit": "Font Unit",
    "common.show": "Show",
    "common.hidden": "Hidden",
    "common.xy": "Coordinates (x/y)",
    "common.position": "Position",
    "common.place.select": "Please Select",
    "common.business.widget": "Business Field",
    "common.common.widget": "Common Component",
    "common.show.element.design.border": "Show Element Borders",
    "common.panel.minimap.zoom.in": "Zoom In",
    "common.panel.minimap.zoom.out": "Zoom Out",
    "common.panel.minimap.navigation": "Navigation",
    "common.save.success": "Save Successful",
    "common.save.fail": "Save Failed",
    "common.auto": "Auto",
    "common.fixed": "Fixed",
    "common.local.upload": "Local Upload",
    "common.image.url": "Image URL",
    "common.text": "Text",
    "common.barcode": "Barcode",
    "common.qrcode": "QR Code",
    "common.dotted": "Dotted",
    "common.dashed": "Dashed",
    "common.operation.history": "Operation History",
    "common.mini.map": "Minimap",
    "common.qr.errorCorrectionLevel.low": "Low",
    "common.qr.errorCorrectionLevel.medium": "Medium",
    "common.qr.errorCorrectionLevel.quartile": "Quartile",
    "common.qr.errorCorrectionLevel.high": "High"
  };

  var font = {
    "font": "Font",
    "font.size": "Font Size",
    "font.default": "Default"
  };

  var handelPanel = {
    "handle.drag.snap": "Drag Snap",
    "handle.drag.snap.panel": "Boundary Limit",
    "handle.watermark": "Watermark",
    "handle.width&height": "Width/Height",
    "handle.page.width": "Page Width",
    "handle.page.height": "Page Height",
    "handle.template.name": "Template Name",
    "handle.please.template.name": "Please Enter Template Name",
    "handle.formatter": "Formatter",
    "handle.lock.edit": "Lock Edit",
    "handle.border.radius": "Border Radius",
    "handle.opacity": "Opacity",
    "handle.rotate": "Rotation Angle",
    "handle.content.type": "Content Type",
    "handle.barCode.type": "Barcode Type",
    "handle.barCode.value": "Barcode Value",
    "handle.text.auto.height": "Auto Height",
    "handle.line.break": "Line Break",
    "handle.line.height": "Line Height",
    "handle.line.width": "Line Width",
    "handle.dotted.style": "Dashed Style",
    "handle.padding": "Padding",
    "handle.padding.top": "Top Padding",
    "handle.padding.bottom": "Bottom Padding",
    "handle.padding.left": "Left Padding",
    "handle.padding.right": "Right Padding",
    "handle.top": "Top",
    "handle.bottom": "Bottom",
    "handle.left": "Left",
    "handle.right": "Right",
    "handle.margin": "Margin",
    "handle.margin.top": "Top Margin",
    "handle.margin.bottom": "Bottom Margin",
    "handle.margin.left": "Left Margin",
    "handle.margin.right": "Right Margin",
    "handle.fixed.position": "Fixed Position",
    "handle.clear.canvas": "Clear Canvas",
    "handle.print.strategy": "Print Strategy",
    "handle.display.strategy": "Display Strategy",
    "handle.height.attr": "Height Attribute",
    "handle.table.page.head": "Table Page Header",
    "handle.add.statistics.row": "Add Statistics Row",
    "handle.column": "Column",
    "handle.table.statistics.type": "Statistics Type",
    "handle.table.every.page.statistics": "Per-Page Statistics",
    "handle.table.all.table.statistics": "Entire Table Statistics"
  };

  var preview = {
    "preview.download.pdf": "Download PDF"
  };

  var provider = {
    "provider.text.default.data": "The Yangtze River rolls eastward",
    "provider.panel": "Panel",
    "provider.text": "Text",
    "provider.text.time": "Time Text",
    "provider.image": "Image",
    "provider.data.table": "Data Table",
    "provider.free.table": "Free Table",
    "provider.rect": "Rectangle",
    "provider.horizontal.line": "Horizontal Line",
    "provider.dotted.horizontal.line": "Dotted Horizontal Line",
    "provider.vertical.line": "Vertical Line",
    "provider.dotted.vertical.line": "Dotted Vertical Line",
    "provider.container": "Container",
    "provider.page.header": "Page Header",
    "provider.page.footer": "Page Footer",
    "provider.page.num": "Page Number",
    "provider.svg.polygon line": "Polygon",
    "provider.svg.line": "Line",
    "provider.svg.bezier.curve": "Bezier Curve",
    "provider.svg.bezier.curve.three": "Bezier Curve 3",
    "provider.svg.circle": "Circle",
    "provider.svg.ellipse": "Ellipse",
    "provider.draw.panel": "Drawing Board"
  };

  var setting = {
    "common.auto.connect": "Auto Connect",
    "common.connect.status": "Connection Status",
    "common.client.url": "Client URL"
  };

  var toolbar = {
    "toolbar.chrome.print": "Browser Print",
    "toolbar.print": "Print",
    "toolbar.preview": "Preview",
    "toolbar.download": "Download",
    "toolbar.clear": "Clear",
    "toolbar.save": "Save",
    "toolbar.widget": "Widget",
    "toolbar.page": "Page",
    "toolbar.printer.setting": "Printer Settings",
    "toolbar.history": "History",
    "toolbar.setting": "Settings",
    "toolbar.style.blob": "Bold",
    "toolbar.style.italic": "Italic",
    "toolbar.style.underline": "Underline",
    "toolbar.style.lineThrough": "Strikethrough",
    "toolbar.style.textAlignLeft": "Align Left",
    "toolbar.style.textAlignCenter": "Align Center",
    "toolbar.style.alignHorizontalCenter": "Align Horizontally Center",
    "toolbar.style.textAlignRight": "Align Right",
    "toolbar.style.verticalAlignTop": "Align Top",
    "toolbar.style.alignTop": "Align to Top",
    "toolbar.style.verticalAlignCenter": "Align Vertically Center",
    "toolbar.style.alignVerticalCenter": "Align Vertically Center",
    "toolbar.style.verticalAlignBottom": "Align Bottom",
    "toolbar.style.alignBottom": "Align to Bottom",
    "toolbar.style.arrangeHorizontalSpacing": "Distribute Horizontally",
    "toolbar.style.arrangeVerticalSpacing": "Distribute Vertically",
    "toolbar.style.lineBreak": "Line Break",
    "toolbar.style.borderAll": "Borders",
    "toolbar.style.group": "Group",
    "toolbar.style.unGroup": "Ungroup",
    "toolbar.printer": "Printer",
    "toolbar.layer.top": "Bring to Front",
    "toolbar.layer.up.one": "Bring Forward",
    "toolbar.layer.bottom": "Send to Back",
    "toolbar.layer.down.one": "Send Backward"
  };

  var enUs = {
    ...barcodeMsg,
    ...common,
    ...font,
    ...handelPanel,
    ...preview,
    ...provider,
    ...setting,
    ...toolbar
  };

  const i18nInit = createI18n({
    legacy: false,
    globalInjection: true,
    // 全局模式，可以直接使用 $t
    locale: window.localStorage.getItem("lang") || "zhCn",
    messages: {
      zhCn,
      enUs
    }
  });
  function i18n(msg) {
    return i18nInit.global.t(msg);
  }

  const elementTypeFormat = {
    Panel: i18n("provider.panel"),
    Text: i18n("provider.text"),
    TextTime: i18n("provider.text.time"),
    Image: i18n("provider.image"),
    DataTable: i18n("provider.data.table"),
    FreeTable: i18n("provider.free.table"),
    Rect: i18n("provider.rect"),
    HorizontalLine: i18n("provider.horizontal.line"),
    DottedHorizontalLine: i18n("provider.dotted.horizontal.line"),
    VerticalLine: i18n("provider.vertical.line"),
    DottedVerticalLine: i18n("provider.dotted.vertical.line"),
    Container: i18n("provider.container"),
    PageHeader: i18n("provider.page.header"),
    PageFooter: i18n("provider.page.footer"),
    PageNum: i18n("provider.page.num"),
    SvgPolygonLine: i18n("provider.svg.polygon line"),
    SvgLine: i18n("provider.svg.line"),
    SvgBezierCurve: i18n("provider.svg.bezier.curve"),
    SvgBezierCurveThree: i18n("provider.svg.bezier.curve.three"),
    SvgCircle: i18n("provider.svg.circle"),
    SvgEllipse: i18n("provider.svg.ellipse"),
    DrawPanel: i18n("provider.draw.panel")
    // 私有类型
  };
  const displayStrategyFormat = {
    "none": "\u4E0D\u663E\u793A",
    "firstPage": "\u9996\u9875",
    "lastPage": "\u5C3E\u9875",
    "oddPage": "\u5947\u6570",
    "evenPage": "\u5076\u6570"
  };
  const cellTypeFormat = {
    Head: "\u8868\u5934",
    Body: "\u8868\u4F53",
    Statistics: "\u7EDF\u8BA1\u884C"
  };
  const statisticsTypeFormat = {
    Sum: "\u6C42\u548C",
    Avg: "\u5E73\u5747\u503C",
    Count: "\u8BA1\u6570",
    DistinctCount: "\u53BB\u91CD\u8BA1\u6570",
    Max: "\u6700\u5927\u503C",
    Min: "\u6700\u5C0F\u503C",
    CustomFormula: "\u81EA\u5B9A\u4E49\u516C\u5F0F"
  };

  const defaultElement = [];
  [
    {
      "label": i18n("common.text"),
      "value": "Text"
    },
    {
      "label": i18n("common.barcode"),
      "value": "Barcode"
    },
    {
      "label": i18n("common.qrcode"),
      "value": "QrCode"
    }
  ];
  [
    {
      "label": "CODE128",
      "value": "CODE128",
      "eg": i18n("CODE128")
    },
    {
      "label": "CODE128A",
      "value": "CODE128A",
      "eg": i18n("CODE128A")
    },
    {
      "label": "CODE128B",
      "value": "CODE128B",
      "eg": i18n("CODE128B")
    },
    {
      "label": "CODE128C",
      "value": "CODE128C",
      "eg": i18n("CODE128C")
    },
    {
      "label": "CODE39",
      "value": "CODE39",
      "eg": i18n("CODE39")
    },
    {
      "label": "EAN2",
      "value": "EAN2",
      "eg": i18n("EAN2")
    },
    {
      "label": "EAN5",
      "value": "EAN5",
      "eg": i18n("EAN5")
    },
    {
      "label": "EAN8",
      "value": "EAN8",
      "eg": i18n("EAN8")
    },
    {
      "label": "EAN13",
      "value": "EAN13",
      "eg": i18n("EAN13")
    },
    {
      "label": "UPC",
      "value": "UPC",
      "eg": i18n("UPC")
    },
    {
      "label": "UPC-E",
      "value": "UPC_E",
      "eg": i18n("UPC-E")
    },
    {
      "label": "ITF",
      "value": "ITF",
      "eg": i18n("ITF")
    },
    {
      "label": "ITF14",
      "value": "ITF14",
      "eg": i18n("ITF14")
    },
    {
      "label": "MSI",
      "value": "MSI",
      "eg": i18n("MSI")
    },
    {
      "label": "MSI10",
      "value": "MSI10",
      "eg": i18n("MSI10")
    },
    {
      "label": "MSI11",
      "value": "MSI11",
      "eg": i18n("MSI11")
    },
    {
      "label": "MSI1010",
      "value": "MSI1010",
      "eg": i18n("MSI1010")
    },
    {
      "label": "MSI1110",
      "value": "MSI1110",
      "eg": i18n("MSI1110")
    },
    {
      "label": "codabar",
      "value": "codabar",
      "eg": i18n("codabar")
    },
    {
      "label": "pharmacode",
      "value": "pharmacode",
      "eg": i18n("pharmacode")
    }
  ];
  Object.keys(displayStrategyFormat).map((key) => {
    return {
      label: displayStrategyFormat[key],
      value: key
    };
  });
  Object.keys(statisticsTypeFormat).map((key) => {
    return {
      label: statisticsTypeFormat[key],
      value: key
    };
  });
  vue.reactive([
    { value: "localFile", label: i18n("common.local.upload") },
    { value: "url", label: i18n("common.image.url") }
  ]);
  vue.reactive([
    { value: "AUTO", label: i18n("common.auto") },
    { value: "FIXED", label: i18n("common.fixed") }
  ]);
  [
    {
      label: i18n("common.auto.height"),
      value: "AutoHeight",
      width: 100,
      height: 200
    },
    {
      label: i18n("common.custom"),
      value: "Custom",
      width: 150,
      height: 150
    },
    {
      "label": "A0",
      "value": "A0",
      "width": 841,
      "height": 1189
    },
    {
      "label": "A1",
      "value": "A1",
      "width": 594,
      "height": 841
    },
    {
      "label": "A2",
      "value": "A2",
      "width": 420,
      "height": 594
    },
    {
      "label": "A3",
      "value": "A3",
      "width": 297,
      "height": 420
    },
    {
      "label": "A4",
      "value": "A4",
      "width": 210,
      "height": 297
    },
    {
      "label": "A5",
      "value": "A5",
      "width": 148,
      "height": 210
    },
    {
      "label": "A6",
      "value": "A6",
      "width": 105,
      "height": 148
    },
    {
      "label": "A7",
      "value": "A7",
      "width": 74,
      "height": 105
    },
    {
      "label": "A8",
      "value": "A8",
      "width": 52,
      "height": 74
    },
    {
      "label": "B5",
      "value": "B5",
      "width": 176,
      "height": 250
    },
    {
      "label": "B6",
      "value": "B6",
      "width": 125,
      "height": 176
    },
    {
      "label": "B7",
      "value": "B7",
      "width": 88,
      "height": 125
    },
    {
      "label": "C5",
      "value": "C5",
      "width": 162,
      "height": 229
    },
    {
      "label": "C6",
      "value": "C6",
      "width": 114,
      "height": 162
    },
    {
      "label": "C7",
      "value": "C7",
      "width": 81,
      "height": 114
    }
  ];
  [
    {
      "label": i18n("common.dotted"),
      "value": "dotted"
    },
    {
      "label": i18n("common.dashed"),
      "value": "dashed"
    }
  ];
  [
    {
      "label": i18n("common.qr.errorCorrectionLevel.low"),
      "value": "L"
    },
    {
      "label": i18n("common.qr.errorCorrectionLevel.medium"),
      "value": "M"
    },
    {
      "label": i18n("common.qr.errorCorrectionLevel.quartile"),
      "value": "Q"
    },
    {
      "label": i18n("common.qr.errorCorrectionLevel.high"),
      "value": "H"
    }
  ];

  const MathCalc = {
    toFixed(x, scale = 2) {
      return parseFloat(x.toFixed(scale));
    },
    ceil(x, scale = 2) {
      let pow = Math.pow(10, scale);
      return Math.ceil(x * pow) / pow;
    },
    /**
     ** 加法函数，用来得到精确的加法结果
     ** 说明：javascript 的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
     ** 调用：sum(arg1,arg2)
     ** 返回值：arg1 加上 arg2 的精确结果
     **/
    sumScale(arg1 = 0, arg2 = 0, scale = 2) {
      return this.sum(this.toFixed(arg1, scale), this.toFixed(arg2, scale));
    },
    sum(arg1 = 0, arg2 = 0) {
      let r1, r2;
      try {
        r1 = arg1.toString().split(".")[1].length;
      } catch (e) {
        r1 = 0;
      }
      try {
        r2 = arg2.toString().split(".")[1].length;
      } catch (e) {
        r2 = 0;
      }
      const c = Math.abs(r1 - r2);
      const m = Math.pow(10, Math.max(r1, r2));
      if (c > 0) {
        const cm = Math.pow(10, c);
        if (r1 > r2) {
          arg1 = Number(arg1.toString().replace(".", ""));
          arg2 = Number(arg2.toString().replace(".", "")) * cm;
        } else {
          arg1 = Number(arg1.toString().replace(".", "")) * cm;
          arg2 = Number(arg2.toString().replace(".", ""));
        }
      } else {
        arg1 = Number(arg1.toString().replace(".", ""));
        arg2 = Number(arg2.toString().replace(".", ""));
      }
      return (arg1 + arg2) / m;
    },
    /**
     ** 减法函数，用来得到精确的减法结果
     ** 说明：javascript 的减法结果会有误差，在两个浮点 g2)会比较明显。这个函数返回较为精确的减法结果。
     ** 调用：sub(arg1,arg2)
     ** 返回值：arg1 加上 arg2 的精确结果
     **/
    subScale(arg1 = 0, arg2 = 0, scale = 2) {
      return this.sub(this.toFixed(arg1, scale), this.toFixed(arg2, scale));
    },
    sub(arg1, arg2) {
      let r1, r2;
      try {
        r1 = arg1.toString().split(".")[1].length;
      } catch (e) {
        r1 = 0;
      }
      try {
        r2 = arg2.toString().split(".")[1].length;
      } catch (e) {
        r2 = 0;
      }
      const c = Math.abs(r1 - r2);
      const m = Math.pow(10, Math.max(r1, r2));
      if (c > 0) {
        const cm = Math.pow(10, c);
        if (r1 > r2) {
          arg1 = Number(arg1.toString().replace(".", ""));
          arg2 = Number(arg2.toString().replace(".", "")) * cm;
        } else {
          arg1 = Number(arg1.toString().replace(".", "")) * cm;
          arg2 = Number(arg2.toString().replace(".", ""));
        }
      } else {
        arg1 = Number(arg1.toString().replace(".", ""));
        arg2 = Number(arg2.toString().replace(".", ""));
      }
      return (arg1 - arg2) / m;
    },
    /**
     ** 乘法函数，用来得到精确的乘法结果
     ** 说明：javascript 的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
     ** 调用：mul(arg1,arg2)
     ** 返回值：arg1 乘以 arg2 的精确结果
     **/
    mul(arg1, arg2, scale = 2) {
      let m = 0;
      const s1 = arg1.toString();
      const s2 = arg2.toString();
      try {
        m += s1.split(".")[1].length;
      } catch (e) {
      }
      try {
        m += s2.split(".")[1].length;
      } catch (e) {
      }
      return this.toFixed(Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m), scale);
    },
    /**
     ** 除法函数，用来得到精确的除法结果
     ** 说明：javascript 的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。
     ** 调用：div(arg1,arg2)
     ** 返回值：arg1 除以 arg2 的精确结果
     **/
    div(arg1, arg2, scale = 2) {
      let t1 = 0, t2 = 0;
      try {
        t1 = arg1.toString().split(".")[1].length;
      } catch (e) {
      }
      try {
        t2 = arg2.toString().split(".")[1].length;
      } catch (e) {
      }
      const r1 = Number(arg1.toString().replace(".", ""));
      const r2 = Number(arg2.toString().replace(".", ""));
      return this.toFixed(r1 / r2 * Math.pow(10, t2 - t1), scale);
    },
    limitMin(val, min) {
      return val < min ? min : val;
    },
    isNumber(value) {
      return !isNaN(value);
    }
  };

  let displayRatio = 3;
  const unitConvert = {
    px: {
      mm: { ratio: displayRatio, compute: "div" },
      cm: { ratio: displayRatio * 10, compute: "div" }
    },
    mm: {
      px: { ratio: displayRatio, compute: "mul" },
      cm: { ratio: 10, compute: "div" }
    }
  };
  function initDisplayRatio() {
    let mmDiv = document.createElement("div");
    let body = document.querySelector("body");
    mmDiv.id = "mm";
    mmDiv.style.width = "1mm";
    mmDiv.className = "scrollbar-measure";
    body.appendChild(mmDiv);
    let mmDivRect = mmDiv.getBoundingClientRect();
    displayRatio = MathCalc.ceil(mmDivRect.width);
    body.removeChild(mmDiv);
    unitConvert.px = {
      mm: { ratio: displayRatio, compute: "div" },
      cm: { ratio: displayRatio * 10, compute: "div" }
    };
    unitConvert.mm = {
      px: { ratio: displayRatio, compute: "mul" },
      cm: { ratio: 10, compute: "div" }
    };
  }
  function px2unit(val, panel) {
    return unit2unit("px", getCurrentPanelUnit(panel), val);
  }
  function unit2px(val, panel) {
    if (isNaN(val)) {
      return 0;
    }
    return unit2unit(getCurrentPanelUnit(panel), "px", val);
  }
  function unit2unit(oldUnit, newUnit, val) {
    var _a, _b;
    if (val == null) {
      return 0;
    }
    if (isNaN(val)) {
      return 0;
    }
    if (oldUnit === newUnit) {
      return val;
    }
    let convert = (_a = unitConvert[oldUnit]) == null ? void 0 : _a[newUnit];
    if (convert != null) {
      if (convert.compute === "div") {
        return MathCalc.div(val, convert.ratio);
      } else {
        return MathCalc.mul(val, convert.ratio);
      }
    }
    convert = (_b = unitConvert[newUnit]) == null ? void 0 : _b[oldUnit];
    if (convert.compute === "div") {
      return MathCalc.mul(val, convert.ratio);
    } else {
      return MathCalc.div(val, convert.ratio);
    }
  }

  function mitt$1(n){return {all:n=n||new Map,on:function(t,e){var i=n.get(t);i?i.push(e):n.set(t,[e]);},off:function(t,e){var i=n.get(t);i&&(e?i.splice(i.indexOf(e)>>>0,1):n.set(t,[]));},emit:function(t,e){var i=n.get(t);i&&i.slice().map(function(n){n(e);}),(i=n.get("*"))&&i.slice().map(function(n){n(t,e);});}}}

  function findTableHeadDeep(tableHeadList, deep) {
    for (let tableHeadCellElement of tableHeadList) {
      if (tableHeadCellElement.columnList != null && tableHeadCellElement.columnList.length > 0) {
        return findTableHeadDeep(tableHeadCellElement.columnList, deep + 1);
      }
    }
    return deep;
  }
  function findUpperCell(floorHeaderList, col, deep) {
    for (let i = deep; i >= 0; i--) {
      const cell = floorHeaderList[i][col];
      if (cell != null) {
        return floorHeaderList[i][col];
      }
    }
  }
  function handleTableCellInitHeight(tableHeadListList) {
    for (let tableHeadListListElement of tableHeadListList) {
      let height = 0;
      for (let tableCellElement of tableHeadListListElement) {
        if (tableCellElement == null) {
          continue;
        }
        if (height < tableCellElement.height) {
          height = tableCellElement.height;
        }
      }
      for (let tableCellElement of tableHeadListListElement) {
        if (tableCellElement == null) {
          continue;
        }
        tableCellElement.height = height * tableCellElement.rowspan;
      }
    }
  }
  function recursionHandleTableHead(tableHeadListList, tableHeadList, deep) {
    const tableHeadListTmp = tableHeadListList[deep];
    for (let j = 0; j < tableHeadList.length; j++) {
      const tableHeadCell = tableHeadList[j];
      const childList = tableHeadCell.columnList;
      tableHeadCell.columnList = void 0;
      if (childList != null && childList.length > 0) {
        tableHeadCell.rowspan = 1;
        recursionHandleTableHead(tableHeadListList, childList, deep + 1);
        let colspan = 0;
        let width = 0;
        for (let tableHeadCellElement of childList) {
          colspan += tableHeadCellElement.colspan;
          width = numberUtil.sub(width, tableHeadCellElement.width);
        }
        tableHeadCell.colspan = colspan;
        tableHeadCell.width = width;
      } else {
        tableHeadCell.colspan = 1;
        tableHeadCell.rowspan = tableHeadListList.length - deep;
      }
      tableHeadListTmp.push(tableHeadCell);
      for (let k = 1; k < tableHeadCell.colspan; k++) {
        tableHeadListTmp.push(void 0);
      }
      if (tableHeadCell.rowspan > 1) {
        for (let k = 1 + deep; k < tableHeadCell.rowspan + deep; k++) {
          tableHeadListList[k].push(void 0);
        }
      }
    }
  }

  const mitt = mitt$1();
  let printCssStyleCache = void 0;
  function printCssStyle() {
    if (printCssStyleCache) {
      return printCssStyleCache;
    }
    let cssRuleList = `
    @media print {
        body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
        }
    }

.display-flex {
  display: flex;
}

.display-flex-wrap {
  flex-wrap: wrap;
}

.display-flex-column {
  display: flex;
  flex-direction: column;
}

.my-print-text_container {
  width: 100%;
  height: 100%;
  display: flex;
  outline: 0;
  box-sizing: border-box;
  vertical-align: top;
  word-break: break-all;
  flex-grow: 1;
}

.my-print-barcode_svg_wrapper {
  width: 100%;
  max-width: 100%;
  height: 100%;
}

.my-print-text_content {
  vertical-align: top;
  word-break: break-all;
  box-sizing: border-box;
  outline: 0;
  flex-grow: 1;
}

.my-print-horizontal-line__wrapper {
  width: 100%;
  word-break: break-all;
  cursor: move;
  outline: none;
}

.my-print-horizontal-line {
  cursor: move;
  position: absolute;
}

.my-print-rect__wrapper {
  word-break: break-all;
  border: 1px #000 solid;
  box-sizing: border-box;
  position: absolute;
  cursor: text;
}

.my-print-dotted-rect__wrapper {
  word-break: break-all;
  outline: #000 dotted;
  position: absolute;
  cursor: text;
}

.my-print-table {
  text-indent: initial;
  border-collapse: collapse;
  border-spacing: 0;
  padding: 0;
  word-break: break-all;
  box-sizing: border-box;
  outline: none;
}

.my-print-columnHead {
  position: relative;
  word-break: break-all;
  height: 100%;

  box-sizing: border-box;
  padding: 0;
}

.my-print-columnHead__content {
  height: 100%;
}

.my-print-container {
  width: var(--design-width);
  max-width: var(--design-width);
  height: var(--design-height);
  max-height: var(--design-height);
}

.my-print-table-column_body {
  word-break: break-all;
  text-align: center;
  box-sizing: border-box;
  overflow: hidden;
  padding: 0;
}

.my-print-container_over {
  z-index: 1;
  opacity: 0.6;
  background: var(--page-header-drop-color);
  outline: 4px solid var(--drag-h-color);
}

.my-print-preview-wrap {
  position: absolute;
}

.my-print-preview-wrap_container {
}

.my-print-print_hidden {
  position: absolute;
  top: -99999px;
}

.my-print-preview-panel__wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.my-print-preview-panel__content {
  position: relative;

}

.my-print-preview-panel__content_page {
  position: relative;
  overflow: hidden;
  //box-sizing: border-box;
  background: white;
}

.my-print-draw_panel {
  width: 100%;
  height: 100%;
}

.my-print-draw_panel_img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.my-print-chart {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: visible;
}
`;
    return printCssStyleCache = cssRuleList;
  }
  function isBlob(obj) {
    return obj instanceof Blob;
  }
  function isArrayBuffer(obj) {
    return obj instanceof ArrayBuffer;
  }
  function isUint8Array(obj) {
    return obj instanceof Uint8Array;
  }
  function arrayBuffer2Base64(buffer) {
    const bytes = new Uint8Array(buffer);
    let binary = "";
    bytes.forEach((byte) => {
      binary += String.fromCharCode(byte);
    });
    return btoa(binary);
  }
  function uint8Array2Base64(bytes) {
    let binary = "";
    bytes.forEach((byte) => {
      binary += String.fromCharCode(byte);
    });
    return btoa(binary);
  }
  function blob2Base64(blob) {
    return new Promise((resolve, _reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
  }
  function _defaultVal(val, _default) {
    return val ? val : _default;
  }
  function generateUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0, v = c === "x" ? r : r & 3 | 8;
      return v.toString(16);
    });
  }

  /*!
   * pinia v2.3.1
   * (c) 2025 Eduardo San Martin Morote
   * @license MIT
   */

  /**
   * setActivePinia must be called to handle SSR at the top of functions like
   * `fetch`, `setup`, `serverPrefetch` and others
   */
  let activePinia;
  /**
   * Sets or unsets the active pinia. Used in SSR and internally when calling
   * actions and getters
   *
   * @param pinia - Pinia instance
   */
  // @ts-expect-error: cannot constrain the type of the return
  const setActivePinia = (pinia) => (activePinia = pinia);
  const piniaSymbol = (/* istanbul ignore next */ Symbol());

  function isPlainObject$2(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  o) {
      return (o &&
          typeof o === 'object' &&
          Object.prototype.toString.call(o) === '[object Object]' &&
          typeof o.toJSON !== 'function');
  }
  // type DeepReadonly<T> = { readonly [P in keyof T]: DeepReadonly<T[P]> }
  // TODO: can we change these to numbers?
  /**
   * Possible types for SubscriptionCallback
   */
  var MutationType;
  (function (MutationType) {
      /**
       * Direct mutation of the state:
       *
       * - `store.name = 'new name'`
       * - `store.$state.name = 'new name'`
       * - `store.list.push('new item')`
       */
      MutationType["direct"] = "direct";
      /**
       * Mutated the state with `$patch` and an object
       *
       * - `store.$patch({ name: 'newName' })`
       */
      MutationType["patchObject"] = "patch object";
      /**
       * Mutated the state with `$patch` and a function
       *
       * - `store.$patch(state => state.name = 'newName')`
       */
      MutationType["patchFunction"] = "patch function";
      // maybe reset? for $state = {} and $reset
  })(MutationType || (MutationType = {}));

  const IS_CLIENT = typeof window !== 'undefined';

  /*
   * FileSaver.js A saveAs() FileSaver implementation.
   *
   * Originally by Eli Grey, adapted as an ESM module by Eduardo San Martin
   * Morote.
   *
   * License : MIT
   */
  // The one and only way of getting global scope in all environments
  // https://stackoverflow.com/q/3277182/1008999
  const _global$1 = /*#__PURE__*/ (() => typeof window === 'object' && window.window === window
      ? window
      : typeof self === 'object' && self.self === self
          ? self
          : typeof global === 'object' && global.global === global
              ? global
              : typeof globalThis === 'object'
                  ? globalThis
                  : { HTMLElement: null })();
  function bom(blob, { autoBom = false } = {}) {
      // prepend BOM for UTF-8 XML and text/* types (including HTML)
      // note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
      if (autoBom &&
          /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
          return new Blob([String.fromCharCode(0xfeff), blob], { type: blob.type });
      }
      return blob;
  }
  function download(url, name, opts) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.responseType = 'blob';
      xhr.onload = function () {
          saveAs(xhr.response, name, opts);
      };
      xhr.onerror = function () {
          console.error('could not download file');
      };
      xhr.send();
  }
  function corsEnabled(url) {
      const xhr = new XMLHttpRequest();
      // use sync to avoid popup blocker
      xhr.open('HEAD', url, false);
      try {
          xhr.send();
      }
      catch (e) { }
      return xhr.status >= 200 && xhr.status <= 299;
  }
  // `a.click()` doesn't work for all browsers (#465)
  function click(node) {
      try {
          node.dispatchEvent(new MouseEvent('click'));
      }
      catch (e) {
          const evt = document.createEvent('MouseEvents');
          evt.initMouseEvent('click', true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
          node.dispatchEvent(evt);
      }
  }
  const _navigator = typeof navigator === 'object' ? navigator : { userAgent: '' };
  // Detect WebView inside a native macOS app by ruling out all browsers
  // We just need to check for 'Safari' because all other browsers (besides Firefox) include that too
  // https://www.whatismybrowser.com/guides/the-latest-user-agent/macos
  const isMacOSWebView = /*#__PURE__*/ (() => /Macintosh/.test(_navigator.userAgent) &&
      /AppleWebKit/.test(_navigator.userAgent) &&
      !/Safari/.test(_navigator.userAgent))();
  const saveAs = !IS_CLIENT
      ? () => { } // noop
      : // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
          typeof HTMLAnchorElement !== 'undefined' &&
              'download' in HTMLAnchorElement.prototype &&
              !isMacOSWebView
              ? downloadSaveAs
              : // Use msSaveOrOpenBlob as a second approach
                  'msSaveOrOpenBlob' in _navigator
                      ? msSaveAs
                      : // Fallback to using FileReader and a popup
                          fileSaverSaveAs;
  function downloadSaveAs(blob, name = 'download', opts) {
      const a = document.createElement('a');
      a.download = name;
      a.rel = 'noopener'; // tabnabbing
      // TODO: detect chrome extensions & packaged apps
      // a.target = '_blank'
      if (typeof blob === 'string') {
          // Support regular links
          a.href = blob;
          if (a.origin !== location.origin) {
              if (corsEnabled(a.href)) {
                  download(blob, name, opts);
              }
              else {
                  a.target = '_blank';
                  click(a);
              }
          }
          else {
              click(a);
          }
      }
      else {
          // Support blobs
          a.href = URL.createObjectURL(blob);
          setTimeout(function () {
              URL.revokeObjectURL(a.href);
          }, 4e4); // 40s
          setTimeout(function () {
              click(a);
          }, 0);
      }
  }
  function msSaveAs(blob, name = 'download', opts) {
      if (typeof blob === 'string') {
          if (corsEnabled(blob)) {
              download(blob, name, opts);
          }
          else {
              const a = document.createElement('a');
              a.href = blob;
              a.target = '_blank';
              setTimeout(function () {
                  click(a);
              });
          }
      }
      else {
          // @ts-ignore: works on windows
          navigator.msSaveOrOpenBlob(bom(blob, opts), name);
      }
  }
  function fileSaverSaveAs(blob, name, opts, popup) {
      // Open a popup immediately do go around popup blocker
      // Mostly only available on user interaction and the fileReader is async so...
      popup = popup || open('', '_blank');
      if (popup) {
          popup.document.title = popup.document.body.innerText = 'downloading...';
      }
      if (typeof blob === 'string')
          return download(blob, name, opts);
      const force = blob.type === 'application/octet-stream';
      const isSafari = /constructor/i.test(String(_global$1.HTMLElement)) || 'safari' in _global$1;
      const isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((isChromeIOS || (force && isSafari) || isMacOSWebView) &&
          typeof FileReader !== 'undefined') {
          // Safari doesn't allow downloading of blob URLs
          const reader = new FileReader();
          reader.onloadend = function () {
              let url = reader.result;
              if (typeof url !== 'string') {
                  popup = null;
                  throw new Error('Wrong reader.result type');
              }
              url = isChromeIOS
                  ? url
                  : url.replace(/^data:[^;]*;/, 'data:attachment/file;');
              if (popup) {
                  popup.location.href = url;
              }
              else {
                  location.assign(url);
              }
              popup = null; // reverse-tabnabbing #460
          };
          reader.readAsDataURL(blob);
      }
      else {
          const url = URL.createObjectURL(blob);
          if (popup)
              popup.location.assign(url);
          else
              location.href = url;
          popup = null; // reverse-tabnabbing #460
          setTimeout(function () {
              URL.revokeObjectURL(url);
          }, 4e4); // 40s
      }
  }

  /**
   * Shows a toast or console.log
   *
   * @param message - message to log
   * @param type - different color of the tooltip
   */
  function toastMessage(message, type) {
      const piniaMessage = '🍍 ' + message;
      if (typeof __VUE_DEVTOOLS_TOAST__ === 'function') {
          // No longer available :(
          __VUE_DEVTOOLS_TOAST__(piniaMessage, type);
      }
      else if (type === 'error') {
          console.error(piniaMessage);
      }
      else if (type === 'warn') {
          console.warn(piniaMessage);
      }
      else {
          console.log(piniaMessage);
      }
  }
  function isPinia(o) {
      return '_a' in o && 'install' in o;
  }

  /**
   * This file contain devtools actions, they are not Pinia actions.
   */
  // ---
  function checkClipboardAccess() {
      if (!('clipboard' in navigator)) {
          toastMessage(`Your browser doesn't support the Clipboard API`, 'error');
          return true;
      }
  }
  function checkNotFocusedError(error) {
      if (error instanceof Error &&
          error.message.toLowerCase().includes('document is not focused')) {
          toastMessage('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', 'warn');
          return true;
      }
      return false;
  }
  async function actionGlobalCopyState(pinia) {
      if (checkClipboardAccess())
          return;
      try {
          await navigator.clipboard.writeText(JSON.stringify(pinia.state.value));
          toastMessage('Global state copied to clipboard.');
      }
      catch (error) {
          if (checkNotFocusedError(error))
              return;
          toastMessage(`Failed to serialize the state. Check the console for more details.`, 'error');
          console.error(error);
      }
  }
  async function actionGlobalPasteState(pinia) {
      if (checkClipboardAccess())
          return;
      try {
          loadStoresState(pinia, JSON.parse(await navigator.clipboard.readText()));
          toastMessage('Global state pasted from clipboard.');
      }
      catch (error) {
          if (checkNotFocusedError(error))
              return;
          toastMessage(`Failed to deserialize the state from clipboard. Check the console for more details.`, 'error');
          console.error(error);
      }
  }
  async function actionGlobalSaveState(pinia) {
      try {
          saveAs(new Blob([JSON.stringify(pinia.state.value)], {
              type: 'text/plain;charset=utf-8',
          }), 'pinia-state.json');
      }
      catch (error) {
          toastMessage(`Failed to export the state as JSON. Check the console for more details.`, 'error');
          console.error(error);
      }
  }
  let fileInput;
  function getFileOpener() {
      if (!fileInput) {
          fileInput = document.createElement('input');
          fileInput.type = 'file';
          fileInput.accept = '.json';
      }
      function openFile() {
          return new Promise((resolve, reject) => {
              fileInput.onchange = async () => {
                  const files = fileInput.files;
                  if (!files)
                      return resolve(null);
                  const file = files.item(0);
                  if (!file)
                      return resolve(null);
                  return resolve({ text: await file.text(), file });
              };
              // @ts-ignore: TODO: changed from 4.3 to 4.4
              fileInput.oncancel = () => resolve(null);
              fileInput.onerror = reject;
              fileInput.click();
          });
      }
      return openFile;
  }
  async function actionGlobalOpenStateFile(pinia) {
      try {
          const open = getFileOpener();
          const result = await open();
          if (!result)
              return;
          const { text, file } = result;
          loadStoresState(pinia, JSON.parse(text));
          toastMessage(`Global state imported from "${file.name}".`);
      }
      catch (error) {
          toastMessage(`Failed to import the state from JSON. Check the console for more details.`, 'error');
          console.error(error);
      }
  }
  function loadStoresState(pinia, state) {
      for (const key in state) {
          const storeState = pinia.state.value[key];
          // store is already instantiated, patch it
          if (storeState) {
              Object.assign(storeState, state[key]);
          }
          else {
              // store is not instantiated, set the initial state
              pinia.state.value[key] = state[key];
          }
      }
  }

  function formatDisplay(display) {
      return {
          _custom: {
              display,
          },
      };
  }
  const PINIA_ROOT_LABEL = '🍍 Pinia (root)';
  const PINIA_ROOT_ID = '_root';
  function formatStoreForInspectorTree(store) {
      return isPinia(store)
          ? {
              id: PINIA_ROOT_ID,
              label: PINIA_ROOT_LABEL,
          }
          : {
              id: store.$id,
              label: store.$id,
          };
  }
  function formatStoreForInspectorState(store) {
      if (isPinia(store)) {
          const storeNames = Array.from(store._s.keys());
          const storeMap = store._s;
          const state = {
              state: storeNames.map((storeId) => ({
                  editable: true,
                  key: storeId,
                  value: store.state.value[storeId],
              })),
              getters: storeNames
                  .filter((id) => storeMap.get(id)._getters)
                  .map((id) => {
                  const store = storeMap.get(id);
                  return {
                      editable: false,
                      key: id,
                      value: store._getters.reduce((getters, key) => {
                          getters[key] = store[key];
                          return getters;
                      }, {}),
                  };
              }),
          };
          return state;
      }
      const state = {
          state: Object.keys(store.$state).map((key) => ({
              editable: true,
              key,
              value: store.$state[key],
          })),
      };
      // avoid adding empty getters
      if (store._getters && store._getters.length) {
          state.getters = store._getters.map((getterName) => ({
              editable: false,
              key: getterName,
              value: store[getterName],
          }));
      }
      if (store._customProperties.size) {
          state.customProperties = Array.from(store._customProperties).map((key) => ({
              editable: true,
              key,
              value: store[key],
          }));
      }
      return state;
  }
  function formatEventData(events) {
      if (!events)
          return {};
      if (Array.isArray(events)) {
          // TODO: handle add and delete for arrays and objects
          return events.reduce((data, event) => {
              data.keys.push(event.key);
              data.operations.push(event.type);
              data.oldValue[event.key] = event.oldValue;
              data.newValue[event.key] = event.newValue;
              return data;
          }, {
              oldValue: {},
              keys: [],
              operations: [],
              newValue: {},
          });
      }
      else {
          return {
              operation: formatDisplay(events.type),
              key: formatDisplay(events.key),
              oldValue: events.oldValue,
              newValue: events.newValue,
          };
      }
  }
  function formatMutationType(type) {
      switch (type) {
          case MutationType.direct:
              return 'mutation';
          case MutationType.patchFunction:
              return '$patch';
          case MutationType.patchObject:
              return '$patch';
          default:
              return 'unknown';
      }
  }

  // timeline can be paused when directly changing the state
  let isTimelineActive = true;
  const componentStateTypes = [];
  const MUTATIONS_LAYER_ID = 'pinia:mutations';
  const INSPECTOR_ID = 'pinia';
  const { assign: assign$1 } = Object;
  /**
   * Gets the displayed name of a store in devtools
   *
   * @param id - id of the store
   * @returns a formatted string
   */
  const getStoreType = (id) => '🍍 ' + id;
  /**
   * Add the pinia plugin without any store. Allows displaying a Pinia plugin tab
   * as soon as it is added to the application.
   *
   * @param app - Vue application
   * @param pinia - pinia instance
   */
  function registerPiniaDevtools(app, pinia) {
      setupDevtoolsPlugin({
          id: 'dev.esm.pinia',
          label: 'Pinia 🍍',
          logo: 'https://pinia.vuejs.org/logo.svg',
          packageName: 'pinia',
          homepage: 'https://pinia.vuejs.org',
          componentStateTypes,
          app,
      }, (api) => {
          if (typeof api.now !== 'function') {
              toastMessage('You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.');
          }
          api.addTimelineLayer({
              id: MUTATIONS_LAYER_ID,
              label: `Pinia 🍍`,
              color: 0xe5df88,
          });
          api.addInspector({
              id: INSPECTOR_ID,
              label: 'Pinia 🍍',
              icon: 'storage',
              treeFilterPlaceholder: 'Search stores',
              actions: [
                  {
                      icon: 'content_copy',
                      action: () => {
                          actionGlobalCopyState(pinia);
                      },
                      tooltip: 'Serialize and copy the state',
                  },
                  {
                      icon: 'content_paste',
                      action: async () => {
                          await actionGlobalPasteState(pinia);
                          api.sendInspectorTree(INSPECTOR_ID);
                          api.sendInspectorState(INSPECTOR_ID);
                      },
                      tooltip: 'Replace the state with the content of your clipboard',
                  },
                  {
                      icon: 'save',
                      action: () => {
                          actionGlobalSaveState(pinia);
                      },
                      tooltip: 'Save the state as a JSON file',
                  },
                  {
                      icon: 'folder_open',
                      action: async () => {
                          await actionGlobalOpenStateFile(pinia);
                          api.sendInspectorTree(INSPECTOR_ID);
                          api.sendInspectorState(INSPECTOR_ID);
                      },
                      tooltip: 'Import the state from a JSON file',
                  },
              ],
              nodeActions: [
                  {
                      icon: 'restore',
                      tooltip: 'Reset the state (with "$reset")',
                      action: (nodeId) => {
                          const store = pinia._s.get(nodeId);
                          if (!store) {
                              toastMessage(`Cannot reset "${nodeId}" store because it wasn't found.`, 'warn');
                          }
                          else if (typeof store.$reset !== 'function') {
                              toastMessage(`Cannot reset "${nodeId}" store because it doesn't have a "$reset" method implemented.`, 'warn');
                          }
                          else {
                              store.$reset();
                              toastMessage(`Store "${nodeId}" reset.`);
                          }
                      },
                  },
              ],
          });
          api.on.inspectComponent((payload, ctx) => {
              const proxy = (payload.componentInstance &&
                  payload.componentInstance.proxy);
              if (proxy && proxy._pStores) {
                  const piniaStores = payload.componentInstance.proxy._pStores;
                  Object.values(piniaStores).forEach((store) => {
                      payload.instanceData.state.push({
                          type: getStoreType(store.$id),
                          key: 'state',
                          editable: true,
                          value: store._isOptionsAPI
                              ? {
                                  _custom: {
                                      value: vue.toRaw(store.$state),
                                      actions: [
                                          {
                                              icon: 'restore',
                                              tooltip: 'Reset the state of this store',
                                              action: () => store.$reset(),
                                          },
                                      ],
                                  },
                              }
                              : // NOTE: workaround to unwrap transferred refs
                                  Object.keys(store.$state).reduce((state, key) => {
                                      state[key] = store.$state[key];
                                      return state;
                                  }, {}),
                      });
                      if (store._getters && store._getters.length) {
                          payload.instanceData.state.push({
                              type: getStoreType(store.$id),
                              key: 'getters',
                              editable: false,
                              value: store._getters.reduce((getters, key) => {
                                  try {
                                      getters[key] = store[key];
                                  }
                                  catch (error) {
                                      // @ts-expect-error: we just want to show it in devtools
                                      getters[key] = error;
                                  }
                                  return getters;
                              }, {}),
                          });
                      }
                  });
              }
          });
          api.on.getInspectorTree((payload) => {
              if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
                  let stores = [pinia];
                  stores = stores.concat(Array.from(pinia._s.values()));
                  payload.rootNodes = (payload.filter
                      ? stores.filter((store) => '$id' in store
                          ? store.$id
                              .toLowerCase()
                              .includes(payload.filter.toLowerCase())
                          : PINIA_ROOT_LABEL.toLowerCase().includes(payload.filter.toLowerCase()))
                      : stores).map(formatStoreForInspectorTree);
              }
          });
          // Expose pinia instance as $pinia to window
          globalThis.$pinia = pinia;
          api.on.getInspectorState((payload) => {
              if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
                  const inspectedStore = payload.nodeId === PINIA_ROOT_ID
                      ? pinia
                      : pinia._s.get(payload.nodeId);
                  if (!inspectedStore) {
                      // this could be the selected store restored for a different project
                      // so it's better not to say anything here
                      return;
                  }
                  if (inspectedStore) {
                      // Expose selected store as $store to window
                      if (payload.nodeId !== PINIA_ROOT_ID)
                          globalThis.$store = vue.toRaw(inspectedStore);
                      payload.state = formatStoreForInspectorState(inspectedStore);
                  }
              }
          });
          api.on.editInspectorState((payload, ctx) => {
              if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
                  const inspectedStore = payload.nodeId === PINIA_ROOT_ID
                      ? pinia
                      : pinia._s.get(payload.nodeId);
                  if (!inspectedStore) {
                      return toastMessage(`store "${payload.nodeId}" not found`, 'error');
                  }
                  const { path } = payload;
                  if (!isPinia(inspectedStore)) {
                      // access only the state
                      if (path.length !== 1 ||
                          !inspectedStore._customProperties.has(path[0]) ||
                          path[0] in inspectedStore.$state) {
                          path.unshift('$state');
                      }
                  }
                  else {
                      // Root access, we can omit the `.value` because the devtools API does it for us
                      path.unshift('state');
                  }
                  isTimelineActive = false;
                  payload.set(inspectedStore, path, payload.state.value);
                  isTimelineActive = true;
              }
          });
          api.on.editComponentState((payload) => {
              if (payload.type.startsWith('🍍')) {
                  const storeId = payload.type.replace(/^🍍\s*/, '');
                  const store = pinia._s.get(storeId);
                  if (!store) {
                      return toastMessage(`store "${storeId}" not found`, 'error');
                  }
                  const { path } = payload;
                  if (path[0] !== 'state') {
                      return toastMessage(`Invalid path for store "${storeId}":\n${path}\nOnly state can be modified.`);
                  }
                  // rewrite the first entry to be able to directly set the state as
                  // well as any other path
                  path[0] = '$state';
                  isTimelineActive = false;
                  payload.set(store, path, payload.state.value);
                  isTimelineActive = true;
              }
          });
      });
  }
  function addStoreToDevtools(app, store) {
      if (!componentStateTypes.includes(getStoreType(store.$id))) {
          componentStateTypes.push(getStoreType(store.$id));
      }
      setupDevtoolsPlugin({
          id: 'dev.esm.pinia',
          label: 'Pinia 🍍',
          logo: 'https://pinia.vuejs.org/logo.svg',
          packageName: 'pinia',
          homepage: 'https://pinia.vuejs.org',
          componentStateTypes,
          app,
          settings: {
              logStoreChanges: {
                  label: 'Notify about new/deleted stores',
                  type: 'boolean',
                  defaultValue: true,
              },
              // useEmojis: {
              //   label: 'Use emojis in messages ⚡️',
              //   type: 'boolean',
              //   defaultValue: true,
              // },
          },
      }, (api) => {
          // gracefully handle errors
          const now = typeof api.now === 'function' ? api.now.bind(api) : Date.now;
          store.$onAction(({ after, onError, name, args }) => {
              const groupId = runningActionId++;
              api.addTimelineEvent({
                  layerId: MUTATIONS_LAYER_ID,
                  event: {
                      time: now(),
                      title: '🛫 ' + name,
                      subtitle: 'start',
                      data: {
                          store: formatDisplay(store.$id),
                          action: formatDisplay(name),
                          args,
                      },
                      groupId,
                  },
              });
              after((result) => {
                  activeAction = undefined;
                  api.addTimelineEvent({
                      layerId: MUTATIONS_LAYER_ID,
                      event: {
                          time: now(),
                          title: '🛬 ' + name,
                          subtitle: 'end',
                          data: {
                              store: formatDisplay(store.$id),
                              action: formatDisplay(name),
                              args,
                              result,
                          },
                          groupId,
                      },
                  });
              });
              onError((error) => {
                  activeAction = undefined;
                  api.addTimelineEvent({
                      layerId: MUTATIONS_LAYER_ID,
                      event: {
                          time: now(),
                          logType: 'error',
                          title: '💥 ' + name,
                          subtitle: 'end',
                          data: {
                              store: formatDisplay(store.$id),
                              action: formatDisplay(name),
                              args,
                              error,
                          },
                          groupId,
                      },
                  });
              });
          }, true);
          store._customProperties.forEach((name) => {
              vue.watch(() => vue.unref(store[name]), (newValue, oldValue) => {
                  api.notifyComponentUpdate();
                  api.sendInspectorState(INSPECTOR_ID);
                  if (isTimelineActive) {
                      api.addTimelineEvent({
                          layerId: MUTATIONS_LAYER_ID,
                          event: {
                              time: now(),
                              title: 'Change',
                              subtitle: name,
                              data: {
                                  newValue,
                                  oldValue,
                              },
                              groupId: activeAction,
                          },
                      });
                  }
              }, { deep: true });
          });
          store.$subscribe(({ events, type }, state) => {
              api.notifyComponentUpdate();
              api.sendInspectorState(INSPECTOR_ID);
              if (!isTimelineActive)
                  return;
              // rootStore.state[store.id] = state
              const eventData = {
                  time: now(),
                  title: formatMutationType(type),
                  data: assign$1({ store: formatDisplay(store.$id) }, formatEventData(events)),
                  groupId: activeAction,
              };
              if (type === MutationType.patchFunction) {
                  eventData.subtitle = '⤵️';
              }
              else if (type === MutationType.patchObject) {
                  eventData.subtitle = '🧩';
              }
              else if (events && !Array.isArray(events)) {
                  eventData.subtitle = events.type;
              }
              if (events) {
                  eventData.data['rawEvent(s)'] = {
                      _custom: {
                          display: 'DebuggerEvent',
                          type: 'object',
                          tooltip: 'raw DebuggerEvent[]',
                          value: events,
                      },
                  };
              }
              api.addTimelineEvent({
                  layerId: MUTATIONS_LAYER_ID,
                  event: eventData,
              });
          }, { detached: true, flush: 'sync' });
          const hotUpdate = store._hotUpdate;
          store._hotUpdate = vue.markRaw((newStore) => {
              hotUpdate(newStore);
              api.addTimelineEvent({
                  layerId: MUTATIONS_LAYER_ID,
                  event: {
                      time: now(),
                      title: '🔥 ' + store.$id,
                      subtitle: 'HMR update',
                      data: {
                          store: formatDisplay(store.$id),
                          info: formatDisplay(`HMR update`),
                      },
                  },
              });
              // update the devtools too
              api.notifyComponentUpdate();
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
          });
          const { $dispose } = store;
          store.$dispose = () => {
              $dispose();
              api.notifyComponentUpdate();
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
              api.getSettings().logStoreChanges &&
                  toastMessage(`Disposed "${store.$id}" store 🗑`);
          };
          // trigger an update so it can display new registered stores
          api.notifyComponentUpdate();
          api.sendInspectorTree(INSPECTOR_ID);
          api.sendInspectorState(INSPECTOR_ID);
          api.getSettings().logStoreChanges &&
              toastMessage(`"${store.$id}" store installed 🆕`);
      });
  }
  let runningActionId = 0;
  let activeAction;
  /**
   * Patches a store to enable action grouping in devtools by wrapping the store with a Proxy that is passed as the
   * context of all actions, allowing us to set `runningAction` on each access and effectively associating any state
   * mutation to the action.
   *
   * @param store - store to patch
   * @param actionNames - list of actionst to patch
   */
  function patchActionForGrouping(store, actionNames, wrapWithProxy) {
      // original actions of the store as they are given by pinia. We are going to override them
      const actions = actionNames.reduce((storeActions, actionName) => {
          // use toRaw to avoid tracking #541
          storeActions[actionName] = vue.toRaw(store)[actionName];
          return storeActions;
      }, {});
      for (const actionName in actions) {
          store[actionName] = function () {
              // the running action id is incremented in a before action hook
              const _actionId = runningActionId;
              const trackedStore = wrapWithProxy
                  ? new Proxy(store, {
                      get(...args) {
                          activeAction = _actionId;
                          return Reflect.get(...args);
                      },
                      set(...args) {
                          activeAction = _actionId;
                          return Reflect.set(...args);
                      },
                  })
                  : store;
              // For Setup Stores we need https://github.com/tc39/proposal-async-context
              activeAction = _actionId;
              const retValue = actions[actionName].apply(trackedStore, arguments);
              // this is safer as async actions in Setup Stores would associate mutations done outside of the action
              activeAction = undefined;
              return retValue;
          };
      }
  }
  /**
   * pinia.use(devtoolsPlugin)
   */
  function devtoolsPlugin({ app, store, options }) {
      // HMR module
      if (store.$id.startsWith('__hot:')) {
          return;
      }
      // detect option api vs setup api
      store._isOptionsAPI = !!options.state;
      // Do not overwrite actions mocked by @pinia/testing (#2298)
      if (!store._p._testing) {
          patchActionForGrouping(store, Object.keys(options.actions), store._isOptionsAPI);
          // Upgrade the HMR to also update the new actions
          const originalHotUpdate = store._hotUpdate;
          vue.toRaw(store)._hotUpdate = function (newStore) {
              originalHotUpdate.apply(this, arguments);
              patchActionForGrouping(store, Object.keys(newStore._hmrPayload.actions), !!store._isOptionsAPI);
          };
      }
      addStoreToDevtools(app, 
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      store);
  }

  /**
   * Creates a Pinia instance to be used by the application
   */
  function createPinia() {
      const scope = vue.effectScope(true);
      // NOTE: here we could check the window object for a state and directly set it
      // if there is anything like it with Vue 3 SSR
      const state = scope.run(() => vue.ref({}));
      let _p = [];
      // plugins added before calling app.use(pinia)
      let toBeInstalled = [];
      const pinia = vue.markRaw({
          install(app) {
              // this allows calling useStore() outside of a component setup after
              // installing pinia's plugin
              setActivePinia(pinia);
              {
                  pinia._a = app;
                  app.provide(piniaSymbol, pinia);
                  app.config.globalProperties.$pinia = pinia;
                  /* istanbul ignore else */
                  if ((((typeof __VUE_PROD_DEVTOOLS__ !== 'undefined' && __VUE_PROD_DEVTOOLS__)) && !("production" === 'test')) && IS_CLIENT) {
                      registerPiniaDevtools(app, pinia);
                  }
                  toBeInstalled.forEach((plugin) => _p.push(plugin));
                  toBeInstalled = [];
              }
          },
          use(plugin) {
              if (!this._a && !isVue2) {
                  toBeInstalled.push(plugin);
              }
              else {
                  _p.push(plugin);
              }
              return this;
          },
          _p,
          // it's actually undefined here
          // @ts-expect-error
          _a: null,
          _e: scope,
          _s: new Map(),
          state,
      });
      // pinia devtools rely on dev only features so they cannot be forced unless
      // the dev build of Vue is used. Avoid old browsers like IE11.
      if ((((typeof __VUE_PROD_DEVTOOLS__ !== 'undefined' && __VUE_PROD_DEVTOOLS__)) && !("production" === 'test')) && IS_CLIENT && typeof Proxy !== 'undefined') {
          pinia.use(devtoolsPlugin);
      }
      return pinia;
  }

  const noop$1 = () => { };
  function addSubscription(subscriptions, callback, detached, onCleanup = noop$1) {
      subscriptions.push(callback);
      const removeSubscription = () => {
          const idx = subscriptions.indexOf(callback);
          if (idx > -1) {
              subscriptions.splice(idx, 1);
              onCleanup();
          }
      };
      if (!detached && vue.getCurrentScope()) {
          vue.onScopeDispose(removeSubscription);
      }
      return removeSubscription;
  }
  function triggerSubscriptions(subscriptions, ...args) {
      subscriptions.slice().forEach((callback) => {
          callback(...args);
      });
  }

  const fallbackRunWithContext = (fn) => fn();
  /**
   * Marks a function as an action for `$onAction`
   * @internal
   */
  const ACTION_MARKER = Symbol();
  /**
   * Action name symbol. Allows to add a name to an action after defining it
   * @internal
   */
  const ACTION_NAME = Symbol();
  function mergeReactiveObjects(target, patchToApply) {
      // Handle Map instances
      if (target instanceof Map && patchToApply instanceof Map) {
          patchToApply.forEach((value, key) => target.set(key, value));
      }
      else if (target instanceof Set && patchToApply instanceof Set) {
          // Handle Set instances
          patchToApply.forEach(target.add, target);
      }
      // no need to go through symbols because they cannot be serialized anyway
      for (const key in patchToApply) {
          if (!patchToApply.hasOwnProperty(key))
              continue;
          const subPatch = patchToApply[key];
          const targetValue = target[key];
          if (isPlainObject$2(targetValue) &&
              isPlainObject$2(subPatch) &&
              target.hasOwnProperty(key) &&
              !vue.isRef(subPatch) &&
              !vue.isReactive(subPatch)) {
              // NOTE: here I wanted to warn about inconsistent types but it's not possible because in setup stores one might
              // start the value of a property as a certain type e.g. a Map, and then for some reason, during SSR, change that
              // to `undefined`. When trying to hydrate, we want to override the Map with `undefined`.
              target[key] = mergeReactiveObjects(targetValue, subPatch);
          }
          else {
              // @ts-expect-error: subPatch is a valid value
              target[key] = subPatch;
          }
      }
      return target;
  }
  const skipHydrateSymbol = /* istanbul ignore next */ Symbol();
  /**
   * Returns whether a value should be hydrated
   *
   * @param obj - target variable
   * @returns true if `obj` should be hydrated
   */
  function shouldHydrate(obj) {
      return !isPlainObject$2(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
  }
  const { assign } = Object;
  function isComputed(o) {
      return !!(vue.isRef(o) && o.effect);
  }
  function createOptionsStore(id, options, pinia, hot) {
      const { state, actions, getters } = options;
      const initialState = pinia.state.value[id];
      let store;
      function setup() {
          if (!initialState && (!("production" !== 'production') )) {
              /* istanbul ignore if */
              {
                  pinia.state.value[id] = state ? state() : {};
              }
          }
          // avoid creating a state in pinia.state.value
          const localState = vue.toRefs(pinia.state.value[id]);
          return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
              computedGetters[name] = vue.markRaw(vue.computed(() => {
                  setActivePinia(pinia);
                  // it was created just before
                  const store = pinia._s.get(id);
                  // @ts-expect-error
                  // return getters![name].call(context, context)
                  // TODO: avoid reading the getter while assigning with a global variable
                  return getters[name].call(store, store);
              }));
              return computedGetters;
          }, {}));
      }
      store = createSetupStore(id, setup, options, pinia, hot, true);
      return store;
  }
  function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
      let scope;
      const optionsForPlugin = assign({ actions: {} }, options);
      // watcher options for $subscribe
      const $subscribeOptions = { deep: true };
      // internal state
      let isListening; // set to true at the end
      let isSyncListening; // set to true at the end
      let subscriptions = [];
      let actionSubscriptions = [];
      let debuggerEvents;
      const initialState = pinia.state.value[$id];
      // avoid setting the state for option stores if it is set
      // by the setup
      if (!isOptionsStore && !initialState && (!("production" !== 'production') )) {
          /* istanbul ignore if */
          {
              pinia.state.value[$id] = {};
          }
      }
      const hotState = vue.ref({});
      // avoid triggering too many listeners
      // https://github.com/vuejs/pinia/issues/1129
      let activeListener;
      function $patch(partialStateOrMutator) {
          let subscriptionMutation;
          isListening = isSyncListening = false;
          if (typeof partialStateOrMutator === 'function') {
              partialStateOrMutator(pinia.state.value[$id]);
              subscriptionMutation = {
                  type: MutationType.patchFunction,
                  storeId: $id,
                  events: debuggerEvents,
              };
          }
          else {
              mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
              subscriptionMutation = {
                  type: MutationType.patchObject,
                  payload: partialStateOrMutator,
                  storeId: $id,
                  events: debuggerEvents,
              };
          }
          const myListenerId = (activeListener = Symbol());
          vue.nextTick().then(() => {
              if (activeListener === myListenerId) {
                  isListening = true;
              }
          });
          isSyncListening = true;
          // because we paused the watcher, we need to manually call the subscriptions
          triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
      }
      const $reset = isOptionsStore
          ? function $reset() {
              const { state } = options;
              const newState = state ? state() : {};
              // we use a patch to group all changes into one single subscription
              this.$patch(($state) => {
                  // @ts-expect-error: FIXME: shouldn't error?
                  assign($state, newState);
              });
          }
          : /* istanbul ignore next */
              noop$1;
      function $dispose() {
          scope.stop();
          subscriptions = [];
          actionSubscriptions = [];
          pinia._s.delete($id);
      }
      /**
       * Helper that wraps function so it can be tracked with $onAction
       * @param fn - action to wrap
       * @param name - name of the action
       */
      const action = (fn, name = '') => {
          if (ACTION_MARKER in fn) {
              fn[ACTION_NAME] = name;
              return fn;
          }
          const wrappedAction = function () {
              setActivePinia(pinia);
              const args = Array.from(arguments);
              const afterCallbackList = [];
              const onErrorCallbackList = [];
              function after(callback) {
                  afterCallbackList.push(callback);
              }
              function onError(callback) {
                  onErrorCallbackList.push(callback);
              }
              // @ts-expect-error
              triggerSubscriptions(actionSubscriptions, {
                  args,
                  name: wrappedAction[ACTION_NAME],
                  store,
                  after,
                  onError,
              });
              let ret;
              try {
                  ret = fn.apply(this && this.$id === $id ? this : store, args);
                  // handle sync errors
              }
              catch (error) {
                  triggerSubscriptions(onErrorCallbackList, error);
                  throw error;
              }
              if (ret instanceof Promise) {
                  return ret
                      .then((value) => {
                      triggerSubscriptions(afterCallbackList, value);
                      return value;
                  })
                      .catch((error) => {
                      triggerSubscriptions(onErrorCallbackList, error);
                      return Promise.reject(error);
                  });
              }
              // trigger after callbacks
              triggerSubscriptions(afterCallbackList, ret);
              return ret;
          };
          wrappedAction[ACTION_MARKER] = true;
          wrappedAction[ACTION_NAME] = name; // will be set later
          // @ts-expect-error: we are intentionally limiting the returned type to just Fn
          // because all the added properties are internals that are exposed through `$onAction()` only
          return wrappedAction;
      };
      const _hmrPayload = /*#__PURE__*/ vue.markRaw({
          actions: {},
          getters: {},
          state: [],
          hotState,
      });
      const partialStore = {
          _p: pinia,
          // _s: scope,
          $id,
          $onAction: addSubscription.bind(null, actionSubscriptions),
          $patch,
          $reset,
          $subscribe(callback, options = {}) {
              const removeSubscription = addSubscription(subscriptions, callback, options.detached, () => stopWatcher());
              const stopWatcher = scope.run(() => vue.watch(() => pinia.state.value[$id], (state) => {
                  if (options.flush === 'sync' ? isSyncListening : isListening) {
                      callback({
                          storeId: $id,
                          type: MutationType.direct,
                          events: debuggerEvents,
                      }, state);
                  }
              }, assign({}, $subscribeOptions, options)));
              return removeSubscription;
          },
          $dispose,
      };
      const store = vue.reactive(((((typeof __VUE_PROD_DEVTOOLS__ !== 'undefined' && __VUE_PROD_DEVTOOLS__)) && !("production" === 'test')) && IS_CLIENT)
          ? assign({
              _hmrPayload,
              _customProperties: vue.markRaw(new Set()), // devtools custom properties
          }, partialStore
          // must be added later
          // setupStore
          )
          : partialStore);
      // store the partial store now so the setup of stores can instantiate each other before they are finished without
      // creating infinite loops.
      pinia._s.set($id, store);
      const runWithContext = (pinia._a && pinia._a.runWithContext) || fallbackRunWithContext;
      // TODO: idea create skipSerialize that marks properties as non serializable and they are skipped
      const setupStore = runWithContext(() => pinia._e.run(() => (scope = vue.effectScope()).run(() => setup({ action }))));
      // overwrite existing actions to support $onAction
      for (const key in setupStore) {
          const prop = setupStore[key];
          if ((vue.isRef(prop) && !isComputed(prop)) || vue.isReactive(prop)) {
              // mark it as a piece of state to be serialized
              if (!isOptionsStore) {
                  // in setup stores we must hydrate the state and sync pinia state tree with the refs the user just created
                  if (initialState && shouldHydrate(prop)) {
                      if (vue.isRef(prop)) {
                          prop.value = initialState[key];
                      }
                      else {
                          // probably a reactive object, lets recursively assign
                          // @ts-expect-error: prop is unknown
                          mergeReactiveObjects(prop, initialState[key]);
                      }
                  }
                  // transfer the ref to the pinia state to keep everything in sync
                  /* istanbul ignore if */
                  {
                      pinia.state.value[$id][key] = prop;
                  }
              }
              // action
          }
          else if (typeof prop === 'function') {
              const actionValue = action(prop, key);
              // this a hot module replacement store because the hotUpdate method needs
              // to do it with the right context
              /* istanbul ignore if */
              {
                  // @ts-expect-error
                  setupStore[key] = actionValue;
              }
              // list actions so they can be used in plugins
              // @ts-expect-error
              optionsForPlugin.actions[key] = prop;
          }
          else ;
      }
      // add the state, getters, and action properties
      /* istanbul ignore if */
      {
          assign(store, setupStore);
          // allows retrieving reactive objects with `storeToRefs()`. Must be called after assigning to the reactive object.
          // Make `storeToRefs()` work with `reactive()` #799
          assign(vue.toRaw(store), setupStore);
      }
      // use this instead of a computed with setter to be able to create it anywhere
      // without linking the computed lifespan to wherever the store is first
      // created.
      Object.defineProperty(store, '$state', {
          get: () => (pinia.state.value[$id]),
          set: (state) => {
              $patch(($state) => {
                  // @ts-expect-error: FIXME: shouldn't error?
                  assign($state, state);
              });
          },
      });
      if ((((typeof __VUE_PROD_DEVTOOLS__ !== 'undefined' && __VUE_PROD_DEVTOOLS__)) && !("production" === 'test')) && IS_CLIENT) {
          const nonEnumerable = {
              writable: true,
              configurable: true,
              // avoid warning on devtools trying to display this property
              enumerable: false,
          };
          ['_p', '_hmrPayload', '_getters', '_customProperties'].forEach((p) => {
              Object.defineProperty(store, p, assign({ value: store[p] }, nonEnumerable));
          });
      }
      // apply all plugins
      pinia._p.forEach((extender) => {
          /* istanbul ignore else */
          if ((((typeof __VUE_PROD_DEVTOOLS__ !== 'undefined' && __VUE_PROD_DEVTOOLS__)) && !("production" === 'test')) && IS_CLIENT) {
              const extensions = scope.run(() => extender({
                  store: store,
                  app: pinia._a,
                  pinia,
                  options: optionsForPlugin,
              }));
              Object.keys(extensions || {}).forEach((key) => store._customProperties.add(key));
              assign(store, extensions);
          }
          else {
              assign(store, scope.run(() => extender({
                  store: store,
                  app: pinia._a,
                  pinia,
                  options: optionsForPlugin,
              })));
          }
      });
      // only apply hydrate to option stores with an initial state in pinia
      if (initialState &&
          isOptionsStore &&
          options.hydrate) {
          options.hydrate(store.$state, initialState);
      }
      isListening = true;
      isSyncListening = true;
      return store;
  }
  // allows unused stores to be tree shaken
  /*! #__NO_SIDE_EFFECTS__ */
  function defineStore(
  // TODO: add proper types from above
  idOrOptions, setup, setupOptions) {
      let id;
      let options;
      const isSetupStore = typeof setup === 'function';
      if (typeof idOrOptions === 'string') {
          id = idOrOptions;
          // the option store setup will contain the actual options in this case
          options = isSetupStore ? setupOptions : setup;
      }
      else {
          options = idOrOptions;
          id = idOrOptions.id;
      }
      function useStore(pinia, hot) {
          const hasContext = vue.hasInjectionContext();
          pinia =
              // in test mode, ignore the argument provided as we can always retrieve a
              // pinia instance with getActivePinia()
              (pinia) ||
                  (hasContext ? vue.inject(piniaSymbol, null) : null);
          if (pinia)
              setActivePinia(pinia);
          pinia = activePinia;
          if (!pinia._s.has(id)) {
              // creating the store registers it in `pinia._s`
              if (isSetupStore) {
                  createSetupStore(id, setup, options, pinia);
              }
              else {
                  createOptionsStore(id, options, pinia);
              }
          }
          const store = pinia._s.get(id);
          // StoreGeneric cannot be casted towards Store
          return store;
      }
      useStore.$id = id;
      return useStore;
  }

  const useAppStoreHook = defineStore("myPrintApp", {
    state: () => {
      return {
        locale: localStorage.getItem("lang") || "zhCn",
        displayModel: "design",
        client: {
          connect: false
        },
        panelPosition: {
          x: 0,
          y: 0,
          scrollX: 0,
          scrollY: 0
        },
        currentPanel: {},
        previewData: [],
        provider: {},
        lastPageUnit: "px",
        currentElement: defaultElement,
        auxiliaryLineTmp: {},
        dataRotation: -1
      };
    },
    actions: {
      SET_LOCALE(locale) {
        this.locale = locale;
        localStorage.setItem("lang", locale);
        i18nInit.global.locale.value = locale;
      },
      SET_CLIENT_CONNECT(status) {
        this.client.connect = status;
      }
    }
  });

  function getCurrentPanel(panel) {
    return panel != null ? panel : useAppStoreHook().currentPanel;
  }
  function getCurrentPanelUnit(panel) {
    return _defaultVal(getCurrentPanel(panel).pageUnit, "px");
  }
  function parentInitElement(panel, parent, element, index) {
    var _a;
    initElement(panel, element, index);
    installParentElement(parent, element);
    if (((_a = element.elementList) == null ? void 0 : _a.length) > 0) {
      for (let i = 0; i < element.elementList.length; i++) {
        let elementTmp = element.elementList[i];
        parentInitElement(panel, element, elementTmp, i);
      }
    }
  }
  function initElement(panel, element, index) {
    if (element == null) {
      return;
    }
    if (element.option == null) {
      element.option = {};
    }
    if (element.runtimeOption == null) {
      element.runtimeOption = {};
    }
    element.runtimeOption.index = index;
    element.runtimeOption.status = "NONE";
    let initWidth = 0, initHeight = 0, initBorderWidth = 0;
    if (!element.id) {
      element.id = generateUUID();
      switch (element.type) {
        case "Text":
          initWidth = 30;
          initHeight = 8;
          break;
        case "DataTable":
          initWidth = 200;
          initHeight = 30;
          if (element.option.tableHeightType == null) {
            element.option.tableHeightType = "AUTO";
          }
          if (element.tableBodyList == void 0) {
            let indexView = {
              type: "Text",
              field: "autoIncrement",
              width: unit2unit("mm", getCurrentPanelUnit(), 10),
              label: "\u5E8F\u53F7",
              height: element.columnList[0].height,
              option: {
                disableSort: 1,
                disableEnable: 0,
                enable: 1,
                formatter: "{{autoIncrement}}"
              }
            };
            indexView.columnBody = {
              type: "Text",
              height: indexView.height,
              data: "1",
              option: { ...indexView.option }
            };
            element.columnList.unshift(indexView);
            const deep = findTableHeadDeep(element.columnList, 0) + 1;
            const tableHeadListList = [...Array.from({ length: deep }, (_) => [])];
            recursionHandleTableHead(tableHeadListList, element.columnList, 0);
            handleTableCellInitHeight(tableHeadListList);
            element.tableHeadList = tableHeadListList;
            element.tableBodyList = [[]];
            const floorHeaderList = tableHeadListList[deep - 1];
            let maxHeadHeight = -1, maxBodyHeight = -1;
            for (let i = 0; i < floorHeaderList.length; i++) {
              let tableHeadCellElement = floorHeaderList[i];
              if (tableHeadCellElement == null) {
                tableHeadCellElement = findUpperCell(tableHeadListList, i, deep - 1);
              }
              if (tableHeadCellElement == null) {
                continue;
              }
              if (tableHeadCellElement.columnBody == void 0) {
                tableHeadCellElement.columnBody = {
                  height: MathCalc.div(tableHeadCellElement.height, tableHeadCellElement.rowspan),
                  data: tableHeadCellElement.data,
                  type: "Text",
                  option: tableHeadCellElement.option
                };
              }
              if (tableHeadCellElement.columnBody.type == null) {
                tableHeadCellElement.columnBody.type = "Text";
              }
              if (tableHeadCellElement.columnBody.data == null) {
                tableHeadCellElement.columnBody.data = tableHeadCellElement.data;
              }
              if (!tableHeadCellElement.columnBody.height) {
                tableHeadCellElement.columnBody.height = MathCalc.div(tableHeadCellElement.height, tableHeadCellElement.rowspan);
              }
              tableHeadCellElement.columnBody.width = tableHeadCellElement.width;
              tableHeadCellElement.type = "Text";
              tableHeadCellElement.data = tableHeadCellElement.label;
              tableHeadCellElement.columnBody.rowspan = 1;
              tableHeadCellElement.columnBody.colspan = 1;
              element.tableBodyList[0].push(tableHeadCellElement.columnBody);
              if (maxHeadHeight < tableHeadCellElement.height) {
                maxHeadHeight = tableHeadCellElement.height;
              }
              if (maxBodyHeight < tableHeadCellElement.columnBody.height) {
                maxBodyHeight = tableHeadCellElement.columnBody.height;
              }
              tableHeadCellElement.columnBody = void 0;
            }
            if (element.option.tableHeightType == "AUTO") {
              element.height = maxHeadHeight + maxBodyHeight;
            }
          }
          break;
        case "Image":
          initWidth = 30;
          initHeight = 30;
          break;
        case "Rect":
          initWidth = 30;
          initHeight = 30;
          initBorderWidth = px2unit(1);
          break;
        case "HorizontalLine":
        case "DottedHorizontalLine":
          initWidth = 30;
          initBorderWidth = px2unit(1);
          initHeight = px2unit(initBorderWidth + 3);
          break;
        case "VerticalLine":
        case "DottedVerticalLine":
          initHeight = 30;
          initBorderWidth = px2unit(1);
          initWidth = px2unit(initBorderWidth + 3);
          break;
        case "SvgPolygonLine":
        case "SvgBezierCurve":
        case "SvgBezierCurveThree":
        case "SvgLine":
          if (element.data) {
            const data = JSON.parse(element.data);
            const points = data.points;
            const controlPoints = data.controlPoints;
            const dataJson = {};
            if (points) {
              for (let point of points) {
                point.x = unit2px(point.x, panel);
                point.y = unit2px(point.y, panel);
              }
              dataJson.points = points;
            }
            if (controlPoints) {
              for (let point of controlPoints) {
                point.x = unit2px(point.x, panel);
                point.y = unit2px(point.y, panel);
              }
              dataJson.controlPoints = controlPoints;
            }
            element.data = JSON.stringify(dataJson);
          }
          break;
      }
    }
    if (element.type == "Text" || element.type == "TextTime") {
      if (!element.contentType) {
        element.contentType = "Text";
      }
    }
    if (element.type == "DataTable") {
      for (let i = 0; i < element.tableHeadList.length; i++) {
        const headList = element.tableHeadList[i];
        for (let j = 0; j < headList.length; j++) {
          const column = headList[j];
          if (column) {
            parentInitElement(panel, element, column, i);
            column.runtimeOption.workEnvironment = "DataTable";
            column.runtimeOption.cellType = "Head";
          }
        }
      }
      for (let i = 0; i < element.tableBodyList.length; i++) {
        const bodyList = element.tableBodyList[i];
        for (let j = 0; j < bodyList.length; j++) {
          parentInitElement(panel, element, bodyList[j], element.tableHeadList.length);
          bodyList[j].runtimeOption.workEnvironment = "DataTable";
          bodyList[j].runtimeOption.cellType = "Body";
        }
      }
      if (!element.statisticsList) {
        element.statisticsList = [];
      }
      for (let i = 0; i < element.statisticsList.length; i++) {
        const statisticsList = element.statisticsList[i];
        for (let j = 0; j < statisticsList.length; j++) {
          parentInitElement(panel, element, statisticsList[j], element.tableHeadList.length);
          statisticsList[j].runtimeOption.workEnvironment = "DataTable";
          statisticsList[j].runtimeOption.cellType = "Statistics";
        }
      }
    }
    if (["Text", "TextTime", "PageNum", "DataTable"].includes(element.type)) {
      if (!element.option.fontFamily) {
        element.option.fontFamily = "heiti";
      }
      if (element.option.fontSize == null) {
        element.option.fontSize = 13;
      }
    }
    if (element.width == null) {
      element.width = initWidth;
    }
    if (element.height == null) {
      element.height = initHeight;
    }
    if (element.option.opacity == null) {
      element.option.opacity = 1;
    }
    if (!element.option.rotate) {
      element.option.rotate = 0;
    }
    if (element.option.padding == null) {
      element.option.padding = {};
    }
    element.runtimeOption.init = {};
    element.runtimeOption.init.runtimeOption = {};
    element.runtimeOption.width = unit2px(element.width, panel);
    element.runtimeOption.height = unit2px(element.height, panel);
    element.runtimeOption.x = unit2px(element.x, panel);
    element.runtimeOption.y = unit2px(element.y, panel);
    element.runtimeOption.rotate = element.option.rotate;
    element.runtimeOption.init.x = element.runtimeOption.x;
    element.runtimeOption.init.y = element.runtimeOption.y;
    element.runtimeOption.init.width = element.runtimeOption.width;
    element.runtimeOption.init.height = element.runtimeOption.height;
    element.runtimeOption.init.runtimeOption.rotate = element.runtimeOption.rotate;
    if (element.option.margin == null) {
      element.option.margin = {};
    }
  }
  function installParentElement(parent, element) {
    if (!element) {
      return;
    }
    element.runtimeOption.parent = parent;
  }
  function getPrintRealHeight(panel) {
    panel = getCurrentPanel(panel);
    if (panel.pageSize == "AutoHeight") {
      return panel.runtimeOption.printRealHeight;
    }
    return panel.height;
  }

  const useConfigStore = defineStore({
    id: "myPrintConfig",
    state: () => {
      return {
        // cursor: null,
        init: false,
        printer: null,
        defaultPrinter: void 0,
        clientProtocol: "myprint",
        clientUrl: "ws://127.0.0.1:9898",
        autoConnect: 1,
        settingPanel: {
          setting: { visible: false, x: 20, y: 70, width: 800, height: 500 },
          operation: { visible: false, x: 20, y: 70, width: 260, height: 600 },
          history: { visible: false, x: 20, y: 560, width: 200, height: 200 },
          elementList: { visible: false },
          miniMap: { visible: false, x: 20, y: 660, width: 200, height: 200 }
        },
        settingDesign: {
          autoAlign: 1,
          showElementDesignBorderIs: 1
        }
      };
    },
    // 也可以这样定义
    // state: () => ({ count: 0 })
    actions: {
      initConfig() {
        this.init = true;
      },
      updateConfig(key, value) {
        let self = this;
        self[key] = value;
        this.postConfig();
      },
      postConfig() {
      }
    },
    persist: true
  });

  let lockReconnect;
  const useSocket = defineStore("myPrintSocket", {
    state: () => {
      return {
        socket: void 0,
        timer: void 0,
        connect: false,
        printerList: [],
        resolveMap: {}
      };
    },
    actions: {
      INIT_SOCKET() {
        let stateThis = this;
        const reconnect = () => {
          if (lockReconnect) return;
          lockReconnect = true;
          stateThis.timer = setTimeout(() => {
            createSocket();
            lockReconnect = false;
          }, 4e3);
        };
        const onMessage = (msgData) => {
          if (this.resolveMap[msgData.taskId]) {
            this.resolveMap[msgData.taskId](msgData);
            delete this.resolveMap[msgData.taskId];
          }
        };
        const init = () => {
          this.socket.onopen = function(_event) {
            stateThis.connect = true;
            heartCheck.reset().start();
            stateThis.socket.send(JSON.stringify({
              options: { css: printCssStyle() },
              cmd: "text/css"
            }));
          };
          this.socket.onmessage = function(event) {
            const clientResult = JSON.parse(event.data);
            switch (clientResult.cmd) {
              case "printerList":
                stateThis.printerList = clientResult.data.map((res) => res);
                onMessage(clientResult);
                break;
              case "printResult":
                onMessage(clientResult);
                break;
              case "generatePdfResult":
                onMessage(clientResult);
                break;
            }
            heartCheck.reset().start();
          };
          this.socket.onerror = function(_event) {
            stateThis.connect = false;
            reconnect();
          };
          this.socket.onclose = function(_event) {
            heartCheck.reset();
            stateThis.connect = false;
            reconnect();
          };
          window.onbeforeunload = function() {
            stateThis.connect = false;
            stateThis.socket.close();
          };
        };
        const createSocket = () => {
          try {
            stateThis.socket = new WebSocket(useConfigStore().clientUrl.replace("https", "ws").replace("http", "ws"));
            init();
          } catch (e) {
            reconnect();
          }
        };
        const heartCheck = {
          timeout: 5e3,
          timeoutObj: setTimeout(() => {
          }),
          serverTimeoutObj: setInterval(() => {
          }),
          reset: function() {
            clearTimeout(this.timeoutObj);
            clearTimeout(this.serverTimeoutObj);
            return this;
          },
          start: function() {
            const self = this;
            clearTimeout(this.timeoutObj);
            clearTimeout(this.serverTimeoutObj);
            this.timeoutObj = setTimeout(function() {
              stateThis.socket.send(JSON.stringify({
                "cmd": "ping"
              }));
              self.serverTimeoutObj = setTimeout(function() {
                stateThis.socket.close();
              }, self.timeout);
            }, this.timeout);
          }
        };
        createSocket();
      },
      SET_PRINTER_LIST(list) {
        this.printerList = list;
      },
      SEND(taskId, msg) {
        return new Promise((resolve, _reject) => {
          this.resolveMap[taskId] = resolve;
          this.socket.send(msg);
        });
      }
    }
  });

  const myPrintClientService = {
    print(clientCmd, panel) {
      const options = clientCmd.options;
      if (options.html != null) {
        options.width = unit2unit(getCurrentPanelUnit(panel), "mm", panel.width);
        options.height = unit2unit(getCurrentPanelUnit(panel), "mm", getPrintRealHeight(panel));
      }
      return new Promise((resolve, _reject) => {
        useSocket().SEND(clientCmd.taskId, JSON.stringify(clientCmd)).then((msg) => {
          resolve(msg);
        });
      });
    },
    connectIs() {
      return useSocket().connect;
    },
    getPrinterList() {
      return useSocket().printerList;
    },
    asyncGetPrinterList() {
      return new Promise((resolve, reject) => {
        if (useSocket().connect) {
          const taskId = generateUUID();
          useSocket().SEND(taskId, JSON.stringify({
            taskId,
            cmd: "printerList"
          })).then((res) => {
            useSocket().SET_PRINTER_LIST(res.data);
            resolve(res.data);
          }).catch((e) => {
            reject(e);
          });
        } else {
          reject({ msg: "\u5BA2\u6237\u7AEF\u672A\u8FDE\u63A5" });
        }
      });
    }
  };

  const myPrintOptions = {
    disabledClient: false
  };
  let printNode = null;
  let previewNode = null;
  let handleChromePrint = null;
  let handleClientPrint = null;
  let handleChromeDownloadPdf = null;
  let handleClientDownloadPdf = null;
  let handleServerDownloadPdf = null;
  let handleChromeDownloadImg = null;
  let handleServerDownloadImg = null;
  let handleChromePreview = null;
  function installPrinter(app) {
    if (!printNode) {
      printNode = vue.h(PrintView, {});
      const container = document.createElement("div");
      printNode.appContext = app._context;
      vue.render(printNode, container);
      handleChromePrint = printNode.component.exposed.handleChromePrint;
      handleClientPrint = printNode.component.exposed.handleClientPrint;
      handleChromeDownloadPdf = printNode.component.exposed.handleChromeDownloadPdf;
      handleClientDownloadPdf = printNode.component.exposed.handleClientDownloadPdf;
      handleServerDownloadPdf = printNode.component.exposed.handleServerDownloadPdf;
      handleChromeDownloadImg = printNode.component.exposed.handleChromeDownloadImg;
      handleServerDownloadImg = printNode.component.exposed.handleServerDownloadImg;
      document.body.appendChild(container.firstElementChild);
    }
    if (!previewNode) {
      previewNode = vue.h(previewPanelView, {});
      const container = document.createElement("div");
      previewNode.appContext = app._context;
      vue.render(previewNode, container);
      handleChromePreview = previewNode.component.exposed.handleChromePreview;
      document.body.appendChild(container);
    }
  }
  function initPanel(panel) {
    panel.runtimeOption = {};
    for (let i = 0; i < panel.elementList.length; i++) {
      const element = panel.elementList[i];
      parentInitElement(panel, panel, element, i);
    }
    panel.pageHeader && parentInitElement(panel, panel, panel.pageHeader, 0);
    panel.pageFooter && parentInitElement(panel, panel, panel.pageFooter, 0);
  }
  function convertPrintProps(printProps) {
    return new Promise(async (resolve, _reject) => {
      let panel = printProps.panel;
      if (printProps.file) {
        if (isBlob(printProps.file)) {
          printProps.file = await blob2Base64(printProps.file);
        }
        if (isArrayBuffer(printProps.file)) {
          printProps.file = arrayBuffer2Base64(printProps.file);
        }
        if (isUint8Array(printProps.file)) {
          printProps.file = uint8Array2Base64(printProps.file);
        }
      } else {
        if (panel == null) {
          panel = getCurrentPanel();
        } else {
          if (typeof printProps.panel == "string") {
            panel = JSON.parse(printProps.panel);
            initPanel(panel);
          }
        }
      }
      if (!printProps.taskId) {
        printProps.taskId = generateUUID();
      }
      resolve({
        ...printProps,
        panel
      });
    });
  }
  const MyPrinter = {
    initMyPrinter(options) {
      if (options.serverUrl) {
        if (options.serverUrl.endsWith("/")) {
          myPrintOptions.serverUrl = options.serverUrl.slice(0, -1);
        } else {
          myPrintOptions.serverUrl = options.serverUrl;
        }
      }
      if (options.clientUrl) {
        if (options.clientUrl.endsWith("/")) {
          useConfigStore().clientUrl = options.clientUrl.slice(0, -1);
        } else {
          useConfigStore().clientUrl = options.clientUrl;
        }
      }
      myPrintOptions.disabledClient = options.disabledClient == null ? false : options.disabledClient;
    },
    setLocale(locale) {
      useAppStoreHook().SET_LOCALE(locale);
    },
    setClientUrl(clientUrl) {
      if (!clientUrl) {
        return;
      }
      if (clientUrl.endsWith("/")) {
        useConfigStore().clientUrl = clientUrl.slice(0, -1);
      } else {
        useConfigStore().clientUrl = clientUrl;
      }
      useSocket().INIT_SOCKET();
    },
    setServerUrl(serverUrl) {
      if (serverUrl.endsWith("/")) {
        myPrintOptions.serverUrl = serverUrl.slice(0, -1);
      } else {
        myPrintOptions.serverUrl = serverUrl;
      }
    },
    clientConnectIs() {
      return myPrintClientService.connectIs();
    },
    getPrinterList() {
      return myPrintClientService.getPrinterList();
    },
    getDefaultPrinter() {
      const printList = myPrintClientService.getPrinterList();
      if (printList == null || printList.length == 0) {
        return null;
      }
      for (let printListElement of printList) {
        if (printListElement.isDefault) {
          return printListElement;
        }
      }
      return printList[0];
    },
    asyncGetPrinterList() {
      return myPrintClientService.asyncGetPrinterList();
    },
    chromePreview(printProps) {
      return convertPrintProps(printProps).then(handleChromePreview);
    },
    chromePrinter(printProps) {
      return convertPrintProps(printProps).then(handleChromePrint);
    },
    clientPrinter(printProps) {
      return convertPrintProps(printProps).then(handleClientPrint);
    },
    pdfChrome(printProps) {
      return convertPrintProps(printProps).then(handleChromeDownloadPdf);
    },
    pdfClient(printProps) {
      return convertPrintProps(printProps).then(handleClientDownloadPdf);
    },
    pdfServer(printProps) {
      return convertPrintProps(printProps).then(handleServerDownloadPdf);
    },
    imgChrome(printProps) {
      return convertPrintProps(printProps).then(handleChromeDownloadImg);
    },
    imgServer(printProps) {
      return convertPrintProps(printProps).then(handleServerDownloadImg);
    }
  };

  function mountDesign(app, props, element) {
    const printNode = vue.h(DesignPanel, props == null ? {} : props);
    let elementTmp = element;
    if (elementTmp == null) {
      elementTmp = document.createElement("div");
    }
    printNode.appContext = app._context;
    vue.render(printNode, elementTmp);
    if (element == null) {
      document.body.appendChild(elementTmp.firstElementChild);
    }
  }

  const mittKey = Symbol("mittKey");

  function isObject$3(v) {
    return typeof v === "object" && v !== null;
  }
  function normalizeOptions(options, factoryOptions) {
    options = isObject$3(options) ? options : /* @__PURE__ */ Object.create(null);
    return new Proxy(options, {
      get(target, key, receiver) {
        if (key === "key")
          return Reflect.get(target, key, receiver);
        return Reflect.get(target, key, receiver) || Reflect.get(factoryOptions, key, receiver);
      }
    });
  }
  function get(state, path) {
    return path.reduce((obj, p) => {
      return obj == null ? void 0 : obj[p];
    }, state);
  }
  function set(state, path, val) {
    return path.slice(0, -1).reduce((obj, p) => {
      if (/^(__proto__)$/.test(p))
        return {};
      else return obj[p] = obj[p] || {};
    }, state)[path[path.length - 1]] = val, state;
  }
  function pick(baseState, paths) {
    return paths.reduce((substate, path) => {
      const pathArray = path.split(".");
      return set(substate, pathArray, get(baseState, pathArray));
    }, {});
  }
  function parsePersistence(factoryOptions, store) {
    return (o) => {
      var _a;
      try {
        const {
          storage = localStorage,
          beforeRestore = void 0,
          afterRestore = void 0,
          serializer = {
            serialize: JSON.stringify,
            deserialize: JSON.parse
          },
          key = store.$id,
          paths = null,
          debug = false
        } = o;
        return {
          storage,
          beforeRestore,
          afterRestore,
          serializer,
          key: ((_a = factoryOptions.key) != null ? _a : (k) => k)(typeof key == "string" ? key : key(store.$id)),
          paths,
          debug
        };
      } catch (e) {
        if (o.debug)
          console.error("[pinia-plugin-persistedstate]", e);
        return null;
      }
    };
  }
  function hydrateStore(store, { storage, serializer, key, debug }) {
    try {
      const fromStorage = storage == null ? void 0 : storage.getItem(key);
      if (fromStorage)
        store.$patch(serializer == null ? void 0 : serializer.deserialize(fromStorage));
    } catch (e) {
      if (debug)
        console.error("[pinia-plugin-persistedstate]", e);
    }
  }
  function persistState(state, { storage, serializer, key, paths, debug }) {
    try {
      const toStore = Array.isArray(paths) ? pick(state, paths) : state;
      storage.setItem(key, serializer.serialize(toStore));
    } catch (e) {
      if (debug)
        console.error("[pinia-plugin-persistedstate]", e);
    }
  }
  function createPersistedState(factoryOptions = {}) {
    return (context) => {
      const { auto = false } = factoryOptions;
      const {
        options: { persist = auto },
        store,
        pinia
      } = context;
      if (!persist)
        return;
      if (!(store.$id in pinia.state.value)) {
        const original_store = pinia._s.get(store.$id.replace("__hot:", ""));
        if (original_store)
          Promise.resolve().then(() => original_store.$persist());
        return;
      }
      const persistences = (Array.isArray(persist) ? persist.map((p) => normalizeOptions(p, factoryOptions)) : [normalizeOptions(persist, factoryOptions)]).map(parsePersistence(factoryOptions, store)).filter(Boolean);
      store.$persist = () => {
        persistences.forEach((persistence) => {
          persistState(store.$state, persistence);
        });
      };
      store.$hydrate = ({ runHooks = true } = {}) => {
        persistences.forEach((persistence) => {
          const { beforeRestore, afterRestore } = persistence;
          if (runHooks)
            beforeRestore == null ? void 0 : beforeRestore(context);
          hydrateStore(store, persistence);
          if (runHooks)
            afterRestore == null ? void 0 : afterRestore(context);
        });
      };
      persistences.forEach((persistence) => {
        const { beforeRestore, afterRestore } = persistence;
        beforeRestore == null ? void 0 : beforeRestore(context);
        hydrateStore(store, persistence);
        afterRestore == null ? void 0 : afterRestore(context);
        store.$subscribe(
          (_mutation, state) => {
            persistState(state, persistence);
          },
          {
            detached: true
          }
        );
      });
    };
  }
  var src_default = createPersistedState();

  function tryOnScopeDispose(fn) {
    if (vue.getCurrentScope()) {
      vue.onScopeDispose(fn);
      return true;
    }
    return false;
  }

  function toValue(r) {
    return typeof r === "function" ? r() : vue.unref(r);
  }

  const isClient = typeof window !== "undefined" && typeof document !== "undefined";
  typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
  const toString = Object.prototype.toString;
  const isObject$2 = (val) => toString.call(val) === "[object Object]";
  const noop = () => {
  };
  const isIOS = /* @__PURE__ */ getIsIOS();
  function getIsIOS() {
    var _a, _b;
    return isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
  }

  function createFilterWrapper(filter, fn) {
    function wrapper(...args) {
      return new Promise((resolve, reject) => {
        Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
      });
    }
    return wrapper;
  }
  const bypassFilter = (invoke) => {
    return invoke();
  };
  function debounceFilter(ms, options = {}) {
    let timer;
    let maxTimer;
    let lastRejector = noop;
    const _clearTimeout = (timer2) => {
      clearTimeout(timer2);
      lastRejector();
      lastRejector = noop;
    };
    const filter = (invoke) => {
      const duration = toValue(ms);
      const maxDuration = toValue(options.maxWait);
      if (timer)
        _clearTimeout(timer);
      if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
        if (maxTimer) {
          _clearTimeout(maxTimer);
          maxTimer = null;
        }
        return Promise.resolve(invoke());
      }
      return new Promise((resolve, reject) => {
        lastRejector = options.rejectOnCancel ? reject : resolve;
        if (maxDuration && !maxTimer) {
          maxTimer = setTimeout(() => {
            if (timer)
              _clearTimeout(timer);
            maxTimer = null;
            resolve(invoke());
          }, maxDuration);
        }
        timer = setTimeout(() => {
          if (maxTimer)
            _clearTimeout(maxTimer);
          maxTimer = null;
          resolve(invoke());
        }, duration);
      });
    };
    return filter;
  }
  function pausableFilter(extendFilter = bypassFilter) {
    const isActive = vue.ref(true);
    function pause() {
      isActive.value = false;
    }
    function resume() {
      isActive.value = true;
    }
    const eventFilter = (...args) => {
      if (isActive.value)
        extendFilter(...args);
    };
    return { isActive: vue.readonly(isActive), pause, resume, eventFilter };
  }
  function createSingletonPromise(fn) {
    let _promise;
    function wrapper() {
      if (!_promise)
        _promise = fn();
      return _promise;
    }
    wrapper.reset = async () => {
      const _prev = _promise;
      _promise = void 0;
      if (_prev)
        await _prev;
    };
    return wrapper;
  }
  function getLifeCycleTarget(target) {
    return target || vue.getCurrentInstance();
  }

  function useDebounceFn(fn, ms = 200, options = {}) {
    return createFilterWrapper(
      debounceFilter(ms, options),
      fn
    );
  }

  function watchWithFilter(source, cb, options = {}) {
    const {
      eventFilter = bypassFilter,
      ...watchOptions
    } = options;
    return vue.watch(
      source,
      createFilterWrapper(
        eventFilter,
        cb
      ),
      watchOptions
    );
  }

  function watchPausable(source, cb, options = {}) {
    const {
      eventFilter: filter,
      ...watchOptions
    } = options;
    const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
    const stop = watchWithFilter(
      source,
      cb,
      {
        ...watchOptions,
        eventFilter
      }
    );
    return { stop, pause, resume, isActive };
  }

  function tryOnMounted(fn, sync = true, target) {
    const instance = getLifeCycleTarget();
    if (instance)
      vue.onMounted(fn, target);
    else if (sync)
      fn();
    else
      vue.nextTick(fn);
  }

  function useTimeoutFn(cb, interval, options = {}) {
    const {
      immediate = true
    } = options;
    const isPending = vue.ref(false);
    let timer = null;
    function clear() {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    }
    function stop() {
      isPending.value = false;
      clear();
    }
    function start(...args) {
      clear();
      isPending.value = true;
      timer = setTimeout(() => {
        isPending.value = false;
        timer = null;
        cb(...args);
      }, toValue(interval));
    }
    if (immediate) {
      isPending.value = true;
      if (isClient)
        start();
    }
    tryOnScopeDispose(stop);
    return {
      isPending: vue.readonly(isPending),
      start,
      stop
    };
  }

  function whenever(source, cb, options) {
    const stop = vue.watch(
      source,
      (v, ov, onInvalidate) => {
        if (v) {
          if (options == null ? void 0 : options.once)
            vue.nextTick(() => stop());
          cb(v, ov, onInvalidate);
        }
      },
      {
        ...options,
        once: false
      }
    );
    return stop;
  }

  function unrefElement(elRef) {
    var _a;
    const plain = toValue(elRef);
    return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
  }

  const defaultWindow = isClient ? window : void 0;
  const defaultNavigator = isClient ? window.navigator : void 0;

  function useEventListener(...args) {
    let target;
    let events;
    let listeners;
    let options;
    if (typeof args[0] === "string" || Array.isArray(args[0])) {
      [events, listeners, options] = args;
      target = defaultWindow;
    } else {
      [target, events, listeners, options] = args;
    }
    if (!target)
      return noop;
    if (!Array.isArray(events))
      events = [events];
    if (!Array.isArray(listeners))
      listeners = [listeners];
    const cleanups = [];
    const cleanup = () => {
      cleanups.forEach((fn) => fn());
      cleanups.length = 0;
    };
    const register = (el, event, listener, options2) => {
      el.addEventListener(event, listener, options2);
      return () => el.removeEventListener(event, listener, options2);
    };
    const stopWatch = vue.watch(
      () => [unrefElement(target), toValue(options)],
      ([el, options2]) => {
        cleanup();
        if (!el)
          return;
        const optionsClone = isObject$2(options2) ? { ...options2 } : options2;
        cleanups.push(
          ...events.flatMap((event) => {
            return listeners.map((listener) => register(el, event, listener, optionsClone));
          })
        );
      },
      { immediate: true, flush: "post" }
    );
    const stop = () => {
      stopWatch();
      cleanup();
    };
    tryOnScopeDispose(stop);
    return stop;
  }

  let _iOSWorkaround = false;
  function onClickOutside(target, handler, options = {}) {
    const { window = defaultWindow, ignore = [], capture = true, detectIframe = false } = options;
    if (!window)
      return noop;
    if (isIOS && !_iOSWorkaround) {
      _iOSWorkaround = true;
      Array.from(window.document.body.children).forEach((el) => el.addEventListener("click", noop));
      window.document.documentElement.addEventListener("click", noop);
    }
    let shouldListen = true;
    const shouldIgnore = (event) => {
      return ignore.some((target2) => {
        if (typeof target2 === "string") {
          return Array.from(window.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
        } else {
          const el = unrefElement(target2);
          return el && (event.target === el || event.composedPath().includes(el));
        }
      });
    };
    const listener = (event) => {
      const el = unrefElement(target);
      if (!el || el === event.target || event.composedPath().includes(el))
        return;
      if (event.detail === 0)
        shouldListen = !shouldIgnore(event);
      if (!shouldListen) {
        shouldListen = true;
        return;
      }
      handler(event);
    };
    const cleanup = [
      useEventListener(window, "click", listener, { passive: true, capture }),
      useEventListener(window, "pointerdown", (e) => {
        const el = unrefElement(target);
        shouldListen = !shouldIgnore(e) && !!(el && !e.composedPath().includes(el));
      }, { passive: true }),
      detectIframe && useEventListener(window, "blur", (event) => {
        setTimeout(() => {
          var _a;
          const el = unrefElement(target);
          if (((_a = window.document.activeElement) == null ? void 0 : _a.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window.document.activeElement))) {
            handler(event);
          }
        }, 0);
      })
    ].filter(Boolean);
    const stop = () => cleanup.forEach((fn) => fn());
    return stop;
  }

  function useMounted() {
    const isMounted = vue.ref(false);
    const instance = vue.getCurrentInstance();
    if (instance) {
      vue.onMounted(() => {
        isMounted.value = true;
      }, instance);
    }
    return isMounted;
  }

  function useSupported(callback) {
    const isMounted = useMounted();
    return vue.computed(() => {
      isMounted.value;
      return Boolean(callback());
    });
  }

  function usePermission(permissionDesc, options = {}) {
    const {
      controls = false,
      navigator = defaultNavigator
    } = options;
    const isSupported = useSupported(() => navigator && "permissions" in navigator);
    let permissionStatus;
    const desc = typeof permissionDesc === "string" ? { name: permissionDesc } : permissionDesc;
    const state = vue.ref();
    const onChange = () => {
      if (permissionStatus)
        state.value = permissionStatus.state;
    };
    const query = createSingletonPromise(async () => {
      if (!isSupported.value)
        return;
      if (!permissionStatus) {
        try {
          permissionStatus = await navigator.permissions.query(desc);
          useEventListener(permissionStatus, "change", onChange);
          onChange();
        } catch (e) {
          state.value = "prompt";
        }
      }
      return permissionStatus;
    });
    query();
    if (controls) {
      return {
        state,
        isSupported,
        query
      };
    } else {
      return state;
    }
  }

  function useClipboard(options = {}) {
    const {
      navigator = defaultNavigator,
      read = false,
      source,
      copiedDuring = 1500,
      legacy = false
    } = options;
    const isClipboardApiSupported = useSupported(() => navigator && "clipboard" in navigator);
    const permissionRead = usePermission("clipboard-read");
    const permissionWrite = usePermission("clipboard-write");
    const isSupported = vue.computed(() => isClipboardApiSupported.value || legacy);
    const text = vue.ref("");
    const copied = vue.ref(false);
    const timeout = useTimeoutFn(() => copied.value = false, copiedDuring);
    function updateText() {
      if (isClipboardApiSupported.value && isAllowed(permissionRead.value)) {
        navigator.clipboard.readText().then((value) => {
          text.value = value;
        });
      } else {
        text.value = legacyRead();
      }
    }
    if (isSupported.value && read)
      useEventListener(["copy", "cut"], updateText);
    async function copy(value = toValue(source)) {
      if (isSupported.value && value != null) {
        if (isClipboardApiSupported.value && isAllowed(permissionWrite.value))
          await navigator.clipboard.writeText(value);
        else
          legacyCopy(value);
        text.value = value;
        copied.value = true;
        timeout.start();
      }
    }
    function legacyCopy(value) {
      const ta = document.createElement("textarea");
      ta.value = value != null ? value : "";
      ta.style.position = "absolute";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    function legacyRead() {
      var _a, _b, _c;
      return (_c = (_b = (_a = document == null ? void 0 : document.getSelection) == null ? void 0 : _a.call(document)) == null ? void 0 : _b.toString()) != null ? _c : "";
    }
    function isAllowed(status) {
      return status === "granted" || status === "prompt";
    }
    return {
      isSupported,
      text,
      copied,
      copy
    };
  }

  const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  const globalKey = "__vueuse_ssr_handlers__";
  const handlers = /* @__PURE__ */ getHandlers();
  function getHandlers() {
    if (!(globalKey in _global))
      _global[globalKey] = _global[globalKey] || {};
    return _global[globalKey];
  }
  function getSSRHandler(key, fallback) {
    return handlers[key] || fallback;
  }

  function guessSerializerType(rawInit) {
    return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
  }

  const StorageSerializers = {
    boolean: {
      read: (v) => v === "true",
      write: (v) => String(v)
    },
    object: {
      read: (v) => JSON.parse(v),
      write: (v) => JSON.stringify(v)
    },
    number: {
      read: (v) => Number.parseFloat(v),
      write: (v) => String(v)
    },
    any: {
      read: (v) => v,
      write: (v) => String(v)
    },
    string: {
      read: (v) => v,
      write: (v) => String(v)
    },
    map: {
      read: (v) => new Map(JSON.parse(v)),
      write: (v) => JSON.stringify(Array.from(v.entries()))
    },
    set: {
      read: (v) => new Set(JSON.parse(v)),
      write: (v) => JSON.stringify(Array.from(v))
    },
    date: {
      read: (v) => new Date(v),
      write: (v) => v.toISOString()
    }
  };
  const customStorageEventName = "vueuse-storage";
  function useStorage(key, defaults, storage, options = {}) {
    var _a;
    const {
      flush = "pre",
      deep = true,
      listenToStorageChanges = true,
      writeDefaults = true,
      mergeDefaults = false,
      shallow,
      window = defaultWindow,
      eventFilter,
      onError = (e) => {
        console.error(e);
      },
      initOnMounted
    } = options;
    const data = (shallow ? vue.shallowRef : vue.ref)(typeof defaults === "function" ? defaults() : defaults);
    if (!storage) {
      try {
        storage = getSSRHandler("getDefaultStorage", () => {
          var _a2;
          return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
        })();
      } catch (e) {
        onError(e);
      }
    }
    if (!storage)
      return data;
    const rawInit = toValue(defaults);
    const type = guessSerializerType(rawInit);
    const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
    const { pause: pauseWatch, resume: resumeWatch } = watchPausable(
      data,
      () => write(data.value),
      { flush, deep, eventFilter }
    );
    if (window && listenToStorageChanges) {
      tryOnMounted(() => {
        useEventListener(window, "storage", update);
        useEventListener(window, customStorageEventName, updateFromCustomEvent);
        if (initOnMounted)
          update();
      });
    }
    if (!initOnMounted)
      update();
    function dispatchWriteEvent(oldValue, newValue) {
      if (window) {
        window.dispatchEvent(new CustomEvent(customStorageEventName, {
          detail: {
            key,
            oldValue,
            newValue,
            storageArea: storage
          }
        }));
      }
    }
    function write(v) {
      try {
        const oldValue = storage.getItem(key);
        if (v == null) {
          dispatchWriteEvent(oldValue, null);
          storage.removeItem(key);
        } else {
          const serialized = serializer.write(v);
          if (oldValue !== serialized) {
            storage.setItem(key, serialized);
            dispatchWriteEvent(oldValue, serialized);
          }
        }
      } catch (e) {
        onError(e);
      }
    }
    function read(event) {
      const rawValue = event ? event.newValue : storage.getItem(key);
      if (rawValue == null) {
        if (writeDefaults && rawInit != null)
          storage.setItem(key, serializer.write(rawInit));
        return rawInit;
      } else if (!event && mergeDefaults) {
        const value = serializer.read(rawValue);
        if (typeof mergeDefaults === "function")
          return mergeDefaults(value, rawInit);
        else if (type === "object" && !Array.isArray(value))
          return { ...rawInit, ...value };
        return value;
      } else if (typeof rawValue !== "string") {
        return rawValue;
      } else {
        return serializer.read(rawValue);
      }
    }
    function update(event) {
      if (event && event.storageArea !== storage)
        return;
      if (event && event.key == null) {
        data.value = rawInit;
        return;
      }
      if (event && event.key !== key)
        return;
      pauseWatch();
      try {
        if ((event == null ? void 0 : event.newValue) !== serializer.write(data.value))
          data.value = read(event);
      } catch (e) {
        onError(e);
      } finally {
        if (event)
          vue.nextTick(resumeWatch);
        else
          resumeWatch();
      }
    }
    function updateFromCustomEvent(event) {
      update(event.detail);
    }
    return data;
  }

  function useLocalStorage(key, initialValue, options = {}) {
    const { window = defaultWindow } = options;
    return useStorage(key, initialValue, window == null ? void 0 : window.localStorage, options);
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof(obj);
  }
  var trimLeft = /^\s+/;
  var trimRight = /\s+$/;
  function tinycolor(color, opts) {
    color = color ? color : "";
    opts = opts || {};
    if (color instanceof tinycolor) {
      return color;
    }
    if (!(this instanceof tinycolor)) {
      return new tinycolor(color, opts);
    }
    var rgb = inputToRGB(color);
    this._originalInput = color, this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = Math.round(100 * this._a) / 100, this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType;
    if (this._r < 1) this._r = Math.round(this._r);
    if (this._g < 1) this._g = Math.round(this._g);
    if (this._b < 1) this._b = Math.round(this._b);
    this._ok = rgb.ok;
  }
  tinycolor.prototype = {
    isDark: function isDark() {
      return this.getBrightness() < 128;
    },
    isLight: function isLight() {
      return !this.isDark();
    },
    isValid: function isValid() {
      return this._ok;
    },
    getOriginalInput: function getOriginalInput() {
      return this._originalInput;
    },
    getFormat: function getFormat() {
      return this._format;
    },
    getAlpha: function getAlpha() {
      return this._a;
    },
    getBrightness: function getBrightness() {
      var rgb = this.toRgb();
      return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
    },
    getLuminance: function getLuminance() {
      var rgb = this.toRgb();
      var RsRGB, GsRGB, BsRGB, R, G, B;
      RsRGB = rgb.r / 255;
      GsRGB = rgb.g / 255;
      BsRGB = rgb.b / 255;
      if (RsRGB <= 0.03928) R = RsRGB / 12.92;
      else R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
      if (GsRGB <= 0.03928) G = GsRGB / 12.92;
      else G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
      if (BsRGB <= 0.03928) B = BsRGB / 12.92;
      else B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
      return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    },
    setAlpha: function setAlpha(value) {
      this._a = boundAlpha(value);
      this._roundA = Math.round(100 * this._a) / 100;
      return this;
    },
    toHsv: function toHsv() {
      var hsv = rgbToHsv(this._r, this._g, this._b);
      return {
        h: hsv.h * 360,
        s: hsv.s,
        v: hsv.v,
        a: this._a
      };
    },
    toHsvString: function toHsvString() {
      var hsv = rgbToHsv(this._r, this._g, this._b);
      var h = Math.round(hsv.h * 360), s = Math.round(hsv.s * 100), v = Math.round(hsv.v * 100);
      return this._a == 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + this._roundA + ")";
    },
    toHsl: function toHsl() {
      var hsl = rgbToHsl(this._r, this._g, this._b);
      return {
        h: hsl.h * 360,
        s: hsl.s,
        l: hsl.l,
        a: this._a
      };
    },
    toHslString: function toHslString() {
      var hsl = rgbToHsl(this._r, this._g, this._b);
      var h = Math.round(hsl.h * 360), s = Math.round(hsl.s * 100), l = Math.round(hsl.l * 100);
      return this._a == 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + this._roundA + ")";
    },
    toHex: function toHex(allow3Char) {
      return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function toHexString(allow3Char) {
      return "#" + this.toHex(allow3Char);
    },
    toHex8: function toHex8(allow4Char) {
      return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function toHex8String(allow4Char) {
      return "#" + this.toHex8(allow4Char);
    },
    toRgb: function toRgb() {
      return {
        r: Math.round(this._r),
        g: Math.round(this._g),
        b: Math.round(this._b),
        a: this._a
      };
    },
    toRgbString: function toRgbString() {
      return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function toPercentageRgb() {
      return {
        r: Math.round(bound01(this._r, 255) * 100) + "%",
        g: Math.round(bound01(this._g, 255) * 100) + "%",
        b: Math.round(bound01(this._b, 255) * 100) + "%",
        a: this._a
      };
    },
    toPercentageRgbString: function toPercentageRgbString() {
      return this._a == 1 ? "rgb(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function toName() {
      if (this._a === 0) {
        return "transparent";
      }
      if (this._a < 1) {
        return false;
      }
      return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function toFilter(secondColor) {
      var hex8String = "#" + rgbaToArgbHex(this._r, this._g, this._b, this._a);
      var secondHex8String = hex8String;
      var gradientType = this._gradientType ? "GradientType = 1, " : "";
      if (secondColor) {
        var s = tinycolor(secondColor);
        secondHex8String = "#" + rgbaToArgbHex(s._r, s._g, s._b, s._a);
      }
      return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
    },
    toString: function toString(format) {
      var formatSet = !!format;
      format = format || this._format;
      var formattedString = false;
      var hasAlpha = this._a < 1 && this._a >= 0;
      var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");
      if (needsAlphaFormat) {
        if (format === "name" && this._a === 0) {
          return this.toName();
        }
        return this.toRgbString();
      }
      if (format === "rgb") {
        formattedString = this.toRgbString();
      }
      if (format === "prgb") {
        formattedString = this.toPercentageRgbString();
      }
      if (format === "hex" || format === "hex6") {
        formattedString = this.toHexString();
      }
      if (format === "hex3") {
        formattedString = this.toHexString(true);
      }
      if (format === "hex4") {
        formattedString = this.toHex8String(true);
      }
      if (format === "hex8") {
        formattedString = this.toHex8String();
      }
      if (format === "name") {
        formattedString = this.toName();
      }
      if (format === "hsl") {
        formattedString = this.toHslString();
      }
      if (format === "hsv") {
        formattedString = this.toHsvString();
      }
      return formattedString || this.toHexString();
    },
    clone: function clone() {
      return tinycolor(this.toString());
    },
    _applyModification: function _applyModification(fn, args) {
      var color = fn.apply(null, [this].concat([].slice.call(args)));
      this._r = color._r;
      this._g = color._g;
      this._b = color._b;
      this.setAlpha(color._a);
      return this;
    },
    lighten: function lighten() {
      return this._applyModification(_lighten, arguments);
    },
    brighten: function brighten() {
      return this._applyModification(_brighten, arguments);
    },
    darken: function darken() {
      return this._applyModification(_darken, arguments);
    },
    desaturate: function desaturate() {
      return this._applyModification(_desaturate, arguments);
    },
    saturate: function saturate() {
      return this._applyModification(_saturate, arguments);
    },
    greyscale: function greyscale() {
      return this._applyModification(_greyscale, arguments);
    },
    spin: function spin() {
      return this._applyModification(_spin, arguments);
    },
    _applyCombination: function _applyCombination(fn, args) {
      return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function analogous() {
      return this._applyCombination(_analogous, arguments);
    },
    complement: function complement() {
      return this._applyCombination(_complement, arguments);
    },
    monochromatic: function monochromatic() {
      return this._applyCombination(_monochromatic, arguments);
    },
    splitcomplement: function splitcomplement() {
      return this._applyCombination(_splitcomplement, arguments);
    },
    // Disabled until https://github.com/bgrins/TinyColor/issues/254
    // polyad: function (number) {
    //   return this._applyCombination(polyad, [number]);
    // },
    triad: function triad() {
      return this._applyCombination(polyad, [3]);
    },
    tetrad: function tetrad() {
      return this._applyCombination(polyad, [4]);
    }
  };
  tinycolor.fromRatio = function(color, opts) {
    if (_typeof(color) == "object") {
      var newColor = {};
      for (var i in color) {
        if (color.hasOwnProperty(i)) {
          if (i === "a") {
            newColor[i] = color[i];
          } else {
            newColor[i] = convertToPercentage(color[i]);
          }
        }
      }
      color = newColor;
    }
    return tinycolor(color, opts);
  };
  function inputToRGB(color) {
    var rgb = {
      r: 0,
      g: 0,
      b: 0
    };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;
    if (typeof color == "string") {
      color = stringInputToObject(color);
    }
    if (_typeof(color) == "object") {
      if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
        rgb = rgbToRgb(color.r, color.g, color.b);
        ok = true;
        format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
      } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
        s = convertToPercentage(color.s);
        v = convertToPercentage(color.v);
        rgb = hsvToRgb(color.h, s, v);
        ok = true;
        format = "hsv";
      } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
        s = convertToPercentage(color.s);
        l = convertToPercentage(color.l);
        rgb = hslToRgb(color.h, s, l);
        ok = true;
        format = "hsl";
      }
      if (color.hasOwnProperty("a")) {
        a = color.a;
      }
    }
    a = boundAlpha(a);
    return {
      ok,
      format: color.format || format,
      r: Math.min(255, Math.max(rgb.r, 0)),
      g: Math.min(255, Math.max(rgb.g, 0)),
      b: Math.min(255, Math.max(rgb.b, 0)),
      a
    };
  }
  function rgbToRgb(r, g, b) {
    return {
      r: bound01(r, 255) * 255,
      g: bound01(g, 255) * 255,
      b: bound01(b, 255) * 255
    };
  }
  function rgbToHsl(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
    if (max == min) {
      h = s = 0;
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }
    return {
      h,
      s,
      l
    };
  }
  function hslToRgb(h, s, l) {
    var r, g, b;
    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);
    function hue2rgb(p2, q2, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p2 + (q2 - p2) * 6 * t;
      if (t < 1 / 2) return q2;
      if (t < 2 / 3) return p2 + (q2 - p2) * (2 / 3 - t) * 6;
      return p2;
    }
    if (s === 0) {
      r = g = b = l;
    } else {
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    return {
      r: r * 255,
      g: g * 255,
      b: b * 255
    };
  }
  function rgbToHsv(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, v = max;
    var d = max - min;
    s = max === 0 ? 0 : d / max;
    if (max == min) {
      h = 0;
    } else {
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }
    return {
      h,
      s,
      v
    };
  }
  function hsvToRgb(h, s, v) {
    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);
    var i = Math.floor(h), f = h - i, p = v * (1 - s), q = v * (1 - f * s), t = v * (1 - (1 - f) * s), mod = i % 6, r = [v, q, p, p, t, v][mod], g = [t, v, v, q, p, p][mod], b = [p, p, t, v, v, q][mod];
    return {
      r: r * 255,
      g: g * 255,
      b: b * 255
    };
  }
  function rgbToHex(r, g, b, allow3Char) {
    var hex = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))];
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
      return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join("");
  }
  function rgbaToHex(r, g, b, a, allow4Char) {
    var hex = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16)), pad2(convertDecimalToHex(a))];
    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
      return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }
    return hex.join("");
  }
  function rgbaToArgbHex(r, g, b, a) {
    var hex = [pad2(convertDecimalToHex(a)), pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))];
    return hex.join("");
  }
  tinycolor.equals = function(color1, color2) {
    if (!color1 || !color2) return false;
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
  };
  tinycolor.random = function() {
    return tinycolor.fromRatio({
      r: Math.random(),
      g: Math.random(),
      b: Math.random()
    });
  };
  function _desaturate(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
  }
  function _saturate(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
  }
  function _greyscale(color) {
    return tinycolor(color).desaturate(100);
  }
  function _lighten(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
  }
  function _brighten(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var rgb = tinycolor(color).toRgb();
    rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
    rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
    rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
    return tinycolor(rgb);
  }
  function _darken(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
  }
  function _spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
  }
  function _complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
  }
  function polyad(color, number) {
    if (isNaN(number) || number <= 0) {
      throw new Error("Argument to polyad must be a positive number");
    }
    var hsl = tinycolor(color).toHsl();
    var result = [tinycolor(color)];
    var step = 360 / number;
    for (var i = 1; i < number; i++) {
      result.push(tinycolor({
        h: (hsl.h + i * step) % 360,
        s: hsl.s,
        l: hsl.l
      }));
    }
    return result;
  }
  function _splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [tinycolor(color), tinycolor({
      h: (h + 72) % 360,
      s: hsl.s,
      l: hsl.l
    }), tinycolor({
      h: (h + 216) % 360,
      s: hsl.s,
      l: hsl.l
    })];
  }
  function _analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;
    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];
    for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
      hsl.h = (hsl.h + part) % 360;
      ret.push(tinycolor(hsl));
    }
    return ret;
  }
  function _monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h, s = hsv.s, v = hsv.v;
    var ret = [];
    var modification = 1 / results;
    while (results--) {
      ret.push(tinycolor({
        h,
        s,
        v
      }));
      v = (v + modification) % 1;
    }
    return ret;
  }
  tinycolor.mix = function(color1, color2, amount) {
    amount = amount === 0 ? 0 : amount || 50;
    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();
    var p = amount / 100;
    var rgba = {
      r: (rgb2.r - rgb1.r) * p + rgb1.r,
      g: (rgb2.g - rgb1.g) * p + rgb1.g,
      b: (rgb2.b - rgb1.b) * p + rgb1.b,
      a: (rgb2.a - rgb1.a) * p + rgb1.a
    };
    return tinycolor(rgba);
  };
  tinycolor.readability = function(color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
  };
  tinycolor.isReadable = function(color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;
    out = false;
    wcag2Parms = validateWCAG2Parms(wcag2);
    switch (wcag2Parms.level + wcag2Parms.size) {
      case "AAsmall":
      case "AAAlarge":
        out = readability >= 4.5;
        break;
      case "AAlarge":
        out = readability >= 3;
        break;
      case "AAAsmall":
        out = readability >= 7;
        break;
    }
    return out;
  };
  tinycolor.mostReadable = function(baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors;
    level = args.level;
    size = args.size;
    for (var i = 0; i < colorList.length; i++) {
      readability = tinycolor.readability(baseColor, colorList[i]);
      if (readability > bestScore) {
        bestScore = readability;
        bestColor = tinycolor(colorList[i]);
      }
    }
    if (tinycolor.isReadable(baseColor, bestColor, {
      level,
      size
    }) || !includeFallbackColors) {
      return bestColor;
    } else {
      args.includeFallbackColors = false;
      return tinycolor.mostReadable(baseColor, ["#fff", "#000"], args);
    }
  };
  var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
  };
  var hexNames = tinycolor.hexNames = flip$2(names);
  function flip$2(o) {
    var flipped = {};
    for (var i in o) {
      if (o.hasOwnProperty(i)) {
        flipped[o[i]] = i;
      }
    }
    return flipped;
  }
  function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
      a = 1;
    }
    return a;
  }
  function bound01(n, max) {
    if (isOnePointZero(n)) n = "100%";
    var processPercent = isPercentage(n);
    n = Math.min(max, Math.max(0, parseFloat(n)));
    if (processPercent) {
      n = parseInt(n * max, 10) / 100;
    }
    if (Math.abs(n - max) < 1e-6) {
      return 1;
    }
    return n % max / parseFloat(max);
  }
  function clamp01(val) {
    return Math.min(1, Math.max(0, val));
  }
  function parseIntFromHex(val) {
    return parseInt(val, 16);
  }
  function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf(".") != -1 && parseFloat(n) === 1;
  }
  function isPercentage(n) {
    return typeof n === "string" && n.indexOf("%") != -1;
  }
  function pad2(c) {
    return c.length == 1 ? "0" + c : "" + c;
  }
  function convertToPercentage(n) {
    if (n <= 1) {
      n = n * 100 + "%";
    }
    return n;
  }
  function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
  }
  function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
  }
  var matchers = function() {
    var CSS_INTEGER = "[-\\+]?\\d+%?";
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    return {
      CSS_UNIT: new RegExp(CSS_UNIT),
      rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
      rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
      hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
      hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
      hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
      hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
      hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
  }();
  function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
  }
  function stringInputToObject(color) {
    color = color.replace(trimLeft, "").replace(trimRight, "").toLowerCase();
    var named = false;
    if (names[color]) {
      color = names[color];
      named = true;
    } else if (color == "transparent") {
      return {
        r: 0,
        g: 0,
        b: 0,
        a: 0,
        format: "name"
      };
    }
    var match;
    if (match = matchers.rgb.exec(color)) {
      return {
        r: match[1],
        g: match[2],
        b: match[3]
      };
    }
    if (match = matchers.rgba.exec(color)) {
      return {
        r: match[1],
        g: match[2],
        b: match[3],
        a: match[4]
      };
    }
    if (match = matchers.hsl.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        l: match[3]
      };
    }
    if (match = matchers.hsla.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        l: match[3],
        a: match[4]
      };
    }
    if (match = matchers.hsv.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        v: match[3]
      };
    }
    if (match = matchers.hsva.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        v: match[3],
        a: match[4]
      };
    }
    if (match = matchers.hex8.exec(color)) {
      return {
        r: parseIntFromHex(match[1]),
        g: parseIntFromHex(match[2]),
        b: parseIntFromHex(match[3]),
        a: convertHexToDecimal(match[4]),
        format: named ? "name" : "hex8"
      };
    }
    if (match = matchers.hex6.exec(color)) {
      return {
        r: parseIntFromHex(match[1]),
        g: parseIntFromHex(match[2]),
        b: parseIntFromHex(match[3]),
        format: named ? "name" : "hex"
      };
    }
    if (match = matchers.hex4.exec(color)) {
      return {
        r: parseIntFromHex(match[1] + "" + match[1]),
        g: parseIntFromHex(match[2] + "" + match[2]),
        b: parseIntFromHex(match[3] + "" + match[3]),
        a: convertHexToDecimal(match[4] + "" + match[4]),
        format: named ? "name" : "hex8"
      };
    }
    if (match = matchers.hex3.exec(color)) {
      return {
        r: parseIntFromHex(match[1] + "" + match[1]),
        g: parseIntFromHex(match[2] + "" + match[2]),
        b: parseIntFromHex(match[3] + "" + match[3]),
        format: named ? "name" : "hex"
      };
    }
    return false;
  }
  function validateWCAG2Parms(parms) {
    var level, size;
    parms = parms || {
      level: "AA",
      size: "small"
    };
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();
    if (level !== "AA" && level !== "AAA") {
      level = "AA";
    }
    if (size !== "small" && size !== "large") {
      size = "small";
    }
    return {
      level,
      size
    };
  }

  // Copyright (c) 2014 Rafael Caricio. All rights reserved.
  // Use of this source code is governed by an MIT license that can be
  // found in the LICENSE file.

  var GradientParser = (GradientParser || {});

  GradientParser.stringify = (function() {

    var visitor = {

      'visit_linear-gradient': function(node) {
        return visitor.visit_gradient(node);
      },

      'visit_repeating-linear-gradient': function(node) {
        return visitor.visit_gradient(node);
      },

      'visit_radial-gradient': function(node) {
        return visitor.visit_gradient(node);
      },

      'visit_repeating-radial-gradient': function(node) {
        return visitor.visit_gradient(node);
      },

      'visit_conic-gradient': function(node) {
        return visitor.visit_gradient(node);
      },

      'visit_repeating-conic-gradient': function(node) {
        return visitor.visit_gradient(node);
      },

      'visit_gradient': function(node) {
        var orientation = visitor.visit(node.orientation);
        if (orientation) {
          orientation += ', ';
        }

        return node.type + '(' + orientation + visitor.visit(node.colorStops) + ')';
      },

      'visit_shape': function(node) {
        var result = node.value,
            at = visitor.visit(node.at),
            style = visitor.visit(node.style);

        if (style) {
          result += ' ' + style;
        }

        if (at) {
          result += ' at ' + at;
        }

        return result;
      },

      'visit_default-radial': function(node) {
        var result = '',
            at = visitor.visit(node.at);

        if (at) {
          if (node.hasAtKeyword) {
            result += 'at ' + at;
          } else {
            result += at;
          }
        }
        return result;
      },

      'visit_extent-keyword': function(node) {
        var result = node.value,
            at = visitor.visit(node.at);

        if (at) {
          result += ' at ' + at;
        }

        return result;
      },

      'visit_position-keyword': function(node) {
        return node.value;
      },

      'visit_position': function(node) {
        return visitor.visit(node.value.x) + ' ' + visitor.visit(node.value.y);
      },

      'visit_%': function(node) {
        return node.value + '%';
      },

      'visit_em': function(node) {
        return node.value + 'em';
      },

      'visit_px': function(node) {
        return node.value + 'px';
      },

      'visit_rem': function(node) {
        return node.value + 'rem';
      },

      'visit_vw': function(node) {
        return node.value + 'vw';
      },

      'visit_vh': function(node) {
        return node.value + 'vh';
      },

      'visit_vmin': function(node) {
        return node.value + 'vmin';
      },

      'visit_vmax': function(node) {
        return node.value + 'vmax';
      },

      'visit_ch': function(node) {
        return node.value + 'ch';
      },

      'visit_ex': function(node) {
        return node.value + 'ex';
      },

      'visit_calc': function(node) {
        return 'calc(' + node.value + ')';
      },

      'visit_literal': function(node) {
        return visitor.visit_color(node.value, node);
      },

      'visit_hex': function(node) {
        return visitor.visit_color('#' + node.value, node);
      },

      'visit_rgb': function(node) {
        return visitor.visit_color('rgb(' + node.value.join(', ') + ')', node);
      },

      'visit_rgba': function(node) {
        return visitor.visit_color('rgba(' + node.value.join(', ') + ')', node);
      },

      'visit_hsl': function(node) {
        return visitor.visit_color('hsl(' + node.value[0] + ', ' + node.value[1] + '%, ' + node.value[2] + '%)', node);
      },

      'visit_hsla': function(node) {
        return visitor.visit_color('hsla(' + node.value[0] + ', ' + node.value[1] + '%, ' + node.value[2] + '%, ' + node.value[3] + ')', node);
      },

      'visit_var': function(node) {
        return visitor.visit_color('var(' + node.value + ')', node);
      },

      'visit_color': function(resultColor, node) {
        var result = resultColor,
            length = visitor.visit(node.length);

        if (length) {
          result += ' ' + length;
        }
        var length2 = visitor.visit(node.length2);
        if (length2) {
          result += ' ' + length2;
        }
        return result;
      },

      'visit_angular': function(node) {
        return node.value + (node.unit || 'deg');
      },

      'visit_directional': function(node) {
        return 'to ' + node.value;
      },

      'visit_conic': function(node) {
        var result = '';
        if (node.angle) {
          result += 'from ' + visitor.visit(node.angle);
        }
        if (node.at) {
          if (result) {
            result += ' ';
          }
          result += 'at ' + visitor.visit(node.at);
        }
        return result;
      },

      'visit_array': function(elements) {
        var result = '',
            size = elements.length;

        elements.forEach(function(element, i) {
          result += visitor.visit(element);
          if (i < size - 1) {
            result += ', ';
          }
        });

        return result;
      },

      'visit_object': function(obj) {
        if (obj.width && obj.height) {
          return visitor.visit(obj.width) + ' ' + visitor.visit(obj.height);
        }
        return '';
      },

      'visit': function(element) {
        if (!element) {
          return '';
        }

        if (element instanceof Array) {
          return visitor.visit_array(element);
        } else if (typeof element === 'object' && !element.type) {
          return visitor.visit_object(element);
        } else if (element.type) {
          var nodeVisitor = visitor['visit_' + element.type];
          if (nodeVisitor) {
            return nodeVisitor(element);
          } else {
            throw Error('Missing visitor visit_' + element.type);
          }
        } else {
          throw Error('Invalid node.');
        }
      }

    };

    return function(root) {
      return visitor.visit(root);
    };
  })();

  // Copyright (c) 2014 Rafael Caricio. All rights reserved.
  // Use of this source code is governed by an MIT license that can be
  // found in the LICENSE file.

  var GradientParser = (GradientParser || {});

  GradientParser.parse = (function() {

    var tokens = {
      linearGradient: /^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,
      repeatingLinearGradient: /^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,
      radialGradient: /^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,
      repeatingRadialGradient: /^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,
      conicGradient: /^(\-(webkit|o|ms|moz)\-)?(conic\-gradient)/i,
      repeatingConicGradient: /^(\-(webkit|o|ms|moz)\-)?(repeating\-conic\-gradient)/i,
      sideOrCorner: /^to (left (top|bottom)|right (top|bottom)|top (left|right)|bottom (left|right)|left|right|top|bottom)/i,
      extentKeywords: /^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,
      positionKeywords: /^(left|center|right|top|bottom)/i,
      pixelValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,
      percentageValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,
      emValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,
      remValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))rem/,
      vwValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))vw/,
      vhValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))vh/,
      vminValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))vmin/,
      vmaxValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))vmax/,
      chValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))ch/,
      exValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))ex/,
      angleValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,
      radianValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))rad/,
      gradianValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))grad/,
      turnValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))turn/,
      startCall: /^\(/,
      endCall: /^\)/,
      comma: /^,/,
      slash: /^\//,
      hexColor: /^\#([0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{4}|[0-9a-fA-F]{3})(?![0-9a-fA-F])/,
      literalColor: /^([a-zA-Z]+)/,
      rgbColor: /^rgb/i,
      rgbaColor: /^rgba/i,
      varColor: /^var/i,
      calcValue: /^calc/i,
      variableName: /^(--[a-zA-Z0-9-,\s\#]+)/,
      number: /^(([0-9]*\.[0-9]+)|([0-9]+\.?))/,
      hslColor: /^hsl/i,
      hslaColor: /^hsla/i,
    };

    var input = '';

    function error(msg) {
      var err = new Error(input + ': ' + msg);
      err.source = input;
      throw err;
    }

    function getAST() {
      var ast = matchListDefinitions();

      if (input.length > 0) {
        error('Invalid input not EOF');
      }

      return ast;
    }

    function matchListDefinitions() {
      return matchListing(matchDefinition);
    }

    function matchDefinition() {
      return matchGradient(
              'linear-gradient',
              tokens.linearGradient,
              matchLinearOrientation) ||

            matchGradient(
              'repeating-linear-gradient',
              tokens.repeatingLinearGradient,
              matchLinearOrientation) ||

            matchGradient(
              'radial-gradient',
              tokens.radialGradient,
              matchListRadialOrientations) ||

            matchGradient(
              'repeating-radial-gradient',
              tokens.repeatingRadialGradient,
              matchListRadialOrientations) ||

            matchGradient(
              'conic-gradient',
              tokens.conicGradient,
              matchConicOrientation) ||

            matchGradient(
              'repeating-conic-gradient',
              tokens.repeatingConicGradient,
              matchConicOrientation);
    }

    function matchGradient(gradientType, pattern, orientationMatcher) {
      return matchCall(pattern, function(captures) {

        var orientation = orientationMatcher();
        if (orientation) {
          if (!scan(tokens.comma)) {
            error('Missing comma before color stops');
          }
        }

        return {
          type: gradientType,
          orientation: orientation,
          colorStops: matchListing(matchColorStop)
        };
      });
    }

    function matchCall(pattern, callback) {
      var captures = scan(pattern);

      if (captures) {
        if (!scan(tokens.startCall)) {
          error('Missing (');
        }

        var result = callback(captures);

        if (!scan(tokens.endCall)) {
          error('Missing )');
        }

        return result;
      }
    }

    function matchLinearOrientation() {
      // Check for standard CSS3 "to" direction
      var sideOrCorner = matchSideOrCorner();
      if (sideOrCorner) {
        return sideOrCorner;
      }
      
      // Check for legacy single keyword direction (e.g., "right", "top")
      var legacyDirection = match('position-keyword', tokens.positionKeywords, 1);
      if (legacyDirection) {
        // For legacy syntax, we convert to the directional type
        return {
          type: 'directional',
          value: legacyDirection.value
        };
      }
      
      // If neither, check for angle
      return matchAngle();
    }

    function matchConicOrientation() {
      var angle = matchFrom();
      var atPosition = matchAtPosition();

      if (angle || atPosition) {
        return {
          type: 'conic',
          angle: angle || undefined,
          at: atPosition || undefined
        };
      }
    }

    function matchFrom() {
      if (match('from', /^from/, 0)) {
        var angle = matchAngle();
        if (!angle) {
          error('Missing angle after "from" in conic-gradient');
        }
        return angle;
      }
    }

    function matchSideOrCorner() {
      return match('directional', tokens.sideOrCorner, 1);
    }

    function matchAngle() {
      return matchAngularWithUnit('deg', tokens.angleValue) ||
        matchAngularWithUnit('rad', tokens.radianValue) ||
        matchAngularWithUnit('grad', tokens.gradianValue) ||
        matchAngularWithUnit('turn', tokens.turnValue);
    }

    function matchAngularWithUnit(unit, pattern) {
      var captures = scan(pattern);
      if (captures) {
        return {
          type: 'angular',
          value: captures[1],
          unit: unit
        };
      }
    }

    function matchListRadialOrientations() {
      var radialOrientations,
          radialOrientation = matchRadialOrientation(),
          lookaheadCache;

      if (radialOrientation) {
        radialOrientations = [];
        radialOrientations.push(radialOrientation);

        lookaheadCache = input;
        if (scan(tokens.comma)) {
          radialOrientation = matchRadialOrientation();
          if (radialOrientation) {
            radialOrientations.push(radialOrientation);
          } else {
            input = lookaheadCache;
          }
        }
      }

      return radialOrientations;
    }

    function matchRadialOrientation() {
      var radialType = matchCircle() ||
        matchEllipse();

      if (radialType) {
        radialType.at = matchAtPosition();
      } else {
        var extent = matchExtentKeyword();
        if (extent) {
          radialType = extent;
          var positionAt = matchAtPosition();
          if (positionAt) {
            radialType.at = positionAt;
          }
        } else {
          // Check for "at" position first, which is a common browser output format
          var atPosition = matchAtPosition();
          if (atPosition) {
            radialType = {
              type: 'default-radial',
              at: atPosition,
              hasAtKeyword: true
            };
          } else {
            var defaultPosition = matchPositioning();
            if (defaultPosition) {
              radialType = {
                type: 'default-radial',
                at: defaultPosition
              };
            }
          }
        }
      }

      return radialType;
    }

    function matchCircle() {
      var circle = match('shape', /^(circle)/i, 0);

      if (circle) {
        circle.style = matchLength() || matchExtentKeyword();
      }

      return circle;
    }

    function matchEllipse() {
      var ellipse = match('shape', /^(ellipse)/i, 0);

      if (ellipse) {
        ellipse.style = matchPositioning() || matchDistance() || matchExtentKeyword();
      }

      return ellipse;
    }

    function matchExtentKeyword() {
      return match('extent-keyword', tokens.extentKeywords, 1);
    }

    function matchAtPosition() {
      if (match('position', /^at/, 0)) {
        var positioning = matchPositioning();

        if (!positioning) {
          error('Missing positioning value');
        }

        return positioning;
      }
    }

    function matchPositioning() {
      var location = matchCoordinates();

      if (location.x || location.y) {
        return {
          type: 'position',
          value: location
        };
      }
    }

    function matchCoordinates() {
      return {
        x: matchDistance(),
        y: matchDistance()
      };
    }

    function matchListing(matcher) {
      var captures = matcher(),
        result = [];

      if (captures) {
        result.push(captures);
        while (scan(tokens.comma)) {
          captures = matcher();
          if (captures) {
            result.push(captures);
          } else {
            error('One extra comma');
          }
        }
      }

      return result;
    }

    function matchColorStop() {
      var color = matchColor();

      if (!color) {
        error('Expected color definition');
      }

      color.length = matchDistance();
      if (color.length) {
        color.length2 = matchDistance();
      }
      return color;
    }

    function matchColor() {
      return matchHexColor() ||
        matchHSLAColor() ||
        matchHSLColor() ||
        matchRGBAColor() ||
        matchRGBColor() ||
        matchVarColor() ||
        matchLiteralColor();
    }

    function matchLiteralColor() {
      return match('literal', tokens.literalColor, 0);
    }

    function matchHexColor() {
      return match('hex', tokens.hexColor, 1);
    }

    function matchRGBColor() {
      return matchCall(tokens.rgbColor, function() {
        return matchRGBValues('rgb');
      });
    }

    function matchRGBAColor() {
      return matchCall(tokens.rgbaColor, function() {
        return matchRGBValues('rgba');
      });
    }

    function matchRGBValues(baseType) {
      var r = matchNumber();
      if (scan(tokens.comma)) {
        // Legacy comma-separated syntax: rgb(r, g, b) or rgba(r, g, b, a)
        var g = matchNumber();
        scan(tokens.comma);
        var b = matchNumber();
        var values = [r, g, b];
        if (scan(tokens.comma)) {
          values.push(matchNumber());
          return { type: 'rgba', value: values };
        }
        return { type: baseType, value: values };
      } else {
        // Modern space-separated syntax: rgb(r g b) or rgb(r g b / a)
        var g = matchNumber();
        var b = matchNumber();
        var values = [r, g, b];
        if (scan(tokens.slash)) {
          values.push(matchNumber());
          return { type: 'rgba', value: values };
        }
        return { type: baseType, value: values };
      }
    }

    function matchVarColor() {
      return matchCall(tokens.varColor, function () {
        return {
          type: 'var',
          value: matchVariableName()
        };
      });
    }

    function matchHSLColor() {
      return matchCall(tokens.hslColor, function() {
        return matchHSLValues('hsl');
      });
    }

    function matchHSLAColor() {
      return matchCall(tokens.hslaColor, function() {
        return matchHSLValues('hsla');
      });
    }

    function matchHSLValues(baseType) {
      // Check for percentage before trying to parse the hue
      var lookahead = scan(tokens.percentageValue);
      if (lookahead) {
        error('HSL hue value must be a number in degrees (0-360) or normalized (-360 to 360), not a percentage');
      }

      var hue = matchNumber();
      if (scan(tokens.comma)) {
        // Legacy comma-separated syntax: hsl(h, s%, l%) or hsla(h, s%, l%, a)
        var captures = scan(tokens.percentageValue);
        var sat = captures ? captures[1] : null;
        scan(tokens.comma);
        captures = scan(tokens.percentageValue);
        var light = captures ? captures[1] : null;
        if (!sat || !light) {
          error('Expected percentage value for saturation and lightness in HSL');
        }
        if (scan(tokens.comma)) {
          var alpha = matchNumber();
          return { type: 'hsla', value: [hue, sat, light, alpha] };
        }
        return { type: baseType, value: [hue, sat, light] };
      } else {
        // Modern space-separated syntax: hsl(h s% l%) or hsl(h s% l% / a)
        var captures = scan(tokens.percentageValue);
        var sat = captures ? captures[1] : null;
        captures = scan(tokens.percentageValue);
        var light = captures ? captures[1] : null;
        if (!sat || !light) {
          error('Expected percentage value for saturation and lightness in HSL');
        }
        if (scan(tokens.slash)) {
          var alpha = matchNumber();
          return { type: 'hsla', value: [hue, sat, light, alpha] };
        }
        return { type: baseType, value: [hue, sat, light] };
      }
    }

    function matchVariableName() {
      return scan(tokens.variableName)[1];
    }

    function matchNumber() {
      return scan(tokens.number)[1];
    }

    function matchDistance() {
      return match('%', tokens.percentageValue, 1) ||
        matchPositionKeyword() ||
        matchCalc() ||
        matchLength();
    }

    function matchPositionKeyword() {
      return match('position-keyword', tokens.positionKeywords, 1);
    }

    function matchCalc() {
      return matchCall(tokens.calcValue, function() {
        var openParenCount = 1; // Start with the opening parenthesis from calc(
        var i = 0;
        
        // Parse through the content looking for balanced parentheses
        while (openParenCount > 0 && i < input.length) {
          var char = input.charAt(i);
          if (char === '(') {
            openParenCount++;
          } else if (char === ')') {
            openParenCount--;
          }
          i++;
        }
        
        // If we exited because we ran out of input but still have open parentheses, error
        if (openParenCount > 0) {
          error('Missing closing parenthesis in calc() expression');
        }
        
        // Get the content inside the calc() without the last closing paren
        var calcContent = input.substring(0, i - 1);
        
        // Consume the calc expression content
        consume(i - 1); // -1 because we don't want to consume the closing parenthesis
        
        return {
          type: 'calc',
          value: calcContent
        };
      });
    }

    function matchLength() {
      return match('px', tokens.pixelValue, 1) ||
        match('em', tokens.emValue, 1) ||
        match('rem', tokens.remValue, 1) ||
        match('vw', tokens.vwValue, 1) ||
        match('vh', tokens.vhValue, 1) ||
        match('vmin', tokens.vminValue, 1) ||
        match('vmax', tokens.vmaxValue, 1) ||
        match('ch', tokens.chValue, 1) ||
        match('ex', tokens.exValue, 1);
    }

    function match(type, pattern, captureIndex) {
      var captures = scan(pattern);
      if (captures) {
        return {
          type: type,
          value: captures[captureIndex]
        };
      }
    }

    function scan(regexp) {
      var captures,
          blankCaptures;

      blankCaptures = /^[\n\r\t\s]+/.exec(input);
      if (blankCaptures) {
          consume(blankCaptures[0].length);
      }

      captures = regexp.exec(input);
      if (captures) {
          consume(captures[0].length);
      }

      return captures;
    }

    function consume(size) {
      input = input.substring(size);
    }

    return function(code) {
      input = code.toString().trim();
      // Remove trailing semicolon if present
      if (input.endsWith(';')) {
        input = input.slice(0, -1);
      }
      return getAST();
    };
  })();

  const parse = GradientParser.parse;
  const stringify = GradientParser.stringify;
  ({ parse: GradientParser.parse, stringify: GradientParser.stringify });

  var top = "top";
  var bottom = "bottom";
  var right = "right";
  var left = "left";
  var auto = "auto";
  var basePlacements = [top, bottom, right, left];
  var start = "start";
  var end = "end";
  var clippingParents = "clippingParents";
  var viewport = "viewport";
  var popper = "popper";
  var reference = "reference";
  var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []);
  var beforeRead = "beforeRead";
  var read = "read";
  var afterRead = "afterRead";
  var beforeMain = "beforeMain";
  var main = "main";
  var afterMain = "afterMain";
  var beforeWrite = "beforeWrite";
  var write = "write";
  var afterWrite = "afterWrite";
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

  function getNodeName(element) {
    return element ? (element.nodeName || "").toLowerCase() : null;
  }

  function getWindow(node) {
    if (node == null) {
      return window;
    }
    if (node.toString() !== "[object Window]") {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
  }

  function isElement(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }
  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }
  function isShadowRoot(node) {
    if (typeof ShadowRoot === "undefined") {
      return false;
    }
    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  }

  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
      var style = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name];
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(name2) {
        var value = attributes[name2];
        if (value === false) {
          element.removeAttribute(name2);
        } else {
          element.setAttribute(name2, value === true ? "" : value);
        }
      });
    });
  }
  function effect$2(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
    return function() {
      Object.keys(state.elements).forEach(function(name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
        var style = styleProperties.reduce(function(style2, property) {
          style2[property] = "";
          return style2;
        }, {});
        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  }
  var applyStyles$1 = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: applyStyles,
    effect: effect$2,
    requires: ["computeStyles"]
  };

  function getBasePlacement(placement) {
    return placement.split("-")[0];
  }

  var max = Math.max;
  var min = Math.min;
  var round = Math.round;

  function getUAString() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
      return uaData.brands.map(function(item) {
        return item.brand + "/" + item.version;
      }).join(" ");
    }
    return navigator.userAgent;
  }

  function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test(getUAString());
  }

  function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && isHTMLElement(element)) {
      scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
      scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
      width,
      height,
      top: y,
      right: x + width,
      bottom: y + height,
      left: x,
      x,
      y
    };
  }

  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element);
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width;
    }
    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height;
    }
    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width,
      height
    };
  }

  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode();
    if (parent.contains(child)) {
      return true;
    } else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;
      do {
        if (next && parent.isSameNode(next)) {
          return true;
        }
        next = next.parentNode || next.host;
      } while (next);
    }
    return false;
  }

  function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
  }

  function isTableElement(element) {
    return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
  }

  function getDocumentElement(element) {
    return ((isElement(element) ? element.ownerDocument : (
      // $FlowFixMe[prop-missing]
      element.document
    )) || window.document).documentElement;
  }

  function getParentNode(element) {
    if (getNodeName(element) === "html") {
      return element;
    }
    return (
      // this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      element.parentNode || // DOM Element detected
      (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element)
    );
  }

  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle(element).position === "fixed") {
      return null;
    }
    return element.offsetParent;
  }
  function getContainingBlock(element) {
    var isFirefox = /firefox/i.test(getUAString());
    var isIE = /Trident/i.test(getUAString());
    if (isIE && isHTMLElement(element)) {
      var elementCss = getComputedStyle(element);
      if (elementCss.position === "fixed") {
        return null;
      }
    }
    var currentNode = getParentNode(element);
    if (isShadowRoot(currentNode)) {
      currentNode = currentNode.host;
    }
    while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle(currentNode);
      if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }
    return null;
  }
  function getOffsetParent(element) {
    var window = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);
    while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
      offsetParent = getTrueOffsetParent(offsetParent);
    }
    if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
      return window;
    }
    return offsetParent || getContainingBlock(element) || window;
  }

  function getMainAxisFromPlacement(placement) {
    return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
  }

  function within(min$1, value, max$1) {
    return max(min$1, min(value, max$1));
  }
  function withinMaxClamp(min, value, max) {
    var v = within(min, value, max);
    return v > max ? max : v;
  }

  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }

  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
  }

  function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }

  var toPaddingObject = function toPaddingObject2(padding, state) {
    padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
      placement: state.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  };
  function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len = isVertical ? "height" : "width";
    if (!arrowElement || !popperOffsets) {
      return;
    }
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === "y" ? top : left;
    var maxProp = axis === "y" ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2;
    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = within(min, center, max);
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
  }
  function effect$1(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
    if (arrowElement == null) {
      return;
    }
    if (typeof arrowElement === "string") {
      arrowElement = state.elements.popper.querySelector(arrowElement);
      if (!arrowElement) {
        return;
      }
    }
    if (!contains(state.elements.popper, arrowElement)) {
      return;
    }
    state.elements.arrow = arrowElement;
  }
  var arrow$1 = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: arrow,
    effect: effect$1,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };

  function getVariation(placement) {
    return placement.split("-")[1];
  }

  var unsetSides = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function roundOffsetsByDPR(_ref, win) {
    var x = _ref.x, y = _ref.y;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round(x * dpr) / dpr || 0,
      y: round(y * dpr) / dpr || 0
    };
  }
  function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
      x,
      y
    }) : {
      x,
      y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty("x");
    var hasY = offsets.hasOwnProperty("y");
    var sideX = left;
    var sideY = top;
    var win = window;
    if (adaptive) {
      var offsetParent = getOffsetParent(popper);
      var heightProp = "clientHeight";
      var widthProp = "clientWidth";
      if (offsetParent === getWindow(popper)) {
        offsetParent = getDocumentElement(popper);
        if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
          heightProp = "scrollHeight";
          widthProp = "scrollWidth";
        }
      }
      offsetParent = offsetParent;
      if (placement === top || (placement === left || placement === right) && variation === end) {
        sideY = bottom;
        var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
          // $FlowFixMe[prop-missing]
          offsetParent[heightProp]
        );
        y -= offsetY - popperRect.height;
        y *= gpuAcceleration ? 1 : -1;
      }
      if (placement === left || (placement === top || placement === bottom) && variation === end) {
        sideX = right;
        var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
          // $FlowFixMe[prop-missing]
          offsetParent[widthProp]
        );
        x -= offsetX - popperRect.width;
        x *= gpuAcceleration ? 1 : -1;
      }
    }
    var commonStyles = Object.assign({
      position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
      x,
      y
    }, getWindow(popper)) : {
      x,
      y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
      var _Object$assign;
      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
  }
  function computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
      placement: getBasePlacement(state.placement),
      variation: getVariation(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration,
      isFixed: state.options.strategy === "fixed"
    };
    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive,
        roundOffsets
      })));
    }
    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: "absolute",
        adaptive: false,
        roundOffsets
      })));
    }
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-placement": state.placement
    });
  }
  var computeStyles$1 = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: computeStyles,
    data: {}
  };

  var passive = {
    passive: true
  };
  function effect(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window.addEventListener("resize", instance.update, passive);
    }
    return function() {
      if (scroll) {
        scrollParents.forEach(function(scrollParent) {
          scrollParent.removeEventListener("scroll", instance.update, passive);
        });
      }
      if (resize) {
        window.removeEventListener("resize", instance.update, passive);
      }
    };
  }
  var eventListeners = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function fn() {
    },
    effect,
    data: {}
  };

  var hash$1 = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
      return hash$1[matched];
    });
  }

  var hash = {
    start: "end",
    end: "start"
  };
  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
      return hash[matched];
    });
  }

  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft,
      scrollTop
    };
  }

  function getWindowScrollBarX(element) {
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }

  function getViewportRect(element, strategy) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      var layoutViewport = isLayoutViewport();
      if (layoutViewport || !layoutViewport && strategy === "fixed") {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
    return {
      width,
      height,
      x: x + getWindowScrollBarX(element),
      y
    };
  }

  function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;
    if (getComputedStyle(body || html).direction === "rtl") {
      x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }
    return {
      width,
      height,
      x,
      y
    };
  }

  function isScrollParent(element) {
    var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }

  function getScrollParent(node) {
    if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
      return node.ownerDocument.body;
    }
    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }
    return getScrollParent(getParentNode(node));
  }

  function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) {
      list = [];
    }
    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : (
      // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
      updatedList.concat(listScrollParents(getParentNode(target)))
    );
  }

  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }

  function getInnerBoundingClientRect(element, strategy) {
    var rect = getBoundingClientRect(element, false, strategy === "fixed");
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }
  function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  }
  function getClippingParents(element) {
    var clippingParents = listScrollParents(getParentNode(element));
    var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
    if (!isElement(clipperElement)) {
      return [];
    }
    return clippingParents.filter(function(clippingParent) {
      return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
    });
  }
  function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function(accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }

  function computeOffsets(_ref) {
    var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;
    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference.y - element.height
        };
        break;
      case bottom:
        offsets = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;
      case right:
        offsets = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;
      case left:
        offsets = {
          x: reference.x - element.width,
          y: commonY
        };
        break;
      default:
        offsets = {
          x: reference.x,
          y: reference.y
        };
    }
    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
    if (mainAxis != null) {
      var len = mainAxis === "y" ? "height" : "width";
      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
          break;
        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
          break;
      }
    }
    return offsets;
  }

  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = getBoundingClientRect(state.elements.reference);
    var popperOffsets = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: "absolute",
      placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset;
    if (elementContext === popper && offsetData) {
      var offset = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function(key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
        overflowOffsets[key] += offset[axis] * multiply;
      });
    }
    return overflowOffsets;
  }

  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
      return getVariation(placement2) === variation;
    }) : basePlacements;
    var allowedPlacements = placements$1.filter(function(placement2) {
      return allowedAutoPlacements.indexOf(placement2) >= 0;
    });
    if (allowedPlacements.length === 0) {
      allowedPlacements = placements$1;
    }
    var overflows = allowedPlacements.reduce(function(acc, placement2) {
      acc[placement2] = detectOverflow(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding
      })[getBasePlacement(placement2)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function(a, b) {
      return overflows[a] - overflows[b];
    });
  }

  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }
    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }
  function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) {
      return;
    }
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
      return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding,
        flipVariations,
        allowedAutoPlacements
      }) : placement2);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = /* @__PURE__ */ new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];
    for (var i = 0; i < placements.length; i++) {
      var placement = placements[i];
      var _basePlacement = getBasePlacement(placement);
      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? "width" : "height";
      var overflow = detectOverflow(state, {
        placement,
        boundary,
        rootBoundary,
        altBoundary,
        padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }
      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];
      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }
      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }
      if (checks.every(function(check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }
      checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
      var numberOfChecks = flipVariations ? 3 : 1;
      var _loop = function _loop2(_i2) {
        var fittingPlacement = placements.find(function(placement2) {
          var checks2 = checksMap.get(placement2);
          if (checks2) {
            return checks2.slice(0, _i2).every(function(check) {
              return check;
            });
          }
        });
        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };
      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);
        if (_ret === "break") break;
      }
    }
    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  }
  var flip$1 = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: flip,
    requiresIfExists: ["offset"],
    data: {
      _skip: false
    }
  };

  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }
    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }
  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function(side) {
      return overflow[side] >= 0;
    });
  }
  function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
      elementContext: "reference"
    });
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
      referenceClippingOffsets,
      popperEscapeOffsets,
      isReferenceHidden,
      hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-reference-hidden": isReferenceHidden,
      "data-popper-escaped": hasPopperEscaped
    });
  }
  var hide$1 = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: hide
  };

  function distanceAndSkiddingToXY(placement, rects, offset2) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
      placement
    })) : offset2, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }
  function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements.reduce(function(acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x;
      state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
  }
  var offset$1 = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: ["popperOffsets"],
    fn: offset
  };

  function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: "absolute",
      placement: state.placement
    });
  }
  var popperOffsets$1 = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: popperOffsets,
    data: {}
  };

  function getAltAxis(axis) {
    return axis === "x" ? "y" : "x";
  }

  function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary,
      rootBoundary,
      padding,
      altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
      placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
      mainAxis: tetherOffsetValue,
      altAxis: tetherOffsetValue
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
      x: 0,
      y: 0
    };
    if (!popperOffsets) {
      return;
    }
    if (checkMainAxis) {
      var _offsetModifierState$;
      var mainSide = mainAxis === "y" ? top : left;
      var altSide = mainAxis === "y" ? bottom : right;
      var len = mainAxis === "y" ? "height" : "width";
      var offset = popperOffsets[mainAxis];
      var min$1 = offset + overflow[mainSide];
      var max$1 = offset - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide];
      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
      var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = offset + maxOffset - offsetModifierValue;
      var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }
    if (checkAltAxis) {
      var _offsetModifierState$2;
      var _mainSide = mainAxis === "x" ? top : left;
      var _altSide = mainAxis === "x" ? bottom : right;
      var _offset = popperOffsets[altAxis];
      var _len = altAxis === "y" ? "height" : "width";
      var _min = _offset + overflow[_mainSide];
      var _max = _offset - overflow[_altSide];
      var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
      var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
      var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
      var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
      var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
  }
  var preventOverflow$1 = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: preventOverflow,
    requiresIfExists: ["offset"]
  };

  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }

  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }

  function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = round(rect.width) / element.offsetWidth || 1;
    var scaleY = round(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
  }
  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent, true);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }

  function order(modifiers) {
    var map = /* @__PURE__ */ new Map();
    var visited = /* @__PURE__ */ new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
      map.set(modifier.name, modifier);
    });
    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function(dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);
          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
      if (!visited.has(modifier.name)) {
        sort(modifier);
      }
    });
    return result;
  }
  function orderModifiers(modifiers) {
    var orderedModifiers = order(modifiers);
    return modifierPhases.reduce(function(acc, phase) {
      return acc.concat(orderedModifiers.filter(function(modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }

  function debounce(fn) {
    var pending;
    return function() {
      if (!pending) {
        pending = new Promise(function(resolve) {
          Promise.resolve().then(function() {
            pending = void 0;
            resolve(fn());
          });
        });
      }
      return pending;
    };
  }

  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged2, current) {
      var existing = merged2[current.name];
      merged2[current.name] = existing ? Object.assign({}, existing, current, {
        options: Object.assign({}, existing.options, current.options),
        data: Object.assign({}, existing.data, current.data)
      }) : current;
      return merged2;
    }, {});
    return Object.keys(merged).map(function(key) {
      return merged[key];
    });
  }

  var DEFAULT_OPTIONS = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return !args.some(function(element) {
      return !(element && typeof element.getBoundingClientRect === "function");
    });
  }
  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper2(reference, popper, options) {
      if (options === void 0) {
        options = defaultOptions;
      }
      var state = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
        modifiersData: {},
        elements: {
          reference,
          popper
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state,
        setOptions: function setOptions(setOptionsAction) {
          var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
          cleanupModifierEffects();
          state.options = Object.assign({}, defaultOptions, state.options, options2);
          state.scrollParents = {
            reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
            popper: listScrollParents(popper)
          };
          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers)));
          state.orderedModifiers = orderedModifiers.filter(function(m) {
            return m.enabled;
          });
          runModifierEffects();
          return instance.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }
          var _state$elements = state.elements, reference2 = _state$elements.reference, popper2 = _state$elements.popper;
          if (!areValidElements(reference2, popper2)) {
            return;
          }
          state.rects = {
            reference: getCompositeRect(reference2, getOffsetParent(popper2), state.options.strategy === "fixed"),
            popper: getLayoutRect(popper2)
          };
          state.reset = false;
          state.placement = state.options.placement;
          state.orderedModifiers.forEach(function(modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });
          for (var index = 0; index < state.orderedModifiers.length; index++) {
            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }
            var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
            if (typeof fn === "function") {
              state = fn({
                state,
                options: _options,
                name,
                instance
              }) || state;
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce(function() {
          return new Promise(function(resolve) {
            instance.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };
      if (!areValidElements(reference, popper)) {
        return instance;
      }
      instance.setOptions(options).then(function(state2) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state2);
        }
      });
      function runModifierEffects() {
        state.orderedModifiers.forEach(function(_ref) {
          var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect = _ref.effect;
          if (typeof effect === "function") {
            var cleanupFn = effect({
              state,
              name,
              instance,
              options: options2
            });
            var noopFn = function noopFn2() {
            };
            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }
      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function(fn) {
          return fn();
        });
        effectCleanupFns = [];
      }
      return instance;
    };
  }

  var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
  var createPopper = /* @__PURE__ */ popperGenerator({
    defaultModifiers
  });

  /*!
   * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   */

  function isObject$1(o) {
    return Object.prototype.toString.call(o) === '[object Object]';
  }

  function isPlainObject$1(o) {
    var ctor,prot;

    if (isObject$1(o) === false) return false;

    // If has modified constructor
    ctor = o.constructor;
    if (ctor === undefined) return true;

    // If has modified prototype
    prot = ctor.prototype;
    if (isObject$1(prot) === false) return false;

    // If constructor does not have an Object-specific method
    if (prot.hasOwnProperty('isPrototypeOf') === false) {
      return false;
    }

    // Most likely a plain Object
    return true;
  }

  function t$1() {
    return t$1 = Object.assign ? Object.assign.bind() : function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var r2 = arguments[t2];
        for (var n2 in r2) Object.prototype.hasOwnProperty.call(r2, n2) && (e2[n2] = r2[n2]);
      }
      return e2;
    }, t$1.apply(this, arguments);
  }
  function r$1(e2, t2) {
    if (null == e2) return {};
    var r2, n2, i2 = {}, o2 = Object.keys(e2);
    for (n2 = 0; n2 < o2.length; n2++) t2.indexOf(r2 = o2[n2]) >= 0 || (i2[r2] = e2[r2]);
    return i2;
  }
  const n$1 = { silent: false, logLevel: "warn" };
  const i$1 = ["validator"];
  const o$1 = Object.prototype;
  const a$1 = o$1.toString;
  const s$1 = o$1.hasOwnProperty;
  const u$1 = /^\s*function (\w+)/;
  function l$1(e2) {
    var t2;
    const r2 = null !== (t2 = null == e2 ? void 0 : e2.type) && void 0 !== t2 ? t2 : e2;
    if (r2) {
      const e3 = r2.toString().match(u$1);
      return e3 ? e3[1] : "";
    }
    return "";
  }
  const c$1 = isPlainObject$1;
  const f$1 = (e2) => e2;
  let d$1 = f$1;
  const p$1 = (e2, t2) => s$1.call(e2, t2);
  const y$1 = Number.isInteger || function(e2) {
    return "number" == typeof e2 && isFinite(e2) && Math.floor(e2) === e2;
  };
  const v$1 = Array.isArray || function(e2) {
    return "[object Array]" === a$1.call(e2);
  };
  const h$1 = (e2) => "[object Function]" === a$1.call(e2);
  const b$1 = (e2) => c$1(e2) && p$1(e2, "_vueTypes_name");
  const g$1 = (e2) => c$1(e2) && (p$1(e2, "type") || ["_vueTypes_name", "validator", "default", "required"].some((t2) => p$1(e2, t2)));
  function O$1(e2, t2) {
    return Object.defineProperty(e2.bind(t2), "__original", { value: e2 });
  }
  function m$1(e2, t2, r2 = false) {
    let n2, i2 = true, o2 = "";
    n2 = c$1(e2) ? e2 : { type: e2 };
    const a2 = b$1(n2) ? n2._vueTypes_name + " - " : "";
    if (g$1(n2) && null !== n2.type) {
      if (void 0 === n2.type || true === n2.type) return i2;
      if (!n2.required && void 0 === t2) return i2;
      v$1(n2.type) ? (i2 = n2.type.some((e3) => true === m$1(e3, t2, true)), o2 = n2.type.map((e3) => l$1(e3)).join(" or ")) : (o2 = l$1(n2), i2 = "Array" === o2 ? v$1(t2) : "Object" === o2 ? c$1(t2) : "String" === o2 || "Number" === o2 || "Boolean" === o2 || "Function" === o2 ? function(e3) {
        if (null == e3) return "";
        const t3 = e3.constructor.toString().match(u$1);
        return t3 ? t3[1] : "";
      }(t2) === o2 : t2 instanceof n2.type);
    }
    if (!i2) {
      const e3 = `${a2}value "${t2}" should be of type "${o2}"`;
      return false === r2 ? (d$1(e3), false) : e3;
    }
    if (p$1(n2, "validator") && h$1(n2.validator)) {
      const e3 = d$1, o3 = [];
      if (d$1 = (e4) => {
        o3.push(e4);
      }, i2 = n2.validator(t2), d$1 = e3, !i2) {
        const e4 = (o3.length > 1 ? "* " : "") + o3.join("\n* ");
        return o3.length = 0, false === r2 ? (d$1(e4), i2) : e4;
      }
    }
    return i2;
  }
  function j$1(e2, t2) {
    const r2 = Object.defineProperties(t2, { _vueTypes_name: { value: e2, writable: true }, isRequired: { get() {
      return this.required = true, this;
    } }, def: { value(e3) {
      return void 0 === e3 ? (p$1(this, "default") && delete this.default, this) : h$1(e3) || true === m$1(this, e3, true) ? (this.default = v$1(e3) ? () => [...e3] : c$1(e3) ? () => Object.assign({}, e3) : e3, this) : (d$1(`${this._vueTypes_name} - invalid default value: "${e3}"`), this);
    } } }), { validator: n2 } = r2;
    return h$1(n2) && (r2.validator = O$1(n2, r2)), r2;
  }
  function _$1(e2, t2) {
    const r2 = j$1(e2, t2);
    return Object.defineProperty(r2, "validate", { value(e3) {
      return h$1(this.validator) && d$1(`${this._vueTypes_name} - calling .validate() will overwrite the current custom validator function. Validator info:
${JSON.stringify(this)}`), this.validator = O$1(e3, this), this;
    } });
  }
  function T$2(e2, t2, n2) {
    const o2 = function(e3) {
      const t3 = {};
      return Object.getOwnPropertyNames(e3).forEach((r2) => {
        t3[r2] = Object.getOwnPropertyDescriptor(e3, r2);
      }), Object.defineProperties({}, t3);
    }(t2);
    if (o2._vueTypes_name = e2, !c$1(n2)) return o2;
    const { validator: a2 } = n2, s2 = r$1(n2, i$1);
    if (h$1(a2)) {
      let { validator: e3 } = o2;
      e3 && (e3 = null !== (l2 = (u2 = e3).__original) && void 0 !== l2 ? l2 : u2), o2.validator = O$1(e3 ? function(t3) {
        return e3.call(this, t3) && a2.call(this, t3);
      } : a2, o2);
    }
    var u2, l2;
    return Object.assign(o2, s2);
  }
  function $$2(e2) {
    return e2.replace(/^(?!\s*$)/gm, "  ");
  }
  const w$1 = () => _$1("any", {});
  const P$3 = () => _$1("function", { type: Function });
  const x$1 = () => _$1("boolean", { type: Boolean });
  const E$2 = () => _$1("string", { type: String });
  const N$2 = () => _$1("number", { type: Number });
  const q$2 = () => _$1("array", { type: Array });
  const A$3 = () => _$1("object", { type: Object });
  const V$2 = () => j$1("integer", { type: Number, validator: (e2) => y$1(e2) });
  const S$1 = () => j$1("symbol", { validator: (e2) => "symbol" == typeof e2 });
  function D$2(e2, t2 = "custom validation failed") {
    if ("function" != typeof e2) throw new TypeError("[VueTypes error]: You must provide a function as argument");
    return j$1(e2.name || "<<anonymous function>>", { type: null, validator(r2) {
      const n2 = e2(r2);
      return n2 || d$1(`${this._vueTypes_name} - ${t2}`), n2;
    } });
  }
  function L$2(e2) {
    if (!v$1(e2)) throw new TypeError("[VueTypes error]: You must provide an array as argument.");
    const t2 = `oneOf - value should be one of "${e2.join('", "')}".`, r2 = e2.reduce((e3, t3) => {
      if (null != t3) {
        const r3 = t3.constructor;
        -1 === e3.indexOf(r3) && e3.push(r3);
      }
      return e3;
    }, []);
    return j$1("oneOf", { type: r2.length > 0 ? r2 : void 0, validator(r3) {
      const n2 = -1 !== e2.indexOf(r3);
      return n2 || d$1(t2), n2;
    } });
  }
  function F$2(e2) {
    if (!v$1(e2)) throw new TypeError("[VueTypes error]: You must provide an array as argument");
    let t2 = false, r2 = [];
    for (let n3 = 0; n3 < e2.length; n3 += 1) {
      const i2 = e2[n3];
      if (g$1(i2)) {
        if (b$1(i2) && "oneOf" === i2._vueTypes_name && i2.type) {
          r2 = r2.concat(i2.type);
          continue;
        }
        if (h$1(i2.validator) && (t2 = true), true === i2.type || !i2.type) {
          d$1('oneOfType - invalid usage of "true" or "null" as types.');
          continue;
        }
        r2 = r2.concat(i2.type);
      } else r2.push(i2);
    }
    r2 = r2.filter((e3, t3) => r2.indexOf(e3) === t3);
    const n2 = r2.length > 0 ? r2 : null;
    return j$1("oneOfType", t2 ? { type: n2, validator(t3) {
      const r3 = [], n3 = e2.some((e3) => {
        const n4 = m$1(b$1(e3) && "oneOf" === e3._vueTypes_name ? e3.type || null : e3, t3, true);
        return "string" == typeof n4 && r3.push(n4), true === n4;
      });
      return n3 || d$1(`oneOfType - provided value does not match any of the ${r3.length} passed-in validators:
${$$2(r3.join("\n"))}`), n3;
    } } : { type: n2 });
  }
  function Y$2(e2) {
    return j$1("arrayOf", { type: Array, validator(t2) {
      let r2 = "";
      const n2 = t2.every((t3) => (r2 = m$1(e2, t3, true), true === r2));
      return n2 || d$1(`arrayOf - value validation error:
${$$2(r2)}`), n2;
    } });
  }
  function B$2(e2) {
    return j$1("instanceOf", { type: e2 });
  }
  function I$1(e2) {
    return j$1("objectOf", { type: Object, validator(t2) {
      let r2 = "";
      const n2 = Object.keys(t2).every((n3) => (r2 = m$1(e2, t2[n3], true), true === r2));
      return n2 || d$1(`objectOf - value validation error:
${$$2(r2)}`), n2;
    } });
  }
  function J$1(e2) {
    const t2 = Object.keys(e2), r2 = t2.filter((t3) => {
      var r3;
      return !(null === (r3 = e2[t3]) || void 0 === r3 || !r3.required);
    }), n2 = j$1("shape", { type: Object, validator(n3) {
      if (!c$1(n3)) return false;
      const i2 = Object.keys(n3);
      if (r2.length > 0 && r2.some((e3) => -1 === i2.indexOf(e3))) {
        const e3 = r2.filter((e4) => -1 === i2.indexOf(e4));
        return d$1(1 === e3.length ? `shape - required property "${e3[0]}" is not defined.` : `shape - required properties "${e3.join('", "')}" are not defined.`), false;
      }
      return i2.every((r3) => {
        if (-1 === t2.indexOf(r3)) return true === this._vueTypes_isLoose || (d$1(`shape - shape definition does not include a "${r3}" property. Allowed keys: "${t2.join('", "')}".`), false);
        const i3 = m$1(e2[r3], n3[r3], true);
        return "string" == typeof i3 && d$1(`shape - "${r3}" property validation error:
 ${$$2(i3)}`), true === i3;
      });
    } });
    return Object.defineProperty(n2, "_vueTypes_isLoose", { writable: true, value: false }), Object.defineProperty(n2, "loose", { get() {
      return this._vueTypes_isLoose = true, this;
    } }), n2;
  }
  const M$2 = ["name", "validate", "getter"];
  const R$2 = /* @__PURE__ */ (() => {
    var e2;
    return (e2 = class {
      static get any() {
        return w$1();
      }
      static get func() {
        return P$3().def(this.defaults.func);
      }
      static get bool() {
        return x$1().def(this.defaults.bool);
      }
      static get string() {
        return E$2().def(this.defaults.string);
      }
      static get number() {
        return N$2().def(this.defaults.number);
      }
      static get array() {
        return q$2().def(this.defaults.array);
      }
      static get object() {
        return A$3().def(this.defaults.object);
      }
      static get integer() {
        return V$2().def(this.defaults.integer);
      }
      static get symbol() {
        return S$1();
      }
      static get nullable() {
        return { type: null };
      }
      static extend(e3) {
        if (v$1(e3)) return e3.forEach((e4) => this.extend(e4)), this;
        const { name: t2, validate: n2 = false, getter: i2 = false } = e3, o2 = r$1(e3, M$2);
        if (p$1(this, t2)) throw new TypeError(`[VueTypes error]: Type "${t2}" already defined`);
        const { type: a2 } = o2;
        if (b$1(a2)) return delete o2.type, Object.defineProperty(this, t2, i2 ? { get: () => T$2(t2, a2, o2) } : { value(...e4) {
          const r2 = T$2(t2, a2, o2);
          return r2.validator && (r2.validator = r2.validator.bind(r2, ...e4)), r2;
        } });
        let s2;
        return s2 = i2 ? { get() {
          const e4 = Object.assign({}, o2);
          return n2 ? _$1(t2, e4) : j$1(t2, e4);
        }, enumerable: true } : { value(...e4) {
          const r2 = Object.assign({}, o2);
          let i3;
          return i3 = n2 ? _$1(t2, r2) : j$1(t2, r2), r2.validator && (i3.validator = r2.validator.bind(i3, ...e4)), i3;
        }, enumerable: true }, Object.defineProperty(this, t2, s2);
      }
    }).defaults = {}, e2.sensibleDefaults = void 0, e2.config = n$1, e2.custom = D$2, e2.oneOf = L$2, e2.instanceOf = B$2, e2.oneOfType = F$2, e2.arrayOf = Y$2, e2.objectOf = I$1, e2.shape = J$1, e2.utils = { validate: (e3, t2) => true === m$1(t2, e3, true), toType: (e3, t2, r2 = false) => r2 ? _$1(e3, t2) : j$1(e3, t2) }, e2;
  })();
  function z$2(e2 = { func: () => {
  }, bool: true, string: "", number: 0, array: () => [], object: () => ({}), integer: 0 }) {
    var r2;
    return (r2 = class extends R$2 {
      static get sensibleDefaults() {
        return t$1({}, this.defaults);
      }
      static set sensibleDefaults(r3) {
        this.defaults = false !== r3 ? t$1({}, true !== r3 ? r3 : e2) : {};
      }
    }).defaults = t$1({}, e2), r2;
  }
  let C$1 = class C extends z$2() {
  };

  var global$1 = (typeof global !== "undefined" ? global :
    typeof self !== "undefined" ? self :
    typeof window !== "undefined" ? window : {});

  var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global$1 ? global$1 : "undefined" != typeof self ? self : {};
  function e(t2) {
    var e2 = { exports: {} };
    return t2(e2, e2.exports), e2.exports;
  }
  var n = function(t2) {
    return t2 && t2.Math == Math && t2;
  };
  var r = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")();
  var o = function(t2) {
    try {
      return !!t2();
    } catch (t3) {
      return true;
    }
  };
  var i = !o(function() {
    return 7 != Object.defineProperty({}, 1, { get: function() {
      return 7;
    } })[1];
  });
  var u = {}.propertyIsEnumerable;
  var a = Object.getOwnPropertyDescriptor;
  var c = { f: a && !u.call({ 1: 2 }, 1) ? function(t2) {
    var e2 = a(this, t2);
    return !!e2 && e2.enumerable;
  } : u };
  var l = function(t2, e2) {
    return { enumerable: !(1 & t2), configurable: !(2 & t2), writable: !(4 & t2), value: e2 };
  };
  var f = {}.toString;
  var s = function(t2) {
    return f.call(t2).slice(8, -1);
  };
  var d = "".split;
  var v = o(function() {
    return !Object("z").propertyIsEnumerable(0);
  }) ? function(t2) {
    return "String" == s(t2) ? d.call(t2, "") : Object(t2);
  } : Object;
  var p = function(t2) {
    if (null == t2) throw TypeError("Can't call method on " + t2);
    return t2;
  };
  var g = function(t2) {
    return v(p(t2));
  };
  var h = function(t2) {
    return "object" == typeof t2 ? null !== t2 : "function" == typeof t2;
  };
  var y = function(t2, e2) {
    if (!h(t2)) return t2;
    var n2, r2;
    if (e2 && "function" == typeof (n2 = t2.toString) && !h(r2 = n2.call(t2))) return r2;
    if ("function" == typeof (n2 = t2.valueOf) && !h(r2 = n2.call(t2))) return r2;
    if (!e2 && "function" == typeof (n2 = t2.toString) && !h(r2 = n2.call(t2))) return r2;
    throw TypeError("Can't convert object to primitive value");
  };
  var m = {}.hasOwnProperty;
  var S = function(t2, e2) {
    return m.call(t2, e2);
  };
  var x = r.document;
  var b = h(x) && h(x.createElement);
  var E$1 = function(t2) {
    return b ? x.createElement(t2) : {};
  };
  var w = !i && !o(function() {
    return 7 != Object.defineProperty(E$1("div"), "a", { get: function() {
      return 7;
    } }).a;
  });
  var O = Object.getOwnPropertyDescriptor;
  var T$1 = { f: i ? O : function(t2, e2) {
    if (t2 = g(t2), e2 = y(e2, true), w) try {
      return O(t2, e2);
    } catch (t3) {
    }
    if (S(t2, e2)) return l(!c.f.call(t2, e2), t2[e2]);
  } };
  var A$2 = function(t2) {
    if (!h(t2)) throw TypeError(String(t2) + " is not an object");
    return t2;
  };
  var k$1 = Object.defineProperty;
  var R$1 = { f: i ? k$1 : function(t2, e2, n2) {
    if (A$2(t2), e2 = y(e2, true), A$2(n2), w) try {
      return k$1(t2, e2, n2);
    } catch (t3) {
    }
    if ("get" in n2 || "set" in n2) throw TypeError("Accessors not supported");
    return "value" in n2 && (t2[e2] = n2.value), t2;
  } };
  var I = i ? function(t2, e2, n2) {
    return R$1.f(t2, e2, l(1, n2));
  } : function(t2, e2, n2) {
    return t2[e2] = n2, t2;
  };
  var j = function(t2, e2) {
    try {
      I(r, t2, e2);
    } catch (n2) {
      r[t2] = e2;
    }
    return e2;
  };
  var C = r["__core-js_shared__"] || j("__core-js_shared__", {});
  var L$1 = Function.toString;
  "function" != typeof C.inspectSource && (C.inspectSource = function(t2) {
    return L$1.call(t2);
  });
  var P$2;
  var M$1;
  var _;
  var D$1 = C.inspectSource;
  var U$1 = r.WeakMap;
  var N$1 = "function" == typeof U$1 && /native code/.test(D$1(U$1));
  var F$1 = e(function(t2) {
    (t2.exports = function(t3, e2) {
      return C[t3] || (C[t3] = void 0 !== e2 ? e2 : {});
    })("versions", []).push({ version: "3.8.3", mode: "global", copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)" });
  });
  var W$1 = 0;
  var z$1 = Math.random();
  var $$1 = function(t2) {
    return "Symbol(" + String(void 0 === t2 ? "" : t2) + ")_" + (++W$1 + z$1).toString(36);
  };
  var B$1 = F$1("keys");
  var Y$1 = function(t2) {
    return B$1[t2] || (B$1[t2] = $$1(t2));
  };
  var G = {};
  var H = r.WeakMap;
  if (N$1) {
    var X = C.state || (C.state = new H()), V$1 = X.get, K = X.has, q$1 = X.set;
    P$2 = function(t2, e2) {
      return e2.facade = t2, q$1.call(X, t2, e2), e2;
    }, M$1 = function(t2) {
      return V$1.call(X, t2) || {};
    }, _ = function(t2) {
      return K.call(X, t2);
    };
  } else {
    var Q = Y$1("state");
    G[Q] = true, P$2 = function(t2, e2) {
      return e2.facade = t2, I(t2, Q, e2), e2;
    }, M$1 = function(t2) {
      return S(t2, Q) ? t2[Q] : {};
    }, _ = function(t2) {
      return S(t2, Q);
    };
  }
  var J = { set: P$2, get: M$1, has: _, enforce: function(t2) {
    return _(t2) ? M$1(t2) : P$2(t2, {});
  }, getterFor: function(t2) {
    return function(e2) {
      var n2;
      if (!h(e2) || (n2 = M$1(e2)).type !== t2) throw TypeError("Incompatible receiver, " + t2 + " required");
      return n2;
    };
  } };
  var Z = e(function(t2) {
    var e2 = J.get, n2 = J.enforce, o2 = String(String).split("String");
    (t2.exports = function(t3, e3, i2, u2) {
      var a2, c2 = !!u2 && !!u2.unsafe, l2 = !!u2 && !!u2.enumerable, f2 = !!u2 && !!u2.noTargetGet;
      "function" == typeof i2 && ("string" != typeof e3 || S(i2, "name") || I(i2, "name", e3), (a2 = n2(i2)).source || (a2.source = o2.join("string" == typeof e3 ? e3 : ""))), t3 !== r ? (c2 ? !f2 && t3[e3] && (l2 = true) : delete t3[e3], l2 ? t3[e3] = i2 : I(t3, e3, i2)) : l2 ? t3[e3] = i2 : j(e3, i2);
    })(Function.prototype, "toString", function() {
      return "function" == typeof this && e2(this).source || D$1(this);
    });
  });
  var tt = r;
  var et = function(t2) {
    return "function" == typeof t2 ? t2 : void 0;
  };
  var nt = function(t2, e2) {
    return arguments.length < 2 ? et(tt[t2]) || et(r[t2]) : tt[t2] && tt[t2][e2] || r[t2] && r[t2][e2];
  };
  var rt = Math.ceil;
  var ot = Math.floor;
  var it$1 = function(t2) {
    return isNaN(t2 = +t2) ? 0 : (t2 > 0 ? ot : rt)(t2);
  };
  var ut$1 = Math.min;
  var at = function(t2) {
    return t2 > 0 ? ut$1(it$1(t2), 9007199254740991) : 0;
  };
  var ct$1 = Math.max;
  var lt$1 = Math.min;
  var ft$1 = function(t2, e2) {
    var n2 = it$1(t2);
    return n2 < 0 ? ct$1(n2 + e2, 0) : lt$1(n2, e2);
  };
  var st$1 = function(t2) {
    return function(e2, n2, r2) {
      var o2, i2 = g(e2), u2 = at(i2.length), a2 = ft$1(r2, u2);
      if (t2 && n2 != n2) {
        for (; u2 > a2; ) if ((o2 = i2[a2++]) != o2) return true;
      } else for (; u2 > a2; a2++) if ((t2 || a2 in i2) && i2[a2] === n2) return t2 || a2 || 0;
      return !t2 && -1;
    };
  };
  var dt$1 = { includes: st$1(true), indexOf: st$1(false) };
  var vt$1 = dt$1.indexOf;
  var pt$1 = function(t2, e2) {
    var n2, r2 = g(t2), o2 = 0, i2 = [];
    for (n2 in r2) !S(G, n2) && S(r2, n2) && i2.push(n2);
    for (; e2.length > o2; ) S(r2, n2 = e2[o2++]) && (~vt$1(i2, n2) || i2.push(n2));
    return i2;
  };
  var gt$1 = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  var ht$1 = gt$1.concat("length", "prototype");
  var yt$1 = { f: Object.getOwnPropertyNames || function(t2) {
    return pt$1(t2, ht$1);
  } };
  var mt$1 = { f: Object.getOwnPropertySymbols };
  var St$1 = nt("Reflect", "ownKeys") || function(t2) {
    var e2 = yt$1.f(A$2(t2)), n2 = mt$1.f;
    return n2 ? e2.concat(n2(t2)) : e2;
  };
  var xt$1 = function(t2, e2) {
    for (var n2 = St$1(e2), r2 = R$1.f, o2 = T$1.f, i2 = 0; i2 < n2.length; i2++) {
      var u2 = n2[i2];
      S(t2, u2) || r2(t2, u2, o2(e2, u2));
    }
  };
  var bt$1 = /#|\.prototype\./;
  var Et$1 = function(t2, e2) {
    var n2 = Ot$1[wt$1(t2)];
    return n2 == At$1 || n2 != Tt$1 && ("function" == typeof e2 ? o(e2) : !!e2);
  };
  var wt$1 = Et$1.normalize = function(t2) {
    return String(t2).replace(bt$1, ".").toLowerCase();
  };
  var Ot$1 = Et$1.data = {};
  var Tt$1 = Et$1.NATIVE = "N";
  var At$1 = Et$1.POLYFILL = "P";
  var kt$1 = Et$1;
  var Rt$1 = T$1.f;
  var It$1 = function(t2, e2) {
    var n2, o2, i2, u2, a2, c2 = t2.target, l2 = t2.global, f2 = t2.stat;
    if (n2 = l2 ? r : f2 ? r[c2] || j(c2, {}) : (r[c2] || {}).prototype) for (o2 in e2) {
      if (u2 = e2[o2], i2 = t2.noTargetGet ? (a2 = Rt$1(n2, o2)) && a2.value : n2[o2], !kt$1(l2 ? o2 : c2 + (f2 ? "." : "#") + o2, t2.forced) && void 0 !== i2) {
        if (typeof u2 == typeof i2) continue;
        xt$1(u2, i2);
      }
      (t2.sham || i2 && i2.sham) && I(u2, "sham", true), Z(n2, o2, u2, t2);
    }
  };
  var jt$1 = function(t2, e2) {
    var n2 = [][t2];
    return !!n2 && o(function() {
      n2.call(null, e2 || function() {
        throw 1;
      }, 1);
    });
  };
  var Ct$1 = Object.defineProperty;
  var Lt$1 = {};
  var Pt$1 = function(t2) {
    throw t2;
  };
  var Mt$1 = function(t2, e2) {
    if (S(Lt$1, t2)) return Lt$1[t2];
    e2 || (e2 = {});
    var n2 = [][t2], r2 = !!S(e2, "ACCESSORS") && e2.ACCESSORS, u2 = S(e2, 0) ? e2[0] : Pt$1, a2 = S(e2, 1) ? e2[1] : void 0;
    return Lt$1[t2] = !!n2 && !o(function() {
      if (r2 && !i) return true;
      var t3 = { length: -1 };
      r2 ? Ct$1(t3, 1, { enumerable: true, get: Pt$1 }) : t3[1] = 1, n2.call(t3, u2, a2);
    });
  };
  var _t$1 = dt$1.indexOf;
  var Dt$1 = [].indexOf;
  var Ut$1 = !!Dt$1 && 1 / [1].indexOf(1, -0) < 0;
  var Nt$1 = jt$1("indexOf");
  var Ft$1 = Mt$1("indexOf", { ACCESSORS: true, 1: 0 });
  function Wt$1(t2, e2) {
    if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
  }
  function zt$1(t2, e2) {
    for (var n2 = 0; n2 < e2.length; n2++) {
      var r2 = e2[n2];
      r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
    }
  }
  function $t$1(t2, e2, n2) {
    return e2 && zt$1(t2.prototype, e2), n2 && zt$1(t2, n2), t2;
  }
  It$1({ target: "Array", proto: true, forced: Ut$1 || !Nt$1 || !Ft$1 }, { indexOf: function(t2) {
    return Ut$1 ? Dt$1.apply(this, arguments) || 0 : _t$1(this, t2, arguments.length > 1 ? arguments[1] : void 0);
  } });
  (function() {
    function t2() {
      Wt$1(this, t2);
    }
    return $t$1(t2, null, [{ key: "isInBrowser", value: function() {
      return "undefined" != typeof window;
    } }, { key: "isServer", value: function() {
      return "undefined" == typeof window;
    } }, { key: "getUA", value: function() {
      return t2.isInBrowser() ? window.navigator.userAgent.toLowerCase() : "";
    } }, { key: "isMobile", value: function() {
      return /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.appVersion);
    } }, { key: "isOpera", value: function() {
      return -1 !== navigator.userAgent.indexOf("Opera");
    } }, { key: "isIE", value: function() {
      var e2 = t2.getUA();
      return "" !== e2 && e2.indexOf("msie") > 0;
    } }, { key: "isIE9", value: function() {
      var e2 = t2.getUA();
      return "" !== e2 && e2.indexOf("msie 9.0") > 0;
    } }, { key: "isEdge", value: function() {
      var e2 = t2.getUA();
      return "" !== e2 && e2.indexOf("edge/") > 0;
    } }, { key: "isChrome", value: function() {
      var e2 = t2.getUA();
      return "" !== e2 && /chrome\/\d+/.test(e2) && !t2.isEdge();
    } }, { key: "isPhantomJS", value: function() {
      var e2 = t2.getUA();
      return "" !== e2 && /phantomjs/.test(e2);
    } }, { key: "isFirefox", value: function() {
      var e2 = t2.getUA();
      return "" !== e2 && /firefox/.test(e2);
    } }]), t2;
  })();
  var Yt$1 = [].join;
  var Gt$1 = v != Object;
  var Ht$1 = jt$1("join", ",");
  It$1({ target: "Array", proto: true, forced: Gt$1 || !Ht$1 }, { join: function(t2) {
    return Yt$1.call(g(this), void 0 === t2 ? "," : t2);
  } });
  var Xt$1;
  var Vt$1;
  var Kt$1 = function(t2) {
    return Object(p(t2));
  };
  var qt$1 = Array.isArray || function(t2) {
    return "Array" == s(t2);
  };
  var Qt$1 = !!Object.getOwnPropertySymbols && !o(function() {
    return !String(Symbol());
  });
  var Jt$1 = Qt$1 && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  var Zt$1 = F$1("wks");
  var te = r.Symbol;
  var ee = Jt$1 ? te : te && te.withoutSetter || $$1;
  var ne = function(t2) {
    return S(Zt$1, t2) || (Qt$1 && S(te, t2) ? Zt$1[t2] = te[t2] : Zt$1[t2] = ee("Symbol." + t2)), Zt$1[t2];
  };
  var re$1 = ne("species");
  var oe = function(t2, e2) {
    var n2;
    return qt$1(t2) && ("function" != typeof (n2 = t2.constructor) || n2 !== Array && !qt$1(n2.prototype) ? h(n2) && null === (n2 = n2[re$1]) && (n2 = void 0) : n2 = void 0), new (void 0 === n2 ? Array : n2)(0 === e2 ? 0 : e2);
  };
  var ie$1 = function(t2, e2, n2) {
    var r2 = y(e2);
    r2 in t2 ? R$1.f(t2, r2, l(0, n2)) : t2[r2] = n2;
  };
  var ue$1 = nt("navigator", "userAgent") || "";
  var ae = r.process;
  var ce = ae && ae.versions;
  var le = ce && ce.v8;
  le ? Vt$1 = (Xt$1 = le.split("."))[0] + Xt$1[1] : ue$1 && (!(Xt$1 = ue$1.match(/Edge\/(\d+)/)) || Xt$1[1] >= 74) && (Xt$1 = ue$1.match(/Chrome\/(\d+)/)) && (Vt$1 = Xt$1[1]);
  var fe$1 = Vt$1 && +Vt$1;
  var se = ne("species");
  var de$1 = function(t2) {
    return fe$1 >= 51 || !o(function() {
      var e2 = [];
      return (e2.constructor = {})[se] = function() {
        return { foo: 1 };
      }, 1 !== e2[t2](Boolean).foo;
    });
  };
  var ve$1 = de$1("splice");
  var pe = Mt$1("splice", { ACCESSORS: true, 0: 0, 1: 2 });
  var ge = Math.max;
  var he = Math.min;
  It$1({ target: "Array", proto: true, forced: !ve$1 || !pe }, { splice: function(t2, e2) {
    var n2, r2, o2, i2, u2, a2, c2 = Kt$1(this), l2 = at(c2.length), f2 = ft$1(t2, l2), s2 = arguments.length;
    if (0 === s2 ? n2 = r2 = 0 : 1 === s2 ? (n2 = 0, r2 = l2 - f2) : (n2 = s2 - 2, r2 = he(ge(it$1(e2), 0), l2 - f2)), l2 + n2 - r2 > 9007199254740991) throw TypeError("Maximum allowed length exceeded");
    for (o2 = oe(c2, r2), i2 = 0; i2 < r2; i2++) (u2 = f2 + i2) in c2 && ie$1(o2, i2, c2[u2]);
    if (o2.length = r2, n2 < r2) {
      for (i2 = f2; i2 < l2 - r2; i2++) a2 = i2 + n2, (u2 = i2 + r2) in c2 ? c2[a2] = c2[u2] : delete c2[a2];
      for (i2 = l2; i2 > l2 - r2 + n2; i2--) delete c2[i2 - 1];
    } else if (n2 > r2) for (i2 = l2 - r2; i2 > f2; i2--) a2 = i2 + n2 - 1, (u2 = i2 + r2 - 1) in c2 ? c2[a2] = c2[u2] : delete c2[a2];
    for (i2 = 0; i2 < n2; i2++) c2[i2 + f2] = arguments[i2 + 2];
    return c2.length = l2 - r2 + n2, o2;
  } });
  var ye$1 = {};
  ye$1[ne("toStringTag")] = "z";
  var me$1 = "[object z]" === String(ye$1);
  var Se$1 = ne("toStringTag");
  var xe = "Arguments" == s(/* @__PURE__ */ function() {
    return arguments;
  }());
  var be$1 = me$1 ? s : function(t2) {
    var e2, n2, r2;
    return void 0 === t2 ? "Undefined" : null === t2 ? "Null" : "string" == typeof (n2 = function(t3, e3) {
      try {
        return t3[e3];
      } catch (t4) {
      }
    }(e2 = Object(t2), Se$1)) ? n2 : xe ? s(e2) : "Object" == (r2 = s(e2)) && "function" == typeof e2.callee ? "Arguments" : r2;
  };
  var Ee = me$1 ? {}.toString : function() {
    return "[object " + be$1(this) + "]";
  };
  me$1 || Z(Object.prototype, "toString", Ee, { unsafe: true });
  var we = function() {
    var t2 = A$2(this), e2 = "";
    return t2.global && (e2 += "g"), t2.ignoreCase && (e2 += "i"), t2.multiline && (e2 += "m"), t2.dotAll && (e2 += "s"), t2.unicode && (e2 += "u"), t2.sticky && (e2 += "y"), e2;
  };
  function Oe(t2, e2) {
    return RegExp(t2, e2);
  }
  var Te;
  var Ae$1;
  var ke$1 = { UNSUPPORTED_Y: o(function() {
    var t2 = Oe("a", "y");
    return t2.lastIndex = 2, null != t2.exec("abcd");
  }), BROKEN_CARET: o(function() {
    var t2 = Oe("^r", "gy");
    return t2.lastIndex = 2, null != t2.exec("str");
  }) };
  var Re = RegExp.prototype.exec;
  var Ie = String.prototype.replace;
  var je = Re;
  var Ce$1 = (Te = /a/, Ae$1 = /b*/g, Re.call(Te, "a"), Re.call(Ae$1, "a"), 0 !== Te.lastIndex || 0 !== Ae$1.lastIndex);
  var Le$1 = ke$1.UNSUPPORTED_Y || ke$1.BROKEN_CARET;
  var Pe$1 = void 0 !== /()??/.exec("")[1];
  (Ce$1 || Pe$1 || Le$1) && (je = function(t2) {
    var e2, n2, r2, o2, i2 = this, u2 = Le$1 && i2.sticky, a2 = we.call(i2), c2 = i2.source, l2 = 0, f2 = t2;
    return u2 && (-1 === (a2 = a2.replace("y", "")).indexOf("g") && (a2 += "g"), f2 = String(t2).slice(i2.lastIndex), i2.lastIndex > 0 && (!i2.multiline || i2.multiline && "\n" !== t2[i2.lastIndex - 1]) && (c2 = "(?: " + c2 + ")", f2 = " " + f2, l2++), n2 = new RegExp("^(?:" + c2 + ")", a2)), Pe$1 && (n2 = new RegExp("^" + c2 + "$(?!\\s)", a2)), Ce$1 && (e2 = i2.lastIndex), r2 = Re.call(u2 ? n2 : i2, f2), u2 ? r2 ? (r2.input = r2.input.slice(l2), r2[0] = r2[0].slice(l2), r2.index = i2.lastIndex, i2.lastIndex += r2[0].length) : i2.lastIndex = 0 : Ce$1 && r2 && (i2.lastIndex = i2.global ? r2.index + r2[0].length : e2), Pe$1 && r2 && r2.length > 1 && Ie.call(r2[0], n2, function() {
      for (o2 = 1; o2 < arguments.length - 2; o2++) void 0 === arguments[o2] && (r2[o2] = void 0);
    }), r2;
  });
  var Me$1 = je;
  It$1({ target: "RegExp", proto: true, forced: /./.exec !== Me$1 }, { exec: Me$1 });
  var _e$1 = RegExp.prototype;
  var De = _e$1.toString;
  var Ue = o(function() {
    return "/a/b" != De.call({ source: "a", flags: "b" });
  });
  var Ne$1 = "toString" != De.name;
  (Ue || Ne$1) && Z(RegExp.prototype, "toString", function() {
    var t2 = A$2(this), e2 = String(t2.source), n2 = t2.flags;
    return "/" + e2 + "/" + String(void 0 === n2 && t2 instanceof RegExp && !("flags" in _e$1) ? we.call(t2) : n2);
  }, { unsafe: true });
  var Fe = ne("species");
  var We = !o(function() {
    var t2 = /./;
    return t2.exec = function() {
      var t3 = [];
      return t3.groups = { a: "7" }, t3;
    }, "7" !== "".replace(t2, "$<a>");
  });
  var ze = "$0" === "a".replace(/./, "$0");
  var $e = ne("replace");
  var Be = !!/./[$e] && "" === /./[$e]("a", "$0");
  var Ye$1 = !o(function() {
    var t2 = /(?:)/, e2 = t2.exec;
    t2.exec = function() {
      return e2.apply(this, arguments);
    };
    var n2 = "ab".split(t2);
    return 2 !== n2.length || "a" !== n2[0] || "b" !== n2[1];
  });
  var Ge = function(t2, e2, n2, r2) {
    var i2 = ne(t2), u2 = !o(function() {
      var e3 = {};
      return e3[i2] = function() {
        return 7;
      }, 7 != ""[t2](e3);
    }), a2 = u2 && !o(function() {
      var e3 = false, n3 = /a/;
      return "split" === t2 && ((n3 = {}).constructor = {}, n3.constructor[Fe] = function() {
        return n3;
      }, n3.flags = "", n3[i2] = /./[i2]), n3.exec = function() {
        return e3 = true, null;
      }, n3[i2](""), !e3;
    });
    if (!u2 || !a2 || "replace" === t2 && (!We || !ze || Be) || "split" === t2 && !Ye$1) {
      var c2 = /./[i2], l2 = n2(i2, ""[t2], function(t3, e3, n3, r3, o2) {
        return e3.exec === Me$1 ? u2 && !o2 ? { done: true, value: c2.call(e3, n3, r3) } : { done: true, value: t3.call(n3, e3, r3) } : { done: false };
      }, { REPLACE_KEEPS_$0: ze, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Be }), f2 = l2[0], s2 = l2[1];
      Z(String.prototype, t2, f2), Z(RegExp.prototype, i2, 2 == e2 ? function(t3, e3) {
        return s2.call(t3, this, e3);
      } : function(t3) {
        return s2.call(t3, this);
      });
    }
    r2 && I(RegExp.prototype[i2], "sham", true);
  };
  var He = ne("match");
  var Xe = function(t2) {
    var e2;
    return h(t2) && (void 0 !== (e2 = t2[He]) ? !!e2 : "RegExp" == s(t2));
  };
  var Ve$1 = function(t2) {
    if ("function" != typeof t2) throw TypeError(String(t2) + " is not a function");
    return t2;
  };
  var Ke$1 = ne("species");
  var qe$1 = function(t2) {
    return function(e2, n2) {
      var r2, o2, i2 = String(p(e2)), u2 = it$1(n2), a2 = i2.length;
      return u2 < 0 || u2 >= a2 ? t2 ? "" : void 0 : (r2 = i2.charCodeAt(u2)) < 55296 || r2 > 56319 || u2 + 1 === a2 || (o2 = i2.charCodeAt(u2 + 1)) < 56320 || o2 > 57343 ? t2 ? i2.charAt(u2) : r2 : t2 ? i2.slice(u2, u2 + 2) : o2 - 56320 + (r2 - 55296 << 10) + 65536;
    };
  };
  var Qe = { codeAt: qe$1(false), charAt: qe$1(true) };
  var Je = Qe.charAt;
  var Ze = function(t2, e2, n2) {
    return e2 + (n2 ? Je(t2, e2).length : 1);
  };
  var tn = function(t2, e2) {
    var n2 = t2.exec;
    if ("function" == typeof n2) {
      var r2 = n2.call(t2, e2);
      if ("object" != typeof r2) throw TypeError("RegExp exec method returned something other than an Object or null");
      return r2;
    }
    if ("RegExp" !== s(t2)) throw TypeError("RegExp#exec called on incompatible receiver");
    return Me$1.call(t2, e2);
  };
  var en = [].push;
  var nn = Math.min;
  var rn$1 = !o(function() {
    return !RegExp(4294967295, "y");
  });
  Ge("split", 2, function(t2, e2, n2) {
    var r2;
    return r2 = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(t3, n3) {
      var r3 = String(p(this)), o2 = void 0 === n3 ? 4294967295 : n3 >>> 0;
      if (0 === o2) return [];
      if (void 0 === t3) return [r3];
      if (!Xe(t3)) return e2.call(r3, t3, o2);
      for (var i2, u2, a2, c2 = [], l2 = (t3.ignoreCase ? "i" : "") + (t3.multiline ? "m" : "") + (t3.unicode ? "u" : "") + (t3.sticky ? "y" : ""), f2 = 0, s2 = new RegExp(t3.source, l2 + "g"); (i2 = Me$1.call(s2, r3)) && !((u2 = s2.lastIndex) > f2 && (c2.push(r3.slice(f2, i2.index)), i2.length > 1 && i2.index < r3.length && en.apply(c2, i2.slice(1)), a2 = i2[0].length, f2 = u2, c2.length >= o2)); ) s2.lastIndex === i2.index && s2.lastIndex++;
      return f2 === r3.length ? !a2 && s2.test("") || c2.push("") : c2.push(r3.slice(f2)), c2.length > o2 ? c2.slice(0, o2) : c2;
    } : "0".split(void 0, 0).length ? function(t3, n3) {
      return void 0 === t3 && 0 === n3 ? [] : e2.call(this, t3, n3);
    } : e2, [function(e3, n3) {
      var o2 = p(this), i2 = null == e3 ? void 0 : e3[t2];
      return void 0 !== i2 ? i2.call(e3, o2, n3) : r2.call(String(o2), e3, n3);
    }, function(t3, o2) {
      var i2 = n2(r2, t3, this, o2, r2 !== e2);
      if (i2.done) return i2.value;
      var u2 = A$2(t3), a2 = String(this), c2 = function(t4, e3) {
        var n3, r3 = A$2(t4).constructor;
        return void 0 === r3 || null == (n3 = A$2(r3)[Ke$1]) ? e3 : Ve$1(n3);
      }(u2, RegExp), l2 = u2.unicode, f2 = (u2.ignoreCase ? "i" : "") + (u2.multiline ? "m" : "") + (u2.unicode ? "u" : "") + (rn$1 ? "y" : "g"), s2 = new c2(rn$1 ? u2 : "^(?:" + u2.source + ")", f2), d2 = void 0 === o2 ? 4294967295 : o2 >>> 0;
      if (0 === d2) return [];
      if (0 === a2.length) return null === tn(s2, a2) ? [a2] : [];
      for (var v2 = 0, p2 = 0, g2 = []; p2 < a2.length; ) {
        s2.lastIndex = rn$1 ? p2 : 0;
        var h2, y2 = tn(s2, rn$1 ? a2 : a2.slice(p2));
        if (null === y2 || (h2 = nn(at(s2.lastIndex + (rn$1 ? 0 : p2)), a2.length)) === v2) p2 = Ze(a2, p2, l2);
        else {
          if (g2.push(a2.slice(v2, p2)), g2.length === d2) return g2;
          for (var m2 = 1; m2 <= y2.length - 1; m2++) if (g2.push(y2[m2]), g2.length === d2) return g2;
          p2 = v2 = h2;
        }
      }
      return g2.push(a2.slice(v2)), g2;
    }];
  }, !rn$1);
  var on = "	\n\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
  var un = "[" + on + "]";
  var an = RegExp("^" + un + un + "*");
  var cn = RegExp(un + un + "*$");
  var ln = function(t2) {
    return function(e2) {
      var n2 = String(p(e2));
      return 1 & t2 && (n2 = n2.replace(an, "")), 2 & t2 && (n2 = n2.replace(cn, "")), n2;
    };
  };
  var fn = { start: ln(1), end: ln(2), trim: ln(3) };
  var sn = fn.trim;
  It$1({ target: "String", proto: true, forced: function(t2) {
    return o(function() {
      return !!on[t2]() || "\u200B\x85\u180E" != "\u200B\x85\u180E"[t2]() || on[t2].name !== t2;
    });
  }("trim") }, { trim: function() {
    return sn(this);
  } });
  var dn = de$1("slice");
  var vn = Mt$1("slice", { ACCESSORS: true, 0: 0, 1: 2 });
  var pn = ne("species");
  var gn = [].slice;
  var hn = Math.max;
  It$1({ target: "Array", proto: true, forced: !dn || !vn }, { slice: function(t2, e2) {
    var n2, r2, o2, i2 = g(this), u2 = at(i2.length), a2 = ft$1(t2, u2), c2 = ft$1(void 0 === e2 ? u2 : e2, u2);
    if (qt$1(i2) && ("function" != typeof (n2 = i2.constructor) || n2 !== Array && !qt$1(n2.prototype) ? h(n2) && null === (n2 = n2[pn]) && (n2 = void 0) : n2 = void 0, n2 === Array || void 0 === n2)) return gn.call(i2, a2, c2);
    for (r2 = new (void 0 === n2 ? Array : n2)(hn(c2 - a2, 0)), o2 = 0; a2 < c2; a2++, o2++) a2 in i2 && ie$1(r2, o2, i2[a2]);
    return r2.length = o2, r2;
  } });
  var yn = Object.keys || function(t2) {
    return pt$1(t2, gt$1);
  };
  var mn = o(function() {
    yn(1);
  });
  It$1({ target: "Object", stat: true, forced: mn }, { keys: function(t2) {
    return yn(Kt$1(t2));
  } });
  var Sn;
  var xn = function(t2) {
    if (Xe(t2)) throw TypeError("The method doesn't accept regular expressions");
    return t2;
  };
  var bn = ne("match");
  var En = T$1.f;
  var wn = "".startsWith;
  var On = Math.min;
  var Tn = function(t2) {
    var e2 = /./;
    try {
      "/./"[t2](e2);
    } catch (n2) {
      try {
        return e2[bn] = false, "/./"[t2](e2);
      } catch (t3) {
      }
    }
    return false;
  }("startsWith");
  var An = !(Tn || (Sn = En(String.prototype, "startsWith"), !Sn || Sn.writable));
  function kn(t2) {
    return (kn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
      return typeof t3;
    } : function(t3) {
      return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
    })(t2);
  }
  It$1({ target: "String", proto: true, forced: !An && !Tn }, { startsWith: function(t2) {
    var e2 = String(p(this));
    xn(t2);
    var n2 = at(On(arguments.length > 1 ? arguments[1] : void 0, e2.length)), r2 = String(t2);
    return wn ? wn.call(e2, r2, n2) : e2.slice(n2, n2 + r2.length) === r2;
  } });
  var jn = function(t2) {
    return "string" == typeof t2;
  };
  var Mn = function(t2) {
    return null !== t2 && "object" === kn(t2);
  };
  var Vn = function() {
    function t2() {
      Wt$1(this, t2);
    }
    return $t$1(t2, null, [{ key: "isWindow", value: function(t3) {
      return t3 === window;
    } }, { key: "addEventListener", value: function(t3, e2, n2) {
      var r2 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      t3 && e2 && n2 && t3.addEventListener(e2, n2, r2);
    } }, { key: "removeEventListener", value: function(t3, e2, n2) {
      var r2 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      t3 && e2 && n2 && t3.removeEventListener(e2, n2, r2);
    } }, { key: "triggerDragEvent", value: function(e2, n2) {
      var r2 = false, o2 = function(t3) {
        var e3;
        null === (e3 = n2.drag) || void 0 === e3 || e3.call(n2, t3);
      }, i2 = function e3(i3) {
        var u2;
        t2.removeEventListener(document, "mousemove", o2), t2.removeEventListener(document, "mouseup", e3), document.onselectstart = null, document.ondragstart = null, r2 = false, null === (u2 = n2.end) || void 0 === u2 || u2.call(n2, i3);
      };
      t2.addEventListener(e2, "mousedown", function(e3) {
        var u2;
        r2 || (document.onselectstart = function() {
          return false;
        }, document.ondragstart = function() {
          return false;
        }, t2.addEventListener(document, "mousemove", o2), t2.addEventListener(document, "mouseup", i2), r2 = true, null === (u2 = n2.start) || void 0 === u2 || u2.call(n2, e3));
      });
    } }, { key: "getBoundingClientRect", value: function(t3) {
      return t3 && Mn(t3) && 1 === t3.nodeType ? t3.getBoundingClientRect() : null;
    } }, { key: "hasClass", value: function(t3, e2) {
      return !!(t3 && Mn(t3) && jn(e2) && 1 === t3.nodeType) && t3.classList.contains(e2.trim());
    } }, { key: "addClass", value: function(e2, n2) {
      if (e2 && Mn(e2) && jn(n2) && 1 === e2.nodeType && (n2 = n2.trim(), !t2.hasClass(e2, n2))) {
        var r2 = e2.className;
        e2.className = r2 ? r2 + " " + n2 : n2;
      }
    } }, { key: "removeClass", value: function(t3, e2) {
      if (t3 && Mn(t3) && jn(e2) && 1 === t3.nodeType && "string" == typeof t3.className) {
        e2 = e2.trim();
        for (var n2 = t3.className.trim().split(" "), r2 = n2.length - 1; r2 >= 0; r2--) n2[r2] = n2[r2].trim(), n2[r2] && n2[r2] !== e2 || n2.splice(r2, 1);
        t3.className = n2.join(" ");
      }
    } }, { key: "toggleClass", value: function(t3, e2, n2) {
      t3 && Mn(t3) && jn(e2) && 1 === t3.nodeType && t3.classList.toggle(e2, n2);
    } }, { key: "replaceClass", value: function(e2, n2, r2) {
      e2 && Mn(e2) && jn(n2) && jn(r2) && 1 === e2.nodeType && (n2 = n2.trim(), r2 = r2.trim(), t2.removeClass(e2, n2), t2.addClass(e2, r2));
    } }, { key: "getScrollTop", value: function(t3) {
      var e2 = "scrollTop" in t3 ? t3.scrollTop : t3.pageYOffset;
      return Math.max(e2, 0);
    } }, { key: "setScrollTop", value: function(t3, e2) {
      "scrollTop" in t3 ? t3.scrollTop = e2 : t3.scrollTo(t3.scrollX, e2);
    } }, { key: "getRootScrollTop", value: function() {
      return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    } }, { key: "setRootScrollTop", value: function(e2) {
      t2.setScrollTop(window, e2), t2.setScrollTop(document.body, e2);
    } }, { key: "getElementTop", value: function(e2, n2) {
      if (t2.isWindow(e2)) return 0;
      var r2 = n2 ? t2.getScrollTop(n2) : t2.getRootScrollTop();
      return e2.getBoundingClientRect().top + r2;
    } }, { key: "getVisibleHeight", value: function(e2) {
      return t2.isWindow(e2) ? e2.innerHeight : e2.getBoundingClientRect().height;
    } }, { key: "isHidden", value: function(t3) {
      if (!t3) return false;
      var e2 = window.getComputedStyle(t3), n2 = "none" === e2.display, r2 = null === t3.offsetParent && "fixed" !== e2.position;
      return n2 || r2;
    } }, { key: "triggerEvent", value: function(t3, e2) {
      if ("createEvent" in document) {
        var n2 = document.createEvent("HTMLEvents");
        n2.initEvent(e2, false, true), t3.dispatchEvent(n2);
      }
    } }, { key: "calcAngle", value: function(t3, e2) {
      var n2 = t3.getBoundingClientRect(), r2 = n2.left + n2.width / 2, o2 = n2.top + n2.height / 2, i2 = Math.abs(r2 - e2.clientX), u2 = Math.abs(o2 - e2.clientY), a2 = u2 / Math.sqrt(Math.pow(i2, 2) + Math.pow(u2, 2)), c2 = Math.acos(a2), l2 = Math.floor(180 / (Math.PI / c2));
      return e2.clientX > r2 && e2.clientY > o2 && (l2 = 180 - l2), e2.clientX == r2 && e2.clientY > o2 && (l2 = 180), e2.clientX > r2 && e2.clientY == o2 && (l2 = 90), e2.clientX < r2 && e2.clientY > o2 && (l2 = 180 + l2), e2.clientX < r2 && e2.clientY == o2 && (l2 = 270), e2.clientX < r2 && e2.clientY < o2 && (l2 = 360 - l2), l2;
    } }, { key: "querySelector", value: function(t3, e2) {
      return e2 ? e2.querySelector(t3) : document.querySelector(t3);
    } }, { key: "createElement", value: function(t3) {
      for (var e2 = document.createElement(t3), n2 = arguments.length, r2 = new Array(n2 > 1 ? n2 - 1 : 0), o2 = 1; o2 < n2; o2++) r2[o2 - 1] = arguments[o2];
      for (var i2 = 0; i2 < r2.length; i2++) r2[i2] && e2.classList.add(r2[i2]);
      return e2;
    } }, { key: "appendChild", value: function(t3) {
      for (var e2 = 0; e2 < (arguments.length <= 1 ? 0 : arguments.length - 1); e2++) t3.appendChild(e2 + 1 < 1 || arguments.length <= e2 + 1 ? void 0 : arguments[e2 + 1]);
    } }, { key: "getWindow", value: function(t3) {
      if ("[object Window]" !== t3.toString()) {
        var e2 = t3.ownerDocument;
        return e2 && e2.defaultView || window;
      }
      return t3;
    } }, { key: "isElement", value: function(t3) {
      return t3 instanceof this.getWindow(t3).Element || t3 instanceof Element;
    } }, { key: "isHTMLElement", value: function(t3) {
      return t3 instanceof this.getWindow(t3).HTMLElement || t3 instanceof HTMLElement;
    } }, { key: "isShadowRoot", value: function(t3) {
      return "undefined" != typeof ShadowRoot && (t3 instanceof this.getWindow(t3).ShadowRoot || t3 instanceof ShadowRoot);
    } }, { key: "getWindowScroll", value: function(t3) {
      var e2 = this.getWindow(t3);
      return { scrollLeft: e2.pageXOffset || 0, scrollTop: e2.pageYOffset || 0 };
    } }]), t2;
  }();
  var Kn = Math.floor;
  var qn = "".replace;
  var Qn = /\$([$&'`]|\d\d?|<[^>]*>)/g;
  var Jn = /\$([$&'`]|\d\d?)/g;
  var Zn = function(t2, e2, n2, r2, o2, i2) {
    var u2 = n2 + t2.length, a2 = r2.length, c2 = Jn;
    return void 0 !== o2 && (o2 = Kt$1(o2), c2 = Qn), qn.call(i2, c2, function(i3, c3) {
      var l2;
      switch (c3.charAt(0)) {
        case "$":
          return "$";
        case "&":
          return t2;
        case "`":
          return e2.slice(0, n2);
        case "'":
          return e2.slice(u2);
        case "<":
          l2 = o2[c3.slice(1, -1)];
          break;
        default:
          var f2 = +c3;
          if (0 === f2) return i3;
          if (f2 > a2) {
            var s2 = Kn(f2 / 10);
            return 0 === s2 ? i3 : s2 <= a2 ? void 0 === r2[s2 - 1] ? c3.charAt(1) : r2[s2 - 1] + c3.charAt(1) : i3;
          }
          l2 = r2[f2 - 1];
      }
      return void 0 === l2 ? "" : l2;
    });
  };
  var tr = Math.max;
  var er = Math.min;
  Ge("replace", 2, function(t2, e2, n2, r2) {
    var o2 = r2.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, i2 = r2.REPLACE_KEEPS_$0, u2 = o2 ? "$" : "$0";
    return [function(n3, r3) {
      var o3 = p(this), i3 = null == n3 ? void 0 : n3[t2];
      return void 0 !== i3 ? i3.call(n3, o3, r3) : e2.call(String(o3), n3, r3);
    }, function(t3, r3) {
      if (!o2 && i2 || "string" == typeof r3 && -1 === r3.indexOf(u2)) {
        var a2 = n2(e2, t3, this, r3);
        if (a2.done) return a2.value;
      }
      var c2 = A$2(t3), l2 = String(this), f2 = "function" == typeof r3;
      f2 || (r3 = String(r3));
      var s2 = c2.global;
      if (s2) {
        var d2 = c2.unicode;
        c2.lastIndex = 0;
      }
      for (var v2 = []; ; ) {
        var p2 = tn(c2, l2);
        if (null === p2) break;
        if (v2.push(p2), !s2) break;
        "" === String(p2[0]) && (c2.lastIndex = Ze(l2, at(c2.lastIndex), d2));
      }
      for (var g2, h2 = "", y2 = 0, m2 = 0; m2 < v2.length; m2++) {
        p2 = v2[m2];
        for (var S2 = String(p2[0]), x2 = tr(er(it$1(p2.index), l2.length), 0), b2 = [], E2 = 1; E2 < p2.length; E2++) b2.push(void 0 === (g2 = p2[E2]) ? g2 : String(g2));
        var w2 = p2.groups;
        if (f2) {
          var O2 = [S2].concat(b2, x2, l2);
          void 0 !== w2 && O2.push(w2);
          var T2 = String(r3.apply(void 0, O2));
        } else T2 = Zn(S2, l2, x2, b2, w2, r3);
        x2 >= y2 && (h2 += l2.slice(y2, x2) + T2, y2 = x2 + S2.length);
      }
      return h2 + l2.slice(y2);
    }];
  });
  (function() {
    function t2() {
      Wt$1(this, t2);
    }
    return $t$1(t2, null, [{ key: "camelize", value: function(t3) {
      return t3.replace(/-(\w)/g, function(t4, e2) {
        return e2 ? e2.toUpperCase() : "";
      });
    } }, { key: "capitalize", value: function(t3) {
      return t3.charAt(0).toUpperCase() + t3.slice(1);
    } }]), t2;
  })();
  (function() {
    function t2() {
      Wt$1(this, t2);
    }
    return $t$1(t2, null, [{ key: "_clone", value: function() {
    } }]), t2;
  })();
  var or = ne("isConcatSpreadable");
  var ir = fe$1 >= 51 || !o(function() {
    var t2 = [];
    return t2[or] = false, t2.concat()[0] !== t2;
  });
  var ur = de$1("concat");
  var ar = function(t2) {
    if (!h(t2)) return false;
    var e2 = t2[or];
    return void 0 !== e2 ? !!e2 : qt$1(t2);
  };
  It$1({ target: "Array", proto: true, forced: !ir || !ur }, { concat: function(t2) {
    var e2, n2, r2, o2, i2, u2 = Kt$1(this), a2 = oe(u2, 0), c2 = 0;
    for (e2 = -1, r2 = arguments.length; e2 < r2; e2++) if (ar(i2 = -1 === e2 ? u2 : arguments[e2])) {
      if (c2 + (o2 = at(i2.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
      for (n2 = 0; n2 < o2; n2++, c2++) n2 in i2 && ie$1(a2, c2, i2[n2]);
    } else {
      if (c2 >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
      ie$1(a2, c2++, i2);
    }
    return a2.length = c2, a2;
  } });
  var cr;
  var lr = function(t2, e2, n2) {
    if (Ve$1(t2), void 0 === e2) return t2;
    switch (n2) {
      case 0:
        return function() {
          return t2.call(e2);
        };
      case 1:
        return function(n3) {
          return t2.call(e2, n3);
        };
      case 2:
        return function(n3, r2) {
          return t2.call(e2, n3, r2);
        };
      case 3:
        return function(n3, r2, o2) {
          return t2.call(e2, n3, r2, o2);
        };
    }
    return function() {
      return t2.apply(e2, arguments);
    };
  };
  var fr = [].push;
  var sr = function(t2) {
    var e2 = 1 == t2, n2 = 2 == t2, r2 = 3 == t2, o2 = 4 == t2, i2 = 6 == t2, u2 = 7 == t2, a2 = 5 == t2 || i2;
    return function(c2, l2, f2, s2) {
      for (var d2, p2, g2 = Kt$1(c2), h2 = v(g2), y2 = lr(l2, f2, 3), m2 = at(h2.length), S2 = 0, x2 = s2 || oe, b2 = e2 ? x2(c2, m2) : n2 || u2 ? x2(c2, 0) : void 0; m2 > S2; S2++) if ((a2 || S2 in h2) && (p2 = y2(d2 = h2[S2], S2, g2), t2)) if (e2) b2[S2] = p2;
      else if (p2) switch (t2) {
        case 3:
          return true;
        case 5:
          return d2;
        case 6:
          return S2;
        case 2:
          fr.call(b2, d2);
      }
      else switch (t2) {
        case 4:
          return false;
        case 7:
          fr.call(b2, d2);
      }
      return i2 ? -1 : r2 || o2 ? o2 : b2;
    };
  };
  var dr = { forEach: sr(0), map: sr(1), filter: sr(2), some: sr(3), every: sr(4), find: sr(5), findIndex: sr(6), filterOut: sr(7) };
  var vr = i ? Object.defineProperties : function(t2, e2) {
    A$2(t2);
    for (var n2, r2 = yn(e2), o2 = r2.length, i2 = 0; o2 > i2; ) R$1.f(t2, n2 = r2[i2++], e2[n2]);
    return t2;
  };
  var pr = nt("document", "documentElement");
  var gr = Y$1("IE_PROTO");
  var hr = function() {
  };
  var yr = function(t2) {
    return "<script>" + t2 + "<\/script>";
  };
  var mr = function() {
    try {
      cr = document.domain && new ActiveXObject("htmlfile");
    } catch (t3) {
    }
    var t2, e2;
    mr = cr ? function(t3) {
      t3.write(yr("")), t3.close();
      var e3 = t3.parentWindow.Object;
      return t3 = null, e3;
    }(cr) : ((e2 = E$1("iframe")).style.display = "none", pr.appendChild(e2), e2.src = String("javascript:"), (t2 = e2.contentWindow.document).open(), t2.write(yr("document.F=Object")), t2.close(), t2.F);
    for (var n2 = gt$1.length; n2--; ) delete mr.prototype[gt$1[n2]];
    return mr();
  };
  G[gr] = true;
  var Sr = Object.create || function(t2, e2) {
    var n2;
    return null !== t2 ? (hr.prototype = A$2(t2), n2 = new hr(), hr.prototype = null, n2[gr] = t2) : n2 = mr(), void 0 === e2 ? n2 : vr(n2, e2);
  };
  var xr = ne("unscopables");
  var br = Array.prototype;
  null == br[xr] && R$1.f(br, xr, { configurable: true, value: Sr(null) });
  var Er = function(t2) {
    br[xr][t2] = true;
  };
  var wr = dr.find;
  var Or = true;
  var Tr = Mt$1("find");
  "find" in [] && Array(1).find(function() {
    Or = false;
  }), It$1({ target: "Array", proto: true, forced: Or || !Tr }, { find: function(t2) {
    return wr(this, t2, arguments.length > 1 ? arguments[1] : void 0);
  } }), Er("find");
  var Ar = dr.findIndex;
  var kr = true;
  var Rr = Mt$1("findIndex");
  "findIndex" in [] && Array(1).findIndex(function() {
    kr = false;
  }), It$1({ target: "Array", proto: true, forced: kr || !Rr }, { findIndex: function(t2) {
    return Ar(this, t2, arguments.length > 1 ? arguments[1] : void 0);
  } }), Er("findIndex");
  var Ir = function(t2, e2, n2, r2, o2, i2, u2, a2) {
    for (var c2, l2 = o2, f2 = 0, s2 = !!u2 && lr(u2, a2, 3); f2 < r2; ) {
      if (f2 in n2) {
        if (c2 = s2 ? s2(n2[f2], f2, e2) : n2[f2], i2 > 0 && qt$1(c2)) l2 = Ir(t2, e2, c2, at(c2.length), l2, i2 - 1) - 1;
        else {
          if (l2 >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
          t2[l2] = c2;
        }
        l2++;
      }
      f2++;
    }
    return l2;
  };
  var jr = Ir;
  It$1({ target: "Array", proto: true }, { flat: function() {
    var t2 = arguments.length ? arguments[0] : void 0, e2 = Kt$1(this), n2 = at(e2.length), r2 = oe(e2, 0);
    return r2.length = jr(r2, e2, e2, n2, 0, void 0 === t2 ? 1 : it$1(t2)), r2;
  } });
  var Cr = function(t2) {
    var e2 = t2.return;
    if (void 0 !== e2) return A$2(e2.call(t2)).value;
  };
  var Lr = function(t2, e2, n2, r2) {
    try {
      return r2 ? e2(A$2(n2)[0], n2[1]) : e2(n2);
    } catch (e3) {
      throw Cr(t2), e3;
    }
  };
  var Pr = {};
  var Mr = ne("iterator");
  var _r = Array.prototype;
  var Dr = function(t2) {
    return void 0 !== t2 && (Pr.Array === t2 || _r[Mr] === t2);
  };
  var Ur = ne("iterator");
  var Nr = function(t2) {
    if (null != t2) return t2[Ur] || t2["@@iterator"] || Pr[be$1(t2)];
  };
  var Fr = ne("iterator");
  var Wr = false;
  try {
    var zr = 0, $r = { next: function() {
      return { done: !!zr++ };
    }, return: function() {
      Wr = true;
    } };
    $r[Fr] = function() {
      return this;
    }, Array.from($r, function() {
      throw 2;
    });
  } catch (t2) {
  }
  var Br = function(t2, e2) {
    if (!e2 && !Wr) return false;
    var n2 = false;
    try {
      var r2 = {};
      r2[Fr] = function() {
        return { next: function() {
          return { done: n2 = true };
        } };
      }, t2(r2);
    } catch (t3) {
    }
    return n2;
  };
  var Yr = !Br(function(t2) {
    Array.from(t2);
  });
  It$1({ target: "Array", stat: true, forced: Yr }, { from: function(t2) {
    var e2, n2, r2, o2, i2, u2, a2 = Kt$1(t2), c2 = "function" == typeof this ? this : Array, l2 = arguments.length, f2 = l2 > 1 ? arguments[1] : void 0, s2 = void 0 !== f2, d2 = Nr(a2), v2 = 0;
    if (s2 && (f2 = lr(f2, l2 > 2 ? arguments[2] : void 0, 2)), null == d2 || c2 == Array && Dr(d2)) for (n2 = new c2(e2 = at(a2.length)); e2 > v2; v2++) u2 = s2 ? f2(a2[v2], v2) : a2[v2], ie$1(n2, v2, u2);
    else for (i2 = (o2 = d2.call(a2)).next, n2 = new c2(); !(r2 = i2.call(o2)).done; v2++) u2 = s2 ? Lr(o2, f2, [r2.value, v2], true) : r2.value, ie$1(n2, v2, u2);
    return n2.length = v2, n2;
  } });
  var Gr = function(t2) {
    return function(e2, n2, r2, o2) {
      Ve$1(n2);
      var i2 = Kt$1(e2), u2 = v(i2), a2 = at(i2.length), c2 = t2 ? a2 - 1 : 0, l2 = t2 ? -1 : 1;
      if (r2 < 2) for (; ; ) {
        if (c2 in u2) {
          o2 = u2[c2], c2 += l2;
          break;
        }
        if (c2 += l2, t2 ? c2 < 0 : a2 <= c2) throw TypeError("Reduce of empty array with no initial value");
      }
      for (; t2 ? c2 >= 0 : a2 > c2; c2 += l2) c2 in u2 && (o2 = n2(o2, u2[c2], c2, i2));
      return o2;
    };
  };
  var Hr = { left: Gr(false), right: Gr(true) };
  var Xr = "process" == s(r.process);
  var Vr = Hr.left;
  var Kr = jt$1("reduce");
  var qr = Mt$1("reduce", { 1: 0 });
  It$1({ target: "Array", proto: true, forced: !Kr || !qr || !Xr && fe$1 > 79 && fe$1 < 83 }, { reduce: function(t2) {
    return Vr(this, t2, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
  } }), Er("flat");
  var Qr;
  var Jr;
  var Zr;
  var to$1 = !o(function() {
    return Object.isExtensible(Object.preventExtensions({}));
  });
  var eo$1 = e(function(t2) {
    var e2 = R$1.f, n2 = $$1("meta"), r2 = 0, o2 = Object.isExtensible || function() {
      return true;
    }, i2 = function(t3) {
      e2(t3, n2, { value: { objectID: "O" + ++r2, weakData: {} } });
    }, u2 = t2.exports = { REQUIRED: false, fastKey: function(t3, e3) {
      if (!h(t3)) return "symbol" == typeof t3 ? t3 : ("string" == typeof t3 ? "S" : "P") + t3;
      if (!S(t3, n2)) {
        if (!o2(t3)) return "F";
        if (!e3) return "E";
        i2(t3);
      }
      return t3[n2].objectID;
    }, getWeakData: function(t3, e3) {
      if (!S(t3, n2)) {
        if (!o2(t3)) return true;
        if (!e3) return false;
        i2(t3);
      }
      return t3[n2].weakData;
    }, onFreeze: function(t3) {
      return to$1 && u2.REQUIRED && o2(t3) && !S(t3, n2) && i2(t3), t3;
    } };
    G[n2] = true;
  });
  var no$1 = function(t2, e2) {
    this.stopped = t2, this.result = e2;
  };
  var ro$1 = function(t2, e2, n2) {
    var r2, o2, i2, u2, a2, c2, l2, f2 = n2 && n2.that, s2 = !(!n2 || !n2.AS_ENTRIES), d2 = !(!n2 || !n2.IS_ITERATOR), v2 = !(!n2 || !n2.INTERRUPTED), p2 = lr(e2, f2, 1 + s2 + v2), g2 = function(t3) {
      return r2 && Cr(r2), new no$1(true, t3);
    }, h2 = function(t3) {
      return s2 ? (A$2(t3), v2 ? p2(t3[0], t3[1], g2) : p2(t3[0], t3[1])) : v2 ? p2(t3, g2) : p2(t3);
    };
    if (d2) r2 = t2;
    else {
      if ("function" != typeof (o2 = Nr(t2))) throw TypeError("Target is not iterable");
      if (Dr(o2)) {
        for (i2 = 0, u2 = at(t2.length); u2 > i2; i2++) if ((a2 = h2(t2[i2])) && a2 instanceof no$1) return a2;
        return new no$1(false);
      }
      r2 = o2.call(t2);
    }
    for (c2 = r2.next; !(l2 = c2.call(r2)).done; ) {
      try {
        a2 = h2(l2.value);
      } catch (t3) {
        throw Cr(r2), t3;
      }
      if ("object" == typeof a2 && a2 && a2 instanceof no$1) return a2;
    }
    return new no$1(false);
  };
  var oo$1 = function(t2, e2, n2) {
    if (!(t2 instanceof e2)) throw TypeError("Incorrect " + (n2 ? n2 + " " : "") + "invocation");
    return t2;
  };
  var io$1 = R$1.f;
  var uo$1 = ne("toStringTag");
  var ao$1 = function(t2, e2, n2) {
    t2 && !S(t2 = n2 ? t2 : t2.prototype, uo$1) && io$1(t2, uo$1, { configurable: true, value: e2 });
  };
  var co$1 = Object.setPrototypeOf || ("__proto__" in {} ? function() {
    var t2, e2 = false, n2 = {};
    try {
      (t2 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n2, []), e2 = n2 instanceof Array;
    } catch (t3) {
    }
    return function(n3, r2) {
      return A$2(n3), function(t3) {
        if (!h(t3) && null !== t3) throw TypeError("Can't set " + String(t3) + " as a prototype");
      }(r2), e2 ? t2.call(n3, r2) : n3.__proto__ = r2, n3;
    };
  }() : void 0);
  var lo$1 = function(t2, e2, n2) {
    for (var r2 in e2) Z(t2, r2, e2[r2], n2);
    return t2;
  };
  var fo$1 = !o(function() {
    function t2() {
    }
    return t2.prototype.constructor = null, Object.getPrototypeOf(new t2()) !== t2.prototype;
  });
  var so$1 = Y$1("IE_PROTO");
  var vo$1 = Object.prototype;
  var po$1 = fo$1 ? Object.getPrototypeOf : function(t2) {
    return t2 = Kt$1(t2), S(t2, so$1) ? t2[so$1] : "function" == typeof t2.constructor && t2 instanceof t2.constructor ? t2.constructor.prototype : t2 instanceof Object ? vo$1 : null;
  };
  var go$1 = ne("iterator");
  var ho$1 = false;
  [].keys && ("next" in (Zr = [].keys()) ? (Jr = po$1(po$1(Zr))) !== Object.prototype && (Qr = Jr) : ho$1 = true), (null == Qr || o(function() {
    var t2 = {};
    return Qr[go$1].call(t2) !== t2;
  })) && (Qr = {}), S(Qr, go$1) || I(Qr, go$1, function() {
    return this;
  });
  var yo$1 = { IteratorPrototype: Qr, BUGGY_SAFARI_ITERATORS: ho$1 };
  var mo$1 = yo$1.IteratorPrototype;
  var So$1 = function() {
    return this;
  };
  var xo = yo$1.IteratorPrototype;
  var bo$1 = yo$1.BUGGY_SAFARI_ITERATORS;
  var Eo$1 = ne("iterator");
  var wo$1 = function() {
    return this;
  };
  var Oo$1 = function(t2, e2, n2, r2, o2, i2, u2) {
    !function(t3, e3, n3) {
      var r3 = e3 + " Iterator";
      t3.prototype = Sr(mo$1, { next: l(1, n3) }), ao$1(t3, r3, false), Pr[r3] = So$1;
    }(n2, e2, r2);
    var a2, c2, f2, s2 = function(t3) {
      if (t3 === o2 && h2) return h2;
      if (!bo$1 && t3 in p2) return p2[t3];
      switch (t3) {
        case "keys":
        case "values":
        case "entries":
          return function() {
            return new n2(this, t3);
          };
      }
      return function() {
        return new n2(this);
      };
    }, d2 = e2 + " Iterator", v2 = false, p2 = t2.prototype, g2 = p2[Eo$1] || p2["@@iterator"] || o2 && p2[o2], h2 = !bo$1 && g2 || s2(o2), y2 = "Array" == e2 && p2.entries || g2;
    if (y2 && (a2 = po$1(y2.call(new t2())), xo !== Object.prototype && a2.next && (po$1(a2) !== xo && (co$1 ? co$1(a2, xo) : "function" != typeof a2[Eo$1] && I(a2, Eo$1, wo$1)), ao$1(a2, d2, true))), "values" == o2 && g2 && "values" !== g2.name && (v2 = true, h2 = function() {
      return g2.call(this);
    }), p2[Eo$1] !== h2 && I(p2, Eo$1, h2), Pr[e2] = h2, o2) if (c2 = { values: s2("values"), keys: i2 ? h2 : s2("keys"), entries: s2("entries") }, u2) for (f2 in c2) (bo$1 || v2 || !(f2 in p2)) && Z(p2, f2, c2[f2]);
    else It$1({ target: e2, proto: true, forced: bo$1 || v2 }, c2);
    return c2;
  };
  var To$1 = ne("species");
  var Ao$1 = R$1.f;
  var ko$1 = eo$1.fastKey;
  var Ro$1 = J.set;
  var Io$1 = J.getterFor;
  !function(t2, e2, n2) {
    var i2 = -1 !== t2.indexOf("Map"), u2 = -1 !== t2.indexOf("Weak"), a2 = i2 ? "set" : "add", c2 = r[t2], l2 = c2 && c2.prototype, f2 = c2, s2 = {}, d2 = function(t3) {
      var e3 = l2[t3];
      Z(l2, t3, "add" == t3 ? function(t4) {
        return e3.call(this, 0 === t4 ? 0 : t4), this;
      } : "delete" == t3 ? function(t4) {
        return !(u2 && !h(t4)) && e3.call(this, 0 === t4 ? 0 : t4);
      } : "get" == t3 ? function(t4) {
        return u2 && !h(t4) ? void 0 : e3.call(this, 0 === t4 ? 0 : t4);
      } : "has" == t3 ? function(t4) {
        return !(u2 && !h(t4)) && e3.call(this, 0 === t4 ? 0 : t4);
      } : function(t4, n3) {
        return e3.call(this, 0 === t4 ? 0 : t4, n3), this;
      });
    };
    if (kt$1(t2, "function" != typeof c2 || !(u2 || l2.forEach && !o(function() {
      new c2().entries().next();
    })))) f2 = n2.getConstructor(e2, t2, i2, a2), eo$1.REQUIRED = true;
    else if (kt$1(t2, true)) {
      var v2 = new f2(), p2 = v2[a2](u2 ? {} : -0, 1) != v2, g2 = o(function() {
        v2.has(1);
      }), y2 = Br(function(t3) {
        new c2(t3);
      }), m2 = !u2 && o(function() {
        for (var t3 = new c2(), e3 = 5; e3--; ) t3[a2](e3, e3);
        return !t3.has(-0);
      });
      y2 || ((f2 = e2(function(e3, n3) {
        oo$1(e3, f2, t2);
        var r2 = function(t3, e4, n4) {
          var r3, o2;
          return co$1 && "function" == typeof (r3 = e4.constructor) && r3 !== n4 && h(o2 = r3.prototype) && o2 !== n4.prototype && co$1(t3, o2), t3;
        }(new c2(), e3, f2);
        return null != n3 && ro$1(n3, r2[a2], { that: r2, AS_ENTRIES: i2 }), r2;
      })).prototype = l2, l2.constructor = f2), (g2 || m2) && (d2("delete"), d2("has"), i2 && d2("get")), (m2 || p2) && d2(a2), u2 && l2.clear && delete l2.clear;
    }
    s2[t2] = f2, It$1({ global: true, forced: f2 != c2 }, s2), ao$1(f2, t2), u2 || n2.setStrong(f2, t2, i2);
  }("Set", function(t2) {
    return function() {
      return t2(this, arguments.length ? arguments[0] : void 0);
    };
  }, { getConstructor: function(t2, e2, n2, r2) {
    var o2 = t2(function(t3, u3) {
      oo$1(t3, o2, e2), Ro$1(t3, { type: e2, index: Sr(null), first: void 0, last: void 0, size: 0 }), i || (t3.size = 0), null != u3 && ro$1(u3, t3[r2], { that: t3, AS_ENTRIES: n2 });
    }), u2 = Io$1(e2), a2 = function(t3, e3, n3) {
      var r3, o3, a3 = u2(t3), l2 = c2(t3, e3);
      return l2 ? l2.value = n3 : (a3.last = l2 = { index: o3 = ko$1(e3, true), key: e3, value: n3, previous: r3 = a3.last, next: void 0, removed: false }, a3.first || (a3.first = l2), r3 && (r3.next = l2), i ? a3.size++ : t3.size++, "F" !== o3 && (a3.index[o3] = l2)), t3;
    }, c2 = function(t3, e3) {
      var n3, r3 = u2(t3), o3 = ko$1(e3);
      if ("F" !== o3) return r3.index[o3];
      for (n3 = r3.first; n3; n3 = n3.next) if (n3.key == e3) return n3;
    };
    return lo$1(o2.prototype, { clear: function() {
      for (var t3 = u2(this), e3 = t3.index, n3 = t3.first; n3; ) n3.removed = true, n3.previous && (n3.previous = n3.previous.next = void 0), delete e3[n3.index], n3 = n3.next;
      t3.first = t3.last = void 0, i ? t3.size = 0 : this.size = 0;
    }, delete: function(t3) {
      var e3 = this, n3 = u2(e3), r3 = c2(e3, t3);
      if (r3) {
        var o3 = r3.next, a3 = r3.previous;
        delete n3.index[r3.index], r3.removed = true, a3 && (a3.next = o3), o3 && (o3.previous = a3), n3.first == r3 && (n3.first = o3), n3.last == r3 && (n3.last = a3), i ? n3.size-- : e3.size--;
      }
      return !!r3;
    }, forEach: function(t3) {
      for (var e3, n3 = u2(this), r3 = lr(t3, arguments.length > 1 ? arguments[1] : void 0, 3); e3 = e3 ? e3.next : n3.first; ) for (r3(e3.value, e3.key, this); e3 && e3.removed; ) e3 = e3.previous;
    }, has: function(t3) {
      return !!c2(this, t3);
    } }), lo$1(o2.prototype, n2 ? { get: function(t3) {
      var e3 = c2(this, t3);
      return e3 && e3.value;
    }, set: function(t3, e3) {
      return a2(this, 0 === t3 ? 0 : t3, e3);
    } } : { add: function(t3) {
      return a2(this, t3 = 0 === t3 ? 0 : t3, t3);
    } }), i && Ao$1(o2.prototype, "size", { get: function() {
      return u2(this).size;
    } }), o2;
  }, setStrong: function(t2, e2, n2) {
    var r2 = e2 + " Iterator", o2 = Io$1(e2), u2 = Io$1(r2);
    Oo$1(t2, e2, function(t3, e3) {
      Ro$1(this, { type: r2, target: t3, state: o2(t3), kind: e3, last: void 0 });
    }, function() {
      for (var t3 = u2(this), e3 = t3.kind, n3 = t3.last; n3 && n3.removed; ) n3 = n3.previous;
      return t3.target && (t3.last = n3 = n3 ? n3.next : t3.state.first) ? "keys" == e3 ? { value: n3.key, done: false } : "values" == e3 ? { value: n3.value, done: false } : { value: [n3.key, n3.value], done: false } : (t3.target = void 0, { value: void 0, done: true });
    }, n2 ? "entries" : "values", !n2, true), function(t3) {
      var e3 = nt(t3), n3 = R$1.f;
      i && e3 && !e3[To$1] && n3(e3, To$1, { configurable: true, get: function() {
        return this;
      } });
    }(e2);
  } });
  var jo$1 = Qe.charAt;
  var Co$1 = J.set;
  var Lo$1 = J.getterFor("String Iterator");
  Oo$1(String, "String", function(t2) {
    Co$1(this, { type: "String Iterator", string: String(t2), index: 0 });
  }, function() {
    var t2, e2 = Lo$1(this), n2 = e2.string, r2 = e2.index;
    return r2 >= n2.length ? { value: void 0, done: true } : (t2 = jo$1(n2, r2), e2.index += t2.length, { value: t2, done: false });
  });
  var Po$1 = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 };
  var Mo$1 = J.set;
  var _o$1 = J.getterFor("Array Iterator");
  var Do$1 = Oo$1(Array, "Array", function(t2, e2) {
    Mo$1(this, { type: "Array Iterator", target: g(t2), index: 0, kind: e2 });
  }, function() {
    var t2 = _o$1(this), e2 = t2.target, n2 = t2.kind, r2 = t2.index++;
    return !e2 || r2 >= e2.length ? (t2.target = void 0, { value: void 0, done: true }) : "keys" == n2 ? { value: r2, done: false } : "values" == n2 ? { value: e2[r2], done: false } : { value: [r2, e2[r2]], done: false };
  }, "values");
  Pr.Arguments = Pr.Array, Er("keys"), Er("values"), Er("entries");
  var Uo$1 = ne("iterator");
  var No$1 = ne("toStringTag");
  var Fo$1 = Do$1.values;
  for (var Wo$1 in Po$1) {
    var zo$1 = r[Wo$1], $o$1 = zo$1 && zo$1.prototype;
    if ($o$1) {
      if ($o$1[Uo$1] !== Fo$1) try {
        I($o$1, Uo$1, Fo$1);
      } catch (t2) {
        $o$1[Uo$1] = Fo$1;
      }
      if ($o$1[No$1] || I($o$1, No$1, Wo$1), Po$1[Wo$1]) {
        for (var Bo$1 in Do$1) if ($o$1[Bo$1] !== Do$1[Bo$1]) try {
          I($o$1, Bo$1, Do$1[Bo$1]);
        } catch (t2) {
          $o$1[Bo$1] = Do$1[Bo$1];
        }
      }
    }
  }
  (function() {
    function t2() {
      Wt$1(this, t2);
    }
    return $t$1(t2, null, [{ key: "deduplicate", value: function(t3) {
      return Array.from(new Set(t3));
    } }, { key: "flat", value: function(e2) {
      return e2.reduce(function(e3, n2) {
        var r2 = Array.isArray(n2) ? t2.flat(n2) : n2;
        return e3.concat(r2);
      }, []);
    } }, { key: "find", value: function(t3, e2) {
      return t3.find(e2);
    } }, { key: "findIndex", value: function(t3, e2) {
      return t3.findIndex(e2);
    } }]), t2;
  })();
  (function() {
    function t2() {
      Wt$1(this, t2);
    }
    return $t$1(t2, null, [{ key: "today", value: function() {
      return /* @__PURE__ */ new Date();
    } }]), t2;
  })();
  (function() {
    function t2() {
      Wt$1(this, t2);
    }
    return $t$1(t2, null, [{ key: "range", value: function(t3, e2, n2) {
      return Math.min(Math.max(t3, e2), n2);
    } }, { key: "clamp", value: function(t3, e2, n2) {
      return e2 < n2 ? t3 < e2 ? e2 : t3 > n2 ? n2 : t3 : t3 < n2 ? n2 : t3 > e2 ? e2 : t3;
    } }]), t2;
  })();

  var freeGlobal = typeof global$1 == "object" && global$1 && global$1.Object === Object && global$1;

  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal || freeSelf || Function("return this")();

  var Symbol$1 = root.Symbol;

  var objectProto$a = Object.prototype;
  var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
  var nativeObjectToString$1 = objectProto$a.toString;
  var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : void 0;
  function getRawTag(value) {
    var isOwn = hasOwnProperty$8.call(value, symToStringTag$1), tag = value[symToStringTag$1];
    try {
      value[symToStringTag$1] = void 0;
      var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result;
  }

  var objectProto$9 = Object.prototype;
  var nativeObjectToString = objectProto$9.toString;
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }

  var nullTag = "[object Null]";
  var undefinedTag = "[object Undefined]";
  var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }

  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }

  var isArray = Array.isArray;

  function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }

  function identity(value) {
    return value;
  }

  var asyncTag = "[object AsyncFunction]";
  var funcTag$1 = "[object Function]";
  var genTag = "[object GeneratorFunction]";
  var proxyTag = "[object Proxy]";
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }
    var tag = baseGetTag(value);
    return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  var coreJsData = root["__core-js_shared__"];

  var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }

  var funcProto$2 = Function.prototype;
  var funcToString$2 = funcProto$2.toString;
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString$2.call(func);
      } catch (e) {
      }
      try {
        return func + "";
      } catch (e) {
      }
    }
    return "";
  }

  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var funcProto$1 = Function.prototype;
  var objectProto$8 = Object.prototype;
  var funcToString$1 = funcProto$1.toString;
  var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
  var reIsNative = RegExp(
    "^" + funcToString$1.call(hasOwnProperty$7).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }

  function getValue(object, key) {
    return object == null ? void 0 : object[key];
  }

  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : void 0;
  }

  var objectCreate = Object.create;
  var baseCreate = /* @__PURE__ */ function() {
    function object() {
    }
    return function(proto) {
      if (!isObject(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object();
      object.prototype = void 0;
      return result;
    };
  }();

  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);
      case 1:
        return func.call(thisArg, args[0]);
      case 2:
        return func.call(thisArg, args[0], args[1]);
      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  function copyArray(source, array) {
    var index = -1, length = source.length;
    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }

  var HOT_COUNT = 800;
  var HOT_SPAN = 16;
  var nativeNow = Date.now;
  function shortOut(func) {
    var count = 0, lastCalled = 0;
    return function() {
      var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(void 0, arguments);
    };
  }

  function constant(value) {
    return function() {
      return value;
    };
  }

  var defineProperty = function() {
    try {
      var func = getNative(Object, "defineProperty");
      func({}, "", {});
      return func;
    } catch (e) {
    }
  }();

  var baseSetToString = !defineProperty ? identity : function(func, string) {
    return defineProperty(func, "toString", {
      "configurable": true,
      "enumerable": false,
      "value": constant(string),
      "writable": true
    });
  };

  var setToString = shortOut(baseSetToString);
  var setToString$1 = setToString;

  var MAX_SAFE_INTEGER$1 = 9007199254740991;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER$1 : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }

  function baseAssignValue(object, key, value) {
    if (key == "__proto__" && defineProperty) {
      defineProperty(object, key, {
        "configurable": true,
        "enumerable": true,
        "value": value,
        "writable": true
      });
    } else {
      object[key] = value;
    }
  }

  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }

  var objectProto$7 = Object.prototype;
  var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty$6.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
      baseAssignValue(object, key, value);
    }
  }

  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index = -1, length = props.length;
    while (++index < length) {
      var key = props[index];
      var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
      if (newValue === void 0) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue(object, key, newValue);
      } else {
        assignValue(object, key, newValue);
      }
    }
    return object;
  }

  var nativeMax = Math.max;
  function overRest(func, start, transform) {
    start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
    return function() {
      var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform(array);
      return apply(func, this, otherArgs);
    };
  }

  function baseRest(func, start) {
    return setToString$1(overRest(func, start, identity), func + "");
  }

  var MAX_SAFE_INTEGER = 9007199254740991;
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }

  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }

  function isIterateeCall(value, index, object) {
    if (!isObject(object)) {
      return false;
    }
    var type = typeof index;
    if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
      return eq(object[index], value);
    }
    return false;
  }

  function createAssigner(assigner) {
    return baseRest(function(object, sources) {
      var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
      customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        customizer = length < 3 ? void 0 : customizer;
        length = 1;
      }
      object = Object(object);
      while (++index < length) {
        var source = sources[index];
        if (source) {
          assigner(object, source, index, customizer);
        }
      }
      return object;
    });
  }

  var objectProto$6 = Object.prototype;
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$6;
    return value === proto;
  }

  function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  var argsTag$1 = "[object Arguments]";
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag$1;
  }

  var objectProto$5 = Object.prototype;
  var hasOwnProperty$5 = objectProto$5.hasOwnProperty;
  var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;
  var isArguments = baseIsArguments(/* @__PURE__ */ function() {
    return arguments;
  }()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty$5.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };

  function stubFalse() {
    return false;
  }

  var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
  var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
  var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
  var Buffer$1 = moduleExports$2 ? root.Buffer : void 0;
  var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : void 0;
  var isBuffer = nativeIsBuffer || stubFalse;

  var argsTag = "[object Arguments]";
  var arrayTag = "[object Array]";
  var boolTag = "[object Boolean]";
  var dateTag = "[object Date]";
  var errorTag = "[object Error]";
  var funcTag = "[object Function]";
  var mapTag = "[object Map]";
  var numberTag = "[object Number]";
  var objectTag$1 = "[object Object]";
  var regexpTag = "[object RegExp]";
  var setTag = "[object Set]";
  var stringTag = "[object String]";
  var weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]";
  var dataViewTag = "[object DataView]";
  var float32Tag = "[object Float32Array]";
  var float64Tag = "[object Float64Array]";
  var int8Tag = "[object Int8Array]";
  var int16Tag = "[object Int16Array]";
  var int32Tag = "[object Int32Array]";
  var uint8Tag = "[object Uint8Array]";
  var uint8ClampedTag = "[object Uint8ClampedArray]";
  var uint16Tag = "[object Uint16Array]";
  var uint32Tag = "[object Uint32Array]";
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }

  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
  var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
  var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
  var freeProcess = moduleExports$1 && freeGlobal.process;
  var nodeUtil = function() {
    try {
      var types = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();

  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

  var objectProto$4 = Object.prototype;
  var hasOwnProperty$4 = objectProto$4.hasOwnProperty;
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty$4.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
      (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
      isIndex(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }

  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }

  var objectProto$3 = Object.prototype;
  var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
  function baseKeysIn(object) {
    if (!isObject(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype(object), result = [];
    for (var key in object) {
      if (!(key == "constructor" && (isProto || !hasOwnProperty$3.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }

  function keysIn(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
  }

  var nativeCreate = getNative(Object, "create");

  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }

  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
  var objectProto$2 = Object.prototype;
  var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED$1 ? void 0 : result;
    }
    return hasOwnProperty$2.call(data, key) ? data[key] : void 0;
  }

  var objectProto$1 = Object.prototype;
  var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== void 0 : hasOwnProperty$1.call(data, key);
  }

  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
    return this;
  }

  function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  Hash.prototype.clear = hashClear;
  Hash.prototype["delete"] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;

  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }

  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  var arrayProto = Array.prototype;
  var splice = arrayProto.splice;
  function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }

  function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? void 0 : data[index][1];
  }

  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }

  function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype["delete"] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;

  var Map$1 = getNative(root, "Map");

  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      "hash": new Hash(),
      "map": new (Map$1 || ListCache)(),
      "string": new Hash()
    };
  }

  function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }

  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }

  function mapCacheDelete(key) {
    var result = getMapData(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }

  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }

  function mapCacheSet(key, value) {
    var data = getMapData(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype["delete"] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;

  var getPrototype = overArg(Object.getPrototypeOf, Object);

  var objectTag = "[object Object]";
  var funcProto = Function.prototype;
  var objectProto = Object.prototype;
  var funcToString = funcProto.toString;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var objectCtorString = funcToString.call(Object);
  function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
      return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
  }

  function stackClear() {
    this.__data__ = new ListCache();
    this.size = 0;
  }

  function stackDelete(key) {
    var data = this.__data__, result = data["delete"](key);
    this.size = data.size;
    return result;
  }

  function stackGet(key) {
    return this.__data__.get(key);
  }

  function stackHas(key) {
    return this.__data__.has(key);
  }

  var LARGE_ARRAY_SIZE = 200;
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
      var pairs = data.__data__;
      if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }

  function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }
  Stack.prototype.clear = stackClear;
  Stack.prototype["delete"] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;

  var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
  var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer = moduleExports ? root.Buffer : void 0;
  var allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
  }

  var Uint8Array$1 = root.Uint8Array;

  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
    return result;
  }

  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }

  function initCloneObject(object) {
    return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
  }

  function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
      var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
      while (length--) {
        var key = props[fromRight ? length : ++index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }

  var baseFor = createBaseFor();

  function assignMergeValue(object, key, value) {
    if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
      baseAssignValue(object, key, value);
    }
  }

  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
  }

  function safeGet(object, key) {
    if (key === "constructor" && typeof object[key] === "function") {
      return;
    }
    if (key == "__proto__") {
      return;
    }
    return object[key];
  }

  function toPlainObject(value) {
    return copyObject(value, keysIn(value));
  }

  function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
    if (stacked) {
      assignMergeValue(object, key, stacked);
      return;
    }
    var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
    var isCommon = newValue === void 0;
    if (isCommon) {
      var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
      newValue = srcValue;
      if (isArr || isBuff || isTyped) {
        if (isArray(objValue)) {
          newValue = objValue;
        } else if (isArrayLikeObject(objValue)) {
          newValue = copyArray(objValue);
        } else if (isBuff) {
          isCommon = false;
          newValue = cloneBuffer(srcValue, true);
        } else if (isTyped) {
          isCommon = false;
          newValue = cloneTypedArray(srcValue, true);
        } else {
          newValue = [];
        }
      } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
        newValue = objValue;
        if (isArguments(objValue)) {
          newValue = toPlainObject(objValue);
        } else if (!isObject(objValue) || isFunction(objValue)) {
          newValue = initCloneObject(srcValue);
        }
      } else {
        isCommon = false;
      }
    }
    if (isCommon) {
      stack.set(srcValue, newValue);
      mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
      stack["delete"](srcValue);
    }
    assignMergeValue(object, key, newValue);
  }

  function baseMerge(object, source, srcIndex, customizer, stack) {
    if (object === source) {
      return;
    }
    baseFor(source, function(srcValue, key) {
      stack || (stack = new Stack());
      if (isObject(srcValue)) {
        baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
      } else {
        var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
        if (newValue === void 0) {
          newValue = srcValue;
        }
        assignMergeValue(object, key, newValue);
      }
    }, keysIn);
  }

  var merge = createAssigner(function(object, source, srcIndex) {
    baseMerge(object, source, srcIndex);
  });
  var ie = merge;

  var qe = Object.defineProperty;
  var Ye = (e, t, o) => t in e ? qe(e, t, { enumerable: true, configurable: true, writable: true, value: o }) : e[t] = o;
  var W = (e, t, o) => (Ye(e, typeof t != "symbol" ? t + "" : t, o), o);
  const P$1 = (e) => Math.round(e * 100) / 100;
  let A$1 = class A {
    constructor(t) {
      W(this, "instance");
      W(this, "alphaValue", 0);
      W(this, "redValue", 0);
      W(this, "greenValue", 0);
      W(this, "blueValue", 0);
      W(this, "hueValue", 0);
      W(this, "saturationValue", 0);
      W(this, "brightnessValue", 0);
      W(this, "hslSaturationValue", 0);
      W(this, "lightnessValue", 0);
      W(this, "initAlpha", () => {
        const t2 = this.instance.getAlpha();
        this.alphaValue = Math.min(1, t2) * 100;
      });
      W(this, "initLightness", () => {
        const { s: t2, l: o } = this.instance.toHsl();
        this.hslSaturationValue = P$1(t2), this.lightnessValue = P$1(o);
      });
      W(this, "initRgb", () => {
        const { r: t2, g: o, b: n } = this.instance.toRgb();
        this.redValue = P$1(t2), this.greenValue = P$1(o), this.blueValue = P$1(n);
      });
      W(this, "initHsb", () => {
        const { h: t2, s: o, v: n } = this.instance.toHsv();
        this.hueValue = Math.min(360, Math.ceil(t2)), this.saturationValue = P$1(o), this.brightnessValue = P$1(n);
      });
      W(this, "toHexString", () => this.instance.toHexString());
      W(this, "toRgbString", () => this.instance.toRgbString());
      this.instance = tinycolor(t), this.initRgb(), this.initHsb(), this.initLightness(), this.initAlpha();
    }
    toString(t) {
      return this.instance.toString(t);
    }
    get hex() {
      return this.instance.toHex();
    }
    set hex(t) {
      this.instance = tinycolor(t), this.initHsb(), this.initRgb(), this.initAlpha(), this.initLightness();
    }
    // 色调
    set hue(t) {
      this.saturation === 0 && this.brightness === 0 && (this.saturationValue = 1, this.brightnessValue = 1), this.instance = tinycolor({
        h: P$1(t),
        s: this.saturation,
        v: this.brightness,
        a: this.alphaValue / 100
      }), this.initRgb(), this.initLightness(), this.hueValue = P$1(t);
    }
    get hue() {
      return this.hueValue;
    }
    // 饱和度
    set saturation(t) {
      this.instance = tinycolor({
        h: this.hue,
        s: P$1(t),
        v: this.brightness,
        a: this.alphaValue / 100
      }), this.initRgb(), this.initLightness(), this.saturationValue = P$1(t);
    }
    get saturation() {
      return this.saturationValue;
    }
    // 明度
    set brightness(t) {
      this.instance = tinycolor({
        h: this.hue,
        s: this.saturation,
        v: P$1(t),
        a: this.alphaValue / 100
      }), this.initRgb(), this.initLightness(), this.brightnessValue = P$1(t);
    }
    get brightness() {
      return this.brightnessValue;
    }
    // 亮度
    set lightness(t) {
      this.instance = tinycolor({
        h: this.hue,
        s: this.hslSaturationValue,
        l: P$1(t),
        a: this.alphaValue / 100
      }), this.initRgb(), this.initHsb(), this.lightnessValue = P$1(t);
    }
    get lightness() {
      return this.lightnessValue;
    }
    // red
    set red(t) {
      const o = this.instance.toRgb();
      this.instance = tinycolor({
        ...o,
        r: P$1(t),
        a: this.alphaValue / 100
      }), this.initHsb(), this.initLightness(), this.redValue = P$1(t);
    }
    get red() {
      return this.redValue;
    }
    // green
    set green(t) {
      const o = this.instance.toRgb();
      this.instance = tinycolor({
        ...o,
        g: P$1(t),
        a: this.alphaValue / 100
      }), this.initHsb(), this.initLightness(), this.greenValue = P$1(t);
    }
    get green() {
      return this.greenValue;
    }
    // blue
    set blue(t) {
      const o = this.instance.toRgb();
      this.instance = tinycolor({
        ...o,
        b: P$1(t),
        a: this.alphaValue / 100
      }), this.initHsb(), this.initLightness(), this.blueValue = P$1(t);
    }
    get blue() {
      return this.blueValue;
    }
    // alpha
    set alpha(t) {
      this.instance.setAlpha(t / 100), this.alphaValue = t;
    }
    get alpha() {
      return this.alphaValue;
    }
    get RGB() {
      return [this.red, this.green, this.blue, parseFloat((this.alpha / 100).toFixed(2))];
    }
    get HSB() {
      return [this.hue, this.saturation, this.brightness, parseFloat((this.alpha / 100).toFixed(2))];
    }
    get HSL() {
      return [
        this.hue,
        this.hslSaturationValue,
        this.lightness,
        parseFloat((this.alpha / 100).toFixed(2))
      ];
    }
  };
  function Ae(e, t, o, n) {
    return `rgba(${[e, t, o, n / 100].join(",")})`;
  }
  const ue = (e, t, o) => t < o ? e < t ? t : e > o ? o : e : e < o ? o : e > t ? t : e;
  const fe = "color-history";
  const Ce = 8;
  const q = (e, t) => {
    const o = e.__vccOpts || e;
    for (const [n, i] of t)
      o[n] = i;
    return o;
  };
  const lt = vue.defineComponent({
    name: "Alpha",
    props: {
      color: C$1.instanceOf(A$1),
      size: C$1.oneOf(["small", "default"]).def("default")
    },
    emits: ["change"],
    setup(e, { emit: t }) {
      const o = vue.ref(null), n = vue.ref(null);
      let i = e.color || new A$1();
      const l = vue.reactive({
        red: i.red,
        green: i.green,
        blue: i.blue,
        alpha: i.alpha
      });
      vue.watch(
        () => e.color,
        (g) => {
          g && (i = g, ie(l, {
            red: g.red,
            green: g.green,
            blue: g.blue,
            alpha: g.alpha
          }));
        },
        { deep: true }
      );
      const a = vue.computed(() => {
        const g = Ae(l.red, l.green, l.blue, 0), d = Ae(l.red, l.green, l.blue, 100);
        return {
          background: `linear-gradient(to right, ${g} , ${d})`
        };
      }), r = () => {
        if (o.value && n.value) {
          const g = l.alpha / 100, d = o.value.getBoundingClientRect(), m = n.value.offsetWidth;
          return Math.round(g * (d.width - m) + m / 2);
        }
        return 0;
      }, c = vue.computed(() => ({
        left: r() + "px",
        top: 0
      })), k = (g) => {
        g.target !== o.value && p(g);
      }, p = (g) => {
        if (g.stopPropagation(), o.value && n.value) {
          const d = o.value.getBoundingClientRect(), m = n.value.offsetWidth;
          let b = g.clientX - d.left;
          b = Math.max(m / 2, b), b = Math.min(b, d.width - m / 2);
          const h = Math.round((b - m / 2) / (d.width - m) * 100);
          i.alpha = h, l.alpha = h, t("change", h);
        }
      };
      return tryOnMounted(() => {
        const g = {
          drag: (d) => {
            p(d);
          },
          end: (d) => {
            p(d);
          }
        };
        o.value && n.value && Vn.triggerDragEvent(o.value, g);
      }), { barElement: o, cursorElement: n, getCursorStyle: c, getBackgroundStyle: a, onClickSider: k };
    }
  });
  const st = (e) => (vue.pushScopeId("data-v-18925ba6"), e = e(), vue.popScopeId(), e);
  const it = /* @__PURE__ */ st(() => /* @__PURE__ */ vue.createElementVNode("div", { class: "vc-alpha-slider__bar-handle" }, null, -1));
  const ct = [
    it
  ];
  function ut(e, t, o, n, i, l) {
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(["vc-alpha-slider", "transparent", { "small-slider": e.size === "small" }])
    }, [
      vue.createElementVNode("div", {
        ref: "barElement",
        class: "vc-alpha-slider__bar",
        style: vue.normalizeStyle(e.getBackgroundStyle),
        onClick: t[0] || (t[0] = (...a) => e.onClickSider && e.onClickSider(...a))
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["vc-alpha-slider__bar-pointer", { "small-bar": e.size === "small" }]),
          ref: "cursorElement",
          style: vue.normalizeStyle(e.getCursorStyle)
        }, ct, 6)
      ], 4)
    ], 2);
  }
  const ve = /* @__PURE__ */ q(lt, [["render", ut], ["__scopeId", "data-v-18925ba6"]]);
  const dt = [
    // 第一行
    [
      "#fcc02e",
      "#f67c01",
      "#e64a19",
      "#d81b43",
      "#8e24aa",
      "#512da7",
      "#1f87e8",
      "#008781",
      "#05a045"
    ],
    // 第二行
    [
      "#fed835",
      "#fb8c00",
      "#f5511e",
      "#eb1d4e",
      "#9c28b1",
      "#5d35b0",
      "#2097f3",
      "#029688",
      "#4cb050"
    ],
    // 第三行
    [
      "#ffeb3c",
      "#ffa727",
      "#fe5722",
      "#eb4165",
      "#aa47bc",
      "#673bb7",
      "#42a5f6",
      "#26a59a",
      "#83c683"
    ],
    // 第四行
    [
      "#fff176",
      "#ffb74e",
      "#ff8a66",
      "#f1627e",
      "#b968c7",
      "#7986cc",
      "#64b5f6",
      "#80cbc4",
      "#a5d6a7"
    ],
    // 第五行
    [
      "#fff59c",
      "#ffcc80",
      "#ffab91",
      "#fb879e",
      "#cf93d9",
      "#9ea8db",
      "#90caf8",
      "#b2dfdc",
      "#c8e6ca"
    ],
    // 最后一行
    [
      "transparent",
      "#ffffff",
      "#dedede",
      "#a9a9a9",
      "#4b4b4b",
      "#353535",
      "#212121",
      "#000000",
      "advance"
    ]
  ];
  const gt = vue.defineComponent({
    name: "Palette",
    emits: ["change"],
    setup(e, { emit: t }) {
      return { palettes: dt, computedBgStyle: (i) => i === "transparent" ? i : i === "advance" ? {} : { background: tinycolor(i).toRgbString() }, onColorChange: (i) => {
        t("change", i);
      } };
    }
  });
  const ht = { class: "vc-compact" };
  const pt = ["onClick"];
  function ft(e, t, o, n, i, l) {
    return vue.openBlock(), vue.createElementBlock("div", ht, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(e.palettes, (a, r) => (vue.openBlock(), vue.createElementBlock("div", {
        key: r,
        class: "vc-compact__row"
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(a, (c, k) => (vue.openBlock(), vue.createElementBlock("div", {
          key: k,
          class: "vc-compact__color-cube--wrap",
          onClick: (p) => e.onColorChange(c)
        }, [
          vue.createElementVNode("div", {
            class: vue.normalizeClass([
              "vc-compact__color_cube",
              {
                advance: c === "advance",
                transparent: c === "transparent"
              }
            ]),
            style: vue.normalizeStyle(e.computedBgStyle(c))
          }, null, 6)
        ], 8, pt))), 128))
      ]))), 128))
    ]);
  }
  const Ke = /* @__PURE__ */ q(gt, [["render", ft], ["__scopeId", "data-v-b969fd48"]]);
  const Ct = vue.defineComponent({
    name: "Board",
    props: {
      color: C$1.instanceOf(A$1),
      round: C$1.bool.def(false),
      hide: C$1.bool.def(true)
    },
    emits: ["change"],
    setup(e, { emit: t }) {
      var y, f, w;
      const o = vue.getCurrentInstance(), n = {
        h: ((y = e.color) == null ? void 0 : y.hue) || 0,
        s: 1,
        v: 1
      }, i = new A$1(n).toHexString(), l = vue.reactive({
        hueColor: i,
        saturation: ((f = e.color) == null ? void 0 : f.saturation) || 0,
        brightness: ((w = e.color) == null ? void 0 : w.brightness) || 0
      }), a = vue.ref(0), r = vue.ref(0), c = vue.ref(), k = vue.computed(() => ({
        top: a.value + "px",
        left: r.value + "px"
      })), p = () => {
        if (o) {
          const S = o.vnode.el;
          r.value = l.saturation * (S == null ? void 0 : S.clientWidth), a.value = (1 - l.brightness) * (S == null ? void 0 : S.clientHeight);
        }
      };
      let g = false;
      const d = (S) => {
        g = true, h(S);
      }, m = (S) => {
        g && h(S);
      }, b = () => {
        g = false;
      }, h = (S) => {
        if (o) {
          const F = o.vnode.el, E = F == null ? void 0 : F.getBoundingClientRect();
          let L = S.clientX - E.left, U = S.clientY - E.top;
          L = ue(L, 0, E.width), U = ue(U, 0, E.height);
          const J = L / E.width, X = ue(-(U / E.height) + 1, 0, 1);
          r.value = L, a.value = U, l.saturation = J, l.brightness = X, t("change", J, X);
        }
      };
      return tryOnMounted(() => {
        o && o.vnode.el && c.value && vue.nextTick(() => {
          p();
        });
      }), whenever(
        () => e.color,
        (S) => {
          ie(l, {
            hueColor: new A$1({ h: S.hue, s: 1, v: 1 }).toHexString(),
            saturation: S.saturation,
            brightness: S.brightness
          }), p();
        },
        { deep: true }
      ), { state: l, cursorElement: c, getCursorStyle: k, onClickBoard: d, onDrag: m, onDragEnd: b };
    }
  });
  const be = (e) => (vue.pushScopeId("data-v-7f0cdcdf"), e = e(), vue.popScopeId(), e);
  const vt = /* @__PURE__ */ be(() => /* @__PURE__ */ vue.createElementVNode("div", { class: "vc-saturation__white" }, null, -1));
  const bt = /* @__PURE__ */ be(() => /* @__PURE__ */ vue.createElementVNode("div", { class: "vc-saturation__black" }, null, -1));
  const yt = /* @__PURE__ */ be(() => /* @__PURE__ */ vue.createElementVNode("div", null, null, -1));
  const _t = [
    yt
  ];
  function mt(e, t, o, n, i, l) {
    return vue.openBlock(), vue.createElementBlock("div", {
      ref: "boardElement",
      class: vue.normalizeClass(["vc-saturation", { "vc-saturation__chrome": e.round, "vc-saturation__hidden": e.hide }]),
      style: vue.normalizeStyle({ backgroundColor: e.state.hueColor }),
      onMousedown: t[0] || (t[0] = (...a) => e.onClickBoard && e.onClickBoard(...a)),
      onMousemove: t[1] || (t[1] = (...a) => e.onDrag && e.onDrag(...a)),
      onMouseup: t[2] || (t[2] = (...a) => e.onDragEnd && e.onDragEnd(...a))
    }, [
      vt,
      bt,
      vue.createElementVNode("div", {
        class: "vc-saturation__cursor",
        ref: "cursorElement",
        style: vue.normalizeStyle(e.getCursorStyle)
      }, _t, 4)
    ], 38);
  }
  const ye = /* @__PURE__ */ q(Ct, [["render", mt], ["__scopeId", "data-v-7f0cdcdf"]]);
  const St = vue.defineComponent({
    name: "Hue",
    props: {
      color: C$1.instanceOf(A$1),
      size: C$1.oneOf(["small", "default"]).def("default")
    },
    emits: ["change"],
    setup(e, { emit: t }) {
      const o = vue.ref(null), n = vue.ref(null);
      let i = e.color || new A$1();
      const l = vue.reactive({
        hue: i.hue || 0
      });
      vue.watch(
        () => e.color,
        (p) => {
          p && (i = p, ie(l, { hue: i.hue }));
        },
        { deep: true }
      );
      const a = () => {
        if (o.value && n.value) {
          const p = o.value.getBoundingClientRect(), g = n.value.offsetWidth;
          return l.hue === 360 ? p.width - g / 2 : l.hue % 360 * (p.width - g) / 360 + g / 2;
        }
        return 0;
      }, r = vue.computed(() => ({
        left: a() + "px",
        top: 0
      })), c = (p) => {
        p.target !== o.value && k(p);
      }, k = (p) => {
        if (p.stopPropagation(), o.value && n.value) {
          const g = o.value.getBoundingClientRect(), d = n.value.offsetWidth;
          let m = p.clientX - g.left;
          m = Math.min(m, g.width - d / 2), m = Math.max(d / 2, m);
          const b = Math.round((m - d / 2) / (g.width - d) * 360);
          i.hue = b, l.hue = b, t("change", b);
        }
      };
      return tryOnMounted(() => {
        const p = {
          drag: (g) => {
            k(g);
          },
          end: (g) => {
            k(g);
          }
        };
        o.value && n.value && Vn.triggerDragEvent(o.value, p);
      }), { barElement: o, cursorElement: n, getCursorStyle: r, onClickSider: c };
    }
  });
  const kt = (e) => (vue.pushScopeId("data-v-e1a08576"), e = e(), vue.popScopeId(), e);
  const $t = /* @__PURE__ */ kt(() => /* @__PURE__ */ vue.createElementVNode("div", { class: "vc-hue-slider__bar-handle" }, null, -1));
  const wt = [
    $t
  ];
  function Bt(e, t, o, n, i, l) {
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(["vc-hue-slider", { "small-slider": e.size === "small" }])
    }, [
      vue.createElementVNode("div", {
        ref: "barElement",
        class: "vc-hue-slider__bar",
        onClick: t[0] || (t[0] = (...a) => e.onClickSider && e.onClickSider(...a))
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["vc-hue-slider__bar-pointer", { "small-bar": e.size === "small" }]),
          ref: "cursorElement",
          style: vue.normalizeStyle(e.getCursorStyle)
        }, wt, 6)
      ], 512)
    ], 2);
  }
  const _e = /* @__PURE__ */ q(St, [["render", Bt], ["__scopeId", "data-v-e1a08576"]]);
  const Ht = vue.defineComponent({
    name: "Lightness",
    props: {
      color: C$1.instanceOf(A$1),
      size: C$1.oneOf(["small", "default"]).def("default")
    },
    emits: ["change"],
    setup(e, { emit: t }) {
      const o = vue.ref(null), n = vue.ref(null);
      let i = e.color || new A$1();
      const [l, a, r] = i.HSL, c = vue.reactive({
        hue: l,
        saturation: a,
        lightness: r
      });
      vue.watch(
        () => e.color,
        (b) => {
          if (b) {
            i = b;
            const [h, y, f] = i.HSL;
            ie(c, {
              hue: h,
              saturation: y,
              lightness: f
            });
          }
        },
        { deep: true }
      );
      const k = vue.computed(() => {
        const b = tinycolor({
          h: c.hue,
          s: c.saturation,
          l: 0.8
        }).toPercentageRgbString(), h = tinycolor({
          h: c.hue,
          s: c.saturation,
          l: 0.6
        }).toPercentageRgbString(), y = tinycolor({
          h: c.hue,
          s: c.saturation,
          l: 0.4
        }).toPercentageRgbString(), f = tinycolor({
          h: c.hue,
          s: c.saturation,
          l: 0.2
        }).toPercentageRgbString();
        return {
          background: [
            `linear-gradient(to right, rgb(255, 255, 255), ${b}, ${h}, ${y}, ${f}, rgb(0, 0, 0))`,
            `-webkit-linear-gradient(left, rgb(255, 255, 255), ${b}, ${h}, ${y}, ${f}, rgb(0, 0, 0))`,
            `-moz-linear-gradient(left, rgb(255, 255, 255), ${b}, ${h}, ${y}, ${f}, rgb(0, 0, 0))`,
            `-ms-linear-gradient(left, rgb(255, 255, 255), ${b}, ${h}, ${y}, ${f}, rgb(0, 0, 0))`
          ]
        };
      }), p = () => {
        if (o.value && n.value) {
          const b = c.lightness, h = o.value.getBoundingClientRect(), y = n.value.offsetWidth;
          return (1 - b) * (h.width - y) + y / 2;
        }
        return 0;
      }, g = vue.computed(() => ({
        left: p() + "px",
        top: 0
      })), d = (b) => {
        b.target !== o.value && m(b);
      }, m = (b) => {
        if (b.stopPropagation(), o.value && n.value) {
          const h = o.value.getBoundingClientRect(), y = n.value.offsetWidth;
          let f = b.clientX - h.left;
          f = Math.max(y / 2, f), f = Math.min(f, h.width - y / 2);
          const w = 1 - (f - y / 2) / (h.width - y);
          i.lightness = w, t("change", w);
        }
      };
      return tryOnMounted(() => {
        const b = {
          drag: (h) => {
            m(h);
          },
          end: (h) => {
            m(h);
          }
        };
        o.value && n.value && Vn.triggerDragEvent(o.value, b);
      }), { barElement: o, cursorElement: n, getCursorStyle: g, getBackgroundStyle: k, onClickSider: d };
    }
  });
  const Rt = (e) => (vue.pushScopeId("data-v-94a50a9e"), e = e(), vue.popScopeId(), e);
  const At = /* @__PURE__ */ Rt(() => /* @__PURE__ */ vue.createElementVNode("div", { class: "vc-lightness-slider__bar-handle" }, null, -1));
  const Pt = [
    At
  ];
  function Vt(e, t, o, n, i, l) {
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(["vc-lightness-slider", { "small-slider": e.size === "small" }])
    }, [
      vue.createElementVNode("div", {
        ref: "barElement",
        class: "vc-lightness-slider__bar",
        style: vue.normalizeStyle(e.getBackgroundStyle),
        onClick: t[0] || (t[0] = (...a) => e.onClickSider && e.onClickSider(...a))
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["vc-lightness-slider__bar-pointer", { "small-bar": e.size === "small" }]),
          ref: "cursorElement",
          style: vue.normalizeStyle(e.getCursorStyle)
        }, Pt, 6)
      ], 4)
    ], 2);
  }
  const Le = /* @__PURE__ */ q(Ht, [["render", Vt], ["__scopeId", "data-v-94a50a9e"]]);
  const Mt = vue.defineComponent({
    name: "History",
    props: {
      colors: C$1.arrayOf(String).def(() => []),
      round: C$1.bool.def(false)
    },
    emits: ["change"],
    setup(e, { emit: t }) {
      return { onColorSelect: (n) => {
        t("change", n);
      } };
    }
  });
  const Et = {
    key: 0,
    class: "vc-colorPicker__record"
  };
  const It = { class: "color-list" };
  const Kt = ["onClick"];
  function Lt(e, t, o, n, i, l) {
    return e.colors && e.colors.length > 0 ? (vue.openBlock(), vue.createElementBlock("div", Et, [
      vue.createElementVNode("div", It, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(e.colors, (a, r) => (vue.openBlock(), vue.createElementBlock("div", {
          key: r,
          class: vue.normalizeClass(["color-item", "transparent", { "color-item__round": e.round }]),
          onClick: (c) => e.onColorSelect(a)
        }, [
          vue.createElementVNode("div", {
            class: "color-item__display",
            style: vue.normalizeStyle({ backgroundColor: a })
          }, null, 4)
        ], 10, Kt))), 128))
      ])
    ])) : vue.createCommentVNode("", true);
  }
  const me = /* @__PURE__ */ q(Mt, [["render", Lt], ["__scopeId", "data-v-0f657238"]]);
  const Nt = vue.defineComponent({
    name: "Display",
    props: {
      color: C$1.instanceOf(A$1),
      disableAlpha: C$1.bool.def(false)
    },
    emits: ["update:color", "change"],
    setup(e, { emit: t }) {
      var m, b, h, y;
      const { copy: o, copied: n, isSupported: i } = useClipboard(), l = vue.ref("hex"), a = vue.reactive({
        color: e.color,
        hex: (m = e.color) == null ? void 0 : m.hex,
        alpha: Math.round(((b = e.color) == null ? void 0 : b.alpha) || 100),
        rgba: (h = e.color) == null ? void 0 : h.RGB,
        previewBgColor: (y = e.color) == null ? void 0 : y.toRgbString()
      }), r = vue.computed(() => ({
        background: a.previewBgColor
      })), c = () => {
        l.value = l.value === "rgba" ? "hex" : "rgba";
      }, k = useDebounceFn((f) => {
        if (!f.target.value)
          return;
        let w = parseInt(f.target.value.replace("%", ""));
        w > 100 && (f.target.value = "100", w = 100), w < 0 && (f.target.value = "0", w = 0), isNaN(w) && (f.target.value = "100", w = 100), !isNaN(w) && a.color && (a.color.alpha = w), t("change", a.color);
      }, 300), p = useDebounceFn((f, w) => {
        if (a.color) {
          if (l.value === "hex") {
            const S = f.target.value.replace("#", "");
            tinycolor(S).isValid() ? [3, 4].includes(S.length) && (a.color.hex = S) : a.color.hex = "000000", t("change", a.color);
          } else if (l.value === "rgba" && w === 3 && f.target.value.toString() === "0." && a.rgba) {
            a.rgba[w] = f.target.value;
            const [S, F, E, L] = a.rgba;
            a.color.hex = tinycolor({ r: S, g: F, b: E }).toHex(), a.color.alpha = Math.round(L * 100), t("change", a.color);
          }
        }
      }, 100), g = useDebounceFn((f, w) => {
        if (f.target.value) {
          if (l.value === "hex") {
            const S = f.target.value.replace("#", "");
            tinycolor(S).isValid() && a.color && [6, 8].includes(S.length) && (a.color.hex = S);
          } else if (w !== void 0 && a.rgba && a.color) {
            if (f.target.value < 0 && (f.target.value = 0), w === 3 && ((f.target.value > 1 || isNaN(f.target.value)) && (f.target.value = 1), f.target.value.toString() === "0."))
              return;
            w < 3 && f.target.value > 255 && (f.target.value = 255), a.rgba[w] = f.target.value;
            const [S, F, E, L] = a.rgba;
            a.color.hex = tinycolor({ r: S, g: F, b: E }).toHex(), a.color.alpha = Math.round(L * 100);
          }
          t("change", a.color);
        }
      }, 300), d = () => {
        if (i && a.color) {
          const f = l.value === "hex" ? a.color.toString(a.color.alpha === 100 ? "hex6" : "hex8") : a.color.toRgbString();
          o(f || "");
        }
      };
      return whenever(
        () => e.color,
        (f) => {
          f && (a.color = f, a.alpha = Math.round(a.color.alpha), a.hex = a.color.hex, a.rgba = a.color.RGB);
        },
        { deep: true }
      ), whenever(
        () => a.color,
        () => {
          a.color && (a.previewBgColor = a.color.toRgbString());
        },
        { deep: true }
      ), {
        state: a,
        getBgColorStyle: r,
        inputType: l,
        copied: n,
        onInputTypeChange: c,
        onAlphaBlur: k,
        onInputChange: g,
        onBlurChange: p,
        onCopyColorStr: d
      };
    }
  });
  const Wt = { class: "vc-display" };
  const Dt = { class: "vc-current-color vc-transparent" };
  const Tt = {
    key: 0,
    class: "copy-text"
  };
  const Ot = {
    key: 0,
    style: { display: "flex", flex: "1", gap: "4px", height: "100%" }
  };
  const zt = { class: "vc-color-input" };
  const Gt = {
    key: 0,
    class: "vc-alpha-input"
  };
  const Ft = ["value"];
  const Xt = {
    key: 1,
    style: { display: "flex", flex: "1", gap: "4px", height: "100%" }
  };
  const qt = ["value", "onInput", "onBlur"];
  function Yt(e, t, o, n, i, l) {
    return vue.openBlock(), vue.createElementBlock("div", Wt, [
      vue.createElementVNode("div", Dt, [
        vue.createElementVNode("div", {
          class: "color-cube",
          style: vue.normalizeStyle(e.getBgColorStyle),
          onClick: t[0] || (t[0] = (...a) => e.onCopyColorStr && e.onCopyColorStr(...a))
        }, [
          e.copied ? (vue.openBlock(), vue.createElementBlock("span", Tt, "Copied!")) : vue.createCommentVNode("", true)
        ], 4)
      ]),
      e.inputType === "hex" ? (vue.openBlock(), vue.createElementBlock("div", Ot, [
        vue.createElementVNode("div", zt, [
          vue.withDirectives(vue.createElementVNode("input", {
            "onUpdate:modelValue": t[1] || (t[1] = (a) => e.state.hex = a),
            maxlength: "8",
            onInput: t[2] || (t[2] = (...a) => e.onInputChange && e.onInputChange(...a)),
            onBlur: t[3] || (t[3] = (...a) => e.onBlurChange && e.onBlurChange(...a))
          }, null, 544), [
            [vue.vModelText, e.state.hex]
          ])
        ]),
        e.disableAlpha ? vue.createCommentVNode("", true) : (vue.openBlock(), vue.createElementBlock("div", Gt, [
          vue.createElementVNode("input", {
            class: "vc-alpha-input__inner",
            value: e.state.alpha,
            onInput: t[4] || (t[4] = (...a) => e.onAlphaBlur && e.onAlphaBlur(...a))
          }, null, 40, Ft),
          vue.createTextVNode("% ")
        ]))
      ])) : e.state.rgba ? (vue.openBlock(), vue.createElementBlock("div", Xt, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(e.state.rgba, (a, r) => (vue.openBlock(), vue.createElementBlock("div", {
          class: "vc-color-input",
          key: r
        }, [
          vue.createElementVNode("input", {
            value: a,
            onInput: (c) => e.onInputChange(c, r),
            onBlur: (c) => e.onBlurChange(c, r)
          }, null, 40, qt)
        ]))), 128))
      ])) : vue.createCommentVNode("", true),
      vue.createElementVNode("div", {
        class: "vc-input-toggle",
        onClick: t[5] || (t[5] = (...a) => e.onInputTypeChange && e.onInputTypeChange(...a))
      }, vue.toDisplayString(e.inputType), 1)
    ]);
  }
  const Se = /* @__PURE__ */ q(Nt, [["render", Yt], ["__scopeId", "data-v-7334ac20"]]);
  const Ut = vue.defineComponent({
    name: "FkColorPicker",
    components: { Display: Se, Alpha: ve, Palette: Ke, Board: ye, Hue: _e, Lightness: Le, History: me },
    props: {
      color: C$1.instanceOf(A$1),
      disableHistory: C$1.bool.def(false),
      roundHistory: C$1.bool.def(false),
      disableAlpha: C$1.bool.def(false)
    },
    emits: ["update:color", "change", "advanceChange"],
    setup(e, { emit: t }) {
      const o = e.color || new A$1(), n = vue.reactive({
        color: o,
        hex: o.toHexString(),
        rgb: o.toRgbString()
      }), i = vue.ref(false), l = vue.computed(() => ({ background: n.rgb })), a = () => {
        i.value = false, t("advanceChange", false);
      }, r = useLocalStorage(fe, [], {}), c = useDebounceFn(() => {
        if (e.disableHistory)
          return;
        const h = n.color.toRgbString();
        if (r.value = r.value.filter((y) => !tinycolor.equals(y, h)), !r.value.includes(h)) {
          for (; r.value.length > Ce; )
            r.value.pop();
          r.value.unshift(h);
        }
      }, 500), k = (h) => {
        h === "advance" ? (i.value = true, t("advanceChange", true)) : (n.color.hex = h, t("advanceChange", false));
      }, p = (h) => {
        n.color.alpha = h;
      }, g = (h) => {
        n.color.hue = h;
      }, d = (h, y) => {
        n.color.saturation = h, n.color.brightness = y;
      }, m = (h) => {
        n.color.lightness = h;
      }, b = (h) => {
        const f = h.target.value.replace("#", "");
        tinycolor(f).isValid() && (n.color.hex = f);
      };
      return whenever(
        () => e.color,
        (h) => {
          h && (n.color = h);
        },
        { deep: true }
      ), whenever(
        () => n.color,
        () => {
          n.hex = n.color.hex, n.rgb = n.color.toRgbString(), c(), t("update:color", n.color), t("change", n.color);
        },
        { deep: true }
      ), {
        state: n,
        advancePanelShow: i,
        onBack: a,
        onCompactChange: k,
        onAlphaChange: p,
        onHueChange: g,
        onBoardChange: d,
        onLightChange: m,
        onInputChange: b,
        previewStyle: l,
        historyColors: r
      };
    }
  });
  const jt = (e) => (vue.pushScopeId("data-v-48e3c224"), e = e(), vue.popScopeId(), e);
  const Zt = { class: "vc-fk-colorPicker" };
  const Jt = { class: "vc-fk-colorPicker__inner" };
  const Qt = { class: "vc-fk-colorPicker__header" };
  const xt = /* @__PURE__ */ jt(() => /* @__PURE__ */ vue.createElementVNode("div", { class: "back" }, null, -1));
  const eo = [
    xt
  ];
  function to(e, t, o, n, i, l) {
    const a = vue.resolveComponent("Palette"), r = vue.resolveComponent("Board"), c = vue.resolveComponent("Hue"), k = vue.resolveComponent("Lightness"), p = vue.resolveComponent("Alpha"), g = vue.resolveComponent("Display"), d = vue.resolveComponent("History");
    return vue.openBlock(), vue.createElementBlock("div", Zt, [
      vue.createElementVNode("div", Jt, [
        vue.createElementVNode("div", Qt, [
          e.advancePanelShow ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 0,
            style: { cursor: "pointer" },
            onClick: t[0] || (t[0] = (...m) => e.onBack && e.onBack(...m))
          }, eo)) : vue.createCommentVNode("", true)
        ]),
        e.advancePanelShow ? vue.createCommentVNode("", true) : (vue.openBlock(), vue.createBlock(a, {
          key: 0,
          onChange: e.onCompactChange
        }, null, 8, ["onChange"])),
        e.advancePanelShow ? (vue.openBlock(), vue.createBlock(r, {
          key: 1,
          color: e.state.color,
          onChange: e.onBoardChange
        }, null, 8, ["color", "onChange"])) : vue.createCommentVNode("", true),
        e.advancePanelShow ? (vue.openBlock(), vue.createBlock(c, {
          key: 2,
          color: e.state.color,
          onChange: e.onHueChange
        }, null, 8, ["color", "onChange"])) : vue.createCommentVNode("", true),
        e.advancePanelShow ? vue.createCommentVNode("", true) : (vue.openBlock(), vue.createBlock(k, {
          key: 3,
          color: e.state.color,
          onChange: e.onLightChange
        }, null, 8, ["color", "onChange"])),
        e.disableAlpha ? vue.createCommentVNode("", true) : (vue.openBlock(), vue.createBlock(p, {
          key: 4,
          color: e.state.color,
          onChange: e.onAlphaChange
        }, null, 8, ["color", "onChange"])),
        vue.createVNode(g, {
          color: e.state.color,
          "disable-alpha": e.disableAlpha
        }, null, 8, ["color", "disable-alpha"]),
        e.disableHistory ? vue.createCommentVNode("", true) : (vue.openBlock(), vue.createBlock(d, {
          key: 5,
          round: e.roundHistory,
          colors: e.historyColors,
          onChange: e.onCompactChange
        }, null, 8, ["round", "colors", "onChange"]))
      ])
    ]);
  }
  const Pe = /* @__PURE__ */ q(Ut, [["render", to], ["__scopeId", "data-v-48e3c224"]]);
  const oo = vue.defineComponent({
    name: "ChromeColorPicker",
    components: { Display: Se, Alpha: ve, Board: ye, Hue: _e, History: me },
    props: {
      color: C$1.instanceOf(A$1),
      disableHistory: C$1.bool.def(false),
      roundHistory: C$1.bool.def(false),
      disableAlpha: C$1.bool.def(false)
    },
    emits: ["update:color", "change"],
    setup(e, { emit: t }) {
      const o = e.color || new A$1(), n = vue.reactive({
        color: o,
        hex: o.toHexString(),
        rgb: o.toRgbString()
      }), i = vue.computed(() => ({ background: n.rgb })), l = useLocalStorage(fe, [], {}), a = useDebounceFn(() => {
        if (e.disableHistory)
          return;
        const d = n.color.toRgbString();
        if (l.value = l.value.filter((m) => !tinycolor.equals(m, d)), !l.value.includes(d)) {
          for (; l.value.length > Ce; )
            l.value.pop();
          l.value.unshift(d);
        }
      }, 500), r = (d) => {
        n.color.alpha = d;
      }, c = (d) => {
        n.color.hue = d;
      }, k = (d) => {
        d.hex !== void 0 && (n.color.hex = d.hex), d.alpha !== void 0 && (n.color.alpha = d.alpha);
      }, p = (d, m) => {
        n.color.saturation = d, n.color.brightness = m;
      }, g = (d) => {
        d !== "advance" && (n.color.hex = d);
      };
      return whenever(
        () => e.color,
        (d) => {
          d && (n.color = d);
        },
        { deep: true }
      ), whenever(
        () => n.color,
        () => {
          n.hex = n.color.hex, n.rgb = n.color.toRgbString(), a(), t("update:color", n.color), t("change", n.color);
        },
        { deep: true }
      ), {
        state: n,
        previewStyle: i,
        historyColors: l,
        onAlphaChange: r,
        onHueChange: c,
        onBoardChange: p,
        onInputChange: k,
        onCompactChange: g
      };
    }
  });
  const no = { class: "vc-chrome-colorPicker" };
  const ao = { class: "vc-chrome-colorPicker-body" };
  const ro = { class: "chrome-controls" };
  const lo = { class: "chrome-sliders" };
  function so(e, t, o, n, i, l) {
    const a = vue.resolveComponent("Board"), r = vue.resolveComponent("Hue"), c = vue.resolveComponent("Alpha"), k = vue.resolveComponent("Display"), p = vue.resolveComponent("History");
    return vue.openBlock(), vue.createElementBlock("div", no, [
      vue.createVNode(a, {
        round: true,
        hide: false,
        color: e.state.color,
        onChange: e.onBoardChange
      }, null, 8, ["color", "onChange"]),
      vue.createElementVNode("div", ao, [
        vue.createElementVNode("div", ro, [
          vue.createElementVNode("div", lo, [
            vue.createVNode(r, {
              size: "small",
              color: e.state.color,
              onChange: e.onHueChange
            }, null, 8, ["color", "onChange"]),
            e.disableAlpha ? vue.createCommentVNode("", true) : (vue.openBlock(), vue.createBlock(c, {
              key: 0,
              size: "small",
              color: e.state.color,
              onChange: e.onAlphaChange
            }, null, 8, ["color", "onChange"]))
          ])
        ]),
        vue.createVNode(k, {
          color: e.state.color,
          "disable-alpha": e.disableAlpha
        }, null, 8, ["color", "disable-alpha"]),
        e.disableHistory ? vue.createCommentVNode("", true) : (vue.openBlock(), vue.createBlock(p, {
          key: 0,
          round: e.roundHistory,
          colors: e.historyColors,
          onChange: e.onCompactChange
        }, null, 8, ["round", "colors", "onChange"]))
      ])
    ]);
  }
  const Ve = /* @__PURE__ */ q(oo, [["render", so], ["__scopeId", "data-v-2611d66c"]]);
  const ke = "Vue3ColorPickerProvider";
  const io = (e, t) => {
    const o = e.getBoundingClientRect(), n = o.left + o.width / 2, i = o.top + o.height / 2, l = Math.abs(n - t.clientX), a = Math.abs(i - t.clientY), r = Math.sqrt(Math.pow(l, 2) + Math.pow(a, 2)), c = a / r, k = Math.acos(c);
    let p = Math.floor(180 / (Math.PI / k));
    return t.clientX > n && t.clientY > i && (p = 180 - p), t.clientX == n && t.clientY > i && (p = 180), t.clientX > n && t.clientY == i && (p = 90), t.clientX < n && t.clientY > i && (p = 180 + p), t.clientX < n && t.clientY == i && (p = 270), t.clientX < n && t.clientY < i && (p = 360 - p), p;
  };
  let de = false;
  const co = (e, t) => {
    const o = function(i) {
      var l;
      (l = t.drag) == null || l.call(t, i);
    }, n = function(i) {
      var l;
      document.removeEventListener("mousemove", o, false), document.removeEventListener("mouseup", n, false), document.onselectstart = null, document.ondragstart = null, de = false, (l = t.end) == null || l.call(t, i);
    };
    e && e.addEventListener("mousedown", (i) => {
      var l;
      de || (document.onselectstart = () => false, document.ondragstart = () => false, document.addEventListener("mousemove", o, false), document.addEventListener("mouseup", n, false), de = true, (l = t.start) == null || l.call(t, i));
    });
  };
  const uo = {
    angle: {
      type: Number,
      default: 0
    },
    size: {
      type: Number,
      default: 16,
      validator: (e) => e >= 16
    },
    borderWidth: {
      type: Number,
      default: 1,
      validator: (e) => e >= 1
    },
    borderColor: {
      type: String,
      default: "#666"
    }
  };
  const go = vue.defineComponent({
    name: "Angle",
    props: uo,
    emits: ["update:angle", "change"],
    setup(e, {
      emit: t
    }) {
      const o = vue.ref(null), n = vue.ref(0);
      vue.watch(() => e.angle, (r) => {
        n.value = r;
      });
      const i = () => {
        let r = Number(n.value);
        isNaN(r) || (r = r > 360 || r < 0 ? e.angle : r, n.value = r === 360 ? 0 : r, t("update:angle", n.value), t("change", n.value));
      }, l = vue.computed(() => ({
        width: e.size + "px",
        height: e.size + "px",
        borderWidth: e.borderWidth + "px",
        borderColor: e.borderColor,
        transform: `rotate(${n.value}deg)`
      })), a = (r) => {
        o.value && (n.value = io(o.value, r) % 360, i());
      };
      return vue.onMounted(() => {
        const r = {
          drag: (c) => {
            a(c);
          },
          end: (c) => {
            a(c);
          }
        };
        o.value && co(o.value, r);
      }), () => vue.createVNode("div", {
        class: "bee-angle"
      }, [vue.createVNode("div", {
        class: "bee-angle__round",
        ref: o,
        style: l.value
      }, null)]);
    }
  });
  const ho = vue.defineComponent({
    name: "GradientColorPicker",
    components: { Angle: go, Display: Se, Alpha: ve, Palette: Ke, Board: ye, Hue: _e, Lightness: Le, History: me },
    props: {
      startColor: C$1.instanceOf(A$1).isRequired,
      endColor: C$1.instanceOf(A$1).isRequired,
      startColorStop: C$1.number.def(0),
      endColorStop: C$1.number.def(100),
      angle: C$1.number.def(0),
      type: C$1.oneOf(["linear", "radial"]).def("linear"),
      disableHistory: C$1.bool.def(false),
      roundHistory: C$1.bool.def(false),
      disableAlpha: C$1.bool.def(false),
      pickerType: C$1.oneOf(["fk", "chrome"]).def("fk")
    },
    emits: [
      "update:startColor",
      "update:endColor",
      "update:angle",
      "update:startColorStop",
      "update:endColorStop",
      "startColorChange",
      "endColorChange",
      "advanceChange",
      "angleChange",
      "startColorStopChange",
      "endColorStopChange",
      "typeChange"
    ],
    setup(e, { emit: t }) {
      const o = vue.reactive({
        startActive: true,
        startColor: e.startColor,
        endColor: e.endColor,
        startColorStop: e.startColorStop,
        endColorStop: e.endColorStop,
        angle: e.angle,
        type: e.type,
        // rgba
        startColorRgba: e.startColor.toRgbString(),
        endColorRgba: e.endColor.toRgbString()
      }), n = vue.inject(ke), i = vue.ref(e.pickerType === "chrome"), l = vue.ref(), a = vue.ref(), r = vue.ref();
      vue.watch(
        () => [e.startColor, e.endColor, e.angle],
        (s) => {
          o.startColor = s[0], o.endColor = s[1], o.angle = s[2];
        }
      ), vue.watch(
        () => e.type,
        (s) => {
          o.type = s;
        }
      );
      const c = vue.computed({
        get: () => o.startActive ? o.startColor : o.endColor,
        set: (s) => {
          if (o.startActive) {
            o.startColor = s;
            return;
          }
          o.endColor = s;
        }
      }), k = vue.computed(() => {
        if (r.value && l.value) {
          const s = o.startColorStop / 100, _ = r.value.getBoundingClientRect(), H = l.value.offsetWidth;
          return Math.round(s * (_.width - H) + H / 2);
        }
        return 0;
      }), p = vue.computed(() => {
        if (r.value && a.value) {
          const s = o.endColorStop / 100, _ = r.value.getBoundingClientRect(), H = a.value.offsetWidth;
          return Math.round(s * (_.width - H) + H / 2);
        }
        return 0;
      }), g = vue.computed(() => {
        let s = `background: linear-gradient(${o.angle}deg, ${o.startColorRgba} ${o.startColorStop}%, ${o.endColorRgba} ${o.endColorStop}%)`;
        return o.type === "radial" && (s = `background: radial-gradient(circle, ${o.startColorRgba} ${o.startColorStop}%, ${o.endColorRgba} ${o.endColorStop}%)`), s;
      }), d = (s) => {
        var _;
        if (o.startActive = true, r.value && l.value) {
          const H = (_ = r.value) == null ? void 0 : _.getBoundingClientRect();
          let N = s.clientX - H.left;
          N = Math.max(l.value.offsetWidth / 2, N), N = Math.min(N, H.width - l.value.offsetWidth / 2), o.startColorStop = Math.round(
            (N - l.value.offsetWidth / 2) / (H.width - l.value.offsetWidth) * 100
          ), t("update:startColorStop", o.startColorStop), t("startColorStopChange", o.startColorStop);
        }
      }, m = (s) => {
        var _;
        if (o.startActive = false, r.value && a.value) {
          const H = (_ = r.value) == null ? void 0 : _.getBoundingClientRect();
          let N = s.clientX - H.left;
          N = Math.max(a.value.offsetWidth / 2, N), N = Math.min(N, H.width - a.value.offsetWidth / 2), o.endColorStop = Math.round(
            (N - a.value.offsetWidth / 2) / (H.width - a.value.offsetWidth) * 100
          ), t("update:endColorStop", o.endColorStop), t("endColorStopChange", o.endColorStop);
        }
      }, b = (s) => {
        const _ = s.target, H = parseInt(_.value.replace("\xB0", ""));
        isNaN(H) || (o.angle = H % 360), t("update:angle", o.angle), t("angleChange", o.angle);
      }, h = (s) => {
        o.angle = s, t("update:angle", o.angle), t("angleChange", o.angle);
      }, y = (s) => {
        s === "advance" ? (i.value = true, t("advanceChange", true)) : (c.value.hex = s, t("advanceChange", false)), L();
      }, f = (s) => {
        c.value.alpha = s, L();
      }, w = (s) => {
        c.value.hue = s, L();
      }, S = (s, _) => {
        c.value.saturation = s, c.value.brightness = _, L();
      }, F = (s) => {
        c.value.lightness = s, L();
      }, E = () => {
        L();
      }, L = () => {
        o.startActive ? (t("update:startColor", o.startColor), t("startColorChange", o.startColor)) : (t("update:endColor", o.endColor), t("endColorChange", o.endColor));
      }, U = () => {
        i.value = false, t("advanceChange", false);
      }, J = () => {
        o.type = o.type === "linear" ? "radial" : "linear", t("typeChange", o.type);
      }, X = useLocalStorage(fe, [], {}), ce = useDebounceFn(() => {
        if (e.disableHistory)
          return;
        const s = c.value.toRgbString();
        if (X.value = X.value.filter((_) => !tinycolor.equals(_, s)), !X.value.includes(s)) {
          for (; X.value.length > Ce; )
            X.value.pop();
          X.value.unshift(s);
        }
      }, 500);
      return tryOnMounted(() => {
        a.value && l.value && (Vn.triggerDragEvent(a.value, {
          drag: (s) => {
            m(s);
          },
          end: (s) => {
            m(s);
          }
        }), Vn.triggerDragEvent(l.value, {
          drag: (s) => {
            d(s);
          },
          end: (s) => {
            d(s);
          }
        }));
      }), whenever(
        () => o.startColor,
        (s) => {
          o.startColorRgba = s.toRgbString();
        },
        { deep: true }
      ), whenever(
        () => o.endColor,
        (s) => {
          o.endColorRgba = s.toRgbString();
        },
        { deep: true }
      ), whenever(
        () => c.value,
        () => {
          ce();
        },
        { deep: true }
      ), {
        startGradientRef: l,
        stopGradientRef: a,
        colorRangeRef: r,
        state: o,
        currentColor: c,
        getStartColorLeft: k,
        getEndColorLeft: p,
        gradientBg: g,
        advancePanelShow: i,
        onDegreeBlur: b,
        onCompactChange: y,
        onAlphaChange: f,
        onHueChange: w,
        onBoardChange: S,
        onLightChange: F,
        historyColors: X,
        onBack: U,
        onDegreeChange: h,
        onDisplayChange: E,
        onTypeChange: J,
        lang: n == null ? void 0 : n.lang
      };
    }
  });
  const Ne = (e) => (vue.pushScopeId("data-v-c4d6d6ea"), e = e(), vue.popScopeId(), e);
  const po = { class: "vc-gradient-picker" };
  const fo = { class: "vc-gradient-picker__header" };
  const Co = { class: "vc-gradient__types" };
  const vo = { class: "vc-gradient-wrap__types" };
  const bo = { class: "vc-picker-degree-input vc-degree-input" };
  const yo = { class: "vc-degree-input__control" };
  const _o = ["value"];
  const mo = { class: "vc-degree-input__panel" };
  const So = { class: "vc-degree-input__disk" };
  const ko = { class: "vc-gradient-picker__body" };
  const $o = {
    class: "vc-color-range",
    ref: "colorRangeRef"
  };
  const wo = { class: "vc-color-range__container" };
  const Bo = { class: "vc-gradient__stop__container" };
  const Ho = ["title"];
  const Ro = /* @__PURE__ */ Ne(() => /* @__PURE__ */ vue.createElementVNode("span", { class: "vc-gradient__stop--inner" }, null, -1));
  const Ao = [
    Ro
  ];
  const Po = ["title"];
  const Vo = /* @__PURE__ */ Ne(() => /* @__PURE__ */ vue.createElementVNode("span", { class: "vc-gradient__stop--inner" }, null, -1));
  const Mo = [
    Vo
  ];
  function Eo(e, t, o, n, i, l) {
    var b, h;
    const a = vue.resolveComponent("Angle"), r = vue.resolveComponent("Board"), c = vue.resolveComponent("Hue"), k = vue.resolveComponent("Palette"), p = vue.resolveComponent("Lightness"), g = vue.resolveComponent("Alpha"), d = vue.resolveComponent("Display"), m = vue.resolveComponent("History");
    return vue.openBlock(), vue.createElementBlock("div", po, [
      vue.createElementVNode("div", fo, [
        vue.createElementVNode("div", null, [
          vue.withDirectives(vue.createElementVNode("div", {
            class: "back",
            style: { cursor: "pointer" },
            onClick: t[0] || (t[0] = (...y) => e.onBack && e.onBack(...y))
          }, null, 512), [
            [vue.vShow, e.pickerType === "fk" && e.advancePanelShow]
          ])
        ]),
        vue.createElementVNode("div", Co, [
          vue.createElementVNode("div", vo, [
            (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(["linear", "radial"], (y) => vue.createElementVNode("div", {
              class: vue.normalizeClass(["vc-gradient__type", { active: e.state.type === y }]),
              key: y,
              onClick: t[1] || (t[1] = (...f) => e.onTypeChange && e.onTypeChange(...f))
            }, vue.toDisplayString(e.lang ? e.lang[y] : y), 3)), 64))
          ]),
          vue.withDirectives(vue.createElementVNode("div", bo, [
            vue.createElementVNode("div", yo, [
              vue.createElementVNode("input", {
                value: e.state.angle,
                onBlur: t[2] || (t[2] = (...y) => e.onDegreeBlur && e.onDegreeBlur(...y))
              }, null, 40, _o),
              vue.createTextVNode("deg ")
            ]),
            vue.createElementVNode("div", mo, [
              vue.createElementVNode("div", So, [
                vue.createVNode(a, {
                  angle: e.state.angle,
                  "onUpdate:angle": t[3] || (t[3] = (y) => e.state.angle = y),
                  size: 40,
                  onChange: e.onDegreeChange
                }, null, 8, ["angle", "onChange"])
              ])
            ])
          ], 512), [
            [vue.vShow, e.state.type === "linear"]
          ])
        ])
      ]),
      vue.createElementVNode("div", ko, [
        vue.createElementVNode("div", $o, [
          vue.createElementVNode("div", wo, [
            vue.createElementVNode("div", {
              class: "vc-background",
              style: vue.normalizeStyle(e.gradientBg)
            }, null, 4),
            vue.createElementVNode("div", Bo, [
              vue.createElementVNode("div", {
                class: vue.normalizeClass(["vc-gradient__stop", {
                  "vc-gradient__stop--current": e.state.startActive
                }]),
                ref: "startGradientRef",
                title: (b = e.lang) == null ? void 0 : b.start,
                style: vue.normalizeStyle({ left: e.getStartColorLeft + "px", backgroundColor: e.state.startColorRgba })
              }, Ao, 14, Ho),
              vue.createElementVNode("div", {
                class: vue.normalizeClass(["vc-gradient__stop", {
                  "vc-gradient__stop--current": !e.state.startActive
                }]),
                ref: "stopGradientRef",
                title: (h = e.lang) == null ? void 0 : h.end,
                style: vue.normalizeStyle({ left: e.getEndColorLeft + "px", backgroundColor: e.state.endColorRgba })
              }, Mo, 14, Po)
            ])
          ])
        ], 512)
      ]),
      e.advancePanelShow ? (vue.openBlock(), vue.createBlock(r, {
        key: 0,
        color: e.currentColor,
        onChange: e.onBoardChange
      }, null, 8, ["color", "onChange"])) : vue.createCommentVNode("", true),
      e.advancePanelShow ? (vue.openBlock(), vue.createBlock(c, {
        key: 1,
        color: e.currentColor,
        onChange: e.onHueChange
      }, null, 8, ["color", "onChange"])) : vue.createCommentVNode("", true),
      e.advancePanelShow ? vue.createCommentVNode("", true) : (vue.openBlock(), vue.createBlock(k, {
        key: 2,
        onChange: e.onCompactChange
      }, null, 8, ["onChange"])),
      e.advancePanelShow ? vue.createCommentVNode("", true) : (vue.openBlock(), vue.createBlock(p, {
        key: 3,
        color: e.currentColor,
        onChange: e.onLightChange
      }, null, 8, ["color", "onChange"])),
      e.disableAlpha ? vue.createCommentVNode("", true) : (vue.openBlock(), vue.createBlock(g, {
        key: 4,
        color: e.currentColor,
        onChange: e.onAlphaChange
      }, null, 8, ["color", "onChange"])),
      vue.createVNode(d, {
        color: e.currentColor,
        "disable-alpha": e.disableAlpha,
        onChange: e.onDisplayChange
      }, null, 8, ["color", "disable-alpha", "onChange"]),
      e.disableHistory ? vue.createCommentVNode("", true) : (vue.openBlock(), vue.createBlock(m, {
        key: 5,
        round: e.roundHistory,
        colors: e.historyColors,
        onChange: e.onCompactChange
      }, null, 8, ["round", "colors", "onChange"]))
    ]);
  }
  const Me = /* @__PURE__ */ q(ho, [["render", Eo], ["__scopeId", "data-v-c4d6d6ea"]]);
  const Io = vue.defineComponent({
    name: "WrapContainer",
    props: {
      theme: C$1.oneOf(["white", "black"]).def("white"),
      showTab: C$1.bool.def(false),
      activeKey: C$1.oneOf(["pure", "gradient"]).def("pure")
    },
    emits: ["update:activeKey", "change"],
    setup(e, { emit: t }) {
      const o = vue.reactive({
        activeKey: e.activeKey
      }), n = vue.inject(ke), i = (l) => {
        o.activeKey = l, t("update:activeKey", l), t("change", l);
      };
      return whenever(
        () => e.activeKey,
        (l) => {
          o.activeKey = l;
        }
      ), { state: o, onActiveKeyChange: i, lang: n == null ? void 0 : n.lang };
    }
  });
  const Ko = { class: "vc-colorpicker--container" };
  const Lo = {
    key: 0,
    class: "vc-colorpicker--tabs"
  };
  const No = { class: "vc-colorpicker--tabs__inner" };
  const Wo = { class: "vc-btn__content" };
  const Do = { class: "vc-btn__content" };
  function To(e, t, o, n, i, l) {
    var a, r;
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(["vc-colorpicker", e.theme])
    }, [
      vue.createElementVNode("div", Ko, [
        e.showTab ? (vue.openBlock(), vue.createElementBlock("div", Lo, [
          vue.createElementVNode("div", No, [
            vue.createElementVNode("div", {
              class: vue.normalizeClass([
                "vc-colorpicker--tabs__btn",
                {
                  "vc-btn-active": e.state.activeKey === "pure"
                }
              ]),
              onClick: t[0] || (t[0] = (c) => e.onActiveKeyChange("pure"))
            }, [
              vue.createElementVNode("button", null, [
                vue.createElementVNode("div", Wo, vue.toDisplayString((a = e.lang) == null ? void 0 : a.pure), 1)
              ])
            ], 2),
            vue.createElementVNode("div", {
              class: vue.normalizeClass([
                "vc-colorpicker--tabs__btn",
                {
                  "vc-btn-active": e.state.activeKey === "gradient"
                }
              ]),
              onClick: t[1] || (t[1] = (c) => e.onActiveKeyChange("gradient"))
            }, [
              vue.createElementVNode("button", null, [
                vue.createElementVNode("div", Do, vue.toDisplayString((r = e.lang) == null ? void 0 : r.gradient), 1)
              ])
            ], 2),
            vue.createElementVNode("div", {
              class: "vc-colorpicker--tabs__bg",
              style: vue.normalizeStyle({
                width: "50%",
                left: `calc(${e.state.activeKey === "gradient" ? 50 : 0}%)`
              })
            }, null, 4)
          ])
        ])) : vue.createCommentVNode("", true),
        vue.renderSlot(e.$slots, "default", {}, void 0, true)
      ])
    ], 2);
  }
  const Oo = /* @__PURE__ */ q(Io, [["render", To], ["__scopeId", "data-v-0492277d"]]);
  const zo = {
    start: "Start",
    end: "End",
    pure: "Pure",
    gradient: "Gradient",
    linear: "linear",
    radial: "radial"
  };
  const Go = {
    start: "\u5F00\u59CB",
    end: "\u7ED3\u675F",
    pure: "\u7EAF\u8272",
    gradient: "\u6E10\u53D8",
    linear: "\u7EBF\u6027",
    radial: "\u5F84\u5411"
  };
  const Fo = {
    En: zo,
    "ZH-cn": Go
  };
  const Xo = {
    isWidget: C$1.bool.def(false),
    pickerType: C$1.oneOf(["fk", "chrome"]).def("fk"),
    shape: C$1.oneOf(["circle", "square"]).def("square"),
    pureColor: {
      type: [String, Object],
      default: "#000000"
    },
    gradientColor: C$1.string.def(
      "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 100%)"
    ),
    format: {
      type: String,
      default: "rgb"
    },
    disableAlpha: C$1.bool.def(false),
    disableHistory: C$1.bool.def(false),
    roundHistory: C$1.bool.def(false),
    useType: C$1.oneOf(["pure", "gradient", "both"]).def("pure"),
    activeKey: C$1.oneOf(["pure", "gradient"]).def("pure"),
    lang: {
      type: String,
      default: "ZH-cn"
    },
    zIndex: C$1.number.def(9999),
    pickerContainer: {
      type: [String, HTMLElement],
      default: "body"
    },
    debounce: C$1.number.def(100),
    theme: C$1.oneOf(["white", "black"]).def("white"),
    blurClose: C$1.bool.def(false),
    defaultPopup: C$1.bool.def(false)
  };
  const qo = vue.defineComponent({
    name: "ColorPicker",
    components: { FkColorPicker: Pe, ChromeColorPicker: Ve, GradientColorPicker: Me, WrapContainer: Oo },
    inheritAttrs: false,
    props: Xo,
    emits: [
      "update:pureColor",
      "pureColorChange",
      "update:gradientColor",
      "gradientColorChange",
      "update:activeKey",
      "activeKeyChange"
    ],
    setup(e, { emit: t }) {
      vue.provide(ke, {
        lang: vue.computed(() => Fo[e.lang || "ZH-cn"])
      });
      const o = !!vue.useSlots().extra, n = vue.reactive({
        pureColor: e.pureColor || "",
        activeKey: e.useType === "gradient" ? "gradient" : e.activeKey,
        //  "pure" | "gradient"
        isAdvanceMode: false
      }), i = new A$1("#000"), l = new A$1("#000"), a = new A$1(n.pureColor), r = vue.reactive({
        startColor: i,
        endColor: l,
        startColorStop: 0,
        endColorStop: 100,
        angle: 0,
        type: "linear",
        gradientColor: e.gradientColor
      }), c = vue.ref(a), k = vue.ref(e.defaultPopup), p = vue.ref(null), g = vue.ref(null);
      let d = null;
      const m = vue.computed(() => ({
        background: n.activeKey !== "gradient" ? tinycolor(n.pureColor).toRgbString() : r.gradientColor
      })), b = vue.computed(() => n.activeKey === "gradient" ? Me.name : e.pickerType === "fk" ? Pe.name : Ve.name), h = (s) => {
        n.isAdvanceMode = s;
      }, y = vue.computed(() => {
        const s = {
          disableAlpha: e.disableAlpha,
          disableHistory: e.disableHistory,
          roundHistory: e.roundHistory,
          pickerType: e.pickerType
        };
        return n.activeKey === "gradient" ? {
          ...s,
          startColor: r.startColor,
          endColor: r.endColor,
          angle: r.angle,
          type: r.type,
          startColorStop: r.startColorStop,
          endColorStop: r.endColorStop,
          onStartColorChange: (_) => {
            r.startColor = _, E();
          },
          onEndColorChange: (_) => {
            r.endColor = _, E();
          },
          onStartColorStopChange: (_) => {
            r.startColorStop = _, E();
          },
          onEndColorStopChange: (_) => {
            r.endColorStop = _, E();
          },
          onAngleChange: (_) => {
            r.angle = _, E();
          },
          onTypeChange: (_) => {
            r.type = _, E();
          },
          onAdvanceChange: h
        } : {
          ...s,
          disableAlpha: e.disableAlpha,
          disableHistory: e.disableHistory,
          roundHistory: e.roundHistory,
          color: c.value,
          onChange: J,
          onAdvanceChange: h
        };
      }), f = () => {
        k.value = true, d ? d.update() : U();
      }, w = () => {
        k.value = false;
      }, S = useDebounceFn(() => {
        !e.isWidget && e.blurClose && w();
      }, 100);
      onClickOutside(g, () => {
        w();
      });
      const F = () => {
        var s, _, H, N;
        try {
          const [z] = parse(r.gradientColor);
          if (z && z.type.includes("gradient") && z.colorStops.length >= 2) {
            const $e = z.colorStops[0], we = z.colorStops[1];
            r.startColorStop = Number((s = $e.length) == null ? void 0 : s.value) || 0, r.endColorStop = Number((_ = we.length) == null ? void 0 : _.value) || 0, z.type === "linear-gradient" && ((H = z.orientation) == null ? void 0 : H.type) === "angular" && (r.angle = Number((N = z.orientation) == null ? void 0 : N.value) || 0), r.type = z.type.split("-")[0];
            const [We, De, Te, Oe] = $e.value, [ze, Ge, Fe, Xe] = we.value;
            r.startColor = new A$1({
              r: Number(We),
              g: Number(De),
              b: Number(Te),
              a: Number(Oe)
            }), r.endColor = new A$1({
              r: Number(ze),
              g: Number(Ge),
              b: Number(Fe),
              a: Number(Xe)
            });
          }
        } catch (z) {
          console.log(`[Parse Color]: ${z}`);
        }
      }, E = useDebounceFn(() => {
        const s = L();
        try {
          r.gradientColor = stringify(s), t("update:gradientColor", r.gradientColor), t("gradientColorChange", r.gradientColor);
        } catch (_) {
          console.log(_);
        }
      }, e.debounce), L = () => {
        const s = [], _ = r.startColor.RGB.map((z) => z.toString()), H = r.endColor.RGB.map((z) => z.toString()), N = [
          {
            type: "rgba",
            value: [_[0], _[1], _[2], _[3]],
            length: { value: r.startColorStop + "", type: "%" }
          },
          {
            type: "rgba",
            value: [H[0], H[1], H[2], H[3]],
            length: { value: r.endColorStop + "", type: "%" }
          }
        ];
        return r.type === "linear" ? s.push({
          type: "linear-gradient",
          orientation: { type: "angular", value: r.angle + "" },
          colorStops: N
        }) : r.type === "radial" && s.push({
          type: "radial-gradient",
          orientation: [{ type: "shape", value: "circle" }],
          colorStops: N
        }), s;
      }, U = () => {
        p.value && g.value && (d = createPopper(p.value, g.value, {
          placement: "auto",
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 8]
              }
            },
            {
              name: "flip",
              options: {
                allowedAutoPlacements: ["top", "bottom", "left", "right"],
                rootBoundary: "viewport"
              }
            }
          ]
        }));
      }, J = (s) => {
        c.value = s, n.pureColor = s.toString(e.format), X();
      }, X = useDebounceFn(() => {
        t("update:pureColor", n.pureColor), t("pureColorChange", n.pureColor);
      }, e.debounce), ce = (s) => {
        n.activeKey = s, t("update:activeKey", s), t("activeKeyChange", s);
      };
      return tryOnMounted(() => {
        F(), d || U();
      }), whenever(
        () => e.gradientColor,
        (s) => {
          s != r.gradientColor && (r.gradientColor = s);
        }
      ), whenever(
        () => r.gradientColor,
        () => {
          F();
        }
      ), whenever(
        () => e.activeKey,
        (s) => {
          n.activeKey = s;
        }
      ), whenever(
        () => e.useType,
        (s) => {
          n.activeKey !== "gradient" && s === "gradient" ? n.activeKey = "gradient" : n.activeKey = "pure";
        }
      ), whenever(
        () => e.pureColor,
        (s) => {
          tinycolor.equals(s, n.pureColor) || (n.pureColor = s, c.value = new A$1(s));
        },
        { deep: true }
      ), {
        colorCubeRef: p,
        pickerRef: g,
        showPicker: k,
        colorInstance: c,
        getBgColorStyle: m,
        getComponentName: b,
        getBindArgs: y,
        state: n,
        hasExtra: o,
        onColorChange: J,
        onShowPicker: f,
        onActiveKeyChange: ce,
        onAutoClose: S
      };
    }
  });
  const Yo = {
    key: 0,
    class: "vc-color-extra"
  };
  const Uo = {
    key: 0,
    class: "vc-color-extra"
  };
  function jo(e, t, o, n, i, l) {
    const a = vue.resolveComponent("WrapContainer");
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      e.isWidget ? (vue.openBlock(), vue.createBlock(a, {
        key: 0,
        "active-key": e.state.activeKey,
        "onUpdate:activeKey": t[0] || (t[0] = (r) => e.state.activeKey = r),
        "show-tab": e.useType === "both",
        style: vue.normalizeStyle({ zIndex: e.zIndex }),
        theme: e.theme,
        onChange: e.onActiveKeyChange
      }, {
        default: vue.withCtx(() => [
          (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(e.getComponentName), vue.mergeProps({ key: e.getComponentName }, e.getBindArgs), null, 16)),
          e.hasExtra ? (vue.openBlock(), vue.createElementBlock("div", Yo, [
            vue.renderSlot(e.$slots, "extra", {}, void 0, true)
          ])) : vue.createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["active-key", "show-tab", "style", "theme", "onChange"])) : vue.createCommentVNode("", true),
      e.isWidget ? vue.createCommentVNode("", true) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["vc-color-wrap transparent", { round: e.shape === "circle" }]),
          ref: "colorCubeRef"
        }, [
          vue.createElementVNode("div", {
            class: "current-color",
            style: vue.normalizeStyle(e.getBgColorStyle),
            onClick: t[1] || (t[1] = (...r) => e.onShowPicker && e.onShowPicker(...r))
          }, null, 4)
        ], 2),
        (vue.openBlock(), vue.createBlock(vue.Teleport, { to: e.pickerContainer }, [
          vue.withDirectives(vue.createElementVNode("div", {
            ref: "pickerRef",
            style: vue.normalizeStyle({ zIndex: e.zIndex }),
            onMouseleave: t[3] || (t[3] = (...r) => e.onAutoClose && e.onAutoClose(...r))
          }, [
            e.showPicker ? (vue.openBlock(), vue.createBlock(a, {
              key: 0,
              "show-tab": e.useType === "both" && !e.state.isAdvanceMode,
              theme: e.theme,
              "active-key": e.state.activeKey,
              "onUpdate:activeKey": t[2] || (t[2] = (r) => e.state.activeKey = r),
              onChange: e.onActiveKeyChange
            }, {
              default: vue.withCtx(() => [
                (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(e.getComponentName), vue.mergeProps({ key: e.getComponentName }, e.getBindArgs), null, 16)),
                e.hasExtra ? (vue.openBlock(), vue.createElementBlock("div", Uo, [
                  vue.renderSlot(e.$slots, "extra", {}, void 0, true)
                ])) : vue.createCommentVNode("", true)
              ]),
              _: 3
            }, 8, ["show-tab", "theme", "active-key", "onChange"])) : vue.createCommentVNode("", true)
          ], 36), [
            [vue.vShow, e.showPicker]
          ])
        ], 8, ["to"]))
      ], 64))
    ], 64);
  }
  const re = /* @__PURE__ */ q(qo, [["render", jo], ["__scopeId", "data-v-354ca836"]]);
  const rn = {
    install: (e) => {
      e.component(re.name, re), e.component("Vue3" + re.name, re);
    }
  };

  const Y = {};
  Y.getData = (t) => new Promise((e, i) => {
    let s = {};
    L(t).then((r) => {
      s.arrayBuffer = r;
      try {
        s.orientation = N(r);
      } catch (e2) {
        s.orientation = -1;
      }
      e(s);
    }).catch((r) => {
      i(r);
    });
  });
  function L(t) {
    let e = null;
    return new Promise((i, s) => {
      if (t.src)
        if (/^data\:/i.test(t.src))
          e = k(t.src), i(e);
        else if (/^blob\:/i.test(t.src)) {
          var r = new FileReader();
          r.onload = function(h) {
            e = h.target.result, i(e);
          }, E(t.src, function(h) {
            r.readAsArrayBuffer(h);
          });
        } else {
          var o = new XMLHttpRequest();
          o.onload = function() {
            if (this.status == 200 || this.status === 0)
              e = o.response, i(e);
            else
              throw "Could not load image";
            o = null;
          }, o.open("GET", t.src, true), o.responseType = "arraybuffer", o.send(null);
        }
      else
        s("img error");
    });
  }
  function E(t, e) {
    var i = new XMLHttpRequest();
    i.open("GET", t, true), i.responseType = "blob", i.onload = function(s) {
      (this.status == 200 || this.status === 0) && e(this.response);
    }, i.send();
  }
  function k(t, e) {
    e = e || t.match(/^data\:([^\;]+)\;base64,/mi)[1] || "", t = t.replace(/^data\:([^\;]+)\;base64,/gmi, "");
    for (var i = atob(t), s = i.length % 2 == 0 ? i.length : i.length + 1, r = new ArrayBuffer(s), o = new Uint16Array(r), h = 0; h < s; h++)
      o[h] = i.charCodeAt(h);
    return r;
  }
  function T(t, e, i) {
    var s = "", r;
    for (r = e, i += e; r < i; r++)
      s += String.fromCharCode(t.getUint8(r));
    return s;
  }
  function N(t) {
    var e = new DataView(t), i = e.byteLength, s, r, o, h, a, n, c, l, f, p;
    if (e.getUint8(0) === 255 && e.getUint8(1) === 216)
      for (f = 2; f < i; ) {
        if (e.getUint8(f) === 255 && e.getUint8(f + 1) === 225) {
          c = f;
          break;
        }
        f++;
      }
    if (c && (r = c + 4, o = c + 10, T(e, r, 4) === "Exif" && (n = e.getUint16(o), a = n === 18761, (a || n === 19789) && e.getUint16(o + 2, a) === 42 && (h = e.getUint32(o + 4, a), h >= 8 && (l = o + h)))), l) {
      for (i = e.getUint16(l, a), p = 0; p < i; p++)
        if (f = l + p * 12 + 2, e.getUint16(f, a) === 274) {
          f += 8, s = e.getUint16(f, a);
          break;
        }
    }
    return s;
  }
  const $ = (t, e) => {
    const i = t.__vccOpts || t;
    for (const [s, r] of e)
      i[s] = r;
    return i;
  };
  const z = vue.defineComponent({
    data: function() {
      return {
        // 容器高宽
        w: 0,
        h: 0,
        // 图片缩放比例
        scale: 1,
        // 图片偏移x轴
        x: 0,
        // 图片偏移y轴
        y: 0,
        // 图片加载
        loading: true,
        // 图片真实宽度
        trueWidth: 0,
        // 图片真实高度
        trueHeight: 0,
        move: true,
        // 移动的x
        moveX: 0,
        // 移动的y
        moveY: 0,
        // 开启截图
        crop: false,
        // 正在截图
        cropping: false,
        // 裁剪框大小
        cropW: 0,
        cropH: 0,
        cropOldW: 0,
        cropOldH: 0,
        // 判断是否能够改变
        canChangeX: false,
        canChangeY: false,
        // 改变的基准点
        changeCropTypeX: 1,
        changeCropTypeY: 1,
        // 裁剪框的坐标轴
        cropX: 0,
        cropY: 0,
        cropChangeX: 0,
        cropChangeY: 0,
        cropOffsertX: 0,
        cropOffsertY: 0,
        // 支持的滚动事件
        support: "",
        // 移动端手指缩放
        touches: [],
        touchNow: false,
        // 图片旋转
        rotate: 0,
        isIos: false,
        orientation: 0,
        imgs: "",
        // 图片缩放系数
        coe: 0.2,
        // 是否正在多次缩放
        scaling: false,
        scalingSet: "",
        coeStatus: "",
        // 控制emit触发频率
        isCanShow: true,
        // 图片是否等于截图大小
        imgIsQqualCrop: false
      };
    },
    props: {
      img: {
        type: [String, Blob, null, File],
        default: ""
      },
      // 输出图片压缩比
      outputSize: {
        type: Number,
        default: 1
      },
      outputType: {
        type: String,
        default: "jpeg"
      },
      info: {
        type: Boolean,
        default: true
      },
      // 是否开启滚轮放大缩小
      canScale: {
        type: Boolean,
        default: true
      },
      // 是否自成截图框
      autoCrop: {
        type: Boolean,
        default: false
      },
      autoCropWidth: {
        type: [Number, String],
        default: 0
      },
      autoCropHeight: {
        type: [Number, String],
        default: 0
      },
      // 是否开启固定宽高比
      fixed: {
        type: Boolean,
        default: false
      },
      // 宽高比 w/h
      fixedNumber: {
        type: Array,
        default: () => [1, 1]
      },
      // 固定大小 禁止改变截图框大小
      fixedBox: {
        type: Boolean,
        default: false
      },
      // 输出截图是否缩放
      full: {
        type: Boolean,
        default: false
      },
      // 是否可以拖动图片
      canMove: {
        type: Boolean,
        default: true
      },
      // 是否可以拖动截图框
      canMoveBox: {
        type: Boolean,
        default: true
      },
      // 上传图片按照原始比例显示
      original: {
        type: Boolean,
        default: false
      },
      // 截图框能否超过图片
      centerBox: {
        type: Boolean,
        default: false
      },
      // 是否根据dpr输出高清图片
      high: {
        type: Boolean,
        default: true
      },
      // 截图框展示宽高类型
      infoTrue: {
        type: Boolean,
        default: false
      },
      // 可以压缩图片宽高  默认不超过200
      maxImgSize: {
        type: [Number, String],
        default: 2e3
      },
      // 倍数  可渲染当前截图框的n倍 0 - 1000;
      enlarge: {
        type: [Number, String],
        default: 1
      },
      // 自动预览的固定宽度
      preW: {
        type: [Number, String],
        default: 0
      },
      /*
        图片布局方式 mode 实现和css背景一样的效果
        contain  居中布局 默认不会缩放 保证图片在容器里面 mode: 'contain'
        cover    拉伸布局 填充整个容器  mode: 'cover'
        如果仅有一个数值被给定，这个数值将作为宽度值大小，高度值将被设定为auto。 mode: '50px'
        如果有两个数值被给定，第一个将作为宽度值大小，第二个作为高度值大小。 mode: '50px 60px'
      */
      mode: {
        type: String,
        default: "contain"
      },
      //限制最小区域,可传1以上的数字和字符串，限制长宽都是这么大
      // 也可以传数组[90,90] 
      limitMinSize: {
        type: [Number, Array, String],
        default: () => 10,
        validator: function(t) {
          return Array.isArray(t) ? Number(t[0]) >= 0 && Number(t[1]) >= 0 : Number(t) >= 0;
        }
      },
      // 导出时,填充背景颜色
      fillColor: {
        type: String,
        default: ""
      }
    },
    computed: {
      cropInfo() {
        let t = {};
        if (t.top = this.cropOffsertY > 21 ? "-21px" : "0px", t.width = this.cropW > 0 ? this.cropW : 0, t.height = this.cropH > 0 ? this.cropH : 0, this.infoTrue) {
          let e = 1;
          this.high && !this.full && (e = window.devicePixelRatio), this.enlarge !== 1 & !this.full && (e = Math.abs(Number(this.enlarge))), t.width = t.width * e, t.height = t.height * e, this.full && (t.width = t.width / this.scale, t.height = t.height / this.scale);
        }
        return t.width = t.width.toFixed(0), t.height = t.height.toFixed(0), t;
      },
      isIE() {
        return !!window.ActiveXObject || "ActiveXObject" in window;
      },
      passive() {
        return this.isIE ? null : {
          passive: false
        };
      },
      // 是否处于左右旋转
      isRotateRightOrLeft() {
        return [1, -1, 3, -3].includes(this.rotate);
      }
    },
    watch: {
      // 如果图片改变， 重新布局
      img() {
        this.checkedImg();
      },
      imgs(t) {
        t !== "" && this.reload();
      },
      cropW() {
        this.showPreview();
      },
      cropH() {
        this.showPreview();
      },
      cropOffsertX() {
        this.showPreview();
      },
      cropOffsertY() {
        this.showPreview();
      },
      scale(t, e) {
        this.showPreview();
      },
      x() {
        this.showPreview();
      },
      y() {
        this.showPreview();
      },
      autoCrop(t) {
        t && this.goAutoCrop();
      },
      // 修改了自动截图框
      autoCropWidth() {
        this.autoCrop && this.goAutoCrop();
      },
      autoCropHeight() {
        this.autoCrop && this.goAutoCrop();
      },
      mode() {
        this.checkedImg();
      },
      rotate() {
        this.showPreview(), this.autoCrop ? this.goAutoCrop(this.cropW, this.cropH) : (this.cropW > 0 || this.cropH > 0) && this.goAutoCrop(this.cropW, this.cropH);
      }
    },
    methods: {
      getVersion(t) {
        var e = navigator.userAgent.split(" "), i = "";
        let s = 0;
        const r = new RegExp(t, "i");
        for (var o = 0; o < e.length; o++)
          r.test(e[o]) && (i = e[o]);
        return i ? s = i.split("/")[1].split(".") : s = ["0", "0", "0"], s;
      },
      checkOrientationImage(t, e, i, s) {
        if (this.getVersion("chrome")[0] >= 81)
          e = -1;
        else if (this.getVersion("safari")[0] >= 605) {
          const h = this.getVersion("version");
          h[0] > 13 && h[1] > 1 && (e = -1);
        } else {
          const h = navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/);
          if (h) {
            let a = h[1];
            a = a.split("_"), (a[0] > 13 || a[0] >= 13 && a[1] >= 4) && (e = -1);
          }
        }
        let r = document.createElement("canvas"), o = r.getContext("2d");
        switch (o.save(), e) {
          case 2:
            r.width = i, r.height = s, o.translate(i, 0), o.scale(-1, 1);
            break;
          case 3:
            r.width = i, r.height = s, o.translate(i / 2, s / 2), o.rotate(180 * Math.PI / 180), o.translate(-i / 2, -s / 2);
            break;
          case 4:
            r.width = i, r.height = s, o.translate(0, s), o.scale(1, -1);
            break;
          case 5:
            r.height = i, r.width = s, o.rotate(0.5 * Math.PI), o.scale(1, -1);
            break;
          case 6:
            r.width = s, r.height = i, o.translate(s / 2, i / 2), o.rotate(90 * Math.PI / 180), o.translate(-i / 2, -s / 2);
            break;
          case 7:
            r.height = i, r.width = s, o.rotate(0.5 * Math.PI), o.translate(i, -s), o.scale(-1, 1);
            break;
          case 8:
            r.height = i, r.width = s, o.translate(s / 2, i / 2), o.rotate(-90 * Math.PI / 180), o.translate(-i / 2, -s / 2);
            break;
          default:
            r.width = i, r.height = s;
        }
        o.drawImage(t, 0, 0, i, s), o.restore(), r.toBlob(
          (h) => {
            let a = URL.createObjectURL(h);
            URL.revokeObjectURL(this.imgs), this.imgs = a;
          },
          "image/" + this.outputType,
          1
        );
      },
      // checkout img
      checkedImg() {
        if (this.img === null || this.img === "") {
          this.imgs = "", this.clearCrop();
          return;
        }
        this.loading = true, this.scale = 1, this.rotate = 0, this.imgIsQqualCrop = false, this.clearCrop();
        let t = new Image();
        if (t.onload = () => {
          if (this.img === "")
            return this.$emit("img-load", new Error("\u56FE\u7247\u4E0D\u80FD\u4E3A\u7A7A")), false;
          let i = t.width, s = t.height;
          Y.getData(t).then((r) => {
            this.orientation = r.orientation || 1;
            let o = Number(this.maxImgSize);
            if (!this.orientation && i < o & s < o) {
              this.imgs = this.img;
              return;
            }
            i > o && (s = s / i * o, i = o), s > o && (i = i / s * o, s = o), this.checkOrientationImage(t, this.orientation, i, s);
          }).catch((r) => {
            this.$emit("img-load", "error"), this.$emit("img-load-error", r);
          });
        }, t.onerror = (i) => {
          this.$emit("img-load", "error"), this.$emit("img-load-error", i);
        }, this.img.substr(0, 4) !== "data" && (t.crossOrigin = ""), this.isIE) {
          var e = new XMLHttpRequest();
          e.onload = function() {
            var i = URL.createObjectURL(this.response);
            t.src = i;
          }, e.open("GET", this.img, true), e.responseType = "blob", e.send();
        } else
          t.src = this.img;
      },
      // 当按下鼠标键
      startMove(t) {
        if (t.preventDefault(), this.move && !this.crop) {
          if (!this.canMove)
            return false;
          this.moveX = ("clientX" in t ? t.clientX : t.touches[0].clientX) - this.x, this.moveY = ("clientY" in t ? t.clientY : t.touches[0].clientY) - this.y, t.touches ? (window.addEventListener("touchmove", this.moveImg), window.addEventListener("touchend", this.leaveImg), t.touches.length == 2 && (this.touches = t.touches, window.addEventListener("touchmove", this.touchScale), window.addEventListener("touchend", this.cancelTouchScale))) : (window.addEventListener("mousemove", this.moveImg), window.addEventListener("mouseup", this.leaveImg)), this.$emit("img-moving", {
            moving: true,
            axis: this.getImgAxis()
          });
        } else
          this.cropping = true, window.addEventListener("mousemove", this.createCrop), window.addEventListener("mouseup", this.endCrop), window.addEventListener("touchmove", this.createCrop), window.addEventListener("touchend", this.endCrop), this.cropOffsertX = t.offsetX ? t.offsetX : t.touches[0].pageX - this.$refs.cropper.offsetLeft, this.cropOffsertY = t.offsetY ? t.offsetY : t.touches[0].pageY - this.$refs.cropper.offsetTop, this.cropX = "clientX" in t ? t.clientX : t.touches[0].clientX, this.cropY = "clientY" in t ? t.clientY : t.touches[0].clientY, this.cropChangeX = this.cropOffsertX, this.cropChangeY = this.cropOffsertY, this.cropW = 0, this.cropH = 0;
      },
      // 移动端缩放
      touchScale(t) {
        t.preventDefault();
        let e = this.scale;
        var i = {
          x: this.touches[0].clientX,
          y: this.touches[0].clientY
        }, s = {
          x: t.touches[0].clientX,
          y: t.touches[0].clientY
        }, r = {
          x: this.touches[1].clientX,
          y: this.touches[1].clientY
        }, o = {
          x: t.touches[1].clientX,
          y: t.touches[1].clientY
        }, h = Math.sqrt(
          Math.pow(i.x - r.x, 2) + Math.pow(i.y - r.y, 2)
        ), a = Math.sqrt(
          Math.pow(s.x - o.x, 2) + Math.pow(s.y - o.y, 2)
        ), n = a - h, c = 1;
        c = c / this.trueWidth > c / this.trueHeight ? c / this.trueHeight : c / this.trueWidth, c = c > 0.1 ? 0.1 : c;
        var l = c * n;
        if (!this.touchNow) {
          if (this.touchNow = true, n > 0 ? e += Math.abs(l) : n < 0 && e > Math.abs(l) && (e -= Math.abs(l)), this.touches = t.touches, setTimeout(() => {
            this.touchNow = false;
          }, 8), !this.checkoutImgAxis(this.x, this.y, e))
            return false;
          this.scale = e;
        }
      },
      cancelTouchScale(t) {
        window.removeEventListener("touchmove", this.touchScale);
      },
      // 移动图片
      moveImg(t) {
        if (t.preventDefault(), t.touches && t.touches.length === 2)
          return this.touches = t.touches, window.addEventListener("touchmove", this.touchScale), window.addEventListener("touchend", this.cancelTouchScale), window.removeEventListener("touchmove", this.moveImg), false;
        let e = "clientX" in t ? t.clientX : t.touches[0].clientX, i = "clientY" in t ? t.clientY : t.touches[0].clientY, s, r;
        s = e - this.moveX, r = i - this.moveY, this.$nextTick(() => {
          if (this.centerBox) {
            let o = this.getImgAxis(s, r, this.scale), h = this.getCropAxis(), a = this.trueHeight * this.scale, n = this.trueWidth * this.scale, c, l, f, p;
            switch (this.rotate) {
              case 1:
              case -1:
              case 3:
              case -3:
                c = this.cropOffsertX - this.trueWidth * (1 - this.scale) / 2 + (a - n) / 2, l = this.cropOffsertY - this.trueHeight * (1 - this.scale) / 2 + (n - a) / 2, f = c - a + this.cropW, p = l - n + this.cropH;
                break;
              default:
                c = this.cropOffsertX - this.trueWidth * (1 - this.scale) / 2, l = this.cropOffsertY - this.trueHeight * (1 - this.scale) / 2, f = c - n + this.cropW, p = l - a + this.cropH;
                break;
            }
            o.x1 >= h.x1 && (s = c), o.y1 >= h.y1 && (r = l), o.x2 <= h.x2 && (s = f), o.y2 <= h.y2 && (r = p);
          }
          this.x = s, this.y = r, this.$emit("img-moving", {
            moving: true,
            axis: this.getImgAxis()
          });
        });
      },
      // 移动图片结束
      leaveImg(t) {
        window.removeEventListener("mousemove", this.moveImg), window.removeEventListener("touchmove", this.moveImg), window.removeEventListener("mouseup", this.leaveImg), window.removeEventListener("touchend", this.leaveImg), this.$emit("img-moving", {
          moving: false,
          axis: this.getImgAxis()
        });
      },
      // 缩放图片
      scaleImg() {
        this.canScale && window.addEventListener(this.support, this.changeSize, this.passive);
      },
      // 移出框
      cancelScale() {
        this.canScale && window.removeEventListener(this.support, this.changeSize);
      },
      // 改变大小函数
      changeSize(t) {
        t.preventDefault();
        let e = this.scale;
        var i = t.deltaY || t.wheelDelta, s = navigator.userAgent.indexOf("Firefox");
        i = s > 0 ? i * 30 : i, this.isIE && (i = -i);
        var r = this.coe;
        r = r / this.trueWidth > r / this.trueHeight ? r / this.trueHeight : r / this.trueWidth;
        var o = r * i;
        o < 0 ? e += Math.abs(o) : e > Math.abs(o) && (e -= Math.abs(o));
        let h = o < 0 ? "add" : "reduce";
        if (h !== this.coeStatus && (this.coeStatus = h, this.coe = 0.2), this.scaling || (this.scalingSet = setTimeout(() => {
          this.scaling = false, this.coe = this.coe += 0.01;
        }, 50)), this.scaling = true, !this.checkoutImgAxis(this.x, this.y, e))
          return false;
        this.scale = e;
      },
      // 修改图片大小函数
      changeScale(t) {
        let e = this.scale;
        t = t || 1;
        var i = 20;
        if (i = i / this.trueWidth > i / this.trueHeight ? i / this.trueHeight : i / this.trueWidth, t = t * i, t > 0 ? e += Math.abs(t) : e > Math.abs(t) && (e -= Math.abs(t)), !this.checkoutImgAxis(this.x, this.y, e))
          return false;
        this.scale = e;
      },
      // 创建截图框
      createCrop(t) {
        t.preventDefault();
        var e = "clientX" in t ? t.clientX : t.touches ? t.touches[0].clientX : 0, i = "clientY" in t ? t.clientY : t.touches ? t.touches[0].clientY : 0;
        this.$nextTick(() => {
          var s = e - this.cropX, r = i - this.cropY;
          if (s > 0 ? (this.cropW = s + this.cropChangeX > this.w ? this.w - this.cropChangeX : s, this.cropOffsertX = this.cropChangeX) : (this.cropW = this.w - this.cropChangeX + Math.abs(s) > this.w ? this.cropChangeX : Math.abs(s), this.cropOffsertX = this.cropChangeX + s > 0 ? this.cropChangeX + s : 0), !this.fixed)
            r > 0 ? (this.cropH = r + this.cropChangeY > this.h ? this.h - this.cropChangeY : r, this.cropOffsertY = this.cropChangeY) : (this.cropH = this.h - this.cropChangeY + Math.abs(r) > this.h ? this.cropChangeY : Math.abs(r), this.cropOffsertY = this.cropChangeY + r > 0 ? this.cropChangeY + r : 0);
          else {
            var o = this.cropW / this.fixedNumber[0] * this.fixedNumber[1];
            o + this.cropOffsertY > this.h ? (this.cropH = this.h - this.cropOffsertY, this.cropW = this.cropH / this.fixedNumber[1] * this.fixedNumber[0], s > 0 ? this.cropOffsertX = this.cropChangeX : this.cropOffsertX = this.cropChangeX - this.cropW) : this.cropH = o, this.cropOffsertY = this.cropOffsertY;
          }
        });
      },
      // 改变截图框大小
      changeCropSize(t, e, i, s, r) {
        t.preventDefault(), window.addEventListener("mousemove", this.changeCropNow), window.addEventListener("mouseup", this.changeCropEnd), window.addEventListener("touchmove", this.changeCropNow), window.addEventListener("touchend", this.changeCropEnd), this.canChangeX = e, this.canChangeY = i, this.changeCropTypeX = s, this.changeCropTypeY = r, this.cropX = "clientX" in t ? t.clientX : t.touches[0].clientX, this.cropY = "clientY" in t ? t.clientY : t.touches[0].clientY, this.cropOldW = this.cropW, this.cropOldH = this.cropH, this.cropChangeX = this.cropOffsertX, this.cropChangeY = this.cropOffsertY, this.fixed && this.canChangeX && this.canChangeY && (this.canChangeY = 0), this.$emit("change-crop-size", {
          width: this.cropW,
          height: this.cropH
        });
      },
      // 正在改变
      changeCropNow(t) {
        t.preventDefault();
        var e = "clientX" in t ? t.clientX : t.touches ? t.touches[0].clientX : 0, i = "clientY" in t ? t.clientY : t.touches ? t.touches[0].clientY : 0;
        let s = this.w, r = this.h, o = 0, h = 0;
        if (this.centerBox) {
          let c = this.getImgAxis(), l = c.x2, f = c.y2;
          o = c.x1 > 0 ? c.x1 : 0, h = c.y1 > 0 ? c.y1 : 0, s > l && (s = l), r > f && (r = f);
        }
        const [a, n] = this.checkCropLimitSize();
        this.$nextTick(() => {
          var c = e - this.cropX, l = i - this.cropY;
          if (this.canChangeX && (this.changeCropTypeX === 1 ? this.cropOldW - c < a ? (this.cropW = a, this.cropOffsertX = this.cropOldW + this.cropChangeX - o - a) : this.cropOldW - c > 0 ? (this.cropW = s - this.cropChangeX - c <= s - o ? this.cropOldW - c : this.cropOldW + this.cropChangeX - o, this.cropOffsertX = s - this.cropChangeX - c <= s - o ? this.cropChangeX + c : o) : (this.cropW = Math.abs(c) + this.cropChangeX <= s ? Math.abs(c) - this.cropOldW : s - this.cropOldW - this.cropChangeX, this.cropOffsertX = this.cropChangeX + this.cropOldW) : this.changeCropTypeX === 2 && (this.cropOldW + c < a ? this.cropW = a : this.cropOldW + c > 0 ? (this.cropW = this.cropOldW + c + this.cropOffsertX <= s ? this.cropOldW + c : s - this.cropOffsertX, this.cropOffsertX = this.cropChangeX) : (this.cropW = s - this.cropChangeX + Math.abs(c + this.cropOldW) <= s - o ? Math.abs(c + this.cropOldW) : this.cropChangeX - o, this.cropOffsertX = s - this.cropChangeX + Math.abs(c + this.cropOldW) <= s - o ? this.cropChangeX - Math.abs(c + this.cropOldW) : o))), this.canChangeY && (this.changeCropTypeY === 1 ? this.cropOldH - l < n ? (this.cropH = n, this.cropOffsertY = this.cropOldH + this.cropChangeY - h - n) : this.cropOldH - l > 0 ? (this.cropH = r - this.cropChangeY - l <= r - h ? this.cropOldH - l : this.cropOldH + this.cropChangeY - h, this.cropOffsertY = r - this.cropChangeY - l <= r - h ? this.cropChangeY + l : h) : (this.cropH = Math.abs(l) + this.cropChangeY <= r ? Math.abs(l) - this.cropOldH : r - this.cropOldH - this.cropChangeY, this.cropOffsertY = this.cropChangeY + this.cropOldH) : this.changeCropTypeY === 2 && (this.cropOldH + l < n ? this.cropH = n : this.cropOldH + l > 0 ? (this.cropH = this.cropOldH + l + this.cropOffsertY <= r ? this.cropOldH + l : r - this.cropOffsertY, this.cropOffsertY = this.cropChangeY) : (this.cropH = r - this.cropChangeY + Math.abs(l + this.cropOldH) <= r - h ? Math.abs(l + this.cropOldH) : this.cropChangeY - h, this.cropOffsertY = r - this.cropChangeY + Math.abs(l + this.cropOldH) <= r - h ? this.cropChangeY - Math.abs(l + this.cropOldH) : h))), this.canChangeX && this.fixed) {
            var f = this.cropW / this.fixedNumber[0] * this.fixedNumber[1];
            f < n ? (this.cropH = n, this.cropW = this.fixedNumber[0] * n / this.fixedNumber[1], this.changeCropTypeX === 1 && (this.cropOffsertX = this.cropChangeX + (this.cropOldW - this.cropW))) : f + this.cropOffsertY > r ? (this.cropH = r - this.cropOffsertY, this.cropW = this.cropH / this.fixedNumber[1] * this.fixedNumber[0], this.changeCropTypeX === 1 && (this.cropOffsertX = this.cropChangeX + (this.cropOldW - this.cropW))) : this.cropH = f;
          }
          if (this.canChangeY && this.fixed) {
            var p = this.cropH / this.fixedNumber[1] * this.fixedNumber[0];
            p < a ? (this.cropW = a, this.cropH = this.fixedNumber[1] * a / this.fixedNumber[0], this.cropOffsertY = this.cropOldH + this.cropChangeY - this.cropH) : p + this.cropOffsertX > s ? (this.cropW = s - this.cropOffsertX, this.cropH = this.cropW / this.fixedNumber[0] * this.fixedNumber[1]) : this.cropW = p;
          }
        });
      },
      checkCropLimitSize() {
        let { cropW: t, cropH: e, limitMinSize: i } = this, s = new Array();
        return Array.isArray(i) ? s = i : s = [i, i], t = parseFloat(s[0]), e = parseFloat(s[1]), [t, e];
      },
      // 结束改变
      changeCropEnd(t) {
        window.removeEventListener("mousemove", this.changeCropNow), window.removeEventListener("mouseup", this.changeCropEnd), window.removeEventListener("touchmove", this.changeCropNow), window.removeEventListener("touchend", this.changeCropEnd);
      },
      // 根据比例x/y，最小宽度，最小高度，现有宽度，现有高度，得到应该有的宽度和高度
      calculateSize(t, e, i, s, r, o) {
        const h = t / e;
        let a = r, n = o;
        return a < i && (a = i, n = Math.ceil(a / h)), n < s && (n = s, a = Math.ceil(n * h), a < i && (a = i, n = Math.ceil(a / h))), a < r && (a = r, n = Math.ceil(a / h)), n < o && (n = o, a = Math.ceil(n * h)), { width: a, height: n };
      },
      // 创建完成
      endCrop() {
        this.cropW === 0 && this.cropH === 0 && (this.cropping = false);
        let [t, e] = this.checkCropLimitSize();
        const { width: i, height: s } = this.fixed ? this.calculateSize(
          this.fixedNumber[0],
          this.fixedNumber[1],
          t,
          e,
          this.cropW,
          this.cropH
        ) : { width: t, height: e };
        i > this.cropW && (this.cropW = i, this.cropOffsertX + i > this.w && (this.cropOffsertX = this.w - i)), s > this.cropH && (this.cropH = s, this.cropOffsertY + s > this.h && (this.cropOffsertY = this.h - s)), window.removeEventListener("mousemove", this.createCrop), window.removeEventListener("mouseup", this.endCrop), window.removeEventListener("touchmove", this.createCrop), window.removeEventListener("touchend", this.endCrop);
      },
      // 开始截图
      startCrop() {
        this.crop = true;
      },
      // 停止截图
      stopCrop() {
        this.crop = false;
      },
      // 清除截图
      clearCrop() {
        this.cropping = false, this.cropW = 0, this.cropH = 0;
      },
      // 截图移动
      cropMove(t) {
        if (t.preventDefault(), !this.canMoveBox)
          return this.crop = false, this.startMove(t), false;
        if (t.touches && t.touches.length === 2)
          return this.crop = false, this.startMove(t), this.leaveCrop(), false;
        window.addEventListener("mousemove", this.moveCrop), window.addEventListener("mouseup", this.leaveCrop), window.addEventListener("touchmove", this.moveCrop), window.addEventListener("touchend", this.leaveCrop);
        let e = "clientX" in t ? t.clientX : t.touches[0].clientX, i = "clientY" in t ? t.clientY : t.touches[0].clientY, s, r;
        s = e - this.cropOffsertX, r = i - this.cropOffsertY, this.cropX = s, this.cropY = r, this.$emit("crop-moving", {
          moving: true,
          axis: this.getCropAxis()
        });
      },
      moveCrop(t, e) {
        let i = 0, s = 0;
        t && (t.preventDefault(), i = "clientX" in t ? t.clientX : t.touches[0].clientX, s = "clientY" in t ? t.clientY : t.touches[0].clientY), this.$nextTick(() => {
          let r, o, h = i - this.cropX, a = s - this.cropY;
          if (e && (h = this.cropOffsertX, a = this.cropOffsertY), h <= 0 ? r = 0 : h + this.cropW > this.w ? r = this.w - this.cropW : r = h, a <= 0 ? o = 0 : a + this.cropH > this.h ? o = this.h - this.cropH : o = a, this.centerBox) {
            let n = this.getImgAxis();
            r <= n.x1 && (r = n.x1), r + this.cropW > n.x2 && (r = n.x2 - this.cropW), o <= n.y1 && (o = n.y1), o + this.cropH > n.y2 && (o = n.y2 - this.cropH);
          }
          this.cropOffsertX = r, this.cropOffsertY = o, this.$emit("crop-moving", {
            moving: true,
            axis: this.getCropAxis()
          });
        });
      },
      // 算出不同场景下面 图片相对于外层容器的坐标轴
      getImgAxis(t, e, i) {
        t = t || this.x, e = e || this.y, i = i || this.scale;
        let s = {
          x1: 0,
          x2: 0,
          y1: 0,
          y2: 0
        }, r = this.trueWidth * i, o = this.trueHeight * i;
        switch (this.rotate) {
          case 0:
            s.x1 = t + this.trueWidth * (1 - i) / 2, s.x2 = s.x1 + this.trueWidth * i, s.y1 = e + this.trueHeight * (1 - i) / 2, s.y2 = s.y1 + this.trueHeight * i;
            break;
          case 1:
          case -1:
          case 3:
          case -3:
            s.x1 = t + this.trueWidth * (1 - i) / 2 + (r - o) / 2, s.x2 = s.x1 + this.trueHeight * i, s.y1 = e + this.trueHeight * (1 - i) / 2 + (o - r) / 2, s.y2 = s.y1 + this.trueWidth * i;
            break;
          default:
            s.x1 = t + this.trueWidth * (1 - i) / 2, s.x2 = s.x1 + this.trueWidth * i, s.y1 = e + this.trueHeight * (1 - i) / 2, s.y2 = s.y1 + this.trueHeight * i;
            break;
        }
        return s;
      },
      // 获取截图框的坐标轴
      getCropAxis() {
        let t = {
          x1: 0,
          x2: 0,
          y1: 0,
          y2: 0
        };
        return t.x1 = this.cropOffsertX, t.x2 = t.x1 + this.cropW, t.y1 = this.cropOffsertY, t.y2 = t.y1 + this.cropH, t;
      },
      leaveCrop(t) {
        window.removeEventListener("mousemove", this.moveCrop), window.removeEventListener("mouseup", this.leaveCrop), window.removeEventListener("touchmove", this.moveCrop), window.removeEventListener("touchend", this.leaveCrop), this.$emit("crop-moving", {
          moving: false,
          axis: this.getCropAxis()
        });
      },
      getCropChecked(t) {
        let e = document.createElement("canvas"), i = e.getContext("2d"), s = new Image(), r = this.rotate, o = this.trueWidth, h = this.trueHeight, a = this.cropOffsertX, n = this.cropOffsertY;
        s.onload = () => {
          if (this.cropW !== 0) {
            let p = 1;
            this.high & !this.full && (p = window.devicePixelRatio), this.enlarge !== 1 & !this.full && (p = Math.abs(Number(this.enlarge)));
            let d = this.cropW * p, C = this.cropH * p, u = o * this.scale * p, g = h * this.scale * p, m = (this.x - a + this.trueWidth * (1 - this.scale) / 2) * p, v = (this.y - n + this.trueHeight * (1 - this.scale) / 2) * p;
            switch (f(d, C), i.save(), r) {
              case 0:
                this.full ? (f(d / this.scale, C / this.scale), i.drawImage(
                  s,
                  m / this.scale,
                  v / this.scale,
                  u / this.scale,
                  g / this.scale
                )) : i.drawImage(s, m, v, u, g);
                break;
              case 1:
              case -3:
                this.full ? (f(d / this.scale, C / this.scale), m = m / this.scale + (u / this.scale - g / this.scale) / 2, v = v / this.scale + (g / this.scale - u / this.scale) / 2, i.rotate(r * 90 * Math.PI / 180), i.drawImage(
                  s,
                  v,
                  -m - g / this.scale,
                  u / this.scale,
                  g / this.scale
                )) : (m = m + (u - g) / 2, v = v + (g - u) / 2, i.rotate(r * 90 * Math.PI / 180), i.drawImage(s, v, -m - g, u, g));
                break;
              case 2:
              case -2:
                this.full ? (f(d / this.scale, C / this.scale), i.rotate(r * 90 * Math.PI / 180), m = m / this.scale, v = v / this.scale, i.drawImage(
                  s,
                  -m - u / this.scale,
                  -v - g / this.scale,
                  u / this.scale,
                  g / this.scale
                )) : (i.rotate(r * 90 * Math.PI / 180), i.drawImage(s, -m - u, -v - g, u, g));
                break;
              case 3:
              case -1:
                this.full ? (f(d / this.scale, C / this.scale), m = m / this.scale + (u / this.scale - g / this.scale) / 2, v = v / this.scale + (g / this.scale - u / this.scale) / 2, i.rotate(r * 90 * Math.PI / 180), i.drawImage(
                  s,
                  -v - u / this.scale,
                  m,
                  u / this.scale,
                  g / this.scale
                )) : (m = m + (u - g) / 2, v = v + (g - u) / 2, i.rotate(r * 90 * Math.PI / 180), i.drawImage(s, -v - u, m, u, g));
                break;
              default:
                this.full ? (f(d / this.scale, C / this.scale), i.drawImage(
                  s,
                  m / this.scale,
                  v / this.scale,
                  u / this.scale,
                  g / this.scale
                )) : i.drawImage(s, m, v, u, g);
            }
            i.restore();
          } else {
            let p = o * this.scale, d = h * this.scale;
            switch (i.save(), r) {
              case 0:
                f(p, d), i.drawImage(s, 0, 0, p, d);
                break;
              case 1:
              case -3:
                f(d, p), i.rotate(r * 90 * Math.PI / 180), i.drawImage(s, 0, -d, p, d);
                break;
              case 2:
              case -2:
                f(p, d), i.rotate(r * 90 * Math.PI / 180), i.drawImage(s, -p, -d, p, d);
                break;
              case 3:
              case -1:
                f(d, p), i.rotate(r * 90 * Math.PI / 180), i.drawImage(s, -p, 0, p, d);
                break;
              default:
                f(p, d), i.drawImage(s, 0, 0, p, d);
            }
            i.restore();
          }
          t(e);
        };
        var c = this.img.substr(0, 4);
        c !== "data" && (s.crossOrigin = "Anonymous"), s.src = this.imgs;
        const l = this.fillColor;
        function f(p, d) {
          e.width = Math.round(p), e.height = Math.round(d), l && (i.fillStyle = l, i.fillRect(0, 0, e.width, e.height));
        }
      },
      // 获取转换成base64 的图片信息
      getCropData(t) {
        this.getCropChecked((e) => {
          t(e.toDataURL("image/" + this.outputType, this.outputSize));
        });
      },
      //canvas获取为blob对象
      getCropBlob(t) {
        this.getCropChecked((e) => {
          e.toBlob(
            (i) => t(i),
            "image/" + this.outputType,
            this.outputSize
          );
        });
      },
      // 自动预览函数
      showPreview() {
        if (this.isCanShow)
          this.isCanShow = false, setTimeout(() => {
            this.isCanShow = true;
          }, 16);
        else
          return false;
        let t = this.cropW, e = this.cropH, i = this.scale;
        var s = {};
        s.div = {
          width: `${t}px`,
          height: `${e}px`
        };
        let r = (this.x - this.cropOffsertX) / i, o = (this.y - this.cropOffsertY) / i, h = 0;
        s.w = t, s.h = e, s.url = this.imgs, s.img = {
          width: `${this.trueWidth}px`,
          height: `${this.trueHeight}px`,
          transform: `scale(${i})translate3d(${r}px, ${o}px, ${h}px)rotateZ(${this.rotate * 90}deg)`
        }, s.html = `
      <div class="show-preview" style="width: ${s.w}px; height: ${s.h}px,; overflow: hidden">
        <div style="width: ${t}px; height: ${e}px">
          <img src=${s.url} style="width: ${this.trueWidth}px; height: ${this.trueHeight}px; transform:
          scale(${i})translate3d(${r}px, ${o}px, ${h}px)rotateZ(${this.rotate * 90}deg)">
        </div>
      </div>`, this.$emit("real-time", s);
      },
      // reload 图片布局函数
      reload() {
        let t = new Image();
        t.onload = () => {
          this.w = parseFloat(window.getComputedStyle(this.$refs.cropper).width), this.h = parseFloat(window.getComputedStyle(this.$refs.cropper).height), this.trueWidth = t.width, this.trueHeight = t.height, this.original ? this.scale = 1 : this.scale = this.checkedMode(), this.$nextTick(() => {
            this.x = -(this.trueWidth - this.trueWidth * this.scale) / 2 + (this.w - this.trueWidth * this.scale) / 2, this.y = -(this.trueHeight - this.trueHeight * this.scale) / 2 + (this.h - this.trueHeight * this.scale) / 2, this.loading = false, this.autoCrop && this.goAutoCrop(), this.$emit("img-load", "success"), setTimeout(() => {
              this.showPreview();
            }, 20);
          });
        }, t.onerror = () => {
          this.$emit("img-load", "error");
        }, t.src = this.imgs;
      },
      // 背景布局的函数
      checkedMode() {
        let t = 1, e = this.trueWidth, i = this.trueHeight;
        const s = this.mode.split(" ");
        switch (s[0]) {
          case "contain":
            this.trueWidth > this.w && (t = this.w / this.trueWidth), this.trueHeight * t > this.h && (t = this.h / this.trueHeight);
            break;
          case "cover":
            e = this.w, t = e / this.trueWidth, i = i * t, i < this.h && (i = this.h, t = i / this.trueHeight);
            break;
          default:
            try {
              let r = s[0];
              if (r.search("px") !== -1) {
                r = r.replace("px", ""), e = parseFloat(r);
                const o = e / this.trueWidth;
                let h = 1, a = s[1];
                a.search("px") !== -1 && (a = a.replace("px", ""), i = parseFloat(a), h = i / this.trueHeight), t = Math.min(o, h);
              }
              if (r.search("%") !== -1 && (r = r.replace("%", ""), e = parseFloat(r) / 100 * this.w, t = e / this.trueWidth), s.length === 2 && r === "auto") {
                let o = s[1];
                o.search("px") !== -1 && (o = o.replace("px", ""), i = parseFloat(o), t = i / this.trueHeight), o.search("%") !== -1 && (o = o.replace("%", ""), i = parseFloat(o) / 100 * this.h, t = i / this.trueHeight);
              }
            } catch (e2) {
              t = 1;
            }
        }
        return t;
      },
      // 自动截图函数
      goAutoCrop(t, e) {
        if (this.imgs === "" || this.imgs === null)
          return;
        this.clearCrop(), this.cropping = true;
        let i = this.w, s = this.h;
        if (this.centerBox) {
          const h = Math.abs(this.rotate) % 2 > 0;
          let a = (h ? this.trueHeight : this.trueWidth) * this.scale, n = (h ? this.trueWidth : this.trueHeight) * this.scale;
          i = a < i ? a : i, s = n < s ? n : s;
        }
        var r = t || parseFloat(this.autoCropWidth), o = e || parseFloat(this.autoCropHeight);
        (r === 0 || o === 0) && (r = i * 0.8, o = s * 0.8), r = r > i ? i : r, o = o > s ? s : o, this.fixed && (o = r / this.fixedNumber[0] * this.fixedNumber[1]), o > this.h && (o = this.h, r = o / this.fixedNumber[1] * this.fixedNumber[0]), this.changeCrop(r, o);
      },
      // 手动改变截图框大小函数
      changeCrop(t, e) {
        if (this.centerBox) {
          let i = this.getImgAxis();
          t > i.x2 - i.x1 && (t = i.x2 - i.x1, e = t / this.fixedNumber[0] * this.fixedNumber[1]), e > i.y2 - i.y1 && (e = i.y2 - i.y1, t = e / this.fixedNumber[1] * this.fixedNumber[0]);
        }
        this.cropW = t, this.cropH = e, this.checkCropLimitSize(), this.$nextTick(() => {
          this.cropOffsertX = (this.w - this.cropW) / 2, this.cropOffsertY = (this.h - this.cropH) / 2, this.centerBox && this.moveCrop(null, true);
        });
      },
      // 重置函数， 恢复组件置初始状态
      refresh() {
        this.img, this.imgs = "", this.scale = 1, this.crop = false, this.rotate = 0, this.w = 0, this.h = 0, this.trueWidth = 0, this.trueHeight = 0, this.imgIsQqualCrop = false, this.clearCrop(), this.$nextTick(() => {
          this.checkedImg();
        });
      },
      // 向左边旋转
      rotateLeft() {
        this.rotate = this.rotate <= -3 ? 0 : this.rotate - 1;
      },
      // 向右边旋转
      rotateRight() {
        this.rotate = this.rotate >= 3 ? 0 : this.rotate + 1;
      },
      // 清除旋转
      rotateClear() {
        this.rotate = 0;
      },
      // 图片坐标点校验
      checkoutImgAxis(t, e, i) {
        t = t || this.x, e = e || this.y, i = i || this.scale;
        let s = true;
        if (this.centerBox) {
          let r = this.getImgAxis(t, e, i), o = this.getCropAxis();
          r.x1 >= o.x1 && (s = false), r.x2 <= o.x2 && (s = false), r.y1 >= o.y1 && (s = false), r.y2 <= o.y2 && (s = false), s || this.changeImgScale(r, o, i);
        }
        return s;
      },
      // 缩放图片，将图片坐标适配截图框坐标
      changeImgScale(t, e, i) {
        let s = this.trueWidth, r = this.trueHeight, o = s * i, h = r * i;
        if (o >= this.cropW && h >= this.cropH)
          this.scale = i;
        else {
          const a = this.cropW / s, n = this.cropH / r, c = this.cropH <= r * a ? a : n;
          this.scale = c, o = s * c, h = r * c;
        }
        this.imgIsQqualCrop || (t.x1 >= e.x1 && (this.isRotateRightOrLeft ? this.x = e.x1 - (s - o) / 2 - (o - h) / 2 : this.x = e.x1 - (s - o) / 2), t.x2 <= e.x2 && (this.isRotateRightOrLeft ? this.x = e.x1 - (s - o) / 2 - (o - h) / 2 - h + this.cropW : this.x = e.x2 - (s - o) / 2 - o), t.y1 >= e.y1 && (this.isRotateRightOrLeft ? this.y = e.y1 - (r - h) / 2 - (h - o) / 2 : this.y = e.y1 - (r - h) / 2), t.y2 <= e.y2 && (this.isRotateRightOrLeft ? this.y = e.y2 - (r - h) / 2 - (h - o) / 2 - o : this.y = e.y2 - (r - h) / 2 - h)), (o < this.cropW || h < this.cropH) && (this.imgIsQqualCrop = true);
      }
    },
    mounted() {
      this.support = "onwheel" in document.createElement("div") ? "wheel" : document.onmousewheel !== void 0 ? "mousewheel" : "DOMMouseScroll";
      let t = this;
      var e = navigator.userAgent;
      this.isIOS = !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), HTMLCanvasElement.prototype.toBlob || Object.defineProperty(HTMLCanvasElement.prototype, "toBlob", {
        value: function(i, s, r) {
          for (var o = atob(this.toDataURL(s, r).split(",")[1]), h = o.length, a = new Uint8Array(h), n = 0; n < h; n++)
            a[n] = o.charCodeAt(n);
          i(new Blob([a], { type: t.type || "image/png" }));
        }
      }), this.showPreview(), this.checkedImg();
    },
    unmounted() {
      window.removeEventListener("mousemove", this.moveCrop), window.removeEventListener("mouseup", this.leaveCrop), window.removeEventListener("touchmove", this.moveCrop), window.removeEventListener("touchend", this.leaveCrop), this.cancelScale();
    }
  });
  const A = {
    key: 0,
    class: "cropper-box"
  };
  const B = ["src"];
  const P = { class: "cropper-view-box" };
  const R = ["src"];
  const D = { key: 1 };
  function U(t, e, i, s, r, o) {
    return vue.openBlock(), vue.createElementBlock("div", {
      class: "vue-cropper",
      ref: "cropper",
      onMouseover: e[28] || (e[28] = (...h) => t.scaleImg && t.scaleImg(...h)),
      onMouseout: e[29] || (e[29] = (...h) => t.cancelScale && t.cancelScale(...h))
    }, [
      t.imgs ? (vue.openBlock(), vue.createElementBlock("div", A, [
        vue.withDirectives(vue.createElementVNode("div", {
          class: "cropper-box-canvas",
          style: vue.normalizeStyle({
            width: t.trueWidth + "px",
            height: t.trueHeight + "px",
            transform: "scale(" + t.scale + "," + t.scale + ") translate3d(" + t.x / t.scale + "px," + t.y / t.scale + "px,0)rotateZ(" + t.rotate * 90 + "deg)"
          })
        }, [
          vue.createElementVNode("img", {
            src: t.imgs,
            alt: "cropper-img",
            ref: "cropperImg"
          }, null, 8, B)
        ], 4), [
          [vue.vShow, !t.loading]
        ])
      ])) : vue.createCommentVNode("", true),
      vue.createElementVNode("div", {
        class: vue.normalizeClass(["cropper-drag-box", { "cropper-move": t.move && !t.crop, "cropper-crop": t.crop, "cropper-modal": t.cropping }]),
        onMousedown: e[0] || (e[0] = (...h) => t.startMove && t.startMove(...h)),
        onTouchstart: e[1] || (e[1] = (...h) => t.startMove && t.startMove(...h))
      }, null, 34),
      vue.withDirectives(vue.createElementVNode("div", {
        class: "cropper-crop-box",
        style: vue.normalizeStyle({
          width: t.cropW + "px",
          height: t.cropH + "px",
          transform: "translate3d(" + t.cropOffsertX + "px," + t.cropOffsertY + "px,0)"
        })
      }, [
        vue.createElementVNode("span", P, [
          vue.createElementVNode("img", {
            style: vue.normalizeStyle({
              width: t.trueWidth + "px",
              height: t.trueHeight + "px",
              transform: "scale(" + t.scale + "," + t.scale + ") translate3d(" + (t.x - t.cropOffsertX) / t.scale + "px," + (t.y - t.cropOffsertY) / t.scale + "px,0)rotateZ(" + t.rotate * 90 + "deg)"
            }),
            src: t.imgs,
            alt: "cropper-img"
          }, null, 12, R)
        ]),
        vue.createElementVNode("span", {
          class: "cropper-face cropper-move",
          onMousedown: e[2] || (e[2] = (...h) => t.cropMove && t.cropMove(...h)),
          onTouchstart: e[3] || (e[3] = (...h) => t.cropMove && t.cropMove(...h))
        }, null, 32),
        t.info ? (vue.openBlock(), vue.createElementBlock("span", {
          key: 0,
          class: "crop-info",
          style: vue.normalizeStyle({ top: t.cropInfo.top })
        }, vue.toDisplayString(t.cropInfo.width) + " \xD7 " + vue.toDisplayString(t.cropInfo.height), 5)) : vue.createCommentVNode("", true),
        t.fixedBox ? vue.createCommentVNode("", true) : (vue.openBlock(), vue.createElementBlock("span", D, [
          vue.createElementVNode("span", {
            class: "crop-line line-w",
            onMousedown: e[4] || (e[4] = (h) => t.changeCropSize(h, false, true, 0, 1)),
            onTouchstart: e[5] || (e[5] = (h) => t.changeCropSize(h, false, true, 0, 1))
          }, null, 32),
          vue.createElementVNode("span", {
            class: "crop-line line-a",
            onMousedown: e[6] || (e[6] = (h) => t.changeCropSize(h, true, false, 1, 0)),
            onTouchstart: e[7] || (e[7] = (h) => t.changeCropSize(h, true, false, 1, 0))
          }, null, 32),
          vue.createElementVNode("span", {
            class: "crop-line line-s",
            onMousedown: e[8] || (e[8] = (h) => t.changeCropSize(h, false, true, 0, 2)),
            onTouchstart: e[9] || (e[9] = (h) => t.changeCropSize(h, false, true, 0, 2))
          }, null, 32),
          vue.createElementVNode("span", {
            class: "crop-line line-d",
            onMousedown: e[10] || (e[10] = (h) => t.changeCropSize(h, true, false, 2, 0)),
            onTouchstart: e[11] || (e[11] = (h) => t.changeCropSize(h, true, false, 2, 0))
          }, null, 32),
          vue.createElementVNode("span", {
            class: "crop-point point1",
            onMousedown: e[12] || (e[12] = (h) => t.changeCropSize(h, true, true, 1, 1)),
            onTouchstart: e[13] || (e[13] = (h) => t.changeCropSize(h, true, true, 1, 1))
          }, null, 32),
          vue.createElementVNode("span", {
            class: "crop-point point2",
            onMousedown: e[14] || (e[14] = (h) => t.changeCropSize(h, false, true, 0, 1)),
            onTouchstart: e[15] || (e[15] = (h) => t.changeCropSize(h, false, true, 0, 1))
          }, null, 32),
          vue.createElementVNode("span", {
            class: "crop-point point3",
            onMousedown: e[16] || (e[16] = (h) => t.changeCropSize(h, true, true, 2, 1)),
            onTouchstart: e[17] || (e[17] = (h) => t.changeCropSize(h, true, true, 2, 1))
          }, null, 32),
          vue.createElementVNode("span", {
            class: "crop-point point4",
            onMousedown: e[18] || (e[18] = (h) => t.changeCropSize(h, true, false, 1, 0)),
            onTouchstart: e[19] || (e[19] = (h) => t.changeCropSize(h, true, false, 1, 0))
          }, null, 32),
          vue.createElementVNode("span", {
            class: "crop-point point5",
            onMousedown: e[20] || (e[20] = (h) => t.changeCropSize(h, true, false, 2, 0)),
            onTouchstart: e[21] || (e[21] = (h) => t.changeCropSize(h, true, false, 2, 0))
          }, null, 32),
          vue.createElementVNode("span", {
            class: "crop-point point6",
            onMousedown: e[22] || (e[22] = (h) => t.changeCropSize(h, true, true, 1, 2)),
            onTouchstart: e[23] || (e[23] = (h) => t.changeCropSize(h, true, true, 1, 2))
          }, null, 32),
          vue.createElementVNode("span", {
            class: "crop-point point7",
            onMousedown: e[24] || (e[24] = (h) => t.changeCropSize(h, false, true, 0, 2)),
            onTouchstart: e[25] || (e[25] = (h) => t.changeCropSize(h, false, true, 0, 2))
          }, null, 32),
          vue.createElementVNode("span", {
            class: "crop-point point8",
            onMousedown: e[26] || (e[26] = (h) => t.changeCropSize(h, true, true, 2, 2)),
            onTouchstart: e[27] || (e[27] = (h) => t.changeCropSize(h, true, true, 2, 2))
          }, null, 32)
        ]))
      ], 4), [
        [vue.vShow, t.cropping]
      ])
    ], 544);
  }
  const M = /* @__PURE__ */ $(z, [["render", U], ["__scopeId", "data-v-a742df44"]]);
  const F = function(t) {
    t.component("VueCropper", M);
  };
  const V = {
    version: "1.1.4",
    install: F,
    VueCropper: M
  };

  let messageNode = null;
  function installMessage(app) {
    if (!messageNode) {
      messageNode = vue.h(MessageView, {});
      const container = document.createElement("div");
      messageNode.appContext = app._context;
      vue.render(messageNode, container);
      messageNode.component.exposed.success;
      messageNode.component.exposed.error;
      document.body.appendChild(container.firstElementChild);
    }
  }

  const install = {
    install(app) {
      if (app.config.globalProperties.$pinia) ; else {
        const pinia = createPinia();
        pinia.use(src_default);
        app.use(pinia);
      }
      app.use(V).use(rn);
      app.provide(mittKey, mitt);
      if (!myPrintOptions.disabledClient) {
        useSocket().INIT_SOCKET();
      }
      useConfigStore().initConfig();
      installPrinter(app);
      installMessage(app);
      initDisplayRatio();
      const container = document.createElement("div");
      container.classList.add("my-popover_container");
      document.body.appendChild(container);
    }
  };

  const version = "1.0.36";

  exports.DesignPanel = DesignPanel;
  exports.MyPrinter = MyPrinter;
  exports.cellTypeFormat = cellTypeFormat;
  exports.createPrint = install;
  exports.displayStrategyFormat = displayStrategyFormat;
  exports.elementTypeFormat = elementTypeFormat;
  exports.mountDesign = mountDesign;
  exports.statisticsTypeFormat = statisticsTypeFormat;
  exports.version = version;

}));
