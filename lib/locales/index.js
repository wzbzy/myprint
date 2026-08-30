'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vueI18n = require('vue-i18n');
var index = require('./zh-cn/index.js');
var index$1 = require('./en-us/index.js');

const i18nInit = vueI18n.createI18n({
  legacy: false,
  globalInjection: true,
  // 全局模式，可以直接使用 $t
  locale: window.localStorage.getItem("lang") || "zhCn",
  messages: {
    zhCn: index.default,
    enUs: index$1.default
  }
});
function i18n(msg) {
  return i18nInit.global.t(msg);
}

exports.default = i18nInit;
exports.i18n = i18n;
//# sourceMappingURL=index.js.map
