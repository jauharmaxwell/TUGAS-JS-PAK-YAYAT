const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Masukkan angka (1-4): ', (inputAngka) => {
    let angka = parseInt(inputAngka);

    if (angka === 1) {
        console.log("satu");
    } else if (angka === 2) {
        console.log("dua");
    } else if (angka === 3) {
        console.log("tiga");
    } else if (angka === 4) {
        console.log("empat");
    } else {
        console.log("Angka yang dimasukkan salah");
    }

    readline.close();
});