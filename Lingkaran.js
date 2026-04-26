const prompt = require("prompt-sync")({ sigint: true });

// input
let r = Number(prompt('Masukkan jari-jari: '));

// hitung
let luas = Math.PI * r * r;
let keliling = 2 * Math.PI * r;

console.log("========================");
console.log("      H  A  S  I  L     ");
console.log("========================");

console.log(
`Luas Lingkaran     : ${luas.toFixed(2)} cm2
Keliling Lingkaran : ${keliling.toFixed(2)} cm`
);