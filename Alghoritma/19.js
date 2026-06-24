const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Masukkan sebuah bilangan bulat positif: ', (inputAngka) => {
    let angka = parseInt(inputAngka);

    if (angka % 4 === 0) {
        console.log(`${angka} adalah bilangan kelipatan 4`);
    } else {
        console.log(`${angka} bukan bilangan kelipatan 4`);
    }

    readline.close();
});