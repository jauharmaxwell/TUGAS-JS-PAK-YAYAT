const prompt = require("prompt-sync")({ sigint: true });

let sisi = Number(prompt('Masukkan sisi: '));

// rumus yang benar
let luas = sisi ** 2;
let keliling = 4 * sisi;

console.log("========================");
console.log("      H  A  S  I  L     ");
console.log("========================");

console.log('Luas Persegi : ' + luas + ' cm2');
console.log('Keliling Persegi : ' + keliling + ' cm');

console.log(
`Luas persegi        : ${luas.toFixed(2)} cm2
Keliling persegi    : ${keliling.toFixed(2)} cm`
);