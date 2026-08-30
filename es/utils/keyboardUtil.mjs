import { selectAllElement, selectTabNext, moveableResizeOffset, moveableMoveOffset, removeSelectElement } from '../plugins/moveable/moveable.mjs';
import { redoPanel, undoPanel } from './historyUtil.mjs';
import { mitt } from './utils.mjs';
import { memoryClipboardUtil } from './memoryClipboardUtil.mjs';

const keyConvert = {
  Ctrl: ["Meta", "Ctrl"]
};
const eventListeners = [];
const downKeyList = {};
function mountedKeyboardEvent() {
  addKeyboardEvent().subscribe([isCtrlShift, "z"], () => {
    redoPanel();
  }).subscribe([isCtrlShift, "y"], () => {
    redoPanel();
  }).subscribe([isCtrl, "z"], () => {
    undoPanel();
  }).subscribe([isCtrl, "a"], () => {
    selectAllElement();
  }).subscribe([isCtrl, "c"], () => {
    memoryClipboardUtil.copy();
  }).subscribe([isCtrl, "x"], () => {
    memoryClipboardUtil.cut();
  }).subscribe([isCtrl, "v"], () => {
    memoryClipboardUtil.paste();
  }).subscribe([isCtrl, "d"], () => {
  }).subscribe([isCtrl, "s"], () => {
    mitt.emit("saveTemplate", {});
  }).subscribe(["Tab"], () => {
    selectTabNext();
  }).subscribe([isCtrlShift, "ArrowUp"], () => {
    moveableResizeOffset(0, -10);
  }).subscribe([isCtrlShift, "ArrowDown"], () => {
    moveableResizeOffset(0, 10);
  }).subscribe([isCtrlShift, "ArrowLeft"], () => {
    moveableResizeOffset(-10, 0);
  }).subscribe([isCtrlShift, "ArrowRight"], () => {
    moveableResizeOffset(10, 0);
  }).subscribe([isShift, "ArrowUp"], () => {
    moveableMoveOffset(0, -10);
  }).subscribe([isShift, "ArrowDown"], () => {
    moveableMoveOffset(0, 10);
  }).subscribe([isShift, "ArrowLeft"], () => {
    moveableMoveOffset(-10, 0);
  }).subscribe([isShift, "ArrowRight"], () => {
    moveableMoveOffset(10, 0);
  }).subscribe([isCtrl, "ArrowUp"], () => {
    moveableResizeOffset(0, -1);
  }).subscribe([isCtrl, "ArrowDown"], () => {
    moveableResizeOffset(0, 1);
  }).subscribe([isCtrl, "ArrowLeft"], () => {
    moveableResizeOffset(-1, 0);
  }).subscribe([isCtrl, "ArrowRight"], () => {
    moveableResizeOffset(1, 0);
  }).subscribe(["ArrowUp"], () => {
    moveableMoveOffset(0, -1);
  }).subscribe(["ArrowDown"], () => {
    moveableMoveOffset(0, 1);
  }).subscribe(["ArrowLeft"], () => {
    moveableMoveOffset(-1, 0);
  }).subscribe(["ArrowRight"], () => {
    moveableMoveOffset(1, 0);
  }).subscribe([isDelete], () => {
    removeSelectElement();
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

export { addKeyboardEvent, isCtrl, isCtrlShift, isDelete, isShift, mountedKeyboardEvent, removeKeyboardEvent, unMountedKeyboardEvent };
//# sourceMappingURL=keyboardUtil.mjs.map
