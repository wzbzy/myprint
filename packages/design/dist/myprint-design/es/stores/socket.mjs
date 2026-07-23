import { defineStore } from 'pinia';
import { printCssStyle } from '../utils/utils.mjs';
import { useConfigStore } from './config.mjs';

let lockReconnect;
const useSocket = defineStore("myPrintSocket", {
  state: () => {
    return {
      socket: void 0,
      timer: void 0,
      connect: false,
      printerList: [],
      resolveMap: {}
    };
  },
  actions: {
    INIT_SOCKET() {
      let stateThis = this;
      const reconnect = () => {
        if (lockReconnect) return;
        lockReconnect = true;
        stateThis.timer = setTimeout(() => {
          createSocket();
          lockReconnect = false;
        }, 4e3);
      };
      const onMessage = (msgData) => {
        if (this.resolveMap[msgData.taskId]) {
          this.resolveMap[msgData.taskId](msgData);
          delete this.resolveMap[msgData.taskId];
        }
      };
      const init = () => {
        this.socket.onopen = function(_event) {
          stateThis.connect = true;
          heartCheck.reset().start();
          stateThis.socket.send(JSON.stringify({
            options: { css: printCssStyle() },
            cmd: "text/css"
          }));
        };
        this.socket.onmessage = function(event) {
          const clientResult = JSON.parse(event.data);
          switch (clientResult.cmd) {
            case "printerList":
              stateThis.printerList = clientResult.data.map((res) => res);
              onMessage(clientResult);
              break;
            case "printResult":
              onMessage(clientResult);
              break;
            case "generatePdfResult":
              onMessage(clientResult);
              break;
            case "pong":
              break;
          }
          heartCheck.reset().start();
        };
        this.socket.onerror = function(_event) {
          stateThis.connect = false;
          reconnect();
        };
        this.socket.onclose = function(_event) {
          heartCheck.reset();
          stateThis.connect = false;
          reconnect();
        };
        window.onbeforeunload = function() {
          stateThis.connect = false;
          stateThis.socket.close();
        };
      };
      const createSocket = () => {
        try {
          stateThis.socket = new WebSocket(useConfigStore().clientUrl.replace("https", "ws").replace("http", "ws"));
          init();
        } catch (e) {
          reconnect();
        }
      };
      const heartCheck = {
        timeout: 5e3,
        timeoutObj: setTimeout(() => {
        }),
        serverTimeoutObj: setInterval(() => {
        }),
        reset: function() {
          clearTimeout(this.timeoutObj);
          clearTimeout(this.serverTimeoutObj);
          return this;
        },
        start: function() {
          const self = this;
          clearTimeout(this.timeoutObj);
          clearTimeout(this.serverTimeoutObj);
          this.timeoutObj = setTimeout(function() {
            stateThis.socket.send(JSON.stringify({
              "cmd": "ping"
            }));
            self.serverTimeoutObj = setTimeout(function() {
              stateThis.socket.close();
            }, self.timeout);
          }, this.timeout);
        }
      };
      createSocket();
    },
    SET_PRINTER_LIST(list) {
      this.printerList = list;
    },
    SEND(taskId, msg) {
      return new Promise((resolve, _reject) => {
        this.resolveMap[taskId] = resolve;
        this.socket.send(msg);
      });
    }
  }
});

export { useSocket };
//# sourceMappingURL=socket.mjs.map
