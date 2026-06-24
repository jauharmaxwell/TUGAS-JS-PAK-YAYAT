const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Masukkan nilai x: ', (inputX) => {
    readline.question('Masukkan nilai y: ', (inputY) => {
        let x = parseFloat(inputX);
        let y = parseFloat(inputY);

        if (x > 0 && y > 0) {
            console.log(`Titik P(${x}, ${y}) terletak di kuadran I`);
        } else if (x < 0 && y > 0) {
            console.log(`Titik P(${x}, ${y}) terletak di kuadran II`);
        } else if (x < 0 && y < 0) {
            console.log(`Titik P(${x}, ${y}) terletak di kuadran III`);
        } else if (x > 0 && y < 0) {
            console.log(`Titik P(${x}, ${y}) terletak di kuadran IV`);
        } else {
            console.log(`Titik P(${x}, ${y}) tidak terletak di kuadran manapun`);
        }

        readline.close();
    });
});x