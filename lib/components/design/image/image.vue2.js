'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('vue-cropper/dist/index.css');
var VueCropper = require('vue-cropper');
var vueDemi = require('vue-demi');
var elementUtil = require('../../../utils/elementUtil.js');
var devicePixelRatio = require('../../../utils/devicePixelRatio.js');
var common = require('../../../constants/common.js');
var myTabs = require('../../my/tabs/my-tabs.vue.js');
var myDialog = require('../../my/dialog/my-dialog.vue.js');
var myIcon = require('../../my/icon/my-icon.vue.js');
var Crop = require('../../my/icon/icons/Crop.vue.js');
var Plus = require('../../my/icon/icons/Plus.vue.js');
var ZoomIn = require('../../my/icon/icons/ZoomIn.vue.js');
var ZoomOut = require('../../my/icon/icons/ZoomOut.vue.js');
var RefreshLeft = require('../../my/icon/icons/RefreshLeft.vue.js');
var RefreshRight = require('../../my/icon/icons/RefreshRight.vue.js');
var Check = require('../../my/icon/icons/Check.vue.js');
var CloseBold = require('../../my/icon/icons/CloseBold.vue.js');
var utils = require('../../../utils/utils.js');
var myInput = require('../../my/input/my-input.vue.js');
var lodash = require('lodash');
var myMessage = require('../../my/message/my-message.js');

