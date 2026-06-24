const prompt = require("prompt-sync")({ sigint: true });

const totalHariInput = Number(prompt("Input jumlah hari untuk konversi: "));

const estimasiMinggu = totalHariInput / 7;
const estimasiBulan = totalHariInput / 30;
const estimasiTahun = totalHariInput / 365;

console.log("\n>>> HASIL ANALISIS WAKTU <<<");
console.log(`Durasi dari [ ${totalHariInput} hari ] adalah:`);
console.log(`> Kategori Minggu : ${estimasiMinggu.toFixed(0)} minggu`);
console.log(`> Kategori Bulan  : ${estimasiBulan.toFixed(0)} bulan`);
console.log(`> Kategori Tahun  : ${estimasiTahun.toFixed(0)} tahun`);