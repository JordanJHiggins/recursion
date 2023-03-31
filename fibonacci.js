// iterative approach

function fibs(n) {
  let fib = [];

  for (let i = 0; i < n; i++) {
    if (i <= 1) {
      fib.push(i);
    } else {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
  }
  console.log(fib);
}

fibs(8);
