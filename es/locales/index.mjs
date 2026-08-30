import { createI18n } from 'vue-i18n';
import zhCn from './zh-cn/index.mjs';
import enUs from './en-us/index.mjs';

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

export { i18nInit as default, i18n };
//# sourceMappingURL=index.mjs.map
