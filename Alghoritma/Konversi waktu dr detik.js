const prompt = require("prompt-sync")({ sigint: true });

const totalDetikInput = Number(prompt("Input jumlah detik: "));

const hasilMenit = totalDetikInput / 60;
const hasilJam = totalDetikInput / 3600;
const hasilHari = totalDetikInput / 86400;

console.log("\n>>> RAGAM KONVERSI WAKTU <<<");
console.log(`Dari data [ ${totalDetikInput} detik ] diperoleh:`);
console.log(`- Setara dengan : ${hasilMenit.toFixed(2)} Menit`);
console.log(`- Setara dengan : ${hasilJam.toFixed(3)} Jam`);
console.log(`- Setara dengan : ${hasilHari.toFixed(4)} Hari`);