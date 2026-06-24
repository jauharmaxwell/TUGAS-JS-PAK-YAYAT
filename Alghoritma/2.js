const prompt = require("prompt-sync")();

let hari = Number(prompt("Masukkan jumlah hari: "));

let tahun = Math.floor(hari / 365);
let sisa = hari % 365;

let bulan = Math.floor(sisa / 30);
let hariSisa = sisa % 30;

console.log("Tahun =", tahun);
console.log("Bulan =", bulan);
console.log("Hari =", hariSisa);