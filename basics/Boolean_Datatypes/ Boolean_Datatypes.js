// boolean (true or false)

// == vs === 

// == compares data valus only
// === compares data types and values only (strict comparison)

let num1 = 65;
let str1 = "65"

console.log(typeof (num1), typeof(str1) , num1==str1)


//alternatively

console.log(typeof (num1), typeof(str1), num1===str1)  

// otherwise if all are of same data types

let num2 = "50";
let str2 = "65"
console.log("----the same data types----")
console.log(typeof (num2), typeof(str2), num2===str2)  