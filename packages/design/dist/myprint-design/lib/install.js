'use strict';

require('vue3-colorpicker/style.css');
var keys = require('./constants/keys.js');
var pinia = require('pinia');
var piniaPluginPersistedstate = require('pinia-plugin-persistedstate');
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
      pinia$1.use(piniaPluginPersistedstate);
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
