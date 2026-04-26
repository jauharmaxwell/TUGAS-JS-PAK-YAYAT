const prompt = require("prompt-sync")({ sigint: true });

let panjang = Number(prompt('Masukkan panjang: '));
let lebar = Number(prompt('Masukkan lebar: '));

// rumus
let luas = panjang * lebar;
let keliling = 2 * (panjang + lebar);

console.log("========================");
console.log("      H  A  S  I  L     ");
console.log("========================");

console.log('Luas Persegi Panjang : ' + luas + ' cm2');
console.log('Keliling Persegi Panjang : ' + keliling + ' cm');

console.log(
`Luas Persegi Panjang : ${luas.toFixed(2)} cm2
Keliling Persegi Panjang : ${keliling.toFixed(2)} cm`
);