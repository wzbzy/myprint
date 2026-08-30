'use strict';

var moveable_js = require('./moveable_js.js');

let entityModule = {};
const moveableLocal = false;
if (moveableLocal) {
  loadMoveableLocal();
}
const defineFun = () => {
};
let addCanSelectElementLocal = defineFun, alignBottomLocal = defineFun, alignHorizontalCenterLocal = defineFun, alignLeftLocal = defineFun, alignRightLocal = defineFun, alignTopLocal = defineFun, alignVerticalCenterLocal = defineFun, arrangeHorizontalSpacingLocal = defineFun, arrangeVerticalSpacingLocal = defineFun, changeDragSnapIsLocal = defineFun, checkInputLocal = defineFun, dragNewElementLocal = defineFun, dragNewElementCancelLocal = defineFun, freshMoveableOptionLocal = defineFun, getSelectElementLocal = defineFun, groupLocal = defineFun, initMoveableLocal = defineFun, moveableClearDragTargetLocal = defineFun, moveableDragOffsetResizeLocal = defineFun, moveableDragResizeLocal = defineFun, moveableDragTargetLocal = defineFun, moveableEditingLocal = defineFun, moveableMoveLocal = defineFun, moveableMoveOffsetLocal = defineFun, moveableMoveXLocal = defineFun, moveableMoveYLocal = defineFun, moveableResizeLocal = defineFun, moveableResizeOffsetLocal = defineFun, moveableRotateLocal = defineFun, removeCanSelectElementLocal = defineFun, removeSelectElementLocal = defineFun, selectAllElementLocal = defineFun, selectTabNextLocal = defineFun, setSelectedTargetsLocal = defineFun, testMoveableLocal = defineFun, ungroupLocal = defineFun, updateMoveableRectLocal = defineFun, updatePanelLocal = defineFun;
async function loadMoveableLocal() {
  if (!moveableLocal) {
    return;
  }
  try {
    entityModule = await Promise.resolve().then(function () { return require('./moveable_local.js'); });
    addCanSelectElementLocal = entityModule.addCanSelectElement;
    alignBottomLocal = entityModule.alignBottom;
    alignHorizontalCenterLocal = entityModule.alignHorizontalCenter;
    alignLeftLocal = entityModule.alignLeft;
    alignRightLocal = entityModule.alignRight;
    alignTopLocal = entityModule.alignTop;
    alignVerticalCenterLocal = entityModule.alignVerticalCenter;
    arrangeHorizontalSpacingLocal = entityModule.arrangeHorizontalSpacing;
    arrangeVerticalSpacingLocal = entityModule.arrangeVerticalSpacing;
    changeDragSnapIsLocal = entityModule.changeDragSnapIs;
    checkInputLocal = entityModule.checkInput;
    dragNewElementLocal = entityModule.dragNewElement;
    dragNewElementCancelLocal = entityModule.dragNewElementCancel;
    freshMoveableOptionLocal = entityModule.freshMoveableOption;
    getSelectElementLocal = entityModule.getSelectElement;
    groupLocal = entityModule.group;
    initMoveableLocal = entityModule.initMoveable;
    moveableClearDragTargetLocal = entityModule.moveableClearDragTarget;
    moveableDragOffsetResizeLocal = entityModule.moveableDragOffsetResize;
    moveableDragResizeLocal = entityModule.moveableDragResize;
    moveableDragTargetLocal = entityModule.moveableDragTarget;
    moveableEditingLocal = entityModule.moveableEditing;
    moveableMoveLocal = entityModule.moveableMove;
    moveableMoveOffsetLocal = entityModule.moveableMoveOffset;
    moveableMoveXLocal = entityModule.moveableMoveX;
    moveableMoveYLocal = entityModule.moveableMoveY;
    moveableResizeLocal = entityModule.moveableResize;
    moveableResizeOffsetLocal = entityModule.moveableResizeOffset;
    moveableRotateLocal = entityModule.moveableRotate;
    removeCanSelectElementLocal = entityModule.removeCanSelectElement;
    removeSelectElementLocal = entityModule.removeSelectElement;
    selectAllElementLocal = entityModule.selectAllElement;
    selectTabNextLocal = entityModule.selectTabNext;
    setSelectedTargetsLocal = entityModule.setSelectedTargets;
    testMoveableLocal = entityModule.testMoveable;
    ungroupLocal = entityModule.ungroup;
    updateMoveableRectLocal = entityModule.updateMoveableRect;
    updatePanelLocal = entityModule.updatePanel;
  } catch (error) {
    console.error("\u6A21\u5757\u4E0D\u5B58\u5728\u6216\u5BFC\u5165\u5931\u8D25", error);
  }
}
function dragNewElement(newElement, inputEvent) {
  moveableLocal ? dragNewElementLocal(newElement, inputEvent) : moveable_js.dragNewElement(newElement, inputEvent);
}
function dragNewElementCancel(newElement) {
  moveableLocal ? dragNewElementCancelLocal(newElement) : moveable_js.dragNewElementCancel(newElement);
}
function updatePanel(list = []) {
  moveableLocal ? updatePanelLocal(list) : moveable_js.updatePanel(list);
}
function moveableMove(x, y) {
  moveableLocal ? moveableMoveLocal(x, y) : moveable_js.moveableMove(x, y);
}
function moveableMoveX(x) {
  moveableLocal ? moveableMoveXLocal(x) : moveable_js.moveableMoveX(x);
}
function moveableMoveY(y) {
  moveableLocal ? moveableMoveYLocal(y) : moveable_js.moveableMoveY(y);
}
function moveableMoveOffset(x, y) {
  moveableLocal ? moveableMoveOffsetLocal(x, y) : moveable_js.moveableMoveOffset(x, y);
}
function group() {
  moveableLocal ? groupLocal() : moveable_js.group();
}
function ungroup() {
  moveableLocal ? ungroupLocal() : moveable_js.ungroup();
}
function moveableResize(width, height, keepRatio) {
  moveableLocal ? moveableResizeLocal(width, height, keepRatio) : moveable_js.moveableResize(width, height, keepRatio);
}
function moveableRotate(rotate) {
  moveableLocal ? moveableRotateLocal(rotate) : moveable_js.moveableRotate(rotate);
}
function moveableResizeOffset(width, height, keepRatio) {
  moveableLocal ? moveableResizeOffsetLocal(width, height, keepRatio) : moveable_js.moveableResizeOffset(width, height, keepRatio);
}
function moveableDragResize(x, y, width, height, element) {
  moveableLocal ? moveableDragResizeLocal(x, y, width, height, element) : moveable_js.moveableDragResize(x, y, width, height, element);
}
function moveableDragOffsetResize(x, y, width, height, element) {
  moveableLocal ? moveableDragOffsetResizeLocal(x, y, width, height, element) : moveable_js.moveableDragOffsetResize(x, y, width, height, element);
}
function moveableDragTarget(drag, event) {
  moveableLocal ? moveableDragTargetLocal(drag, event) : moveable_js.moveableDragTarget(drag, event);
}
function moveableClearDragTarget() {
  moveableLocal ? moveableClearDragTargetLocal() : moveable_js.moveableClearDragTarget();
}
function alignTop() {
  moveableLocal ? alignTopLocal() : moveable_js.alignTop();
}
function alignBottom() {
  moveableLocal ? alignBottomLocal() : moveable_js.alignBottom();
}
function alignLeft() {
  moveableLocal ? alignLeftLocal() : moveable_js.alignLeft();
}
function alignRight() {
  moveableLocal ? alignRightLocal() : moveable_js.alignRight();
}
function alignVerticalCenter() {
  moveableLocal ? alignVerticalCenterLocal() : moveable_js.alignVerticalCenter();
}
function alignHorizontalCenter() {
  moveableLocal ? alignHorizontalCenterLocal() : moveable_js.alignHorizontalCenter();
}
function arrangeVerticalSpacing() {
  moveableLocal ? arrangeVerticalSpacingLocal() : moveable_js.arrangeVerticalSpacing();
}
function arrangeHorizontalSpacing() {
  moveableLocal ? arrangeHorizontalSpacingLocal() : moveable_js.arrangeHorizontalSpacing();
}
function updateMoveableRect() {
  moveableLocal ? updateMoveableRectLocal() : moveable_js.updateMoveableRect();
}
const setSelectedTargets = (nextTargetes, status = "HANDLE") => {
  moveableLocal ? setSelectedTargetsLocal(nextTargetes, status) : moveable_js.setSelectedTargets(nextTargetes, status);
};
function freshMoveableOption(element) {
  moveableLocal ? freshMoveableOptionLocal(element) : moveable_js.freshMoveableOption(element);
}
function initMoveable(_selecto, _highlightRule) {
  moveableLocal ? initMoveableLocal(_selecto, _highlightRule) : moveable_js.initMoveable(_selecto, _highlightRule);
}
function getSelectElement() {
  return moveableLocal ? getSelectElementLocal() : moveable_js.getSelectElement();
}
function selectAllElement() {
  moveableLocal ? selectAllElementLocal() : moveable_js.selectAllElement();
}
function removeSelectElement(elementList) {
  moveableLocal ? removeSelectElementLocal(elementList) : moveable_js.removeSelectElement(elementList);
}
function addCanSelectElement(elementList) {
  moveableLocal ? addCanSelectElementLocal(elementList) : moveable_js.addCanSelectElement(elementList);
}
function removeCanSelectElement(elementList) {
  moveableLocal ? removeCanSelectElementLocal(elementList) : moveable_js.removeCanSelectElement(elementList);
}
function selectTabNext() {
  moveableLocal ? selectTabNextLocal() : moveable_js.selectTabNext();
}
function moveableEditing() {
  moveableLocal ? moveableEditingLocal() : moveable_js.moveableEditing();
}
function testMoveable() {
  moveableLocal ? testMoveableLocal() : moveable_js.testMoveable();
}
function checkInput() {
  moveableLocal ? checkInputLocal() : moveable_js.checkInput();
}
function changeDragSnapIs(filterStatus = true) {
  moveableLocal ? changeDragSnapIsLocal(filterStatus) : moveable_js.changeDragSnapIs(filterStatus);
}

