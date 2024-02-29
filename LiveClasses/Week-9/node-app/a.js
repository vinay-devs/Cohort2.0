"use strict";
const isLegal = (user) => {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
};
const result = isLegal({
    firstName: "vinay",
    lastName: "dev",
    email: "vinaydevs",
    age: 21,
});
console.log(result);
