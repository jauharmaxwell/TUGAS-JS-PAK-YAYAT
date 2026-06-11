let a = 8.3;
let c = "3.2";

let angkaC = parseFloat(c);

console.log(a + " + " + angkaC + " = " + (a + angkaC));
console.log(a + " - " + angkaC + " = " + (a - angkaC));
console.log(a + " x " + angkaC + " = " + (a * angkaC));
console.log(a + " / " + angkaC + " = " + (a / angkaC));
console.log(parseInt(a) + " % " + parseInt(angkaC) + " = " + (parseInt(a) % parseInt(angkaC)));

document.write(a + " + " + angkaC + " = " + (a + angkaC) + "<br>");
document.write(a + " - " + angkaC + " = " + (a - angkaC) + "<br>");
document.write(a + " x " + angkaC + " = " + (a * angkaC) + "<br>");
document.write(a + " / " + angkaC + " = " + (a / angkaC) + "<br>");
document.write(parseInt(a) + " % " + parseInt(angkaC) + " = " + (parseInt(a) % parseInt(angkaC)));