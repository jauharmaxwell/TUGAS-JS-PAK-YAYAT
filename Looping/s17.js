let alfabet = "abcde";
let i = 0;

while (i < 5) {
    let baris = "";
    let j = 0;
    while (j < 5) {
        baris = baris + alfabet[i] + " ";
        j++;
    }
    console.log(baris);
    i++;
}