const prompt = require("prompt-sync")({ sigint: true });

const dataTinggi = Number(prompt("Input tinggi badan (cm): "));

const kalkulasiBerat = (dataTinggi - 100) * 0.9;

console.log("\n=============================");
console.log("   ANALISIS BERAT BADAN      ");
console.log("=============================");
console.log(`Target berat ideal Anda => ${kalkulasiBerat.toFixed(1)} kg`);