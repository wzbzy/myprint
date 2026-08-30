'use strict';

var pinia = require('pinia');

const dragDataStore = pinia.defineStore("myPrintDragData", {
  state: () => {
    return {
      data: {
        dragIng: false,
        start: { x: 0, y: 0 },
        end: { x: 0, y: 0 }
      }
    };
  },
  // 也可以这样定义
  // state: () => ({ count: 0 })
  actions: {
    set(type, element) {
      this.data.element = element;
      this.data.type = type;
    }
  }
});

exports.dragDataStore = dragDataStore;
//# sourceMappingURL=dragStore.js.map
