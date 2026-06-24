const prompt = require("prompt-sync")({ sigint: true });

const kodeBulan = Number(prompt("Input nomor bulan (1-12): "));
const targetTahun = Number(prompt("Input komponen tahun: "));

let totalHari = 0;

const cekKabisat = (targetTahun % 4 === 0 && targetTahun % 100 !== 0) || (targetTahun % 400 === 0);

switch (kodeBulan) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        totalHari = 31;
        break;
    case 4: case 6: case 9: case 11:
        totalHari = 30;
        break;
    case 2:
        totalHari = cekKabisat ? 29 : 28;
        break;
    default:
        console.log("\nKeterangan: Urutan bulan yang dimasukkan salah!");
        process.exit();
}

console.log("\n=================================");
console.log(`  KALENDER: ${kodeBulan} - ${targetTahun} `);
console.log("=================================");
console.log(`Durasi Waktu => ${totalHari} Hari`);