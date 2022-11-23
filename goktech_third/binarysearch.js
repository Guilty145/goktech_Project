/**
 * 二分查找
 * @param {Array} arr
 * @param {number} key
 * @returns key
 */
function binarySearch(arr, key) {
  var low = 0;
  var high = arr.length - 1;
  while (low <= high) {
    var mid = parseInt((high + low) / 2);
    if (key == arr[mid]) {
      return mid;
    } else if (key > arr[mid]) {
      // 目标元素大于中间值，取右边
      low = mid + 1;
    } else if (key < arr[mid]) {
      // 目标元素小于中间值，取左边
      high = mid - 1;
    }
  }
  return -1;
}
var arr = [2, 5, 11, 33, 36, 66, 97];
console.log(binarySearch(arr, 66));
