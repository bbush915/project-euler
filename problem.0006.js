/*

  Problem 6:

  The sum of the squares of the first ten natural numbers is,

  1^2 + 2^2 + ... + 10^2 = 385

  The square of the sum of the first ten natural numbers is,

  (1 + 2 + ... + 10)^2 = 55^2 = 3025

  Hence the difference between the sum of the squares of the first ten natural 
  numbers and the square of the sum is 3025 - 385 = 2640.

  Find the difference between the sum of the squares of the first one hundred 
  natural numbers and the square of the sum.

*/

function solve() {
  let n = 100;

  let sum = (n * (n + 1)) / 2;
  let sumSquares = 0;

  for (let i = 1; i <= 100; i++) {
    sumSquares += i * i;
  }

  return sum * sum - sumSquares;
}

exports.solve = solve;
