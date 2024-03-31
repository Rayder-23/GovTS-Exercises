let currentUsers = [
    "Alan", "Jeff", "Charles", "Admin", "Jeremy"
]

let newUsers = [
    "James", "John", "Jeff", "ALAN", "Ben"
]

// Alan and ALAN need to be regonised as same so convert all to lowercase then compare

// .some() is an inbuilt TypeScript function which is used to check for
// some element in the array which passes the test implemented by the provided function

newUsers.forEach(newU => {
    let compar:boolean = currentUsers.some(currentU => currentU.toLowerCase() === newU.toLowerCase())
    if (compar) {
        console.log(`Sorry, the username, ${newU} is unavailable. Please try again.`)
    }
    else if (!compar){
        console.log(`\tThe username, ${newU} is available.`)
    }
})