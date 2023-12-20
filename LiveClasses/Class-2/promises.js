// // function myOwnSetTimout(callback, duration) {
// // //   setTimeout(callback, duration);
// // // }

// // // myOwnSetTimout(function () {
// // //   console.log("after Settimeout");
// // // }, 1000);

// // function promisifiedMyOwnSetTimout(duration) {
// //   const p = new Promise(function (resolve) {
// //     return 1 + 1;
// //   });
// //   return p;
// // }

// // promisifiedMyOwnSetTimout().then((res) => console.log(res));

// function textMe() {
//   console.log("Text Me here bro");
// }
// function callMe() {
//   console.log("Hey its me vinay");
// }

// setTimeout(callMe, 0);

// textMe();

const user1 = {
  name: "vinay",
  age: 21,
  increment: function () {
    this.age++;
  },
};

user1.increment();
console.log(user1);
