const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Masukkan jarak x (dalam cm): ', (inputX) => {
    let x = parseInt(inputX);

    let km = Math.floor(x / 100000);
    let sisaCm = x % 100000;

    let m = Math.floor(sisaCm / 100);
    let cm = sisaCm % 100;

    console.log(`${km} km + ${m} m + ${cm} cm`);
    readline.close();
});