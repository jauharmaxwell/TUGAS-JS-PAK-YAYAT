const prompt = require("prompt-sync")({ sigint: true });

const durasiKerja = Number(prompt("Input total jam kerja seminggu: "));
let akumulasiGaji = 0;

const REGULAR_LIMIT = 48;
const BASE_RATE = 2000;
const OVERTIME_RATE = 3000;

if (durasiKerja > REGULAR_LIMIT) {
    const durasiLembur = durasiKerja - REGULAR_LIMIT;
    akumulasiGaji = (REGULAR_LIMIT * BASE_RATE) + (durasiLembur * OVERTIME_RATE);
} else {
    akumulasiGaji = durasiKerja * BASE_RATE;
}

console.log("\n=================================");
console.log("    RINCIAN PENDAPATAN KERJA     ");
console.log("=================================");
console.log(`Take home pay (Mingguan) => Rp${akumulasiGaji}`);