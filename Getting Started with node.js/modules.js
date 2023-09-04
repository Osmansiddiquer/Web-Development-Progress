// node.js provides us with a standard library of built-in modules.
// Complete list:
// https://www.w3schools.com/nodejs/ref_modules.asp

// File system: "fs"
const fs = require("node:fs"); //including CommonJS module

// import fs from "fs" // same as above

const text = fs.readFileSync("server.js", "utf-8");
console.log(text);

fs.writeFileSync("modules-test.txt", "Anda Fry Parahta\n", {flag: "a"});
