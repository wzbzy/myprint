'use strict';

var pinia = require('pinia');
var common = require('../constants/common.js');
var index = require('../locales/index.js');

const useAppStoreHook = pinia.defineStore("myPrintApp", {
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
      currentElement: common.defaultElement,
      auxiliaryLineTmp: {},
      dataRotation: -1
    };
  },
  actions: {
    SET_LOCALE(locale) {
      this.locale = locale;
      localStorage.setItem("lang", locale);
      index.default.global.locale.value = locale;
    },
    SET_CLIENT_CONNECT(status) {
      this.client.connect = status;
    }
  }
});

exports.useAppStoreHook = useAppStoreHook;
//# sourceMappingURL=app.js.map
