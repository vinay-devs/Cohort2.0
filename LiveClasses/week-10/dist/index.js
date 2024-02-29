"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// Async function to fetch user data from the database given an email
function getUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            host: "localhost",
            port: 5432,
            database: "postgres",
            user: "postgres",
            password: "mysecretpassword",
        });
        const conn = yield client.connect();
        console.log(conn, "CONN");
        const insertData = yield client.query(`INSERT INTO users (id,username,email,password) VALUES (1,'vinaydevs','vinaydevs@gmail.com','vinaydevs')`);
        yield client.end();
        return insertData;
    });
}
// Example usage
getUser()
    .then((data) => {
    console.log(data);
})
    .catch(console.error);
