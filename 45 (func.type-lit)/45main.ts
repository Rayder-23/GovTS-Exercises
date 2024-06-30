function carInfo (maker:string, modelName:string, carEngine:string, 
        carColour: "Red" | "Yellow" | "Blue" | "Orange" | "Purple"){
    let car: {manufacturer:string, model:string, colour?:string, engine:string} = {       //object
        manufacturer:maker,
        model:modelName,
        engine:carEngine
    };
    if (carColour != undefined){
        car.colour = carColour
    }
    return car;
}

let car1 = carInfo("Mazda", "RX-7", "V8", "Yellow")   // Yellow is an acceptable colour
console.log(car1)


/* let car2 = carInfo("Nissan", "GT-R34", "V8", "2005")   // cannot use "2005" not a colour
console.log(car2) */
