const negate = (a) => {
  return !a;
};

const both = (a, b) => {
  return (a === true && b === true)
};

const either = (a, b) => {
  return (a === true || b === true)
};

const none = (a, b) => {
  return (a === !true && b === !true);
};

const one = (a, b) => {
  return (a === true && b === !true || a === !true && b === true);
};

const truthiness = (a) => {
  if (a) {
    return true;
  }
  return false;
};

const isEqual = (a, b) => {
  return a === b;
};

const isGreaterThan = (a, b) => {
  return a > b;
};

const isLessThanOrEqualTo = (a, b) => {
  return a <= b;
};

const isOdd = (a) => {
  return a >= 0 && a % 2 > 0;
};

const isEven = (a) => {
  return a >= 0 && a % 2 === 0;
};

const isSquare = (a) => {
  return a >= 0 && Math.sqrt(a) % 1 === 0;
};

const startsWith = (char, string) => {
  return string.startsWith(char);
};
// tidy up code below
const containsVowels = (string) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < vowels.length; i++) {
    if (string.toLowerCase().indexOf(vowels[i]) !== -1) {
      return true;
    }
  }
  return false;
};

const isLowerCase = (string) => {
  if (string === string.toLowerCase()) {
    return true;
  }
  return false;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase,
};
