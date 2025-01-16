const { element } = require("prop-types");

// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(arg1, arg2) {
  if (arg1 > arg2) {
    return arg1;
  } else {
    return arg2;
  }
}

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(arr) {
  if (arr.length === 0) {
    return null;
  }
  let longestWord = "";
  arr.forEach((element) => {
    if (element.length > longestWord.length) {
      longestWord = element;
    }
  });
  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
  let sum = 0;
  if (array.length === 0) {
    return 0;
  }
  array.forEach((element) => {
    sum += element;
  });
  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
  let sum = 0;
  let average = 0;
  if (array.length === 0) {
    return 0;
  }

  array.forEach((element) => {
    sum += element;
  });
  average = sum / array.length;

  return average;
}

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(array, word) {
  if (array.length === 0) {
    return null;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return true;
    }
  }
  return false;
}
