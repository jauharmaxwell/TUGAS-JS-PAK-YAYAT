const prompt = require("prompt-sync")({ sigint: true });

const angkaInput = Number(prompt("Input sebuah bilangan bulat: "));

if (angkaInput > 0) {
    console.log("\n>> Status: Terdeteksi sebagai bilangan positif");
} else if (angkaInput < 0) {
    console.log("\n>> Status: Terdeteksi sebagai bilangan negatif");
} else {
    console.log("\n>> Status: Nilai tersebut adalah nol");
}