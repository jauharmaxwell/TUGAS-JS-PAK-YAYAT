const prompt = require("prompt-sync")();

let r = Number(prompt("Masukkan Jari-jari Bola: "));

let volume = (4/3) * 3.14 * r * r * r;

console.log("Volume Bola =", volume);