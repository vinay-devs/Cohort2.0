/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (str.length == 0) {
    return true;
  }
  let strArray = str.toLowerCase().split("");
  let firstIndex = 0;
  let lastIndex = strArray.length - 1;
  for (let arrIndex = 0; arrIndex < strArray.length; arrIndex++) {
    if (strArray[arrIndex] === (" " || "," || "!")) {
      return true;
    }
  }
  while (firstIndex < lastIndex) {
    console.log(strArray[firstIndex], strArray[lastIndex]);
    if (strArray[firstIndex] == strArray[lastIndex]) {
      firstIndex++;
      lastIndex--;
    } else {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
