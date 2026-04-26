const prompt = require("prompt-sync")({ sigint: true });

// input
let alas = Number(prompt('Masukkan alas: '));
let tinggi = Number(prompt('Masukkan tinggi: '));
let sisiMiring = Number(prompt('Masukkan sisi miring: '));

// hitung
let luas = alas * tinggi;
let keliling = 2 * (alas + sisiMiring);

console.log("========================");
console.log("      H  A  S  I  L     ");
console.log("========================");

console.log(
`Luas Jajar Genjang     : ${luas.toFixed(2)} cm2
Keliling Jajar Genjang : ${keliling.toFixed(2)} cm`
);