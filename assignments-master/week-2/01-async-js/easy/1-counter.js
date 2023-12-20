let countNumber = 0;
function callMeAfter1sec() {
  if (countNumber > 10) {
    clearInterval(interval);
  }
  countNumber++;
  const date = new Date();
  const string = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  console.log(string);
}

const interval = setInterval(callMeAfter1sec, 1000);
