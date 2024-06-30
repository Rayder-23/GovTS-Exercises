// A typescript object contains multiple types of data for one object
// First we need to make a interface, {} are used to define an object

interface car {
    carName: string;
    madeIn: string;
    kmDriven: number;
}

let car = {
    carName: "Nissan",
    madeIn: "Japan",
    kmDriven: 1000
}

console.log(car)