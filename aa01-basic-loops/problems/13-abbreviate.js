/*
Write a function abbreviate(word) that takes in a string arg. The function
should return a new string where all of its vowels are removed.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
/* SUMMARY 
1. write a function called abbreviate that takes stirng argument
2. it should start with an empty string
3. then there should be a loop that iterates through each index of the word
4. it should look to see if the character is not a vowel
5. when it finds a not vowel append it to the new stirng
6. repeat until the word it finished minus the vowels
*/


function abbreviate(str) {
    newStr = '';

    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        
        if (letter !== "a" && letter !== "e" && letter !== "i" && letter !== "o" && letter !== "u") {
            newStr += letter;
        }
    }
    return newStr;
}


console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = abbreviate;
