let age = Math.floor(Math.random()* 70 + 0)

if (age < 2) {
    console.log("This person is a Baby.")
}
else if ((age >= 2) && (age < 4)){
    console.log("This person is a Toddler")
}
else if ((age >= 4) && (age < 13)){
    console.log("This person is a Kid.")
}
else if ((age >= 13) && (age < 20)){
    console.log("This person is a Teenager.")
}
else if ((age >= 20) && (age < 65)){
    console.log("This person is an Adult.")
}
else if ((age >= 65)){
    console.log("This person is an Elder.")
}