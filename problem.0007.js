/*

  Problem 7:

  By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see 
  that the 6th prime is 13.

  What is the 10 001st prime number?

*/

const { primes } = require("./utils");

function solve() {
  const generator = primes();

  for (let i = 0; i < 10000; i++) {
    generator.next().value;
  }

  return generator.next().value;
}

exports.solve = solve;
