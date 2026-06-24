const prompt = require("prompt-sync")({ sigint: true });

const urutanBulan = Number(prompt("Input angka bulan: "));

switch (urutanBulan) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        console.log("\n>> Informasi: Bulan ini memiliki total 31 hari.");
        break;
        
    case 4: case 6: case 9: case 11:
        console.log("\n>> Informasi: Bulan ini memiliki total 30 hari.");
        break;
        
    case 2:
        console.log("\n>> Informasi: Khusus Februari, total 29 hari (kabisat) atau 28 hari (bukan kabisat).");
        break;
        
    default:
        console.log("\n>> Peringatan: Angka tidak valid! Kalender hanya memiliki bulan 1 hingga 12.");
        break;
}