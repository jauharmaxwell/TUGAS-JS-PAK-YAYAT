const prompt = require("prompt-sync")({ sigint: true });

// input
let d1 = Number(prompt('Masukkan diagonal 1: '));
let d2 = Number(prompt('Masukkan diagonal 2: '));
let sisi = Number(prompt('Masukkan panjang sisi: '));

// hitung
let luas = 0.5 * d1 * d2;
let keliling = 4 * sisi;

console.log("========================");
console.log("      H  A  S  I  L     ");
console.log("========================");

console.log(
`Luas Belah Ketupat     : ${luas.toFixed(2)} cm2
Keliling Belah Ketupat : ${keliling.toFixed(2)} cm`
);