'use strict';

var vueDemi = require('vue-demi');
var myMessage = require('./my-message.vue.js');

let messageNode = null;
let handleSuccess = null;
let handleError = null;
function installMessage(app) {
  if (!messageNode) {
    messageNode = vueDemi.h(myMessage.default, {});
    const container = document.createElement("div");
    messageNode.appContext = app._context;
    vueDemi.render(messageNode, container);
    handleSuccess = messageNode.component.exposed.success;
    handleError = messageNode.component.exposed.error;
    document.body.appendChild(container.firstElementChild);
  }
}
const MyMessage = {
  success(msg) {
    handleSuccess(msg);
  },
  error(msg) {
    handleError(msg);
  }
};

exports.MyMessage = MyMessage;
exports.installMessage = installMessage;
//# sourceMappingURL=my-message.js.map
