/*
Write a function vowelCipher that takes in a string and returns a new string
where every vowel becomes the next vowel in the alphabet.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
function vowelCipher(str) {
    let newStr = "";
//Example word Sir
// i is 0, keep going when i >= string length. add 1 to index each iteration
    for (i = 0; i < str.length; i++ ) {
        let letter = str[i];

        // if the letter is in vowels
        if (letter === "a") {
            //add the letter but make it the next vowel 
            newStr += "e";

        } else if (letter === "e") {
            newStr += "i";

        } else if (letter === "i") {
            newStr += "o";

        } else if (letter === "o") {
            newStr += "u";

        } else if (letter === "u") {
            newStr += "a";

        } else {
            newStr += letter;
        }
    }
    return newStr;
}


 console.log(vowelCipher("bootcamp")); // "buutcemp"
 console.log(vowelCipher("paper cup")); // "pepir cap"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = vowelCipher;
