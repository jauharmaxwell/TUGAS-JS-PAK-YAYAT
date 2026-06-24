const prompt = require("prompt-sync")({ sigint: true });

const angkaMeter = Number(prompt("Input ukuran dalam Meter: "));

const konvInci = angkaMeter / 0.0254;
const konvKaki = angkaMeter / 0.3048;
const konvYard = angkaMeter / 0.9144;

console.log("\n=== HASIL KONVERSI PANJANG ===");
console.log(`> Satuan Inci : ${konvInci.toFixed(2)} in`);
console.log(`> Satuan Kaki : ${konvKaki.toFixed(2)} ft`);
console.log(`> Satuan Yard : ${konvYard.toFixed(2)} yd`);