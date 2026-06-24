const prompt = require("prompt-sync")({ sigint: true });

const cekTahun = Number(prompt("Input tahun yang ingin dicek: "));

if ((cekTahun % 4 === 0 && cekTahun % 100 !== 0) || (cekTahun % 400 === 0)) {
    console.log(`\n[VALID] -> Tahun ${cekTahun} adalah tahun kabisat.`);
} else {
    console.log(`\n[VALID] -> Tahun ${cekTahun} bukan termasuk tahun kabisat.`);
}