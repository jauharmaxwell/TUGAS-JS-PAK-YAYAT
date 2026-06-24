const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Masukkan tinggi badan (cm): ', (inputTinggi) => {
    let tinggiBadan = parseFloat(inputTinggi);

    let penguranganPertama = tinggiBadan - 100;
    let beratIdeal = penguranganPertama - (0.10 * penguranganPertama);

    console.log(beratIdeal);
    readline.close();
});