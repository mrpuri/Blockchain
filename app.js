const http = require("http");
const fs = require("fs");
const hostname = "127.0.0.1";
const port = 3000;
const crypto = require("crypto");

const Block = require("./block");
let b = new Block("harman", Date.now());
let a = [];
// console.log(bl);
// fs.readFile('index.html', (err, html)=> {
//     if(err)
// {
//     throw err;
// }
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.end("Hello there!");
// });

// server.listen(port, hostname, () => {
//   console.log("server started on port" + port);
// });
function createBlock() {
  // get name from user
  const name = "harsimar";
  a.push(Block.Bloc(name, Date.now()));
}

for (let i = 1; i < 10; i++) {
  createBlock();
}
console.log(a);
