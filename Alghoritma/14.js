const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Masukkan nilai ujian mahasiswa: ', (inputNilai) => {
    let nilai = parseFloat(inputNilai);
    let indeks = '';

    if (nilai >= 80) {
        indeks = 'A';
    } else if (nilai >= 70 && nilai < 80) {
        indeks = 'B';
    } else if (nilai >= 55 && nilai < 70) {
        indeks = 'C';
    } else if (nilai >= 40 && nilai < 55) {
        indeks = 'D';
    } else {
        indeks = 'E';
    }

    console.log(`Nilai: ${nilai} -> Indeks Nilai = ${indeks}`);
    readline.close();
});