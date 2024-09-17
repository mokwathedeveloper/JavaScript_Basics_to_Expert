// Truthy and Falsy


//falsy are:- 0, false, "", undifined, null

let flag = 0

console.log(typeof flag)

// if we introduce boolean

let flag2 = Boolean(0)
console.log(typeof flag2 , flag2)


let course = Boolean("javascript")

console.log(typeof course, course)

// and we can use this too 

let course2 = !Boolean("javascript")
console.log(typeof course2, course2)