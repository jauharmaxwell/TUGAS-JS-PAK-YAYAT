for (let i = 1; i <= 5; i++) {
    let baris = "";
    for (let j = 1; j <= 5 - i; j++) {
        baris = baris + " ";
    }
    for (let k = 1; k <= i; k++) {
        baris = baris + "* ";
    }
    console.log(baris);
}