import { defineComponent, openBlock, createElementBlock, createElementVNode, normalizeStyle, unref, createVNode, withCtx, createCommentVNode, createBlock, isRef } from 'vue';
import 'vue-cropper/dist/index.css';
import { VueCropper } from 'vue-cropper';
import { ref, reactive, onMounted } from 'vue-demi';
import { getRecursionParentPanel, valueUnit, displayDesign } from '../../../utils/elementUtil.mjs';
import { unit2px } from '../../../utils/devicePixelRatio.mjs';
import { elementHandleStatusList, chooseImgTypeList } from '../../../constants/common.mjs';
import MyTabs from '../../my/tabs/my-tabs.vue.mjs';
import MyDialog from '../../my/dialog/my-dialog.vue.mjs';
import MyIcon from '../../my/icon/my-icon.vue.mjs';
import Crop from '../../my/icon/icons/Crop.vue.mjs';
import Plus from '../../my/icon/icons/Plus.vue.mjs';
import ZoomIn from '../../my/icon/icons/ZoomIn.vue.mjs';
import ZoomOut from '../../my/icon/icons/ZoomOut.vue.mjs';
import RefreshLeft from '../../my/icon/icons/RefreshLeft.vue.mjs';
import RefreshRight from '../../my/icon/icons/RefreshRight.vue.mjs';
import Check from '../../my/icon/icons/Check.vue.mjs';
import CloseBold from '../../my/icon/icons/CloseBold.vue.mjs';
import { downloadImg2Base64 } from '../../../utils/utils.mjs';
import MyInput from '../../my/input/my-input.vue.mjs';
import { isEmpty } from 'lodash';
import { MyMessage } from '../../my/message/my-message.mjs';

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
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "image",
  props: {
    element: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const cropper = ref({});
    const uploadFileRef = ref();
    const sourceBase64 = ref();
    const contentBase64 = ref();
    const imageHttpUrlInput = ref("");
    const option = reactive({
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
      autoCropWidth: unit2px(props.element.width, getRecursionParentPanel(props.element)),
      //默认生成截图框宽度
      autoCropHeight: unit2px(props.element.height, getRecursionParentPanel(props.element)),
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
    const data = reactive({
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
      if (isEmpty(imageHttpUrlInput.value)) {
        MyMessage.error("\u8BF7\u8F93\u5165\u56FE\u7247\u5730\u5740");
      }
      if (!imageHttpUrlInput.value.startsWith("http") && !imageHttpUrlInput.value.startsWith("https")) {
        MyMessage.error("\u56FE\u7247\u5730\u5740\u9700\u8981\u4EE5http/https\u5F00\u5934");
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
    const imgRef = ref();
    onMounted(() => {
      loadData();
    });
    function loadData() {
      if (!props.element.data) {
        return;
      }
      if (props.element.data.startsWith("http")) {
        downloadImg2Base64(props.element.data).then((base64) => {
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
      return openBlock(), createElementBlock("div", _hoisted_1, [
        __props.element.data != null ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createElementVNode("img", {
            ref_key: "imgRef",
            ref: imgRef,
            draggable: "false",
            onLoad: loadImg,
            style: normalizeStyle({ width: unref(valueUnit)(__props.element.width, unref(getRecursionParentPanel)(__props.element)), height: unref(valueUnit)(__props.element.height, unref(getRecursionParentPanel)(__props.element)) }),
            src: unref(contentBase64),
            alt: "image"
          }, null, 44, _hoisted_3),
          unref(displayDesign)(__props.element) && unref(elementHandleStatusList).includes(__props.element.runtimeOption.status) ? (openBlock(), createElementBlock("div", _hoisted_4, [
            createVNode(MyIcon, {
              class: "img-tool-icon",
              onClick: editImgClick
            }, {
              default: withCtx(() => [
                createVNode(Crop)
              ]),
              _: 1
              /* STABLE */
            }),
            createCommentVNode('        <el-icon class="img-tool-icon">'),
            createCommentVNode("          <MoreFilled/>"),
            createCommentVNode("        </el-icon>")
          ])) : createCommentVNode("v-if", true)
        ])) : (openBlock(), createElementBlock("div", _hoisted_5, [
          unref(displayDesign)(__props.element) ? (openBlock(), createBlock(MyIcon, {
            key: 0,
            size: 20,
            class: "avatar-uploader-icon",
            onClick: clickPlus
          }, {
            default: withCtx(() => [
              createVNode(Plus)
            ]),
            _: 1
            /* STABLE */
          })) : createCommentVNode("v-if", true)
        ])),
        createVNode(MyDialog, {
          class: "image-crop-dialog",
          modelValue: unref(data).cropVisible,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(data).cropVisible = $event),
          width: "640px",
          title: "\u56FE\u7247\u88C1\u526A"
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_6, [
              createVNode(unref(VueCropper), {
                ref_key: "cropper",
                ref: cropper,
                img: unref(sourceBase64),
                outputSize: unref(option).outputSize,
                outputType: unref(option).outputType,
                info: unref(option).info,
                canScale: unref(option).canScale,
                autoCrop: unref(option).autoCrop,
                autoCropWidth: unref(option).autoCropWidth,
                autoCropHeight: unref(option).autoCropHeight,
                fixed: __props.element.option.keepRatio,
                fixedNumber: unref(option).fixedNumber,
                full: unref(option).full,
                fixedBox: unref(option).fixedBox,
                canMove: unref(option).canMove,
                canMoveBox: unref(option).canMoveBox,
                original: unref(option).original,
                centerBox: unref(option).centerBox,
                height: unref(option).height,
                infoTrue: unref(option).infoTrue,
                maxImgSize: unref(option).maxImgSize,
                enlarge: unref(option).enlarge,
                mode: unref(option).mode,
                onRealTime: realTime,
                onImgLoad: imgLoad
              }, null, 8, ["img", "outputSize", "outputType", "info", "canScale", "autoCrop", "autoCropWidth", "autoCropHeight", "fixed", "fixedNumber", "full", "fixedBox", "canMove", "canMoveBox", "original", "centerBox", "height", "infoTrue", "maxImgSize", "enlarge", "mode"])
            ]),
            createElementVNode("div", _hoisted_7, [
              createVNode(MyIcon, {
                class: "image-handle-icon",
                onClick: imageZoomIn
              }, {
                default: withCtx(() => [
                  createVNode(ZoomIn)
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(MyIcon, {
                class: "image-handle-icon",
                onClick: imageZoomOut
              }, {
                default: withCtx(() => [
                  createVNode(ZoomOut)
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(MyIcon, {
                class: "image-handle-icon",
                onClick: rotateLeft
              }, {
                default: withCtx(() => [
                  createVNode(RefreshLeft)
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(MyIcon, {
                class: "image-handle-icon",
                onClick: rotateRight
              }, {
                default: withCtx(() => [
                  createVNode(RefreshRight)
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(MyIcon, {
                class: "image-handle-icon-sure",
                onClick: sureClip
              }, {
                default: withCtx(() => [
                  createVNode(Check)
                ]),
                _: 1
                /* STABLE */
              })
            ])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        createVNode(MyDialog, {
          class: "choose-image-type-dialog",
          "show-header": false,
          modelValue: unref(data).chooseImageVisible,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(data).chooseImageVisible = $event),
          onClose: handleCloseChooseImageDialog,
          width: "520px"
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_8, [
              createCommentVNode('        <div class="choose-image-type-dialog-header_tab">'),
              createCommentVNode('          <div class="choose-image-type-dialog-header-title">\u672C\u5730\u4E0A\u4F20</div>'),
              createCommentVNode('          <div class="choose-image-type-dialog-header-title">\u56FE\u7247\u94FE\u63A5</div>'),
              createCommentVNode("        </div>"),
              createVNode(MyTabs, {
                class: "choose-image-type-dialog-header_tab",
                modelValue: unref(data).chooseImageType,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(data).chooseImageType = $event),
                "item-list": unref(chooseImgTypeList)
              }, null, 8, ["modelValue", "item-list"]),
              createVNode(MyIcon, {
                color: "#666666",
                size: "20",
                class: "cursor-pointer",
                onClick: _cache[2] || (_cache[2] = ($event) => unref(data).chooseImageVisible = false)
              }, {
                default: withCtx(() => [
                  createVNode(CloseBold)
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            unref(data).chooseImageType == "localFile" ? (openBlock(), createElementBlock("div", _hoisted_9, [
              createElementVNode("div", {
                class: "choose-image-localFile-btn",
                onClick: chooseImage
              }, "\u4E0A\u4F20\u672C\u5730\u56FE\u7247")
            ])) : createCommentVNode("v-if", true),
            unref(data).chooseImageType == "url" ? (openBlock(), createElementBlock("div", _hoisted_10, [
              createVNode(MyInput, {
                class: "choose-image-url-input",
                placeholder: "\u8BF7\u8F93\u5165\u7F51\u7EDC\u5730\u5740http/https",
                modelValue: unref(imageHttpUrlInput),
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isRef(imageHttpUrlInput) ? imageHttpUrlInput.value = $event : null)
              }, null, 8, ["modelValue"]),
              createElementVNode("div", {
                class: "choose-image-url-btn",
                onClick: clickSureImageHttpUrl
              }, " \u786E\u8BA4 ")
            ])) : createCommentVNode("v-if", true)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        createElementVNode(
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

export { _sfc_main as default };
//# sourceMappingURL=image.vue2.mjs.map
