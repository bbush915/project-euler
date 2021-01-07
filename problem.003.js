/*

  Problem 3:

  The prime factors of 13195 are 5, 7, 13 and 29.

  What is the largest prime factor of the number 600851475143 ?

*/

function solve() {
  return factorize(600851475143)
    .map((x) => x.prime)
    .sort((x, y) => y - x)[0];
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
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

exports.solve = solve;
