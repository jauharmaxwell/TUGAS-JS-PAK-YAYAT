const prompt = require("prompt-sync")();

let s = Number(prompt("masukkan sisi kubus"));

let volume = s * s * s;
let luasPermukaan = 6 * s * s;

console.log("Volume Kubus =", volume);
console.log("Luas Permukaan Kubus =", luasPermukaan);