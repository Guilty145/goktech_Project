export default class {
  //增、改
  setValue(key, val, outoftime = 1) {
    localStorage.setItem(
      key,
      JSON.stringify({
        val, //等同于val：val;
        // 将来过期的时间
        outime: Date.now() + outoftime * 24 * 3600 * 1000,
      })
    );
    return true;
  } //查
  getValue(key) {
    let storageValue = localStorage.getItem(key);
    //如果数据不存在则返回空
    if (!storageValue) {
      return null;
    }
    let storageValueObj = JSON.parse(storageValue);
    //读取localStorage的时候去判断数据是否过期，如果过期则无法获取数据，并删除数据
    if (!storageValueObj.outime || Date.now() > storageValue) {
      localStorage.removeItem(key);
      return "storage value is expire.";
    }
    return storageValueObj.val;
  }
  //删除
  removeValue(key) {
    let storageValue = localStorage.getItem(key);
    //若不存在则直接返回空
    if (!storageValue) return null;
    //若存在则删除
    localStorage.removeItem(key);
  }
}
