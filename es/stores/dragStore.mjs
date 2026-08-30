import { defineStore } from 'pinia';

const dragDataStore = defineStore("myPrintDragData", {
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

export { dragDataStore };
//# sourceMappingURL=dragStore.mjs.map
