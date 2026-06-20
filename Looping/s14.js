
for (let i = 1; i <= 5; i++) {
    let baris = "";
    let jumlahBintang = (i === 5) ? 7 : i;
    
    for (let j = 1; j <= jumlahBintang; j++) {
        baris += "*";
    }
    console.log(baris);
}
for (let i = 4; i >= 1; i--) {
    let baris = "";
    for (let j = 1; j <= i; j++) {
        baris += "*";
    }
    console.log(baris);
}