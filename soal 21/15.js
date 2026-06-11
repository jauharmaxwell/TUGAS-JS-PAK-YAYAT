const prompt = require('prompt-sync')({sigint: true});

let angka = Number(prompt("Masukkan Kode: "));

if (angka == 66798){
    console.log("You are authenticated");
} else {
    console.log("You have no access");
}