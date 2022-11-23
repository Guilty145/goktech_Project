//map,filter,reduce方法实现数组去重
let arr = [2, 5, 11, 11, 66, 66, 97];

/**
 * map方法实现
 */
let arr_2 = [];
let mapWay = arr.map((item) => {
  if (arr_2.indexOf(item) == -1) {
    arr_2.push(item);
  }
  return arr_2;
});
console.log(arr_2);

/**
 * filter方法实现
 */
let filterway = arr.filter((item, index) => {
  return arr.indexOf(item) === index;
});
console.log(filterway);

/**
 * reduce方法实现
 */
let reduceWay = arr.reduce((result, current) => {
  if (!result.includes(current)) {
    result.push(current);
  }
  return result;
}, []);
console.log(reduceWay);
