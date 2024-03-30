let guestList = [
    "Charles Xavier",
    "Sir Zia",
    "Richard Hammond",
    "Ayrton Senna",
    "John Cena",
    "Jeremy Clarkson"
  ]

guestList.forEach(guest => console.log(`Dear ${guest}, you have been invited to a dinner at Ghalib at
7pm, tomorrow.`))
//above from 16main.ts

console.log(" ") //spacing
console.log(`Dear Guests, I have recieved some sad news, the bigger table will arrive on time hence,
I shall be removing some guests from the list shortly.`)
console.log(" ") //spacing

console.log(" ") //spacing

//while loop need
// .pop() function acts in the opposite of .push(), value from end is removed
while(guestList.length > 2) {
    let rGuest = guestList.pop()
    console.log(`Dear ${rGuest}, we are so sorry but we do not have the space to accomadate you at the dinner.`)
}

console.log(" ") //spacing

console.log(guestList) //positions check
console.log(" ") //spacing

guestList.forEach(guest => console.log(`Dear ${guest}, you are invited to the dinner.`))
console.log(" ") //spacing

while(guestList.length > 0) {
    guestList.pop()
}

console.log(guestList)
