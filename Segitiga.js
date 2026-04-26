const prompt = require("prompt-sync")({ sigint: true });

// input luas
let alas = Number(prompt('Masukkan alas: '));
let tinggi = Number(prompt('Masukkan tinggi: '));

// hitung luas
let luas = 0.5 * alas * tinggi;

// input keliling
let a = Number(prompt('Masukkan sisi a: '));
let b = Number(prompt('Masukkan sisi b: '));
let c = Number(prompt('Masukkan sisi c: '));

// hitung keliling
let keliling = a + b + c;

console.log("========================");
console.log("      H  A  S  I  L     ");
console.log("========================");

console.log(
`Luas Segitiga     : ${luas.toFixed(2)} cm2
Keliling Segitiga : ${keliling.toFixed(2)} cm`
);