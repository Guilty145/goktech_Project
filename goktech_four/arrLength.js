/**
 *Array原型方式扩展一方法，统计数组（维度未知、索引）元素个数
 * @returns length
 */
Array.prototype.myLength = function () {
  let count = 0;
  function arrItem(item) {
    for (let i = 0; i < item.length; i++) {
      if (Array.isArray(item[i])) {
        //判断是否是数组类型，反之就不是数组类型，数组就递归调用
        arrItem(item[i]);
      } else {
        //碰到数据就让count+1
        count = count + 1;
      }
    }
    return count;
  }
  return arrItem(this);
};
var arr = [1, [2, 3, [4, 5], 6], 7];
console.log(arr.myLength());
