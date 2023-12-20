/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
  const timeStart = new Date();
  console.log(timeStart);
  const timeStartMinute = timeStart.getUTCMinutes();
  let timeStartSecond = timeStart.getUTCSeconds();
  const timeStartMilliSecond = timeStart.getUTCMilliseconds();
  console.log(timeStartMinute, timeStartSecond, timeStartMilliSecond);
  let sum = 0;
  for (let number = 0; number < n; number++) {
    sum += number;
  }
  const timeEnd = new Date();
  console.log(timeEnd);
  const timeEndMinute = timeEnd.getUTCMinutes();
  const timeEndSecond = timeEnd.getUTCSeconds();
  const timeEndMilliSecond = timeEnd.getMilliseconds();
  console.log(timeEndMinute, timeEndSecond, timeEndMilliSecond);
  let timeMilli;
  if (timeEndMilliSecond < timeStartMilliSecond) {
    timeMilli = 1000 - timeEndMilliSecond;
    timeStartSecond = timeStartSecond - 1;
  } else {
    timeMilli = timeEndMilliSecond - timeStartMilliSecond;
  }
  console.log(
    "Minute:",
    timeEndMinute - timeStartMinute,
    "Second:",
    timeEndSecond - timeStartSecond,
    "MilliSecond",
    timeMilli
  );
}

calculateTime(1000000000);
