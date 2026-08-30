import { defineStore } from 'pinia';
import { defaultElement } from '../constants/common.mjs';
import i18nInit from '../locales/index.mjs';

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

export { useAppStoreHook };
//# sourceMappingURL=app.mjs.map
