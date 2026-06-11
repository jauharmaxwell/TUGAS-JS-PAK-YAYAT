const prompt = require('prompt-sync')({sigint: true});

let x = Number(prompt("Masukan Nilai x: "));
let y = Number(prompt("Masukan Nilai y: "));
let z = Number(prompt("Masukan Nilai z: "));

let besar = Math.max(x,y,z);
let kecil = Math.min(x,y,z);

console.log(
    `
    Nilai x: ${x}
    Nilai y: ${y}
    Nilai z: ${z}

    Nilai Terbesar: ${besar}
    Nilai Terkecil: ${kecil}
    `
)