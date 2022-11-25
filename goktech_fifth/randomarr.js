/**
 *. 数组1-100元素，顺序随机打乱（一行代码）
 */
let arr = new Array(100).fill(undefined).map((item, index) => index + 1);
console.log(arr.sort());
