// tidy up
const getNthElement = (index, array) => {
  if (index < array.length) {
    return array[index];
  }
  index = index - array.length;
  return array[index];
};

const arrayToCSVString = (array) => {
  return array.join(',');
};

const csvStringToArray = (string) => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = (numbers) => {
  return numbers.map(String);
};

const uppercaseWordsInArray = (strings) => {
  // you can write your map function calbacks using arrow notation as well, e.g:
  /*
  return strings.map(string => string.toUpperCase());
  */
  return strings.map(function upperCase(string) {
    return string.toUpperCase();
  });
};

const reverseWordsInArray = (strings) => {
  // same here, you can use arrow function notation with your map callbacks
  return strings.map(function reverseString(string) {
    return string.split('').reverse().join('');
  });
};

const onlyEven = (numbers) => {
  return numbers.filter(n => n % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  return array.filter(a => a !== array[index]);
};

const elementsStartingWithAVowel = (strings) => {
  // another way of doing this would be to define a list of vowels in an array
  // then you can check if character: string[0].toLowerCase() is one of the items in the vowels array
  /*
  const vowels = ['a', 'e', 'i', 'o', 'u']
  return strings.filter(string => {
    return vowel.includes(string[0].toLowerCase());
  });
  another interesting approach is to use a regex to do pattern matching, Russell did this in his codebase:
  see: https://github.com/ruzla/javascript-basics/blob/master/src/arrays.js#L51
  */
  return strings.filter(string => {
    return string[0].toLowerCase() === 'a' || string[0].toLowerCase() === 'e' || string[0].toLowerCase() === 'i' || string[0].toLowerCase() === 'o' || string[0].toLowerCase() === 'u';
  });
};

const removeSpaces = (string) => {
  return string.replace(/ /g, '');
};

const sumNumbers = (numbers) => {
  return numbers.reduce((a, b) => a + b, 0);
};

// tidy up & revise Unicode values
const sortByLastLetter = (strings) => {
  return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
}; 
