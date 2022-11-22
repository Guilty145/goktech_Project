/**
 * 闭包实现传参累乘
 * @param {Number} arg1
 * @returns {Number}
 */
function foo1(arg1) {
  sum = arg1;
  return function (arg2) {
    sum = sum * arg2;
    return function (arg3) {
      sum = sum * arg3;
      return function (arg4) {
        return (sum = sum * arg4);
      };
    };
  };
}

console.log(foo1(1)(2)(3)(5));
