function carInfo (maker:string, modelName:string, carEngine:string, carColour?:string){
    let car: {manufacturer:string, model:string, colour?:string, engine:string} = {        //object
        manufacturer:maker,
        model:modelName,
        engine:carEngine
    };
    if (carColour !== undefined){
        car.colour = carColour
    }
    return car;
}

let car1 = carInfo("Nissan", "GT-R34", "V8")
console.log(car1)
let car2 = carInfo("Mazda", "RX-7", "V8", "Yellow")
console.log(car2)