const _hoisted_1 = { class: "width-100-p height-100-p" };
const _hoisted_2 = {
  key: 0,
  class: "img_wrapper"
};
const _hoisted_3 = ["src"];
const _hoisted_4 = {
  key: 0,
  class: "img-tool_wrapper"
};
const _hoisted_5 = {
  key: 1,
  class: "choose-img_wrapper"
};
const _hoisted_6 = { style: { "width": "640px", "height": "640px" } };
const _hoisted_7 = { class: "image-handle-wrapper" };
const _hoisted_8 = { class: "choose-image-type-dialog-header display-flex" };
const _hoisted_9 = {
  key: 0,
  class: "choose-image-localFile-panel display-flex"
};
const _hoisted_10 = {
  key: 1,
  class: "choose-image-url-panel display-flex display-flex-column"
};
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "image",
  props: {
    element: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const cropper = vueDemi.ref({});
    const uploadFileRef = vueDemi.ref();
    const sourceBase64 = vueDemi.ref();
    const contentBase64 = vueDemi.ref();
    const imageHttpUrlInput = vueDemi.ref("");
    const option = vueDemi.reactive({
      outputSize: 1,
      //裁剪生成图片的质量(可选0.1 - 1)
      outputType: "png",
      //裁剪生成图片的格式（jpeg || png || webp）
      info: true,
      //图片大小信息
      canScale: true,
      //图片是否允许滚轮缩放
      autoCrop: true,
      //是否默认生成截图框
      autoCropWidth: devicePixelRatio.unit2px(props.element.width, elementUtil.getRecursionParentPanel(props.element)),
      //默认生成截图框宽度
      autoCropHeight: devicePixelRatio.unit2px(props.element.height, elementUtil.getRecursionParentPanel(props.element)),
      //默认生成截图框高度
      fixed: true,
      //是否开启截图框宽高固定比例
      fixedNumber: [props.element.width, props.element.height],
      //截图框的宽高比例
      full: true,
      //false按原比例裁切图片，不失真
      fixedBox: false,
      //固定截图框大小，不允许改变
      canMove: true,
      //上传图片是否可以移动
      canMoveBox: true,
      //截图框能否拖动
      original: false,
      //上传图片按照原始比例渲染
      centerBox: false,
      //截图框是否被限制在图片里面
      height: true,
      //是否按照设备的dpr 输出等比例图片
      infoTrue: false,
      //true为展示真实输出图片宽高，false展示看到的截图框宽高
      maxImgSize: 3e3,
      //限制图片最大宽度和高度
      enlarge: 1,
      //图片根据截图框输出比例倍数
      mode: "640px 640px"
      //图片默认渲染方式
    });
    const data = vueDemi.reactive({
      cropVisible: false,
      chooseImageVisible: false,
      dragFlag: false,
      chooseImageType: "localFile"
    });
    function editImgClick() {
      data.cropVisible = true;
    }
    function realTime(_data) {
    }
    function imageZoomIn() {
      cropper.value.changeScale(1);
    }
    function imageZoomOut() {
      cropper.value.changeScale(-1);
    }
    function rotateLeft() {
      cropper.value.rotateLeft();
    }
    function rotateRight() {
      cropper.value.rotateRight();
    }
    function sureClip() {
      cropper.value.getCropBlob((result) => {
        blobToDataURI(result, function(res) {
          props.element.data = res;
          contentBase64.value = res;
          data.cropVisible = false;
        });
      });
    }
    function blobToDataURI(blob, callback) {
      var reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onload = function(e) {
        callback(e.target.result);
      };
    }
    function imgLoad() {
    }
    function selectImg(event) {
      let file = event.target.files[0];
      if (!/\.(jpg|jpeg|png|JPG|PNG)$/.test(event.target.value)) {
        return false;
      }
      let reader = new FileReader();
      reader.onload = (e) => {
        if (typeof e.target.result === "object") {
          sourceBase64.value = window.URL.createObjectURL(new Blob([e.target.result]));
        } else {
          sourceBase64.value = e.target.result;
          props.element.data = sourceBase64.value;
        }
        contentBase64.value = sourceBase64.value;
        data.chooseImageVisible = false;
      };
      reader.readAsDataURL(file);
    }
    function clickSureImageHttpUrl() {
      if (lodash.isEmpty(imageHttpUrlInput.value)) {
        myMessage.MyMessage.error("\u8BF7\u8F93\u5165\u56FE\u7247\u5730\u5740");
      }
      if (!imageHttpUrlInput.value.startsWith("http") && !imageHttpUrlInput.value.startsWith("https")) {
        myMessage.MyMessage.error("\u56FE\u7247\u5730\u5740\u9700\u8981\u4EE5http/https\u5F00\u5934");
      }
      props.element.data = imageHttpUrlInput.value;
      loadData();
    }
    function handleCloseChooseImageDialog() {
      imageHttpUrlInput.value = "";
    }
    function clickPlus(_ev) {
      data.chooseImageVisible = true;
    }
    function chooseImage(_ev) {
      uploadFileRef.value.click();
    }
    const imgRef = vueDemi.ref();
    vueDemi.onMounted(() => {
      loadData();
    });
    function loadData() {
      if (!props.element.data) {
        return;
      }
      if (props.element.data.startsWith("http")) {
        utils.downloadImg2Base64(props.element.data).then((base64) => {
          sourceBase64.value = base64;
          contentBase64.value = base64;
        }).catch((_e) => {
        });
      } else {
        sourceBase64.value = props.element.data;
        contentBase64.value = props.element.data;
      }
    }
    function loadImg() {
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        __props.element.data != null ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [
          vue.createElementVNode("img", {
            ref_key: "imgRef",
            ref: imgRef,
            draggable: "false",
            onLoad: loadImg,
            style: vue.normalizeStyle({ width: vue.unref(elementUtil.valueUnit)(__props.element.width, vue.unref(elementUtil.getRecursionParentPanel)(__props.element)), height: vue.unref(elementUtil.valueUnit)(__props.element.height, vue.unref(elementUtil.getRecursionParentPanel)(__props.element)) }),
            src: vue.unref(contentBase64),
            alt: "image"
          }, null, 44, _hoisted_3),
          vue.unref(elementUtil.displayDesign)(__props.element) && vue.unref(common.elementHandleStatusList).includes(__props.element.runtimeOption.status) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4, [
            vue.createVNode(myIcon.default, {
              class: "img-tool-icon",
              onClick: editImgClick
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(Crop.default)
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createCommentVNode('        <el-icon class="img-tool-icon">'),
            vue.createCommentVNode("          <MoreFilled/>"),
            vue.createCommentVNode("        </el-icon>")
          ])) : vue.createCommentVNode("v-if", true)
        ])) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_5, [
          vue.unref(elementUtil.displayDesign)(__props.element) ? (vue.openBlock(), vue.createBlock(myIcon.default, {
            key: 0,
            size: 20,
            class: "avatar-uploader-icon",
            onClick: clickPlus
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(Plus.default)
            ]),
            _: 1
            /* STABLE */
          })) : vue.createCommentVNode("v-if", true)
        ])),
        vue.createVNode(myDialog.default, {
          class: "image-crop-dialog",
          modelValue: vue.unref(data).cropVisible,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(data).cropVisible = $event),
          width: "640px",
          title: "\u56FE\u7247\u88C1\u526A"
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("div", _hoisted_6, [
              vue.createVNode(vue.unref(VueCropper.VueCropper), {
                ref_key: "cropper",
                ref: cropper,
                img: vue.unref(sourceBase64),
                outputSize: vue.unref(option).outputSize,
                outputType: vue.unref(option).outputType,
                info: vue.unref(option).info,
                canScale: vue.unref(option).canScale,
                autoCrop: vue.unref(option).autoCrop,
                autoCropWidth: vue.unref(option).autoCropWidth,
                autoCropHeight: vue.unref(option).autoCropHeight,
                fixed: __props.element.option.keepRatio,
                fixedNumber: vue.unref(option).fixedNumber,
                full: vue.unref(option).full,
                fixedBox: vue.unref(option).fixedBox,
                canMove: vue.unref(option).canMove,
                canMoveBox: vue.unref(option).canMoveBox,
                original: vue.unref(option).original,
                centerBox: vue.unref(option).centerBox,
                height: vue.unref(option).height,
                infoTrue: vue.unref(option).infoTrue,
                maxImgSize: vue.unref(option).maxImgSize,
                enlarge: vue.unref(option).enlarge,
                mode: vue.unref(option).mode,
                onRealTime: realTime,
                onImgLoad: imgLoad
              }, null, 8, ["img", "outputSize", "outputType", "info", "canScale", "autoCrop", "autoCropWidth", "autoCropHeight", "fixed", "fixedNumber", "full", "fixedBox", "canMove", "canMoveBox", "original", "centerBox", "height", "infoTrue", "maxImgSize", "enlarge", "mode"])
            ]),
            vue.createElementVNode("div", _hoisted_7, [
              vue.createVNode(myIcon.default, {
                class: "image-handle-icon",
                onClick: imageZoomIn
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(ZoomIn.default)
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(myIcon.default, {
                class: "image-handle-icon",
                onClick: imageZoomOut
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(ZoomOut.default)
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(myIcon.default, {
                class: "image-handle-icon",
                onClick: rotateLeft
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(RefreshLeft.default)
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(myIcon.default, {
                class: "image-handle-icon",
                onClick: rotateRight
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(RefreshRight.default)
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(myIcon.default, {
                class: "image-handle-icon-sure",
                onClick: sureClip
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(Check.default)
                ]),
                _: 1
                /* STABLE */
              })
            ])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        vue.createVNode(myDialog.default, {
          class: "choose-image-type-dialog",
          "show-header": false,
          modelValue: vue.unref(data).chooseImageVisible,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => vue.unref(data).chooseImageVisible = $event),
          onClose: handleCloseChooseImageDialog,
          width: "520px"
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("div", _hoisted_8, [
              vue.createCommentVNode('        <div class="choose-image-type-dialog-header_tab">'),
              vue.createCommentVNode('          <div class="choose-image-type-dialog-header-title">\u672C\u5730\u4E0A\u4F20</div>'),
              vue.createCommentVNode('          <div class="choose-image-type-dialog-header-title">\u56FE\u7247\u94FE\u63A5</div>'),
              vue.createCommentVNode("        </div>"),
              vue.createVNode(myTabs.default, {
                class: "choose-image-type-dialog-header_tab",
                modelValue: vue.unref(data).chooseImageType,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.unref(data).chooseImageType = $event),
                "item-list": vue.unref(common.chooseImgTypeList)
              }, null, 8, ["modelValue", "item-list"]),
              vue.createVNode(myIcon.default, {
                color: "#666666",
                size: "20",
                class: "cursor-pointer",
                onClick: _cache[2] || (_cache[2] = ($event) => vue.unref(data).chooseImageVisible = false)
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(CloseBold.default)
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            vue.unref(data).chooseImageType == "localFile" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_9, [
              vue.createElementVNode("div", {
                class: "choose-image-localFile-btn",
                onClick: chooseImage
              }, "\u4E0A\u4F20\u672C\u5730\u56FE\u7247")
            ])) : vue.createCommentVNode("v-if", true),
            vue.unref(data).chooseImageType == "url" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_10, [
              vue.createVNode(myInput.default, {
                class: "choose-image-url-input",
                placeholder: "\u8BF7\u8F93\u5165\u7F51\u7EDC\u5730\u5740http/https",
                modelValue: vue.unref(imageHttpUrlInput),
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => vue.isRef(imageHttpUrlInput) ? imageHttpUrlInput.value = $event : null)
              }, null, 8, ["modelValue"]),
              vue.createElementVNode("div", {
                class: "choose-image-url-btn",
                onClick: clickSureImageHttpUrl
              }, " \u786E\u8BA4 ")
            ])) : vue.createCommentVNode("v-if", true)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        vue.createElementVNode(
          "input",
          {
            type: "file",
            ref_key: "uploadFileRef",
            ref: uploadFileRef,
            style: { "visibility": "hidden" },
            accept: "image/png, image/jpeg, image/jpg",
            onChange: _cache[5] || (_cache[5] = ($event) => selectImg($event))
          },
          null,
          544
          /* NEED_HYDRATION, NEED_PATCH */
        )
      ]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=image.vue2.js.map
