'use strict';

var moveable = require('../plugins/moveable/moveable.js');
var historyUtil = require('./historyUtil.js');
var utils = require('./utils.js');
var memoryClipboardUtil = require('./memoryClipboardUtil.js');

const keyConvert = {
  Ctrl: ["Meta", "Ctrl"]
};
const eventListeners = [];
const downKeyList = {};
function mountedKeyboardEvent() {
  addKeyboardEvent().subscribe([isCtrlShift, "z"], () => {
    historyUtil.redoPanel();
  }).subscribe([isCtrlShift, "y"], () => {
    historyUtil.redoPanel();
  }).subscribe([isCtrl, "z"], () => {
    historyUtil.undoPanel();
  }).subscribe([isCtrl, "a"], () => {
    moveable.selectAllElement();
  }).subscribe([isCtrl, "c"], () => {
    memoryClipboardUtil.memoryClipboardUtil.copy();
  }).subscribe([isCtrl, "x"], () => {
    memoryClipboardUtil.memoryClipboardUtil.cut();
  }).subscribe([isCtrl, "v"], () => {
    memoryClipboardUtil.memoryClipboardUtil.paste();
  }).subscribe([isCtrl, "d"], () => {
  }).subscribe([isCtrl, "s"], () => {
    utils.mitt.emit("saveTemplate", {});
  }).subscribe(["Tab"], () => {
    moveable.selectTabNext();
  }).subscribe([isCtrlShift, "ArrowUp"], () => {
    moveable.moveableResizeOffset(0, -10);
  }).subscribe([isCtrlShift, "ArrowDown"], () => {
    moveable.moveableResizeOffset(0, 10);
  }).subscribe([isCtrlShift, "ArrowLeft"], () => {
    moveable.moveableResizeOffset(-10, 0);
  }).subscribe([isCtrlShift, "ArrowRight"], () => {
    moveable.moveableResizeOffset(10, 0);
  }).subscribe([isShift, "ArrowUp"], () => {
    moveable.moveableMoveOffset(0, -10);
  }).subscribe([isShift, "ArrowDown"], () => {
    moveable.moveableMoveOffset(0, 10);
  }).subscribe([isShift, "ArrowLeft"], () => {
    moveable.moveableMoveOffset(-10, 0);
  }).subscribe([isShift, "ArrowRight"], () => {
    moveable.moveableMoveOffset(10, 0);
  }).subscribe([isCtrl, "ArrowUp"], () => {
    moveable.moveableResizeOffset(0, -1);
  }).subscribe([isCtrl, "ArrowDown"], () => {
    moveable.moveableResizeOffset(0, 1);
  }).subscribe([isCtrl, "ArrowLeft"], () => {
    moveable.moveableResizeOffset(-1, 0);
  }).subscribe([isCtrl, "ArrowRight"], () => {
    moveable.moveableResizeOffset(1, 0);
  }).subscribe(["ArrowUp"], () => {
    moveable.moveableMoveOffset(0, -1);
  }).subscribe(["ArrowDown"], () => {
    moveable.moveableMoveOffset(0, 1);
  }).subscribe(["ArrowLeft"], () => {
    moveable.moveableMoveOffset(-1, 0);
  }).subscribe(["ArrowRight"], () => {
    moveable.moveableMoveOffset(1, 0);
  }).subscribe([isDelete], () => {
    moveable.removeSelectElement();
  });
}
function unMountedKeyboardEvent() {
  removeKeyboardEvent();
}
function addKeyboardEvent() {
  document.addEventListener("keydown", keyDown);
  document.addEventListener("keyup", keyUp);
  const handlers = {
    subscribe(keys, callback) {
      eventListeners.push({
        keys,
        callback
      });
      return handlers;
    }
  };
  return handlers;
}
function removeKeyboardEvent() {
  document.removeEventListener("keydown", keyDown);
  document.removeEventListener("keyup", keyUp);
}
function keyUp(event) {
  delete downKeyList[convertKey(event.key)];
}
function convertKey(key) {
  for (let keyConvertKey in keyConvert) {
    let convertList = keyConvert[keyConvertKey];
    if (convertList.includes(key)) {
      return keyConvertKey;
    }
  }
  return key;
}
function keyDown(event) {
  if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA") {
    return;
  }
  for (let eventListener of eventListeners) {
    const { keys, callback } = eventListener;
    let isTrigger = true;
    for (let key of keys) {
      if (key instanceof Function) {
        if (!key(event)) {
          isTrigger = false;
          break;
        }
      } else {
        if (key != event.key) {
          isTrigger = false;
          break;
        }
      }
    }
    if (isTrigger) {
      callback();
      event.preventDefault();
      event.stopPropagation();
      break;
    }
  }
}
function isCtrl(event) {
  return event.ctrlKey || event.metaKey;
}
function isShift(event) {
  return event.shiftKey;
}
function isCtrlShift(event) {
  return (event.ctrlKey || event.metaKey) && event.shiftKey;
}
function isDelete(event) {
  return event.key == "Backspace";
}

exports.addKeyboardEvent = addKeyboardEvent;
exports.isCtrl = isCtrl;
exports.isCtrlShift = isCtrlShift;
exports.isDelete = isDelete;
exports.isShift = isShift;
exports.mountedKeyboardEvent = mountedKeyboardEvent;
exports.removeKeyboardEvent = removeKeyboardEvent;
exports.unMountedKeyboardEvent = unMountedKeyboardEvent;
//# sourceMappingURL=keyboardUtil.js.map
