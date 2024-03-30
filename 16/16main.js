"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guestList2 = [
    "Sir Zia", "Ayrton Senna", "Jeff Bezos"
];
guestList2.forEach(guest => console.log(`Dear ${guest}, you have been invited to a dinner at Ghalib at
7pm, tomorrow.`));
console.log(" "); //spacing
console.log(`Dear Guests, I have just been informed that, 'Jeff Bezos' will not be attending the dinner tomorrow night,
I shall be inviting another guest shortly.`);
console.log(" "); //spacing
guestList2 = [
    "Sir Zia", "Ayrton Senna", "John Cena"
];
guestList2.forEach(guest => console.log(`Dear ${guest}, you have been invited to a dinner at Ghalib at
7pm, tomorrow.`));
console.log(" "); //spacing
console.log(`Dear Guests, good news! A bigger table has been found hence,
I shall be inviting a few more guests shortly.`);
console.log(" "); //spacing
//unshift() used to add one value at the starting index(front) of an array
guestList2.unshift("Charles Xavier");
//push() is used to add one value at the ending index(back) of an array
guestList2.push("Jeremy Clarkson");
//Add one value at the middle index of an array, divide the total no. of guests by 2 to get middle index
let middleIndex = Math.floor(guestList2.length / 2);
//splice() is used to add one value at any index of an array
// Syntax: .splice('IndexToAdd', 'IndexToRemove', "value")
guestList2.splice(middleIndex, 0, "Richard Hammond");
console.log(guestList2); //positions check
console.log(" "); //spacing
guestList2.forEach(guest => console.log(`Dear ${guest}, you have been invited to a dinner at Ghalib at
7pm, tomorrow.`));
