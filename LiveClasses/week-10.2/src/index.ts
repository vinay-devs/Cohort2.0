import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const res = await prisma.user.create({
    data: {
      email: username,
      password,
      firstName,
      lastName,
      age: 10
    },
  });
  console.log(res);
}
insertUser("vinaydevs", "vinaydevs", "vinay", "devs");


