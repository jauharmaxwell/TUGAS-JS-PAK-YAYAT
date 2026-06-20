let n = 8;

let header = "*\t";
for (let i = 1; i <= n; i++) {
    header = header + i + "\t";
}
console.log(header);

for (let i = 1; i <= n; i++) {
    let baris = i + "\t";
    for (let j = 1; j <= n; j++) {
        let hasil = i * j;
        baris = baris + hasil + "\t";
    }
    console.log(baris);
}