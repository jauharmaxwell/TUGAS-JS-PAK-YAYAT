const prompt = require("prompt-sync")({ sigint: true });

const inputCm = Number(prompt("Input jarak total (cm): "));

let penampungJarak = inputCm;

const totalKm = Math.floor(penampungJarak / 100000);
penampungJarak %= 100000;

const totalMeter = Math.floor(penampungJarak / 100);
const totalCm = penampungJarak % 100;

console.log("\n>>> DISTRIBUSI SATUAN JARAK <<<");
console.log(`[ ${totalKm} KM ]  [ ${totalMeter} M ]  [ ${totalCm} CM ]`);