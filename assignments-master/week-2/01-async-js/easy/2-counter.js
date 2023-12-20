function callMeAfter1sec(n) {
  for (let index = 1; index <= n; index++) {
    setTimeout(() => {
      console.log(index);
    }, 1000 * index);
  }
}

callMeAfter1sec(10);
