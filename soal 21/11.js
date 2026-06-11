const prompt = require('prompt-sync')({sigint: true});

let RPL1 = Number(prompt("Masukkan Jumlah Siswas/i Kelas X RPL 1: "));
let RPL2 = Number(prompt("Masukkan Jumlah Siswas/i Kelas X RPL 2: "));
let TKJ1 = Number(prompt("Masukkan Jumlah Siswas/i Kelas X TKJ 1: "));
let TKJ2 = Number(prompt("Masukkan Jumlah Siswas/i Kelas X TKJ 2: "));

let jumlah = RPL1 + RPL2 + TKJ1 + TKJ2;

console.log("Jumlah Siswa/i X RPL 1 : " + RPL1);
console.log("Jumlah Siswa/i X RPL 2 : " + RPL2);
console.log("Jumlah Siswa/i X TKJ 1 : " + TKJ1);
console.log("Jumlah Siswa/i X TKJ 2 : " + TKJ1);
console.log("Jumlah Seluruh Siswa/i : " + jumlah);