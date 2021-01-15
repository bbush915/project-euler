/*

  Problem 3: Largest Prime Factor

  The prime factors of 13195 are 5, 7, 13 and 29.

  What is the largest prime factor of the number 600851475143 ?

*/

const { primeFactorization } = require("./utils");

function solve() {
  const sortedPrimeFactors = primeFactorization(600_851_475_143)
    .map((x) => x.prime)
    .sort((x, y) => y - x);

  return sortedPrimeFactors[0];
}

exports.solve = solve;
