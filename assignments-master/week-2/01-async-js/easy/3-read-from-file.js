const fs = require("fs");
let sum = 0;
for (let i = 0; i < 100000000000000; i++) {
  sum += i;
}
console.log(sum);
fs.readFile("./test.txt", (err, data) => {
  console.log(data.toString());
});
