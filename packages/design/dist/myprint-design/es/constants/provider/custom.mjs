import { i18n } from '../../locales/index.mjs';

const customProvider = {
  pageUnit: "mm",
  elementList: [
    {
      "type": "Text",
      iconClass: "iconfont icon-text",
      "data": i18n("provider.text.default.data"),
      "width": 50,
      "height": 8
    },
    {
      "type": "TextTime",
      contentType: "Text",
      iconClass: "iconfont-color icon-color-text-time",
      option: { formatter: "{{yyyy-MM-dd hh:mm:ss}}" },
      "width": 43,
      "height": 8
    },
    {
      "type": "Image",
      iconClass: "iconfont-color icon-color-img",
      "width": 50.25,
      "height": 30
    },
    {
      "type": "HorizontalLine",
      iconClass: "iconfont-color icon-color-vertical_solidline",
      "width": 30.25,
      "option": {
        lineWidth: 0.3
      }
    },
    {
      "type": "VerticalLine",
      iconClass: "iconfont-color icon-color-crossrange_solidline",
      "height": 21,
      "option": {
        lineWidth: 0.3
      }
    },
    {
      "type": "DottedHorizontalLine",
      iconClass: "iconfont-color icon-color-vertical_dottedline",
      "width": 21,
      "option": {
        lineWidth: 0.3
      }
    },
    {
      "type": "DottedVerticalLine",
      iconClass: "iconfont-color icon-color-crossrange_dottedline",
      "height": 21,
      option: {
        lineWidth: 0.3
      }
    },
    {
      type: "Rect",
      iconClass: "iconfont icon-rectangle_solidline",
      "width": 30,
      "height": 30,
      option: {
        lineWidth: 0.3
      }
    },
    {
      type: "Container",
      iconClass: "iconfont-color icon-color-container",
      "width": 70,
      "height": 70
    },
    {
      type: "PageHeader",
      iconClass: "iconfont-color icon-color-page_header",
      "height": 30
    },
    {
      type: "PageFooter",
      iconClass: "iconfont-color icon-color-page_footer",
      "height": 30
    },
    {
      type: "PageNum",
      contentType: "Text",
      iconClass: "iconfont-color icon-color-page",
      option: {
        formatter: "\u7B2C{{pageIndex::1}}\u9875/\u5171{{pageSize::1}}\u9875",
        textAlign: "end",
        verticalAlign: "center",
        fixed: true
      },
      width: 30,
      height: 6
    },
    {
      field: "",
      type: "SvgPolygonLine",
      data: '{"points":[{"x": 0,"y": 0},{"x": 30,"y": 0},{"x": 30,"y": 30},{"x": 0,"y": 30}]}',
      iconClass: "iconfont-color icon-color-svg-rect",
      width: 30,
      "option": {
        borderWidth: 0.3
      },
      height: 30
    },
    {
      field: "",
      type: "SvgCircle",
      iconClass: "iconfont-color icon-color-svg-circle",
      width: 30,
      "option": {
        borderWidth: 0.3
      },
      height: 30
    },
    {
      field: "",
      type: "SvgEllipse",
      iconClass: "iconfont-color icon-color-svg-ellipse",
      width: 30,
      "option": {
        borderWidth: 0.3
      },
      height: 30
    },
    {
      field: "",
      type: "DrawPanel",
      iconClass: "iconfont-color icon-color-shouxieqianming-icon",
      width: 30,
      "option": {
        borderWidth: 0.3
      },
      height: 30
    },
    {
      field: "",
      type: "SvgLine",
      data: '{"points":[{"x": 0,"y": 0},{"x": 30,"y": 30}]}',
      iconClass: "iconfont-color icon-color-svg-line",
      width: 30,
      "option": {
        borderWidth: 0.3
      },
      height: 30
    },
    {
      field: "",
      type: "SvgBezierCurve",
      data: '{"points":[{"x": 0,"y": 0},{"x": 30,"y": 0}],"controlPoints":[{"x": 15,"y": 50}]}',
      iconClass: "iconfont-color icon-color-svg-bezier2",
      width: 30,
      "option": {
        borderWidth: 0.3
      },
      height: 30
    },
    {
      field: "",
      type: "SvgBezierCurveThree",
      data: '{"points":[{"x": 0,"y": 15},{"x": 30,"y": 15}],"controlPoints":[{"x": 10,"y": 30},{"x": 20,"y": 0}]}',
      iconClass: "iconfont-color icon-color-svg-bezier3",
      width: 30,
      "option": {
        borderWidth: 0.3
      },
      height: 30
    }
  ]
};

export { customProvider };
//# sourceMappingURL=custom.mjs.map
