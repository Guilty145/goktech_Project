/**
 * 截止至2023-01-01还有xx天xx小时xx分钟xx秒
 * 用上延时执行解决内存溢出问题
 */
function happyNewYear() {
  let timeEnd = new Date("2023-01-01");
  var timeNow = new Date();
  var time = timeEnd.getTime() - timeNow.getTime();
  var day = Math.floor(time / 1000 / 60 / 60 / 24);
  var hour = Math.floor((time / 1000 / 60 / 60) % 24);
  var minute = Math.floor((time / 1000 / 60) % 60);
  var second = Math.floor((time / 1000) % 60);
  console.log(
    "截止至 2023-01-01 还有 " +
      day +
      " 天 " +
      hour +
      " 小时 " +
      minute +
      " 分钟 " +
      second +
      " 秒"
  );
}
setInterval(happyNewYear, 1000);
