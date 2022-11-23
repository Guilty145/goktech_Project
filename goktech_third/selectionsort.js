/**
 * 选择排序
 * @param {Array} arr
 * @returns Array
 */
function selectedSort(arr) {
  for (let x = 0; x < arr.length - 1; x++) {
    let min = x; //下标
    for (let y = x + 1; y < arr.length; y++) {
      if (arr[min] > arr[y]) {
        min = y;
      }
    }
    if (min != x) {
      let temp = arr[min];
      arr[min] = arr[x];
      arr[x] = temp;
    }
  }
  return arr;
}
let arr = [11, 36, 2, 5, 66, 33, 97];
console.log(selectedSort(arr));
