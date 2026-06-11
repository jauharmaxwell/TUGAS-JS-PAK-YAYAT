const prompt = require('prompt-sync')({sigint: true});

let nilai = Number(prompt("Masukan nilai Siswa/i: "));

if (nilai >= 100){
    console.log("Sempurna, pertahankan");
} else if (nilai >= 90){
    console.log("Grade A");
} else if (nilai >= 80){
    console.log ("Grade B");
} else if (nilai >= 70){
    console.log("Grade C");
} else if (nilai >= 60){
    console.log("Grade D");
} else if (nilai >= 50){
    console.log("Grade E");
} else {
    console.log("Ujian Kembali ya!!");
}