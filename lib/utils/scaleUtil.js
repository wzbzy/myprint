'use strict';

var vueDemi = require('vue-demi');

const scaleUtil = {
  miniMap: vueDemi.reactive(
    {
      scale: 1
    }
  ),
  scale(val) {
    return this.miniMap.scale * val;
  },
  scaleDiv(val) {
    return val / this.miniMap.scale;
  }
};

exports.scaleUtil = scaleUtil;
//# sourceMappingURL=scaleUtil.js.map
