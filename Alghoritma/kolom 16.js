const prompt = require("prompt-sync")({ sigint: true });

const namaStaf = prompt("Input nama lengkap karyawan: ");
const kodeGol = prompt("Input tipe golongan (A/B/C/D): ").toUpperCase();
const jamKerjaSmt = Number(prompt("Input durasi jam kerja: "));

let upahReguler = 0;

switch (kodeGol) {
    case "A":
        upahReguler = 4000;
        break;
    case "B":
        upahReguler = 5000;
        break;
    case "C":
        upahReguler = 6000;
        break;
    case "D":
        upahReguler = 7500;
        break;
    default:
        console.log("Kategori golongan salah / tidak terdaftar.");
        process.exit();
}

let kalkulasiGaji = 0;

if (jamKerjaSmt > 48) {
    const sisaLembur = jamKerjaSmt - 48;
    kalkulasiGaji = (48 * upahReguler) + (sisaLembur * 3000);
} else {
    kalkulasiGaji = jamKerjaSmt * upahReguler;
}

console.log("\n=================================");
console.log("     SLIP GAJI MINGGUAN STAFF    ");
console.log("=================================");
console.log(`Nama Pegawai  : ${namaStaf}`);
console.log(`Golongan      : Kode [ ${kodeGol} ]`);
console.log(`Total Take Home Pay : Rp${kalkulasiGaji}`);