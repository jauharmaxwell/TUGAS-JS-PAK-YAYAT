const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Masukkan total belanja pembeli: ', (inputTotal) => {
    let totalBelanja = parseFloat(inputTotal);
    let diskonHarga = 0;
    let nilaiBelanjaSetelahDiskon = totalBelanja;

    if (totalBelanja > 100000) {
        diskonHarga = 0.10 * totalBelanja; // Diskon 10%
        nilaiBelanjaSetelahDiskon = totalBelanja - diskonHarga;
    }

    console.log(`Diskon harga: Rp${diskonHarga}`);
    console.log(`Nilai belanja setelah dikurangi diskon: Rp${nilaiBelanjaSetelahDiskon}`);
    
    readline.close();
});