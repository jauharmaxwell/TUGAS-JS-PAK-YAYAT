let i = 1;
let jumlah = 0;
let teks = "";

while(i <= 5){
    jumlah += i;

    if(i < 5){
        teks += i + " + ";
    } else {
        teks += i;
    }

    i += 2;
}

console.log(teks + " = " + jumlah);