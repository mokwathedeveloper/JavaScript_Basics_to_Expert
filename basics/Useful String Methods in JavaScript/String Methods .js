// trim
//toLower
//toUpper
//Slice

let str = 'Javascript'

let len = str.length

console.log(len)

let str2 = '   javaScript  '
console.log(str2)
let len2 = str2.length
console.log(len2)

let trimmed = str2.trim()
console.log(trimmed)

let len3 = trimmed.length
console.log(len3)


let str_Upper = 'Javascript'
//let len4 = str_Upper.length
let upper = str_Upper.toUpperCase()
console.log(upper)

let str_Lower = 'JAVASCRIPT'
let lower = str.toLowerCase()
console.log(lower)

console.log(str.slice(0,4))