const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Masukkan nilai (pisahkan dengan spasi, misal: 80 90 75): ", function(input) {
    let data = input.split(" ");
    let total = 0;

    for (let i = 0; i < data.length; i++) {
        total = total + parseFloat(data[i]);
    }

    let rataRata = total / data.length;

    console.log("Jumlah: " + total);
    console.log("Rata-rata: " + rataRata);
    
    readline.close();
});