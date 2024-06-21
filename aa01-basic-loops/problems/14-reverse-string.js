/*
Write a function reverseString(str) that takes in a string. The function should
return a new string where the order of the characters is reversed.
*/

// Your code here 

function reverseString(str) {
    newStr = "";
//If word was dog it would have 2 indicies as long as indicies greater than or equal to 0 keep going. Minus one each time
    for (i = str.length - 1; i >= 0; i--) {
        // let letter equal the current string index
        let letter = str[i];
        //mush the stirng index into new string in the order they are being tareted, which is reversed based on the starting index
        newStr += letter;
    }
    //let's see the new string. 
    return newStr;
}

console.log(reverseString('fish')); // 'hsif'
console.log(reverseString('marathon')); // 'nohtaram'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = reverseString;
