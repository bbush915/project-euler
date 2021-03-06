/*

  Problem 4: Largest Palindrome Product

  A palindromic number reads the same both ways. The largest palindrome made 
  from the product of two 2-digit numbers is 9009 = 91 × 99.

  Find the largest palindrome made from the product of two 3-digit numbers.

*/

function isPalindrome(n) {
  const digits = n.toString().split("");

  for (let i = 0; i < Math.ceil(digits.length / 2); i++) {
    if (digits[i] !== digits[digits.length - i - 1]) {
      return false;
    }
  }

  return true;
}

function solve() {
  let max = 0;

  for (let i = 100; i < 1_000; i++) {
    for (let j = 100; j < 1_000; j++) {
      const value = i * j;

      if (isPalindrome(value) && value > max) {
        max = value;
      }
    }
  }

  return max;
}

exports.solve = solve;
