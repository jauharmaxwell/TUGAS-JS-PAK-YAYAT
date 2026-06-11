const prompt = require('prompt-sync')({sigint: true});

let juara = Number(prompt("Juara berapa Anda? (1/2/3): "));

if (juara == 1){
    console.log("Selamat Anda Juara Utama");
} else if (juara == 2){
        console.log("Selamat Anda Runner Up");
} else if (juara == 3){
        console.log("Selamat Anda Juara Ketiga");
} else {
        console.log("Inputan Anda Salah!");
}