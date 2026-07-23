'use strict';

require('vue3-colorpicker/style.css');
var keys = require('./constants/keys.js');
var pinia = require('pinia');
var index = require('./node_modules/.pnpm/pinia-plugin-persistedstate@3.2.3_pinia@2.3.1_typescript@5.9.3_vue@3.5.40_typescript@5.9.3__/node_modules/pinia-plugin-persistedstate/dist/index.js');
var Vue3ColorPicker = require('vue3-colorpicker');
var VueCropper = require('vue-cropper');
require('vue-cropper/dist/index.css');
var socket = require('./stores/socket.js');
var utils = require('./utils/utils.js');
var config = require('./stores/config.js');
var printer = require('./printer.js');
var devicePixelRatio = require('./utils/devicePixelRatio.js');
var myMessage = require('./components/my/message/my-message.js');

const install = {
  install(app) {
    if (app.config.globalProperties.$pinia) {
    } else {
      const pinia$1 = pinia.createPinia();
      pinia$1.use(index.default);
      app.use(pinia$1);
    }
    app.use(VueCropper).use(Vue3ColorPicker);
    app.provide(keys.mittKey, utils.mitt);
    if (!printer.myPrintOptions.disabledClient) {
      socket.useSocket().INIT_SOCKET();
    }
    config.useConfigStore().initConfig();
    printer.installPrinter(app);
    myMessage.installMessage(app);
    devicePixelRatio.initDisplayRatio();
    const container = document.createElement("div");
    container.classList.add("my-popover_container");
    document.body.appendChild(container);
  }
};

exports.install = install;
//# sourceMappingURL=install.js.map
