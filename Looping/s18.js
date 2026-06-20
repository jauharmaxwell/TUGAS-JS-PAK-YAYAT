let n = 2;

for (let i = 1; i <= 5; i++) {
    let baris = "";
    for (let j = 1; j <= n; j++) {
        let hasil = j * i;
        baris = baris + j + " x " + i + " = " + hasil + "   ";
    }
    console.log(baris);
}