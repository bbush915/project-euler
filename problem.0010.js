/*

  Problem 10: Summation of Primes

  The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

  Find the sum of all the primes below two million.

*/

const {
  generators: { primes },
} = require("./utils");

function solve() {
  let sum = 0;

  for (const prime of primes(2_000_000)) {
    sum += prime;
  }

  return sum;
}

exports.solve = solve;
