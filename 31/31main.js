"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userNames = [];
//if lenght is 0 means array is empty
if (userNames.length == 0) {
    console.log("We need to find some users!");
}
else if (userNames.length != 0) {
    userNames.forEach(name => {
        if (name == "Admin") {
            console.log("\nHello Admin, would you like to see a status report?\n");
        }
        else if (name != "Admin") {
            console.log(`Welcome back ${name}, thanks for logging in again.`);
        }
    });
}
