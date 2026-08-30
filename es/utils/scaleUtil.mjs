import { reactive } from 'vue-demi';

const scaleUtil = {
  miniMap: reactive(
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

export { scaleUtil };
//# sourceMappingURL=scaleUtil.mjs.map
