const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Masukkan nomor bulan (1-12): ', (inputBulan) => {
    readline.question('Masukkan tahun: ', (inputTahun) => {
        let bulan = parseInt(inputBulan);
        let tahun = parseInt(inputTahun);
        let jumlahHari = 0;

        if (bulan === 1 || bulan === 3 || bulan === 5 || bulan === 7 || bulan === 8 || bulan === 10 || bulan === 12) {
            jumlahHari = 31;
        } else if (bulan === 4 || bulan === 6 || bulan === 9 || bulan === 11) {
            jumlahHari = 30;
        } else if (bulan === 2) {
            if ((tahun % 4 === 0 && tahun % 100 !== 0) || (tahun % 400 === 0)) {
                jumlahHari = 29;
            } else {
                jumlahHari = 28;
            }
        } else {
            console.log("Nomor bulan salah!");
            readline.close();
            return;
        }

        console.log(`Jumlah hari pada bulan ${bulan} tahun ${tahun} adalah ${jumlahHari} hari.`);
        readline.close();
    });
});