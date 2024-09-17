// Big Int
var myNumber = 24;

console.log(myNumber)
console.log(typeof(myNumber))
console.log(Number.MAX_SAFE_INTEGER)

// to make number BigInt we have two ways

var num1 = BigInt(243837364637009)
console.log(typeof(num1))

//alternatively

var num2 = 24n;
console.log(typeof(num2))

var num3 = 50n

console.log(typeof(num2, num3), num2+num3)

//undifiend , null

// undifined is were you assign a variable but their no value assigend to it

var firstName;
console.log(firstName)

//null means nothig is stored in variable

var title = null