const { afterEachSec } = require("../easy/2-counter");

afterEachSec(() => {
  const date = new Date();
  displayClock1(date);
  displayClock2(date);
}, 1000);

function displayClock1(date) {
  let format1 = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  console.log(format1);
}

function displayClock2(date) {
  let format2 = "";
  if (date.getHours() < 12) {
    format2 = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} AM`;
  } else {
    format2 = `${
      date.getHours() - 12
    }:${date.getMinutes()}:${date.getSeconds()} PM`;
  }
  console.log(format2);
}
