function* naturalNumbers(N) {
  let i = 0;

  while (!N || i < N) {
    i += 1;

    yield i;
  }
}

exports.naturalNumbers = naturalNumbers;

function* triangularNumbers(N) {
  let i = 0;
  let sum = 0;

  while (!N || i < N) {
    i += 1;
    sum += i;

    yield sum;
  }
}

exports.triangularNumbers = triangularNumbers;

function* squarePyramidalNumbers(N) {
  let i = 0;
  let sum = 0;

  while (!N || i < N) {
    i += 1;
    sum += i * i;

    yield sum;
  }
}

exports.squarePyramidalNumbers = squarePyramidalNumbers;

function* fibonacciNumbers(N) {
  let i = 0;
  let a = 1;
  let b = 2;

  yield a;
  i++;

  if (N === 1) return;

  yield b;
  i++;

  if (N === 2) return;

  while (!N || i < N) {
    i += 1;

    const sum = a + b;

    a = b;
    b = sum;

    yield sum;
  }
}

exports.fibonacciNumbers = fibonacciNumbers;

function* primes(N) {
  const range = new Array(N + 1).fill(true);

  for (let i = 2; i < Math.sqrt(N); i++) {
    if (range[i]) {
      for (j = i * i; j <= N; j += i) {
        range[j] = false;
      }
    }
  }

  for (let i = 2; i <= N; i++) {
    if (range[i]) {
      yield i;
    }
  }
}

exports.primes = primes;
