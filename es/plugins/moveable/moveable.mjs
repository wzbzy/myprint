import { dragNewElement as _0xef22d6, dragNewElementCancel as _0x2534c3, updatePanel as _0x2f4a7f, moveableMove as _0x4a5109, moveableMoveX as _0x527ce9, moveableMoveY as _0x7d02f9, moveableMoveOffset as _0x2de816, group as _0x228c77, ungroup as _0x4a8574, moveableResize as _0x3056dd, moveableRotate as _0x5e7ee0, moveableResizeOffset as _0x3a39b1, moveableDragResize as _0x4e8432, moveableDragOffsetResize as _0x4b6a07, moveableDragTarget as _0x3f09dd, moveableClearDragTarget as _0x5d6cc6, alignTop as _0x522c93, alignBottom as _0x6c50a8, alignLeft as _0x12f422, alignRight as _0x5137a2, alignVerticalCenter as _0x329641, alignHorizontalCenter as _0x446e21, arrangeVerticalSpacing as _0x25db02, arrangeHorizontalSpacing as _0x4ff781, updateMoveableRect as _0x146b72, setSelectedTargets as _0x33b5ef, freshMoveableOption as _0xcc1f0, initMoveable as _0x18be26, getSelectElement as _0x32333c, selectAllElement as _0x5a85bd, removeSelectElement as _0x1a2d8a, addCanSelectElement as _0x4be722, removeCanSelectElement as _0x43c282, selectTabNext as _0x3395d0, moveableEditing as _0x235872, testMoveable as _0x2b1a51, checkInput as _0x34ae7e, changeDragSnapIs as _0x3f3300 } from './moveable_js.mjs';

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
    entityModule = await import('./moveable_local.mjs');
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
  moveableLocal ? dragNewElementLocal(newElement, inputEvent) : _0xef22d6(newElement, inputEvent);
}
function dragNewElementCancel(newElement) {
  moveableLocal ? dragNewElementCancelLocal(newElement) : _0x2534c3(newElement);
}
function updatePanel(list = []) {
  moveableLocal ? updatePanelLocal(list) : _0x2f4a7f(list);
}
function moveableMove(x, y) {
  moveableLocal ? moveableMoveLocal(x, y) : _0x4a5109(x, y);
}
function moveableMoveX(x) {
  moveableLocal ? moveableMoveXLocal(x) : _0x527ce9(x);
}
function moveableMoveY(y) {
  moveableLocal ? moveableMoveYLocal(y) : _0x7d02f9(y);
}
function moveableMoveOffset(x, y) {
  moveableLocal ? moveableMoveOffsetLocal(x, y) : _0x2de816(x, y);
}
function group() {
  moveableLocal ? groupLocal() : _0x228c77();
}
function ungroup() {
  moveableLocal ? ungroupLocal() : _0x4a8574();
}
function moveableResize(width, height, keepRatio) {
  moveableLocal ? moveableResizeLocal(width, height, keepRatio) : _0x3056dd(width, height, keepRatio);
}
function moveableRotate(rotate) {
  moveableLocal ? moveableRotateLocal(rotate) : _0x5e7ee0(rotate);
}
function moveableResizeOffset(width, height, keepRatio) {
  moveableLocal ? moveableResizeOffsetLocal(width, height, keepRatio) : _0x3a39b1(width, height, keepRatio);
}
function moveableDragResize(x, y, width, height, element) {
  moveableLocal ? moveableDragResizeLocal(x, y, width, height, element) : _0x4e8432(x, y, width, height, element);
}
function moveableDragOffsetResize(x, y, width, height, element) {
  moveableLocal ? moveableDragOffsetResizeLocal(x, y, width, height, element) : _0x4b6a07(x, y, width, height, element);
}
function moveableDragTarget(drag, event) {
  moveableLocal ? moveableDragTargetLocal(drag, event) : _0x3f09dd(drag, event);
}
function moveableClearDragTarget() {
  moveableLocal ? moveableClearDragTargetLocal() : _0x5d6cc6();
}
function alignTop() {
  moveableLocal ? alignTopLocal() : _0x522c93();
}
function alignBottom() {
  moveableLocal ? alignBottomLocal() : _0x6c50a8();
}
function alignLeft() {
  moveableLocal ? alignLeftLocal() : _0x12f422();
}
function alignRight() {
  moveableLocal ? alignRightLocal() : _0x5137a2();
}
function alignVerticalCenter() {
  moveableLocal ? alignVerticalCenterLocal() : _0x329641();
}
function alignHorizontalCenter() {
  moveableLocal ? alignHorizontalCenterLocal() : _0x446e21();
}
function arrangeVerticalSpacing() {
  moveableLocal ? arrangeVerticalSpacingLocal() : _0x25db02();
}
function arrangeHorizontalSpacing() {
  moveableLocal ? arrangeHorizontalSpacingLocal() : _0x4ff781();
}
function updateMoveableRect() {
  moveableLocal ? updateMoveableRectLocal() : _0x146b72();
}
const setSelectedTargets = (nextTargetes, status = "HANDLE") => {
  moveableLocal ? setSelectedTargetsLocal(nextTargetes, status) : _0x33b5ef(nextTargetes, status);
};
function freshMoveableOption(element) {
  moveableLocal ? freshMoveableOptionLocal(element) : _0xcc1f0(element);
}
function initMoveable(_selecto, _highlightRule) {
  moveableLocal ? initMoveableLocal(_selecto, _highlightRule) : _0x18be26(_selecto, _highlightRule);
}
function getSelectElement() {
  return moveableLocal ? getSelectElementLocal() : _0x32333c();
}
function selectAllElement() {
  moveableLocal ? selectAllElementLocal() : _0x5a85bd();
}
function removeSelectElement(elementList) {
  moveableLocal ? removeSelectElementLocal(elementList) : _0x1a2d8a(elementList);
}
function addCanSelectElement(elementList) {
  moveableLocal ? addCanSelectElementLocal(elementList) : _0x4be722(elementList);
}
function removeCanSelectElement(elementList) {
  moveableLocal ? removeCanSelectElementLocal(elementList) : _0x43c282(elementList);
}
function selectTabNext() {
  moveableLocal ? selectTabNextLocal() : _0x3395d0();
}
function moveableEditing() {
  moveableLocal ? moveableEditingLocal() : _0x235872();
}
function testMoveable() {
  moveableLocal ? testMoveableLocal() : _0x2b1a51();
}
function checkInput() {
  moveableLocal ? checkInputLocal() : _0x34ae7e();
}
function changeDragSnapIs(filterStatus = true) {
  moveableLocal ? changeDragSnapIsLocal(filterStatus) : _0x3f3300(filterStatus);
}

export { addCanSelectElement, alignBottom, alignHorizontalCenter, alignLeft, alignRight, alignTop, alignVerticalCenter, arrangeHorizontalSpacing, arrangeVerticalSpacing, changeDragSnapIs, checkInput, dragNewElement, dragNewElementCancel, freshMoveableOption, getSelectElement, group, initMoveable, moveableClearDragTarget, moveableDragOffsetResize, moveableDragResize, moveableDragTarget, moveableEditing, moveableMove, moveableMoveOffset, moveableMoveX, moveableMoveY, moveableResize, moveableResizeOffset, moveableRotate, removeCanSelectElement, removeSelectElement, selectAllElement, selectTabNext, setSelectedTargets, testMoveable, ungroup, updateMoveableRect, updatePanel };
//# sourceMappingURL=moveable.mjs.map
