/*冒泡排序的四种方式实现*/

/**
 *两层 正序
 * @param {Array} arr
 * @returns Array
 */
function BubbleSortAllLeft(arr) {
  for (let x = 0; x < arr.length - 1; x++) {
    for (let y = x + 1; y < arr.length; y++) {
      if (arr[x] > arr[y]) {
        let temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
      }
    }
  }
  return arr;
}

/**
 * 两层 倒序
 * @param {Array} arr
 * @returns Array
 */
function BubbleSortAllRight(arr) {
  for (let x = arr.length - 1; x > 0; x--) {
    for (let y = x - 1; y >= 0; y--) {
      if (arr[x] < arr[y]) {
        let temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
      }
    }
  }
  return arr;
}

/**
 * 两层 外正内倒
 * @param {Array} arr
 * @returns Array
 */
function BubbleSortLeftright(arr) {
  for (let x = 0; x < arr.length; x++) {
    for (let y = arr.length - 1; y > x; y--) {
      if (arr[x] > arr[y]) {
        let temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
      }
    }
  }
  return arr;
}

/**
 * 两层 外倒内正
 * @param {Array} arr
 * @returns Array
 */
function BubbleSortRightleft(arr) {
  for (let x = arr.length - 1; x > 0; x--) {
    for (let y = 0; y < x; y++) {
      if (arr[x] < arr[y]) {
        let temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
      }
    }
  }
  return arr;
}

let arr = [11, 36, 2, 5, 66, 33, 97];
console.log(BubbleSortAllLeft(arr));
console.log(BubbleSortAllRight(arr));
console.log(BubbleSortLeftright(arr));
console.log(BubbleSortRightleft(arr));
