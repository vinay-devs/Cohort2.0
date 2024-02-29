interface User {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}
const isLegal = (user: User): boolean => {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
};

const result: boolean = isLegal({
  firstName: "vinay",
  lastName: "dev",
  email: "vinaydevs",
  age: 21,
});

console.log(result);
