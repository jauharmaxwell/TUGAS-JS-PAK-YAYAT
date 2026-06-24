const prompt = require("prompt-sync")({ sigint: true });

const kodeBulan = Number(prompt("Input urutan bulan (1-12): "));

if (kodeBulan === 1) {
    console.log("\nNama Bulan: Januari");
} else if (kodeBulan === 2) {
    console.log("\nNama Bulan: Februari");
} else if (kodeBulan === 3) {
    console.log("\nNama Bulan: Maret");
} else if (kodeBulan === 4) {
    console.log("\nNama Bulan: April");
} else if (kodeBulan === 5) {
    console.log("\nNama Bulan: Mei");
} else if (kodeBulan === 6) {
    console.log("\nNama Bulan: Juni");
} else if (kodeBulan === 7) {
    console.log("\nNama Bulan: Juli");
} else if (kodeBulan === 8) {
    console.log("\nNama Bulan: Agustus");
} else if (kodeBulan === 9) {
    console.log("\nNama Bulan: September");
} else if (kodeBulan === 10) {
    console.log("\nNama Bulan: Oktober");
} else if (kodeBulan === 11) {
    console.log("\nNama Bulan: November");
} else if (kodeBulan === 12) {
    console.log("\nNama Bulan: Desember");
} else {
    console.log("\nKeterangan: Angka tidak valid (Harus 1 hingga 12)!");
}