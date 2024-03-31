//String
let car = "Nissan"

console.log("\nEquality Test 1: Is car == Nissan?")
console.log(car == "Nissan")

console.log("\nEquality Test 2: Is car == Honda?")
console.log(car == "Honda")

console.log("\nInequality Test 1: Is car != Nissan?")
console.log(car != "Nissan")

console.log("\nInquality Test 2: Is car != Honda?")
console.log(car != "Honda")

//Lowercase
let upcaseWord = "WATER"
console.log("\nLowerCase Test 1: Is upcaseWord != water?")
console.log(upcaseWord != "water")

console.log("\nLowerCase Test 2: Is upcaseWord.toLowerCase() == water?")
console.log(upcaseWord.toLowerCase() == "water")


//Numerical
let n1 = 10
let n2 = 15

console.log("\nNumerical Equality Test: Is n1 == n2?")
console.log(n1 == n2)

console.log("\nNumerical Inequality Test: Is n1 != n2?")
console.log(n1 != n2)

console.log("\nNumerical Greater Test: Is n1 > n2?")
console.log(n1 > n2)

console.log("\nNumerical Lesser Test: Is n1 < n2?")
console.log(n1 < n2)


//AND OR Tests
console.log("\nAND Test 1: Is (n1 < n2) AND (car != Honda)?")
console.log((n1 < n2) && (car != "Honda"))                                   //outputs true

console.log("\nAND Test 2: Is (upcaseWord == water) AND (car != Honda)?")
console.log((upcaseWord == "water") && (car != "Honda"))                    // outputs false


console.log("\nOR Test 1: Is (n1 > n2) || (upcaseWord == water)?")
console.log((n1 > n2) || (upcaseWord == "water"))                           // outputs false

console.log("\nOR Test 2: Is (n1 > n2) || (upcaseWord.toLowerCase() == water)?")
console.log((n1 > n2) || (upcaseWord.toLowerCase() == "water"))             // outputs true


//Array Tests
let days = ["Mon", "Tue", "Wed", "Thur"]

//.includes() function to check
//need tsconfig.file
console.log("\nArray Test 1: Is Wed in 'days'?")
console.log(days.includes("Wed"))           //Outputs true

console.log("\nArray Test 1: Is Wed NOT in'days'?")
console.log(!days.includes("Wed"))          //Outputs false

console.log("\nArray Test 2: Is Fri in 'days'?")
console.log(days.includes("Fri"))          //Outputs false


