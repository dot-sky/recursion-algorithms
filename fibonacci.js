function fibs(n) {
  let a = -1;
  let b = 1;
  let fib;
  const arr = [];
  for (let i = 0; i < n; i++) {
    fib = a + b;
    arr.push(fib);
    a = b;
    b = fib;
  }
  return arr;
}
function fibsRec(n) {
  if (n <= 0) return [];
  if (n == 1) return [0];
  if (n == 2) return [0, 1];
  const partialFib = fibsRec(n - 1);
  const lastIndex = partialFib.length - 1;
  return partialFib.concat([partialFib[lastIndex - 1] + partialFib[lastIndex]]);
}

console.log(fibs(8));
console.log(fibsRec(8));
