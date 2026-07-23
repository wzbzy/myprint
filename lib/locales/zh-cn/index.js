'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var barcodeMsg = require('./barcodeMsg.js');
var common = require('./common.js');
var font = require('./font.js');
var handlePanel = require('./handle-panel.js');
var preview = require('./preview.js');
var provider = require('./provider.js');
var setting = require('./setting.js');
var toolbar = require('./toolbar.js');

var zhCn = {
  ...barcodeMsg.default,
  ...common.default,
  ...font.default,
  ...handlePanel.default,
  ...preview.default,
  ...provider.default,
  ...setting.default,
  ...toolbar.default
};

exports.default = zhCn;
//# sourceMappingURL=index.js.map
