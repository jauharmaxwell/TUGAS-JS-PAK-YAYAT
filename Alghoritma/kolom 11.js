const prompt = require("prompt-sync")({ sigint: true });

const koordinatX = Number(prompt("Input koordinat X: "));
const koordinatY = Number(prompt("Input koordinat Y: "));

let wilayahKartesius = "";

if (koordinatX > 0 && koordinatY > 0) {
    wilayahKartesius = "Kuadran I (Kanan Atas)";
} else if (koordinatX < 0 && koordinatY > 0) {
    wilayahKartesius = "Kuadran II (Kiri Atas)";
} else if (koordinatX < 0 && koordinatY < 0) {
    wilayahKartesius = "Kuadran III (Kiri Bawah)";
} else if (koordinatX > 0 && koordinatY < 0) {
    wilayahKartesius = "Kuadran IV (Kanan Bawah)";
} else {
    wilayahKartesius = "Garis Sumbu / Titik Pusat (0,0)";
}

console.log("\n>>> HASIL DETEKSI KOORDINAT <<<");
console.log(`Titik (${koordinatX}, ${koordinatY}) berada di: ${wilayahKartesius}`);