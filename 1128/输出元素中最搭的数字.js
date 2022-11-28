function maxnum(arr) {
  let max = 0;
  for (let i in arr) {
    if (arr[i] > arr[i + 1]) {
      max = arr[i];
    } else if (arr[i] < arr[i + 1]) {
      max = arr[i + 1];
    }
  }
  return max;
}
console.log(maxnum([1, 2, 3, 5]));
//获取某对象的所有成员名称、值
let obj = {
  uname: "guilty",
  uid: 66,
};
console.log(Object.keys(obj));
console.log(Object.values(obj));
//使用内置方法获取对象OBJ的原型
console.log(Object.getPrototypeOf(obj));
//原型的方式实现继承  函数？？？
let Test_1 = {
  name: "guilty",
  age: 18,
};
function WayFirst() {}
WayFirst.prototype = Test_1;
let way_1 = new WayFirst();
console.log(way_1);
//获取dom对象的6种方法
document.getElementById(); //通过id名来获取
document.getElementsByClassName(); //通过类名来获取
document.getElementsByName(); //通过name值来获取
document.getElementsByTagName(); //通过标签名来获取
document.querySelector();
document.querySelectorAll();
