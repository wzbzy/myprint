import 'vue3-colorpicker/style.css';
import { mittKey } from './constants/keys.mjs';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import Vue3ColorPicker from 'vue3-colorpicker';
import VueCropper from 'vue-cropper';
import 'vue-cropper/dist/index.css';
import { useSocket } from './stores/socket.mjs';
import { mitt } from './utils/utils.mjs';
import { useConfigStore } from './stores/config.mjs';
import { myPrintOptions, installPrinter } from './printer.mjs';
import { initDisplayRatio } from './utils/devicePixelRatio.mjs';
import { installMessage } from './components/my/message/my-message.mjs';

const install = {
  install(app) {
    if (app.config.globalProperties.$pinia) {
    } else {
      const pinia = createPinia();
      pinia.use(piniaPluginPersistedstate);
      app.use(pinia);
    }
    app.use(VueCropper).use(Vue3ColorPicker);
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

export { install };
//# sourceMappingURL=install.mjs.map
