/*
Write a function sillyString that accepts a word as an argument. The functions
should return a new word where every vowel of the original word is followed by
'b' and that same vowel. For example, 'siren' would turn into 'sibireben'.

Vowels are the letters "a", "e", "i", "o", "u".

1. function needs to return a new word
2. for every vowel, the new word needs to be followed by b + orignal vowel 

*/

/*
// Your code here 
function sillyString(str) {
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        let letterAndB = str[i] += "b";

        // Check if the letter is a vowel
        if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" ||
            letter === "A" || letter === "E" || letter === "I" || letter === "O" || letter === "U") {
            // If it is a vowel, add the letter followed by 'b'
            newStr += letterAndB;
        } else {
            // If it is not a vowel, just add the letter
            newStr += letter;
        }
    }
    return newStr;
}
*/
function sillyString(str) {
    let newStr = "";
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        let letter = str[i];

        // Check if the current character is a vowel
        if (vowels.includes(letter)) {
            // Check if the previous character was not a vowel to avoid adding 'b' twice for consecutive vowels
            if (i === 0 || !vowels.includes(str[i - 1])) {
                newStr += letter + "b";
            } else {
                newStr += letter;
            }
        } else {
            newStr += letter;
        }
    }
    return newStr;
}

console.log(sillyString("Sir"));
console.log(sillyString('stop'));       // stobop
console.log(sillyString('that'));       // thabat
console.log(sillyString('can'));        // caban
console.log(sillyString('cats'));       // cabats
console.log(sillyString('italy'));      // ibitabaly
console.log(sillyString('scooter'));    // scobooboteber

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = sillyString;
