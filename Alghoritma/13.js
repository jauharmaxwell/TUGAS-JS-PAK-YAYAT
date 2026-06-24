const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Masukkan nama karyawan: ', (nama) => {
    readline.question('Masukkan golongan (A/B/C/D): ', (inputGolongan) => {
        readline.question('Masukkan jumlah jam kerja seminggu: ', (inputJam) => {
            let golongan = inputGolongan.toUpperCase();
            let jamKerja = parseInt(inputJam);
            
            let upahPerJam = 0;
            let upahLemburPerJam = 3000;
            let totalUpah = 0;
            
            if (golongan === 'A') {
                upahPerJam = 4000;
            } else if (golongan === 'B') {
                upahPerJam = 5000;
            } else if (golongan === 'C') {
                upahPerJam = 6000;
            } else if (golongan === 'D') {
                upahPerJam = 7500;
            } else {
                console.log('Golongan tidak valid!');
                readline.close();
                return;
            }
            if (jamKerja <= 48) {
                totalUpah = jamKerja * upahPerJam;
            } else {
                let jamNormal = 48;
                let jamLembur = jamKerja - 48;
                
                let upahNormal = jamNormal * upahPerJam;
                let upahLembur = jamLembur * upahLemburPerJam;
                
                totalUpah = upahNormal + upahLembur;
            }
            console.log(`\n--- Rincian Gaji ---`);
            console.log(`Nama Karyawan : ${nama}`);
            console.log(`Golongan      : ${golongan}`);
            console.log(`Total Upah    : Rp${totalUpah}`);
            
            readline.close();
        });
    });
});