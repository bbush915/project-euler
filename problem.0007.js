/*

  Problem 7: 10001st Prime

  By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see 
  that the 6th prime is 13.

  What is the 10001st prime number?

*/

const {
  generators: { primes },
} = require("./utils");

function solve() {
  let i = 0;

  for (const prime of primes(125_000)) {
    i++;

    if (i === 10_001) {
      return prime;
    }
  }
}

exports.solve = solve;
