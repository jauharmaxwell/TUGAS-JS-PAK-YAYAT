const prompt = require("prompt-sync")({ sigint: true });

const nominalUang = Number(prompt("Input jumlah dana rupiah: "));

let dataSisa = nominalUang;

const slot1000 = Math.floor(dataSisa / 1000);
dataSisa %= 1000;

const slot500 = Math.floor(dataSisa / 500);
dataSisa %= 500;

const slot100 = Math.floor(dataSisa / 100);
dataSisa %= 100;

const slot50 = Math.floor(dataSisa / 50);
const slot25 = Math.floor((dataSisa % 50) / 25);

console.log("\n=============================");
console.log("  RINCIAN DENOMINASI KOIN/UANG ");
console.log("=============================");
console.log(`> Koin Rp1.000 : ${slot1000} lembar/koin`);
console.log(`> Koin Rp500   : ${slot500} lembar/koin`);
console.log(`> Koin Rp100   : ${slot100} lembar/koin`);
console.log(`> Koin Rp50    : ${slot50} lembar/koin`);
console.log(`> Koin Rp25    : ${slot25} lembar/koin`);