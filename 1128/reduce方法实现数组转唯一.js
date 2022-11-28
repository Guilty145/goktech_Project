let arr = [1, 2, [3, 4], 5];
let arr_2 = arr.reduce((result, current) => {
  if (!Array.isArray(current)) {
    result.push(current);
  } else {
    for (let i in current) {
      result.push(current[i]);
    }
  }
}, []);
console.log(arr_2);
