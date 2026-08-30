'use strict';

var vueDemi = require('vue-demi');
var entity = require('../types/entity.js');
var core = require('@vueuse/core');
var elementUtil = require('./elementUtil.js');
var app = require('../stores/app.js');
var moveable = require('../plugins/moveable/moveable.js');
var utils = require('./utils.js');

var ActionEnum = /* @__PURE__ */ ((ActionEnum2) => {
  ActionEnum2["INIT"] = "\u52A0\u8F7D";
  ActionEnum2["ADD"] = "\u6DFB\u52A0<{element}>";
  ActionEnum2["RESIZE"] = "\u4FEE\u6539<{element}>\u5C3A\u5BF8";
  ActionEnum2["ROTATE"] = "\u65CB\u8F6C<{element}>";
  ActionEnum2["REMOVE"] = "\u5220\u9664<{element}>";
  ActionEnum2["PASTE"] = "\u7C98\u8D34<{element}>";
  ActionEnum2["CUT"] = "\u526A\u5207<{element}>";
  ActionEnum2["CLEAR"] = "\u6E05\u7A7A\u9762\u677F";
  ActionEnum2["MOVE"] = "\u79FB\u52A8<{element}>";
  ActionEnum2["BATCH_MOVE"] = "\u79FB\u52A8<\u591A\u4E2A\u5143\u7D20>";
  ActionEnum2["UPDATE_STYLE"] = "\u4FEE\u6539<{element}>\u7684[{content}]";
  ActionEnum2["BATCH_UPDATE_STYLE"] = "\u4FEE\u6539<\u591A\u4E2A\u5143\u7D20>\u7684[{content}]";
  return ActionEnum2;
})(ActionEnum || {});
let max = 50;
const historyRecord = vueDemi.ref({});
const {
  undoStack,
  redoStack,
  commit,
  history,
  undo,
  redo,
  clear,
  canUndo,
  canRedo
} = core.useManualRefHistory(historyRecord, { capacity: max });
function init() {
  record({
    type: "PANEL",
    action: "\u52A0\u8F7D" /* INIT */,
    elementList: app.useAppStoreHook().currentElement
  });
  clear();
}
function record(snapshot) {
  let action = snapshot.action;
  let label = "";
  if (snapshot.elementList) {
    for (let myElement of snapshot.elementList) {
      label = label + (myElement.label ? myElement.label : entity.elementTypeFormat[myElement.type]) + ",";
    }
    label = label.slice(0, -1);
  } else {
    label = "\u9762\u677F";
  }
  snapshot.panel = elementUtil.getCurrentPanel();
  if (action == "\u4FEE\u6539<{element}>\u7684[{content}]" /* UPDATE_STYLE */) {
    if (snapshot.elementList != null) {
      action = action.replace("{element}", label).replace("{content}", snapshot.content);
    } else {
      action = action.replace("{element}", label).replace("{content}", snapshot.content);
    }
  } else if (["\u5220\u9664<{element}>" /* REMOVE */, "\u6DFB\u52A0<{element}>" /* ADD */, "\u4FEE\u6539<{element}>\u5C3A\u5BF8" /* RESIZE */, "\u65CB\u8F6C<{element}>" /* ROTATE */, "\u79FB\u52A8<{element}>" /* MOVE */, "\u526A\u5207<{element}>" /* CUT */, "\u7C98\u8D34<{element}>" /* PASTE */].includes(action)) {
    action = action.replace("{element}", label);
  }
  delete snapshot.elementList;
  delete snapshot.content;
  snapshot.action = action;
  historyRecord.value = {
    content: JSON.stringify(snapshot, (key, value) => {
      if ("parent" == key) return void 0;
      if ("target" == key) return void 0;
      if ("nestColumnList" == key) return void 0;
      return value;
    }),
    label: action
  };
  commit();
}
function undoPanel() {
  if (!canUndo.value) {
    return;
  }
  undo();
  const snapshot = {};
  utils.parse(historyRecord.value.content, snapshot);
  const panel = elementUtil.getCurrentPanel();
  panel.elementList = snapshot.panel.elementList;
  panel.pageHeader = snapshot.panel.pageHeader;
  panel.pageFooter = snapshot.panel.pageFooter;
  elementUtil.installPanelParentElement(panel);
  moveable.updatePanel();
}
function redoPanel() {
  if (!canRedo.value) {
    return;
  }
  const panel = elementUtil.getCurrentPanel();
  redo();
  const snapshot = {};
  utils.parse(historyRecord.value.content, snapshot);
  panel.elementList = snapshot.panel.elementList;
  panel.pageHeader = snapshot.panel.pageHeader;
  panel.pageFooter = snapshot.panel.pageFooter;
  elementUtil.installPanelParentElement(panel);
  moveable.updatePanel();
}
function changeWrapper(val, title, callback) {
  record({
    elementList: app.useAppStoreHook().currentElement,
    content: title,
    action: "\u4FEE\u6539<{element}>\u7684[{content}]" /* UPDATE_STYLE */
  });
  if (callback) {
    callback(val);
  }
}

exports.ActionEnum = ActionEnum;
exports.canRedo = canRedo;
exports.canUndo = canUndo;
exports.changeWrapper = changeWrapper;
exports.clear = clear;
exports.history = history;
exports.init = init;
exports.record = record;
exports.redo = redo;
exports.redoPanel = redoPanel;
exports.redoStack = redoStack;
exports.undoPanel = undoPanel;
exports.undoStack = undoStack;
//# sourceMappingURL=historyUtil.js.map
