(function () {
  const str = "hello world";

  const allChar = "abcdefghijklmnopqrstuvwxyz ".split("");

  let delayCounter = 0;
  function asyncLogger(str) {
    const delay = 50 * delayCounter++;
    setTimeout(() => console.log(str), delay);
  }

  let result = "";
  for (let guessIndex = 0; guessIndex < str.length; guessIndex++) {
    const guessChar = str[guessIndex];
    for (let charIndex = 0; charIndex < allChar.length; charIndex++) {
      const char = allChar[charIndex];
      asyncLogger(`${result}${char}`);
      if (guessChar === char) {
        result = `${result}${char}`;
        continue;
      }
    }
  }
})();

// File structure
// Counter
