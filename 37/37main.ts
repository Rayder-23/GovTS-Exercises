function makeShirt(size:string = "Large", message: string = "I love TypeScript."){
    console.log(`You selected ${size} Shirt with "${message}" printed on the shirt.\n`)
}

//calling
makeShirt()
makeShirt("Medium")

makeShirt("Small", "I like Cars.")
