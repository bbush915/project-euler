function time(func) {
  const start = new Date().getTime();

  const result = func();

  return { elapsed: new Date().getTime() - start, result };
}

function factorize(n) {
  const factors = [];
  const generator = primes();

  let value = n;

  while (value > 1) {
    const prime = generator.next().value;

    let order = 0;

    while (value % prime === 0) {
      value /= prime;
      order++;
    }

    if (order > 0) {
      factors.push({ prime, order });
    }
  }

  return factors;
}

function* primes() {
  yield 2;

  let i = 3;

  while (true) {
    if (isPrime(i)) {
      yield i;
    }

    i += 2;
  }
}

function isPrime(n) {
  for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

exports.time = time;
exports.factorize = factorize;
exports.primes = primes;
