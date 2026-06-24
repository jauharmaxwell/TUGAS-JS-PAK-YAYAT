const prompt = require("prompt-sync")({ sigint: true });

const d1 = Number(prompt("Input tanggal awal: "));
const m1 = Number(prompt("Input bulan awal: "));
const y1 = Number(prompt("Input tahun awal: "));

const d2 = Number(prompt("Input tanggal akhir: "));
const m2 = Number(prompt("Input bulan akhir: "));
const y2 = Number(prompt("Input tahun akhir: "));

const totalD1 = (y1 * 365) + (m1 * 30) + d1;
const totalD2 = (y2 * 365) + (m2 * 30) + d2;

let selisih = Math.abs(totalD1 - totalD2);

const hitungThn = Math.floor(selisih / 365);
selisih %= 365;

const hitungBln = Math.floor(selisih / 30);
const hitungHari = selisih % 30;

console.log("\n>>> HASIL PERHITUNGAN SELISIH WAKTU <<<");
console.log(`Rentang waktu: ${hitungThn} tahun | ${hitungBln} bulan | ${hitungHari} hari.`);