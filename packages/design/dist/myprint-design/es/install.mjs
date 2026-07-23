import 'vue3-colorpicker/style.css';
import { mittKey } from './constants/keys.mjs';
import { createPinia } from 'pinia';
import src_default from './node_modules/.pnpm/pinia-plugin-persistedstate@3.2.3_pinia@2.3.1_typescript@5.9.3_vue@3.5.40_typescript@5.9.3__/node_modules/pinia-plugin-persistedstate/dist/index.mjs';
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
      pinia.use(src_default);
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
