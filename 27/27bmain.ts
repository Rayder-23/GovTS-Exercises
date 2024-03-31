let alienColour = "Yellow"

if (alienColour == "Green") {
    console.log("Congratulations! You earned 5 points for shooting down the alien.")     // fails
}
else if (alienColour == "Yellow") {           
    console.log("Congratulations! You earned 10 points.")                // passes
}
else if (alienColour == "Red") {           
    console.log("Congratulations! You earned 15 points.")                // fails
}