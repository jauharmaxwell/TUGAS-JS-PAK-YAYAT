const prompt = require("prompt-sync")({ sigint: true });

const nilaiA = Number(prompt("Masukkan nilai pertama (A): "));
const nilaiB = Number(prompt("Masukkan nilai kedua (B): "));
const nilaiC = Number(prompt("Masukkan nilai ketiga (C): "));

const wadahSampingan = nilaiA;
const posisiA = nilaiB;
const posisiB = nilaiC;
const posisiC = wadahSampingan;

console.log("\n--- Posisi Variabel Setelah Digeser ---");
console.log(`Nilai A sekarang => ${posisiA}`);
console.log(`Nilai B sekarang => ${posisiB}`);
console.log(`Nilai C sekarang => ${posisiC}`);