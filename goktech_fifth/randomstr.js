/*自定义一函数，实现随机6位随机字符串（包含字母、数字）*/

// 生成随机数的函数
/**
 *
 * @param {Number} n
 * @param {Number} m
 * @returns number
 */
function getrandom(n, m) {
  return Math.floor(Math.random() * (m + 1 - n) + n);
}
/**
 *
 * @returns String
 */
function getArr() {
  let newstr = "";
  let arr = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  //   console.log(arr.length);
  for (var item = 0; item < 6; item++) {
    //获取随机的下标
    var index = getrandom(0, arr.length);
    newstr += arr[index];
  }
  return newstr;
}
console.log(getArr());
