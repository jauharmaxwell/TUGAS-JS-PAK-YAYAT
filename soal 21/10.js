const prompt = require('prompt-sync')({sigint: true});

let buku = (prompt('Masukkan Judul Buku: '));
let penerbit = (prompt('Masukkan Nama Penerbit: '));
let jumlah = Number(prompt('Masukkan Jumlah Buku: '));
let tanggal = (prompt('Masukkan Tanggal Pembelian: '));

console.log(
    `
    Judul Buku\t\t: ${buku}
    Nama Penerbit\t: ${penerbit}
    Jumlah Buku\t\t: ${jumlah}
    Tanggal Pembelian\t: ${tanggal}`
);