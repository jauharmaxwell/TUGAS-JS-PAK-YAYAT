const prompt = require("prompt-sync")({ sigint: true });

let h = Number(prompt("Input komponen jam: "));
let m = Number(prompt("Input komponen menit: "));
let s = Number(prompt("Input komponen detik: "));

// Menambahkan 1 detik kedepan
s++;

if (s === 60) {
    s = 0;
    m++;
}

if (m === 60) {
    m = 0;
    h++;
}

if (h === 24) {
    h = 0;
}

console.log("\n>>> WAKTU DETIK BERIKUTNYA <<<");
console.log(`Format Waktu => ${h}:${m}:${s}`);