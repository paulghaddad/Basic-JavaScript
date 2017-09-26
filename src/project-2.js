// Do not change any of the function names

// x and y are integers.  Return the larger integer
// if they are the same return either one
const getBiggest = (x, y) => (x > y ? x : y);

const greeting = (language) => {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Spanish' -> 'Hola!'
  // language: 'Chinese' -> 'Ni Hao!'
  // if language is undefined return 'Hello!'
  switch (language) {
    case 'German':
      return 'Guten Tag!';
    case 'Spanish':
      return 'Hola!';
    case 'Chinese':
      return 'Ni Hao!';
    default:
      return 'Hello!';
  }
};

// return true if num is 10 or 5
// otherwise return false
const isTenOrFive = num => (num === 10 || num === 5);

// return true if num is less than 50 and greater than 20
const isInRange = num => (num < 50 && num > 20);

const isInteger = (num) => {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  if (num === Math.floor(num)) {
    return true;
  }

  return false;
};

const fizzBuzz = (num) => {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  let string = '';

  if (num % 3 === 0) {
    string += 'fizz';
  }

  if (num % 5 === 0) {
    string += 'buzz';
  }

  return string || num;
};

const isPrime = (num) => {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers

  if (num === 0 || num === 1) {
    return false;
  }

  for (let i = num - 1; i > 1; i--) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

// return the first item from the array
const returnFirst = arr => arr[0];

// return the last item of the array
const returnLast = arr => arr[arr.length - 1];

// return the length of the array
const getArrayLength = arr => arr.length;

const incrementByOne = arr => arr.map(element => element + 1);

// add the item to the end of the array
// return the array
const addItemToArray = (arr, item) => [...arr, item];

// add the item to the front of the array
// return the array
// hint: use the array method .unshift
const addItemToFront = (arr, item) => [item, ...arr];

// words is an array of strings
// return a string that is all of the words concatenated together
// spaces need to be between each word
// example: ['Hello', 'world!'] -> 'Hello world!'
const wordsToSentence = words => words.join(' ');

// check to see if item is inside of arr
// return true if it is, otherwise return false
const contains = (arr, item) => arr.includes(item);

// numbers is an array of integers.
// add all of the integers and return the value
const addNumbers = numbers => numbers.reduce((sum, num) => sum + num);

// testScores is an array.  Iterate over testScores and compute the average.
// return the average
const averageTestScore = testScores => addNumbers(testScores) / testScores.length;

const largestNumber = (numbers) => {
  // numbers is an array of integers
  // return the largest integer
  return numbers.reduce((largestItem, num) => {
    if (num > largestItem) {
      return largestItem = num;
    }

    return largestItem;
  });
};

// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber
};
