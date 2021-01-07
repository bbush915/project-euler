/*

  Problem 3:

  The prime factors of 13195 are 5, 7, 13 and 29.

  What is the largest prime factor of the number 600851475143 ?

*/

const { factorize } = require("./utils");

function solve() {
  return factorize(600851475143)
    .map((x) => x.prime)
    .sort((x, y) => y - x)[0];
}

exports.solve = solve;
