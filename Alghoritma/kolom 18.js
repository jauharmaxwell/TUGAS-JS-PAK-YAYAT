const prompt = require("prompt-sync")({ sigint: true });

const pilihanDigit = Number(prompt("Input nomor opsi (1 hingga 4): "));

if (pilihanDigit === 1) {
    console.log("\nTerbaca: satu");
} else if (pilihanDigit === 2) {
    console.log("\nTerbaca: dua");
} else if (pilihanDigit === 3) {
    console.log("\nTerbaca: tiga");
} else if (pilihanDigit === 4) {
    console.log("\nTerbaca: empat");
} else {
    console.log("\nKeterangan: Input di luar jangkauan (1-4).");
}