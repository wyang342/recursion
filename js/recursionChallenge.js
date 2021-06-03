exports.factorial = function (num) {
  // Don't run if num is negative
  if (num < 0) {
    return;
  }

  function recursiveFactorial(num) {
    if (num === 0) {  // Base Case
      return 1;
    } else {
      return num * recursiveFactorial(num - 1);  // recursive call & reduction
    }
  }

  return recursiveFactorial(num);  // calling the recursive function
};

exports.palindrome = function (str) {
  function recursivePalindrome(str) {
    if (str.length === 0) {
      return true
    } else {  // didn't check for nums. if num, don't do toLowerCase()
      if (str[0].toLowerCase() === str[str.length - 1].toLowerCase()) {
        return recursivePalindrome(str.slice(1, str.length - 1))
      } else {
        return false
      }
    }
  }

  return recursivePalindrome(str)
};

exports.bottles = function () {
  if (num === 0) {  // base case
    console.log("No more bottles of beer on the wall, no more bottles of beer.");
    console.log("Go to the store and buy some more, 99 bottles of beer on the wall.")
    return;
  } else if (num === 1) {
    console.log(num + " bottle of beer on the wall, " + num + " bottle of beer.");
    console.log("Take one down and pass it around, no more bottles of beer on the wall.");
    return bottleSong(num - 1);  // reduction & recursive call
  } else if (num === 2) {
    console.log(num + " bottles of beer on the wall, " + num + " bottles of beer.");
    console.log("Take one down and pass it around, " + (num - 1) + " bottle of beer on the wall.");
    return bottleSong(num - 1);  // reduction & recursive call
  } else {
    console.log(num + " bottles of beer on the wall, " + num + " bottles of beer.");
    console.log("Take one down and pass it around, " + (num - 1) + " bottles of beer on the wall.");
    return bottleSong(num - 1);  // reduction & recursive call
  }
};

exports.romanNum = function (inputNum, modern = true) {
  const romanAndArabicArray = [
    { 1000: "M" },
    { 500: "D" },
    { 100: "C" },
    { 50: "L" },
    { 10: "X" },
    { 5: "V" },
    { 1: "I" }
  ]
  const modernRomanAndArabicArray = [
    { 1000: "M" },
    { 900: "CM" },
    { 500: "D" },
    { 400: "CD" },
    { 100: "C" },
    { 90: "XC" },
    { 50: "L" },
    { 40: "XL" },
    { 10: "X" },
    { 9: "IX" },
    { 5: "V" },
    { 4: "IV" },
    { 1: "I" }
  ]

  let conversionData = modern ? modernRomanAndArabicArray : romanAndArabicArray;
  let index = 0;

  function recursiveRomanNum(num) {
    let output = "";

    // Base case
    if (index >= conversionData.length) {
      return output;
    }

    let arabicNum = Object.keys(conversionData[index])[0];
    let romanNum = Object.values(conversionData[index])[0];

    let evenlyDivisibleTimes = Math.floor(num / arabicNum);
    if (evenlyDivisibleTimes >= 1) {
      output += romanNum.repeat(evenlyDivisibleTimes);
      num -= arabicNum * evenlyDivisibleTimes
    }

    index++;
    return output + recursiveRomanNum(num)

  }


  return recursiveRomanNum(inputNum);
};


exports.romanNum(4)