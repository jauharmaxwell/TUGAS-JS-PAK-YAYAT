const prompt = require("prompt-sync")({ sigint: true });

// ==========================================
// SOAL 1: Cek Kelipatan 4
// ==========================================
const bilanganCek = Number(prompt("Masukkan bilangan: "));

if (bilanganCek % 4 === 0) {
    console.log(">> Hasil: Angka tersebut adalah kelipatan 4");
} else {
    console.log(">> Hasil: Angka tersebut bukan kelipatan 4");
}

// ==========================================
// SOAL 2: Hitung Diskon Belanja
// ==========================================
const nominalBelanja = Number(prompt("\nTotal belanja: "));
let nominalDiskon = 0;

if (nominalBelanja > 100000) {
    nominalDiskon = nominalBelanja * 0.1;
}

const totalPembayaran = nominalBelanja - nominalDiskon;

console.log(`> Diskon didapat  = Rp${nominalDiskon}`);
console.log(`> Total bayar akhir = Rp${totalPembayaran}`);

// ==========================================
// SOAL 3: Mengurutkan 3 Bilangan
// ==========================================
let dataA = Number(prompt("\nBilangan pertama: "));
let dataB = Number(prompt("Bilangan kedua: "));
let dataC = Number(prompt("Bilangan ketiga: "));

if (dataA > dataB) {
    let wadah = dataA; dataA = dataB; dataB = wadah;
}
if (dataA > dataC) {
    let wadah = dataA; dataA = dataC; dataC = wadah;
}
if (dataB > dataC) {
    let wadah = dataB; dataB = dataC; dataC = wadah;
}

console.log(`>> Urutan dari terkecil: ${dataA}, ${dataB}, ${dataC}`);

// ==========================================
// SOAL 4: Deteksi Jenis Segitiga
// ==========================================
const sSamping = Number(prompt("\nSisi a: "));
const sDepan = Number(prompt("Sisi b: "));
const sMiring = Number(prompt("Sisi c: "));

const pA = sSamping * sSamping;
const pB = sDepan * sDepan;
const pC = sMiring * sMiring;
const kuadratSisiAlas = pA + pB;

if (kuadratSisiAlas === pC) {
    console.log(">> Jenis: Segitiga siku-siku");
} else if (kuadratSisiAlas > pC) {
    console.log(">> Jenis: Segitiga lancip");
} else {
    console.log(">> Jenis: Segitiga tumpul");
}

// ==========================================
// SOAL 5: Parsing Teks ke Integer
// ==========================================
const dataDigit = prompt("\nMasukkan karakter digit (0-9): ");
console.log(`>> Nilai integer = ${parseInt(dataDigit, 10)}`);

// ==========================================
// SOAL 5A: Parsing Teks Alternatif
// ==========================================
const inputKarakter = prompt("\nMasukkan digit (0-9): ");
console.log(`>> Nilai integer = ${parseInt(inputKarakter, 10)}`);

// ==========================================
// SOAL 5B: Validasi Karakter Digit
// ==========================================
const teksPeriksa = prompt("\nMasukkan karakter: ");

if (teksPeriksa >= "0" && teksPeriksa <= "9") {
    console.log(`>> Nilai integer = ${Number(teksPeriksa)}`);
} else {
    console.log(">> Nilai integer = -99");
}

// ==========================================
// SOAL 6: Pembulatan Transaksi Kelipatan 25
// ==========================================
const costTransaksi = Number(prompt("\nMasukkan nilai belanja: "));
const finalBulat = Math.floor(costTransaksi / 25) * 25;

console.log(`>> Nilai setelah pembulatan = Rp${finalBulat}`);

// ==========================================
// SOAL 7A: Konversi Angka ke Romawi (1-10)
// ==========================================
const urutanRomawi = Number(prompt("\nMasukkan bilangan (1-10): "));

switch (urutanRomawi) {
    case 1: console.log(">> I"); break;
    case 2: console.log(">> II"); break;
    case 3: console.log(">> III"); break;
    case 4: console.log(">> IV"); break;
    case 5: console.log(">> V"); break;
    case 6: console.log(">> VI"); break;
    case 7: console.log(">> VII"); break;
    case 8: console.log(">> VIII"); break;
    case 9: console.log(">> IX"); break;
    case 10: console.log(">> X"); break;
    default: console.log(">> Di luar rentang"); break;
}

// ==========================================
// SOAL 7B: Konversi Angka ke Romawi Dinamis
// ==========================================
let nilaiMentah = Number(prompt("\nMasukkan bilangan desimal: "));
let stringRomawi = "";

while (nilaiMentah >= 1000) { stringRomawi += "M"; nilaiMentah -= 1000; }
while (nilaiMentah >= 900)  { stringRomawi += "CM"; nilaiMentah -= 900; }
while (nilaiMentah >= 500)  { stringRomawi += "D"; nilaiMentah -= 500; }
while (nilaiMentah >= 400)  { stringRomawi += "CD"; nilaiMentah -= 400; }
while (nilaiMentah >= 100)  { stringRomawi += "C"; nilaiMentah -= 100; }
while (nilaiMentah >= 90)   { stringRomawi += "XC"; nilaiMentah -= 90; }
while (nilaiMentah >= 50)   { stringRomawi += "L"; nilaiMentah -= 50; }
while (nilaiMentah >= 40)   { stringRomawi += "XL"; nilaiMentah -= 40; }
while (nilaiMentah >= 10)   { stringRomawi += "X"; nilaiMentah -= 10; }
while (nilaiMentah >= 9)    { stringRomawi += "IX"; nilaiMentah -= 9; }
while (nilaiMentah >= 5)    { stringRomawi += "V"; nilaiMentah -= 5; }
while (nilaiMentah >= 4)    { stringRomawi += "IV"; nilaiMentah -= 4; }
while (nilaiMentah >= 1)    { stringRomawi += "I"; nilaiMentah -= 1; }

console.log(`>> Angka Romawi = ${stringRomawi}`);

// ==========================================
// SOAL 8: Clipping Batas Pixel (0-255)
// ==========================================
let intensitasPixel = Number(prompt("\nMasukkan nilai pixel: "));

if (intensitasPixel > 255) {
    intensitasPixel = 255;
} else if (intensitasPixel < 0) {
    intensitasPixel = 0;
}

console.log(`>> Hasil clipping = ${intensitasPixel}`);

// ==========================================
// SOAL 9: Klasifikasi Berat Badan Ideal
// ==========================================
const bBadan = Number(prompt("\nMasukkan berat badan (kg): "));
const tBadan = Number(prompt("Masukkan tinggi badan (cm): "));

const kalkulasiIdeal = (tBadan - 100) * 0.9;
const gapBobot = Math.abs(bBadan - kalkulasiIdeal);

if (gapBobot <= 2) {
    console.log(">> Kategori: Ideal");
} else {
    console.log(">> Kategori: Tidak ideal");
}