const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Masukkan jumlah jam kerja seminggu: ', (inputJam) => {
    let jamKerja = parseInt(inputJam);
    
    let upahPerJam = 2000;
    let upahLemburPerJam = 3000;
    let totalUpah = 0;

    if (jamKerja <= 48) {
        totalUpah = jamKerja * upahPerJam;
    } else {
        let jamNormal = 48;
        let jamLembur = jamKerja - 48;
        
        let upahNormal = jamNormal * upahPerJam;
        let upahLembur = jamLembur * upahLemburPerJam;
        
        totalUpah = upahNormal + upahLembur;
    }

    console.log(`Total upah mingguan: Rp${totalUpah}`);
    readline.close();
});