/*

  Problem 1: Multiples of 3 and 5

  If we list all the natural numbers below 10 that are multiples of 3 or 5, we 
  get 3, 5, 6 and 9. The sum of these multiples is 23.

  Find the sum of all the multiples of 3 or 5 below 1000.

*/

const {
  formulae: { nthTriangularNumber },
} = require("./utils");

function sumMultiples(n, N) {
  return n * nthTriangularNumber(Math.floor((N - 1) / n));
}

function solve() {
  const N = 1000;

  const sum = sumMultiples(3, N) + sumMultiples(5, N) - sumMultiples(15, N);
  return sum;
}

exports.solve = solve;
