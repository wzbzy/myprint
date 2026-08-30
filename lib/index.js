'use strict';

require('./components/content/index.js');
var printer = require('./printer.js');
var design = require('./design.js');
var install = require('./install.js');
var version = require('./version.js');
var entity = require('./types/entity.js');
require('./types/R.js');
var index = require('./components/content/index.vue.js');



exports.MyPrinter = printer.MyPrinter;
exports.mountDesign = design.mountDesign;
exports.createPrint = install.install;
exports.version = version.version;
exports.cellTypeFormat = entity.cellTypeFormat;
exports.displayStrategyFormat = entity.displayStrategyFormat;
exports.elementTypeFormat = entity.elementTypeFormat;
exports.statisticsTypeFormat = entity.statisticsTypeFormat;
exports.DesignPanel = index.default;
//# sourceMappingURL=index.js.map
