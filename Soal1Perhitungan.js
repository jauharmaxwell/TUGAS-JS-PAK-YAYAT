const prompt = require('prompt-sync')({sigint: true});
let x = Number(prompt('Masukan nilai X : '))
let y = Number(prompt('Masukan nilai Y : '))
let z = Number(prompt('Masukan nilai Z : '))

let k = x + y - z
let j = (x * y) - (z + y)

console.log('===============')
console.log('    H A S I L  ')
console.log('---------------')

console.log(
    `k\t: ${k.toFixed(2)}
    j\t: ${j.toFixed(2)}`)