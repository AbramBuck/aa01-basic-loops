/*
Write a method caesarCipher(string, num) that takes in a string and a number.
The function should return a new string where every character of the original is
shifted num characters in the alphabet.

Feel free to use this variable: let alphabet = "abcdefghijklmnopqrstuvwxyz";
*/
/* Failed Attempt
function caesarCipher(str, num) {
    // Your code here 
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        
        if (alphabet[i] === str[i]) {
            newStr += alphabet[i + 1];
        } else {
            newStr += str[i];
        }
    }
    
    return newStr;
}
*/
function caesarCipher(str, num) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newStr = "";
    num = num % 26; // Ensure the shift is within the alphabet length

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let isUpperCase = char === char.toUpperCase();
        char = char.toLowerCase();
        
        let index = alphabet.indexOf(char);
        if (index === -1) {
            // Character is not in the alphabet, keep it as is
            newStr += str[i];
        } else {
            // Find the new index with wrapping
            let newIndex = (index + num) % 26;
            if (newIndex < 0) {
                newIndex += 26; // Handle negative shift
            }
            let newChar = alphabet[newIndex];
            if (isUpperCase) {
                newChar = newChar.toUpperCase();
            }
            newStr += newChar;
        }
    }
    
    return newStr;
}


 console.log(caesarCipher("apple", 1)); // "bqqmf"
 console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
 console.log(caesarCipher("zebra", 4)); // "difve"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = caesarCipher;
