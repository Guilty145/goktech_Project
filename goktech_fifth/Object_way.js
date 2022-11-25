"use strict";
/*Object.create() */
let obj = Object.create({
  uname: "guilty",
  uid: 66,
});
for (let item in obj) {
  console.log(item + ":" + obj[item]);
}
/* 添加或更改对象属性*/
/*如果是一个新的属性名，则为添加，
如果是原来对象中就有的属性名，则为修改，
对单个数据进行是否可修改、配置、遍历的设置 */
Object.defineProperty(obj, "sch", {
  value: "jum",
  wirtable: true, //是否可修改，默认false
  enumerable: true, //是否可枚举，默认为false
  configurable: true, //是否可配置(修改、删除)，默认false，一旦设置为false，后续的代码无法再对该属性进行任何更改
});
console.log(obj);
for (let item in obj) {
  console.log(item + ":" + obj[item]);
}
Object.defineProperty(obj, "sch", {
  value: "JMU",
  writable: true,
  //   enumerable: true,
  configurable: true,
});
for (let item in obj) {
  console.log(item + ":" + obj[item]);
}
Object.defineProperties(obj, {
  hobbit_1: {
    value: "A",
    configurable: true,
    // writable: true,
    enumerable: true,
  },
  hobbit_2: {
    value: "B",
    configurable: true,
    writable: true,
    // enumerable: true,
  },
});
console.log(obj);
for (let item in obj) {
  console.log(item + ":" + obj[item]);
}
// 以数组返回可枚举属性
console.log(Object.keys(obj));
// 访问属性
console.log(Object.getOwnPropertyDescriptor(obj, "sch"));
// 以数组返回所有属性
console.log(Object.getOwnPropertyNames(obj));
// 访问原型
console.log(Object.getPrototypeOf(obj));
// 防止向对象添加属性
Object.preventExtensions(obj);
// 如果属性可以添加到对象，则返回 true
console.log(Object.isExtensible(obj));
// 防止更改对象属性（不是值）
Object.seal(obj);
// 如果对象被密封，则返回 true
Object.isSealed(obj);
console.log(Object.isSealed(obj));
// 防止对对象进行任何更改
Object.freeze(obj);
// 如果对象被冻结，则返回 true
console.log(Object.isFrozen(obj));
