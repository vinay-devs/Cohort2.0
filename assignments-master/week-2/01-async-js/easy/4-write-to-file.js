const fs = require("fs");

fs.writeFile("./test.txt", "I am from Kerala", (err) => {
  if (err) {
    console.log(err);
  }
});
