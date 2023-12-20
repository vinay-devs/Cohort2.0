/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  let strArray = str.toLowerCase().split("");
  for (let indexArray = 0; indexArray < strArray.length; indexArray++) {
    for (let indexVowels = 0; indexVowels < vowels.length; indexVowels++) {
      if (strArray[indexArray] === vowels[indexVowels]) {
        count += 1;
        continue;
      }
    }
  }
  console.log(count);
  return count;
}
countVowels("hello");
module.exports = countVowels;
