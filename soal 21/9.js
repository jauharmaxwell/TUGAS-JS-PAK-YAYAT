const prompt = require("prompt-sync")({sigint: true});
let p = Number(prompt('Masukkan Nilai Panjang: '));
let l = Number(prompt('Masukkan Nilai Lebar: '));

let L = p * l;
let K = 2 * (p + l);

console.log(
    `Luas Persegi Panjang\t\t: ${L.toFixed(2)} cm2
    Keliling Persegi Panjang\t: ${K.toFixed(2)} cm`
)