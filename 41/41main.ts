let magicianNames = [
    "Ali", "Jeff", "Ben"
]

function showMagicians (magicians:string[]) {
    magicians.forEach(name => console.log(`This Magician's name is ${name}.`))
}

showMagicians(magicianNames)