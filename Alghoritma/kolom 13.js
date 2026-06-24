const prompt = require("prompt-sync")({ sigint: true });

const inputTahun = Number(prompt("Input angka tahun: "));

if (inputTahun % 4 === 0) {
    console.log(`\n>> Konfirmasi: ${inputTahun} termasuk Tahun Kabisat.`);
} else {
    console.log(`\n>> Konfirmasi: ${inputTahun} murni Tahun Biasa (Bukan Kabisat).`);
}