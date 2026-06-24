const prompt = require("prompt-sync")();

let x = Number(prompt("Masukkan nilai x: "));
let y = Number(prompt("Masukkan nilai y: "));

let temp = x;
x = y;
y = temp;

console.log("Nilai x =", x);
console.log("Nilai y =", y);