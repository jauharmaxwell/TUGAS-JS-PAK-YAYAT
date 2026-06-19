const prompt = require("prompt-sync")();

let r = Number(prompt("Masukkan Jari-jari Tabung: "));
let t = Number(prompt("Masukkan Tinggi Tabung: "));

let volume = 3.14 * r * r * t;

console.log("Volume Tabung =", volume);