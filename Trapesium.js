const prompt = require("prompt-sync")({ sigint: true });

// input
let a = Number(prompt('Masukkan sisi sejajar atas (a): '));
let b = Number(prompt('Masukkan sisi sejajar bawah (b): '));
let tinggi = Number(prompt('Masukkan tinggi: '));

let c = Number(prompt('Masukkan sisi miring kiri: '));
let d = Number(prompt('Masukkan sisi miring kanan: '));

// hitung
let luas = 0.5 * (a + b) * tinggi;
let keliling = a + b + c + d;

console.log("========================");
console.log("      H  A  S  I  L     ");
console.log("========================");

console.log(
`Luas Trapesium     : ${luas.toFixed(2)} cm2
Keliling Trapesium : ${keliling.toFixed(2)} cm`
);