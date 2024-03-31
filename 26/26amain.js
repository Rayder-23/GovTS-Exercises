"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let alienColour = "Green";
if (alienColour == "Green") {
    console.log("Congratulations! You earned 5 points for shooting down the alien."); // passes
}
else if (alienColour != "Green") {
    console.log("Congratulations! You earned 10 points."); // fails
}
