function sum(num1, num2, displayResult) {
  let result = num1 + num2;
  displayResult(result);
}

function displayResult(data) {
  console.log("Result of the sum is :" + data);
}
function displayResultPassive(data) {
  console.log("Sum's result is :");
}

sum(1, 3, displayResult);
