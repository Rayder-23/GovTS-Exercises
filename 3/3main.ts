let name:string = "Jeff bezos"
console.log(name.toUpperCase())     // JEFF BEZOS

console.log(name.toLowerCase())     // jeff bezos

//str(sting) and word are parameters
// First we lowercase the string and use .split(' ') to split the string into an array

// Then we use the .map() function to map over the array which will go through each element in the array,
// in this case words

// Then the .replace(word[0], word[0].toUppercase) to replace the first letter of each word to an
// uppercase version of it

// Then we use the .join(' ') function to join all the words together

function titleCase(str:string) {           //str = "Jeff bezos"
    
    return str.toLowerCase().split(' ').map(function(word) {        //str = ["Jeff", "bezos"]
        return word.replace(word[0], word[0].toUpperCase());        // bezos.replace(b, b.toUpperCase()), returns "Bezos"
    }).join(' ');                                                     
}
console.log(titleCase(name))        // Jeff Bezos 