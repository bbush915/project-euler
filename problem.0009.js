/*

  Problem 9: Special Pythagorean Triplet

  A Pythagorean triplet is a set of three natural numbers, a < b < c, for 
  which,

  a^2 + b^2 = c^2

  For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

  There exists exactly one Pythagorean triplet for which a + b + c = 1000.
  Find the product abc.

*/

const { primeFactorization } = require("./utils");

function isPerfectSquare(n) {
  const primeFactors = primeFactorization(n);
  return primeFactors.every((x) => x.order % 2 === 0);
}

function solve() {
  let a = 1;
  let b = 2;

  for (let a = 1; ; a++) {
    for (let b = a + 1; ; b++) {
      const sumSquares = a * a + b * b;

      if (isPerfectSquare(sumSquares)) {
        const c = Math.sqrt(sumSquares);
        const sum = a + b + c;

        if (sum === 1_000) {
          return a * b * c;
        } else if (sum > 1_000) {
          break;
        }
      }
    }
  }
}

exports.solve = solve;
