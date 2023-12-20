function cube(n) {
  return n * n * n;
}

function sumOfSomething(a, b) {
  const s1 = square(a);
  const s2 = square(b);

  return s1 + s2;
}
const ans = sumOfSomething(1, 4);
console.log(ans);

function square(n) {
  return n * n;
}
