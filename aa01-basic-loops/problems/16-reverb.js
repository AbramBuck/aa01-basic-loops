/*
Write a function reverb that accepts a word as an argument. The function should
return a new word where all letters that come after the last vowel (including
the vowel itself) are repeated at the end of the word. If the value passed in is
not a string, say someone passes in a number as an argument, then return null.

Vowels are the letters "a", "e", "i", "o", "u".

0. check if the passed parameter is a string. 
0.1. if it is not a string return null
1. function needs to return a new word 
2. all letters that come after the last vowel inclucing the vowel itself are repeated at the end of the word
3. need a variable to search for vowels
4. need to search for vowels starting from the end of the index instead of the front
5. the first vowel found will be the last vowel in the word
6. slice from the first vowel found to the end of the word and add it to the original word 
*/

// Your code here 
function reverb(str) {
    let vowels = "aeiouAEIOU";

    if (typeof str !== "string" ) {
        return null;
    } 
//Exmample String "Sandwich"
// i = 8. Keep going as long as i >= 0. Each iteration minus 1 from index

    for (let i = str.length;i >=0; i-- ) {
        let letter = str[i];
        //find the last vowel
        if (vowels.includes(letter)) {
            //after you find the last vowel slice from that vowel to the end of the word index
            let echoWord = str.slice(i,str.length);
            return str + echoWord;
        }
        
    }
    return str;
}

console.log(reverb("Sandwich"));
console.log(reverb('running')); // runninging
console.log(reverb('FAMILY'));  // FAMILYILY
console.log(reverb('trash'));   // trashash
console.log(reverb('DISH'));    // DISHISH
console.log(reverb('197393'));  // 197393
console.log(reverb(197393));    // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = reverb;
