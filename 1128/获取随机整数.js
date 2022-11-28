function randomnum(n, m) {
  return Math.round(Math.random(m + 1 - n) + m);
}
console.log(randomnum(1, 10));
