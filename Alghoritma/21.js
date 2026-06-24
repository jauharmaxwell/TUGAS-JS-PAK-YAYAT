const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Masukkan bilangan pertama: ', (input1) => {
    readline.question('Masukkan bilangan kedua: ', (input2) => {
        readline.question('Masukkan bilangan ketiga: ', (input3) => {
            let a = parseInt(input1);
            let b = parseInt(input2);
            let c = parseInt(input3);
            
            let kecil, tengah, besar;

            if (a <= b && a <= c) {
                kecil = a;
                if (b <= c) {
                    tengah = b;
                    besar = c;
                } else {
                    tengah = c;
                    besar = b;
                }
            } else if (b <= a && b <= c) {
                kecil = b;
                if (a <= c) {
                    tengah = a;
                    besar = c;
                } else {
                    tengah = c;
                    besar = a;
                }
            } else {
                kecil = c;
                if (a <= b) {
                    tengah = a;
                    besar = b;
                } else {
                    tengah = b;
                    besar = a;
                }
            }

            console.log(`Tiga buah bilangan yang terurut: ${kecil} ${tengah} ${besar}`);
            readline.close();
        });
    });
});