const prompt = require("prompt-sync")();

let s = Number(prompt("Masukkan Sisi Alas"));
let t = Number(prompt("Masukkan tinggi Limas"));

let LuasAlas = s * s;
let volume = 1/3 * LuasAlas * t;

console.log("Jawaban Volume: ", + volume);
console.log("Jawaban Luas Alas: ", + LuasAlas);