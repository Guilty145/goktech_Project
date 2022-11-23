/*实现快速排序的三种：参数打头，参数中间，参数末尾 */
/**
 *第一个数
 * @param {Array} arr
 * @returns Array
 */
function quickSortToHead(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let arr_left = [],
    arr_right = [],
    temp = arr[0];
  for (let x = 1; x < arr.length; x++) {
    if (arr[x] < temp) {
      arr_left.push(arr[x]);
    }
    if (arr[x] > temp) {
      arr_right.push(arr[x]);
    }
  }
  return quickSortToHead(arr_left).concat([temp], quickSortToHead(arr_right));
}
/**
 *参数中间
 * @param {Array} arr
 * @returns Array
 */
function quickSortToMiddle(arr) {
  let L = 0;
  let R = arr.length - 1;
  let Mid = parseInt((L + R) / 2);
  if (arr.length <= 1) {
    return arr;
  }
  let arr_left = [],
    arr_right = [],
    temp = arr[Mid];
  for (let x = 0; x < arr.length; x++) {
    if (arr[x] < temp) {
      arr_left.push(arr[x]);
    }
    if (arr[x] > temp) {
      arr_right.push(arr[x]);
    }
  }
  return quickSortToHead(arr_left).concat([temp], quickSortToHead(arr_right));
}
/**
 *最后一个数
 * @param {Array} arr
 * @returns Array
 */
function quickSortToEnd(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let arr_left = [],
    arr_right = [],
    temp = arr[arr.length - 1];
  for (let x = 0; x < arr.length; x++) {
    if (arr[x] < temp) {
      arr_left.push(arr[x]);
    }
    if (arr[x] > temp) {
      arr_right.push(arr[x]);
    }
  }
  return quickSortToHead(arr_left).concat([temp], quickSortToHead(arr_right));
}
let arr = [11, 36, 2, 5, 66, 33, 97];
console.log(quickSortToHead(arr));
console.log(quickSortToEnd(arr));
console.log(quickSortToMiddle(arr));
