/*

  Problem 5:

  2520 is the smallest number that can be divided by each of the numbers from 1
  to 10 without any remainder.

  What is the smallest positive number that is evenly divisible by all of the 
  numbers from 1 to 20?

*/

const { factorize } = require("./utils");

function solve() {
  const factors = {};

  for (let i = 2; i <= 20; i++) {
    for (const { prime, order } of factorize(i)) {
      if (!factors[prime] || order > factors[prime]) {
        factors[prime] = order;
      }
    }
  }

  return Object.entries(factors).reduce((acc, [prime, order]) => ((acc *= Math.pow(Number(prime), order)), acc), 1);
}

exports.solve = solve;
