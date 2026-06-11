const prompt = require('prompt-sync')({sigint: true});

let bulat = Number(prompt("Masukkan Bilangan Bulat: "));

if ( bulat % 7 === 0){
    console.log("Selamat Angka " + bulat + " adalah kelipatan 7, Anda beruntung");
} else {
    console.log("Anda belum beruntung")
}