'use strict';

var vueDemi = require('vue-demi');

const mouseTips = {
  data: vueDemi.reactive({
    visible: false,
    x: 0,
    y: 0,
    width: 0,
    height: 0
  }),
  move(x, y, data) {
    this.data.x = x;
    this.data.y = y;
    if (data) {
      this.data.data = data;
    }
  },
  visible() {
    this.data.visible = true;
  },
  hidden() {
    this.data.visible = false;
  },
  setData(data) {
    this.data.data = data;
  }
};

exports.mouseTips = mouseTips;
//# sourceMappingURL=mouseTips.js.map
