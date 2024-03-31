let userNames = [
    "Alan", "Jeff", "Charles", "Admin", "Jeremy"
]

userNames.forEach(name => 
    {if (name == "Admin"){
        console.log("\nHello Admin, would you like to see a status report?\n")
    }
    else if (name != "Admin"){
        console.log(`Welcome back ${name}, thanks for logging in again.`)
    }}
    )