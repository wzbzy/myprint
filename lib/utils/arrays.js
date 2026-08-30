'use strict';

function arrayRemove(array, pro) {
  const index = arrayIndexOf(array, pro);
  if (index > -1) {
    array.splice(index, 1);
  }
}
function arrayIndexOf(array, pro) {
  if (pro === void 0) {
    return -1;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] == pro) {
      return i;
    } else {
      if (array[i]["id"] != void 0 && pro["id"] != void 0 && array[i]["id"] === pro["id"]) return i;
    }
  }
  return -1;
}
function arrayArrayIndexOf(arr, item) {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    let arrElement = arr[i];
    if (!Array.isArray(arrElement)) continue;
    if (arrElement.length != item.length) {
      return -1;
    }
    for (let j = 0; j < arrElement.length; j++) {
      if (arrElement[j] != item[j]) {
        return -1;
      }
    }
    index = i;
  }
  return index;
}

exports.arrayArrayIndexOf = arrayArrayIndexOf;
exports.arrayIndexOf = arrayIndexOf;
exports.arrayRemove = arrayRemove;
//# sourceMappingURL=arrays.js.map
