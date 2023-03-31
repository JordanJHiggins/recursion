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
  return fib;
}

// console.log(fibs(8));

// recursive approach

function fibsRec(n) {
  let fib = [];

  if (n <= 0) {
    return fib;
  } else if (n === 1) {
    fib.push(0);
  } else if (n === 2) {
    fib.push(0, 1);
  } else {
    fib = fibsRec(n - 1);
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  return fib;
}

console.log(fibsRec(8));
