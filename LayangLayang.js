const prompt = require("prompt-sync")({ sigint: true });

// input
let d1 = Number(prompt('Masukkan diagonal 1: '));
let d2 = Number(prompt('Masukkan diagonal 2: '));

let a = Number(prompt('Masukkan sisi a: '));
let b = Number(prompt('Masukkan sisi b: '));

// hitung
let luas = 0.5 * d1 * d2;
let keliling = 2 * (a + b);

console.log("========================");
console.log("      H  A  S  I  L     ");
console.log("========================");

console.log(
`Luas Layang-layang     : ${luas.toFixed(2)} cm2
Keliling Layang-layang : ${keliling.toFixed(2)} cm`
);