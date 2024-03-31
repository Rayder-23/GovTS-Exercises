let magicianNames = [
    "Ali", "Jeff", "Ben"
]

function showMagicians (magicians:string[]) {
    magicians.forEach(name => console.log(`This Magician's name is ${name}.`))
}


function makeGreat (magicians:string[]){
    return magicians.map(name => `The Great ${name}`)
}
// above from 42main.ts

let greatMagicains = makeGreat(magicianNames)

console.log("Modified:")
showMagicians(greatMagicains)
console.log("\nOriginal:")
showMagicians(magicianNames)