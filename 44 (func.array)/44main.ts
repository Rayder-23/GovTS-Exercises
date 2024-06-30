function makeSandwich (ingredients:string[]){
    ingredients.forEach(name => console.log(`${name},`))
    console.log("Will be added to your Sandwich.\n")
}

let items = [
    "Cheese", "Chicken"
]

let items2 = [
    "Cheese", "Chicken", "Mayo",
]

let items3 = [
    "Cheese", "Beef", "Onions", "Hot Sauce"
]
makeSandwich(items)
makeSandwich(items2)
makeSandwich(items3)
