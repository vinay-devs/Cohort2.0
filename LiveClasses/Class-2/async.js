function onDone() {
  console.log("Hey there");
}

setTimeout(onDone, 1);

console.log("After setTImeout");
for (let i = 0; i < 100; i++) {
  console.log(i);
}
