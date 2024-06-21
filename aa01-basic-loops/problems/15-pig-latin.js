/*
Pig Latin is a fun take on the English language where you move any consonant
cluster from the start of the word to the end of the word; when words begin on a
vowel, you simply add "-yay".

Vowels are the letters "a", "e", "i", "o", "u".

Write a function pigLatinWord that takes in a word string and translates the
word into Pig Latin. For this problem use the String's slice() method. The
slice() method extracts a section of a string and returns it as a string.
Hint: Remember the String.includes method!

So the two rules for our version of Pig Latin are:
1. For words that start with a vowel, add 'yay' to the end of the word.
2. For words that start with a non-vowel, move all letters that come **before
   the first vowel** to the **end of the word** then add 'ay'
*/
/*SUMMARY:
0. need an empty string variable
0.1 need a vowel variable with "aeiou" to check against
1. need to check if the word starts with a non-vowel (can probably just bang(!) the vowel variable for that)
2. if it does, move all the letters that come before the first vowel to the end of the word 
2. can build a loop called "firstPart" that iterates through the word until it hits a vowel 
3. then add "ay" to it (will need to build a new string)
4. need to check if given strings' first letter is a vowel with the variable
5. if it does start with a vowel, add the word and 'yay' to a new string
*/
/*
isItVowel
if index is <= 0 keep going. add 1 each time
if a word starts with a vowel newstring is word + yay

first part

//Lets say the word is Bridge

find frist part "Br" 
if not a vowel add it to new String
stop when you get a vowel

last Part could be slice (firstpart[i] + 1) = dge
str =  Bridge
addYay = "yay"
newString would be lastPart + firstPart + adday;
*/
function pigLatinWord(word) {
    let vowels = "aeiou";
    if (vowels.includes(word[0])) {
        return word + "yay";
    } 

    for (let index = 0; index < word.length; index++) {
        let letter = word[index];

        if (vowels.includes(letter)) {
            let firstPart = word.slice(index);
            let secondPart = word.slice(0,index);
            return firstPart + secondPart + "ay";
        }
     }
     return word;
};

console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"
console.log(pigLatinWord("zzz")); // => "zzz"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = pigLatinWord;