exports.addCanSelectElement = addCanSelectElement;
exports.alignBottom = alignBottom;
exports.alignHorizontalCenter = alignHorizontalCenter;
exports.alignLeft = alignLeft;
exports.alignRight = alignRight;
exports.alignTop = alignTop;
exports.alignVerticalCenter = alignVerticalCenter;
exports.arrangeHorizontalSpacing = arrangeHorizontalSpacing;
exports.arrangeVerticalSpacing = arrangeVerticalSpacing;
exports.changeDragSnapIs = changeDragSnapIs;
exports.checkInput = checkInput;
exports.dragNewElement = dragNewElement;
exports.dragNewElementCancel = dragNewElementCancel;
exports.freshMoveableOption = freshMoveableOption;
exports.getSelectElement = getSelectElement;
exports.group = group;
exports.initMoveable = initMoveable;
exports.moveableClearDragTarget = moveableClearDragTarget;
exports.moveableDragOffsetResize = moveableDragOffsetResize;
exports.moveableDragResize = moveableDragResize;
exports.moveableDragTarget = moveableDragTarget;
exports.moveableEditing = moveableEditing;
exports.moveableMove = moveableMove;
exports.moveableMoveOffset = moveableMoveOffset;
exports.moveableMoveX = moveableMoveX;
exports.moveableMoveY = moveableMoveY;
exports.moveableResize = moveableResize;
exports.moveableResizeOffset = moveableResizeOffset;
exports.moveableRotate = moveableRotate;
exports.removeCanSelectElement = removeCanSelectElement;
exports.removeSelectElement = removeSelectElement;
exports.selectAllElement = selectAllElement;
exports.selectTabNext = selectTabNext;
exports.setSelectedTargets = setSelectedTargets;
exports.testMoveable = testMoveable;
exports.ungroup = ungroup;
exports.updateMoveableRect = updateMoveableRect;
exports.updatePanel = updatePanel;
//# sourceMappingURL=moveable.js.map
