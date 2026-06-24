const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Masukkan tahun masehi: ', (inputTahun) => {
    let tahun = parseInt(inputTahun);

    if ((tahun % 4 === 0 && tahun % 100 !== 0) || (tahun % 400 === 0)) {
        console.log(`${tahun} adalah tahun kabisat`);
    } else {
        console.log(`${tahun} bukan tahun kabisat`);
    }

    readline.close();
});