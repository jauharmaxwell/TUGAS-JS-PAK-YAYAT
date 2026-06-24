const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Masukkan nomor bulan (1-12): ', (inputBulan) => {
    let bulan = parseInt(inputBulan);

    if (bulan === 1) {
        console.log("Januari");
    } else if (bulan === 2) {
        console.log("Februari");
    } else if (bulan === 3) {
        console.log("Maret");
    } else if (bulan === 4) {
        console.log("April");
    } else if (bulan === 5) {
        console.log("Mei");
    } else if (bulan === 6) {
        console.log("Juni");
    } else if (bulan === 7) {
        console.log("Juli");
    } else if (bulan === 8) {
        console.log("Agustus");
    } else if (bulan === 9) {
        console.log("September");
    } else if (bulan === 10) {
        console.log("Oktober");
    } else if (bulan === 11) {
        console.log("November");
    } else if (bulan === 12) {
        console.log("Desember");
    } else {
        console.log("Nomor bulan salah! Masukkan angka antara 1 sampai 12.");
    }

    readline.close();
});