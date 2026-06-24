const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Masukkan sebuah bilangan bulat: ', (inputAngka) => {
    let angka = parseInt(inputAngka);

    if (angka > 0) {
        console.log(`${angka} adalah bilangan positif`);
    } else if (angka < 0) {
        console.log(`${angka} adalah bilangan negatif`);
    } else {
        console.log(`Bilangan tersebut adalah nol`);
    }

    readline.close();
});