// 正则验证,不清楚
export default class {
  constructor() {}
  /**
   *验证是否为空
   * @param {String} str
   * @returns {boolean}
   */
  isEmpty(str) {
    return str.trim() == "" ? true : false;
  }
  /**
   *验证长度要求范围内
   * @param {String} str
   * @param {Number} minL
   * @param {Number} maxL
   * @returns {boolean}
   */
  trueLength(str, minL, maxL) {
    return str.length >= minL && str.length <= maxL ? true : false;
  }
  /**
   *两值是否一致
   * @param {String} str_1
   * @param {String} str_2
   * @returns {boolean}
   */
  isEqual(str_1, str_2) {
    return str_1 === str_2 ? true : false;
  }
  /**
   *数组元素个数限制,不少于两个
   * @param {Array} arr
   * @param {Number} num
   * @returns {boolean}
   */
  arrNumLimit(arr, num) {
    return arr.length >= num ? true : false;
  }
  /**
   *验证是否为正确日期格式 yyyy-mm-dd
   * @param {String} date
   * @returns {boolean}
   */
  dateTime(date) {
    let reg = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
    if (!reg.test(date)) {
      return false;
    }
    let arr = date.split("-");
    let year = parseInt(arr[0]);
    let month = parseInt(arr[1]);
    let day = parseInt(arr[2]);

    //31天的月份
    if (
      month == 1 ||
      month == 3 ||
      month == 5 ||
      month == 7 ||
      month == 8 ||
      month == 10 ||
      month == 12
    ) {
      //   console.log("day:31");
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
      if (day > 30) {
        return false;
      }
    } else if (month == 2) {
      // 闰年2月
      if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
        if (day > 29) {
          return false;
        }
      } else {
        // 平年2月
        if (day > 28) {
          return false;
        }
      }
    }
    return true;
  }
  /**
   *11位手机格式验证
   * @param {Number} phone
   * @returns {boolean}
   */
  isPhone(phone) {
    let reg = /^1\d{10}$/;
    if (!reg.test(phone)) {
      return false;
    }
    return true;
  }
  /**
   * email格式验证
   * @param {String} str
   * @returns {boolean}
   */
  isEmail(str) {
    let reg = /^([a-zA-Z0-9]+[-_.]?)+@[a-zA-Z0-9]+.[a-z]+$/;
    if (!reg.test(value)) {
      return false;
    }
    return true;
  }
}
