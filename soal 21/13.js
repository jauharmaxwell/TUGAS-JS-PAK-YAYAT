const prompt = require('prompt-sync')({sigint: true});

let harga = Number(prompt("Masukkan Harga Makanan: "));

let pajak = 10/100 * harga;
let fee = 5/100 * harga;
let total = harga + pajak + fee;

console.log(
    `
    Harga makanan: ${harga.toFixed(0)}
    Pajak\t : ${pajak.toFixed(0)}
    Fee\t\t : ${fee.toFixed(0)}
    Harga bayar\t : ${total.toFixed(0)}`
)