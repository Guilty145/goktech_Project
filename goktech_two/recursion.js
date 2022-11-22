/**
 * 递归实现1-100的累加
 * @param {Number} num
 * @returns {Number} 递归的结果
 */
function sumAdd(num) {
  if (num === 1) {
    return 1;
  }
  return num + sumAdd(num - 1);
}
console.log(sumAdd(100));
