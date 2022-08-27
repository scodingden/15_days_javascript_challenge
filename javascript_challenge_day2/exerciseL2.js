const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

//1//
const c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)

//2//
let Ainter = new Set(a)
let Binter = new Set(b)

let cinter = a.filter((num) => Binter.has(num))
let Cinters = new Set(cinter)

console.log(Cinters)

//3//

let diffA = new Set(a)
let diffB = new Set(b)

let diffc = a.filter((num) => !B.has(num))
let difference = new Set(diffc)

console.log(difference)