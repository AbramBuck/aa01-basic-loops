/*
Define a function logBetween that takes in two number parameters. The first
number parameter represents a low number and the second represents a high
number. The function should print every number from the low number to the
high number, inclusive. Inclusive means that the range includes the low and
high numbers.
*/

// Your code here 
/* SUMMARY: write a function that takes in 2 numbers. The first number is a low number, the second is a high number.
The function should print every number from the low number to the high number inclusively.
1. Declare a function named "logBetween"
2. It needs to have 2 parameters. Name them lowNum and highNum
3. the function needs to take the two numbers and find each number in between the lowNum and highNum.
4. It needs to return all the numbers as well as the low and high numbers in the range.
 */

function logBetween(lowNum, highNum) {
    for (let range = lowNum; range <= highNum; range++) {
        console.log(range);
    }
}

logBetween(12, 19);
console.log("------NEXT ENTRY------");
logBetween(-1, 2);
/* prints out:
-1
0
1
2
*/

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = logBetween;
