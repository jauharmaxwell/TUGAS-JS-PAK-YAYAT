const prompt = require("prompt-sync")();

let l = Number(prompt("Masukkan Lebar Balok = "));
let p = Number(prompt("Masukkan Panjang Balok = "));
let t = Number(prompt("Masukkan Tinggi Balok = "))

let volume = p * l * t;
let luas = 2 * ((p * l) + (p * t) + (l * t))

console.log("Volume Balok = ", + volume);
console.log("Luas Balok = ", luas);