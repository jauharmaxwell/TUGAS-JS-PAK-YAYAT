const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Masukkan jam (format hh:mm:ss): ', (inputWaktu) => {
    let bagian = inputWaktu.split(':');
    
    let hh = parseInt(bagian[0]);
    let mm = parseInt(bagian[1]);
    let ss = parseInt(bagian[2]);

    ss = ss + 1;

    if (ss === 60) {
        ss = 0;
        mm = mm + 1;
    }

    if (mm === 60) {
        mm = 0;
        hh = hh + 1;
    }

    if (hh === 24) {
        hh = 0;
    }

    let formatHH = String(hh).padStart(2, '0');
    let formatMM = String(mm).padStart(2, '0');
    let formatSS = String(ss).padStart(2, '0');

    console.log(`Jam baru setelah ditambah 1 detik: ${formatHH}:${formatMM}:${formatSS}`);
    readline.close();
});