let magicianNames = [
    "Ali", "Jeff", "Ben"
]

function showMagicians (magicians:string[]) {
    magicians.forEach(name => console.log(`This Magician's name is ${name}.`))
}
// above from 41main.ts

//need to use map, which overwrites/adds to the value
// and return
function makeGreat (magicians:string[]){
    return magicians.map(name => `The Great ${name}`)
}

//need to save the values
magicianNames = makeGreat(magicianNames)

showMagicians(magicianNames)