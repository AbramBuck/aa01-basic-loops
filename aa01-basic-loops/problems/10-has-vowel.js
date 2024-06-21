/*
Define a function hasVowel that takes in a string parameter. The function should
return a boolean, true if the string contains at least one vowel, false
otherwise.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
/* 
1. Declare a function called "hasVowel"
2. it needs to take a string parameter
3. it needs to evaluate if the string is a vowel
4. it needs to iterate through each index and check if it is a vowel
5. it needs to return true if it is and false if it isn't
*/

//Dog is string

function hasVowel(str) {
    let index = 0;
    let vowelCount = 0;
    let result;

    while (index <= str.length -1) {
        let letter = str[index];
        
        if ( letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
            vowelCount++;
            index++;
        } else {
            index++;
        }

        if (vowelCount >= 1) {
            result = true;
        } else {
            result = false;
        }
    }

    return result;
}


console.log(hasVowel('dog'));          // => true
console.log(hasVowel('conventional')); // => true
console.log(hasVowel('rhythm'));       // => false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = hasVowel;

