// function callMeAfter1sec(n) {
//   for (let index = 1; index <= n; index++) {
//     setTimeout(() => {
//       console.log(index);
//     }, 1000 * index);
//   }
// }

// callMeAfter1sec(10);
function sleep(duration) {
  return new Promise((res) => setTimeout(() => res(), duration));
}
async function afterEachSec(callback, duration) {
  while (true) {
    await sleep(duration);
    callback();
  }
}

module.exports = { afterEachSec };
