import { defineStore } from 'pinia';

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

export { useConfigStore };
//# sourceMappingURL=config.mjs.map
