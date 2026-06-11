const prompt = require('prompt-sync')({sigint: true});

let barang = prompt("Barang apa yang dibeli: ");
let harga = Number(prompt("Berapa Harga Barang yang dibeli: "));
let diskon = 7.5/100 * harga;
let total = harga - diskon;

if (harga >= 200000){
    console.log("Selamat Anda Mendapatkan Diskon Sebesar 7.5%");
    console.log("Barang: " + barang);
    console.log("Harga Awal: " + harga);
    console.log("Harga Diskon: " + diskon);
    console.log("Total Bayar: " + total);
} else {
    console.log("Mohon maaf Anda tidak mendapatkan diskon");
    console.log("Barang: " + barang);
    console.log("Harga yang harus dibayar: " + harga);
}