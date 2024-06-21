/*
Write a function sillyString that accepts a word as an argument. The functions
should return a new word where every vowel of the original word is followed by
'b' and that same vowel. For example, 'siren' would turn into 'sibireben'.

Vowels are the letters "a", "e", "i", "o", "u".

1. function needs to return a new word
2. for every vowel, the new word needs to be followed by b + orignal vowel 

*/


// Your code here 
function sillyString(str) {
    let newStr = "";
//Example word Sir
// i is 0, keep going when i >= string length. add 1 to index each iteration
    for (i = 0; i < str.length; i++ ) {
        let letter = str[i];

        // if the letter is in vowels
        if (letter !== "a" && letter !== "e" && letter !== "i" && letter !== "o" && letter !== "u" && letter !== "A" && letter !== "E" && letter !== "I" && letter !== "O" && letter !== "U") {
            //add the letter and a b to new string
            newStr += letter;
        } else {
            newStr += letter  + "b";
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
