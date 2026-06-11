const prompt = require('prompt-sync')({sigint: true});

let r = Number(prompt("Masukkan nilai Jari-jari: "))

let v = 4/3 * 22/7 * r^3
let L = 4 * 22/7 * r^2

console.log(
`Volume Bola\t\t: ${v.toFixed(3)}  cm3
Luas Permukaan Bola\t: ${L.toFixed(3)}  cm2`
)