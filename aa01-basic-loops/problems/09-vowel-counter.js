/*
Define a function called countVowels, that takes in a lowercased word parameter
and returns the number of vowels in the word.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 

/*
1. Declare a function called "countVowels"
2. it needs to take in a lowercased word parameter call it lowerCaseStr
3. lowercase the word given
4. determine if each word if a vowel maybe check for those lowercase words specifically?
5. an Or operator that checks each vowel for an exact match
6. will need a vowelCount variable to hold the count of how many vowels the Or Operator detects 
5. it needs to return the number of vowels in the word given return the (vowelCount)
*/

function countVowels(str) {
    let lowerCaseStr = str.toLowerCase();
    let index = 0;
    let vowelCount = 0;
    
    while (index <= lowerCaseStr.length -1) {
        let letter = lowerCaseStr[index];

        if ( letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
            vowelCount++;
        }
        index++;   
    }
    
    return vowelCount;
}

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple"));    // => 2
console.log(countVowels("pizza"));    // => 2
console.log(countVowels("try"));      // => 0

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = countVowels;
