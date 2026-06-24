const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Masukkan nilai x: ', (inputX) => {
    readline.question('Masukkan nilai y: ', (inputY) => {
        readline.question('Masukkan nilai z: ', (inputZ) => {
            let x = parseInt(inputX);
            let y = parseInt(inputY);
            let z = parseInt(inputZ);

            let temp = x;
            x = y;
            y = z;
            z = temp;

            console.log(`(${x}, ${y}, ${z})`);
            readline.close();
        });
    });
});