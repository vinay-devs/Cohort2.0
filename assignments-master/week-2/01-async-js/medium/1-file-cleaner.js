const fs = require("fs");

// this program will delete the extra spaces in between the words
// and rewrite the file to new file with proper spaces

fs.readFile("./test.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  let words = [];
  data
    .toString()
    .split(" ")
    .map((el) => {
      if (el) {
        return words.push(el);
      }
    });
  let stringToUpload = "";
  for (let index = 0; index < words.length; index++) {
    stringToUpload += words[index] + " ";
  }

  fs.writeFile("./test.txt", stringToUpload, (err) => {
    console.log(err);
  });
});
