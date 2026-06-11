const prompt = require('prompt-sync')({sigint: true});

let huruf = prompt("Masukan huruf: ");
huruf = huruf.toLowerCase();

if (huruf >= "a" && huruf <= "z"){
    
    if(
        huruf === "a" ||
        huruf === "i" ||
        huruf === "u" ||
        huruf === "e" ||
        huruf === "o" 
    ) {
        console.log("Huruf Vokal");
    } else {
        console.log("Huruf Konsonan");
    }
} else {
    console.log("Bukan berupa huruf")
}