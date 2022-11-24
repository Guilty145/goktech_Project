// 对象原型方式&call方法，实现继承（4种方式）

/**
 * Way_1原型链
 */
let Test_1 = {
  name: "guilty",
  age: 18,
};
function WayFirst() {}
WayFirst.prototype = Test_1;
let way_1 = new WayFirst();
console.log(way_1);

/**
 * Way_2 参数为对象
 */
let Test_2 = {
  name: "guilty",
  age: 28,
};
function WaySecond(obj) {
  for (let item in obj) {
    this[item] = obj[item];
  }
}
let way_2 = new WaySecond(Test_2);
console.log(way_2);

/**
 * Way_3构造函数继承
 */
function Student() {
  this.name = "guilty";
  this.age = 18;
}
function Person(Student) {
  let obj = new Student();
  for (let item in obj) {
    this[item] = obj[item];
  }
}
let way_3 = new Person(Student);
console.log(way_3);

/**
 * Way_4借用call实现
 */
let Way4 = {
  name: "guilty",
  age: 88,
  func() {
    for (let item in this) {
      Way4[item] = this[item];
    }
  },
};
Way4.func.call({
  name: "guilty_test",
  age: 68,
});
console.log(Way4);

// function Class() {
//   this.name = "guilty";
//   this.age = 18;
// }
// function ClassStudent() {
//   Class.call(this);
//   this.nucleiin = "finished";
// }
// var test_4 = new ClassStudent();
// console.log(test_4);
