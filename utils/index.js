/* Timing */

function time(func) {
  const start = new Date().getTime();

  const result = func();

  return { elapsed: new Date().getTime() - start, result };
}

exports.time = time;

/* Generators */

const generators = require("./generators");
exports.generators = generators;

/* Formulae */

const formulae = require("./formulae");
exports.formulae = formulae;

/* Miscellaneous */

function sum(values) {
  return values.reduce((acc, cur) => ((acc += cur), acc), 0);
}

exports.sum = sum;

function product(values) {
  return values.reduce((acc, cur) => ((acc *= cur), acc), 1);
}

exports.product = product;

function primeFactorization(n) {
  const results = [];

  for (const prime of generators.primes(n)) {
    let order = 0;

    while (n % prime === 0) {
      n /= prime;
      order++;
    }

    if (order > 0) {
      results.push({ prime, order });
    }
  }

  return results;
}

exports.primeFactorization = primeFactorization;
