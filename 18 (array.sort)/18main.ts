let placesVisit = [
    "Japan", "Germany", "Austrialia", "United Kingdom", "America"
]

console.log("Original Order: ", placesVisit)
console.log(" ") //spacing

// make a copy of the orignal array and change that
// [...nameofArray] to make copy
// then use .sort() to sort in alphabetical order
console.log("Alphabetical Order: ",  [...placesVisit].sort())
console.log(" ") //spacing

console.log("Original Order Check: ", placesVisit)
console.log(" ") //spacing

//.reverse() function for reversing order
console.log("Reserve-Alphabetical Order: ",  [...placesVisit].sort().reverse())
console.log(" ") //spacing

console.log("Original Order Check: ", placesVisit)
console.log(" ") //spacing

console.log("Orginal Reversed: ", placesVisit.reverse())
console.log(" ") //spacing

console.log("Orginal Un-Reversed: ", placesVisit.reverse())
console.log(" ") //spacing

console.log("Alphabetical Order 2: ",  placesVisit.sort())
console.log(" ") //spacing

console.log("Reserve-Alphabetical Order 2: ",  placesVisit.reverse())
console.log(" ") //spacing