const prompt = require("prompt-sync")();

let r = Number(prompt("Masukkan Jari-jari Kerucut: "));
let t = Number(prompt("Masukkan Tinggi Kerucut: "));

let volume = (1/3) * 3.14 * r * r * t;

console.log("Volume Kerucut =", volume);