/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
// spar and rasp pras

function isAnagram(str1, str2) {
  let str1Array = str1.toLowerCase().split("").sort().join();
  let str2Array = str2.toLowerCase().split("").sort().join();
  return str1Array === str2Array ? true : false;
}

module.exports = isAnagram;
