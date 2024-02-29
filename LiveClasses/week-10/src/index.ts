import { Client } from "pg";

// Async function to fetch user data from the database given an email
async function getUser() {
  const client = new Client({
    host: "localhost",
    port: 5432,
    database: "postgres",
    user: "postgres",
    password: "mysecretpassword",
  });
  const conn = await client.connect();
  console.log(conn, "CONN");
  const insertData = await client.query(
    `INSERT INTO users (id,username,email,password) VALUES (1,'vinaydevs','vinaydevs@gmail.com','vinaydevs')`
  );
  await client.end();
  return insertData;
}

// Example usage
getUser()
  .then((data) => {
    console.log(data);
  })
  .catch(console.error);
