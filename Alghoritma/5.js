const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Masukkan nilai uang (kelipatan 25): ', (inputUang) => {
    let uang = parseInt(inputUang);

    let p1000 = Math.floor(uang / 1000);
    uang = uang % 1000;

    let p500 = Math.floor(uang / 500);
    uang = uang % 500;

    let p100 = Math.floor(uang / 100);
    uang = uang % 100;

    let p50 = Math.floor(uang / 50);
    uang = uang % 50;

    let p25 = Math.floor(uang / 25);

    console.log(`${p1000} buah pecahan Rp1000 ditambah ${p500} buah pecahan Rp500 ditambah ${p100} buah pecahan Rp100 ditambah ${p50} buah pecahan Rp50 ditambah ${p25} buah pecahan Rp25`);
    readline.close();
});