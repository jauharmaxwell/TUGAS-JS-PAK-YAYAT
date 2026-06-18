const prompt = require("prompt-sync")();

let alass = Number(prompt("Masukkaan Alas Segitiga = "));
let ts = Number(prompt("Masukkan Tinggi Segitiga = "));
let tp = Number(prompt("Masukkan Tinggi Prisma = "));

let luasAlas = 0.5 * alass * ts;
let volume = luasAlas * tp;

console.log("Volume Prisma Segitiga = ", volume);