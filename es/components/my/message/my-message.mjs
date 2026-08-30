import { h, render } from 'vue-demi';
import MessageView from './my-message.vue.mjs';

let messageNode = null;
let handleSuccess = null;
let handleError = null;
function installMessage(app) {
  if (!messageNode) {
    messageNode = h(MessageView, {});
    const container = document.createElement("div");
    messageNode.appContext = app._context;
    render(messageNode, container);
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

export { MyMessage, installMessage };
//# sourceMappingURL=my-message.mjs.map
