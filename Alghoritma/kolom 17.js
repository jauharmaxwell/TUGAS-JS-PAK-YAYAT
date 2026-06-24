const prompt = require("prompt-sync")({ sigint: true });

const skorUjian = Number(prompt("Input perolehan nilai: "));

if (skorUjian >= 81) {
    console.log("\nHasil Evaluasi: Predikat A");
} else if (skorUjian >= 71 && skorUjian <= 80) {
    console.log("\nHasil Evaluasi: Predikat B");
} else if (skorUjian >= 56 && skorUjian <= 70) {
    console.log("\nHasil Evaluasi: Predikat C");
} else if (skorUjian >= 41 && skorUjian <= 55) {
    console.log("\nHasil Evaluasi: Predikat D");
} else {
    console.log("\nHasil Evaluasi: Predikat E");
}