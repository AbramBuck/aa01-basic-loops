/*
Define a function getFirstVowel that takes in a string parameter and returns the
first vowel that appears sequentially in the string. If the string does not
contain a vowel, return null.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
/* SUMMARY:
1. Decalre a function called "getFirstVowel"
2. it needs to take in a string parameter
3. it needs to return the first vowel that appears squentially in the string
3.1. it needs to check each indicie to see if it is a vowel
3.2. if it finds a vowel return the first one found
3.3. if it doesn't just advance to the next index number
4. if the string does not contain a vowel return null if vowel counter has more than 0 return the 
*/

function getFirstVowel(str) {
    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        
        if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
            return letter;
        }
    }
    return null;
}


console.log(getFirstVowel('battery'));      // 'a'
console.log(getFirstVowel('tunnel'));       // 'u'
console.log(getFirstVowel('dog'));          // 'o'
console.log(getFirstVowel('conventional')); // 'o'
console.log(getFirstVowel('rhythm'));       // null
console.log(getFirstVowel('try'));          // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = getFirstVowel;
